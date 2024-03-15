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
package org.patternfly.showcase.component;

import org.jboss.elemento.Key;
import org.jboss.elemento.router.Route;
import org.patternfly.component.chip.Chip;
import org.patternfly.component.chip.ChipGroup;
import org.patternfly.component.textinputgroup.TextInputGroup;
import org.patternfly.component.textinputgroup.TextInputGroupMain;
import org.patternfly.component.textinputgroup.TextInputGroupUtilities;
import org.patternfly.core.ObservableValue;
import org.patternfly.handler.CloseHandler;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.chip.Chip.chip;
import static org.patternfly.component.chip.ChipGroup.chipGroup;
import static org.patternfly.component.textinputgroup.TextInputGroup.textInputGroup;
import static org.patternfly.component.textinputgroup.TextInputGroupMain.textInputGroupMain;
import static org.patternfly.component.textinputgroup.TextInputGroupUtilities.textInputGroupUtilities;
import static org.patternfly.core.ObservableValue.ov;
import static org.patternfly.icon.IconSets.fas.search;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/text-input-group", title = "Text input group")
public class TextInputGroupComponent extends SnippetPage {

    public TextInputGroupComponent() {
        super(components.get("text-input-group"));

        startExamples();
        addSnippet(new Snippet("tig-basic", "Basic",
                code("tig-basic"), () ->
                // @code-start:tig-basic
                div()
                        .add(textInputGroup()
                                .addMain(textInputGroupMain("basic-text-input-group-0")))
                        .element()
                // @code-end:tig-basic
        ));

        addSnippet(new Snippet("tig-disabled", "Disabled",
                code("tig-disabled"), () ->
                // @code-start:tig-disabled
                div()
                        .add(textInputGroup()
                                .addMain(textInputGroupMain("disabled-text-input-group-0")
                                        .value("Disabled"))
                                .disabled())
                        .element()
                // @code-end:tig-disabled
        ));

        addSnippet(new Snippet("tig-utilities-and-icon", "Utilities and icon",
                code("tig-utilities-and-icon"), () -> {
            // @code-start:tig-utilities-and-icon
            TextInputGroup textInputGroup = textInputGroup();
            textInputGroup
                    .addMain(textInputGroupMain("tig-utilities-and-icon-0")
                            .icon(search)
                            .placeholder("Placeholder")
                            .onChange((e, tig, value) -> setVisible(tig.utilities(), !value.isEmpty())))
                    .addUtilities(textInputGroupUtilities()
                            .add(button().icon(times).plain()
                                    .on(click, e -> textInputGroup.main().value("", true))));
            return div()
                    .add(textInputGroup)
                    .element();
            // @code-end:tig-utilities-and-icon
        }));

        addSnippet(new Snippet("tig-filters", "Filters",
                code("tig-filters"), () -> {
            // @code-start:tig-filters
            ObservableValue<Boolean> chipsPresent = ov(true);
            ObservableValue<Boolean> textEntered = ov(false);

            TextInputGroup textInputGroup = textInputGroup();
            ChipGroup chipGroup = chipGroup();
            CloseHandler<Chip> closeHandler = (event, chip) -> chipsPresent.set(!chipGroup.values().isEmpty());
            chipGroup.addChips(asList("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
                    "eleven", "twelve"), text -> chip(text).onClose(closeHandler));

            textInputGroup
                    .addMain(textInputGroupMain("tig-filters-0")
                            .addChipGroup(chipGroup)
                            .placeholder("Placeholder")
                            .onChange((e, tig, value) -> {
                                textEntered.set(!value.isEmpty());
                                if (Key.Enter.match(e) && !value.isEmpty()) {
                                    chipGroup.addChip(chip(value).onClose(closeHandler));
                                    tig.main().value("");
                                    chipsPresent.set(true);
                                    textEntered.set(false);
                                }
                            }))
                    .addUtilities(textInputGroupUtilities(false)
                            .add(button().icon(times).plain()
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
                    textInputGroup.main().icon(search);
                    setVisible(textInputGroup.utilities(), textEntered.get());
                }
            });
            textEntered.subscribe((current, previous) -> {
                if (current) {
                    setVisible(textInputGroup.utilities(), true);
                } else {
                    setVisible(textInputGroup.utilities(), chipsPresent.get());
                }
            });

            return div()
                    .add(textInputGroup)
                    .element();
            // @code-end:tig-filters
        }));

        startApiDocs(TextInputGroup.class);
        addApiDoc(TextInputGroup.class, component);
        addApiDoc(TextInputGroupMain.class, subcomponent);
        addApiDoc(TextInputGroupUtilities.class, subcomponent);
    }
}
