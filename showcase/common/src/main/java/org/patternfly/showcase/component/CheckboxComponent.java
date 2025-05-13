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
import org.patternfly.component.form.Checkbox;
import org.patternfly.component.form.CheckboxBody;
import org.patternfly.component.form.CheckboxDescription;
import org.patternfly.showcase.Code;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.code;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.form.Checkbox.checkboxWrapped;
import static org.patternfly.component.form.CheckboxBody.checkboxBody;
import static org.patternfly.component.form.CheckboxDescription.checkboxDescription;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Classes.util;

@Route(value = "/components/forms/checkbox", title = "Checkbox")
public class CheckboxComponent extends SnippetPage {

    public CheckboxComponent() {
        super(components.get("checkbox"));

        startExamples();
        addSnippet(new Snippet("checkbox-basic", "Basic",
                Code.code("checkbox-basic"), () ->
                // @code-start:checkbox-basic
                div()
                        .add(checkbox("checkbox-basic-0", "checkbox-basic", "Checkbox 1")
                                .value(true))
                        .add(checkbox("checkbox-basic-1", "checkbox-basic", "Checkbox 2"))
                        .element()
                // @code-end:checkbox-basic
        ));

        addSnippet(new Snippet("checkbox-required", "Required",
                Code.code("checkbox-required"), () ->
                // @code-start:checkbox-required
                div()
                        .add(checkbox("checkbox-required-0", "checkbox-required", "Required checkbox 1")
                                .required()
                                .value(true))
                        .add(checkbox("checkbox-required-1", "checkbox-required", "Required checkbox 2")
                                .required())
                        .element()
                // @code-end:checkbox-required
        ));

        addSnippet(new Snippet("checkbox-disabled", "Disabled",
                Code.code("checkbox-disabled"), () ->
                // @code-start:checkbox-disabled
                div()
                        .add(checkbox("checkbox-disabled-0", "checkbox-disabled", "Disabled checkbox 1")
                                .disabled()
                                .value(true))
                        .add(checkbox("checkbox-disabled-1", "checkbox-disabled", "Disabled checkbox 2")
                                .disabled())
                        .element()
                // @code-end:checkbox-disabled
        ));

        addSnippet(new Snippet("checkbox-standalone", "Standalone input",
                Code.code("checkbox-standalone"), () ->
                // @code-start:checkbox-standalone
                div()
                        .add(checkbox("checkbox-standalone-0", "checkbox-standalone")
                                .standalone())
                        .add(br())
                        .add(checkbox("checkbox-standalone-1", "checkbox-standalone")
                                .standalone()
                                .value(true))
                        .element()
                // @code-end:checkbox-standalone
        ));

        addSnippet(new Snippet("checkbox-description", "Checkbox with description",
                Code.code("checkbox-description"), () ->
                // @code-start:checkbox-description
                div()
                        .add(checkbox("cwd-0", "cwd", "Checkbox with description")
                                .addDescription(checkboxDescription(LoremIpsum.words(50))))
                        .element()
                // @code-end:checkbox-description
        ));

        addSnippet(new Snippet("checkbox-body", "Checkbox with body",
                Code.code("checkbox-body"), () ->
                // @code-start:checkbox-body
                div()
                        .add(checkbox("cwb-0", "cwb", "Checkbox with body")
                                .addBody(checkboxBody("This is where custom content goes.")))
                        .element()
                // @code-end:checkbox-body
        ));

        addSnippet(new Snippet("checkbox-description-body", "Checkbox with description and body",
                Code.code("checkbox-description-body"), () ->
                // @code-start:checkbox-description-body
                div()
                        .add(checkbox("cdb-0", "cdb", "Checkbox with description and body")
                                .addDescription(checkboxDescription(LoremIpsum.words(50)))
                                .addBody(checkboxBody("This is where custom content goes.")))
                        .element()
                // @code-end:checkbox-description-body
        ));

        addSnippet(new Snippet("checkbox-wrapped", "Wrapped checkbox",
                Code.code("checkbox-wrapped"), () ->
                // @code-start:checkbox-wrapped
                div()
                        .add(p().css(util("mb-sm")).add(
                                        "You can expand the clickable area of a checkbox so that it spans wider than the checkbox label by using ")
                                .add(code().text("wrappedCheckbox()"))
                                .add(". This allows users to select a checkbox by clicking the checkbox itself, the label, the body, the description, and the area between these elements."))
                        .add(checkboxWrapped("checkbox-wrapped-0", "checkbox-wrapped", "Wrapped checkbox")
                                .addDescription(checkboxDescription(LoremIpsum.words(50)))
                                .addBody(checkboxBody("This is where custom content goes.")))
                        .element()
                // @code-end:checkbox-wrapped
        ));

        startApiDocs(Checkbox.class);
        addApiDoc(Checkbox.class, component);
        addApiDoc(CheckboxBody.class, subcomponent);
        addApiDoc(CheckboxDescription.class, subcomponent);
    }
}
