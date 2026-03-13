package org.patternfly.extension.finder;

import org.patternfly.component.button.Button;
import org.patternfly.component.menu.Dropdown;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.style.Classes.actions;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.item;

public class FinderItemActions extends FinderSubComponent<HTMLElement, FinderItemActions> {

    // ------------------------------------------------------ factory

    public static FinderItemActions finderColumnHeaderActions() {
        return new FinderItemActions();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fia";

    FinderItemActions() {
        super(SUB_COMPONENT_NAME, span().css(component(finder, item, actions)).element());
    }

    // ------------------------------------------------------ add

    public FinderItemActions addButton(Button button) {
        return add(button);
    }

    public FinderItemActions addDropdown(Dropdown dropdown) {
        return add(dropdown);
    }

    // ------------------------------------------------------ builder

    @Override
    public FinderItemActions that() {
        return this;
    }
}
