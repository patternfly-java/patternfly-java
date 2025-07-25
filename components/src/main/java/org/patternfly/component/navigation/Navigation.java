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

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.EventType;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.component.ScrollButtons;
import org.patternfly.component.divider.Divider;
import org.patternfly.component.navigation.NavigationType.Horizontal;
import org.patternfly.core.Aria;
import org.patternfly.core.Dataset;
import org.patternfly.core.Roles;
import org.patternfly.handler.SelectHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Classes;
import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.li;
import static org.patternfly.component.navigation.NavigationType.Horizontal.primary;
import static org.patternfly.component.navigation.NavigationType.Horizontal.secondary;
import static org.patternfly.component.navigation.NavigationType.Vertical.expandable;
import static org.patternfly.component.navigation.NavigationType.Vertical.flat;
import static org.patternfly.component.navigation.NavigationType.Vertical.grouped;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.button;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.horizontal;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.nav;
import static org.patternfly.style.Classes.subnav;

/**
 * A navigation organizes an application's structure and content, making it easy to find information and accomplish tasks.
 * Navigation communicates relationships, context, and actions a user can take within an application.
 * <p>
 * {@snippet class = NavigationDemo region = horizontal}
 * <p>
 * {@snippet class = NavigationDemo region = grouped}
 * <p>
 * {@snippet class = NavigationDemo region = expandable}
 *
 * @see <a href= "https://www.patternfly.org/components/navigation">https://www.patternfly.org/components/navigation</a>
 */
