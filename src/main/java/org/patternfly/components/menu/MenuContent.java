package org.patternfly.components.menu;

import java.util.ArrayList;
import java.util.List;

import org.patternfly.components.SubComponent;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.components.divider.Divider.divider;
import static org.patternfly.components.divider.DividerType.hr;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;
import static org.patternfly.layout.Classes.menu;

public class MenuContent extends SubComponent<HTMLDivElement, MenuContent> implements MenuHolder {

    // ------------------------------------------------------ factory methods

    public static MenuContent menuContent() {
        return new MenuContent();
    }

    // ------------------------------------------------------ instance

    List<MenuGroup> groups;
    MenuList list;

    MenuContent() {
        super(div().css(component(menu, content)).element());
        this.groups = new ArrayList<>();
    }

    @Override
    public void passMenu(Menu menu) {
        for (MenuGroup group : groups) {
            group.passMenu(menu);
        }
        if (list != null) {
            list.passMenu(menu);
        }
    }

    @Override
    public MenuContent that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public MenuContent addGroup(MenuGroup group) {
        groups.add(group);
        return add(group);
    }

    public MenuContent addList(MenuList list) {
        return add(this.list = list);
    }

    public MenuContent addDivider() {
        return add(divider(hr));
    }
}
