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
package org.patternfly.component.slider;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.EventType;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.core.HasValue;
import org.patternfly.core.ObservableValue;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.KeyboardEvent;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.Key.ArrowLeft;
import static org.jboss.elemento.Key.ArrowRight;
import static org.patternfly.component.slider.Percentage.percentage;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.ObservableValue.ov;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.label;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.rail;
import static org.patternfly.style.Classes.slider;
import static org.patternfly.style.Classes.tick;
import static org.patternfly.style.Classes.track;
import static org.patternfly.style.Variable.componentVar;

/**
 * A slider provides a quick and effective way for users to set and adjust a numeric value from a defined range of values.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/slider#sliderstepobject">https://www.patternfly.org/components/slider#sliderstepobject</a>
 */
public class Slider extends BaseComponent<HTMLElement, Slider> implements
        Disabled<HTMLElement, Slider>,
        HasValue<Integer>,
        Attachable {

    // ------------------------------------------------------ factory

    public static Slider slider() {
        return new Slider(0);
    }

    public static Slider slider(int value) {
        return new Slider(value);
    }

    // ------------------------------------------------------ instance

    private final HTMLContainerBuilder<HTMLDivElement> thumb;
    private final HTMLContainerBuilder<HTMLDivElement> stepsContainer;

    private final ObservableValue<Integer> value;
    private int min;
    private int max;
    private int step;
    private boolean disabled;
    private boolean showTicks;
    private boolean tooltipOnThumb;
    private boolean showBoundaries;
    private boolean continuousCustomSteps;

    private SliderSteps customSteps;
    private SliderInputPosition position;
    private ChangeHandler<Slider, Integer> changeHandler;

    Slider(int value) {
        super(ComponentType.Slider, div().css(component(slider)).element());
        this.value = ov(value).subscribe(this::updateValue);
        this.showBoundaries = true;

        add(div().css(component(slider, main))
                .add(div().css(component(slider, rail))
                        .on(click, this::handleRailClick)
                        .add(div().css(component(slider, rail, track)))));
        add(stepsContainer = div().css(component(slider, Classes.steps))
                .aria(hidden, true));
        add(thumb = div().css(component(slider, Classes.thumb))
                .apply(e -> e.tabIndex = 0)
                .attr(role, "slider"));
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        setVisible(stepsContainer, customSteps != null || showBoundaries || showTicks);
        if (customSteps != null) {
            for (SliderStep step : customSteps) {
                HTMLContainerBuilder<HTMLDivElement> stepElement = div().css(component(slider, Classes.step));
                componentVar(component(slider, Classes.step), "Left").applyTo(stepElement, step.percentage() + "%");
                if (showTicks) {
                    stepElement.add(div().css(component(slider, Classes.steps, tick)));
                }
                if (!step.labelHidden) {
                    stepElement.add(div().css(component(slider, Classes.steps, label)).textContent(step.label));
                }
                stepsContainer.add(stepElement);
            }
        } else if (showBoundaries || showTicks) {
            for (int index = min; index <= max; index += step) {
                if (!showTicks && showBoundaries && index != min && index != max) {
                    continue;
                }
                HTMLContainerBuilder<HTMLDivElement> stepElement = div().css(component(slider, Classes.step));
                componentVar(component(slider, Classes.step), "Left").applyTo(stepElement, percentage(index, min, max) + "%");
                if (showTicks) {
                    stepElement.add(div().css(component(slider, Classes.steps, tick)));
                }
                if (showBoundaries && (index == min || index == max)) {
                    stepElement.add(div().css(component(slider, Classes.steps, label)).textContent(String.valueOf(index)));
                }
            }
        }

        // trigger updateValue()
        value.change(value.get());
    }

    // ------------------------------------------------------ builder

    public Slider customSteps(SliderSteps steps) {
        return customSteps(false, steps);
    }

    public Slider customSteps(boolean continuous, SliderSteps steps) {
        this.continuousCustomSteps = continuous;
        this.customSteps = steps;
        return this;
    }

    public Slider inputPosition(SliderInputPosition position) {
        this.position = position;
        return this;
    }

    public Slider min(int min) {
        this.min = min;
        return this;
    }

    public Slider max(int max) {
        this.max = max;
        return this;
    }

    public Slider step(int step) {
        this.step = step;
        return this;
    }

    public Slider scale(int min, int max) {
        return scale(min, max, 1);
    }

    public Slider scale(int min, int max, int step) {
        this.min = min;
        this.max = max;
        this.step = step;
        return this;
    }

    public Slider showBoundaries() {
        this.showBoundaries = true;
        return this;
    }

    public Slider showTicks() {
        this.showTicks = true;
        return this;
    }

    public Slider toolTipOnThumb() {
        this.tooltipOnThumb = true;
        return this;
    }

    public Slider value(int value) {
        if (isAttached(element())) {
            this.value.set(value);
        } else {
            this.value.silent(value);
        }
        return this;
    }

    @Override
    public Slider that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Slider ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public Slider onChange(ChangeHandler<Slider, Integer> changeHandler) {
        this.changeHandler = changeHandler;
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Integer value() {
        return value.get();
    }

    // ------------------------------------------------------ internal

    private void updateValue(int current, int previous) {

    }

    private void handleRailClick(Event event) {

    }

    private void handleThumbMove(Event event) {
        if (EventType.touchmove.name.equals(event.type)) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }

    private void handleThumbKeys(KeyboardEvent event) {
        if (ArrowLeft.match(event) || ArrowRight.match(event)) {
            event.preventDefault();
        }
    }
}
