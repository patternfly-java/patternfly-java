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

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.function.Consumer;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.patternfly.component.ElementContainerDelegate;
import org.patternfly.component.HasItems;
import org.patternfly.component.WithIdentifier;
import org.patternfly.component.WithText;
import org.patternfly.component.divider.Divider;
import org.patternfly.core.Dataset;
import org.patternfly.core.Roles;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLHeadingElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.li;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.nav;
import static org.patternfly.style.Classes.section;
import static org.patternfly.style.Classes.title;

public class NavigationGroup extends NavigationSubComponent<HTMLElement, NavigationGroup> implements
        HasItems<HTMLElement, NavigationGroup, NavigationItem>,
        WithIdentifier<HTMLElement, NavigationGroup>,
        WithText<HTMLElement, NavigationGroup>,
        ElementContainerDelegate<HTMLElement, NavigationGroup> {

    // ------------------------------------------------------ factory

    public static NavigationGroup navigationGroup(String identifier) {
        return new NavigationGroup(identifier);
    }

    public static NavigationGroup navigationGroup(String identifier, String text) {
        return new NavigationGroup(identifier).text(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ng";

    private final String identifier;
    private final Map<String, NavigationItem> items;
    private final HTMLHeadingElement heading;
    private final HTMLUListElement ul;
    private NavigationLinkText text;

    NavigationGroup(String identifier) {
        super(SUB_COMPONENT_NAME, section().css(component(nav, section))
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.items = new LinkedHashMap<>();

        element().appendChild(heading = h(2).css(component(nav, section, title)).element());
        element().appendChild(ul = ul().css(component(nav, list))
                .attr(role, Roles.list)
                .element());
    }

    @Override
    public HTMLElement delegate() {
        return heading;
    }

    // ------------------------------------------------------ add

    @Override
    public NavigationGroup add(NavigationItem item) {
        internalAddItem(item, itm -> ul.appendChild(itm.element()));
        return this;
    }

    public NavigationGroup addDivider() {
        return add(divider(li));
    }

    public NavigationGroup add(Divider divider) {
        ul.appendChild(divider.element());
        return this;
    }

    public NavigationGroup addLinkText(NavigationLinkText text) {
        return add(text);
    }

    public NavigationGroup add(NavigationLinkText text) {
        this.text = text;
        heading.appendChild(text.element());
        return this;
    }

    public NavigationGroup insertItemBefore(NavigationItem item, String beforeIdentifier) {
        HTMLElement element = Elements.querySelector(ul, By.data(Dataset.identifier, beforeIdentifier));
        if (element != null) {
            internalAddItem(item, itm -> insertBefore(itm.element(), element));
        }
        return this;
    }

    public NavigationGroup insertItemAfter(NavigationItem item, String afterIdentifier) {
        HTMLElement element = Elements.querySelector(ul, By.data(Dataset.identifier, afterIdentifier));
        if (element != null) {
            internalAddItem(item, itm -> insertAfter(itm.element(), element));
        }
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public NavigationGroup text(String text) {
        if (text != null) {
            if (this.text != null) {
                this.text.textNode(text);
            } else {
                h(heading).textNode(text);
            }
        }
        return this;
    }

    @Override
    public NavigationGroup that() {
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
            return Elements.textNode(heading);
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
        removeChildrenFrom(ul);
        items.clear();
    }

    // ------------------------------------------------------ internal

    private void internalAddItem(NavigationItem item, Consumer<NavigationItem> dom) {
        items.put(item.identifier(), item);
        dom.accept(item);
    }

    NavigationItem findItem(String id) {
        return items.get(id);
    }
}
