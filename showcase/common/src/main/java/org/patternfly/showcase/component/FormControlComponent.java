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

import java.util.List;

import org.jboss.elemento.Id;
import org.jboss.elemento.router.Route;
import org.patternfly.component.form.FormControl;
import org.patternfly.component.form.FormSelectOption;
import org.patternfly.core.Tuples;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.ValidationStatus.error;
import static org.patternfly.component.ValidationStatus.success;
import static org.patternfly.component.ValidationStatus.warning;
import static org.patternfly.component.form.FormSelect.formSelect;
import static org.patternfly.component.form.FormSelectOption.formSelectOption;
import static org.patternfly.component.form.FormSelectOptionGroup.formSelectOptionGroup;
import static org.patternfly.component.form.TextArea.textArea;
import static org.patternfly.component.form.TextAreaResize.both;
import static org.patternfly.component.form.TextAreaResize.horizontal;
import static org.patternfly.component.form.TextAreaResize.vertical;
import static org.patternfly.component.form.TextInput.textInput;
import static org.patternfly.core.Tuples.tuples;
import static org.patternfly.icon.IconSets.fas.calendar;
import static org.patternfly.icon.IconSets.fas.clock;
import static org.patternfly.icon.IconSets.patternfly.bell;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/forms/form-control", title = "Form control")
public class FormControlComponent extends SnippetPage {

    public FormControlComponent() {
        super(components.get("form-control"));

        startExamples();
        addSnippet(new Snippet("form-control-text-input", "Text input",
                code("form-control-text-input"), () ->
                // @code-start:form-control-text-input
                div()
                        .add(textInput("text-input-0", "Standard"))
                        .add(br())
                        .add(textInput("text-input-1").placeholder("Placeholder"))
                        .add(br())
                        .add(textInput("text-input-2", "Readonly").readonly())
                        .add(br())
                        .add(textInput("text-input-3", "Readonly plain").plain())
                        .add(br())
                        .add(textInput("text-input-4", "Disabled").disabled())
                        .add(br())
                        .add(textInput("text-input-5", "Success").validated(success))
                        .add(br())
                        .add(textInput("text-input-6", "Warning").validated(warning))
                        .add(br())
                        .add(textInput("text-input-7", "Error").validated(error))
                        .add(br())
                        .add(textInput("text-input-8", "Expanded").expanded())
                        .add(br())
                        .add(textInput("text-input-9", "Calendar").icon(calendar))
                        .add(br())
                        .add(textInput("text-input-10", "Clock (invalid)")
                                .validated(warning)
                                .icon(clock))
                        .add(br())
                        .add(textInput("text-input-11", "Custom icon").icon(bell))
                        .element()
                // @code-end:form-control-text-input
        ));

        addSnippet(new Snippet("form-control-select", "Form select",
                code("form-control-select"), () -> {
            // @code-start:form-control-select
            String[] values0 = {"Mr", "Miss", "Mrs", "Ms", "Dr", "Other"};

            Tuples<String, Tuples<String, Boolean>> groups0 = tuples(
                    "Group 1", tuples(
                            "The first option", false,
                            "Option groups (second option selected)", false),
                    "Group 2", tuples(
                            "The third option", false,
                            "The fourth option", true));

            Tuples<String, List<String>> groups1 = tuples(
                    "Group 1", asList("The first option", "The second option"),
                    "Group 2", asList("The third option", "The fourth option"));

            return div()
                    .add(formSelect("form-select-0")
                            .addOption(formSelectOption("Selectable placeholder").placeholder(true))
                            .addOptions(asList(values0).subList(0, 5), FormSelectOption::formSelectOption)
                            .addOption(formSelectOption("Disabled option").disabled())
                            .addOption(formSelectOption(values0[5])))
                    .add(br())
                    .add(formSelect("form-select-1")
                            .addOption(formSelectOption("Non-selectable placeholder").placeholder(false))
                            .addOptions(asList(values0), FormSelectOption::formSelectOption))
                    .add(br())
                    .add(formSelect("form-select-2", Id.build("Option groups (second option selected)"))
                            .addGroups(groups0, g -> formSelectOptionGroup(g.key)
                                    .addOptions(g.value, v -> formSelectOption(v.key).disabled(v.value))))
                    .add(br())
                    .add(formSelect("form-select-3", Id.build("Valid option")).validated(success)
                            .addOption(formSelectOption("Valid option"))
                            .addGroups(groups1, g -> formSelectOptionGroup(g.key)
                                    .addOptions(g.value, FormSelectOption::formSelectOption)))
                    .add(br())
                    .add(formSelect("form-select-4", Id.build("Warning option")).validated(warning)
                            .addOption(formSelectOption("Warning option"))
                            .addGroups(groups1, g -> formSelectOptionGroup(g.key)
                                    .addOptions(g.value, FormSelectOption::formSelectOption)))
                    .add(br())
                    .add(formSelect("form-select-5", Id.build("Invalid option")).validated(error)
                            .addOption(formSelectOption("Invalid option"))
                            .addGroups(groups1, g -> formSelectOptionGroup(g.key)
                                    .addOptions(g.value, FormSelectOption::formSelectOption)))
                    .add(br())
                    .add(formSelect("form-select-6").disabled()
                            .addOption(formSelectOption("Disabled").placeholder())
                            .addOptions(asList(values0), FormSelectOption::formSelectOption))
                    .add(br())
                    .element();
            // @code-end:form-control-select
        }));

        addSnippet(new Snippet("form-control-text-area", "Text area",
                code("form-control-text-area"), () ->
                // @code-start:form-control-text-area
                div()
                        .add(textArea("text-area-0", "Standard"))
                        .add(br())
                        .add(textArea("text-area-1", "Readonly").readonly())
                        .add(br())
                        .add(textArea("text-area-2", "Readonly plain").plain())
                        .add(br())
                        .add(textArea("text-area-3", "Disabled").disabled())
                        .add(br())
                        .add(textArea("text-area-4", "Success").validated(success))
                        .add(br())
                        .add(textArea("text-area-5", "Warning").validated(warning))
                        .add(br())
                        .add(textArea("text-area-6", "Error").validated(error))
                        .add(br())
                        .add(textArea("text-area-7", "Resizes vertically").resize(vertical))
                        .add(br())
                        .add(textArea("text-area-8", "Resizes horizontally").resize(horizontal))
                        .add(br())
                        .add(textArea("text-area-9", "Resizes in both directions").resize(both))
                        .add(br())
                        .element()
                // @code-end:form-control-text-area
        ));

        startApiDocs(FormControl.class);
        addApiDoc(FormControl.class, component);
    }
}
