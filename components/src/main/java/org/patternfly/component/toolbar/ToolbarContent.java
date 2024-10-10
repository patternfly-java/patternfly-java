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

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import org.patternfly.component.HasItems;
import org.patternfly.core.ElementDelegate;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.section;
import static org.patternfly.style.Classes.toolbar;

/**
 * Container for a toolbar content.
 */
public class ToolbarContent extends ToolbarSubComponent<HTMLDivElement, ToolbarContent> implements
        HasItems<HTMLDivElement, ToolbarContent, ToolbarItem>,
        ElementDelegate<HTMLDivElement, ToolbarContent> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static ToolbarContent toolbarContent() {
        return new ToolbarContent();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tc";
    private final Map<String, ToolbarItem> items;
    private final HTMLElement contentSection;

    ToolbarContent() {
        super(SUB_COMPONENT_NAME, div().css(component(toolbar, content)).element());
        this.items = new LinkedHashMap<>();
        element().appendChild(contentSection = div().css(component(toolbar, content, section)).element());
    }

    @Override
    public HTMLElement delegate() {
        return contentSection;
    }

    // ------------------------------------------------------ add

    @Override
    public ToolbarContent add(ToolbarItem item) {
        items.put(item.identifier(), item);
        contentSection.appendChild(item.element());
        return this;
    }

    public ToolbarContent addGroup(ToolbarGroup group) {
        return add(group);
    }

    public ToolbarContent add(ToolbarGroup group) {
        contentSection.appendChild(group.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public ToolbarContent that() {
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
    public void clear() {
        removeChildrenFrom(contentSection);
        items.clear();
    }
}
