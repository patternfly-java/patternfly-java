package org.patternfly.extension.finder;

import org.patternfly.component.button.Button;
import org.patternfly.component.menu.Dropdown;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.extension.finder.FinderClasses.column;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.style.Classes.actions;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.header;

public class FinderColumnHeaderActions extends FinderSubComponent<HTMLElement, FinderColumnHeaderActions> {

    // ------------------------------------------------------ factory

    public static FinderColumnHeaderActions finderColumnHeaderActions() {
        return new FinderColumnHeaderActions();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fcha";

    FinderColumnHeaderActions() {
        super(SUB_COMPONENT_NAME, div().css(component(finder, column, header, actions)).element());
    }

    // ------------------------------------------------------ add

    public FinderColumnHeaderActions addButton(Button button) {
        return add(button);
    }

    public FinderColumnHeaderActions addDropdown(Dropdown dropdown) {
        return add(dropdown);
    }

    // ------------------------------------------------------ builder

    @Override
    public FinderColumnHeaderActions that() {
        return this;
    }
}
