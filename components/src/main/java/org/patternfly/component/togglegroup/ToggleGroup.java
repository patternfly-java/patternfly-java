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

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.SelectionMode;
import org.patternfly.core.Aria;
import org.patternfly.handler.MultiSelectHandler;
import org.patternfly.handler.SelectHandler;
import org.patternfly.style.Modifiers.Compact;
import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;

import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.div;
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
        Compact<HTMLElement, ToggleGroup>, Disabled<HTMLElement, ToggleGroup> {

    // ------------------------------------------------------ factory

    public static ToggleGroup toggleGroup(SelectionMode selectionMode) {
        return new ToggleGroup(selectionMode);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(ToggleGroup.class.getName());
    final SelectionMode selectionMode;
    private final Map<String, ToggleGroupItem> items;
    private final Map<String, Boolean> disabledSnapshot;
    private boolean disabled;
    private SelectHandler<ToggleGroupItem> selectHandler;
    private MultiSelectHandler<ToggleGroup, ToggleGroupItem> multiSelectHandler;

    ToggleGroup(SelectionMode selectionMode) {
        super(ComponentType.ToggleGroup, div().css(component(toggleGroup)).attr(role, group).element());
        this.items = new HashMap<>();
        this.disabledSnapshot = new HashMap<>();
        if (selectionMode == SelectionMode.click) {
            logger.warn("Selection mode '%s' is not supported for %e. Fall back to '%s'",
                    SelectionMode.click.name(), element(), SelectionMode.single.name());
            this.selectionMode = SelectionMode.single;
        } else {
            this.selectionMode = selectionMode;
        }
        storeComponent();
    }

    // ------------------------------------------------------ add

    public <T> ToggleGroup addItems(Iterable<T> items, Function<T, ToggleGroupItem> display) {
        for (T item : items) {
            ToggleGroupItem tgi = display.apply(item);
            addItem(tgi);
        }
        return this;
    }

    public ToggleGroup addItem(ToggleGroupItem item) {
        return add(item);
    }

    // override to assure internal wiring
    public ToggleGroup add(ToggleGroupItem item) {
        items.put(item.id, item);
        add(item.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public ToggleGroup disabled(boolean disabled) {
        if (disabled) {
            for (ToggleGroupItem item : items.values()) {
                // save state
                disabledSnapshot.put(item.id, item.isDisabled());
                // disable all items
                item.disabled(true);
            }
        } else {
            // enable all items, but restore previous state
            for (ToggleGroupItem item : items.values()) {
                boolean previouslyDisabled = disabledSnapshot.getOrDefault(item.id, false);
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
        this.selectHandler = selectHandler;
        return this;
    }

    public ToggleGroup onMultiSelect(MultiSelectHandler<ToggleGroup, ToggleGroupItem> selectHandler) {
        this.multiSelectHandler = selectHandler;
        return this;
    }

    // ------------------------------------------------------ api


    @Override
    public boolean isDisabled() {
        return disabled;
    }

    public void select(String itemId) {
        select(items.get(itemId), true);
    }

    public void select(String itemId, boolean fireEvent) {
        select(items.get(itemId), fireEvent);
    }

    public void select(ToggleGroupItem item) {
        select(item, true, true);
    }

    public void select(ToggleGroupItem item, boolean fireEvent) {
        select(item, true, fireEvent);
    }

    public void select(ToggleGroupItem item, boolean selected, boolean fireEvent) {
        if (item != null) {
            if (selectionMode == SelectionMode.single) {
                unselectAllItems();
            }
            item.markSelected(selected);
            if (fireEvent) {
                if (selectHandler != null) {
                    selectHandler.onSelect(new Event(""), item, selected);
                }
                if (multiSelectHandler != null) {
                    List<ToggleGroupItem> selection = items.values()
                            .stream()
                            .filter(ToggleGroupItem::isSelected)
                            .collect(toList());
                    multiSelectHandler.onSelect(new Event(""), this, selection);
                }
            }
        }
    }

    // ------------------------------------------------------ internal

    private void unselectAllItems() {
        for (ToggleGroupItem item : items.values()) {
            item.markSelected(false);
        }
    }
}
