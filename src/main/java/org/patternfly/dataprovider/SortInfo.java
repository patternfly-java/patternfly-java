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
package org.patternfly.dataprovider;

import java.util.Comparator;

/** Holds the current sort option in a {@link DataProvider}. */
public class SortInfo<T> {

    private static final String EMPTY = "empty-sort-info";

    private String id;
    private Comparator<T> comparator;
    private boolean ascending;

    SortInfo() {
        reset();
    }

    public SortInfo(String id, Comparator<T> comparator, boolean ascending) {
        this.id = id;
        this.comparator = comparator;
        this.ascending = ascending;
    }

    void reset() {
        this.id = EMPTY;
        this.comparator = null;
        this.ascending = true;
    }

    void apply(String id, Comparator<T> comparator, boolean ascending) {
        this.id = id;
        this.comparator = comparator;
        this.ascending = ascending;
    }

    public String getId() {
        return id;
    }

    public Comparator<T> getComparator() {
        return comparator;
    }

    public boolean isAscending() {
        return ascending;
    }

    public boolean isEmpty() {
        return EMPTY.equals(id);
    }
}
