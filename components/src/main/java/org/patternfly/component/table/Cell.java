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

import org.jboss.elemento.TypedBuilder;
import org.patternfly.core.DataHolder;
import org.patternfly.style.Modifiers.Center;
import org.patternfly.style.Width;

import elemental2.dom.HTMLTableCellElement;

import static org.patternfly.style.TypedModifier.swap;

abstract class Cell<B extends TypedBuilder<HTMLTableCellElement, B>> extends TableSubComponent<HTMLTableCellElement, B>
        implements
        DataHolder<HTMLTableCellElement, B>, Center<HTMLTableCellElement, B> {

    private final Map<String, Object> data;

    Cell(String name, HTMLTableCellElement element) {
        super(name, element);
        this.data = new HashMap<>();
    }

    public B addText(TableText text) {
        return add(text);
    }

    public B colSpan(int columns) {
        element().colSpan = columns;
        return that();
    }

    public B width(Width width) {
        return swap(that(), element(), width, Width.values());
    }

    public B wrap(Wrap wrap) {
        return swap(that(), element(), wrap, Wrap.values());
    }

    @Override
    public <T> B store(String key, T value) {
        data.put(key, value);
        return that();
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
