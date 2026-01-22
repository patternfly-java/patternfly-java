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
package org.patternfly.component.menu;

import java.util.List;
import java.util.Objects;

import org.jboss.elemento.TypedBuilder;
import org.patternfly.component.ComponentType;
import org.patternfly.popper.TriggerAction;

import elemental2.dom.HTMLElement;

import static java.util.Collections.emptyList;
import static java.util.stream.Collectors.toList;
import static org.patternfly.component.SelectionMode.multi;

/**
 * Represents an abstract implementation of a menu-based toggle component that supports multi-selection. This class serves as a
 * base for creating specialized multi-menu toggle components, providing functionality for managing selected menu items and
 * updating the toggle display.
 *
 * @param <B> the type of the builder for this component
 */
abstract class MultiMenuToggleMenu<B extends TypedBuilder<HTMLElement, B>> extends MenuToggleMenu<B> {

    // ------------------------------------------------------ instance

    MultiMenuToggleMenu(ComponentType componentType, MenuToggle menuToggle, TriggerAction triggerAction) {
        super(componentType, menuToggle, triggerAction);
    }

    abstract void updateMenuToggle(List<MenuItem> items);

    // ------------------------------------------------------ add

    @Override
    public B add(Menu menu) {
        super.add(menu);
        if (menu.selectionMode == multi) {
            menu.onMultiSelect((e, m, items) -> updateMenuToggle(items));
        }
        return that();
    }

    // ------------------------------------------------------ api

    public void clear() {
        clear(true);
    }

    public void clear(boolean fireEvent) {
        menu.unselectAllItems();
        updateMenuToggle(emptyList());
        if (fireEvent) {
            menu.fireMultiSelection();
        }
    }

    public void selectIdentifiers(List<String> identifiers) {
        selectItems(identifiers.stream()
                .map(identifier -> menu().findItem(identifier))
                .filter(Objects::nonNull)
                .collect(toList()), true);
    }

    public void selectIdentifiers(List<String> identifiers, boolean fireEvent) {
        selectItems(identifiers.stream()
                .map(identifier -> menu().findItem(identifier))
                .filter(Objects::nonNull)
                .collect(toList()), fireEvent);
    }

    public void selectItems(List<MenuItem> items) {
        selectItems(items, true);
    }

    public void selectItems(List<MenuItem> items, boolean fireEvent) {
        if (menu != null && menuToggle != null && !items.isEmpty()) {
            for (MenuItem item : items) {
                menu.select(item, true, false);
            }
            if (fireEvent) {
                menu.fireMultiSelection();
            }
        }
        updateMenuToggle(items);
    }
}
