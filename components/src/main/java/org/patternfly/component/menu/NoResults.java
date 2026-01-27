package org.patternfly.component.menu;

import org.jboss.elemento.Id;

import static org.patternfly.component.menu.MenuItem.menuItem;

/**
 * Functional interface that is responsible for generating a menu item when no results are found in a given menu list for a
 * specific input text.
 * <p>
 * This interface can be implemented to customize the behavior or appearance of the "no results" menu item.
 */
@FunctionalInterface
public interface NoResults {

    /**
     * Generates a menu item to be displayed when no results are found in the specified menu list for the given input text.
     *
     * @param menuList The menu list where the search operation was performed.
     * @param text     The input text for which no results were found.
     * @return A menu item representing the "no results" state.
     */
    MenuItem noResults(MenuList menuList, String text);

    /**
     * Provides a default implementation of the {@link NoResults} functional interface. The returned implementation generates a
     * disabled menu item with a message indicating that no results were found for the provided text.
     *
     * @return A {@link NoResults} implementation that creates a disabled menu item with a "no results" message based on the
     * input text.
     */
    static NoResults noResults() {
        return (menuList, text) -> menuItem(Id.unique("no-results"), "No results found for \"" + text + "\"")
                .disabled();
    }
}
