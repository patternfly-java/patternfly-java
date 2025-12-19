package org.patternfly.component.wizard;

import org.patternfly.component.button.Button;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.footer;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.list.ActionList.actionList;
import static org.patternfly.component.list.ActionListGroup.actionListGroup;
import static org.patternfly.component.list.ActionListItem.actionListItem;
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

    WizardFooter() {
        super(SUB_COMPONENT_NAME, footer().css(component(wizard, footer)).element());
        add(actionList()
                .addItem(actionListGroup()
                        .addItem(actionListItem()
                                .add(backButton = button().secondary().text("Back")
                                        .onClick((e, c) -> {
                                            Wizard wizard = lookupComponent();
                                            wizard.back(e);
                                        })))
                        .addItem(actionListItem()
                                .add(nextButton = button().primary().text("Next").attr("type", "submit")
                                        .onClick((e, c) -> {
                                            Wizard wizard = lookupComponent();
                                            wizard.next(e);
                                        }))))
                .addItem(actionListGroup()
                        .addItem(actionListItem()
                                .add(button().link().text("Cancel")
                                        .onClick((e, c) -> {
                                            Wizard wizard = lookupComponent();
                                            wizard.cancel(e);
                                        })))));
    }

    // ------------------------------------------------------ builder

    @Override
    public WizardFooter that() {
        return this;
    }

    // ------------------------------------------------------ internal

    void firstStep() {
        backButton.disabled(true);
        nextButton.text("Next");
    }

    void middleStep() {
        backButton.disabled(false);
        nextButton.text("Next");
    }

    void reviewStep() {
        backButton.disabled(false);
        nextButton.text("Review");
    }
}
