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

import java.util.ArrayList;
import java.util.List;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.EventType;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Key;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasValue;
import org.patternfly.component.form.TextInput;
import org.patternfly.component.inputgroup.InputGroup;
import org.patternfly.component.inputgroup.InputGroupItem;
import org.patternfly.component.tooltip.Tooltip;
import org.patternfly.core.Aria;
import org.patternfly.core.LanguageDirection;
import org.patternfly.core.ObservableValue;
import org.patternfly.core.Roles;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Variable;

import elemental2.dom.AddEventListenerOptions;
import elemental2.dom.Event;
import elemental2.dom.FocusEvent;
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
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.blur;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.focus;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.EventType.keyup;
import static org.jboss.elemento.EventType.mousedown;
import static org.jboss.elemento.EventType.mousemove;
import static org.jboss.elemento.EventType.mouseup;
import static org.jboss.elemento.EventType.touchcancel;
import static org.jboss.elemento.EventType.touchend;
import static org.jboss.elemento.EventType.touchmove;
import static org.jboss.elemento.EventType.touchstart;
import static org.jboss.elemento.Key.ArrowLeft;
import static org.jboss.elemento.Key.ArrowRight;
import static org.patternfly.component.slider.SliderInputPosition.aboveThumb;
import static org.patternfly.component.slider.SliderInputPosition.end;
import static org.patternfly.component.slider.SliderStep.sliderStep;
import static org.patternfly.component.tooltip.Tooltip.tooltip;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Aria.valueMax;
import static org.patternfly.core.Aria.valueMin;
import static org.patternfly.core.Aria.valueNow;
import static org.patternfly.core.Aria.valueText;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Dataset.sliderStepValue;
import static org.patternfly.core.Numbers.percentage;
import static org.patternfly.core.ObservableValue.ov;
import static org.patternfly.style.Classes.active;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.floating;
import static org.patternfly.style.Classes.label;
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
public class Slider extends BaseComponentFlat<HTMLElement, Slider> implements
        Disabled<HTMLElement, Slider>,
        HasValue<Double>,
        Attachable {

    // ------------------------------------------------------ factory

    public static <N extends Number> Slider slider() {
        return new Slider();
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Slider.class.getName());
    private static final Variable sliderValue = componentVar(component(slider), "value");
    private static final Variable sliderValueInputWidth = componentVar(component(slider, Classes.value),
            "c-form-control", "width-chars");
    private static final Variable sliderStepLeft = componentVar(component(slider, Classes.step), Left);

    private final ObservableValue<Double> value;
    private final HTMLContainerBuilder<HTMLDivElement> main;
    private final HTMLContainerBuilder<HTMLDivElement> thumb;
    private final HTMLContainerBuilder<HTMLDivElement> sliderRail;
    private final HTMLContainerBuilder<HTMLDivElement> stepsContainer;
    private final List<SliderActions> actions;

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

    private Tooltip tooltip;
    private TextInput textInput;
    private InputGroup inputGroup;
    private SliderSteps customSteps;
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
        this.actions = new ArrayList<>();

        main = div().css(component(slider, Classes.main))
                .add(sliderRail = div().css(component(slider, rail))
                        .on(EventType.click, this::handleRailClick)
                        .add(div().css(component(slider, rail, track))))
                .add(stepsContainer = div().css(component(slider, Classes.steps))
                        .aria(hidden, true))
                .add(thumb = div().css(component(slider, Classes.thumb))
                        .apply(e -> e.tabIndex = 0)
                        .attr(role, Roles.slider)
                        .aria(Aria.label, "Value")
                        .aria(Aria.disabled, false)
                        .on(mousedown, this::handleThumbMouseDown)
                        .on(touchstart, this::handleThumbTouchStart)
                        .on(EventType.click, this::handleThumbClick)
                        .on(keydown, this::handleThumbKeys));
        element().appendChild(main.element());

        storeFlatComponent();
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

        if (tooltipOnThumb) {
            tooltip = tooltip(thumb.element())
                    .entryDelay(0)
                    .appendToBody();
        }

        if (disabled) {
            disabledInternal(true);
        }

        // call subscribers
        value.subscribe(this::onValueChanged);
        value.publish();
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        failSafeRemoveFromParent(tooltip);
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

    // ------------------------------------------------------ add

    public Slider addStartActions(SliderActions actions) {
        insertFirst(element(), actions.element());
        this.actions.add(actions);
        return this;
    }

    public Slider addEndActions(SliderActions actions) {
        element().appendChild(actions.element());
        this.actions.add(actions);
        return this;
    }

    public Slider addValueInput(TextInput valueInput) {
        return addValueInput(valueInput, end);
    }

    public Slider addValueInput(TextInput textInput, SliderInputPosition inputPosition) {
        if (this.textInput == null) {
            bindValueInput(textInput);
            addValueInputInternal(textInput.element(), inputPosition);
        } else {
            logger.warn("Value input already added for slider %o.", element());
        }
        return this;
    }

    public Slider addValueInput(InputGroup valueInput) {
        return addValueInput(valueInput, end);
    }

    public Slider addValueInput(InputGroup valueInput, SliderInputPosition inputPosition) {
        if (this.inputGroup == null) {
            InputGroupItem inputGroupItem = valueInput.itemWithFormControl();
            if (inputGroupItem != null) {
                if (inputGroupItem.formControl() instanceof TextInput) {
                    this.inputGroup = valueInput;
                    bindValueInput((TextInput) inputGroupItem.formControl());
                    addValueInputInternal(valueInput.element(), inputPosition);
                } else {
                    logger.error("Value input in slider %o does not contain a text input", element());
                }
            } else {
                logger.error("Value input in slider %o does not contain a form control", element());
            }
        } else {
            logger.error("Value input already added for slider %o", element());
        }
        return this;
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

    @Override
    public Slider disabled(boolean disabled) {
        this.disabled = disabled;
        if (isAttached(element())) {
            disabledInternal(disabled);
        } // else defer to attach()
        return Disabled.super.disabled(disabled);
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

    /** Sets the aria attribute on the slider and the thumb element. */
    public Slider ariaDescribedBy(String describedBy) {
        thumb.aria(Aria.describedBy, describedBy);
        return aria(Aria.describedBy, describedBy);
    }

    /** Sets the aria attribute on the slider and the thumb element. */
    public Slider ariaLabelledBy(String labelledBy) {
        thumb.aria(Aria.labelledBy, labelledBy);
        return aria(Aria.labelledBy, labelledBy);
    }

    public Slider ariaThumbLabel(String label) {
        thumb.aria(Aria.label, label);
        return this;
    }

    // ------------------------------------------------------ events

    public Slider onChange(ChangeHandler<Slider, Double> changeHandler) {
        this.changeHandler = changeHandler;
        return this;
    }

    // ------------------------------------------------------ api

    public void decrease() {
        double newValue;
        double localValue = value.get();
        if (customSteps != null && !continuousCustomSteps) {
            newValue = customSteps.previousValue(localValue);
        } else {
            double localMin = customSteps == null ? min : customSteps.firstValue();
            newValue = Math.max(localValue - step, localMin);
        }
        this.value.set(newValue);
    }

    public void increase() {
        double newValue;
        double localValue = value.get();
        if (customSteps != null && !continuousCustomSteps) {
            newValue = customSteps.nextValue(localValue);
        } else {
            double localMax = customSteps == null ? max : customSteps.lastValue();
            newValue = Math.min(localValue + step, localMax);
        }
        this.value.set(newValue);
    }

    @Override
    public Double value() {
        return value.get();
    }

    public int intValue() {
        return (int) value().doubleValue();
    }

    /**
     * Returns the current step of the slider.
     */
    public SliderStep currentStep() {
        if (customSteps == null) {
            return sliderStep(value.get());
        } else {
            return customSteps.closestStep(value.get());
        }
    }

    // ------------------------------------------------------ internal

    private void onValueChanged(double current, double previous) {
        String stringValue = String.valueOf(current);
        double percentage = customSteps != null
                ? percentage(current, customSteps.firstValue(), customSteps.lastValue())
                : percentage(current, min, max);
        sliderValue.applyTo(element(), percentage + "%");

        for (HTMLElement stepElement : children(stepsContainer)) {
            double stepValue = parseDouble(stepElement.dataset.get(sliderStepValue));
            stepElement.classList.toggle(modifier(active), stepValue < current);
        }

        String labelOrValue = labelOrValue(current);
        thumb.aria(valueNow, stringValue);
        thumb.aria(valueText, labelOrValue);
        if (textInput != null) {
            textInput.value(stringValue);
            sliderValueInputWidth.applyTo(element(), textInput.value().length());
        }
        if (tooltip != null) {
            tooltip.text(labelOrValue);
        }

        if (changeHandler != null) {
            changeHandler.onChange(new Event(""), this, current);
        }
    }

    private String labelOrValue(double value) {
        if (customSteps != null && !continuousCustomSteps) {
            return customSteps.closestStep(value).label;
        }
        return String.valueOf(value);
    }

    private void disabledInternal(boolean disabled) {
        thumb.element().tabIndex = disabled ? -1 : 0;
        thumb.aria(Aria.disabled, disabled);
        for (SliderActions a : actions) {
            a.disabled(disabled);
        }
        if (inputGroup != null) {
            inputGroup.disabled(disabled);
        } else if (textInput != null) {
            textInput.disabled(disabled);
        }
    }

    private void addValueInputInternal(HTMLElement element, SliderInputPosition inputPosition) {
        if (inputPosition == aboveThumb) {
            main.add(div().css(component(slider, Classes.value), modifier(floating))
                    .add(element));
        } else if (inputPosition == end) {
            insertAfter(div().css(component(slider, Classes.value))
                    .add(element)
                    .element(), main.element());
        } else {
            if (inputPosition != null) {
                logger.warn("Unsupported input position '%s' for slider %o: ", inputPosition.name(), element);
            } else {
                logger.error("No input position specified for slider %o", element());
            }
        }
    }

    private void bindValueInput(TextInput textInput) {
        this.textInput = textInput;
        this.textInput.inputElement().on(keyup, this::handleInputKeyUp)
                .on(click, Event::stopPropagation)
                .on(focus, Event::stopPropagation)
                .on(blur, this::handleInputBlur);
    }

    // ------------------------------------------------------ event handler

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
        double newValue = Math.round(percentageMinMax * 100) / 100.0;
        if (customSteps == null) {
            newValue = Math.round((Math.round((newValue - localMin) / step) * step + localMin) * 100) / 100.0;
        } else if (!continuousCustomSteps) {
            newValue = customSteps.closestValue(localMax != 100 ? percentageMinMax : percentage);

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
                    newValue = customSteps.nextValue(localValue);
                } else {
                    newValue = customSteps.previousValue(localValue);
                }
            } else if (ArrowRight.match(event)) {
                if (rtl) {
                    newValue = customSteps.previousValue(localValue);
                } else {
                    newValue = customSteps.nextValue(localValue);
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

    private void handleInputKeyUp(KeyboardEvent event) {
        if (disabled) {
            return;
        }
        sliderValueInputWidth.applyTo(element(), textInput.value().length());
        if (Key.Enter.match(event)) {
            event.preventDefault();
            handleInputChanged();
        }
    }

    private void handleInputBlur(FocusEvent e) {
        if (disabled) {
            return;
        }
        handleInputChanged();
    }

    private void handleInputChanged() {
        double inputValue = Double.parseDouble(textInput.value());
        double localMin = customSteps == null ? min : customSteps.firstValue();
        double localMax = customSteps == null ? max : customSteps.lastValue();
        if (customSteps == null) {
            inputValue = Math.max(inputValue, localMin);
            inputValue = Math.min(inputValue, localMax);
        } else {
            inputValue = customSteps.closestValue(inputValue);
        }
        this.value.set(inputValue);
    }
}
