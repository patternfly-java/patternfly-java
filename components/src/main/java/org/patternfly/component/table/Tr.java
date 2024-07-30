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
package org.patternfly.component.table;

import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Elements;
import org.patternfly.component.HasItems;
import org.patternfly.component.WithIdentifier;
import org.patternfly.core.Aria;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLTableRowElement;

import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.Key.Enter;
import static org.jboss.elemento.Key.Spacebar;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.selected;
import static org.patternfly.style.Classes.table;
import static org.patternfly.style.Classes.tr;

public class Tr extends TableSubComponent<HTMLTableRowElement, Tr> implements
        ComponentContext<HTMLTableRowElement, Tr>,
        HasItems<HTMLTableRowElement, Tr, Cell<?>>,
        WithIdentifier<HTMLTableRowElement, Tr> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Tr tr(String identifier) {
        return new Tr(identifier);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tr";
    private final String identifier;
    private final Map<String, Cell<?>> items;
    private final Map<String, Object> data;
    private HandlerRegistration clickHandler;
    private HandlerRegistration keyHandler;

    Tr(String identifier) {
        super(SUB_COMPONENT_NAME, Elements.tr().css(component(table, tr))
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.items = new LinkedHashMap<>();
        this.data = new HashMap<>();
    }

    // ------------------------------------------------------ add

    @Override
    public Tr add(Cell<?> item) {
        items.put(item.identifier(), item);
        return add(item.element());
    }

    // ------------------------------------------------------ builder

    public Tr clickable() {
        return clickable(true);
    }

    public Tr clickable(boolean clickable) {
        if (clickable) {
            element().tabIndex = 0;
            classList().add(modifier(Classes.clickable));
            clickHandler = bind(element(), click, e -> {
                // Lenient, because the event might bubble up from an action in a <td>
                // If that action had removed the <tr>, the lookup would fail.
                Table table = lookupComponent(true);
                if (table != null) {
                    table.select(this);
                }
            });
            keyHandler = bind(element(), keydown, e -> {
                if (Enter.match(e) || Spacebar.match(e)) {
                    e.preventDefault();
                    Table table = lookupComponent();
                    table.select(this);
                }
            });
        } else {
            element().tabIndex = -1;
            classList().remove(modifier(Classes.clickable));
            if (clickHandler != null) {
                clickHandler.removeHandler();
            }
            if (keyHandler != null) {
                keyHandler.removeHandler();
            }
        }
        return this;
    }

    @Override
    public <T> Tr store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public Tr that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Iterator<Cell<?>> iterator() {
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
        removeChildrenFrom(element());
        items.clear();
    }

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

    // ------------------------------------------------------ internal

    void markSelected() {
        classList().add(modifier(selected));
        aria(Aria.label, "Row selected");
    }

    void clearSelection() {
        classList().remove(modifier(selected));
        element().removeAttribute(Aria.label);
    }
}
