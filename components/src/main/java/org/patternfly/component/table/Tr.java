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
import java.util.Map;
import java.util.function.Function;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLTableRowElement;

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

public class Tr extends TableSubComponent<HTMLTableRowElement, Tr> implements ComponentContext<HTMLTableRowElement, Tr> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Tr tr() {
        return new Tr(Id.unique(ComponentType.Table.id, "row"));
    }

    /**
     * Factory method to create a new instance of this component.
     */
    public static Tr tr(String key) {
        return new Tr(key);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tr";
    public final String key;
    private final Map<String, Object> data;
    private HandlerRegistration clickHandler;
    private HandlerRegistration keyHandler;

    Tr(String key) {
        super(SUB_COMPONENT_NAME, Elements.tr().css(component(table, tr))
                .data(Dataset.key, key)
                .element());
        this.key = key;
        this.data = new HashMap<>();
    }

    // ------------------------------------------------------ add

    public <T> Tr addHeaders(Iterable<T> items, Function<T, Th> display) {
        for (T item : items) {
            Th header = display.apply(item);
            addHeader(header);
        }
        return this;
    }

    public Tr addHeader(Th header) {
        return add(header);
    }

    public <T> Tr addData(Iterable<T> items, Function<T, Td> display) {
        for (T item : items) {
            Td data = display.apply(item);
            addData(data);
        }
        return this;
    }

    public Tr addData(Td data) {
        return add(data);
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
