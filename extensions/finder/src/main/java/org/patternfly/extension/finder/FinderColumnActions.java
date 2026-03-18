package org.patternfly.extension.finder;

import org.patternfly.component.button.Button;
import org.patternfly.component.menu.Dropdown;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.extension.finder.FinderClasses.column;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.style.Classes.actions;
import static org.patternfly.style.Classes.component;

public class FinderColumnActions extends FinderSubComponent<HTMLElement, FinderColumnActions> {

    // ------------------------------------------------------ factory

    public static FinderColumnActions finderColumnActions() {
        return new FinderColumnActions();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fca";

    FinderColumnActions() {
        super(SUB_COMPONENT_NAME, div().css(component(finder, column, actions)).element());
    }

    // ------------------------------------------------------ add

    public FinderColumnActions addButton(Button button) {
        return add(button);
    }

    public FinderColumnActions addDropdown(Dropdown dropdown) {
        return add(dropdown);
    }

    // ------------------------------------------------------ builder

    @Override
    public FinderColumnActions that() {
        return this;
    }
}
