/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import java.util.List;

import org.jboss.elemento.Id;

import static java.util.Arrays.asList;
import static org.patternfly.component.navigation.ExpandableNavigationGroup.expandableNavigationGroup;
import static org.patternfly.component.navigation.Navigation.navigation;
import static org.patternfly.component.navigation.NavigationGroup.navigationGroup;
import static org.patternfly.component.navigation.NavigationItem.navigationItem;
import static org.patternfly.component.navigation.NavigationType.Horizontal.primary;
import static org.patternfly.component.navigation.NavigationType.Vertical.expandable;
import static org.patternfly.component.navigation.NavigationType.Vertical.flat;
import static org.patternfly.component.navigation.NavigationType.Vertical.grouped;

public class NavigationDemo {

    public void flatDemo() {
        // @start region = flat
        navigation(flat)
                .addItem(navigationItem("itm-1", "Item 1", "#itm-1"))
                .addItem(navigationItem("itm-2", "Item 2", "#itm-2"))
                .addDivider()
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
                        .addDivider()
                        .addItem(navigationItem("grp-2-itm-3", "Item 3", "#grp-2-itm-3")));
        // @end region = grouped
    }

    public void expandableDemo() {
        // @start region = expandable
        navigation(expandable)
                .addItem(navigationItem("itm-1", "Item 1", "#itm-1"))
                .addDivider()
                .addGroup(expandableNavigationGroup("grp-1", "Group 1")
                        .addItem(navigationItem("grp-1-itm-1", "Item 1", "#grp-1-itm-1"))
                        .addItem(navigationItem("grp-1-itm-2", "Item 2", "#grp-1-itm-2"))
                        .addDivider()
                        .addItem(navigationItem("grp-1-itm-3", "Item 3", "#grp-1-itm-3")))
                .addItem(navigationItem("itm-2", "Item 2", "#itm-2"))
                .addItem(navigationItem("itm-3", "Item 3", "#itm-3"))
                .addGroup(expandableNavigationGroup("grp-2", "Group 2")
                        .addItem(navigationItem("grp-2-itm-1", "Item 1", "#grp-2-itm-1"))
                        .addItem(navigationItem("grp-2-itm-2", "Item 2", "#grp-2-itm-2"))
                        .addGroup(expandableNavigationGroup("nested-grp-1", "Nested Group")
                                .addItem(navigationItem("nested-grp-1-itm-1", "Item 1", "#nested-grp-1-itm-1"))
                                .addDivider()
                                .addItem(navigationItem("nested-grp-1-itm-2", "Item 2", "#nested-grp-1-itm-2"))));
        // @end region = expandable
    }

    public void typedDemo() {
        // @start region = typed
        List<String> items = asList("Item 1", "Item 2", "Item 3");
        navigation(flat)
                .addItems(items, item -> {
                    String id = Id.build(item);
                    return navigationItem(id, item, "#" + id);
                });
        // @end region = typed
    }
}
