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
package org.patternfly.components.navigation;

import java.util.HashMap;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Function;

import org.jboss.elemento.By;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.components.BaseComponent;
import org.patternfly.components.ComponentType;
import org.patternfly.core.ItemDisplay;
import org.patternfly.core.SelectHandler;
import org.patternfly.layout.Classes;
import org.patternfly.layout.Orientation;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Dataset.navGroup;
import static org.patternfly.core.Dataset.navGroupExpandable;
import static org.patternfly.core.Dataset.navGroupLink;
import static org.patternfly.core.Dataset.navGroupSection;
import static org.patternfly.core.Dataset.navItem;
import static org.patternfly.layout.Classes.button;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.current;
import static org.patternfly.layout.Classes.divider;
import static org.patternfly.layout.Classes.labelledBy;
import static org.patternfly.layout.Classes.link;
import static org.patternfly.layout.Classes.list;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.scroll;
import static org.patternfly.layout.Classes.separator;
import static org.patternfly.layout.Classes.simple;
import static org.patternfly.layout.Classes.subnav;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.Icons.angleLeft;
import static org.patternfly.layout.Icons.angleRight;
import static org.patternfly.layout.Icons.fas;

/**
 * A navigation organizes an application's structure and content, making it easy to find information and accomplish tasks.
 * Navigation communicates relationships, context, and actions a user can take within an application.
 * <p>
 * {@snippet class = NavigationDemo region = horizontal}
 * {@snippet class = NavigationDemo region = vertical}
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/navigation/html">https://www.patternfly.org/components/navigation/html</a>
 */
// TODO Use static inner class Group instead of add(String group, NavigationItem item)
public class Navigation extends BaseComponent<HTMLElement, Navigation> {

    // ------------------------------------------------------ factory methods

    public static Navigation horizontal() {
        return new Navigation(Orientation.horizontal, false, true);
    }

    public static Navigation vertical(boolean expandable) {
        return new Navigation(Orientation.vertical, expandable, true);
    }

    // ------------------------------------------------------ instance

    private static final String A_TAG = "a";
    private final Orientation orientation;
    private final boolean expandable;
    private final Map<String, NavigationItem> items;
    private final ItemDisplay<HTMLAnchorElement, NavigationItem> itemDisplay;
    private SelectHandler<NavigationItem> onSelect;
    private HTMLElement ul;
    private HTMLElement lastGroup;

    Navigation(Orientation orientation, boolean expandable, boolean global) {
        super(nav().css(component("nav"))
                .aria("label", global ? "Global" : "Local")
                .element(),
                ComponentType.Navigation);

        this.orientation = orientation;
        this.expandable = expandable;
        this.items = new HashMap<>();
        this.itemDisplay = new ItemDisplay<>();

        if (orientation == Orientation.horizontal) {
            add(button().css(component("nav", scroll, button))
                    .aria("label", "Scroll left")
                    .on(click, e -> scrollLeft())
                    .add(i().css(fas(angleLeft))
                            .aria("hidden", true)));
            add(ul = ul().css(component("nav", Classes.horizontal, list))
                    .element());
            add(button().css(component("nav", scroll, button))
                    .aria("label", "Scroll right")
                    .on(click, e -> scrollRight())
                    .add(i().css(fas(angleRight))
                            .aria("hidden", true)));
        } else {
            add(ul = ul().css(component("nav", list)).element());
        }
    }

    @Override
    public Navigation that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public Navigation addItems(Iterable<NavigationItem> items) {
        for (NavigationItem item : items) {
            addItem(item);
        }
        return this;
    }

    public Navigation addItems(NavigationItem[] items) {
        for (NavigationItem item : items) {
            addItem(item);
        }
        return this;
    }

    public Navigation addItem(NavigationItem item) {
        addInternal(ul, null, item);
        return this;
    }

    public Navigation addGroup(String group, NavigationItem item) {
        String groupId = groupId(group);
        lastGroup = find(By.element("ul").and(By.data(navGroup, groupId)));
        if (lastGroup == null) {
            lastGroup = ul().css(component("nav", simple, list)).data(navGroup, groupId).element();
            String labelId = Id.unique("nav", "group", "label");
            if (expandable) {
                ul.appendChild(li().css(component("nav", Classes.item), modifier(Classes.expandable))
                        .data(navGroupExpandable, groupId)
                        .add(a().css(component("nav", link)).id(labelId).data(navGroupLink, groupId).textContent(group)
                                .on(click, e -> toggleGroup(groupId))
                                .add(span().css(component("nav", toggle))
                                        .add(i().css(fas(angleRight)).aria("hidden", true))))
                        .add(section().css(component("nav", subnav)).hidden(true).aria(labelledBy, labelId)
                                .data(navGroupSection, groupId).add(lastGroup))
                        .element());

            } else { // grouped
                add(section().css(component("nav", "section"))
                        .aria(labelledBy, labelId)
                        .add(h(2, group).css(component("nav", "section", "title")).id(labelId).textContent(group))
                        .add(lastGroup)
                        .element());
            }
        }
        addInternal(lastGroup, group, item);
        return this;
    }

