package org.patternfly.extension.finder;

import org.patternfly.component.textinputgroup.SearchInput;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.extension.finder.FinderClasses.column;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.search;

public class FinderColumnSearch extends FinderSubComponent<HTMLElement, FinderColumnSearch> {

    // ------------------------------------------------------ factory

    public static FinderColumnSearch finderColumnSearch() {
        return new FinderColumnSearch();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fcs";

    FinderColumnSearch() {
        super(SUB_COMPONENT_NAME, div().css(component(finder, column, search)).element());
    }

    // ------------------------------------------------------ add

    public FinderColumnSearch addSearchInput(SearchInput input) {
        return add(input);
    }

    public FinderColumnSearch add(SearchInput input) {
        return add(input.element());
    }

    // ------------------------------------------------------ builder

    @Override
    public FinderColumnSearch that() {
        return this;
    }
}
