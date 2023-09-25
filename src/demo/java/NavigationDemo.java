import static org.patternfly.components.divider.Divider.divider;
import static org.patternfly.components.divider.DividerType.li;
import static org.patternfly.components.navigation.ExpandableNavigationGroup.expandableNavigationGroup;
import static org.patternfly.components.navigation.Navigation.navigation;
import static org.patternfly.components.navigation.NavigationGroup.navigationGroup;
import static org.patternfly.components.navigation.NavigationItem.navigationItem;
import static org.patternfly.components.navigation.NavigationType.Horizontal.primary;
import static org.patternfly.components.navigation.NavigationType.Vertical.expandable;
import static org.patternfly.components.navigation.NavigationType.Vertical.flat;
import static org.patternfly.components.navigation.NavigationType.Vertical.grouped;

public class NavigationDemo {

    public void flatDemo() {
        // @start region = flat
        navigation(flat)
                .addItem(navigationItem("itm-1", "Item 1", "#itm-1"))
                .addItem(navigationItem("itm-2", "Item 2", "#itm-2"))
                .addDivider(divider(li))
                .addItem(navigationItem("itm-3", "Item 3", "#itm-3"));
        // @end region = flat
    }

    public void horizontalDemo() {
        // @start region = horizontal
        navigation(primary)
                .addItem(navigationItem("itm-1", "Item 1", "#itm-1"))
                .addItem(navigationItem("itm-2", "Item 2", "#itm-2"))
                .addItem(navigationItem("itm-3", "Item 3", "#itm-3"));
        // @end region = horizontal
    }

    public void groupedDemo() {
        // @start region = grouped
        navigation(grouped)
                .addGroup(navigationGroup("grp-1", "Group 1")
                        .addItem(navigationItem("grp-1-itm-1", "Item 1", "#grp-1-itm-1"))
                        .addItem(navigationItem("grp-1-itm-2", "Item 2", "#grp-1-itm-2"))
                        .addItem(navigationItem("grp-1-itm-3", "Item 3", "#grp-1-itm-3")))
                .addGroup(navigationGroup("grp-2", "Group 2")
                        .addItem(navigationItem("grp-2-itm-1", "Item 1", "#grp-2-itm-1"))
                        .addItem(navigationItem("grp-2-itm-2", "Item 2", "#grp-2-itm-2"))
                        .addDivider(divider(li))
                        .addItem(navigationItem("grp-2-itm-3", "Item 3", "#grp-2-itm-3")));
        // @end region = grouped
    }

    public void expandableDemo() {
        // @start region = expandable
        navigation(expandable)
                .addItem(navigationItem("itm-1", "Item 1", "#itm-1"))
                .addDivider(divider(li))
                .addGroup(expandableNavigationGroup("grp-1", "Group 1")
                        .addItem(navigationItem("grp-1-itm-1", "Item 1", "#grp-1-itm-1"))
                        .addItem(navigationItem("grp-1-itm-2", "Item 2", "#grp-1-itm-2"))
                        .addDivider(divider(li))
                        .addItem(navigationItem("grp-1-itm-3", "Item 3", "#grp-1-itm-3")))
                .addItem(navigationItem("itm-2", "Item 2", "#itm-2"))
                .addItem(navigationItem("itm-3", "Item 3", "#itm-3"))
                .addGroup(expandableNavigationGroup("grp-2", "Group 2")
                        .addItem(navigationItem("grp-2-itm-1", "Item 1", "#grp-2-itm-1"))
                        .addItem(navigationItem("grp-2-itm-2", "Item 2", "#grp-2-itm-2"))
                        .addGroup(expandableNavigationGroup("nested-grp-1", "Nested Group")
                                .addItem(navigationItem("nested-grp-1-itm-1", "Item 1", "#nested-grp-1-itm-1"))
                                .addDivider(divider(li))
                                .addItem(navigationItem("nested-grp-1-itm-2", "Item 2", "#nested-grp-1-itm-2"))));
        // @end region = expandable
    }
}
