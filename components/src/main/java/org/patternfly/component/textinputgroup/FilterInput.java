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
package org.patternfly.component.textinputgroup;

import java.util.ArrayList;
import java.util.List;
import java.util.function.BiConsumer;

import org.patternfly.component.ComponentType;
import org.patternfly.component.label.Label;
import org.patternfly.component.label.LabelGroup;

import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Key.Enter;
import static org.patternfly.component.label.Label.label;

/**
 * A filter input is a special {@linkplain SearchInput search input} that adds a
 * {@linkplain org.patternfly.component.label.LabelGroup label group}.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/text-input-group#with-filters">https://www.patternfly.org/components/text-input-group#with-filters</a>
 */
public class FilterInput extends BaseSearchInput<FilterInput> {

    // ------------------------------------------------------ factory

    public static FilterInput filterInput(String id) {
        return new FilterInput(id);
    }

    public static FilterInput filterInput(String id, String value) {
        return new FilterInput(id).value(value);
    }

    // ------------------------------------------------------ instance

    private final List<BiConsumer<FilterInput, Label>> onAdd;
    private final List<BiConsumer<FilterInput, Label>> onRemove;

    FilterInput(String id) {
        super(ComponentType.FilterInput, id);
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();
        this.defaultOnClear = (event, fi) -> {
            fi.value("");
            labelGroup.clear();
        };
        this.visibility = (si, value) -> !value.isEmpty() || !labelGroup.isEmpty();

        addLabelGroup(LabelGroup.labelGroup()
                .onAdd((__, label) -> {
                    hideOrShowClear(value());
                    setVisible(labelGroup, true);
                    onAdd.forEach(h -> h.accept(this, label));
                })
                .onRemove((__, label) -> {
                    hideOrShowClear(value());
                    setVisible(labelGroup, !labelGroup.isEmpty());
                    onRemove.forEach(h -> h.accept(this, label));
                }));
        setVisible(labelGroup, false);
        onKeyup((e, tig, value) -> {
            if (Enter.match(e) && !value.isEmpty()) {
                labelGroup.addItem(label(value).outline().closable());
                value("");
            }
        });
    }

    // ------------------------------------------------------ builder

    @Override
    public FilterInput that() {
        return this;
    }

    // ------------------------------------------------------ events

    public FilterInput onAdd(BiConsumer<FilterInput, Label> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    public FilterInput onRemove(BiConsumer<FilterInput, Label> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }
}
