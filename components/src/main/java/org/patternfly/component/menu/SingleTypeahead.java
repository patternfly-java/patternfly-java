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
package org.patternfly.component.menu;

import org.jboss.elemento.EventType;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.ComponentType;
import org.patternfly.component.textinputgroup.TextInputGroup;
import org.patternfly.popper.TriggerAction;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.menu.MenuToggleType.typeahead;
import static org.patternfly.component.menu.MenuType.select;
import static org.patternfly.component.textinputgroup.TextInputGroup.searchInputGroup;

/**
 * A typeahead is a select variant that replaces the typical button toggle for opening the select menu with a text input and
 * button toggle combo. As a user enters characters into the text input, the menu options will be filtered to match.
 *
 * @see <a href= "https://www.patternfly.org/components/menus/select">https://www.patternfly.org/components/menus/select</a>
 */
public class SingleTypeahead extends MenuToggleMenu<SingleTypeahead> {

    // ------------------------------------------------------ factory

    public static SingleTypeahead singleTypeahead(String placeholder) {
        return new SingleTypeahead(MenuToggle.menuToggle(typeahead)
                .addTextInputGroup(searchInputGroup(placeholder)
                        .plain()));
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(SingleTypeahead.class.getName());
    private final TextInputGroup textInputGroup;

    SingleTypeahead(MenuToggle menuToggle) {
        super(ComponentType.SingleSelect, menuToggle, TriggerAction.click);
        TextInputGroup tig = menuToggle.textInputGroup();
        if (tig == null) {
            logger.error("MenuToggle for single typeahead must contain a text input group! Using a dummy one instead.");
            this.textInputGroup = searchInputGroup("").plain();
            menuToggle.addTextInputGroup(this.textInputGroup);
        } else {
            this.textInputGroup = tig;
        }

        textInputGroup.main().inputElement().on(click, event -> {
            console.log("### 0: value: '%s', isEmpty: %s, expanded: %s, classList: %o",
                    textInputGroup.main().value(), textInputGroup.main().value().isEmpty(), expanded(), menuToggle.element().classList);
            if (!expanded()) {
                expand(false);
            } else if (textInputGroup.main().value().isEmpty()) {
                collapse(false);
            }
            console.log("### 1: value: '%s', isEmpty: %s, expanded: %s, classList: %o",
                    textInputGroup.main().value(), textInputGroup.main().value().isEmpty(), expanded(), menuToggle.element().classList);
        });
    }

    // ------------------------------------------------------ add

    @Override
    public SingleTypeahead add(Menu menu) {
        if (menu.menuType == select && menu.selectionMode == single) {
            menu.onSingleSelect((e, menuItem, s) -> menuToggle.text(menuItem.text()));
        }
        return super.add(menu);
    }

    // ------------------------------------------------------ builder

    @Override
    public SingleTypeahead that() {
        return this;
    }

    // ------------------------------------------------------ api

    public void select(String itemId) {
        select(menu.findItem(itemId), true);
    }

    public void select(String itemId, boolean fireEvent) {
        select(menu.findItem(itemId), fireEvent);
    }

    public void select(MenuItem item) {
        select(item, true);
    }

    public void select(MenuItem item, boolean fireEvent) {
        if (menu != null && menuToggle != null && item != null) {
            menu.select(item, true, fireEvent);
            menuToggle.text(item.text());
        }
    }
}
