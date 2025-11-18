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

import java.util.HashMap;
import java.util.Map;

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasIdentifier;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.overflowContainer;
import static org.patternfly.style.Classes.toolbar;

/**
 * Container for a toolbar item.
 */
public class ToolbarItem extends ToolbarSubComponent<HTMLDivElement, ToolbarItem> implements
        ComponentContext<HTMLDivElement, ToolbarItem>,
        HasIdentifier<HTMLDivElement, ToolbarItem> {

    // ------------------------------------------------------ factory

    public static ToolbarItem toolbarItem() {
        return new ToolbarItem(Id.unique(ComponentType.Toolbar.id, "itm"), null);
    }

    public static ToolbarItem toolbarItem(ToolbarItemType type) {
        return new ToolbarItem(Id.unique(ComponentType.Toolbar.id, "itm"), type);
    }

    public static ToolbarItem toolbarItem(String identifier) {
        return new ToolbarItem(identifier, null);
    }

    public static ToolbarItem toolbarItem(String identifier, ToolbarItemType type) {
        return new ToolbarItem(identifier, type);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "ti";
    private final String identifier;
    private final Map<String, Object> data;

    ToolbarItem(String identifier, ToolbarItemType type) {
        super(SUB_COMPONENT_NAME, div().css(component(toolbar, item))
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.data = new HashMap<>();
        if (type != null) {
            css(type.modifier());
        }
    }

    // ------------------------------------------------------ builder

    public ToolbarItem overflow() {
        return css(modifier(overflowContainer));
    }

    @Override
    public <T> ToolbarItem store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public ToolbarItem that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String identifier() {
        return identifier;
    }

    @Override
    public boolean has(String key) {
        return data.containsKey(key);
    }

    @SuppressWarnings("unchecked")
    public <T> T get(String key) {
        if (data.containsKey(key)) {
            return (T) data.get(key);
        }
        return null;
    }
}
