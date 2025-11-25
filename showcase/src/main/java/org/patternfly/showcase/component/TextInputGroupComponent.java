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

import org.jboss.elemento.router.Route;
import org.patternfly.component.textinputgroup.TextInputGroup;
import org.patternfly.component.textinputgroup.TextInputGroupUtilities;
import org.patternfly.icon.IconSets;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.ValidationStatus.error;
import static org.patternfly.component.ValidationStatus.success;
import static org.patternfly.component.ValidationStatus.warning;
import static org.patternfly.component.textinputgroup.TextInputGroup.textInputGroup;
import static org.patternfly.icon.IconSets.fas.search;
import static org.patternfly.layout.flex.Direction.column;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.flex.FlexItem.flexItem;
import static org.patternfly.layout.flex.Gap.sm;
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
                        .add(TextInputGroup.textInputGroup("basic-tig-0"))
                        .element()
                // @code-end:tig-basic
        ));

        addSnippet(new Snippet("tig-disabled", "Disabled",
                code("tig-disabled"), () ->
                // @code-start:tig-disabled
                div()
                        .add(textInputGroup("disabled-tig-0", "Disabled")
                                .disabled())
                        .element()
                // @code-end:tig-disabled
        ));

        addSnippet(new Snippet("tig-utilities-and-icon", "Utilities and icon",
                code("tig-utilities-and-icon"), () ->
                // @code-start:tig-utilities-and-icon
                div()
                        .add(TextInputGroup.textInputGroup("utilities-tig-0")
                                .icon(search())
                                .clear())
                        .element()
                // @code-end:tig-utilities-and-icon
        ));

        addSnippet(new Snippet("tig-validation", "With validation",
                code("tig-validation"), () ->
                // @code-start:tig-validation
                div()
                        .add(flex().direction(column).rowGap(sm)
                                .addItem(flexItem()
                                        .add(textInputGroup("validation-tig-0", "Success validation")
                                                .validated(success)))
                                .addItem(flexItem()
                                        .add(textInputGroup("validation-tig-1",
                                                "Warning validation with custom non-status icon at start")
                                                .icon(search())
                                                .validated(warning)))
                                .addItem(flexItem()
                                        .add(textInputGroup("validation-tig-2",
                                                "Error validation with custom non-status icon at start and utilities")
                                                .icon(search())
                                                .validated(error)
                                                .clear())))
                        .element()
                // @code-end:tig-validation
        ));

        addSnippet(new Snippet("tig-filters", "Filters",
                code("tig-filters"), () ->
                // @code-start:tig-filters
                div()
                        .add(TextInputGroup.textInputGroup("filters-tig-0")
                                .filter(IconSets.fas::search,
                                        (tig, filter) -> console.log("Filter added: %s", filter.text()),
                                        (tig, filter) -> console.log("Filter removed: %s", filter.text())))
                        .element()
                // @code-end:tig-filters
        ));

        startApiDocs(TextInputGroup.class);
        addApiDoc(TextInputGroup.class, component);
        addApiDoc(TextInputGroupUtilities.class, subcomponent);
    }
}
