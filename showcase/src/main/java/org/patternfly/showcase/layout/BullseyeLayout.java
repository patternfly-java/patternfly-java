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
package org.patternfly.showcase.layout;

import org.jboss.elemento.router.Route;
import org.patternfly.layout.bullseye.Bullseye;
import org.patternfly.layout.bullseye.BullseyeItem;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.bullseye.Bullseye.bullseye;
import static org.patternfly.layout.bullseye.BullseyeItem.bullseyeItem;
import static org.patternfly.showcase.ApiDoc.Type.layout;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.layouts;

@Route(value = "/layouts/bullseye", title = "Bullseye")
public class BullseyeLayout extends SnippetPage {

    public BullseyeLayout() {
        super(layouts.get("bullseye"));

        startExamples();
        addSnippet(new Snippet("bullseye-basic", "Basic",
                code("bullseye-basic"), () ->
                // @code-start:bullseye-basic
                div().css("ws-core-l-bullseye")
                        .add(bullseye()
                                .addItem(bullseyeItem().text("Bullseye ◎ layout")))
                        .element()
                // @code-end:bullseye-basic
        ));

        startApiDocs(Bullseye.class);
        addApiDoc(Bullseye.class, layout);
        addApiDoc(BullseyeItem.class, layout);
    }
}
