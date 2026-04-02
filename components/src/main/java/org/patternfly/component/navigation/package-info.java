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
/**
 * Provides the PatternFly navigation component and its subcomponents.
 * <p>
 * A navigation component organizes an application's structure and content, making it easy for users to find information and
 * accomplish tasks. Navigation can be rendered in different types including flat, grouped, expandable, and horizontal
 * variants.
 *
 * <h2>Usage</h2>
 *
 * A flat vertical navigation with simple items:
 *
 * {@snippet :
 * import static org.patternfly.component.navigation.Navigation.navigation;
 * import static org.patternfly.component.navigation.NavigationItem.navigationItem;
 * import static org.patternfly.component.navigation.NavigationType.Vertical.flat;
 *
 * Navigation navigation = navigation(flat)
 *         .addItem(navigationItem("item-0", "Link 1", "#item-0"))
 *         .addItem(navigationItem("item-1", "Link 2", "#item-1"))
 *         .addItem(navigationItem("item-2", "Link 3", "#item-2"));
 * }
 *
 * An expandable navigation with grouped items:
 *
 * {@snippet :
 * import static org.patternfly.component.navigation.ExpandableNavigationGroup.expandableNavigationGroup;
 * import static org.patternfly.component.navigation.Navigation.navigation;
 * import static org.patternfly.component.navigation.NavigationItem.navigationItem;
 * import static org.patternfly.component.navigation.NavigationType.Vertical.expandable;
 *
 * Navigation navigation = navigation(expandable)
 *         .addGroup(expandableNavigationGroup("grp-0", "Expandable group 1")
 *                 .addItem(navigationItem("item-00", "Subnav link 1", "#item-00"))
 *                 .addItem(navigationItem("item-01", "Subnav link 2", "#item-01")))
 *         .addGroup(expandableNavigationGroup("grp-1", "Expandable group 2")
 *                 .addItem(navigationItem("item-10", "Subnav link 1", "#item-10"))
 *                 .addItem(navigationItem("item-11", "Subnav link 2", "#item-11")));
 * }
 *
 * @see <a href="https://www.patternfly.org/components/navigation">https://www.patternfly.org/components/navigation</a>
 */
package org.patternfly.component.navigation;