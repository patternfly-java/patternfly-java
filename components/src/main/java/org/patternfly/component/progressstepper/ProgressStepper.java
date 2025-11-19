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
package org.patternfly.component.progressstepper;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;

import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.core.Aria;
import org.patternfly.style.Modifiers.Center;
import org.patternfly.style.Modifiers.Compact;
import org.patternfly.style.Modifiers.Vertical;

import elemental2.dom.HTMLOListElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.ol;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.list;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.progressStepper;

/**
 * A progress stepper displays a timeline of tasks in a workflow and tracks a
 * user's progress through the workflow.
 *
 * The navigation semantics use a sentinel index interval of [-1, size]:
 * <ul>
 * <li><strong>-1</strong> &rarr; underflow / before first element (no current
 * step)</li>
 * <li><strong>0..n-1</strong> &rarr; valid current step indices</li>
 * <li><strong>size()</strong> &rarr; overflow / after last element (no current
 * step)</li>
 * </ul>
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/progress-stepper/">https://www.patternfly.org/components/progress-stepper/</a>
 */
public class ProgressStepper extends BaseComponent<HTMLOListElement, ProgressStepper>
        implements Center<HTMLOListElement, ProgressStepper>, Compact<HTMLOListElement, ProgressStepper>,
        HasItems<HTMLOListElement, ProgressStepper, ProgressStep>, Vertical<HTMLOListElement, ProgressStepper> {

    // ------------------------------------------------------ factory

    public static ProgressStepper progressStepper() {
        return new ProgressStepper();
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(ProgressStepper.class.getName());

    private final Map<String, ProgressStep> progressStepperMap;
    private final List<ProgressStep> steps;

    private int currentIndex = -1; // [-1, steps.size()]

    ProgressStepper() {
        super(ComponentType.ProgressStepper, ol().css(component(progressStepper))
                .attr(role, list)
                .element());
        this.progressStepperMap = new LinkedHashMap<>();
        this.steps = new ArrayList<>(); // needs to be synced with Map#values()
    }

    // ------------------------------------------------------ builder

    @Override
    public ProgressStepper add(ProgressStep item) {
        addToCollections(item);
        element().appendChild(item.element());
        return this;
    }

    @Override
    public ProgressStepper that() {
        return this;
    }

    // ------------------------------------------------------ navigation

    /**
     * Selects the first step (index 0) if available.
     * Does nothing if there are no steps or the first step is already current.
     *
     * @return this instance
     */
    public ProgressStepper first() {
        return first(s -> {
        }, s -> {
        });
    }

    /**
     * Selects the first step (index 0) if available.
     * Previous current (if any) is cleared, then the first step is marked current.
     * No change if empty or already at index 0.
     *
     * @param actionForTheFirstStep           invoked with the first step after it
     *                                        becomes current
     * @param actionForThePreviousCurrentStep invoked with the previous current step
     *                                        after it is cleared
     * @return this instance
     */
    public ProgressStepper first(Consumer<ProgressStep> actionForTheFirstStep,
            Consumer<ProgressStep> actionForThePreviousCurrentStep) {
        if (steps.isEmpty()) {
            logger.warn("No steps available to set as first.");
            return this;
        }
        if (currentIndex == 0) {
            logger.warn("Already at the first step.");
            return this;
        }
        // Clear previous current if it was a valid step
        if (isSomeStepCurrent()) {
            actionForThePreviousCurrentStep.accept(steps.get(currentIndex).current(false));
        }
        currentIndex = 0;
        actionForTheFirstStep.accept(steps.get(currentIndex).current(true));
        return this;
    }

    /**
     * Moves one step backward.
     * <p>
     * Transitions:
     * <ul>
     * <li><strong>size</strong> &rarr; size-1 (from overflow to last)</li>
     * <li><strong>i &gt; 0</strong> &rarr; i-1 (normal backward)</li>
     * <li><strong>0</strong> &rarr; -1 (underflow; no current)</li>
     * <li><strong>-1</strong> &rarr; no change</li>
     * </ul>
     *
     * @return this instance
     */
    public ProgressStepper previous() {
        return previous((s, idx) -> {
        }, s -> {
        });
    }

    /**
     * Moves one step backward with callbacks.
     * See {@link #previous()} for state transitions.
     *
     * @param actionForTheNewCurrentStepWithIndex receives Optional(new step) and
     *                                            its index, or Optional.empty() on
     *                                            underflow
     * @param actionForThePreviousCurrentStep     receives the step that was current
     *                                            (if it existed) after clearing
     * @return this instance
     */
    public ProgressStepper previous(BiConsumer<Optional<ProgressStep>, Integer> actionForTheNewCurrentStepWithIndex,
            Consumer<ProgressStep> actionForThePreviousCurrentStep) {
        if (steps.isEmpty() || currentIndex == -1) {
            logger.warn("No previous step available.");
            return this;
        }

        // Case: we are at the first step -> underflow to -1
        if (currentIndex == 0) {
            ProgressStep prevCurrent = steps.get(currentIndex);
            actionForThePreviousCurrentStep.accept(prevCurrent.current(false));
            actionForTheNewCurrentStepWithIndex.accept(Optional.empty(), --currentIndex);
            return this;
        }

        // Case: we are after last (overflow state) -> move to last real step
        if (currentIndex == steps.size()) {
            ProgressStep newCurrent = steps.get(--currentIndex).current(true);
            actionForTheNewCurrentStepWithIndex.accept(Optional.of(newCurrent), currentIndex);
            return this;
        }

        ProgressStep prevCurrent = steps.get(currentIndex);
        ProgressStep newCurrent = steps.get(--currentIndex);
        actionForThePreviousCurrentStep.accept(prevCurrent.current(false));
        actionForTheNewCurrentStepWithIndex.accept(Optional.of(newCurrent.current(true)), currentIndex);
        return this;
    }

    /**
     * Moves one step forward.
     * <p>
     * Transitions:
     * <ul>
     * <li><strong>-1</strong> &rarr; 0 (from underflow to first)</li>
     * <li><strong>i &lt; size - 1 </strong> &rarr; i + 1 (normal forward)</li>
     * <li><strong>size - 1</strong> &rarr; size (overflow; no current)</li>
     * <li><strong>size</strong> &rarr; no change</li>
     * </ul>
     *
     * @return this instance
     */
    public ProgressStepper next() {
        return next((s, idx) -> {
        }, s -> {
        });
    }

    /**
     * Moves one step forward with callbacks.
     * See {@link #next()} for state transitions.
     *
     * @param actionForTheNewCurrentWithIndex receives Optional(new step) and its
     *                                        index, or Optional.empty() on overflow
     * @param actionForThePreviousCurrent     receives the step that was current (if
     *                                        it existed) after clearing
     * @return this instance
     */
    public ProgressStepper next(BiConsumer<Optional<ProgressStep>, Integer> actionForTheNewCurrentWithIndex,
            Consumer<ProgressStep> actionForThePreviousCurrent) {
        if (steps.isEmpty() || currentIndex == steps.size()) {
            logger.warn("No next step available.");
            return this;
        }

        // Case: before first (-1) -> move to first
        if (currentIndex == -1) {
            ProgressStep newCurrent = steps.get(++currentIndex).current(true);
            actionForTheNewCurrentWithIndex.accept(Optional.of(newCurrent), currentIndex);
            return this;
        }

        // Case: at last step -> overflow beyond last
        if (currentIndex == steps.size() - 1) {
            ProgressStep prevCurrent = steps.get(currentIndex).current(false);
            actionForThePreviousCurrent.accept(prevCurrent);
            actionForTheNewCurrentWithIndex.accept(Optional.empty(), ++currentIndex);
            return this;
        }

        ProgressStep prevCurrent = steps.get(currentIndex).current(false);
        actionForThePreviousCurrent.accept(prevCurrent);
        ProgressStep newCurrent = steps.get(++currentIndex).current(true);
        actionForTheNewCurrentWithIndex.accept(Optional.of(newCurrent), currentIndex);
        return this;
    }

    /**
     * Selects the last step (index size-1) if present.
     * Does nothing if empty or already at last.
     *
     * @return this instance
     */
    public ProgressStepper last() {
        return last(s -> {
        }, s -> {
        });
    }

    /**
     * Selects the last step (index size-1) if present.
     * Previous current (if valid) is cleared, then the last step is marked current.
     *
     * @param actionForTheLastStep            invoked with the last step after it
     *                                        becomes current
     * @param actionForThePreviousCurrentStep invoked with the previous current step
     *                                        after it is cleared
     * @return this instance
     */
    public ProgressStepper last(Consumer<ProgressStep> actionForTheLastStep,
            Consumer<ProgressStep> actionForThePreviousCurrentStep) {
        if (steps.isEmpty()) {
            logger.warn("No last step available.");
            return this;
        }
        if (currentIndex == steps.size() - 1) {
            logger.warn("Already at the last step.");
            return this;
        }

        // Clear old current if valid (could also be overflow or underflow)
        if (isSomeStepCurrent()) {
            actionForThePreviousCurrentStep.accept(steps.get(currentIndex).current(false));
        }
        currentIndex = steps.size() - 1;
        actionForTheLastStep.accept(steps.get(currentIndex).current(true));
        return this;
    }

    // ------------------------------------------------------ aria

    public ProgressStepper ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ api

    public <T> void updateItems(Iterable<T> items, Function<T, ProgressStep> display) {
        clear();
        addItems(items, display);
    }

    @Override
    public Iterator<ProgressStep> iterator() {
        return steps.iterator();
    }

    @Override
    public int size() {
        return steps.size();
    }

    @Override
    public boolean isEmpty() {
        return steps.isEmpty();
    }

    @Override
    public boolean contains(String identifier) {
        return progressStepperMap.containsKey(identifier);
    }

    @Override
    public ProgressStep item(String identifier) {
        return progressStepperMap.get(identifier);
    }

    /**
     * Returns the index of the current progress step. The interval is [-1, size],
     * where -1 implies no current step (before first) and size implies no current
     * step (after last).
     */
    public int currentIndex() {
        return currentIndex;
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        clearCollections();
        currentIndex = -1;
    }

    @Override
    public void removeItem(String identifier) {
        ProgressStep item = progressStepperMap.remove(identifier);
        failSafeRemoveFromParent(item);
    }

    /**
     * Applies the provided consumer to each step with its index in insertion order.
     *
     * @param stepConsumerWithIndex consumer receiving (step, index)
     * @return this instance
     */
    public ProgressStepper setupSteps(BiConsumer<ProgressStep, Integer> stepConsumerWithIndex) {
        for (int i = 0; i < steps.size(); i++) {
            stepConsumerWithIndex.accept(steps.get(i), i);
        }
        return this;
    }

    // ------------------------------------------------------ internal

    private boolean isSomeStepCurrent() {
        return currentIndex >= 0 && currentIndex < steps.size();
    }

    private void clearCollections() {
        progressStepperMap.clear();
        steps.clear();
    }

    private void addToCollections(ProgressStep progressStep) {
        this.progressStepperMap.put(progressStep.identifier(), progressStep);
        this.steps.add(progressStep);
    }
}
