package org.patternfly.components.menu;

import org.patternfly.components.SubComponent;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.footer;
import static org.patternfly.layout.Classes.menu;

public class MenuFooter extends SubComponent<HTMLDivElement, MenuFooter> {

    // ------------------------------------------------------ factory methods

    public static MenuFooter menuFooter() {
        return new MenuFooter(null);
    }

    public static MenuFooter menuFooter(String text) {
        return new MenuFooter(text);
    }

    // ------------------------------------------------------ instance

    MenuFooter(String text) {
        super(div().css(component(menu, footer)).element());
        if (text != null) {
            textContent(text);
        }
    }

    @Override
    public MenuFooter that() {
        return this;
    }
}
