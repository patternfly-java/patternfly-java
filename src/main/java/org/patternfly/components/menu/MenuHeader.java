package org.patternfly.components.menu;

import org.patternfly.components.SubComponent;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.header;
import static org.patternfly.layout.Classes.menu;

public class MenuHeader extends SubComponent<HTMLDivElement, MenuHeader> {

    // ------------------------------------------------------ factory methods

    public static MenuHeader menuHeader() {
        return new MenuHeader(null);
    }

    public static MenuHeader menuHeader(String text) {
        return new MenuHeader(text);
    }

    // ------------------------------------------------------ instance

    MenuHeader(String text) {
        super(div().css(component(menu, header)).element());
        if (text != null) {
            textContent(text);
        }
    }

    @Override
    public MenuHeader that() {
        return this;
    }
}
