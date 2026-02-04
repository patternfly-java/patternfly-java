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

import org.jboss.elemento.Callback;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.handler.ComponentHandler;
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
public class Wizard extends BaseComponent<HTMLElement, Wizard> implements HasItems<HTMLElement, Wizard, WizardStep> {

    // ------------------------------------------------------ factory

    public static Wizard wizard() {
        return new Wizard();
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Wizard.class.getName());

    private final WizardContext context;
    private final Map<String, WizardStep> items;
    private final List<ComponentHandler<Wizard>> cancelHandler;
    private final List<ComponentHandler<Wizard>> finishHandler;
    private final List<BiConsumer<Wizard, WizardStep>> onAdd;
    private final List<BiConsumer<Wizard, WizardStep>> onRemove;
    private final List<WizardStepChangeHandler> stepChangeHandlers;
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
        this.cancelHandler = new ArrayList<>();
        this.finishHandler = new ArrayList<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();
        this.stepChangeHandlers = new ArrayList<>();

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
            if ((progressive && current == null) || (!progressive && (item.type == step || item.type == review))) {
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
                item.previous = tail;
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
     * Progressively shows steps, where all steps following the active step are hidden. Defaults to false. Must be called
     * <em>before</em> adding steps.
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
     * Disables steps that haven't been visited. Defaults to false. Must be called <em>before</em> adding steps.
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

    public Wizard onCancel(ComponentHandler<Wizard> handler) {
        this.cancelHandler.add(handler);
        return this;
    }

    public Wizard onFinish(ComponentHandler<Wizard> handler) {
        this.finishHandler.add(handler);
        return this;
    }

    @Override
    public Wizard onRemove(BiConsumer<Wizard, WizardStep> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

    public Wizard onStepChange(WizardStepChangeHandler stepChangeHandler) {
        this.stepChangeHandlers.add(stepChangeHandler);
        return this;
    }

    // ------------------------------------------------------ api

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
            if (item.previous != null) {
                item.previous.next = item.next;
            } else {
                head = item.next;
            }
            if (item.next != null) {
                item.next.previous = item.previous;
            } else {
                tail = item.previous;
            }
            if (current == item) {
                current = item.next != null ? item.next : item.previous;
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
        footer.disableButtons();
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
            WizardStep previousStep = previousEnabledStep(current.previous);
            if (previousStep != null) {
                navigateBack(previousStep);
            }
        }
    }

    public void next() {
        if (current != null) {
            WizardStep nextStep = nextEnabledStep(current.next);
            if (nextStep != null) {
                navigateForward(nextStep);
            } else if (current == tail || current.type == review) {
                finish();
            }
        }
    }

    public void select(String identifier) {
        select(item(identifier));
    }

    public void select(WizardStep step) {
        if (step != null && step != current && !step.disabled) {
            if (current != null) {
                if (isBefore(step, current)) {
                    navigateBack(step);
                } else if (isAfter(step, current)) {
                    navigateForward(step);
                }
            } else {
                navigateTo(step);
            }
        }
    }

    public void cancel() {
        for (ComponentHandler<Wizard> handler : cancelHandler) {
            handler.handle(new Event(""), this);
        }
    }

    // ------------------------------------------------------ internal

    private void navigateBack(WizardStep step) {
        if (current.previousHandler != null) {
            if (current.previousHandler.onPrevious(this, current, step)) {
                navigateTo(step);
            }
        } else if (current.previousPromise != null) {
            footer.disableButtons();
            current.previousPromise.onPrevious(this, current, step)
                    .then(proceed -> {
                        if (proceed) {
                            navigateTo(step);
                        }
                        return null;
                    })
                    .catch_(error -> null)
                    .finally_(() -> footer.updateButtons(size(), head, current, tail));
        } else {
            navigateTo(step);
        }
    }

    private void navigateForward(WizardStep step) {
        forwardThen(() -> navigateTo(step));
    }

    private void finish() {
        forwardThen(() -> {
            for (ComponentHandler<Wizard> handler : finishHandler) {
                handler.handle(new Event(""), this);
            }
        });
    }

    private void forwardThen(Callback callback) {
        if (current.nextHandler != null) {
            if (current.nextHandler.onNext(this, current, null)) {
                callback.call();
            }
        } else if (current.nextPromise != null) {
            footer.disableButtons();
            current.nextPromise.onNext(this, current, null)
                    .then(proceed -> {
                        if (proceed) {
                            callback.call();
                        }
                        return null;
                    })
                    .catch_(error -> null)
                    .finally_(() -> footer.updateButtons(size(), head, current, tail));
        } else {
            callback.call();
        }
    }

    private void navigateTo(WizardStep step) {
        if (step != null && step != current && !step.disabled) {
            WizardStep currentBackup = current;
            if (progressive && current != null) {
                if (isBefore(step, current)) {
                    // Remove all previous nav items
                    for (WizardStep remove = step.next; remove != null; remove = remove.next) {
                        nav.removeItem(remove.identifier());
                    }
                } else if (isAfter(step, current)) {
                    // Add all remaining nav items
                    for (WizardStep add = current.next; add != null; add = add.next) {
                        nav.add(new WizardNavItem(add.identifier(), add.title));
                        if (add == step) {
                            break;
                        }
                    }
                }
            }
            if (current != null && current.leaveHandler != null) {
                current.leaveHandler.onLeave(this, current);
            }
            current = step;
            current.visited = true;
            toggle(modifier(finished), step.type == progress || step.type == summary);
            for (WizardStep ws : this) {
                ws.select(current == ws);
            }
            nav.select(current.identifier());
            footer.updateButtons(size(), head, current, tail);
            if (current.enterHandler != null) {
                current.enterHandler.onEnter(this, current);
            }
            for (WizardStepChangeHandler handler : stepChangeHandlers) {
                handler.onStepChange(this, currentBackup, current);
            }
        }
    }

    private WizardStep previousEnabledStep(WizardStep from) {
        WizardStep step = from;
        while (step != null && step.disabled) {
            step = step.previous;
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

    private boolean isBefore(WizardStep start, WizardStep end) {
        if (start == null || end == null) {
            return false;
        }
        WizardStep current = start;
        while (current != null) {
            if (current == end) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    private boolean isAfter(WizardStep start, WizardStep end) {
        if (start == null || end == null) {
            return false;
        }
        WizardStep current = start;
        while (current != null) {
            if (current == end) {
                return true;
            }
            current = current.previous;
        }
        return false;
    }
}
