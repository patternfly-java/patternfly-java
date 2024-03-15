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
import org.patternfly.component.form.TextInput;
import org.patternfly.component.form.TextInputType;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.ValidationStatus.error;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.form.TextInput.textInput;
import static org.patternfly.icon.IconSets.fas.calendar;
import static org.patternfly.icon.IconSets.fas.clock;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Classes.util;

@Route(value = "/components/forms/text-input", title = "Text input")
public class TextInputComponent extends SnippetPage {

    public TextInputComponent() {
        super(components.get("text-input"));

        startExamples();
        addSnippet(new Snippet("text-input-basic", "Basic",
                code("text-input-basic"), () ->
                // @code-start:text-input-basic
                div()
                        .add(textInput("basic-text-input-0"))
                        .element()
                // @code-end:text-input-basic
        ));

        addSnippet(new Snippet("text-input-disabled", "Disabled",
                code("text-input-disabled"), () ->
                // @code-start:text-input-disabled
                div()
                        .add(textInput("disabled-text-input-0", "disabled text input example")
                                .disabled())
                        .element()
                // @code-end:text-input-disabled
        ));

        addSnippet(new Snippet("text-input-readonly", "Read only",
                code("text-input-readonly"), () -> {
            // @code-start:text-input-readonly
            Checkbox plainToggle = checkbox("plain-toggle", "plain-toggle", "Plain read only variant");
            TextInput readOnlyTextInput = textInput("readonly-text-input-0", "read only text input example")
                    .readonly();
            return div()
                    .add(div().css(util("mb-sm"))
                            .add(plainToggle.onChange((e, c, value) -> readOnlyTextInput.plain(value))))
                    .add(readOnlyTextInput)
                    .element();
            // @code-end:text-input-readonly
        }));

        addSnippet(new Snippet("text-input-invalid", "Invalid",
                code("text-input-invalid"), () ->
                // @code-start:text-input-invalid
                div()
                        .add(textInput("invalid-text-input-0").validated(error))
                        .element()
                // @code-end:text-input-invalid
        ));

        addSnippet(new Snippet("text-input-custom-icon", "Custom icon",
                code("text-input-custom-icon"), () ->
                // @code-start:text-input-custom-icon
                div()
                        .add(textInput("custom-icon-text-input-0").css(util("mb-sm"))
                                .icon(calendar))
                        .add(textInput("custom-icon-text-input-1")
                                .icon(clock))
                        .element()
                // @code-end:text-input-custom-icon
        ));

        addSnippet(new Snippet("text-input-custom-icon-and-invalid", "Custom icon and invalid",
                code("text-input-custom-icon-and-invalid"), () ->
                // @code-start:text-input-custom-icon-and-invalid
                div()
                        .add(textInput("custom-icon-and-invalid-text-input-0")
                                .validated(error)
                                .icon(calendar))
                        .element()
                // @code-end:text-input-custom-icon-and-invalid
        ));

        startApiDocs(TextInput.class);
        addApiDoc(TextInput.class, component);
        addApiDoc(TextInputType.class, other);
    }
}
