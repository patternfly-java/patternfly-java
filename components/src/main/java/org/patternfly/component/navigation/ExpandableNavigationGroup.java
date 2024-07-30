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
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.function.Consumer;

import org.jboss.elemento.ButtonType;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.patternfly.component.HasItems;
import org.patternfly.component.WithIdentifier;
import org.patternfly.component.WithText;
import org.patternfly.component.divider.Divider;
import org.patternfly.core.Aria;
import org.patternfly.core.Dataset;
import org.patternfly.core.ElementDelegate;
import org.patternfly.core.Roles;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.li;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Attributes.hidden;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.expandable;
import static org.patternfly.style.Classes.expanded;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.nav;
import static org.patternfly.style.Classes.subnav;
import static org.patternfly.style.Classes.toggle;

public class ExpandableNavigationGroup extends NavigationSubComponent<HTMLLIElement, ExpandableNavigationGroup> implements
        HasItems<HTMLLIElement, ExpandableNavigationGroup, NavigationItem>,
        WithIdentifier<HTMLLIElement, ExpandableNavigationGroup>,
        WithText<HTMLLIElement, ExpandableNavigationGroup>,
        ElementDelegate<HTMLLIElement, ExpandableNavigationGroup> {

    // ------------------------------------------------------ factory

    public static ExpandableNavigationGroup expandableNavigationGroup(String identifier) {
        return new ExpandableNavigationGroup(identifier);
    }

    public static ExpandableNavigationGroup expandableNavigationGroup(String identifier, String text) {
        return new ExpandableNavigationGroup(identifier).text(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "eng";

    private final String identifier;
    private final Map<String, NavigationItem> items;
    private final Map<String, ExpandableNavigationGroup> expandableGroups;
    private final HTMLButtonElement button;
    private final HTMLElement section;
    private final HTMLUListElement ul;
    private NavigationLinkText text;
    ToggleHandler<ExpandableNavigationGroup> toggleHandler;

    ExpandableNavigationGroup(String identifier) {
        super(SUB_COMPONENT_NAME, li().css(component(nav, item), modifier(expandable))
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.items = new LinkedHashMap<>();
        this.expandableGroups = new HashMap<>();

        String titleId = Id.unique(identifier, "title");
        element().appendChild(button = button(ButtonType.button).css(component(nav, link))
                .id(titleId)
                .aria(Aria.expanded, false)
                .on(click, e -> toggle())
                .add("")
                .add(span().css(component(nav, toggle))
                        .add(span().css(component(nav, toggle, icon))
                                .add(angleRight())))
                .element());
        element().appendChild(section = section().css(component(nav, subnav))
                .aria(labelledBy, titleId)
                .add(ul = ul().css(component(nav, list))
                        .attr(role, Roles.list)
                        .element())
                .element());
        collapse();
    }

    @Override
    public HTMLElement delegate() {
        return button;
    }

    // ------------------------------------------------------ add

    @Override
    public ExpandableNavigationGroup add(NavigationItem item) {
        internalAddItem(item, itm -> ul.appendChild(itm.element()));
        return this;
    }

    public ExpandableNavigationGroup addGroup(ExpandableNavigationGroup group) {
        return add(group);
    }

    public ExpandableNavigationGroup add(ExpandableNavigationGroup group) {
        internalAddGroup(group, grp -> ul.appendChild(group.element()));
        return this;
    }

    public ExpandableNavigationGroup addDivider() {
        return add(divider(li));
    }

    public ExpandableNavigationGroup add(Divider divider) {
        ul.appendChild(divider.element());
        return this;
    }

    public ExpandableNavigationGroup addLinkText(NavigationLinkText text) {
        return add(text);
    }

    public ExpandableNavigationGroup add(NavigationLinkText text) {
        this.text = text;
        insertFirst(button, text);
        return this;
    }

    public ExpandableNavigationGroup insertItemBefore(NavigationItem item, String beforeIdentifier) {
        HTMLElement element = Elements.find(ul, By.data(Dataset.identifier, beforeIdentifier));
        if (element != null) {
            internalAddItem(item, itm -> insertBefore(itm.element(), element));
        }
        return this;
    }

    public ExpandableNavigationGroup insertItemAfter(NavigationItem item, String afterIdentifier) {
        HTMLElement element = Elements.find(ul, By.data(Dataset.identifier, afterIdentifier));
        if (element != null) {
            internalAddItem(item, itm -> insertAfter(itm.element(), element));
        }
        return this;
    }

    public ExpandableNavigationGroup insertGroupBefore(ExpandableNavigationGroup group, String beforeIdentifier) {
        HTMLElement element = Elements.find(ul, By.data(Dataset.identifier, beforeIdentifier));
        if (element != null) {
            internalAddGroup(group, grp -> insertBefore(grp.element(), element));
        }
        return this;
    }

    public ExpandableNavigationGroup insertGroupAfter(ExpandableNavigationGroup group, String afterIdentifier) {
        HTMLElement element = Elements.find(ul, By.data(Dataset.identifier, afterIdentifier));
        if (element != null) {
            internalAddGroup(group, grp -> insertAfter(grp.element(), element));
        }
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public ExpandableNavigationGroup text(String text) {
        if (text != null) {
            if (this.text != null) {
                this.text.textNode(text);
            } else {
                button(button).textNode(text);
            }
        }
        return this;
    }

    @Override
    public ExpandableNavigationGroup that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String identifier() {
        return identifier;
    }

    @Override
    public String text() {
        if (this.text != null) {
            return Elements.textNode(this.text);
        } else {
            return Elements.textNode(button);
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
    public void clear() {
        removeChildrenFrom(ul);
        items.clear();
    }

    // ------------------------------------------------------ internal

    private void internalAddItem(NavigationItem item, Consumer<NavigationItem> dom) {
        items.put(item.identifier(), item);
        dom.accept(item);
    }

    private void internalAddGroup(ExpandableNavigationGroup group, Consumer<ExpandableNavigationGroup> dom) {
        group.collapse(); // all groups are collapsed by default
        expandableGroups.put(group.identifier, group);
        expandableGroups.put(group.identifier, group);
        if (toggleHandler != null) {
            group.toggleHandler = toggleHandler;
        }
        dom.accept(group);
    }

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
        if (toggleHandler != null) {
            // !expanded -> state has been toggled!
            toggleHandler.onToggle(new Event(""), this, !expanded);
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
