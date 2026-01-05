/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.component.wizard;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.Closeable;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.handler.CloseHandler;
import org.patternfly.style.Classes;
import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.component.wizard.WizardStepType.progress;
import static org.patternfly.component.wizard.WizardStepType.review;
import static org.patternfly.component.wizard.WizardStepType.step;
import static org.patternfly.component.wizard.WizardStepType.summary;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Aria.label;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.finished;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.outerWrap;
import static org.patternfly.style.Classes.toggle;
import static org.patternfly.style.Classes.wizard;

/**
 * A wizard provides a guided workflow that offers a path to complete a task, create an object or objects, or finish a series of
 * steps for some other outcome. Wizards should incite trust in the user and guide them through an otherwise overwhelming
 * experience.
 *
 * @see <a href= "https://www.patternfly.org/components/wizard">https://www.patternfly.org/components/wizard</a>
 */
public class Wizard extends BaseComponent<HTMLElement, Wizard> implements
        Closeable<HTMLElement, Wizard>,
        HasItems<HTMLElement, Wizard, WizardStep> {

    // ------------------------------------------------------ factory

    public static Wizard wizard() {
        return new Wizard();
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Wizard.class.getName());

    private final WizardContext context;
    private final Map<String, WizardStep> items;
    private final List<CloseHandler<Wizard>> closeHandler;
    private final List<BiConsumer<Wizard, WizardStep>> onAdd;
    private final List<BiConsumer<Wizard, WizardStep>> onRemove;
    private final HTMLContainerBuilder<HTMLDivElement> innerWrap;
    private final HTMLContainerBuilder<HTMLButtonElement> toggleButton;
    private boolean progressive;
    private boolean visitRequired;
    private WizardStep head;
    private WizardStep current;
    private WizardStep tail;
    private WizardHeader header; // optional
    final WizardNav nav;
    final WizardFooter footer;

    Wizard() {
        super(ComponentType.Wizard, div().css(component(wizard)).element());
        this.context = new WizardContext(this);
        this.items = new LinkedHashMap<>();
        this.closeHandler = new ArrayList<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();

        add(toggleButton = button().css(component(wizard, toggle))
                .aria(label, "Wizard toggle")
                .aria(expanded, false)); // TODO Add support for toggle on small screens
        add(div().css(component(wizard, outerWrap))
                .add(innerWrap = div().css(component(wizard, Classes.innerWrap))
                        .add(nav = new WizardNav()))
                .add(footer = new WizardFooter()));

        // all wizard subcomponents need to know about their wizard!
        storeComponent();
    }

    // ------------------------------------------------------ add

    @Override
    public Wizard add(WizardStep item) {
        if (items.containsKey(item.identifier())) {
            logger.warn("Wizard '%o' already contains step with identifier '%s'.", element(), item.identifier());
        } else {
            WizardNavItem navItem = null;
            if (item.type == step || item.type == review) {
                // This is the only place where a new nav item may be created!
                // We need to make sure that the same identifiers are used!
                navItem = new WizardNavItem(item.identifier(), item.title);
                if (item.disabled) {
                    navItem.disabled(true);
                }
                nav.add(navItem);
            }
            items.put(item.identifier(), item);
            innerWrap.add(item);
            if (tail == null) {
                head = tail = item;
            } else {
                tail.next = item;
                item.prev = tail;
                tail = item;
            }
            if (current == null) {
                select(item);
            } else {
                item.select(false);
                if (visitRequired && navItem != null) {
                    navItem.disabled(true);
                }
            }
            onAdd.forEach(bc -> bc.accept(this, item));
        }
        return this;
    }

    public Wizard addHeader(WizardHeader header) {
        return add(header);
    }

    // override to ensure internal wiring
    public Wizard add(WizardHeader header) {
        insertFirst(element(), header.element());
        this.header = header;
        return this;
    }

    // ------------------------------------------------------ builder

    public Wizard height(int height) {
        return style("--pf-v6-c-wizard--Height", height + "px");
    }

    /** Same as {@linkplain #progressive(boolean) progressive(true)} */
    public Wizard progressive() {
        return progressive(true);
    }

    /**
     * Progressively shows steps, where all steps following the active step are hidden. Defaults to false.
     */
    public Wizard progressive(boolean progressive) {
        this.progressive = progressive;
        return this;
    }

    /** Same as {@linkplain #visitRequired(boolean) visitRequired(true)} */
    public Wizard visitRequired() {
        return visitRequired(true);
    }

    /**
     * Disables steps that haven't been visited. Defaults to false.
     */
    public Wizard visitRequired(boolean visitRequired) {
        this.visitRequired = visitRequired;
        return this;
    }

    @Override
    public Wizard that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public Wizard onAdd(BiConsumer<Wizard, WizardStep> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public Wizard onClose(CloseHandler<Wizard> closeHandler) {
        this.closeHandler.add(closeHandler);
        return this;
    }

    @Override
    public Wizard onRemove(BiConsumer<Wizard, WizardStep> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            // Nothing to do here. If the wizard is wrapped in a modal,
            // the modal must close the wizard.
            fireEvent(this, closeHandler, event, fireEvent);
        }
    }

    @Override
    public Iterator<WizardStep> iterator() {
        return items.values().iterator();
    }

    @Override
    public int size() {
        return items.size();
    }

    @Override
    public boolean isEmpty() {
        return items.isEmpty();
    }

    @Override
    public boolean contains(String identifier) {
        return items.containsKey(identifier);
    }

    @Override
    public WizardStep item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void removeItem(String identifier) {
        nav.removeItem(identifier);
        WizardStep item = items.remove(identifier);
        if (item != null) {
            failSafeRemoveFromParent(item);
            if (item.prev != null) {
                item.prev.next = item.next;
            } else {
                head = item.next;
            }
            if (item.next != null) {
                item.next.prev = item.prev;
            } else {
                tail = item.prev;
            }
            if (current == item) {
                current = item.next != null ? item.next : item.prev;
                select(current);
            }
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        nav.clear();
        removeChildrenFrom(innerWrap);
        head = tail = current = null;
        Iterator<WizardStep> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            WizardStep item = iterator.next();
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
        footer.disabled();
    }

    public WizardContext context() {
        return context;
    }

    public WizardHeader header() {
        return header;
    }

    public WizardNav nav() {
        return nav;
    }

    public WizardFooter footer() {
        return footer;
    }

    public WizardStep firstStep() {
        return head;
    }

    public WizardStep lastStep() {
        return tail;
    }

    public WizardStep currentStep() {
        return current;
    }

    // ------------------------------------------------------ navigation

    public void previous() {
        if (current != null) {
            WizardStep previousStep = previousEnabledStep(current.prev);
            if (previousStep != null) {
                if (previousStep.previousHandler != null) {
                    if (previousStep.previousHandler.onPrevious(this, current, previousStep)) {
                        select(previousStep);
                    }
                } else if (previousStep.previousPromise != null) {
                    footer.disabled();
                    previousStep.previousPromise.onPrevious(this, current, previousStep)
                            .then(p0 -> {
                                select(previousStep);
                                return null;
                            })
                            .catch_(error -> null)
                            .finally_(footer::restore);
                } else {
                    select(previousStep);
                }
            }
        }
    }

    public void next() {
        if (current != null) {
            WizardStep nextStep = nextEnabledStep(current.next);
            if (nextStep != null) {
                if (nextStep.nextHandler != null) {
                    if (nextStep.nextHandler.onNext(this, current, nextStep)) {
                        select(nextStep);
                    }
                } else if (nextStep.nextPromise != null) {
                    footer.disabled();
                    nextStep.nextPromise.onNext(this, current, nextStep)
                            .then(p0 -> {
                                select(nextStep);
                                return null;
                            })
                            .catch_(error -> null)
                            .finally_(footer::restore);
                } else {
                    select(nextStep);
                }
            }
        }
    }

    public void select(String identifier) {
        select(item(identifier));
    }

    public void select(WizardStep step) {
        if (step != null && !step.disabled) {
            if (current != null && current.leaveHandler != null) {
                current.leaveHandler.onLeave(this, current);
            }
            current = step;
            current.visited = true;
            toggle(modifier(finished), step.type == progress || step.type == summary);
            for (WizardStep ws : this) {
                ws.select(current.identifier().equals(ws.identifier()));
            }
            nav.select(current.identifier());
            if (current == head) {
                footer.firstStep();
            } else if (current == tail || current.type == review) {
                footer.reviewStep();
            } else if (size() > 1) {
                footer.middleStep();
            }
            if (current.enterHandler != null) {
                current.enterHandler.onEnter(this, current);
            }
        }
    }

    public void cancel() {
        close();
    }

    // ------------------------------------------------------ internal

    private WizardStep previousEnabledStep(WizardStep from) {
        WizardStep step = from;
        while (step != null && step.disabled) {
            step = step.prev;
        }
        return step;
    }

    private WizardStep nextEnabledStep(WizardStep from) {
        WizardStep step = from;
        while (step != null && step.disabled) {
            step = step.next;
        }
        return step;
    }
}
