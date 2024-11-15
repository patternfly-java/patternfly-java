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
package org.patternfly.component.toolbar;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.patternfly.component.HasItems;
import org.patternfly.filter.Filter;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.setVisible;
import static org.patternfly.style.Classes.chipContainer;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.toolbar;

public class ToolbarFilterContent extends ToolbarSubComponent<HTMLDivElement, ToolbarFilterContent> implements
        HasItems<HTMLDivElement, ToolbarFilterContent, ToolbarItem> {

    // ------------------------------------------------------ factory

    public static ToolbarFilterContent toolbarFilterContent() {
        return new ToolbarFilterContent();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tfc";
    private final Map<String, ToolbarItem> items;

    ToolbarFilterContent() {
        super(SUB_COMPONENT_NAME, div().css(component(toolbar, content), modifier(chipContainer)).element());
        this.items = new LinkedHashMap<>();
        setVisible(this, false);
    }

    // ------------------------------------------------------ add

    @Override
    public ToolbarFilterContent add(ToolbarItem item) {
        items.put(item.identifier(), item);
        return add(item.element());
    }

    public ToolbarFilterContent addGroup(ToolbarGroup group) {
        return add(group);
    }

    public ToolbarFilterContent add(ToolbarGroup group) {
        return add(group.element());
    }

    // ------------------------------------------------------ builder

    /**
     * Binds a filter to the ToolbarFilterContent and sets its visibility based on whether the filter is defined or not.
     *
     * @param <T>    the type of the filter
     * @param filter the filter to bind
     * @return the ToolbarFilterContent instance for method chaining
     */
    public <T> ToolbarFilterContent bindVisibility(Filter<T> filter) {
        filter.onChange((f, origin) -> setVisible(this, f.defined()));
        return this;
    }

    /**
     * Binds a filter to the ToolbarFilterContent and sets its visibility based on the state of specific filter attributes.
     *
     * @param <T>             the type of the filter
     * @param filter          the filter to bind
     * @param firstAttribute  the first attribute to check in the filter
     * @param otherAttributes additional attributes to check in the filter
     * @return the ToolbarFilterContent instance for method chaining
     */
    public <T> ToolbarFilterContent bindVisibility(Filter<T> filter, String firstAttribute, String... otherAttributes) {
        List<String> attributes = new ArrayList<>();
        attributes.add(firstAttribute);
        attributes.addAll(List.of(otherAttributes));
        filter.onChange((f, origin) -> setVisible(this, attributes.stream().anyMatch(f::defined)));
        return this;
    }

    @Override
    public ToolbarFilterContent that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Iterator<ToolbarItem> iterator() {
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
    public ToolbarItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void clear() {
        items.clear();
        removeChildrenFrom(this);
    }
}
