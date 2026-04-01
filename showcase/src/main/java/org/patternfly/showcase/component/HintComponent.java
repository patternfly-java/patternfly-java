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
import org.patternfly.component.hint.Hint;
import org.patternfly.component.hint.HintActions;
import org.patternfly.component.hint.HintBody;
import org.patternfly.component.hint.HintFooter;
import org.patternfly.component.hint.HintTitle;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.hint.Hint.hint;
import static org.patternfly.component.hint.HintActions.hintActions;
import static org.patternfly.component.hint.HintBody.hintBody;
import static org.patternfly.component.hint.HintFooter.hintFooter;
import static org.patternfly.component.hint.HintTitle.hintTitle;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.BuildingBlocks.mixedKebab;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Classes.util;

@Route(value = "/components/hint", title = "Hint")
public class HintComponent extends SnippetPage {

    public HintComponent() {
        super(components.get("hint"));

        startExamples();
        addSnippet(new Snippet("hint-basic", "Basic with title",
                code("hint-basic"), () ->
                // @code-start:hint-basic
                div()
                        .add(hint()
                                .addActions(hintActions().add(mixedKebab("hint-basic")))
                                .addTitle(hintTitle().text("Do more with Find it Fix it capabilities"))
                                .addBody(hintBody().text(
                                        "Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies."))
                                .addFooter(hintFooter()
                                        .add(button().link().inline()
                                                .text("Try it for 90 days"))))
                        .element()
                // @code-end:hint-basic
        ));

        addSnippet(new Snippet("hint-basic-no-title", "Basic without title",
                code("hint-basic-no-title"), () ->
                // @code-start:hint-basic-no-title
                div()
                        .add(hint()
                                .addBody(hintBody()
                                        .add("Welcome to the new documentation experience. ")
                                        .add(button().link().inline()
                                                .text("Learn more about the improved features."))))
                        .add(br())
                        .add(hint()
                                .addActions(hintActions().add(mixedKebab("hint-basic-no-title")))
                                .addBody(hintBody().text(
                                        "Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies."))
                                .addFooter(hintFooter()
                                        .add(button().link().inline()
                                                .text("Try it for 90 days"))))
                        .element()
                // @code-end:hint-basic-no-title
        ));

        addSnippet(new Snippet("hint-with-action", "With actions",
                code("hint-with-action"), () -> {
            // @code-start:hint-with-action
            HintActions hintActions = hintActions();
            return div()
                    .add(checkbox("no-offset", "no-offset", "No actions offset")
                            .onChange((e, c, value) -> hintActions.noOffset(value)))
                    .add(hint().css(util("mt-sm"))
                            .addActions(hintActions
                                    .add(button("Action").primary()))
                            .addTitle(hintTitle().text("Do more with Find it Fix it capabilities"))
                            .addBody(hintBody().text(
                                    "Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.")))
                    .element();
            // @code-end:hint-with-action
        }));

        startApiDocs(Hint.class);
        addApiDoc(Hint.class, component);
        addApiDoc(HintActions.class, subcomponent);
        addApiDoc(HintBody.class, subcomponent);
        addApiDoc(HintFooter.class, subcomponent);
        addApiDoc(HintTitle.class, subcomponent);
    }
}
