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

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.core.HasValue;
import org.patternfly.core.LanguageDirection;
import org.patternfly.core.ObservableValue;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Variable;

import elemental2.dom.AddEventListenerOptions;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.KeyboardEvent;
import elemental2.dom.MouseEvent;
import elemental2.dom.MutationRecord;
import elemental2.dom.TouchEvent;

import static elemental2.dom.DomGlobal.document;
import static java.lang.Double.parseDouble;
import static org.jboss.elemento.Elements.children;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.EventType.mousedown;
import static org.jboss.elemento.EventType.mousemove;
import static org.jboss.elemento.EventType.mouseup;
import static org.jboss.elemento.EventType.touchcancel;
import static org.jboss.elemento.EventType.touchend;
import static org.jboss.elemento.EventType.touchmove;
import static org.jboss.elemento.EventType.touchstart;
import static org.jboss.elemento.Key.ArrowLeft;
import static org.jboss.elemento.Key.ArrowRight;
import static org.patternfly.component.slider.Numbers.percentage;
import static org.patternfly.component.slider.SliderInputPosition.none;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Aria.valueMax;
import static org.patternfly.core.Aria.valueMin;
import static org.patternfly.core.Aria.valueNow;
import static org.patternfly.core.Aria.valueText;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Dataset.sliderStepValue;
import static org.patternfly.core.ObservableValue.ov;
import static org.patternfly.style.Classes.active;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.label;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.rail;
import static org.patternfly.style.Classes.slider;
import static org.patternfly.style.Classes.tick;
import static org.patternfly.style.Classes.track;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.Left;

/**
 * A slider provides a quick and effective way for users to set and adjust a numeric value from a defined range of values.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/slider#sliderstepobject">https://www.patternfly.org/components/slider#sliderstepobject</a>
 */
