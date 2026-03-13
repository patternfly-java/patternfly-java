package org.patternfly.extension.finder;

import org.jboss.elemento.ElementTextMethods;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.description;
import static org.patternfly.style.Classes.item;

public class FinderItemDescription extends FinderSubComponent<HTMLElement, FinderItemDescription> implements
        ElementTextMethods<HTMLElement, FinderItemDescription> {

    // ------------------------------------------------------ factory

    public static FinderItemDescription finderItemDescription() {
        return new FinderItemDescription();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fid";

    FinderItemDescription() {
        super(SUB_COMPONENT_NAME, span().css(component(finder, item, description)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public FinderItemDescription that() {
        return this;
    }
}
