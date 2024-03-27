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
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.form.CheckboxBody.checkboxBody;
import static org.patternfly.component.form.CheckboxDescription.checkboxDescription;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/forms/checkbox", title = "Checkbox")
public class CheckboxComponent extends SnippetPage {

    public CheckboxComponent() {
        super(components.get("checkbox"));

        startExamples();
        addSnippet(new Snippet("checkbox-basic", "Basic",
                code("checkbox-basic"), () ->
                // @code-start:checkbox-basic
                div()
                        .add(checkbox("basic-checkbox-0", "basic-checkbox", "Checkbox 1")
                                .value(true))
                        .add(checkbox("basic-checkbox-1", "basic-checkbox", "Checkbox 2"))
                        .element()
                // @code-end:checkbox-basic
        ));

        addSnippet(new Snippet("checkbox-disabled", "Disabled",
                code("checkbox-disabled"), () ->
                // @code-start:checkbox-disabled
                div()
                        .add(checkbox("disabled-checkbox-0", "disabled-checkbox", "Disabled checkbox 1")
                                .value(true)
                                .disabled())
                        .add(checkbox("disabled-checkbox-1", "disabled-checkbox", "Disabled checkbox 2")
                                .disabled())
                        .element()
                // @code-end:checkbox-disabled
        ));

        addSnippet(new Snippet("checkbox-description", "Checkbox with description",
                code("checkbox-description"), () ->
                // @code-start:checkbox-description
                div()
                        .add(checkbox("cwd-0", "cwd", "Checkbox with description")
                                .addDescription(checkboxDescription(LoremIpsum.words(50))))
                        .element()
                // @code-end:checkbox-description
        ));

        addSnippet(new Snippet("checkbox-body", "Checkbox with body",
                code("checkbox-body"), () ->
                // @code-start:checkbox-body
                div()
                        .add(checkbox("cwb-0", "cwb", "Checkbox with body")
                                .addBody(checkboxBody("This is where custom content goes.")))
                        .element()
                // @code-end:checkbox-body
        ));

        addSnippet(new Snippet("checkbox-description-body", "Checkbox with description and body",
                code("checkbox-description-body"), () ->
                // @code-start:checkbox-description-body
                div()
                        .add(checkbox("cdb-0", "cdb", "Checkbox with description and body")
                                .addDescription(checkboxDescription(LoremIpsum.words(50)))
                                .addBody(checkboxBody("This is where custom content goes.")))
                        .element()
                // @code-end:checkbox-description-body
        ));

        addSnippet(new Snippet("checkbox-standalone", "Standalone input",
                code("checkbox-standalone"), () ->
                // @code-start:checkbox-standalone
                div()
                        .add(checkbox("standalone-checkbox-0", "standalone-checkbox")
                                .standalone())
                        .element()
                // @code-end:checkbox-standalone
        ));

        addSnippet(new Snippet("checkbox-required", "Required input",
                code("checkbox-required"), () ->
                // @code-start:checkbox-required
                div()
                        .add(checkbox("required-checkbox-0", "required-checkbox", "Required checkbox")
                                .required())
                        .element()
                // @code-end:checkbox-required
        ));

        startApiDocs(Checkbox.class);
        addApiDoc(Checkbox.class, component);
        addApiDoc(CheckboxBody.class, subcomponent);
        addApiDoc(CheckboxDescription.class, subcomponent);
    }
}
