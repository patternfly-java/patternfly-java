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
import java.util.function.Consumer;
import java.util.function.Function;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.EventType;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.divider.Divider;
import org.patternfly.component.navigation.NavigationType.Horizontal;
import org.patternfly.core.Aria;
import org.patternfly.core.LanguageDirection;
import org.patternfly.core.Logger;
import org.patternfly.core.ObservableValue;
import org.patternfly.core.Roles;
import org.patternfly.handler.SelectHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Brightness;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;
import elemental2.dom.Node;
import elemental2.dom.NodeList;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static elemental2.dom.DomGlobal.window;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.isElementInView;
import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.resize;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.li;
import static org.patternfly.component.navigation.NavigationType.Horizontal.primary;
import static org.patternfly.component.navigation.NavigationType.Horizontal.secondary;
import static org.patternfly.component.navigation.NavigationType.Horizontal.tertiary;
import static org.patternfly.component.navigation.NavigationType.Vertical.expandable;
import static org.patternfly.component.navigation.NavigationType.Vertical.flat;
import static org.patternfly.component.navigation.NavigationType.Vertical.grouped;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Dataset.navigationGroup;
import static org.patternfly.core.Dataset.navigationItem;
import static org.patternfly.core.LanguageDirection.languageDirection;
import static org.patternfly.core.ObservableValue.ov;
import static org.patternfly.core.Validation.verifyEnum;
import static org.patternfly.icon.IconSets.fas.angleLeft;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.style.Brightness.dark;
import static org.patternfly.style.Brightness.light;
import static org.patternfly.style.Classes.button;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.horizontal;
import static org.patternfly.style.Classes.horizontalSubnav;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.nav;
import static org.patternfly.style.Classes.scroll;
import static org.patternfly.style.Classes.scrollable;

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
public class Navigation extends BaseComponent<HTMLElement, Navigation> implements Attachable {

    // ------------------------------------------------------ factory

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
    private final ObservableValue<Boolean> enableScrollButtons;
    private final ObservableValue<Boolean> showScrollButtons;
    private final ObservableValue<Boolean> renderScrollButtons;
    private final ObservableValue<Boolean> disableBackScrollButton;
    private final ObservableValue<Boolean> disableForwardScrollButton;

    private double scrollTimeout;
    private HandlerRegistration resizeHandler;
    private HandlerRegistration transitionEndHandler;
    private SelectHandler<NavigationItem> onSelect;
    private ToggleHandler<ExpandableNavigationGroup> toggleHandler;
    private HTMLContainerBuilder<HTMLButtonElement> scrollBack;
    private HTMLContainerBuilder<HTMLButtonElement> scrollForward;

    Navigation(NavigationType type) {
        super(ComponentType.Navigation, nav().css(component(nav)).element());
        this.type = type;
        this.items = new HashMap<>();
        this.groups = new HashMap<>();
        this.expandableGroups = new HashMap<>();
        this.enableScrollButtons = ov(false);
        this.showScrollButtons = ov(false);
        this.renderScrollButtons = ov(false);
        this.disableBackScrollButton = ov(false);
        this.disableForwardScrollButton = ov(false);

        if (type == secondary || type == tertiary) {
            aria(label, "Local");
        } else {
            aria(label, "Global");
        }

        if (type instanceof Horizontal) {
            if (type == primary) {
                css(modifier(horizontal));
            } else if (type == secondary) {
                css(modifier(horizontalSubnav));
            } else if (type == tertiary) {
                css(modifier(Classes.tertiary));
            }

            add(scrollBack = button().css(component(nav, scroll, button))
                    .apply(b -> b.disabled = true)
                    .aria(hidden, true)
                    .aria(label, "Scroll back")
                    .on(click, e -> scrollBack())
                    .add(angleLeft()));
            add(itemsContainer = ul().css(component(nav, list))
                    .attr(role, Roles.list)
                    .on(EventType.scroll, e -> updateScrollState())
                    .element());
            add(scrollForward = button().css(component(nav, scroll, button))
                    .apply(b -> b.disabled = true)
                    .aria(hidden, true)
                    .aria(label, "Scroll forward")
                    .on(click, e -> scrollForward())
                    .add(angleRight()));

        } else if (type instanceof NavigationType.Vertical) {
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
                    Logger.nyi(componentType().componentName, element(), "Drill-down and fly-out not yet implemented");
                    itemsContainer = div().element();
                    break;
                default:
                    Logger.unknown(componentType().componentName, element(), "Unknown navigation type: " + type);
                    itemsContainer = div().element();
            }
        } else {
            Logger.unknown(componentType().componentName, element(), "Unknown navigation type: " + type);
            itemsContainer = div().element();
        }

