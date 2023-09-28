import org.patternfly.components.menu.Menu;

import static org.patternfly.components.Button.button;
import static org.patternfly.components.menu.Menu.menu;
import static org.patternfly.components.menu.MenuContent.menuContent;
import static org.patternfly.components.menu.MenuFooter.menuFooter;
import static org.patternfly.components.menu.MenuGroup.menuGroup;
import static org.patternfly.components.menu.MenuItem.menuItem;
import static org.patternfly.components.menu.MenuList.menuList;

public class MenuDemo {

    public void menuDemo() {
        // @start region = menu
        Menu menu = menu()
                .scrollable()
                .height("200px")
                .addHeader("Header")
                .addContent(menuContent()
                        .addList(menuList()
                                .addItem(menuItem("1"))
                                .addItem(menuItem("2"))
                                .addDivider()
                                .addItem(menuItem("3"))))
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
                                        .addItem(menuItem("1"))))
                        .addDivider()
                        .addGroup(menuGroup("Group 1")
                                .addList(menuList()
                                        .addItem(menuItem("11"))
                                        .addItem(menuItem("12"))))
                        .addDivider()
                        .addGroup(menuGroup("Group 2")
                                .addList(menuList()
                                        .addItem(menuItem("21"))
                                        .addItem(menuItem("22")))));
        // @end region = groups
    }
}
