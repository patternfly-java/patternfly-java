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
import org.patternfly.component.list.List;
import org.patternfly.component.list.ListItem;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.ol;
import static org.patternfly.component.list.List.list;
import static org.patternfly.component.list.ListItem.listItem;
import static org.patternfly.icon.IconSets.fas.bookOpen;
import static org.patternfly.icon.IconSets.fas.desktop;
import static org.patternfly.icon.IconSets.patternfly.key;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/list", title = "List")
public class ListComponent extends SnippetPage {

    public ListComponent() {
        super(components.get("list"));

        startExamples();
        addSnippet(new Snippet("list-basic", "Basic",
                code("list-basic"), () ->
                // @code-start:list-basic
                div()
                        .add(list()
                                .addItem(listItem().text("First"))
                                .addItem(listItem().text("Second"))
                                .addItem(listItem().text("Third")))
                        .element()
                // @code-end:list-basic
        ));

        addSnippet(new Snippet("list-inline", "Inline",
                code("list-inline"), () ->
                // @code-start:list-inline
                div()
                        .add(list().inline()
                                .addItem(listItem().text("First"))
                                .addItem(listItem().text("Second"))
                                .addItem(listItem().text("Third")))
                        .element()
                // @code-end:list-inline
        ));

        addSnippet(new Snippet("list-ordered", "Ordered",
                code("list-ordered"), () ->
                // @code-start:list-ordered
                div()
                        .add(list(ol())
                                .addItem(listItem().text("First"))
                                .addItem(listItem().text("Second"))
                                .addItem(listItem().text("Third")))
                        .element()
                // @code-end:list-ordered
        ));

        addSnippet(new Snippet("list-plain", "Plain",
                code("list-plain"), () ->
                // @code-start:list-plain
                div()
                        .add(list().plain()
                                .addItem(listItem().text("First"))
                                .addItem(listItem().text("Second"))
                                .addItem(listItem().text("Third")))
                        .element()
                // @code-end:list-plain
        ));

        addSnippet(new Snippet("list-bordered", "With horizontal rules",
                code("list-bordered"), () ->
                // @code-start:list-bordered
                div()
                        .add(list().plain().bordered()
                                .addItem(listItem().text("First"))
                                .addItem(listItem().text("Second"))
                                .addItem(listItem().text("Third")))
                        .element()
                // @code-end:list-bordered
        ));

        addSnippet(new Snippet("list-icons", "With icons",
                code("list-icons"), () ->
                // @code-start:list-icons
                div()
                        .add(list().plain()
                                .addItem(listItem().text("First").icon(bookOpen))
                                .addItem(listItem().text("Second").icon(key))
                                .addItem(listItem().text("Third").icon(desktop)))
                        .element()
                // @code-end:list-icons
        ));

        addSnippet(new Snippet("list-icons-lg", "With large icons",
                code("list-icons-lg"), () ->
                // @code-start:list-icons-lg
                div()
                        .add(list().plain().largeIcons()
                                .addItem(listItem().text("First").icon(bookOpen))
                                .addItem(listItem().text("Second").icon(key))
                                .addItem(listItem().text("Third").icon(desktop)))
                        .element()
                // @code-end:list-icons-lg
        ));

        startApiDocs(List.class);
        addApiDoc(List.class, component);
        addApiDoc(ListItem.class, subcomponent);
    }
}
