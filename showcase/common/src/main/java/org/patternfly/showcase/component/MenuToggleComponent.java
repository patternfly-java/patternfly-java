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

import org.jboss.elemento.Id;
import org.jboss.elemento.router.Route;
import org.patternfly.component.Severity;
import org.patternfly.component.menu.MenuToggle;
import org.patternfly.component.menu.MenuToggleAction;
import org.patternfly.component.textinputgroup.TextInputGroup;
import org.patternfly.component.textinputgroup.TextInputGroupMain;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.Severity.danger;
import static org.patternfly.component.Severity.success;
import static org.patternfly.component.Severity.warning;
import static org.patternfly.component.avatar.Avatar.avatar;
import static org.patternfly.component.badge.Badge.badge;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.menu.MenuToggle.menuToggle;
import static org.patternfly.component.menu.MenuToggleAction.menuToggleAction;
import static org.patternfly.component.menu.MenuToggleType.plainText;
import static org.patternfly.component.menu.MenuToggleType.split;
import static org.patternfly.component.menu.MenuToggleType.typeahead;
import static org.patternfly.component.textinputgroup.TextInputGroup.textInputGroup;
import static org.patternfly.component.textinputgroup.TextInputGroupMain.textInputGroupMain;
import static org.patternfly.icon.IconSets.fas.cog;
import static org.patternfly.icon.IconSets.fas.ellipsisV;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Assets.avatarLight;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/menus/menu-toggle", title = "Menu toggle")
public class MenuToggleComponent extends SnippetPage {

