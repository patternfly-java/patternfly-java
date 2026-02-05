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
package org.patternfly.component.wizard;

import org.patternfly.component.button.Button;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.footer;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.list.ActionList.actionList;
import static org.patternfly.component.list.ActionListGroup.actionListGroup;
import static org.patternfly.component.list.ActionListItem.actionListItem;
import static org.patternfly.component.wizard.WizardFooterButtons.back;
import static org.patternfly.component.wizard.WizardFooterButtons.cancel;
import static org.patternfly.component.wizard.WizardFooterButtons.next;
import static org.patternfly.component.wizard.WizardStepType.review;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.footer;
import static org.patternfly.style.Classes.wizard;

public class WizardFooter extends WizardSubComponent<HTMLElement, WizardFooter> {

    // ------------------------------------------------------ factory
    // No factory methods here! The footer is created implicitly in Wizard

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "wzf";
    private final Button backButton;
    private final Button nextButton;
    private final Button cancelButton;

    WizardFooter() {
        super(SUB_COMPONENT_NAME, footer().css(component(wizard, footer)).element());
        add(actionList()
                .addItem(actionListGroup()
                        .addItem(actionListItem()
                                .add(backButton = button().secondary().text("Back")
                                        .onClick((e, c) -> {
                                            Wizard wizard = lookupComponent();
                                            wizard.previous();
                                        })))
                        .addItem(actionListItem()
                                .add(nextButton = button().primary().text("Next").attr("type", "submit")
                                        .onClick((e, c) -> {
                                            Wizard wizard = lookupComponent();
                                            wizard.next();
                                        }))))
                .addItem(actionListGroup()
                        .addItem(actionListItem()
                                .add(cancelButton = button().link().text("Cancel")
                                        .onClick((e, c) -> {
                                            Wizard wizard = lookupComponent();
                                            wizard.cancel();
                                        })))));
    }

    // ------------------------------------------------------ builder

    @Override
    public WizardFooter that() {
        return this;
    }

    // ------------------------------------------------------ api

    public Button backButton() {
        return backButton;
    }

    public Button nextButton() {
        return nextButton;
    }

    public Button cancelButton() {
        return cancelButton;
    }

    // ------------------------------------------------------ internal

    void disableButtons() {
        backButton.disabled(true);
        nextButton.disabled(true);
        cancelButton.disabled(true);
    }

    void updateButtons(int steps, WizardStep head, WizardStep current, WizardStep tail) {
        if (current.customButtonNames.containsKey(back)) {
            backButton.text(current.customButtonNames.get(back));
        }
        if (current.customButtonNames.containsKey(cancel)) {
            cancelButton.text(current.customButtonNames.get(cancel));
        }
        if (current == head) {
            backButton.disabled(true);
            nextButton.disabled(false);
            cancelButton.disabled(false);
            nextButton.text(current.customButtonNames.getOrDefault(next, "Next"));

        } else if (current == tail || current.type == review) {
            backButton.disabled(false);
            nextButton.disabled(false);
            cancelButton.disabled(false);
            nextButton.text(current.customButtonNames.getOrDefault(next, "Finish"));

        } else if (steps > 1) {
            backButton.disabled(false);
            nextButton.disabled(false);
            cancelButton.disabled(false);
            nextButton.text(current.customButtonNames.getOrDefault(next, "Next"));
        }
    }
}
