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
package org.patternfly.component.card;

import org.patternfly.component.form.Checkbox;
import org.patternfly.component.menu.Dropdown;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.NoOffset;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.actions;
import static org.patternfly.style.Classes.component;

public class CardActions extends CardSubComponent<HTMLDivElement, CardActions>
        implements NoOffset<HTMLDivElement, CardActions> {

    // ------------------------------------------------------ factory

    public static CardActions cardActions() {
        return new CardActions();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ca";

    CardSelectableActions selectableActions;
    private Card card;

    CardActions() {
        super(SUB_COMPONENT_NAME, div().css(component(Classes.card, actions)).element());
    }

    // ------------------------------------------------------ add

    public CardActions addDropdown(Dropdown dropdown) {
        return add(dropdown);
    }

    public CardActions addCheckbox(Checkbox checkbox) {
        return add(checkbox);
    }

    public CardActions add(Checkbox checkbox) {
        return add(checkbox.standalone().element());
    }

    public CardActions addSelectableActions(CardSelectableActions selectableActions) {
        return add(selectableActions);
    }

    // override to ensure internal wiring
    public CardActions add(CardSelectableActions selectableActions) {
        this.selectableActions = selectableActions;
        return add(selectableActions.element());
    }

    // ------------------------------------------------------ builder

    @Override
    public CardActions that() {
        return this;
    }

    // ------------------------------------------------------ internal

    void disabled(boolean disabled) {
        if (selectableActions != null) {
            selectableActions.disabled(disabled);
        }
    }
}
