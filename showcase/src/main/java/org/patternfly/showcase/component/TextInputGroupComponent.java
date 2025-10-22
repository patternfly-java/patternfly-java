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
import org.patternfly.component.textinputgroup.TextInputGroupMain;
import org.patternfly.component.textinputgroup.TextInputGroupUtilities;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.textinputgroup.TextInputGroup.filterInputGroup;
import static org.patternfly.component.textinputgroup.TextInputGroup.searchInputGroup;
import static org.patternfly.component.textinputgroup.TextInputGroup.textInputGroup;
import static org.patternfly.component.textinputgroup.TextInputGroupMain.textInputGroupMain;
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
                code("tig-utilities-and-icon"), () ->
                // @code-start:tig-utilities-and-icon
                div()
                        .add(searchInputGroup("Placeholder"))
                        .element()
                // @code-end:tig-utilities-and-icon
        ));

        addSnippet(new Snippet("tig-filters", "Filters",
                code("tig-filters"), () ->
                // @code-start:tig-filters
                div()
                        .add(filterInputGroup())
                        .element()
                // @code-end:tig-filters
        ));

        startApiDocs(TextInputGroup.class);
        addApiDoc(TextInputGroup.class, component);
        addApiDoc(TextInputGroupMain.class, subcomponent);
        addApiDoc(TextInputGroupUtilities.class, subcomponent);
    }
}
