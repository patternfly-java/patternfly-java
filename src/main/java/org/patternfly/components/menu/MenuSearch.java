package org.patternfly.components.menu;

import org.patternfly.components.SubComponent;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;
import static org.patternfly.layout.Classes.menu;
import static org.patternfly.layout.Classes.search;

public class MenuSearch extends SubComponent<HTMLDivElement, MenuSearch> {

    // ------------------------------------------------------ factory methods

    public static MenuSearch menuSearch() {
        return new MenuSearch();
    }

    // ------------------------------------------------------ instance

    MenuSearch() {
        super(div().css(component(menu, search)).element());
    }

    @Override
    public MenuSearch that() {
        return this;
    }
}
