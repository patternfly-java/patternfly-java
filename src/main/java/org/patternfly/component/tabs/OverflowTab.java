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
import java.util.Map;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.ComponentType;
import org.patternfly.component.menu.Menu;
import org.patternfly.component.menu.MenuItem;
import org.patternfly.core.Aria;
import org.patternfly.core.Expandable;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers;
import org.patternfly.thirdparty.popper.Popper;
import org.patternfly.thirdparty.popper.PopperBuilder;
import org.patternfly.thirdparty.popper.TriggerAction;

import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.component.menu.Menu.menu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuItemType.action;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.SelectionMode.single;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.hasPopup;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.overflow;
import static org.patternfly.style.Classes.toggle;
import static org.patternfly.style.PredefinedIcon.angleRight;
import static org.patternfly.thirdparty.popper.Placement.bottomStart;

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
    private int count;
    private String text;
    private boolean showCount;
    private Menu menu;
    private Popper popper;
    private MenuItem selectedMenuItem;

    OverflowTab() {
        super(SUB_COMPONENT_NAME, li().css(component(Classes.tabs, item), modifier(overflow))
                .attr(role, "presentation")
                .element());
        this.tabs = new LinkedHashMap<>();
        add(button = button().css(component(Classes.tabs, link))
                .attr(role, "tab")
                .aria(expanded, false)
                .aria(hasPopup, "menu")
                .add(textElement = span().css(component(Classes.tabs, item, Classes.text)).element())
                .add(span().css(component(Classes.tabs, link, toggle, icon))
                        .add(inlineIcon(angleRight))));
        updateText();
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

    boolean showCount() {
        return showCount;
    }

    void count(int count) {
        this.count = count;
        updateText();
    }

    void push(Tab tab) {
        tabs.put(tab.id, tab);
    }

    void buildMenu() {
        menu = menu(single)
                .onSingleSelect((event, menuItem, selected) -> select(menuItem))
                .addContent(menuContent()
                        .addList(menuList()
                                .addItems(tabs.values(), tab -> menuItem(tab.id, action).text(tab.text()))));
        add(menu);
        setVisible(menu, false);
        popper = new PopperBuilder(ComponentType.Tabs, button.element(), menu.element())
                .zIndex(9999)
                .placement(bottomStart)
                .addModifier(org.patternfly.thirdparty.popper.Modifiers.noOverflow(),
                        org.patternfly.thirdparty.popper.Modifiers.hide(),
                        org.patternfly.thirdparty.popper.Modifiers.flip(true),
                        org.patternfly.thirdparty.popper.Modifiers.placement(),
                        org.patternfly.thirdparty.popper.Modifiers.eventListeners(false))
                .registerHandler(button.element(), EnumSet.of(TriggerAction.click), this::show, this::close)
                .build();
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
