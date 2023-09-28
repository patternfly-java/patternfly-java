package org.patternfly.components.menu;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.patternfly.components.SubComponent;
import org.patternfly.core.Aria;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.ul;
import static org.patternfly.components.divider.Divider.divider;
import static org.patternfly.components.divider.DividerType.li;
import static org.patternfly.core.SelectionMode.multi;
import static org.patternfly.core.SelectionMode.single;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.list;
import static org.patternfly.layout.Classes.menu;
import static org.patternfly.layout.Constants.role;

public class MenuList extends SubComponent<HTMLUListElement, MenuList> implements MenuHolder {

    // ------------------------------------------------------ factory methods

    /**
     * Creates a new menu list component .
     */
    public static MenuList menuList() {
        return new MenuList();
    }

    // ------------------------------------------------------ instance

    final Map<String, MenuItem> items;

    MenuList() {
        super(ul().css(component(menu, list)).attr(role, "menu").element());
        this.items = new HashMap<>();
    }

    @Override
    public void passMenu(Menu menu) {
        switch (menu.menuType) {
            case standalone:
            case dropdown:
                attr(role, "menuitem");
                break;
            case select:
                attr(role, "listbox");
                break;
        }
        if (menu.selectionMode == single) {
            aria(Aria.multiSelectable, false);
        } else if (menu.selectionMode == multi) {
            aria(Aria.multiSelectable, true);
        }
        for (MenuItem menuItem : items.values()) {
            menuItem.passMenu(menu);
        }
    }

    @Override
    public MenuList that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public <T> MenuList addItems(Iterable<T> items, Function<T, MenuItem> display) {
        for (T item : items) {
            MenuItem menuItem = display.apply(item);
            addItem(menuItem);
        }
        return this;
    }

    public MenuList addItem(MenuItem item) {
        items.put(item.id, item);
        return add(item);
    }

    public MenuList addDivider() {
        return add(divider(li));
    }
}
