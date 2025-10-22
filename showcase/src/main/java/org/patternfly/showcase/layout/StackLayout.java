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
import org.patternfly.layout.stack.Stack;
import org.patternfly.layout.stack.StackItem;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.stack.Stack.stack;
import static org.patternfly.layout.stack.StackItem.stackItem;
import static org.patternfly.showcase.ApiDoc.Type.layout;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.layouts;

@Route(value = "/layouts/stack", title = "Stack")
public class StackLayout extends SnippetPage {

    public StackLayout() {
        super(layouts.get("stack"));

        startExamples();
        addSnippet(new Snippet("stack-basic", "Basic",
                code("stack-basic"), () ->
                // @code-start:stack-basic
                div().css("ws-core-l-stack")
                        .add(stack()
                                .addItem(stackItem().text("content"))
                                .addItem(stackItem().fill().text("pf-m-fill"))
                                .addItem(stackItem().text("content")))
                        .element()
                // @code-end:stack-basic
        ));

        addSnippet(new Snippet("stack-gutter", "With gutters",
                code("stack-gutter"), () ->
                // @code-start:stack-gutter
                div().css("ws-core-l-stack")
                        .add(stack().gutter()
                                .addItem(stackItem().text("content"))
                                .addItem(stackItem().fill().text("pf-m-fill"))
                                .addItem(stackItem().text("content")))
                        .element()
                // @code-end:stack-gutter
        ));

        startApiDocs(Stack.class);
        addApiDoc(Stack.class, layout);
        addApiDoc(StackItem.class, layout);
    }
}
