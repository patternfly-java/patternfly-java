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
package org.patternfly.component.tabs;

import java.util.EnumSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.component.menu.Menu;
import org.patternfly.component.menu.MenuItem;
import org.patternfly.component.menu.MenuList;
import org.patternfly.core.Aria;
import org.patternfly.core.Roles;
import org.patternfly.popper.Popper;
import org.patternfly.popper.PopperBuilder;
import org.patternfly.popper.TriggerAction;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers;

import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.menu.Menu.menu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuItemType.action;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.presentation;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.popper.Modifiers.eventListeners;
import static org.patternfly.popper.Modifiers.flip;
import static org.patternfly.popper.Modifiers.hide;
import static org.patternfly.popper.Modifiers.noOverflow;
import static org.patternfly.popper.Modifiers.placement;
import static org.patternfly.popper.Placement.bottomStart;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.hasPopup;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.overflow;
import static org.patternfly.style.Classes.toggle;

// internal subcomponent!
class OverflowTab extends TabSubComponent<HTMLElement, OverflowTab> implements Modifiers.Disabled<HTMLElement, OverflowTab> {

    // ------------------------------------------------------ factory

    static OverflowTab overflowTab() {
        return new OverflowTab();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ot";

    private final Map<String, Tab> tabs;
    private final HTMLContainerBuilder<HTMLButtonElement> button;
    private final HTMLElement textElement;
    private final Menu menu;
    private final MenuList menuList;
    private int count;
    private String text;
    private boolean showCount;
    private Popper popper;
    private MenuItem selectedMenuItem;

    OverflowTab() {
        super(SUB_COMPONENT_NAME, li().css(component(Classes.tabs, item), modifier(overflow))
                .id(Id.unique(ComponentType.Tabs.id, "overflow"))
                .attr(role, presentation)
                .element());
        this.tabs = new LinkedHashMap<>();

        add(button = button().css(component(Classes.tabs, link))
                .attr(role, Roles.tab)
                .aria(expanded, false)
                .aria(hasPopup, "menu")
                .add(textElement = span().css(component(Classes.tabs, item, Classes.text)).element())
                .add(span().css(component(Classes.tabs, link, toggle, icon))
                        .add(angleRight())));
        add(menu = menu(single)
                .onSingleSelect((event, menuItem, selected) -> select(menuItem))
                .addContent(menuContent()
                        .addList(menuList = menuList()
                                .addItems(tabs.values(), tab -> menuItem(tab.id, action).text(tab.text())))));
        setVisible(menu, false);

        popper = new PopperBuilder(ComponentType.Tabs.componentName, button.element(), menu.element())
                .zIndex(9999)
                .placement(bottomStart)
                .addModifier(noOverflow(),
                        hide(),
                        flip(true),
                        placement(),
                        eventListeners(false))
                .registerHandler(button.element(), EnumSet.of(TriggerAction.click), this::show, this::close)
                .build();
    }

    // not a real detach, but called from tabs component
    void detach() {
        if (popper != null) {
            popper.cleanup();
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public OverflowTab that() {
        return this;
    }

    // ------------------------------------------------------ internal

    void ariaLabel(String label) {
        button.aria(Aria.label, label);
    }

    void text(String text) {
        this.text = text;
        updateText();
    }

    void showCount(boolean showCount) {
        this.showCount = showCount;
        updateText();
    }

    void update(List<Tab> overflowTabs) {
        tabs.clear();
        menuList.clear();
        setVisible(this, !overflowTabs.isEmpty());
        if (!overflowTabs.isEmpty()) {
            count = overflowTabs.size();
            updateText();
            for (Tab tab : overflowTabs) {
                tabs.put(tab.id, tab);
            }
            menuList.addItems(overflowTabs, tab -> menuItem(tab.id, action).text(tab.text()));
        }
    }

    void unselect() {
        classList().remove(modifier(current));
        if (selectedMenuItem != null) {
            menu.select(selectedMenuItem, false, false);
        }
        updateText();
    }

    private void select(MenuItem menuItem) {
        selectedMenuItem = menuItem;
        Tab tab = tabs.get(menuItem.id);
        if (tab != null) {
            classList().add(modifier(current));
            textElement.textContent = tab.text();
            Tabs tabs = lookupFlatComponent();
            tabs.select(tab);
        }
    }

    private void updateText() {
        textElement.textContent = text;
        if (showCount && count > 0) {
            textElement.textContent += " (" + count + ")";
        }
    }

    private void show(Event event) {
        popper.show(() -> Expandable.expand(button.element(), button.element(), null));
    }

    private void close(Event event) {
        popper.hide(() -> Expandable.collapse(button.element(), button.element(), null));
    }
}
