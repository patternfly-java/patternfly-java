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
package org.patternfly.component.actionlist;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.actionList;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.icons;
import static org.patternfly.style.Classes.modifier;

/**
 * An action list is a group of actions, controls, or buttons with set spacing.
 *
 * @see <a href= "https://www.patternfly.org/components/action-list">https://www.patternfly.org/components/action-list</a>
 */
public class ActionList extends BaseComponent<HTMLElement, ActionList> {

    // ------------------------------------------------------ factory

    public static ActionList actionList() {
        return new ActionList();
    }

    // ------------------------------------------------------ instance

    ActionList() {
        super(ComponentType.ActionList, div().css(component(actionList)).element());
    }

    // ------------------------------------------------------ add

    public ActionList addGroup(ActionListGroup group) {
        return add(group);
    }

    public ActionList addItem(ActionListItem item) {
        return add(item);
    }

    // ------------------------------------------------------ builder

    public ActionList icons() {
        return css(modifier(icons));
    }

    @Override
    public ActionList that() {
        return this;
    }
}
