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
import org.patternfly.component.textinputgroup.FilterInputGroup;
import org.patternfly.component.textinputgroup.SearchInputGroup;
import org.patternfly.component.textinputgroup.SearchInputGroupTypeahead;
import org.patternfly.component.textinputgroup.TextInputGroup;
import org.patternfly.component.textinputgroup.TextInputGroupUtilities;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.showcase.model.DummyJson;
import org.patternfly.showcase.model.Words;

import static java.util.stream.Collectors.toList;
import static java.util.stream.IntStream.range;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.SelectionMode.click;
import static org.patternfly.component.ValidationStatus.error;
import static org.patternfly.component.ValidationStatus.success;
import static org.patternfly.component.ValidationStatus.warning;
import static org.patternfly.component.label.Label.label;
import static org.patternfly.component.menu.Menu.menu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.MenuType.menu;
import static org.patternfly.component.menu.SearchFilter.lastSegment;
import static org.patternfly.component.textinputgroup.BaseFilterInputGroup.DEFAULT_TEXT_TO_IDENTIFIER;
import static org.patternfly.component.textinputgroup.SearchInputGroup.searchInput;
import static org.patternfly.component.textinputgroup.TextInputGroup.textInputGroup;
import static org.patternfly.component.typeahead.RefreshStrategy.everyInput;
import static org.patternfly.component.typeahead.RefreshStrategy.structuralChange;
import static org.patternfly.icon.IconSets.rhUi.search;
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

        // ------------------------------------------------------ basic

        addSnippet(new Snippet("tig-basic", "Basic",
                "A basic text input group with a single text field.",
                code("tig-basic"), () ->
                // @code-start:tig-basic
                div()
                        .add(textInputGroup("basic-tig-0"))
                        .element()
                // @code-end:tig-basic
        ));

        addSnippet(new Snippet("tig-disabled", "Disabled",
                "A disabled text input group prevents user interaction.",
                code("tig-disabled"), () ->
                // @code-start:tig-disabled
                div()
                        .add(textInputGroup("disabled-tig-0", "Disabled")
                                .disabled())
                        .element()
                // @code-end:tig-disabled
        ));

        addSnippet(new Snippet("tig-search-input", "Utilities and icon",
                "A search input adds a search icon and a clear button that appears when text is entered.",
                code("tig-search-input"), () ->
                // @code-start:tig-search-input
                div()
                        .add(SearchInputGroup.searchInputGroup("tig-search-input-0").icon(search()))
                        .element()
                // @code-end:tig-search-input
        ));

        addSnippet(new Snippet("tig-validation", "With validation",
                "Text input groups support success, warning, and error validation states.",
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

        // ------------------------------------------------------ filter input

        addSnippet(new Snippet("tig-filter-input", "Filters (no duplicates)",
                "A filter input manages a group of labels. Duplicates can be prevented with allowDuplicates(false).",
                code("tig-filter-input"), () -> {
            // @code-start:tig-filter-input
            FilterInputGroup filterInput = FilterInputGroup.filterInputGroup("tig-filter-input-0").icon(search())
                    .allowDuplicates(false)
                    .onAdd((fi, filter) -> fi.removeIcon())
                    .onRemove((fi, filter) -> {
                        if (fi.labelGroup().isEmpty()) {
                            fi.icon(search());
                        }
                    });
            filterInput.labelGroup().addItems(range(1, 12).boxed().collect(toList()), index ->
                    label(DEFAULT_TEXT_TO_IDENTIFIER.apply("Label " + index), "Label " + index)
                            .outline().closable());
            return div().add(filterInput).element();
            // @code-end:tig-filter-input
        }));

        // ------------------------------------------------------ autocomplete

        addSnippet(new Snippet("tig-autocomplete", "Search with autocomplete",
                "A search input with an attached menu providing autocomplete suggestions. Items are loaded once and filtered locally as you type.",
                code("tig-autocomplete"), () ->
                // @code-start:tig-autocomplete
                div().add(SearchInputGroupTypeahead.searchInputGroupTypeahead("tig-autocomplete-0").icon(search())
                                .addMenu(menu(menu, click).scrollable()
                                        .addContent(menuContent()
                                                .addList(menuList()
                                                        .addItems(Words.data.asList(),
                                                                word -> menuItem(word, word))))))
                        .element()
                // @code-end:tig-autocomplete
        ));

        addSnippet(new Snippet("tig-autocomplete-debounce", "Search with autocomplete (debounce)",
                "Using everyInput(300), products are fetched from dummyjson.com on each keystroke (debounced at 300ms). The server handles all filtering.",
                code("tig-autocomplete-debounce"), () -> {
            // @code-start:tig-autocomplete-debounce
            SearchInputGroupTypeahead si = SearchInputGroupTypeahead.searchInputGroupTypeahead("tig-autocomplete-debounce-0")
                    .icon(search());
            si.refreshOn(everyInput(300))
                    .addMenu(menu(menu, click).scrollable()
                            .addContent(menuContent()
                                    .addList(menuList()
                                            .addItems(list -> DummyJson.searchProducts(si.value())))));
            return div().add(si).element();
            // @code-end:tig-autocomplete-debounce
        }));

        addSnippet(new Snippet("tig-autocomplete-structural", "Search with autocomplete (structural change)",
                "Using structuralChange(), categories load from dummyjson.com when the query first reaches 3 characters and filter locally as you type. When you type '/', products for that category load from the server. Try typing 'laptops/' or 'smartphones/iphone'.",
                code("tig-autocomplete-structural"), () -> {
            // @code-start:tig-autocomplete-structural
            SearchInputGroupTypeahead si = SearchInputGroupTypeahead.searchInputGroupTypeahead("tig-autocomplete-structural-0")
                    .icon(search());
            si.filter(lastSegment('/'))
                    .refreshOn(structuralChange(3, '/'))
                    .addMenu(menu(menu, click).scrollable()
                            .addContent(menuContent()
                                    .addList(menuList()
                                            .addItems(list -> {
                                                String value = si.value();
                                                int slash = value.indexOf('/');
                                                if (slash >= 0) {
                                                    return DummyJson.searchProductsByCategory(
                                                            value.substring(0, slash).trim());
                                                } else {
                                                    return DummyJson.searchCategories();
                                                }
                                            }))));
            return div().add(si).element();
            // @code-end:tig-autocomplete-structural
        }));

        startApiDocs(TextInputGroup.class);
        addApiDoc(TextInputGroup.class, component);
        addApiDoc(SearchInputGroup.class, component);
        addApiDoc(FilterInputGroup.class, component);
        addApiDoc(TextInputGroupUtilities.class, subcomponent);
    }

}
