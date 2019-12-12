/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.patternfly.client.dataprovider;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

/** Holds the selected items in a {@link DataProvider}. */
public class SelectionInfo<T> {

    private final Function<T, String> identifier;
    private final Map<String, T> selection; // contains only selected items

    SelectionInfo(Function<T, String> identifier) {
        this(identifier, new HashMap<>());
    }

    SelectionInfo(Function<T, String> identifier, Map<String, T> selection) {
        this.identifier = identifier;
        this.selection = selection;
    }

    void reset() {
        selection.clear();
    }

    void add(String id, T item) {
        selection.put(id, item);
    }

    void remove(String id) {
        selection.remove(id);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof SelectionInfo)) {
            return false;
        }

        SelectionInfo<?> other = (SelectionInfo<?>) o;
        return selection.equals(other.selection);
    }

    @Override
    public int hashCode() {
        return selection.hashCode();
    }

    @Override
    public String toString() {
        return "SelectionInfo(" + getSelection() + ')';
    }

    public List<T> getSelection() {
        return new ArrayList<>(selection.values());
    }

    public boolean hasSelection() {
        return !selection.isEmpty();
    }

    public boolean isSelected(T item) {
        return selection.containsKey(identifier.apply(item));
    }

    public int getSelectionCount() {
        return selection.size();
    }
}
