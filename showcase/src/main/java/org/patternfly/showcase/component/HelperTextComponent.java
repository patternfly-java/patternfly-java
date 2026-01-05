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
import org.patternfly.component.help.HelperText;
import org.patternfly.component.help.HelperTextItem;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.ValidationStatus.error;
import static org.patternfly.component.ValidationStatus.indeterminate;
import static org.patternfly.component.ValidationStatus.success;
import static org.patternfly.component.ValidationStatus.warning;
import static org.patternfly.component.help.HelperText.helperText;
import static org.patternfly.component.help.HelperTextItem.helperTextItem;
import static org.patternfly.icon.IconSets.fas.check;
import static org.patternfly.icon.IconSets.fas.exclamation;
import static org.patternfly.icon.IconSets.fas.info;
import static org.patternfly.icon.IconSets.fas.question;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/helper-text", title = "Helper text")
public class HelperTextComponent extends SnippetPage {

    public HelperTextComponent() {
        super(components.get("helper-text"));

        startExamples();
        addSnippet(new Snippet("helper-text-static", "Static",
                code("helper-text-static"), () ->
                // @code-start:helper-text-static
                div()
                        .add(helperText("This is default helper text"))
                        .add(helperText("This is indeterminate helper text", indeterminate))
                        .add(helperText("This is warning helper text", warning))
                        .add(helperText("This is success helper text", success))
                        .add(helperText("This is error helper text", error))
                        .element()
                // @code-end:helper-text-static
        ));

        addSnippet(new Snippet("helper-text-static-custom-icon", "Static with custom icons",
                code("helper-text-static-custom-icon"), () ->
                // @code-start:helper-text-static-custom-icon
                div()
                        .add(helperText()
                                .addItem(helperTextItem("This is default helper text")
                                        .icon(info())))
                        .add(helperText()
                                .addItem(helperTextItem("This is indeterminate helper text", indeterminate)
                                        .icon(question())))
                        .add(helperText()
                                .addItem(helperTextItem("This is warning helper text", warning)
                                        .icon(exclamation())))
                        .add(helperText()
                                .addItem(helperTextItem("This is success helper text", success)
                                        .icon(check())))
                        .add(helperText()
                                .addItem(helperTextItem("This is error helper text", error)
                                        .icon(times())))
                        .element()
                // @code-end:helper-text-static-custom-icon
        ));

        addSnippet(new Snippet("helper-text-multiple-static", "Multiple static",
                code("helper-text-multiple-static"), () ->
                // @code-start:helper-text-multiple-static
                div()
                        .add(helperText()
                                .addItem(helperTextItem("This is default helper text"))
                                .addItem(helperTextItem("This is another default helper text in the same block"))
                                .addItem(helperTextItem("And this is more default text in the same block")))
                        .element()
                // @code-end:helper-text-multiple-static
        ));

        addSnippet(new Snippet("helper-text-dynamic", "Dynamic",
                code("helper-text-dynamic"), () ->
                // @code-start:helper-text-dynamic
                div()
                        .add(helperText()
                                .addItem(helperTextItem("This is default helper text")
                                        .dynamic()))
                        .add(helperText()
                                .addItem(helperTextItem("This is indeterminate helper text", indeterminate)
                                        .dynamic()))
                        .add(helperText()
                                .addItem(helperTextItem("This is warning helper text", warning)
                                        .dynamic()))
                        .add(helperText()
                                .addItem(helperTextItem("This is success helper text", success)
                                        .dynamic()))
                        .add(helperText()
                                .addItem(helperTextItem("This is error helper text", error)
                                        .dynamic()))
                        .add(helperText()
                                .addItem(helperTextItem("This is error helper text with a custom icon", error)
                                        .dynamic()
                                        .icon(times())))
                        .add(helperText()
                                .addItem(helperTextItem("This is error helper text with no icon", error)
                                        .dynamic()))
                        .element()
                // @code-end:helper-text-dynamic
        ));

        addSnippet(new Snippet("helper-text-dynamic-list", "Dynamic list",
                code("helper-text-dynamic-list"), () ->
                // @code-start:helper-text-dynamic-list
                div()
                        .add(helperText(ul()).liveRegion()
                                .addItem(helperTextItem(li(), "Must be at least 14 characters", success)
                                        .dynamic())
                                .addItem(helperTextItem(li(), "Cannot contain any variation of the word 'redhat'", error)
                                        .dynamic())
                                .addItem(helperTextItem(
                                        "Must include at least 3 of the following: lowercase letter, uppercase letters, numbers, symbols",
                                        success)
                                        .dynamic()))
                        .element()
                // @code-end:helper-text-dynamic-list
        ));

        startApiDocs(HelperText.class);
        addApiDoc(HelperText.class, component);
        addApiDoc(HelperTextItem.class, subcomponent);
    }
}