    public MenuToggleComponent() {
        super(components.get("menu-toggle"));

        startExamples();
        addSnippet(new Snippet("menu-toggle-basic", "Basic toggle",
                code("menu-toggle-basic"), () ->
                // @code-start:menu-toggle-basic
                div()
                        .add(menuToggle("Toggle"))
                        .add(" ")
                        .add(menuToggle("Toggle").disabled())
                        .element()
                // @code-end:menu-toggle-basic
        ));

        addSnippet(new Snippet("menu-toggle-small", "Small toggle",
                code("menu-toggle-small"), () ->
                // @code-start:menu-toggle-small
                div()
                        .add(menuToggle("Small toggle").small())
                        .element()
                // @code-end:menu-toggle-small
        ));

        addSnippet(new Snippet("menu-toggle-badge", "With a badge",
                code("menu-toggle-badge"), () ->
                // @code-start:menu-toggle-badge
                div()
                        .add(menuToggle("Count")
                                .addBadge(badge(4).unread()))
                        .add(" ")
                        .add(menuToggle("Count").primary()
                                .addBadge(badge(4).unread()))
                        .add(" ")
                        .add(menuToggle("Count").secondary()
                                .addBadge(badge(4).unread()))
                        .add(" ")
                        .add(menuToggle(plainText)
                                .text("Count")
                                .addBadge(badge(4).unread()))
                        .add(" ")
                        .add(menuToggle("Count").disabled()
                                .addBadge(badge(4).unread()))
                        .element()
                // @code-end:menu-toggle-badge
        ));

        addSnippet(new Snippet("menu-toggle-icons", "With icons",
                code("menu-toggle-icons"), () ->
                // @code-start:menu-toggle-icons
                div()
                        .add(menuToggle()
                                .icon(cog())
                                .text("Icon"))
                        .add(" ")
                        .add(menuToggle().primary()
                                .icon(cog())
                                .text("Icon"))
                        .add(" ")
                        .add(menuToggle().secondary()
                                .icon(cog())
                                .text("Icon"))
                        .add(" ")
                        .add(menuToggle().disabled()
                                .iconAndText(cog(), "Icon")) // same as above
                        .element()
                // @code-end:menu-toggle-icons
        ));

        addSnippet(new Snippet("menu-toggle-avatar", "With avatar",
                code("menu-toggle-avatar"), () ->
                // @code-start:menu-toggle-avatar
                div()
                        .add(menuToggle()
                                .addAvatar(avatar(avatarLight, "avatar"))
                                .text("John Doe"))
                        .add(" ")
                        .add(menuToggle().primary()
                                .addAvatar(avatar(avatarLight, "avatar"))
                                .text("John Doe"))
                        .add(" ")
                        .add(menuToggle().secondary()
                                .addAvatar(avatar(avatarLight, "avatar"))
                                .text("John Doe"))
                        .add(" ")
                        .add(menuToggle().disabled()
                                .addAvatar(avatar(avatarLight, "avatar"))
                                .text("John Doe"))
                        .element()
                // @code-end:menu-toggle-avatar
        ));

        addSnippet(new Snippet("menu-toggle-plain-icon", "Plain toggle with icon",
                code("menu-toggle-plain-icon"), () ->
                // @code-start:menu-toggle-plain-icon
                div()
                        .add(menuToggle(ellipsisV(), "plain kebab"))
                        .add(" ")
                        .add(menuToggle(ellipsisV(), "disabled kebab")
                                .disabled())
                        .element()
                // @code-end:menu-toggle-plain-icon
        ));

        addSnippet(new Snippet("menu-toggle-plain-text", "Plain toggle with text",
                code("menu-toggle-plain-text"), () ->
                // @code-start:menu-toggle-plain-text
                div()
                        .add(menuToggle(plainText).text("Text"))
                        .add(" ")
                        .add(menuToggle(plainText).text("Disabled")
                                .disabled())
                        .element()
                // @code-end:menu-toggle-plain-text
        ));

        addSnippet(new Snippet("menu-toggle-split-checkbox", "Split toggle with checkbox",
                code("menu-toggle-split-checkbox"), () ->
                // @code-start:menu-toggle-split-checkbox
                div()
                        .add(menuToggle(split)
                                .addCheckbox(checkbox(Id.unique("checkbox"), "select-all").standalone()))
                        .add(" ")
                        .add(menuToggle(split).primary()
                                .addCheckbox(checkbox(Id.unique("checkbox"), "select-all").standalone()))
                        .add(" ")
                        .add(menuToggle(split).secondary()
                                .addCheckbox(checkbox(Id.unique("checkbox"), "select-all").standalone()))
                        .add(" ")
                        .add(menuToggle(split).disabled()
                                .addCheckbox(checkbox(Id.unique("checkbox"), "select-all").standalone()))
                        .element()
                // @code-end:menu-toggle-split-checkbox
        ));

        addSnippet(new Snippet("menu-toggle-split-checkbox-labeled", "Split toggle with labeled checkbox",
                code("menu-toggle-split-checkbox-labeled"), () ->
                // @code-start:menu-toggle-split-checkbox-labeled
                div()
                        .add(menuToggle(split)
                                .addCheckbox(checkbox(Id.unique("checkbox"), "select-all").text("Select all")))
                        .add(" ")
                        .add(menuToggle(split).primary()
                                .addCheckbox(checkbox(Id.unique("checkbox"), "select-all").text("Select all")))
                        .add(" ")
                        .add(menuToggle(split).secondary()
                                .addCheckbox(checkbox(Id.unique("checkbox"), "select-all").text("Select all")))
                        .add(" ")
                        .add(menuToggle(split).disabled()
                                .addCheckbox(checkbox(Id.unique("checkbox"), "select-all").text("Select all")))
                        .element()
                // @code-end:menu-toggle-split-checkbox-labeled
        ));

        addSnippet(new Snippet("menu-toggle-split-action", "Split toggle with action",
                code("menu-toggle-split-action"), () ->
                // @code-start:menu-toggle-split-action
                div()
                        .add(menuToggle(split)
                                .addAction(menuToggleAction("Action")))
                        .add(" ")
                        .add(menuToggle(split).primary()
                                .addAction(menuToggleAction("Action")))
                        .add(" ")
                        .add(menuToggle(split).secondary()
                                .addAction(menuToggleAction("Action")))
                        .add(" ")
                        .add(menuToggle(split).disabled()
                                .addAction(menuToggleAction("Action")))
                        .element()
                // @code-end:menu-toggle-split-action
        ));

        addSnippet(new Snippet("menu-toggle-full-height", "Full height toggle",
                code("menu-toggle-full-height"), () ->
                // @code-start:menu-toggle-full-height
                div().style("height: 80px;")
                        .add(menuToggle("Full height").fullHeight())
                        .element()
                // @code-end:menu-toggle-full-height
        ));

        addSnippet(new Snippet("menu-toggle-full-width", "Full width toggle",
                code("menu-toggle-full-width"), () ->
                // @code-start:menu-toggle-full-width
                div()
                        .add(menuToggle("Full height").fullWidth())
                        .element()
                // @code-end:menu-toggle-full-width
        ));

        addSnippet(new Snippet("menu-toggle-typeahead", "Typeahead toggle",
                code("menu-toggle-typeahead"), () ->
                // @code-start:menu-toggle-typeahead
                div()
                        .add(menuToggle(typeahead).fullWidth()
                                .addTextInputGroup(textInputGroup().plain()
                                        .addMain(textInputGroupMain("menu-toggle-typeahead-tig"))))
                        .element()
                // @code-end:menu-toggle-typeahead
        ));

        addSnippet(new Snippet("menu-toggle-status", "Status toggle",
                code("menu-toggle-status"), () ->
                // @code-start:menu-toggle-status
                div()
                        .add(menuToggle("Success").status(success))
                        .add(" ")
                        .add(menuToggle("Warning").status(warning))
                        .add(" ")
                        .add(menuToggle("Danger").status(danger))
                        .element()
                // @code-end:menu-toggle-status
        ));

        addSnippet(new Snippet("menu-toggle-placeholder", "Placeholder text in toggle",
                code("menu-toggle-placeholder"), () ->
                // @code-start:menu-toggle-placeholder
                div()
                        .add(menuToggle("Placeholder text").placeholder())
                        .element()
                // @code-end:menu-toggle-placeholder
        ));

        startApiDocs(MenuToggle.class);
        addApiDoc(MenuToggle.class, component);
        addApiDoc(MenuToggleAction.class, subcomponent);
    }
}
