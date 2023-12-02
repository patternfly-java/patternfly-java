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

import org.jboss.elemento.Attachable;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.form.Checkbox;
import org.patternfly.component.form.Radio;
import org.patternfly.core.Logger;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.form.Radio.radio;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.SelectionMode.click;
import static org.patternfly.core.SelectionMode.single;
import static org.patternfly.layout.Classes.actions;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.disabled;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.screenReader;
import static org.patternfly.layout.Classes.selectable;

public class CardSelectableActions extends CardSubComponent<HTMLDivElement, CardSelectableActions> implements Attachable {

    // ------------------------------------------------------ factory

    public static CardSelectableActions cardSelectableActions() {
        return new CardSelectableActions();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "csa";

    Checkbox checkbox;
    Radio radio;

    CardSelectableActions() {
        super(SUB_COMPONENT_NAME, div().css(component(Classes.card, selectable, actions)).element());
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        Card card = lookupComponent();
        if (card.isSelectable() || card.isClickable()) {
            // we need a card id!
            if (card.element().id == null || card.element().id.isEmpty()) {
                card.id(Id.unique(ComponentType.Card.id));
            }
        }

        if (card.isClickable() && !card.isSelectable()) {
            String cardId = card.element().id;
            String selectId = Id.unique(ComponentType.Card.id, "select");
            String radioName = card.name;
            if (radioName == null) {
                radioName = Id.unique(ComponentType.Card.id, "name", "fallback");
                Logger.undefined(ComponentType.Card, card.element(),
                        "Name is undefined for clickable card '" + cardId + "'.\n" +
                                "You should provide a common name for all clickable cards using 'Card.name(String)'.\n" +
                                "Fallback to generated name '" + radioName + "', which will cause selection issues!");
            }
            add(radio = radio(selectId, radioName).standalone(false));
            radio.inputElement().classList.add(screenReader);
            radio.inputElement().setAttribute(labelledBy, cardId);
            radio.inputElement().addEventListener(click.name(), card::click);
            if (card.element().classList.contains(modifier(disabled))) {
                radio.disabled(true);
            }

        } else if (card.isSelectable()) {
            String cardId = card.element().id;
            String selectId = Id.unique(ComponentType.Card.id, "select");
            if (card.selectionMode == single) {
                String radioName = card.name;
                if (radioName == null) {
                    radioName = Id.unique(ComponentType.Card.id, "name", "fallback");
                    Logger.undefined(ComponentType.Card, card.element(),
                            "Name is undefined for single selectable card '" + cardId + "'.\n" +
                                    "You must provide a common name for all single selectable cards using 'Card.name(String)'.\n"
                                    +
                                    "Fallback to generated name '" + radioName + "', which will cause selection issues!");
                }
                add(radio = radio(selectId, radioName)
                        .standalone(false)
                        .onChange((r, selected) -> card.internalSelect(selected, true)));
                radio.inputElement().setAttribute(labelledBy, cardId);
                if (card.element().classList.contains(modifier(disabled))) {
                    radio.disabled(true);
                }
            } else { // multi
                String checkboxName = card.name;
                if (checkboxName == null) {
                    checkboxName = Id.unique(ComponentType.Card.id, "name", "fallback");
                    Logger.undefined(ComponentType.Card, card.element(),
                            "Name is undefined for multi-select card '" + cardId + "'.\n" +
                                    "You must provide a common name for all selectable cards using 'Card.name(String)'.\n"
                                    +
                                    "Fallback to generated name '" + checkboxName + "', which will cause selection issues!");
                }
                add(checkbox = checkbox(selectId, checkboxName)
                        .standalone(false)
                        .onChange((c, selected) -> card.internalSelect(selected, true)));
                checkbox.inputElement().setAttribute(labelledBy, cardId);
                if (card.element().classList.contains(modifier(disabled))) {
                    checkbox.disabled(true);
                }
            }
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public CardSelectableActions that() {
        return this;
    }

    // ------------------------------------------------------ internal

    void disabled(boolean disabled) {
        if (checkbox != null) {
            checkbox.disabled(disabled);
        }
        if (radio != null) {
            radio.disabled(disabled);
        }
    }

    void markSelected(boolean selected) {
        if (checkbox != null) {
            checkbox.inputElement().checked = selected;
        }
        if (radio != null) {
            radio.inputElement().checked = selected;
        }
    }
}
