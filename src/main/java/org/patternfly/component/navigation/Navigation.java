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
package org.patternfly.component.navigation;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.navigation.NavigationType.Horizontal;
import org.patternfly.core.Aria;
import org.patternfly.handler.SelectHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.li;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.component.navigation.NavigationType.Horizontal.primary;
import static org.patternfly.component.navigation.NavigationType.Horizontal.secondary;
import static org.patternfly.component.navigation.NavigationType.Vertical.expandable;
import static org.patternfly.component.navigation.NavigationType.Vertical.flat;
import static org.patternfly.component.navigation.NavigationType.Vertical.grouped;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Dataset.navigationGroup;
import static org.patternfly.layout.Classes.button;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.current;
import static org.patternfly.layout.Classes.horizontal;
import static org.patternfly.layout.Classes.horizontalSubnav;
import static org.patternfly.layout.Classes.link;
import static org.patternfly.layout.Classes.list;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.nav;
import static org.patternfly.layout.Classes.scroll;
import static org.patternfly.layout.PredefinedIcon.angleLeft;
import static org.patternfly.layout.PredefinedIcon.angleRight;

/**
 * A navigation organizes an application's structure and content, making it easy to find information and accomplish
 * tasks. Navigation communicates relationships, context, and actions a user can take within an application.
 * <p>
 * {@snippet class = NavigationDemo region = horizontal}
 * <p>
 * {@snippet class = NavigationDemo region = grouped}
 * <p>
 * {@snippet class = NavigationDemo region = expandable}
 *
 * @see <a href=
 * "https://www.patternfly.org/components/navigation/html">https://www.patternfly.org/components/navigation/html</a>
 */
public class Navigation extends BaseComponent<HTMLElement, Navigation> {

    // ------------------------------------------------------ factory methods

    public static Navigation navigation(NavigationType type) {
        return new Navigation(type);
    }

    // ------------------------------------------------------ instance

    private static final By A_NAV_LINK_CURRENT = By.element("a")
            .and(By.classnames(component(nav, link), modifier(current)));
    private static final By LI_NAV_ITEM_EXPANDABLE = By.element("li")
            .and(By.classnames(component(nav, Classes.item), modifier(Classes.expandable)));

    private final NavigationType type;
    private final HTMLElement itemsContainer;
    private final Map<String, NavigationItem> items;
    private final Map<String, NavigationGroup> groups;
    private final Map<String, ExpandableNavigationGroup> expandableGroups;
    private SelectHandler<NavigationItem> onSelect;
    private ToggleHandler<ExpandableNavigationGroup> onToggle;

    Navigation(NavigationType type) {
        super(nav().css(component(nav)).element(), ComponentType.Navigation);
        this.type = type;
        this.items = new HashMap<>();
        this.groups = new HashMap<>();
        this.expandableGroups = new HashMap<>();

        if (type == secondary) {
            aria(label, "Local");
        } else {
            aria(label, "Global");
        }

        if (type instanceof Horizontal) {
            if (type == primary) {
                css(modifier(horizontal));
            } else if (type == secondary) {
                css(modifier(horizontalSubnav));
            }
            add(button().css(component(nav, scroll, button))
                    .aria(label, "Scroll left")
                    .on(click, e -> scrollLeft())
                    .add(inlineIcon(angleLeft)));
            add(itemsContainer = ul().css(component(nav, horizontal, list))
                    .element());
            add(button().css(component(nav, scroll, button))
                    .aria(label, "Scroll right")
                    .on(click, e -> scrollRight())
                    .add(inlineIcon(angleRight)));

        } else if (type instanceof NavigationType.Vertical) {
            NavigationType.Vertical vt = (NavigationType.Vertical) type;
            switch (vt) {
                case flat:
                case expandable:
                    add(itemsContainer = ul().css(component(nav, list))
                            .attr(role, "list")
                            .element());
                    break;
                case grouped:
                    itemsContainer = element();
                    break;
                case drillDown:
                case flyout:
                    console.error("Drill-down and fly-out not yet implemented");
                    itemsContainer = div().element();
                    break;
                default:
                    console.error("Unknown navigation type: " + type);
                    itemsContainer = div().element();
            }
        } else {
            console.error("Unknown navigation type: " + type);
            itemsContainer = div().element();
        }
    }

    @Override
    public Navigation that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public <T> Navigation addItems(Iterable<T> items, Function<T, NavigationItem> display) {
        if (type == grouped) {
            console.error("addItem(NavigationItem) is not supported for type " + type);
            return this;
        }
        for (T item : items) {
            NavigationItem navigationItem = display.apply(item);
            addItem(navigationItem);
        }
        return this;
    }

