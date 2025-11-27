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

import org.jboss.elemento.Id;
import org.jboss.elemento.router.Route;
import org.patternfly.component.textinputgroup.FilterInput;
import org.patternfly.component.textinputgroup.SearchInput;
import org.patternfly.component.textinputgroup.TextInputGroup;
import org.patternfly.component.textinputgroup.TextInputGroupUtilities;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static elemental2.dom.DomGlobal.console;
import static java.util.stream.Collectors.toList;
import static java.util.stream.IntStream.range;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.ValidationStatus.error;
import static org.patternfly.component.ValidationStatus.success;
import static org.patternfly.component.ValidationStatus.warning;
import static org.patternfly.component.label.Label.label;
import static org.patternfly.component.textinputgroup.FilterInput.filterInput;
import static org.patternfly.component.textinputgroup.SearchInput.searchInput;
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
                        .add(textInputGroup("basic-tig-0"))
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

        addSnippet(new Snippet("tig-search-input", "Utilities and icon",
                code("tig-search-input"), () ->
                // @code-start:tig-search-input
                div()
                        .add(searchInput("tig-search-input-0").icon(search()))
                        .element()
                // @code-end:tig-search-input
        ));

        addSnippet(new Snippet("tig-validation", "With validation",
                code("tig-validation"), () ->
                // @code-start:tig-validation
                div()
                        .add(flex().direction(column).rowGap(sm)
                                .addItem(flexItem()
                                        .add(textInputGroup("tig-validation-0", "Success validation")
                                                .validated(success)))
                                .addItem(flexItem()
                                        .add(textInputGroup("tig-validation-1",
                                                "Warning validation with custom non-status icon at start")
                                                .icon(search())
                                                .validated(warning)))
                                .addItem(flexItem()
                                        .add(searchInput("tig-validation-2",
                                                "Error validation with custom non-status icon at start and utilities")
                                                .icon(search())
                                                .validated(error))))
                        .element()
                // @code-end:tig-validation
        ));

        addSnippet(new Snippet("tig-filter-input", "Filters",
                code("tig-filter-input"), () ->
        {
            // @code-start:tig-filter-input
            FilterInput filterInput = filterInput("tig-filter-input-0").icon(search())
                    .onAdd((fi, filter) -> {
                        fi.removeIcon();
                        console.log("Filter added: %s", filter.text());
                    })
                    .onRemove((fi, filter) -> {
                        if (fi.labelGroup().isEmpty()) {
                            fi.icon(search());
                        }
                        console.log("Filter removed: %s", filter.text());
                    });
            filterInput.labelGroup().addItems(range(1, 12).boxed().collect(toList()), index ->
                    label(Id.build("tig-filter-input-label", String.valueOf(index)),
                            "Label " + index).closable());
            return div().add(filterInput).element();
            // @code-end:tig-filter-input
        }));

        startApiDocs(TextInputGroup.class);
        addApiDoc(TextInputGroup.class, component);
        addApiDoc(SearchInput.class, component);
        addApiDoc(FilterInput.class, component);
        addApiDoc(TextInputGroupUtilities.class, subcomponent);
    }
}