    private void addInternal(HTMLElement ul, String group, NavigationItem item) {
        items.put(item.id, item);
        if (NavigationItem.SEPARATOR.equals(item) && orientation == Orientation.vertical) {
            HTMLElement element = (expandable) ? lastGroup : ul;
            if (element != null) {
                element.appendChild(li().css(divider).attr("role", separator).element());
            }
        } else {
            HTMLContainerBuilder<HTMLAnchorElement> a = a().css(component("nav", link)).on(click, e -> {
                ((HTMLElement) e.currentTarget).scrollIntoView(true);
                if (onSelect != null) {
                    onSelect.onSelect(item);
                }
            }).data(navItem, item.id);
            if (item.href != null) {
                a.attr("href", item.href);
            }
            itemDisplay.display.accept(a, item);
            if (group != null) {
                a.data(navGroup, groupId(group));
            }
            ul.appendChild(li().css(component("nav", Classes.item)).add(a).element());
            if (orientation == Orientation.horizontal) {
                // TODO add / remove "pf-m-start pf-m-end" to root element
            }
        }
    }

    // ------------------------------------------------------ modifiers

    public Navigation simple() {
        if (orientation == Orientation.vertical) {
            ul.classList.remove(component("nav", list));
            ul.classList.add(component("nav", simple, list));
        }
        return this;
    }

    // ------------------------------------------------------ select

    public void select(String itemId) {
        select(items.get(itemId), true);
    }

    public void select(String itemId, boolean fireEvent) {
        select(items.get(itemId), fireEvent);
    }

    public void select(NavigationItem item) {
        select(item, true);
    }

    public void select(NavigationItem item, boolean fireEvent) {
        if (item != null) {
            String itemId = item.id;
            for (HTMLElement e : findAll(By.element(A_TAG).and(By.data(navItem)))) {
                String value = e.dataset.get(navItem);
                if (itemId.equals(value)) {
                    e.classList.add(modifier(current));
                    e.setAttribute("aria-current", "page");
                    e.scrollIntoView(false);
                    if (fireEvent && onSelect != null) {
                        onSelect.onSelect(item);
                    }
                } else {
                    e.classList.remove(modifier(current));
                    e.removeAttribute("aria-current");
                }
            }
            if (expandable) {
                HTMLElement a = find(By.element(A_TAG).and(By.data(navItem, itemId)));
                if (a != null) {
                    String groupId = a.dataset.get(navGroup);
                    if (groupId != null) {
                        for (HTMLElement e : findAll(By.element("li").and(By.data(navGroupExpandable)))) {
                            if (groupId.equals(e.dataset.get(navGroupExpandable))) {
                                e.classList.add(modifier(current));
                                expand(groupId);
                            } else {
                                e.classList.remove(modifier(current));
                            }
                        }
                    }
                }
            }
        }
    }

    public Navigation onSelect(SelectHandler<NavigationItem> onSelect) {
        this.onSelect = onSelect;
        return this;
    }

    // ------------------------------------------------------ display

    public Navigation identifier(Function<NavigationItem, String> identifier) {
        itemDisplay.identifier = identifier;
        return this;
    }

    public Navigation asString(Function<NavigationItem, String> asString) {
        itemDisplay.asString = asString;
        return this;
    }

    public Navigation display(BiConsumer<HTMLContainerBuilder<HTMLAnchorElement>, NavigationItem> display) {
        itemDisplay.display = display;
        return this;
    }

    // ------------------------------------------------------ getters

    public NavigationItem getItem(String id) {
        return items.get(id);
    }

    // ------------------------------------------------------ internals

    private void toggleGroup(String groupId) {
        HTMLElement li = find(By.element("li").and(By.data(navGroupExpandable, groupId)));
        HTMLElement a = find(By.element(A_TAG).and(By.data(navGroupLink)));
        HTMLElement section = find(By.element("section").and(By.data(navGroupSection, groupId)));
        if (li != null && a != null && section != null) {
            if (li.classList.contains(modifier("expanded"))) {
                // collapse
                li.classList.remove(modifier("expanded"));
                a.setAttribute("aria-expanded", false);
                section.hidden = true;

            } else {
                // expand
                li.classList.add(modifier("expanded"));
                a.setAttribute("aria-expanded", true);
                section.removeAttribute("hidden");
            }
        }
    }

    private void expand(String groupId) {
        HTMLElement li = find(By.element("li").and(By.data(navGroupExpandable, groupId)));
        HTMLElement a = find(By.element(A_TAG).and(By.data(navGroupLink)));
        HTMLElement section = find(By.element("section").and(By.data(navGroupSection, groupId)));
        if (li != null && a != null && section != null) {
            li.classList.add(modifier("expanded"));
            a.setAttribute("aria-expanded", true);
            section.removeAttribute("hidden");
        }
    }

    private String groupId(String group) {
        return Id.build(group);
    }

    private void scrollLeft() {
        // TODO add / remove "pf-m-start pf-m-end" to root element
    }

    private void scrollRight() {
        // TODO add / remove "pf-m-start pf-m-end" to root element
    }
}
