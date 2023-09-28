package org.patternfly.components.menu;

import org.patternfly.components.SubComponent;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.section;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.group;
import static org.patternfly.layout.Classes.menu;
import static org.patternfly.layout.Classes.title;

public class MenuGroup extends SubComponent<HTMLElement, MenuGroup> {

    // ------------------------------------------------------ factory methods

    public static MenuGroup menuGroup() {
        return new MenuGroup(null);
    }

    public static MenuGroup menuGroup(String text) {
        return new MenuGroup(text);
    }

    // ------------------------------------------------------ instance

    MenuGroup(String text) {
        super(section().css(component(menu, group)).element());
        if (text != null) {
            add(h(3, text).css(menu, group, title));
        }
    }

    @Override
    public MenuGroup that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public MenuGroup addList(MenuList list) {
        return add(list);
    }
}
