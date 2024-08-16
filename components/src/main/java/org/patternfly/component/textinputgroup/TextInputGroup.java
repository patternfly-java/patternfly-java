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
import org.jboss.elemento.Id;
import org.jboss.elemento.Key;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.chip.Chip;
import org.patternfly.component.chip.ChipGroup;
import org.patternfly.core.ObservableValue;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.handler.CloseHandler;
import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.chip.Chip.chip;
import static org.patternfly.component.chip.ChipGroup.chipGroup;
import static org.patternfly.component.textinputgroup.TextInputGroupMain.textInputGroupMain;
import static org.patternfly.component.textinputgroup.TextInputGroupUtilities.textInputGroupUtilities;
import static org.patternfly.core.ObservableValue.ov;
import static org.patternfly.icon.IconSets.fas.search;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.textInputGroup;

/**
 * A text input group is a more flexible composable version of a text input. It enables consumers of PatternFly to build custom
 * inputs for filtering and similar use cases by placing elements like icons, chips groups and buttons within a text input.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/text-input-group">https://www.patternfly.org/components/text-input-group</a>
 */
public class TextInputGroup extends BaseComponent<HTMLDivElement, TextInputGroup> implements
        Disabled<HTMLDivElement, TextInputGroup>, Attachable {

    // ------------------------------------------------------ factory

    public static TextInputGroup textInputGroup() {
        return new TextInputGroup();
    }

    public static TextInputGroup searchInputGroup(String placeholder) {
        TextInputGroup textInputGroup = textInputGroup();
        ObservableValue<Boolean> textEntered = ov(false);

        textInputGroup
                .addMain(textInputGroupMain(Id.unique(ComponentType.TextInputGroup.id, "sig"))
                        .icon(search())
                        .placeholder(placeholder)
                        .onChange((e, tig, value) -> textEntered.set(!value.isEmpty())))
                .addUtilities(textInputGroupUtilities()
                        .add(button().icon(times()).plain()
                                .on(click, e -> {
                                    textInputGroup.main().value("", true);
                                    textEntered.change(false);
                                })));

        textEntered.subscribe((current, previous) -> setVisible(textInputGroup.utilities(), current));
        textEntered.publish();

        return textInputGroup;
    }

    public static TextInputGroup filterInputGroup(String placeholder) {
        ChipGroup chipGroup = chipGroup();
        TextInputGroup textInputGroup = textInputGroup();
        ObservableValue<Boolean> chipsPresent = ov(false);
        ObservableValue<Boolean> textEntered = ov(false);
        CloseHandler<Chip> closeHandler = (event, chip) -> chipsPresent.set(!chipGroup.isEmpty());

        textInputGroup
                .addMain(textInputGroupMain(Id.unique(ComponentType.TextInputGroup.id, "fig"))
                        .addChipGroup(chipGroup)
                        .placeholder(placeholder)
                        .onChange((e, tig, value) -> {
                            textEntered.set(!value.isEmpty());
                            if (Key.Enter.match(e) && !value.isEmpty()) {
                                chipGroup.addItem(chip(value).onClose(closeHandler));
                                tig.main().value("");
                                chipsPresent.set(true);
                                textEntered.set(false);
                            }
                        }))
                .addUtilities(textInputGroupUtilities(false)
                        .add(button().icon(times()).plain()
                                .on(click, e -> {
                                    chipGroup.clear();
                                    textInputGroup.main().value("");
                                    chipsPresent.set(false);
                                    textEntered.change(false);
                                })));

        chipsPresent.subscribe((current, previous) -> {
            setVisible(chipGroup, current);
            if (current) {
                textInputGroup.main().removeIcon();
            } else {
                textInputGroup.main().icon(search());
                setVisible(textInputGroup.utilities(), textEntered.get());
            }
        });
        chipsPresent.publish();

        textEntered.subscribe((current, previous) -> {
            if (current) {
                setVisible(textInputGroup.utilities(), true);
            } else {
                setVisible(textInputGroup.utilities(), chipsPresent.get());
            }
        });
        textEntered.publish();

        return textInputGroup;
    }

    // ------------------------------------------------------ instance

    boolean initialDisabled;
    private TextInputGroupMain main;
    private TextInputGroupUtilities utilities;

    TextInputGroup() {
        super(ComponentType.TextInputGroup, div().css(component(textInputGroup)).element());
        storeComponent();
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

    // override to ensure internal wiring
    public TextInputGroup add(TextInputGroupMain main) {
        this.main = main;
        add(main.element());
        return this;
    }

    public TextInputGroup addUtilities(TextInputGroupUtilities utilities) {
        this.utilities = utilities;
        return add(utilities);
    }

    // override to ensure internal wiring
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

    /** Delegates to {@link TextInputGroupMain#onChange(ChangeHandler)} */
    public TextInputGroup onChange(ChangeHandler<TextInputGroup, String> changeHandler) {
        main.onChange(changeHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @SuppressWarnings("ConfusingMainMethod")
    public TextInputGroupMain main() {
        return main;
    }

    public TextInputGroupUtilities utilities() {
        return utilities;
    }
}
