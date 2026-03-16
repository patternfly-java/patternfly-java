package org.patternfly.extension.finder;

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.textinputgroup.SearchInput;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.textinputgroup.SearchInput.searchInput;
import static org.patternfly.extension.finder.FinderClasses.column;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.search;

// TODO Make use of org.patternfly.filter.Filter
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

    // ------------------------------------------------------ builder

    public FinderColumnSearch autoSearch() {
        return autoSearch("Filter by name");
    }

    public FinderColumnSearch autoSearch(String placeholder) {
        String id = Id.build(SUB_COMPONENT_NAME, ComponentType.SearchInput.id);
        return addSearchInput(searchInput(id).placeholder(placeholder)
                .onClear((e, si) -> {
                    FinderColumn fc = lookupSubComponent(FinderColumn.SUB_COMPONENT_NAME, true);
                    if (fc != null) {
                    }
                })
                .onKeyup((e, si, filter) -> {
                    FinderColumn fc = lookupSubComponent(FinderColumn.SUB_COMPONENT_NAME, true);
                    if (fc != null) {
                    }
                }));
    }

    @Override
    public FinderColumnSearch that() {
        return this;
    }
}