public class Slider extends BaseComponent<HTMLElement, Slider> implements
        Disabled<HTMLElement, Slider>,
        HasValue<Double>,
        Attachable {

    // ------------------------------------------------------ factory

    public static <N extends Number> Slider slider() {
        return new Slider();
    }

    // ------------------------------------------------------ instance

    private static final Variable sliderValue = componentVar(component(slider), "value");
    private static final Variable sliderStepLeft = componentVar(component(slider, Classes.step), Left);

    private final HTMLContainerBuilder<HTMLDivElement> thumb;
    private final HTMLContainerBuilder<HTMLDivElement> sliderRail;
    private final HTMLContainerBuilder<HTMLDivElement> stepsContainer;

    private final ObservableValue<Double> value;
    private double min;
    private double max;
    private double step;
    private double diff;
    private boolean rtl;
    private boolean disabled;
    private boolean showTicks;
    private boolean tooltipOnThumb;
    private boolean showBoundaries;
    private boolean continuousCustomSteps;

    private SliderSteps customSteps;
    private SliderInputPosition inputPosition;
    private ChangeHandler<Slider, Double> changeHandler;
    private HandlerRegistration mouseMoveHandler;
    private HandlerRegistration mouseUpHandler;
    private HandlerRegistration touchMoveHandler;
    private HandlerRegistration touchEndHandler;
    private HandlerRegistration touchCancelHandler;

    Slider() {
        super(ComponentType.Slider, div().css(component(slider)).element());
        this.value = ov(0d);
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.showBoundaries = true;
        this.inputPosition = none;

        add(div().css(component(slider, main))
                .add(sliderRail = div().css(component(slider, rail))
                        .on(click, this::handleRailClick)
                        .add(div().css(component(slider, rail, track))))
                .add(stepsContainer = div().css(component(slider, Classes.steps))
                        .aria(hidden, true))
                .add(thumb = div().css(component(slider, Classes.thumb))
                        .apply(e -> e.tabIndex = 0)
                        .attr(role, "slider")
                        .aria(Aria.label, "Value")
                        .aria(Aria.disabled, false)
                        .on(mousedown, this::handleThumbMouseDown)
                        .on(touchstart, this::handleThumbTouchStart)
                        .on(click, this::handleThumbClick)
                        .on(keydown, this::handleThumbKeys)));

        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        rtl = LanguageDirection.languageDirection(element()) == LanguageDirection.rtl;
        setVisible(stepsContainer, customSteps != null || showBoundaries || showTicks);
        if (customSteps != null) {
            thumb.aria(valueMin, String.valueOf(customSteps.firstValue()));
            thumb.aria(valueMax, String.valueOf(customSteps.lastValue()));
            for (SliderStep step : customSteps) {
                HTMLContainerBuilder<HTMLDivElement> stepElement = div().css(component(slider, Classes.step))
                        .data(sliderStepValue, String.valueOf(step.value));
                sliderStepLeft.applyTo(stepElement, step.percentage() + "%");
                stepElement.add(div().css(component(slider, Classes.step, tick)));
                if (!step.labelHidden) {
                    stepElement.add(div().css(component(slider, Classes.step, label)).textContent(step.label));
                }
                stepsContainer.add(stepElement);
            }
        } else {
            thumb.aria(valueMin, String.valueOf(min));
            thumb.aria(valueMax, String.valueOf(max));
            if (showBoundaries || showTicks) {
                for (double index = min; index <= max; index += step) {
                    if (!showTicks && showBoundaries && index != min && index != max) {
                        continue;
                    }
                    HTMLContainerBuilder<HTMLDivElement> stepElement = div().css(component(slider, Classes.step))
                            .data(sliderStepValue, String.valueOf(index));
                    sliderStepLeft.applyTo(stepElement, percentage(index, min, max) + "%");
                    if (showTicks) {
                        stepElement.add(div().css(component(slider, Classes.step, tick)));
                    }
                    if (showBoundaries && (index == min || index == max)) {
                        stepElement.add(div().css(component(slider, Classes.step, label)).textContent(String.valueOf(index)));
                    }
                    stepsContainer.add(stepElement);
                }
            }
        }

        // call subscribers
        value.subscribe(this::onValueChanged);
        value.publish();
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

    public Slider inputPosition(SliderInputPosition inputPosition) {
        this.inputPosition = inputPosition;
        return this;
    }

    public Slider min(double min) {
        this.min = min;
        return this;
    }

    public Slider max(double max) {
        this.max = max;
        return this;
    }

    public Slider step(double step) {
        this.step = step;
        return this;
    }

    public Slider range(double min, double max) {
        return range(min, max, 1);
    }

    public Slider range(double min, double max, double step) {
        this.min = min;
        this.max = max;
        this.step = step;
        return this;
    }

    public Slider showBoundaries() {
        return showBoundaries(true);
    }

    public Slider showBoundaries(boolean showBoundaries) {
        this.showBoundaries = showBoundaries;
        return this;
    }

    public Slider showTicks() {
        return showTicks(true);
    }

    public Slider showTicks(boolean showTicks) {
        this.showTicks = showTicks;
        return this;
    }

    public Slider toolTipOnThumb() {
        return toolTipOnThumb(true);
    }

    public Slider toolTipOnThumb(boolean tooltipOnThumb) {
        this.tooltipOnThumb = tooltipOnThumb;
        return this;
    }

    public Slider value(double value) {
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

    public Slider onChange(ChangeHandler<Slider, Double> changeHandler) {
        this.changeHandler = changeHandler;
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Double value() {
        return value.get();
    }

    public int intValue() {
        return (int) value().doubleValue();
    }

    // ------------------------------------------------------ internal

    private void onValueChanged(double current, double previous) {
        double percentage = customSteps != null
                ? percentage(current, customSteps.firstValue(), customSteps.lastValue())
                : percentage(current, min, max);
        sliderValue.applyTo(element(), percentage + "%");

        for (HTMLElement stepElement : children(stepsContainer)) {
            double stepValue = parseDouble(stepElement.dataset.get(sliderStepValue));
            stepElement.classList.toggle(modifier(active), stepValue < current);
        }

        thumb.aria(valueNow, String.valueOf(current));
        thumb.aria(valueText, "???");

        if (changeHandler != null) {
            changeHandler.onChange(new Event(""), this, current);
        }
    }

    private void handleRailClick(Event event) {
        if (disabled) {
            return;
        }
        handleThumbMove(event);
    }

    private void handleThumbClick(Event event) {
        if (disabled) {
            return;
        }
        thumb.element().focus();
    }

    private void handleThumbMouseDown(MouseEvent event) {
        if (disabled) {
            return;
        }
        event.stopPropagation();
        event.preventDefault();

        if (rtl) {
            diff = thumb.element().getBoundingClientRect().right - event.clientX;
        } else {
            diff = event.clientX - thumb.element().getBoundingClientRect().left;
        }
        mouseMoveHandler = bind(document, mousemove.name, this::handleThumbMove);
        mouseUpHandler = bind(document, mouseup.name, this::handleThumbUp);
    }

    private void handleThumbTouchStart(TouchEvent event) {
        if (disabled) {
            return;
        }
        event.stopPropagation();

        if (rtl) {
            diff = thumb.element().getBoundingClientRect().right - event.touches.item(0).clientX;
        } else {
            diff = event.touches.item(0).clientX - thumb.element().getBoundingClientRect().left;
        }
        AddEventListenerOptions options = AddEventListenerOptions.create();
        options.setPassive(true);
        touchMoveHandler = bind(document, touchmove.name, options, this::handleThumbMove);
        touchEndHandler = bind(document, touchend.name, this::handleThumbUp);
        touchCancelHandler = bind(document, touchcancel.name, this::handleThumbUp);
    }

    private void handleThumbUp(Event event) {
        if (mouseMoveHandler != null) {
            mouseMoveHandler.removeHandler();
        }
        if (mouseUpHandler != null) {
            mouseUpHandler.removeHandler();
        }
        if (touchMoveHandler != null) {
            touchMoveHandler.removeHandler();
        }
        if (touchEndHandler != null) {
            touchEndHandler.removeHandler();
        }
        if (touchCancelHandler != null) {
            touchCancelHandler.removeHandler();
        }
    }

    private void handleThumbMove(Event event) {
        if (disabled) {
            return;
        }

        double start = 0;
        double newPos;
        double clientPos = 0;
        if (event instanceof TouchEvent) {
            event.preventDefault();
            event.stopImmediatePropagation();
            clientPos = ((TouchEvent) event).touches.item(0).clientX;
        } else if (event instanceof MouseEvent) {
            clientPos = ((MouseEvent) event).clientX;
        }
        if (rtl) {
            newPos = sliderRail.element().getBoundingClientRect().right - clientPos - diff;
        } else {
            newPos = clientPos - diff - sliderRail.element().getBoundingClientRect().left;
        }
        double end = sliderRail.element().offsetWidth - thumb.element().offsetWidth;
        if (newPos < start) {
            newPos = 0;
        }
        if (newPos > end) {
            newPos = end;
        }

        double localMin = customSteps == null ? min : customSteps.firstValue();
        double localMax = customSteps == null ? max : customSteps.lastValue();
        double percentage = percentage(newPos, end);
        double percentageMinMax = (percentage * (localMax - localMin)) / 100 + localMin;
        double newValue = (double) Math.round(percentageMinMax * 100) / 100;
        if (customSteps == null) {
            newValue = (double) Math.round((Math.round((newValue - localMin) / step) * step + localMin) * 100) / 100;
        } else if (!continuousCustomSteps) {
            newValue = customSteps.closest(localMax != 100 ? percentageMinMax : percentage);

        }
        this.value.set(newValue);
    }

    private void handleThumbKeys(KeyboardEvent event) {
        if (disabled || !(ArrowLeft.match(event) || ArrowRight.match(event))) {
            return;
        }
        event.preventDefault();

        double newValue = 0;
        double localValue = value.get();
        if (customSteps != null && !continuousCustomSteps) {
            if (ArrowLeft.match(event)) {
                if (rtl) {
                    newValue = customSteps.next(localValue);
                } else {
                    newValue = customSteps.previous(localValue);
                }
            } else if (ArrowRight.match(event)) {
                if (rtl) {
                    newValue = customSteps.previous(localValue);
                } else {
                    newValue = customSteps.next(localValue);
                }
            }
        } else {
            double localMin = customSteps == null ? min : customSteps.firstValue();
            double localMax = customSteps == null ? max : customSteps.lastValue();
            if (ArrowLeft.match(event)) {
                if (rtl) {
                    newValue = Math.min(localValue + step, localMax);
                } else {
                    newValue = Math.max(localValue - step, localMin);
                }
            } else if (ArrowRight.match(event)) {
                if (rtl) {
                    newValue = Math.max(localValue - step, localMin);
                } else {
                    newValue = Math.min(localValue + step, localMax);
                }
            }
        }
        this.value.set(newValue);
    }
}
