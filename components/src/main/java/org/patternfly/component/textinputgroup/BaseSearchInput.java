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

import java.util.List;
import java.util.function.BiFunction;

import org.patternfly.component.ComponentType;
import org.patternfly.handler.ComponentHandler;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.textinputgroup.TextInputGroupUtilities.textInputGroupUtilities;
import static org.patternfly.icon.IconSets.fas.times;

public abstract class BaseSearchInput<T extends BaseSearchInput<T>> extends BaseTextInputGroup<T> {

    // ------------------------------------------------------ instance

    protected final List<ComponentHandler<T>> onClear;
    protected ComponentHandler<T> defaultOnClear;
    protected BiFunction<T, String, Boolean> visibility;

    protected BaseSearchInput(ComponentType componentType, String id) {
        super(componentType, id);
        this.onClear = new java.util.ArrayList<>();
        this.defaultOnClear = (e, si) -> si.value("");
        this.visibility = (si, value) -> !value.isEmpty();

        hideOrShowClear(value());
        onKeyup((e, si, value) -> hideOrShowClear(value));
        onChange((e, si, value) -> hideOrShowClear(value));
    }

    // ------------------------------------------------------ builder

    /**
     * Removes the default behavior when the component is cleared. By default, the clear button clears the input field (w/o
     * firing a change event).
     */
    public T noDefaultOnClear() {
        this.defaultOnClear = null;
        return that();
    }

    /**
     * Sets the visibility condition for the utility button. By default, the button is visible when the input field is not
     * empty. The provided {@link BiFunction} determines whether the utility should be visible based on the current
     * {@code SearchInput} instance and a {@link String} value.
     *
     * @param visibility a {@link BiFunction} that takes the {@code SearchInput} instance and a {@link String} value as
     *                   arguments and returns a {@link Boolean} indicating whether the utility should be visible.
     */
    public T showClearWhen(BiFunction<T, String, Boolean> visibility) {
        this.visibility = visibility;
        hideOrShowClear(value());
        return that();
    }

    // ------------------------------------------------------ events

    /**
     * Adds a handler to be executed when the clear action is pressed.
     *
     * @param onClear a {@link ComponentHandler} that defines the behavior to execute on a clear action.
     */
    public T onClear(ComponentHandler<T> onClear) {
        this.onClear.add(onClear);
        return that();
    }

    // ------------------------------------------------------ api

    @Override
    public T value(String value) {
        return value(value, false);
    }

    @Override
    public T value(String value, boolean fireEvent) {
        super.value(value, fireEvent);
        hideOrShowClear(value);
        return that();
    }

    // ------------------------------------------------------ internal

    protected void hideOrShowClear(String value) {
        if (visibility.apply(that(), value)) {
            if (utilities == null) {
                addUtilities(textInputGroupUtilities()
                        .add(button().icon(times()).plain().onClick((e, b) -> {
                            if (defaultOnClear != null) {
                                defaultOnClear.handle(e, that());
                            }
                            onClear.forEach(handler ->
                                    handler.handle(e, that()));
                        })));
            }
        } else {
            failSafeRemoveFromParent(utilities);
            utilities = null;
        }
    }
}
