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
import org.patternfly.component.list.ActionList;
import org.patternfly.component.list.ActionListGroup;
import org.patternfly.component.list.ActionListItem;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.list.ActionList.actionList;
import static org.patternfly.component.list.ActionListGroup.actionListGroup;
import static org.patternfly.component.list.ActionListItem.actionListItem;
import static org.patternfly.icon.IconSets.fas.check;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.BuildingBlocks.mixedKebab;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/action-list", title = "Action list")
public class ActionListComponent extends SnippetPage {

    public ActionListComponent() {
        super(components.get("action-list"));

        startExamples();
        addSnippet(new Snippet("action-list-single-group", "Action list single group",
                code("action-list-single-group"), () ->
                // @code-start:action-list-single-group
                div()
                        .add(actionList()
                                .addItem(actionListGroup()
                                        .addItem(actionListItem()
                                                .add(button("Next").primary()))
                                        .addItem(actionListItem()
                                                .add(button("Back").secondary()))))
                        .add(br())
                        .add("With kebab")
                        .add(actionList()
                                .addItem(actionListGroup()
                                        .addItem(actionListItem()
                                                .add(button("Next").primary()))
                                        .addItem(actionListItem()
                                                .add(button("Back").secondary()))
                                        .addItem(actionListItem()
                                                .add(mixedKebab("action-list-single-group")))))
                        .element()
                // @code-end:action-list-single-group
        ));

        addSnippet(new Snippet("action-list-icons", "Action list with icons",
                code("action-list-icons"), () ->
                // @code-start:action-list-icons
                div()
                        .add(actionList().icons()
                                .addItem(actionListGroup()
                                        .addItem(actionListItem()
                                                .add(button().icon(times()).plain()))
                                        .addItem(actionListItem()
                                                .add(button().icon(check()).plain()))))
                        .add(br())
                        .add("With group icons wrapper")
                        .add(actionList()
                                .addItem(actionListGroup().icons()
                                        .addItem(actionListItem()
                                                .add(button().icon(times()).plain()))
                                        .addItem(actionListItem()
                                                .add(button().icon(check()).plain())))
                                .addItem(actionListGroup().icons()
                                        .addItem(actionListItem()
                                                .add(button().icon(times()).plain()))
                                        .addItem(actionListItem()
                                                .add(button().icon(check()).plain()))))
                        .element()
                // @code-end:action-list-icons
        ));

        addSnippet(new Snippet("action-list-multiple-groups", "Action list multiple groups",
                code("action-list-multiple-groups"), () ->
                // @code-start:action-list-multiple-groups
                div()
                        .add(actionList()
                                .addItem(actionListGroup()
                                        .addItem(actionListItem()
                                                .add(button("Next").primary()))
                                        .addItem(actionListItem()
                                                .add(button("Back").secondary())))
                                .addItem(actionListGroup()
                                        .addItem(actionListItem()
                                                .add(button("Submit").primary()))
                                        .addItem(actionListItem()
                                                .add(button("Cancel").link()))))
                        .element()
                // @code-end:action-list-multiple-groups
        ));

        addSnippet(new Snippet("action-list-cancel-button", "Action list with cancel button",
                code("action-list-cancel-button"), () ->
                // @code-start:action-list-cancel-button
                div()
                        .add("In modals, forms, data lists")
                        .add(actionList()
                                .addItem(actionListGroup()
                                        .addItem(actionListItem()
                                                .add(button("Save").primary()))
                                        .addItem(actionListItem()
                                                .add(button("Cancel").link()))))
                        .add(br())
                        .add("In wizards")
                        .add(actionList()
                                .addItem(actionListGroup()
                                        .addItem(actionListItem()
                                                .add(button("Next").primary()))
                                        .addItem(actionListItem()
                                                .add(button("Back").secondary()))
                                        .addItem(actionListItem()
                                                .add(button("Cancel").link()))))
                        .element()
                // @code-end:action-list-cancel-button
        ));

        startApiDocs(ActionList.class);
        addApiDoc(ActionList.class, component);
        addApiDoc(ActionListGroup.class, subcomponent);
        addApiDoc(ActionListItem.class, subcomponent);
    }
}
