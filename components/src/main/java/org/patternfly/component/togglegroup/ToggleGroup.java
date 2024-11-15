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
package org.patternfly.component.togglegroup;

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.component.SelectionMode;
import org.patternfly.core.Aria;
import org.patternfly.handler.MultiSelectHandler;
import org.patternfly.handler.SelectHandler;
import org.patternfly.style.Modifiers.Compact;
import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;

import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.component.SelectionMode.multi;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.group;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.toggleGroup;

/**
 * A toggle group is a group of controls that can be used to quickly switch between actions or states.
 *
 * @see <a href= "https://www.patternfly.org/components/toggle-group">https://www.patternfly.org/components/toggle-group</a>
 */
public class ToggleGroup extends BaseComponent<HTMLElement, ToggleGroup> implements
        Compact<HTMLElement, ToggleGroup>,
        Disabled<HTMLElement, ToggleGroup>,
        HasItems<HTMLElement, ToggleGroup, ToggleGroupItem> {

    // ------------------------------------------------------ factory

    public static ToggleGroup toggleGroup(SelectionMode selectionMode) {
        return new ToggleGroup(selectionMode);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(ToggleGroup.class.getName());
    private static final Set<SelectionMode> SUPPORTED_SELECTION_MODES = EnumSet.of(single, multi);
    final SelectionMode selectionMode;
    private final Map<String, ToggleGroupItem> items;
    private final Map<String, Boolean> disabledSnapshot;
    private final List<SelectHandler<ToggleGroupItem>> selectHandler;
    private final List<MultiSelectHandler<ToggleGroup, ToggleGroupItem>> multiSelectHandler;
    private boolean disabled;

    ToggleGroup(SelectionMode selectionMode) {
        super(ComponentType.ToggleGroup, div().css(component(toggleGroup)).attr(role, group).element());
        this.items = new LinkedHashMap<>();
        this.disabledSnapshot = new HashMap<>();
        this.selectHandler = new ArrayList<>();
        this.multiSelectHandler = new ArrayList<>();

        if (!SUPPORTED_SELECTION_MODES.contains(selectionMode)) {
            logger.warn("Selection mode %s is not supported for %o. Supported modes are %s. Fall back to %s",
                    selectionMode.name(), element(), SUPPORTED_SELECTION_MODES.stream().map(Enum::name).collect(joining(", ")),
                    SelectionMode.single.name());
            this.selectionMode = SelectionMode.single;
        } else {
            this.selectionMode = selectionMode;
        }
        storeComponent();
    }

    // ------------------------------------------------------ add

    @Override
    public ToggleGroup add(ToggleGroupItem item) {
        items.put(item.identifier(), item);
        add(item.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public ToggleGroup disabled(boolean disabled) {
        if (disabled) {
            for (ToggleGroupItem item : items.values()) {
                // save state
                disabledSnapshot.put(item.identifier(), item.isDisabled());
                // disable all items
                item.disabled(true);
            }
        } else {
            // enable all items, but restore previous state
            for (ToggleGroupItem item : items.values()) {
                boolean previouslyDisabled = disabledSnapshot.getOrDefault(item.identifier(), false);
                if (!previouslyDisabled) {
                    item.disabled(false);
                }
            }
        }
        this.disabled = disabled;
        return this;
    }

    @Override
    public ToggleGroup that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public ToggleGroup ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public ToggleGroup onSingleSelect(SelectHandler<ToggleGroupItem> selectHandler) {
        this.selectHandler.add(selectHandler);
        return this;
    }

    public ToggleGroup onMultiSelect(MultiSelectHandler<ToggleGroup, ToggleGroupItem> selectHandler) {
        this.multiSelectHandler.add(selectHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public boolean isDisabled() {
        return disabled;
    }

    public void select(String identifier) {
        select(items.get(identifier), true, true);
    }

    public void select(String identifier, boolean selected) {
        select(items.get(identifier), selected, true);
    }

    public void select(String identifier, boolean selected, boolean fireEvent) {
        select(items.get(identifier), selected, fireEvent);
    }

    public void select(ToggleGroupItem item) {
        select(item, true, true);
    }

    public void select(ToggleGroupItem item, boolean selected) {
        select(item, selected, true);
    }

    public void select(ToggleGroupItem item, boolean selected, boolean fireEvent) {
        if (item != null) {
            if (selectionMode == SelectionMode.single) {
                unselectAllItems();
            }
            item.markSelected(selected);
            if (fireEvent) {
                selectHandler.forEach(sh -> sh.onSelect(new Event(""), item, selected));
                if (!multiSelectHandler.isEmpty()) {
                    List<ToggleGroupItem> selection = items.values()
                            .stream()
                            .filter(ToggleGroupItem::isSelected)
                            .collect(toList());
                    multiSelectHandler.forEach(msh -> msh.onSelect(new Event(""), this, selection));
                }
            }
        }
    }

    @Override
    public Iterator<ToggleGroupItem> iterator() {
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
    public ToggleGroupItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        items.clear();
    }

    // ------------------------------------------------------ internal

    private void unselectAllItems() {
        for (ToggleGroupItem item : items.values()) {
            item.markSelected(false);
        }
    }
}
