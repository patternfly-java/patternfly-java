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

import org.jboss.elemento.Attachable;
import org.jboss.elemento.InputElementBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.chip.ChipGroup;
import org.patternfly.core.HasValue;
import org.patternfly.core.Modifiers.Disabled;
import org.patternfly.handler.ChangeHandler;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.wrapInputElement;
import static org.patternfly.component.ComponentStore.storeComponent;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.textInputGroup;

/**
 * A text input group is a more flexible composable version of a text input. It enables consumers of PatternFly to build custom
 * inputs for filtering and similar use cases by placing elements like icons, chips groups and buttons within a text input.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/text-input-group/html">https://www.patternfly.org/components/text-input-group/html</a>
 */
public class TextInputGroup extends BaseComponent<HTMLDivElement, TextInputGroup> implements
        HasValue<String>, Disabled<HTMLDivElement, TextInputGroup>, Attachable {

    // ------------------------------------------------------ factory

    public static TextInputGroup textInputGroup() {
        return new TextInputGroup();
    }

    // ------------------------------------------------------ instance

    boolean initialDisabled;
    ChangeHandler<TextInputGroup, String> changeHandler;
    private TextInputGroupMain main;
    private TextInputGroupUtilities utilities;

    TextInputGroup() {
        super(div().css(component(textInputGroup)).element(), ComponentType.TextInputGroup);
        storeComponent(this);
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (initialDisabled && main != null) {
            main.disabled(true);
        }
    }

    // ------------------------------------------------------ add

    public TextInputGroup addMain(TextInputGroupMain main) {
        return add(main);
    }

    // override to assure internal wiring
    public TextInputGroup add(TextInputGroupMain main) {
        this.main = main;
        add(main.element());
        return this;
    }

    public TextInputGroup addUtilities(TextInputGroupUtilities utilities) {
        this.utilities = utilities;
        return add(utilities);
    }

    // override to assure internal wiring
    public TextInputGroup add(TextInputGroupUtilities utilities) {
        this.utilities = utilities;
        add(utilities.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public TextInputGroup disabled(boolean disabled) {
        if (main == null) {
            initialDisabled = disabled;
        } else {
            main.disabled(disabled);
        }
        return Disabled.super.disabled(disabled);
    }

    @Override
    public TextInputGroup that() {
        return this;
    }

    // ------------------------------------------------------ events

    public TextInputGroup onChange(ChangeHandler<TextInputGroup, String> handler) {
        changeHandler = handler;
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String value() {
        return main != null ? main.inputElement.value : null;
    }

    public void clear() {
        if (main != null) {
            main.inputElement.value = "";
        }
    }

    public void showUtilities(boolean show) {
        if (utilities != null) {
            setVisible(utilities, show);
        }
    }

    /** Returns the underlying input element */
    public InputElementBuilder<HTMLInputElement> inputElement() {
        if (main != null) {
            return wrapInputElement(main.inputElement);
        }
        return null;
    }

    /** Returns the underlying chip group (if any) */
    public ChipGroup chipGroup() {
        if (main != null) {
            return main.chipGroup;
        }
        return null;
    }

    @SuppressWarnings("ConfusingMainMethod")
    public TextInputGroupMain main() {
        return main;
    }

    public TextInputGroupUtilities utilities() {
        return utilities;
    }
}