    public Navigation addItem(NavigationItem item) {
        if (type == grouped) {
            console.error("addItem(NavigationItem) is not supported for type " + type);
            return this;
        }
        items.put(item.id, item);
        itemsContainer.appendChild(item.element());
        return this;
    }

    public Navigation addGroup(NavigationGroup group) {
        if (type == flat || type == expandable || type instanceof Horizontal) {
            console.error("addGroup(NavigationGroup) is not supported for type " + type);
            return this;
        }
        groups.put(group.id, group);
        itemsContainer.appendChild(group.element());
        return this;
    }

    public Navigation addGroup(ExpandableNavigationGroup group) {
        if (type == flat || type == grouped || type instanceof Horizontal) {
            console.error("addGroup(ExpandableNavigationGroup) is not supported for type " + type);
            return this;
        }
        group.collapse(); // all groups are collapsed by default
        expandableGroups.put(group.id, group);
        itemsContainer.appendChild(group.element());
        if (onToggle != null) {
            group.onToggle = onToggle;
        }
        return this;
    }

    public Navigation addDivider() {
        itemsContainer.appendChild(divider(li).element());
        return this;
    }

    // ------------------------------------------------------ events

    public Navigation onSelect(SelectHandler<NavigationItem> onSelect) {
        this.onSelect = onSelect;
        return this;
    }

    public Navigation onToggle(ToggleHandler<ExpandableNavigationGroup> onToggle) {
        this.onToggle = onToggle;
        return this;
    }

    // ------------------------------------------------------ select

    public void select(String itemId) {
        select(findItem(itemId), true);
    }

    public void select(String itemId, boolean fireEvent) {
        select(findItem(itemId), fireEvent);
    }

    public void select(NavigationItem item) {
        select(item, true);
    }

    public void select(NavigationItem item, boolean fireEvent) {
        if (item != null) {
            unselectAllItems();
            item.select();
            if (fireEvent && onSelect != null) {
                onSelect.onSelect(item);
            }

            if (type == expandable) {
                unselectAllExpandableGroups();
                selectGroup(item.a, fireEvent);
            }
        } else {
            unselectAllItems();
            unselectAllExpandableGroups();
        }
    }

    private void unselectAllItems() {
        // remove the current modifier from all navigation item <a/> elements
        for (HTMLElement element : findAll(A_NAV_LINK_CURRENT)) {
            element.classList.remove(modifier(current));
            element.removeAttribute(Aria.current);
        }
    }

    private void unselectAllExpandableGroups() {
        // remove the current modifier from all expandable group <li/> elements
        for (HTMLElement element : findAll(LI_NAV_ITEM_EXPANDABLE.and(By.classname(modifier(current))))) {
            element.classList.remove(modifier(current));
        }
    }

    private void selectGroup(HTMLElement element, boolean fireEvent) {
        HTMLElement li = Elements.closest(element, LI_NAV_ITEM_EXPANDABLE);
        if (li != null) {
            li.classList.add(modifier(current));
            String groupId = li.dataset.get(navigationGroup);
            ExpandableNavigationGroup group = findGroup(groupId);
            if (group != null) {
                group.expand();
                if (fireEvent && onToggle != null) {
                    onToggle.onToggle(group, true);
                }
            }
            // select parent group (if any)
            Element parent = li.parentElement;
            if (parent instanceof HTMLElement) {
                selectGroup((HTMLElement) parent, fireEvent);
            }
        }
    }

    // ------------------------------------------------------ internals

    private NavigationItem findItem(String id) {
        NavigationItem item = items.get(id);
        if (item == null) {
            if (type == grouped) {
                for (NavigationGroup group : groups.values()) {
                    item = group.findItem(id);
                    if (item != null) {
                        break;
                    }
                }
            } else if (type == expandable) {
                for (ExpandableNavigationGroup group : expandableGroups.values()) {
                    item = group.findItem(id);
                    if (item != null) {
                        break;
                    }
                }
            }
        }
        return item;
    }

    private ExpandableNavigationGroup findGroup(String id) {
        ExpandableNavigationGroup group = expandableGroups.get(id);
        if (group == null) {
            for (ExpandableNavigationGroup nestedGroup : expandableGroups.values()) {
                group = nestedGroup.findGroup(id);
                if (group != null) {
                    break;
                }
            }
        }
        return group;
    }

    private void scrollLeft() {
        // TODO add / remove "pf-m-start pf-m-end" to root element
    }

    private void scrollRight() {
        // TODO add / remove "pf-m-start pf-m-end" to root element
    }
}
