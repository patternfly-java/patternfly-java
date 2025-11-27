import org.jboss.elemento.Id;
import org.patternfly.component.menu.Menu;
import org.patternfly.component.menu.MenuItem;
import org.patternfly.component.menu.MenuType;

import static org.patternfly.component.SelectionMode.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.menu.Menu.menu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuFooter.menuFooter;
import static org.patternfly.component.menu.MenuGroup.menuGroup;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.MenuSearch.menuSearch;
import static org.patternfly.component.textinputgroup.SearchInput.searchInput;

@SuppressWarnings("unused")
public class MenuDemo {

    public void menuDemo() {
        // @start region = menu
        Menu menu = menu(MenuType.menu, click)
                .scrollable()
                .height("200px")
                .addHeader("Header")
                .addContent(menuContent()
                        .addList(menuList()
                                .addItem(MenuItem.menuItem("1", "Item 1"))
                                .addItem(MenuItem.menuItem("2", "Item 2"))
                                .addDivider()
                                .addItem(MenuItem.linkMenuItem("3", "Item 3", "#third"))))
                .addFooter(menuFooter()
                        .add(button("Footer")));
        // @end region = menu
    }

    public void groupsDemo() {
        // @start region = groups
        Menu menu = menu(MenuType.menu, click)
                .addContent(menuContent()
                        .addGroup(menuGroup()
                                .addList(menuList()
                                        .addItem(MenuItem.menuItem("1", "Item 1"))))
                        .addDivider()
                        .addGroup(menuGroup("Group 1")
                                .addList(menuList()
                                        .addItem(MenuItem.menuItem("11", "Group 1 - Item 1"))
                                        .addItem(MenuItem.menuItem("12", "Group 1 - Item 2"))))
                        .addDivider()
                        .addGroup(menuGroup("Group 2")
                                .addList(menuList()
                                        .addItem(MenuItem.menuItem("21", "Group 2 - Item 1"))
                                        .addItem(MenuItem.menuItem("22", "Group 2 - Item 2")))));
        // @end region = groups
    }

    public void searchDemo() {
        // @start region = search
        Menu menu = menu(MenuType.menu, click)
                .addSearch(menuSearch()
                        .addSearchInput(searchInput("search"))
                        .onSearch((menuItem, value) ->
                                menuItem.text().toLowerCase().contains(value.toLowerCase()))
                        .onNoResults(value ->
                                menuItem(Id.unique("no-results"), "No results found for \"" + value + "\"")
                                        .disabled()))
                .addDivider()
                .addContent(menuContent()
                        .addList(menuList()
                                .addItem(menuItem("item-0", "Action 1"))
                                .addItem(menuItem("item-1", "Action 2"))
                                .addItem(menuItem("item-2", "Action 3"))));
        // @end region = search
    }
}
