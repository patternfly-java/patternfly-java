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

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.BaseSubComponent;
import org.patternfly.core.Aria;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.li;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Attributes.hidden;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Dataset.navigationGroup;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.expandable;
import static org.patternfly.layout.Classes.expanded;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.link;
import static org.patternfly.layout.Classes.list;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.nav;
import static org.patternfly.layout.Classes.subnav;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.PredefinedIcon.angleRight;

public class ExpandableNavigationGroup extends BaseSubComponent<HTMLLIElement, ExpandableNavigationGroup> {

    // ------------------------------------------------------ factory

    public static ExpandableNavigationGroup expandableNavigationGroup(String id, String text) {
        return new ExpandableNavigationGroup(id, text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "eng";

    public final String id;
    private final Map<String, NavigationItem> items;
    private final Map<String, ExpandableNavigationGroup> expandableGroups;
    private final HTMLButtonElement button;
    private final HTMLElement section;
    private final HTMLUListElement ul;
    ToggleHandler<ExpandableNavigationGroup> onToggle;

    ExpandableNavigationGroup(String id, String text) {
        super(li().css(component(nav, item), modifier(expandable))
                .data(navigationGroup, id)
                .element(), ComponentType.Navigation, SUB_COMPONENT_NAME);
        this.id = id;
        this.items = new HashMap<>();
        this.expandableGroups = new HashMap<>();

        String titleId = Id.unique(id, "title");
        add(button = button().css(component(nav, link))
                .id(titleId)
                .aria(Aria.expanded, false)
                .on(click, e -> toggle())
                .add(text)
                .add(span().css(component(nav, toggle))
                        .add(span().css(component(nav, toggle, icon))
                                .add(inlineIcon(angleRight))))
                .element());
        add(section = section().css(component(nav, subnav))
                .aria(labelledBy, titleId)
                .add(ul = ul().css(component(nav, list))
                        .attr(role, "list")
                        .element())
                .element());
        collapse();
    }

    // ------------------------------------------------------ add

    public <T> ExpandableNavigationGroup addItems(Iterable<T> items, Function<T, NavigationItem> display) {
        for (T item : items) {
            NavigationItem navigationItem = display.apply(item);
            addItem(navigationItem);
        }
        return this;
    }

    public ExpandableNavigationGroup addItem(NavigationItem item) {
        items.put(item.id, item);
        ul.appendChild(item.element());
        return this;
    }

    public ExpandableNavigationGroup addGroup(ExpandableNavigationGroup group) {
        expandableGroups.put(group.id, group);
        ul.appendChild(group.element());
        return this;
    }

    public ExpandableNavigationGroup addDivider() {
        ul.appendChild(divider(li).element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public ExpandableNavigationGroup that() {
        return this;
    }

    // ------------------------------------------------------ internal

    NavigationItem findItem(String id) {
        NavigationItem item = items.get(id);
        if (item == null) {
            for (ExpandableNavigationGroup group : expandableGroups.values()) {
                item = group.findItem(id);
                if (item != null) {
                    break;
                }
            }
        }
        return item;
    }

    ExpandableNavigationGroup findGroup(String id) {
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

    void toggle() {
        boolean expanded = element().classList.contains(modifier(Classes.expanded));
        if (expanded) {
            collapse();

        } else {
            expand();
        }
        if (onToggle != null) {
            // !expanded -> state has been toggled!
            onToggle.onToggle(this, !expanded);
        }
    }

    void expand() {
        element().classList.add(modifier(expanded));
        button.setAttribute(Aria.expanded, true);
        section.removeAttribute(hidden);
    }

    void collapse() {
        element().classList.remove(modifier("expanded"));
        button.setAttribute(Aria.expanded, false);
        section.hidden = true;
    }
}
