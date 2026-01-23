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
import java.util.function.BiConsumer;
import java.util.function.BiFunction;
import java.util.function.Function;

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.label.Label;
import org.patternfly.component.label.LabelGroup;
import org.patternfly.handler.ComponentHandler;

import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Key.Enter;
import static org.patternfly.component.label.Label.label;

public abstract class BaseFilterInput<T extends BaseFilterInput<T>> extends BaseSearchInput<T> {

    // ------------------------------------------------------ instance

    public static final Function<String, String> DEFAULT_TEXT_TO_IDENTIFIER = Id::build;
    public static final Function<String, Label> DEFAULT_TEXT_TO_LABEL = text ->
            label(DEFAULT_TEXT_TO_IDENTIFIER.apply(text), text).outline().closable();

    protected final List<ComponentHandler<T>> onEnter;
    protected final List<BiConsumer<T, Label>> onAdd;
    protected final List<BiConsumer<T, Label>> onRemove;
    protected boolean allowDuplicates;
    protected Function<String, String> textToIdentifier;
    protected Function<String, Label> textToLabel;
    protected ComponentHandler<T> addOnEnter;
    protected BiFunction<T, String, Boolean> labelGroupVisibility;
    protected LabelGroup labelGroup;

    protected BaseFilterInput(ComponentType componentType, String id) {
        super(componentType, id);
        this.allowDuplicates = true;
        this.onEnter = new ArrayList<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();
        this.defaultOnClear = (event, fi) -> {
            fi.value("");
            labelGroup.clear();
        };
        this.textToIdentifier = DEFAULT_TEXT_TO_IDENTIFIER;
        this.textToLabel = DEFAULT_TEXT_TO_LABEL;
        this.addOnEnter = (e, fi) -> {
            labelGroup.addItem(textToLabel.apply(fi.value()));
            value("");
        };
        this.utilitiesVisibility = (si, value) -> !value.isEmpty() || !labelGroup.isEmpty();
        this.labelGroupVisibility = (fi, value) -> !labelGroup.isEmpty();

        addLabelGroup(LabelGroup.labelGroup()
                .onAdd((__, label) -> {
                    toggleUtilities(value());
                    toggleLabelGroup(value());
                    onAdd.forEach(h -> h.accept(that(), label));
                })
                .onRemove((__, label) -> {
                    toggleUtilities(value());
                    toggleLabelGroup(value());
                    onRemove.forEach(h -> h.accept(that(), label));
                }));
        toggleLabelGroup(value());
        onKeyup((e, tig, value) -> {
            if (Enter.match(e) && !value.isEmpty()) {
                if (addOnEnter != null) {
                    if (allowDuplicates) {
                        addOnEnter.handle(e, that());
                    } else {
                        String identifier = textToIdentifier.apply(value);
                        if (!labelGroup.contains(identifier)) {
                            addOnEnter.handle(e, that());
                        }
                    }
                }
                onEnter.forEach(h -> h.handle(e, that()));
            }
        });
    }

    // ------------------------------------------------------ add

    public T addLabelGroup(LabelGroup labelGroup) {
        return add(labelGroup);
    }

    // override to ensure internal wiring
    public T add(LabelGroup labelGroup) {
        this.labelGroup = labelGroup;
        insertFirst(mainContainer, labelGroup);
        return that();
    }

    // ------------------------------------------------------ builder

    /**
     * Allows duplicate entries to be added to the filter input. This method enables duplicates by delegating to the
     * {@link #allowDuplicates(boolean)} method with a default value of {@code true}.
     * <p>
     * The flag only applies if the default add-on-enter has not been disabled using {@link #noAddOnEnter()}.
     *
     * @return This instance with duplicate entries enabled, allowing method chaining.
     */
    public T allowDuplicates() {
        return allowDuplicates(true);
    }

    /**
     * Allows or disallows duplicate entries in the filter input.
     * <p>
     * The flag only applies if the default add-on-enter has not been disabled using {@link #noAddOnEnter()}.
     *
     * @param allowDuplicates A boolean flag indicating whether duplicate entries should be allowed. If {@code true}, duplicates
     *                        are permitted; otherwise, they are rejected.
     * @return This instance with the duplicate entry behavior updated, allowing method chaining.
     */
    public T allowDuplicates(boolean allowDuplicates) {
        this.allowDuplicates = allowDuplicates;
        return that();
    }

    /**
     * Disables the default behavior of adding an item to the label group when the Enter key is pressed. You can add a custom
     * enter-handler using {@link #onEnter(ComponentHandler)}.
     * <p>
     * The default behavior is to turn the entered text into a label and add it to the label group using the
     * {@link #textToIdentifier()} and {@link #textToLabel()} functions.
     *
     * @return This instance with the "add on Enter" functionality disabled, allowing method chaining.
     */
    public T noAddOnEnter() {
        this.addOnEnter = null;
        return that();
    }

    public T textToIdentifier(Function<String, String> textToIdentifier) {
        this.textToIdentifier = textToIdentifier;
        return that();
    }

    public T textToLabel(Function<String, Label> textToLabel) {
        this.textToLabel = textToLabel;
        return that();
    }

    public T showLabelGroupIf(BiFunction<T, String, Boolean> visibility) {
        this.labelGroupVisibility = visibility;
        toggleLabelGroup(value());
        return that();
    }

    // ------------------------------------------------------ events

    public T onAdd(BiConsumer<T, Label> onAdd) {
        this.onAdd.add(onAdd);
        return that();
    }

    public T onRemove(BiConsumer<T, Label> onRemove) {
        this.onRemove.add(onRemove);
        return that();
    }

    public T onEnter(ComponentHandler<T> onEnter) {
        this.onEnter.add(onEnter);
        return that();
    }

    // ------------------------------------------------------ api

    public LabelGroup labelGroup() {
        return labelGroup;
    }

    public Function<String, String> textToIdentifier() {
        return textToIdentifier;
    }

    public Function<String, Label> textToLabel() {
        return textToLabel;
    }

    @Override
    public T value(String value) {
        return value(value, false);
    }

    @Override
    public T value(String value, boolean fireEvent) {
        super.value(value, fireEvent);
        toggleLabelGroup(value);
        return that();
    }

    // ------------------------------------------------------ internal

    /**
     * Updates the visibility state of the label group based on the provided value. The visibility is determined by applying the
     * {@code labelGroupVisibility} function using the current instance and the given value.
     * <p>
     * This method can be overridden by subclasses to customize the behavior of the label group toggling.
     *
     * @param value The input value used to determine the visibility of the label group.
     */
    protected void toggleLabelGroup(String value) {
        setVisible(labelGroup, labelGroupVisibility.apply(that(), value));
    }
}
