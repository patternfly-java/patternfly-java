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
import java.util.function.BiConsumer;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.Closeable;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.handler.CloseHandler;
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
import static org.patternfly.component.wizard.WizardStepType.review;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Aria.label;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.style.Classes.component;
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

    private final LinkedHashMap<String, WizardStep> items;
    private final List<CloseHandler<Wizard>> closeHandler;
    private final List<BiConsumer<Wizard, WizardStep>> onAdd;
    private final List<BiConsumer<Wizard, WizardStep>> onRemove;
    private final List<BiConsumer<Wizard, WizardStep>> onSelect;
    private final List<ComponentHandler<Wizard>> backHandler;
    private final List<ComponentHandler<Wizard>> nextHandler;
    private final List<ComponentHandler<Wizard>> cancelHandler;
    private final List<ComponentHandler<Wizard>> finishHandler;
    private final HTMLContainerBuilder<HTMLDivElement> innerWrap;
    private boolean progressive;
    private boolean visitRequired;
    private WizardStep currentStep;
    private WizardHeader header; // optional
    private HTMLContainerBuilder<HTMLButtonElement> toggleButton;
    final WizardNav nav;
    final WizardFooter footer;

    Wizard() {
        super(ComponentType.Wizard, div().css(component(wizard)).element());
        this.items = new LinkedHashMap<>();
        this.closeHandler = new ArrayList<>();
        this.onAdd = new ArrayList<>();
        this.onSelect = new ArrayList<>();
        this.onRemove = new ArrayList<>();
        this.backHandler = new ArrayList<>();
        this.nextHandler = new ArrayList<>();
        this.cancelHandler = new ArrayList<>();
        this.finishHandler = new ArrayList<>();

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
        internalAddStep(item);
        onAdd.forEach(bc -> bc.accept(this, item));
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

    public Wizard onSelect(BiConsumer<Wizard, WizardStep> onSelect) {
        this.onSelect.add(onSelect);
        return this;
    }

    @Override
    public Wizard onRemove(BiConsumer<Wizard, WizardStep> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

    public Wizard onBack(ComponentHandler<Wizard> backHandler) {
        this.backHandler.add(backHandler);
        return this;
    }

    public Wizard onNext(ComponentHandler<Wizard> nextHandler) {
        this.nextHandler.add(nextHandler);
        return this;
    }

    public Wizard onCancel(ComponentHandler<Wizard> cancelHandler) {
        this.cancelHandler.add(cancelHandler);
        return this;
    }

    public Wizard onFinish(ComponentHandler<Wizard> finishHandler) {
        this.finishHandler.add(finishHandler);
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
        WizardStep item = items.get(identifier);
        if (item != null) {
            internalRemoveStep(item, true);
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        for (WizardStep step : this) {
            internalRemoveStep(step, false);
            onRemove.forEach(bc -> bc.accept(this, step));
        }
        updateState();
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

    public WizardStep currentStep() {
        return currentStep;
    }

    // ------------------------------------------------------ state api

    public void back(Event e) {
        for (ComponentHandler<Wizard> handler : backHandler) {
            handler.handle(e, this);
        }
        updateState();
    }

    public void next(Event e) {
        for (ComponentHandler<Wizard> handler : nextHandler) {
            handler.handle(e, this);
        }
        updateState();
    }

    public void cancel(Event e) {
        for (ComponentHandler<Wizard> handler : cancelHandler) {
            handler.handle(e, this);
        }
        updateState();
    }

    public void select(String identifier) {
        internalSelectStep(item(identifier));
        for (BiConsumer<Wizard, WizardStep> onSelect : onSelect) {
            WizardStep step = item(identifier);
            if (step != null) {
                onSelect.accept(this, step);
                updateState();
            }
        }
    }

    public void finish(Event e) {
        for (ComponentHandler<Wizard> handler : finishHandler) {
            handler.handle(e, this);
        }
        updateState();
    }

    // ------------------------------------------------------ internal

    private void internalAddStep(WizardStep step) {
        // This is the only place where a new nav item may be created!
        // We need to make sure that the same identifiers are used!
        WizardNavItem navItem = new WizardNavItem(step.identifier(), step.title);

        boolean firstStep = isEmpty();
        items.put(step.identifier(), step);
        innerWrap.add(step);
        if (visitRequired && !firstStep) {
            navItem.disabled(true);
        }
        nav.add(navItem);
        if (firstStep) {
            internalSelectStep(step);
        } else {
            step.select(false);
        }
    }

    private void internalSelectStep(WizardStep step) {
        nav.select(step.identifier());
        for (WizardStep currentStep : this) {
            currentStep.select(step.identifier().equals(currentStep.identifier()));
        }
        this.currentStep = step;
        updateState();
    }

    private void internalRemoveStep(WizardStep step, boolean updateState) {
        // TODO Handle current step removal
        failSafeRemoveFromParent(step);
        if (updateState) {
            updateState();
        }
    }

    private void updateState() {
        // no steps -> no update!
        if (currentStep != null && !isEmpty()) {
            boolean isFirstStep = items.firstEntry().getValue().identifier().equals(currentStep.identifier());
            if (isFirstStep) {
                footer.firstStep();
            } else {
                WizardStep reviewStep = typeStep(review);
                boolean isReviewStep = reviewStep != null && reviewStep.identifier().equals(currentStep.identifier());
            }
        }
    }

    private WizardStep firstStep() {
        if (isEmpty()) {
            return null;
        }
        return items.firstEntry().getValue();
    }

    private WizardStep typeStep(WizardStepType type) {
        for (WizardStep step : this) {
            if (step.type == type) {
                return step;
            }
        }
        return null;

    }
}