public class Navigation extends BaseComponent<HTMLElement, Navigation> implements
        HasItems<HTMLElement, Navigation, NavigationItem>,
        Attachable {

    // ------------------------------------------------------ factory

    public static Navigation navigation(NavigationType type) {
        return new Navigation(type);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Navigation.class.getName());
    private static final By A_NAV_LINK_CURRENT = By.element("a")
            .and(By.classnames(component(nav, link), modifier(current)));
    private static final By LI_NAV_ITEM_EXPANDABLE = By.element("li")
            .and(By.classnames(component(nav, Classes.item), modifier(Classes.expandable)));

    private final NavigationType type;
    private final ScrollButtons scrollButtons;
    private final HTMLElement itemsContainer;
    private final Map<String, NavigationItem> items;
    private final Map<String, NavigationGroup> groups;
    private final Map<String, ExpandableNavigationGroup> expandableGroups;
    private final List<SelectHandler<NavigationItem>> selectHandler;
    private final List<ToggleHandler<ExpandableNavigationGroup>> toggleHandler;

    Navigation(NavigationType type) {
        super(ComponentType.Navigation, nav().css(component(nav)).element());
        this.type = type;
        this.items = new LinkedHashMap<>();
        this.groups = new LinkedHashMap<>();
        this.expandableGroups = new LinkedHashMap<>();
        this.selectHandler = new ArrayList<>();
        this.toggleHandler = new ArrayList<>();

        if (type == secondary) {
            aria(label, "Local");
        } else {
            aria(label, "Global");
        }

        if (type instanceof Horizontal) {
            if (type == primary) {
                css(modifier(horizontal));
            } else if (type == secondary) {
                css(modifier(horizontal), modifier(subnav));
            }

            itemsContainer = ul().css(component(nav, list))
                    .attr(role, Roles.list)
                    .element();
            scrollButtons = new ScrollButtons(element(), itemsContainer, component(nav, Classes.scroll, button));
            itemsContainer.addEventListener(EventType.scroll.name, e -> scrollButtons.updateScrollState());
            addAll(scrollButtons.scrollBackContainer, itemsContainer, scrollButtons.scrollForwardContainer);

        } else if (type instanceof NavigationType.Vertical) {
            scrollButtons = null;
            //noinspection PatternVariableCanBeUsed
            NavigationType.Vertical vt = (NavigationType.Vertical) type;
            switch (vt) {
                case flat:
                case expandable:
                    add(itemsContainer = ul().css(component(nav, list))
                            .attr(role, Roles.list)
                            .element());
                    break;
                case grouped:
                    itemsContainer = element();
                    break;
                case drillDown:
                case flyout:
                    logger.error("Drill-down and fly-out not yet implemented");
                    itemsContainer = div().element();
                    break;
                default:
                    logger.error("Unknown navigation type: '%s' for navigation %o", type, element());
                    itemsContainer = div().element();
            }
        } else {
            logger.error("Unknown navigation type: '%s' for navigation %o", type, element());
            itemsContainer = div().element();
            scrollButtons = null;
        }

        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (type instanceof Horizontal && scrollButtons != null) {
            scrollButtons.attach(element(), itemsContainer);
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (scrollButtons != null) {
            scrollButtons.detach();
        }
    }

    // ------------------------------------------------------ add

    public <T> Navigation addItems(Iterable<T> items, Function<T, NavigationItem> display) {
        if (type == grouped) {
            logger.warn("addItem(NavigationItem) is not supported for type '%s' in navigation %o", type, element());
            return this;
        }
        for (T item : items) {
            NavigationItem navigationItem = display.apply(item);
            addItem(navigationItem);
        }
        return this;
    }

    public Navigation addItem(NavigationItem item) {
        return add(item);
    }

    public Navigation add(NavigationItem item) {
        if (type == grouped) {
            logger.warn("addItem(NavigationItem) is not supported for type '%s' in navigation %o", type, element());
            return this;
        }
        internalAddItem(item, itm -> itemsContainer.appendChild(itm.element()));
        return this;
    }

    public Navigation addGroup(NavigationGroup group) {
        return add(group);
    }

    public Navigation add(NavigationGroup group) {
        if (type == flat || type == expandable || type instanceof Horizontal) {
            logger.warn("addGroup(NavigationGroup) is not supported for type '%s' in navigation %o", type, element());
            return this;
        }
        internalAddGroup(group, grp -> itemsContainer.appendChild(grp.element()));
        return this;
    }

    public Navigation addGroup(ExpandableNavigationGroup group) {
        return add(group);
    }

    public Navigation add(ExpandableNavigationGroup group) {
        if (type == flat || type == grouped || type instanceof Horizontal) {
            logger.warn("addGroup(ExpandableNavigationGroup) is not supported for type '%s' in navigation %o", type, element());
            return this;
        }
        internalAddGroup(group, grp -> itemsContainer.appendChild(group.element()));
        return this;
    }

    public Navigation addDivider() {
        return add(divider(li));
    }

    public Navigation add(Divider divider) {
        itemsContainer.appendChild(divider.element());
        return this;
    }

    public Navigation insertItemBefore(NavigationItem item, String beforeIdentifier) {
        HTMLElement element = Elements.querySelector(itemsContainer, By.data(Dataset.identifier, beforeIdentifier));
        if (element != null) {
            internalAddItem(item, itm -> insertBefore(itm.element(), element));
        }
        return this;
    }

    public Navigation insertItemAfter(NavigationItem item, String afterIdentifier) {
        HTMLElement element = Elements.querySelector(itemsContainer, By.data(Dataset.identifier, afterIdentifier));
        if (element != null) {
            internalAddItem(item, itm -> insertAfter(itm.element(), element));
        }
        return this;
    }

    public Navigation insertGroupBefore(NavigationGroup group, String beforeIdentifier) {
        HTMLElement element = Elements.querySelector(itemsContainer, By.data(Dataset.identifier, beforeIdentifier));
        if (element != null) {
            internalAddGroup(group, grp -> insertBefore(grp.element(), element));
        }
        return this;
    }

    public Navigation insertGroupAfter(NavigationGroup group, String afterIdentifier) {
        HTMLElement element = Elements.querySelector(itemsContainer, By.data(Dataset.identifier, afterIdentifier));
        if (element != null) {
            internalAddGroup(group, grp -> insertAfter(grp.element(), element));
        }
        return this;
    }

    public Navigation insertGroupBefore(ExpandableNavigationGroup group, String beforeIdentifier) {
        HTMLElement element = Elements.querySelector(itemsContainer, By.data(Dataset.identifier, beforeIdentifier));
        if (element != null) {
            internalAddGroup(group, grp -> insertBefore(grp.element(), element));
        }
        return this;
    }

    public Navigation insertGroupAfter(ExpandableNavigationGroup group, String afterIdentifier) {
        HTMLElement element = Elements.querySelector(itemsContainer, By.data(Dataset.identifier, afterIdentifier));
        if (element != null) {
            internalAddGroup(group, grp -> insertAfter(grp.element(), element));
        }
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public Navigation that() {
        return this;
    }

    // ------------------------------------------------------ aria

    /**
     * Aria-label for the back scroll button
     */
    public Navigation ariaScrollBackLabel(String label) {
        if (scrollButtons != null) {
            scrollButtons.scrollBack.aria(Aria.label, label);
        }
        return this;
    }

    /**
     * Aria-label for the forward scroll button
     */
    public Navigation ariaScrollForwardLabel(String label) {
        if (scrollButtons != null) {
            scrollButtons.scrollForward.aria(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ events

    public Navigation onSelect(SelectHandler<NavigationItem> selectHandler) {
        this.selectHandler.add(selectHandler);
        return this;
    }

    public Navigation onToggle(ToggleHandler<ExpandableNavigationGroup> toggleHandler) {
        this.toggleHandler.add(toggleHandler);
        return this;
    }

    // ------------------------------------------------------ api

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
            if (fireEvent) {
                selectHandler.forEach(sh -> sh.onSelect(new Event(""), item, true));
            }

            if (type == expandable) {
                unselectAllExpandableGroups();
                selectGroup(item.anchorElement, fireEvent);
            }
        } else {
            unselectAllItems();
            unselectAllExpandableGroups();
        }
    }

    @Override
    public Iterator<NavigationItem> iterator() {
        return items.values().iterator();
    }

    @Override
    public int size() {
        return items.size();
    }

    @Override
    public boolean isEmpty() {
        return items.isEmpty();
    }

    @Override
    public boolean contains(String identifier) {
        return items.containsKey(identifier);
    }

    @Override
    public NavigationItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void clear() {
        removeChildrenFrom(itemsContainer);
        items.clear();
    }

    // ------------------------------------------------------ internal

    private void internalAddItem(NavigationItem item, Consumer<NavigationItem> dom) {
        items.put(item.identifier(), item);
        dom.accept(item);
        if (scrollButtons != null && isAttached(element())) {
            scrollButtons.updateScrollState();
        }
    }

    private void internalAddGroup(NavigationGroup group, Consumer<NavigationGroup> dom) {
        groups.put(group.identifier(), group);
        dom.accept(group);
    }

    private void internalAddGroup(ExpandableNavigationGroup group, Consumer<ExpandableNavigationGroup> dom) {
        group.collapse(); // all groups are collapsed by default
        expandableGroups.put(group.identifier(), group);
        if (toggleHandler != null) {
            group.toggleHandler.addAll(toggleHandler);
        }
        dom.accept(group);
    }

    private void unselectAllItems() {
        // remove the current modifier from all navigation item <a/> elements
        for (HTMLElement element : querySelectorAll(A_NAV_LINK_CURRENT)) {
            element.classList.remove(modifier(current));
            element.removeAttribute(Aria.current);
        }
    }

    private void unselectAllExpandableGroups() {
        // remove the current modifier from all expandable group <li/> elements
        for (HTMLElement element : querySelectorAll(LI_NAV_ITEM_EXPANDABLE.and(By.classname(modifier(current))))) {
            element.classList.remove(modifier(current));
        }
    }

    private void selectGroup(HTMLElement element, boolean fireEvent) {
        HTMLElement li = Elements.closest(element, LI_NAV_ITEM_EXPANDABLE);
        if (li != null) {
            li.classList.add(modifier(current));
            String groupId = li.dataset.get(Dataset.identifier);
            ExpandableNavigationGroup group = findGroup(groupId);
            if (group != null) {
                group.expand();
                if (fireEvent) {
                    toggleHandler.forEach(sh -> sh.onToggle(new Event(""), group, true));
                }
            }
            // select the parent group (if any)
            Element parent = li.parentElement;
            if (parent instanceof HTMLElement) {
                selectGroup((HTMLElement) parent, fireEvent);
            }
        }
    }

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
}