        storeComponent();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (type instanceof Horizontal && scrollBack != null && scrollForward != null) {
            enableScrollButtons.subscribe((current, previous) -> {
                if (!previous && current) {
                    renderScrollButtons.change(true);
                    setTimeout(__ -> {
                        transitionEndHandler = bind(scrollBack, "transitionend", e -> hideScrollButtons());
                        showScrollButtons.set(true);
                    }, 100);
                } else if (previous && !current) {
                    showScrollButtons.change(false);
                }
            });
            showScrollButtons.subscribe((current, __) -> classList().toggle(modifier(scrollable), current));
            renderScrollButtons.subscribe((current, __) -> {
                setVisible(scrollBack, current);
                setVisible(scrollForward, current);
            });
            disableBackScrollButton.subscribe((current, __) -> {
                scrollBack.element().disabled = current;
                scrollBack.aria(Aria.disabled, current);
            });
            disableForwardScrollButton.subscribe((current, __) -> {
                scrollForward.element().disabled = current;
                scrollForward.aria(Aria.disabled, current);
            });
            resizeHandler = bind(window, resize.name, e -> updateScrollState());
            updateScrollState();
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        clearTimeout(scrollTimeout);
        if (resizeHandler != null) {
            resizeHandler.removeHandler();
        }
        if (transitionEndHandler != null) {
            transitionEndHandler.removeHandler();
        }
    }

    // ------------------------------------------------------ add

