package org.patternfly.showcase;

import org.jboss.elemento.Id;
import org.patternfly.component.menu.Dropdown;

import static org.patternfly.component.menu.Dropdown.dropdown;
import static org.patternfly.component.menu.DropdownMenu.dropdownMenu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.icon.IconSets.fas.ellipsisV;

public class BuildingBlocks {

    public static Dropdown mixedKebab(String baseId) {
        return dropdown(ellipsisV(), "Column actions")
                .addMenu(dropdownMenu()
                        .addContent(menuContent()
                                .addList(menuList()
                                        .addItem(menuItem(Id.build(baseId, "item-0"), "Action"))
                                        .addItem(linkMenuItem(Id.build(baseId, "item-1"),
                                                "Link", "#" + Id.build(baseId, "item-1")))
                                        .addItem(menuItem(Id.build(baseId, "item-2"),
                                                "Disabled action")
                                                .disabled())
                                        .addItem(linkMenuItem(Id.build(baseId, "item-3"),
                                                "Disabled link", "#" + Id.build(baseId, "item-3"))
                                                .disabled())
                                        .addDivider()
                                        .addItem(menuItem(Id.build(baseId, "item-4"),
                                                "Separated action"))
                                        .addItem(linkMenuItem(Id.build(baseId, "item-5"),
                                                "Separated link", "#" + Id.build(baseId, "item-5"))))));
    }
}
