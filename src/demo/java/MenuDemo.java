import org.patternfly.component.menu.Menu;
import org.patternfly.component.menu.MenuItem;

import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.menu.Menu.menu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuFooter.menuFooter;
import static org.patternfly.component.menu.MenuGroup.menuGroup;
import static org.patternfly.component.menu.MenuList.menuList;

public class MenuDemo {

    public void menuDemo() {
        // @start region = menu
        Menu menu = menu()
                .scrollable()
                .height("200px")
                .addHeader("Header")
                .addContent(menuContent()
                        .addList(menuList()
                                .addItem(MenuItem.actionMenuItem("1", "Item 1"))
                                .addItem(MenuItem.actionMenuItem("2", "Item 2"))
                                .addDivider()
                                .addItem(MenuItem.linkMenuItem("3", "Item 3", "#third"))))
                .addFooter(menuFooter()
                        .add(button("Footer")));
        // @end region = menu
    }

    public void groupsDemo() {
        // @start region = groups
        Menu menu = menu()
                .addContent(menuContent()
                        .addGroup(menuGroup()
                                .addList(menuList()
                                        .addItem(MenuItem.actionMenuItem("1", "Item 1"))))
                        .addDivider()
                        .addGroup(menuGroup("Group 1")
                                .addList(menuList()
                                        .addItem(MenuItem.actionMenuItem("11", "Group 1 - Item 1"))
                                        .addItem(MenuItem.actionMenuItem("12", "Group 1 - Item 2"))))
                        .addDivider()
                        .addGroup(menuGroup("Group 2")
                                .addList(menuList()
                                        .addItem(MenuItem.actionMenuItem("21", "Group 2 - Item 1"))
                                        .addItem(MenuItem.actionMenuItem("22", "Group 2 - Item 2")))));
        // @end region = groups
    }
}