    public <T> Navigation addItems(Iterable<T> items, Function<T, NavigationItem> display) {
        if (type == grouped) {
            Logger.unsupported(componentType().componentName, element(), "addItem(NavigationItem) is not supported for type " + type);
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
            Logger.unsupported(componentType().componentName, element(), "addItem(NavigationItem) is not supported for type " + type);
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
            Logger.unsupported(componentType().componentName, element(), "addGroup(NavigationGroup) is not supported for type " + type);
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
            Logger.unsupported(componentType().componentName, element(),
                    "addGroup(ExpandableNavigationGroup) is not supported for type " + type);
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

    public Navigation insertItemBefore(NavigationItem item, String beforeItemId) {
        HTMLElement element = Elements.find(itemsContainer, By.data(navigationItem, beforeItemId));
        if (element != null) {
            internalAddItem(item, itm -> insertBefore(itm.element(), element));
        }
        return this;
    }

    public Navigation insertItemAfter(NavigationItem item, String afterItemId) {
        HTMLElement element = Elements.find(itemsContainer, By.data(navigationItem, afterItemId));
        if (element != null) {
            internalAddItem(item, itm -> insertAfter(itm.element(), element));
        }
        return this;
    }

    public Navigation insertGroupBefore(NavigationGroup group, String beforeItemId) {
        HTMLElement element = Elements.find(itemsContainer, By.data(navigationItem, beforeItemId));
        if (element != null) {
            internalAddGroup(group, grp -> insertBefore(grp.element(), element));
        }
        return this;
    }

    public Navigation insertGroupAfter(NavigationGroup group, String afterItemId) {
        HTMLElement element = Elements.find(itemsContainer, By.data(navigationItem, afterItemId));
        if (element != null) {
            internalAddGroup(group, grp -> insertAfter(grp.element(), element));
        }
        return this;
    }

    public Navigation insertGroupBefore(ExpandableNavigationGroup group, String beforeItemId) {
        HTMLElement element = Elements.find(itemsContainer, By.data(navigationItem, beforeItemId));
        if (element != null) {
            internalAddGroup(group, grp -> insertBefore(grp.element(), element));
        }
        return this;
    }

    public Navigation insertGroupAfter(ExpandableNavigationGroup group, String afterItemId) {
        HTMLElement element = Elements.find(itemsContainer, By.data(navigationItem, afterItemId));
        if (element != null) {
            internalAddGroup(group, grp -> insertAfter(grp.element(), element));
        }
        return this;
    }

    // ------------------------------------------------------ builder

    public Navigation theme(Brightness theme) {
        if (verifyEnum(componentType().componentName, element(), "theme", theme, dark, light)) {
            css(theme.modifier());
        }
        return this;
    }

    @Override
    public Navigation that() {
        return this;
    }

    // ------------------------------------------------------ aria

    /**
     * Aria-label for the back scroll button
     */
    public Navigation ariaScrollBackLabel(String label) {
        if (scrollBack != null) {
            scrollBack.aria(Aria.label, label);
        }
        return this;
    }

    /**
     * Aria-label for the forward scroll button
     */
    public Navigation ariaScrollForwardLabel(String label) {
        if (scrollForward != null) {
            scrollForward.aria(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ events

    public Navigation onSelect(SelectHandler<NavigationItem> selectHandler) {
        this.onSelect = selectHandler;
        return this;
    }

    public Navigation onToggle(ToggleHandler<ExpandableNavigationGroup> toggleHandler) {
        this.toggleHandler = toggleHandler;
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
            if (fireEvent && onSelect != null) {
                onSelect.onSelect(new Event(""), item, true);
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

    // ------------------------------------------------------ internal

    private void internalAddItem(NavigationItem item, Consumer<NavigationItem> dom) {
        items.put(item.id, item);
        dom.accept(item);
        if (isAttached(element())) {
            updateScrollState();
        }
    }

    private void internalAddGroup(NavigationGroup group, Consumer<NavigationGroup> dom) {
        groups.put(group.id, group);
        dom.accept(group);
    }

    private void internalAddGroup(ExpandableNavigationGroup group, Consumer<ExpandableNavigationGroup> dom) {
        group.collapse(); // all groups are collapsed by default
        expandableGroups.put(group.id, group);
        if (toggleHandler != null) {
            group.toggleHandler = toggleHandler;
        }
        dom.accept(group);
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
                if (fireEvent && toggleHandler != null) {
                    toggleHandler.onToggle(new Event(""), group, true);
                }
            }
            // select parent group (if any)
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

    private void updateScrollState() {
        // debounce scroll event!
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout((__) -> {
            boolean overflowOnLeft = !isElementInView(itemsContainer,
                    ((HTMLElement) itemsContainer.firstElementChild), false);
            boolean overflowOnRight = !isElementInView(itemsContainer,
                    ((HTMLElement) itemsContainer.lastElementChild), false);
            enableScrollButtons.change(overflowOnLeft || overflowOnRight);
            disableBackScrollButton.change(!overflowOnLeft);
            disableForwardScrollButton.change(!overflowOnRight);
        }, 100);
    }

    private void hideScrollButtons() {
        if (!enableScrollButtons.get() && !showScrollButtons.get() && renderScrollButtons.get()) {
            renderScrollButtons.change(false);
        }
    }

    private void scrollBack() {
        HTMLElement firstElementInView = null;
        HTMLElement lastElementOutOfView = null;
        NodeList<Node> children = itemsContainer.childNodes;
        for (int i = 0; i < children.length && firstElementInView == null; i++) {
            HTMLElement child = (HTMLElement) children.item(i);
            if (isElementInView(itemsContainer, child, false)) {
                firstElementInView = child;
                lastElementOutOfView = (HTMLElement) children.item(i - 1);
            }
        }
        if (lastElementOutOfView != null) {
            if (languageDirection(element()) == LanguageDirection.ltr) {
                itemsContainer.scrollLeft -= lastElementOutOfView.scrollWidth;
            } else {
                itemsContainer.scrollLeft += lastElementOutOfView.scrollWidth;
            }
        }
    }

    private void scrollForward() {
        HTMLElement lastElementInView = null;
        HTMLElement firstElementOutOfView = null;
        NodeList<Node> children = itemsContainer.childNodes;
        for (int i = children.length - 1; i >= 0 && lastElementInView == null; i--) {
            HTMLElement child = (HTMLElement) children.item(i);
            if (isElementInView(itemsContainer, child, false)) {
                lastElementInView = child;
                firstElementOutOfView = (HTMLElement) children.item(i + 1);
            }
        }
        if (firstElementOutOfView != null) {
            if (languageDirection(element()) == LanguageDirection.ltr) {
                itemsContainer.scrollLeft += firstElementOutOfView.scrollWidth;
            } else {
                itemsContainer.scrollLeft -= firstElementOutOfView.scrollWidth;
            }
        }
    }
}
