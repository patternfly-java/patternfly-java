package org.patternfly.components.menu;

import org.patternfly.components.SubComponent;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.section;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.group;
import static org.patternfly.layout.Classes.title;

public class MenuGroup extends SubComponent<HTMLElement, MenuGroup> implements MenuHolder {

    // ------------------------------------------------------ factory methods

    public static MenuGroup menuGroup() {
        return new MenuGroup(null);
    }

    public static MenuGroup menuGroup(String text) {
        return new MenuGroup(text);
    }

    // ------------------------------------------------------ instance

    MenuList list;

    MenuGroup(String text) {
        super(section().css(component(Classes.menu, group)).element());
        if (text != null) {
            add(h(3, text).css(Classes.menu, group, title));
        }
    }

    @Override
    public void passMenu(Menu menu) {
        if (list != null) {
            list.passMenu(menu);
        }
    }

    @Override
    public MenuGroup that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public MenuGroup addList(MenuList list) {
        return add(this.list = list);
    }
}
