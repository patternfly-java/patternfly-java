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
import static org.patternfly.component.hint.Hint.hint;
import static org.patternfly.component.hint.HintActions.hintActions;
import static org.patternfly.component.hint.HintBody.hintBody;
import static org.patternfly.component.hint.HintFooter.hintFooter;
import static org.patternfly.component.hint.HintTitle.hintTitle;
import static org.patternfly.component.menu.Dropdown.dropdown;
import static org.patternfly.component.menu.DropdownMenu.dropdownMenu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.actionMenuItem;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.MenuToggle.menuToggle;
import static org.patternfly.icon.IconSets.fas.ellipsisV;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

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
                                .addActions(hintActions()
                                        .add(dropdown(menuToggle(ellipsisV(), "kebab dropdown toggle"))
                                                .addMenu(dropdownMenu()
                                                        .addContent(menuContent()
                                                                .addList(menuList()
                                                                        .addItem(actionMenuItem("hint-basic-item-0", "Action"))
                                                                        .addItem(linkMenuItem("hint-basic-item-1", "Link",
                                                                                "#item-1"))
                                                                        .addItem(actionMenuItem("hint-basic-item-2",
                                                                                "Disabled action")
                                                                                .disabled())
                                                                        .addItem(linkMenuItem("hint-basic-item-3",
                                                                                "Disabled link", "#item-3")
                                                                                .disabled())
                                                                        .addDivider()
                                                                        .addItem(actionMenuItem("hint-basic-item-4",
                                                                                "Separated action"))
                                                                        .addItem(linkMenuItem("hint-basic-item-5",
                                                                                "Separated link", "#item-5")))))))
                                .addTitle(hintTitle()
                                        .textContent("Do more with Find it Fix it capabilities"))
                                .addBody(hintBody()
                                        .textContent(
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
                                .addActions(hintActions()
                                        .add(dropdown(menuToggle(ellipsisV(), "kebab dropdown toggle"))
                                                .addMenu(dropdownMenu()
                                                        .addContent(menuContent()
                                                                .addList(menuList()
                                                                        .addItem(actionMenuItem("hint-basic-no-title-item-0",
                                                                                "Action"))
                                                                        .addItem(linkMenuItem("hint-basic-no-title-item-1",
                                                                                "Link",
                                                                                "#item-1"))
                                                                        .addItem(actionMenuItem("hint-basic-no-title-item-2",
                                                                                "Disabled action")
                                                                                .disabled())
                                                                        .addItem(linkMenuItem("hint-basic-no-title-item-3",
                                                                                "Disabled link", "#item-3")
                                                                                .disabled())
                                                                        .addDivider()
                                                                        .addItem(actionMenuItem("hint-basic-no-title-item-4",
                                                                                "Separated action"))
                                                                        .addItem(linkMenuItem("hint-basic-no-title-item-5",
                                                                                "Separated link", "#item-5")))))))
                                .addBody(hintBody()
                                        .textContent(
                                                "Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies."))
                                .addFooter(hintFooter()
                                        .add(button().link().inline()
                                                .text("Try it for 90 days"))))
                        .element()
                // @code-end:hint-basic-no-title
        ));

        startApiDocs(Hint.class);
        addApiDoc(Hint.class, component);
        addApiDoc(HintActions.class, subcomponent);
        addApiDoc(HintBody.class, subcomponent);
        addApiDoc(HintFooter.class, subcomponent);
        addApiDoc(HintTitle.class, subcomponent);
    }
}
