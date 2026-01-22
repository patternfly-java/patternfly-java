package org.patternfly.component.menu;

import java.util.function.Function;

import org.patternfly.core.Aria;

import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.combobox;

class TypeaheadDefaults {

    static void typeaheadDefaults(MenuToggleMenu<?> mtm,
            SearchFilter searchFilter,
            Function<String, MenuItem> noResultsProvider) {
        mtm.menuToggle.searchInput().input()
                .attr(role, combobox)
                .aria(Aria.expanded, false)
                .autocomplete("off")
                .on(click, event -> mtm.toggle());

        mtm.menuToggle.searchInput()
                .onClear((e, si) -> {
                    mtm.menu.clearSearch();
                    mtm.menu.unselectAllItems();
                    si.input().element().focus();
                })
                .onKeyup((event, si, value) -> {
                    // TODO Handle keys like up/down arrow, space, return, escape, ...
                    mtm.menu.search(searchFilter, noResultsProvider, value);
                    // expand();
                })
                .onChange((event, si, value) -> {
                    if (value.isEmpty()) {
                        mtm.menu.clearSearch();
                        mtm.menu.unselectAllItems();
                    }
                });

        mtm.onLoaded((e, c) -> {
            if (!mtm.menuToggle.searchInput().value().isEmpty()) {
                mtm.menu.search(searchFilter, noResultsProvider, mtm.menuToggle.searchInput().value());
            }
        });
    }
}
