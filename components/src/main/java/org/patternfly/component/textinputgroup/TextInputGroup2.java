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
package org.patternfly.component.textinputgroup;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.function.BiConsumer;
import java.util.function.BiFunction;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLInputElementBuilder;
import org.jboss.elemento.Key;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasValue;
import org.patternfly.component.Validatable;
import org.patternfly.component.ValidationStatus;
import org.patternfly.component.label.Label;
import org.patternfly.component.label.LabelGroup;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Modifiers.Plain;
import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.wrapInputElement;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.keyup;
import static org.jboss.elemento.InputType.text;
import static org.patternfly.component.ValidationStatus.default_;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.label.Label.label;
import static org.patternfly.component.textinputgroup.TextInputGroupUtilities.textInputGroupUtilities;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.textInput;
import static org.patternfly.style.Classes.textInputGroup;

/**
 * A text input group is a more flexible composable version of a text input. It enables consumers of PatternFly to build custom
 * inputs for filtering and similar use cases by placing elements like icons, chips groups and buttons within a text input.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/text-input-group">https://www.patternfly.org/components/text-input-group</a>
 */
public class TextInputGroup2 extends BaseComponent<HTMLDivElement, TextInputGroup2> implements
        ComponentIcon<HTMLDivElement, TextInputGroup2>,
        Disabled<HTMLDivElement, TextInputGroup2>,
        HasValue<String>,
        Plain<HTMLDivElement, TextInputGroup2>,
        Validatable<HTMLDivElement, TextInputGroup2> {

    // ------------------------------------------------------ factory

    public static TextInputGroup2 textInputGroup2(String id) {
        return new TextInputGroup2(id, null);
    }

    public static TextInputGroup2 textInputGroup2(String id, String value) {
        return new TextInputGroup2(id, value);
    }

    // ------------------------------------------------------ instance

    private final HTMLElement mainContainer;
    private final HTMLInputElement inputElement;
    private final HTMLElement textContainer;
    private final List<ChangeHandler<TextInputGroup2, String>> keyupChangeHandlers;
    private final List<ChangeHandler<TextInputGroup2, String>> valueChangeHandlers;
    private ValidationStatus status;
    private LabelGroup labelGroup;
    private HTMLElement iconContainer;
    private HTMLElement statusContainer;
    private TextInputGroupUtilities utilities;

    TextInputGroup2(String id, String value) {
        super(ComponentType.TextInputGroup, div().css(component(textInputGroup)).element());
        this.keyupChangeHandlers = new ArrayList<>();
        this.valueChangeHandlers = new ArrayList<>();
        this.status = null;

        add(mainContainer = div().css(component(textInputGroup, main))
                .add(textContainer = span().css(component(textInputGroup, Classes.text))
                        .add(inputElement = Elements.input(text).css(component(textInputGroup, textInput))
                                .id(id)
                                .name(id)
                                .element())
                        .element())
                .element());

        inputElement.addEventListener(keyup.name, e ->
                keyupChangeHandlers.forEach(changeHandler -> changeHandler.onChange(e, this, inputElement.value)));
        inputElement.addEventListener(change.name, e ->
                valueChangeHandlers.forEach(changeHandler -> changeHandler.onChange(e, this, inputElement.value)));
        if (value != null) {
            value(value);
        }
    }

    // ------------------------------------------------------ add

    public TextInputGroup2 addLabelGroup(LabelGroup labelGroup) {
        return add(labelGroup);
    }

    // override to ensure internal wiring
    public TextInputGroup2 add(LabelGroup labelGroup) {
        this.labelGroup = labelGroup;
        insertFirst(mainContainer, labelGroup);
        return this;
    }

    public TextInputGroup2 addUtilities(TextInputGroupUtilities utilities) {
        return add(utilities);
    }

    // override to ensure internal wiring
    public TextInputGroup2 add(TextInputGroupUtilities utilities) {
        this.utilities = utilities;
        add(utilities.element());
        return this;
    }

    // ------------------------------------------------------ builder

    /** Provides access to the underlying input element using a fluent API style */
    public TextInputGroup2 applyTo(Consumer<HTMLInputElementBuilder<HTMLInputElement>> consumer) {
        consumer.accept(input());
        return this;
    }

    /**
     * Adds a utility with a clear button that clears this text input group's value. The clear button is only visible when the
     * text input group has a non-empty value.
     */
    public TextInputGroup2 clear() {
        return clear((e, tig) -> tig.value("", true),
                (tig, value) -> !value.isEmpty());
    }

    /**
     * Adds a utility with a clear button that executes the given {@link ComponentHandler}. The clear button is only visible
     * when the text input group has a non-empty value.
     *
     * @param onClear the {@link ComponentHandler} to execute when the clear button is clicked
     */
    public TextInputGroup2 clear(ComponentHandler<TextInputGroup2> onClear) {
        return clear(onClear, (tig, value) -> !value.isEmpty());
    }

    /**
     * Adds a utility with a clear button that clears this text input group's value. The clear button is only visible when the
     * given function returns {@code true}.
     *
     * @param visibility the function to determine whether the clear button should be visible
     */
    public TextInputGroup2 clear(BiFunction<TextInputGroup2, String, Boolean> visibility) {
        return clear((e, tig) -> tig.value("", true), visibility);
    }

    /**
     * Adds a utility with a clear button that executes the given {@link ComponentHandler}. The clear button is only visible
     * when the given function returns {@code true}.
     *
     * @param onClear    the {@link ComponentHandler} to execute when the clear button is clicked
     * @param visibility the function to determine whether the clear button should be visible
     */
    public TextInputGroup2 clear(ComponentHandler<TextInputGroup2> onClear,
            BiFunction<TextInputGroup2, String, Boolean> visibility) {
        onKeyup((__, tig, value) -> internalClear(onClear, visibility));
        onChange((__, tig, value) -> internalClear(onClear, visibility));
        internalClear(onClear, visibility);
        return this;
    }

    @Override
    public TextInputGroup2 disabled(boolean disabled) {
        inputElement.disabled = disabled;
        return Disabled.super.disabled(disabled);
    }

    /**
     * Adds filtering functionality to the text input group without any additional customization.
     */
    public TextInputGroup2 filter() {
        return filter(null, null, null);
    }

    /**
     * Adds filtering functionality to the text input group with a specified predefined icon.
     *
     * @param icon a supplier that provides a predefined icon to be displayed in the input field
     */
    public TextInputGroup2 filter(Supplier<PredefinedIcon> icon) {
        return filter(icon, null, null);
    }

    /**
     * Adds filtering functionality to the text input group. This method allows adding and removing filters dynamically using
     * specified handlers to process changes in the filter.
     *
     * @param filterAdded   a {@link BiConsumer} that gets triggered when a new filter is added. The first parameter is the text
     *                      input group instance, and the second parameter is the value of the added filter.
     * @param filterRemoved a {@link BiConsumer} that gets triggered when an existing filter is removed. The first parameter is
     *                      the text input group instance, and the second parameter is the value of the removed filter.
     */
    public TextInputGroup2 filter(BiConsumer<TextInputGroup2, Label> filterAdded,
            BiConsumer<TextInputGroup2, Label> filterRemoved) {
        return filter(null, filterAdded, filterRemoved);
    }

    /**
     * Adds filtering functionality to the text input group. This method provides the ability to add and remove filters
     * dynamically with specified icons and handlers to process filter changes.
     *
     * @param icon          a supplier for a predefined icon to be displayed in the input field
     * @param filterAdded   a consumer that is triggered when a new filter is added; the first parameter is the text input group
     *                      instance, and the second parameter is the value of the added filter
     * @param filterRemoved a consumer that is triggered when an existing filter is removed; the first parameter is the text
     *                      input group instance, and the second parameter is the value of the removed filter
     */
    public TextInputGroup2 filter(Supplier<PredefinedIcon> icon,
            BiConsumer<TextInputGroup2, Label> filterAdded,
            BiConsumer<TextInputGroup2, Label> filterRemoved) {
        ComponentHandler<TextInputGroup2> onClear = (event, tig) -> {
            if (labelGroup != null) {
                labelGroup.clear();
            }
            failSafeRemoveFromParent(labelGroup);
            failSafeRemoveFromParent(utilities);
            labelGroup = null;
            utilities = null;
            if (icon != null) {
                icon(icon.get());
            }
            tig.value("");
        };
        BiFunction<TextInputGroup2, String, Boolean> visibility = (tig, value) ->
                (labelGroup != null && !labelGroup.isEmpty()) || !value.isEmpty();

        onKeyup((e, tig, value) -> {
            internalClear(onClear, visibility);
            if (Key.Enter.match(e) && !value.isEmpty()) {
                value("");
                if (labelGroup == null) {
                    addLabelGroup(LabelGroup.labelGroup().run(lg -> {
                        if (filterAdded != null) {
                            lg.onAdd((labels, label) -> filterAdded.accept(tig, label));
                        }
                        if (filterRemoved != null) {
                            lg.onRemove((labels, label) -> filterRemoved.accept(tig, label));
                        }
                    }));
                }
                labelGroup.addItem(label(value).outline().closable((event, component) -> {
                    if (labelGroup.isEmpty()) {
                        onClear.handle(event, tig);
                    }
                }));
            }
            if (icon != null && labelGroup != null && !labelGroup.isEmpty()) {
                removeIcon();
            }
        });
        onChange((__, tig, value) -> {
            internalClear(onClear, visibility);
            if (icon != null && labelGroup != null && !labelGroup.isEmpty()) {
                removeIcon();
            }
        });

        internalClear(onClear, visibility);
        if (icon != null) {
            icon(icon.get());
        }
        return this;
    }

    @Override
    public TextInputGroup2 icon(Element icon) {
        mainContainer.classList.add(modifier(Classes.icon));
        removeChildrenFrom(iconContainer);
        failSafeIconContainer().appendChild(icon);
        return this;
    }

    public TextInputGroup2 placeholder(String placeholder) {
        inputElement.placeholder = placeholder;
        return this;
    }

    @Override
    public TextInputGroup2 removeIcon() {
        mainContainer.classList.remove(modifier(icon));
        failSafeRemoveFromParent(iconContainer);
        iconContainer = null;
        return this;
    }

    @Override
    public TextInputGroup2 validated(ValidationStatus status) {
        // remove old status
        if (status != this.status) {
            if (this.status != null) {
                if (this.status.modifier != null) {
                    classList().remove(this.status.modifier);
                }
                if (this.status.icon != null) {
                    failSafeRemoveFromParent(statusContainer);
                    statusContainer = null;
                }
            }

            // assign status
            this.status = status;

            // apply new status
            if (status.modifier != null) {
                css(status.modifier);
            }
            if (status != default_ && status.icon != null) {
                failSafeStatusContainer().appendChild(status.icon.get().element());
            }
        }
        return this;
    }

    /** Same as {@linkplain #value(String, boolean) value(value, false)} */
    public TextInputGroup2 value(String value) {
        return value(value, false);
    }

    public TextInputGroup2 value(String value, boolean fireEvent) {
        //noinspection DuplicatedCode
        boolean changed = !Objects.equals(inputElement.value, value);
        inputElement.value = value;
        if (fireEvent && changed && !valueChangeHandlers.isEmpty()) {
            valueChangeHandlers.forEach(ch -> ch.onChange(new Event(""), this, value));
        }
        return this;
    }

    @Override
    public TextInputGroup2 that() {
        return this;
    }

    // ------------------------------------------------------ events

    /** Delegates to {@link TextInputGroupMain#onKeyup(ChangeHandler)} */
    public TextInputGroup2 onKeyup(ChangeHandler<TextInputGroup2, String> changeHandler) {
        keyupChangeHandlers.add(changeHandler);
        return this;
    }

    /** Delegates to {@link TextInputGroupMain#onChange(ChangeHandler)} */
    public TextInputGroup2 onChange(ChangeHandler<TextInputGroup2, String> changeHandler) {
        valueChangeHandlers.add(changeHandler);
        return this;
    }

    // ------------------------------------------------------ api

    /** Returns the underlying input element */
    public HTMLInputElementBuilder<HTMLInputElement> input() {
        return wrapInputElement(inputElement);
    }

    public LabelGroup labelGroup() {
        return labelGroup;
    }

    @Override
    public void resetValidation() {
        if (status != null) {
            classList().remove(this.status.modifier);
            failSafeRemoveFromParent(statusContainer);
            statusContainer = null;
        }
    }

    @Override
    public String value() {
        return inputElement.value;
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null) {
            insertFirst(textContainer, iconContainer = span().css(component(textInputGroup, icon)).element());
        }
        return iconContainer;
    }

    private HTMLElement failSafeStatusContainer() {
        if (statusContainer == null) {
            insertAfter(statusContainer = span().css(component(textInputGroup, icon), modifier(Classes.status)).element(),
                    inputElement);
        }
        return statusContainer;
    }

    private void internalClear(ComponentHandler<TextInputGroup2> onClear,
            BiFunction<TextInputGroup2, String, Boolean> visibility) {
        if (visibility.apply(this, value())) {
            if (utilities == null) {
                addUtilities(textInputGroupUtilities()
                        .add(button().icon(times()).plain()
                                .onClick((e, b) -> onClear.handle(e, this))));
            }
        } else {
            failSafeRemoveFromParent(utilities);
            utilities = null;
        }
    }
}
