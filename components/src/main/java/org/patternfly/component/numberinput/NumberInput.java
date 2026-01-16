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
package org.patternfly.component.numberinput;

import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.function.UnaryOperator;

import org.jboss.elemento.EventType;
import org.jboss.elemento.Id;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasValue;
import org.patternfly.component.ValidationStatus;
import org.patternfly.component.button.Button;
import org.patternfly.component.form.TextInput;
import org.patternfly.component.form.TextInputType;
import org.patternfly.component.inputgroup.InputGroup;
import org.patternfly.component.inputgroup.InputGroupItem;
import org.patternfly.core.Aria;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.icon.IconSets.fas;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Variable;

import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.KeyboardEvent;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.EventType.blur;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.Key.ArrowDown;
import static org.jboss.elemento.Key.ArrowUp;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.numberInput;
import static org.patternfly.style.Classes.unit;
import static org.patternfly.style.Variable.componentVar;

/**
 * A number input combines a text input field with buttons to provide users with
 * a quick and effective way to enter and modify a numeric value.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/number-input">https://www.patternfly.org/components/number-input</a>
 */
public class NumberInput extends BaseComponent<HTMLDivElement, NumberInput> implements
        Disabled<HTMLDivElement, NumberInput>,
        HasValue<Double> {

    // ------------------------------------------------------ factory

    public static NumberInput numberInput(double initialValue) {
        return new NumberInput(initialValue);
    }

    public static NumberInput numberInput() {
        return new NumberInput(0d);
    }

    // ------------------------------------------------------ instance

    private static final Variable INPUT_WIDTH_VARIABLE = componentVar(component(numberInput),
            "c-form-control", "width-chars");

    private final InputGroup inputGroup;
    private final InputGroupItem minusButtonItem;
    private final Button minusButton;
    private final InputGroupItem textInputItem;
    private final TextInput textInput;
    private final InputGroupItem plusButtonItem;
    private final Button plusButton;

    private final List<ChangeHandler<NumberInput, Double>> blurHandlers;
    private final List<ChangeHandler<NumberInput, Double>> changeHandlers;
    private final List<ChangeHandler<NumberInput, Double>> minusHandlers;
    private final List<ChangeHandler<NumberInput, Double>> plusHandlers;

    private double value;
    private double min = Double.NEGATIVE_INFINITY;
    private double max = Double.POSITIVE_INFINITY;
    private boolean disabled;
    private String minusButtonAriaLabel = "Minus";
    private String plusButtonAriaLabel = "Plus";
    private HTMLElement unitElement;

    private UnaryOperator<Double> plusOperation;
    private UnaryOperator<Double> minusOperation;

    private NumberInput(double initialValue) {
        super(ComponentType.NumberInput, div().css(component(numberInput)).element());
        this.value = clamp(initialValue);

        this.blurHandlers = new LinkedList<>();
        this.changeHandlers = new LinkedList<>();
        this.minusHandlers = new LinkedList<>();
        this.plusHandlers = new LinkedList<>();

        // default increment and decrement operations (by +1/-1)
        step(1);

        // Default handlers
        this.minusHandlers.add((e, component, value) -> component.value(this.minusOperation.apply(value)));
        this.plusHandlers.add((e, component, value) -> component.value(this.plusOperation.apply(value)));

        inputGroup = InputGroup.inputGroup();

        // Minus button
        minusButtonItem = InputGroupItem.inputGroupItem();
        minusButton = Button.button()
                .control()
                .icon(fas.minus())
                .aria(Aria.label, minusButtonAriaLabel)
                .on(EventType.click, this::fireMinusHandler);
        minusButtonItem.addButton(minusButton);
        inputGroup.addItem(minusButtonItem);

        // Text input
        textInputItem = InputGroupItem.inputGroupItem();
        textInput = TextInput.textInput(TextInputType.number, Id.unique(),
                String.valueOf(initialValue));
        textInput.input().on(change, this::handleInputChange);
        textInput.input().on(blur, this::fireBlurHandler);
        textInput.input().on(keydown, this::handleInputKeydown);
        textInputItem.add(textInput);
        inputGroup.addItem(textInputItem);

        // Plus button
        plusButtonItem = InputGroupItem.inputGroupItem();
        plusButton = Button.button()
                .control()
                .icon(fas.plus())
                .aria(Aria.label, plusButtonAriaLabel)
                .on(EventType.click, this::firePlusHandler);
        plusButtonItem.addButton(plusButton);
        inputGroup.addItem(plusButtonItem);

        element().appendChild(inputGroup.element());
        storeComponent();
    }

    // ------------------------------------------------------ builder

    public NumberInput widthChars(int widthChars) {
        INPUT_WIDTH_VARIABLE.applyTo(element()).set(widthChars);
        return this;
    }

    public NumberInput min(double min) {
        this.min = min;
        // clamp could be different after changing min
        value(value);
        return this;
    }

    public NumberInput max(double max) {
        this.max = max;
        // clamp could be different after changing max
        value(value);
        return this;
    }

    public NumberInput range(double min, double max) {
        this.min = min;
        this.max = max;
        // clamp could be different after changing range (min and max)
        value(value);
        return this;
    }

    public NumberInput inputName(String inputName) {
        textInput.attr("name", inputName);
        return this;
    }

    public NumberInput inputAriaLabel(String label) {
        textInput.aria(Aria.label, label);
        return this;
    }

    public NumberInput minusButtonAriaLabel(String label) {
        this.minusButtonAriaLabel = label;
        minusButton.aria(Aria.label, label);
        return this;
    }

    public NumberInput plusButtonAriaLabel(String label) {
        this.plusButtonAriaLabel = label;
        plusButton.aria(Aria.label, label);
        return this;
    }

    public NumberInput unit(String value) {
        return unit(value, UnitPosition.after);
    }

    public NumberInput unit(String value, UnitPosition position) {
        failSafeRemoveFromParent(unitElement);
        if (value != null && !value.isEmpty()) {
            unitElement = div().css(component(numberInput, unit)).text(value).element();
            switch (position) {
                case before -> element().insertBefore(unitElement, inputGroup.element());
                case after -> element().appendChild(unitElement);
            }
        }
        return this;
    }

    @Override
    public NumberInput disabled(boolean disabled) {
        this.disabled = disabled;
        minusButton.disabled(disabled);
        textInput.disabled(disabled);
        plusButton.disabled(disabled);
        return Disabled.super.disabled(disabled);
    }

    public NumberInput validated(ValidationStatus validated) {
        textInput.validated(validated);
        return this;
    }

    public NumberInput value(double value) {
        double clampedValue = clamp(value);
        boolean changed = this.value != clampedValue;
        this.value = clampedValue;
        textInput.value(String.valueOf(this.value));
        if (changed) {
            fireChangeHandler(null);
        }
        updateButtonStates();
        return this;
    }

    public NumberInput plusOperation(UnaryOperator<Double> operation) {
        this.plusOperation = Objects.requireNonNull(operation, "operation must not be null");
        return this;
    }

    public NumberInput minusOperation(UnaryOperator<Double> operation) {
        this.minusOperation = Objects.requireNonNull(operation, "operation must not be null");
        return this;
    }

    public NumberInput operations(UnaryOperator<Double> minusOperation,
            UnaryOperator<Double> plusOperation) {
        return minusOperation(minusOperation).plusOperation(plusOperation);
    }

    public NumberInput step(double steps) {
        return operations(v -> v - steps, v -> v + steps);
    }

    @Override
    public NumberInput that() {
        return this;
    }

    // ------------------------------------------------------ events

    public NumberInput onBlur(ChangeHandler<NumberInput, Double> blurHandler) {
        this.blurHandlers.add(Objects.requireNonNull(blurHandler, "blurHandler must not be null"));
        return this;
    }

    public NumberInput onChange(ChangeHandler<NumberInput, Double> changeHandler) {
        this.changeHandlers.add(Objects.requireNonNull(changeHandler, "changeHandler must not be null"));
        return this;
    }

    public NumberInput onMinus(ChangeHandler<NumberInput, Double> minusHandler) {
        this.minusHandlers.add(Objects.requireNonNull(minusHandler, "minusHandler must not be null"));
        return this;
    }

    public NumberInput onPlus(ChangeHandler<NumberInput, Double> plusHandler) {
        this.plusHandlers.add(Objects.requireNonNull(plusHandler, "plusHandler must not be null"));
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Double value() {
        return this.value;
    }

    // ------------------------------------------------------ internal

    private double clamp(double value) {
        return Math.max(min, Math.min(max, value));
    }

    private void handleInputChange(Event event) {
        try {
            value(Double.parseDouble(textInput.value()));
        } catch (NumberFormatException e) {
            // revert to previous value
            textInput.value(String.valueOf(value));
        }
    }

    private void handleInputKeydown(KeyboardEvent event) {
        if (ArrowUp.match(event) && !plusButton.isDisabled()) {
            event.preventDefault();
            firePlusHandler(event);
        } else if (ArrowDown.match(event) && !minusButton.isDisabled()) {
            event.preventDefault();
            fireMinusHandler(event);
        }
    }

    private void updateButtonStates() {
        // Disable minus button if at minimum
        minusButton.disabled(disabled || (value <= min && !Double.isInfinite(min)));

        // Disable plus button if at maximum
        plusButton.disabled(disabled || (value >= max && !Double.isInfinite(max)));
    }

    private void fireBlurHandler(Event event) {
        blurHandlers.forEach(handler -> handler.onChange(event, this, value));
    }

    private void fireChangeHandler(Event event) {
        changeHandlers.forEach(handler -> handler.onChange(event, this, value));
    }

    private void fireMinusHandler(Event event) {
        minusHandlers.forEach(handler -> handler.onChange(event, this, value));
    }

    private void firePlusHandler(Event event) {
        plusHandlers.forEach(handler -> handler.onChange(event, this, value));
    }
}
