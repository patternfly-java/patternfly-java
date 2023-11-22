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

import java.util.AbstractList;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collector;
import java.util.stream.Stream;

import org.patternfly.handler.SelectHandler;

import static java.lang.Math.min;
import static java.util.Collections.emptyList;
import static java.util.function.Function.identity;
import static java.util.stream.Collectors.toList;
import static java.util.stream.Collectors.toMap;

/**
 * Holds items and state for components like data lists and tables. Modifications of items and state are reflected in the bound
 * displays.
 */
public class DataProvider<T> {

    private final Function<T, String> identifier;
    private final PageInfo pageInfo;
    private final SelectionInfo<T> selectionInfo;
    private final Map<String, T> allItems;
    private final Map<String, Predicate<T>> filters;
    private final List<Display<T>> displays;
    private final List<SelectHandler<T>> selectHandler;
    private SortInfo<T> sortInfo;
    private Map<String, T> filteredItems;
    private Map<String, T> visibleItems;

    public DataProvider(Function<T, String> identifier) {
        this(identifier, PageInfo.DEFAULT_PAGE_SIZE);
    }

    public DataProvider(Function<T, String> identifier, int pageSize) {
        this.identifier = identifier;
        this.pageInfo = new PageInfo(pageSize);
        this.selectionInfo = new SelectionInfo<>(identifier);
        this.sortInfo = new SortInfo<>();
        this.allItems = new LinkedHashMap<>();
        this.filteredItems = new LinkedHashMap<>();
        this.visibleItems = new LinkedHashMap<>();
        this.filters = new HashMap<>();
        this.selectHandler = new ArrayList<>();
        this.displays = new ArrayList<>();
        reset();
    }

    // ------------------------------------------------------ items

    /** Replaces the items, resets the paging and selection and applies the current filter and sort order. */
    public void update(T[] items) {
        reset();
        for (T item : items) {
            allItems.put(getId(item), item);
        }
        internalUpdate();
    }

    /** Replaces the items, resets the paging and selection and applies the current filter and sort order. */
    public void update(Iterable<T> items) {
        reset();
        for (T item : items) {
            allItems.put(getId(item), item);
        }
        internalUpdate();
    }

    public boolean contains(T item) {
        return allItems.containsKey(identifier.apply(item));
    }

    public boolean isVisible(T item) {
        return visibleItems.containsKey(identifier.apply(item));
    }

    public String getId(T item) {
        return identifier.apply(item);
    }

    public T getItem(String id) {
        return allItems.get(id);
    }

    public Function<T, String> getIdentifier() {
        return identifier;
    }

    public Iterable<T> getAllItems() {
        return allItems.values();
    }

    public Iterable<T> getFilteredItems() {
        return filteredItems.values();
    }

    public Iterable<T> getVisibleItems() {
        return visibleItems.values();
    }

    // ------------------------------------------------------ selection

    public void onSelect(SelectHandler<T> selectHandler) {
        this.selectHandler.add(selectHandler);
    }

    /** Selects all items if {@code multiSelect == true}. Does not fire selection events. */
    public void selectAll() {
        selectionInfo.reset();
        filteredItems.forEach((id, item) -> selectInternal(id, item, true));
        updateSelection();
    }

    /** Selects all visible items if {@code multiSelect == true}. Does not fire selection events. */
    public void selectVisible() {
        selectionInfo.reset();
        visibleItems.forEach((id, item) -> selectInternal(id, item, true));
        updateSelection();
    }

    /** Clears the selection for all items. */
    public void clearAllSelection() {
        if (selectionInfo.hasSelection()) {
            selectionInfo.reset();
            filteredItems.forEach((id, item) -> selectInternal(id, item, false));
            updateSelection();
        }
    }

    /** Clears the selection for all visible items. */
    public void clearVisibleSelection() {
        if (selectionInfo.hasSelection()) {
            selectionInfo.reset();
            visibleItems.forEach((id, item) -> selectInternal(id, item, false));
            updateSelection();
        }
    }

    /** (De)selects the specified item and fires a selection event if {@code select == true}. */
    public void select(T item, boolean select) {
        selectInternal(getId(item), item, select);
        if (select) {
            fireSelection(item);
        }
        updateSelection();
    }

    public SelectionInfo<T> getSelectionInfo() {
        return selectionInfo;
    }

    private void selectInternal(String id, T item, boolean select) {
        if (select) {
            selectionInfo.add(id, item);
        } else {
            selectionInfo.remove(id);
        }
    }

    private void fireSelection(T item) {
        for (SelectHandler<T> handler : selectHandler) {
            handler.onSelect(item, true);
        }
    }

    private void updateSelection() {
        for (Display<T> display : displays) {
            display.updateSelection(selectionInfo);
        }
    }

    // ------------------------------------------------------ filter

    public void addFilter(String id, Predicate<T> filter) {
        filters.put(id, filter);
        internalUpdate();
    }

    public void removeFilter(String id) {
        if (filters.containsKey(id)) {
            filters.remove(id);
            internalUpdate();
        }
    }

    public void clearFilters() {
        if (!filters.isEmpty()) {
            filters.clear();
            internalUpdate();
        }
    }

    public boolean hasFilters() {
        return !filters.isEmpty();
    }

    // ------------------------------------------------------ sort

    public void sort(SortInfo<T> sortInfo) {
        this.sortInfo = sortInfo;
        internalUpdate();
    }

    // ------------------------------------------------------ paging

    public void setPageSize(int pageSize) {
        int oldPageSize = pageInfo.getPageSize();
        pageInfo.setPageSize(pageSize);
        if (oldPageSize != pageInfo.getPageSize()) {
            internalUpdate();
        }
    }

    public void gotoFirstPage() {
        gotoPage(0);
    }

    public void gotoPreviousPage() {
        gotoPage(pageInfo.getPage() - 1);
    }

    public void gotoNextPage() {
        gotoPage(pageInfo.getPage() + 1);
    }

    public void gotoLastPage() {
        gotoPage(pageInfo.getPages() - 1);
    }

    public void gotoPage(int page) {
        int oldPage = pageInfo.getPage();
        pageInfo.setPage(page);
        if (oldPage != pageInfo.getPage()) {
            internalUpdate();
        }
    }

    private List<T> paged(List<T> values) {
        List<List<T>> pages = partition(values, pageInfo.getPageSize());
        return pages.get(min(pageInfo.getPage(), pages.size() - 1));
    }

    private List<List<T>> partition(List<T> list, int size) {
        if (list != null) {
            if (size > 0) {
                return new Partition<>(list, size);
            }
        }
        return emptyList();
    }

    // ------------------------------------------------------ displays

    public void bindDisplay(Display<T> display) {
        displays.add(display);
    }

    // ------------------------------------------------------ internal state

    private void reset() {
        allItems.clear();
        filters.clear();
        pageInfo.reset();
        selectionInfo.reset();
        sortInfo.reset();
    }

    private void internalUpdate() {
        // set items
        Stream<T> stream = allItems.values().stream();
        if (!filters.isEmpty()) {
            Predicate<T> predicate = null;
            for (Predicate<T> p : filters.values()) {
                if (predicate == null) {
                    predicate = p;
                } else {
                    predicate = predicate.and(p);
                }
            }
            stream = stream.filter(predicate);
        }
        if (sortInfo.getComparator() != null) {
            stream = stream.sorted(sortInfo.getComparator());
        }
        List<T> values = stream.collect(toList());
        if (values.size() > pageInfo.getPageSize()) {
            filteredItems = values.stream().collect(toLinkedMap(identifier, identity()));
            values = paged(values);
            visibleItems = values.stream().collect(toLinkedMap(identifier, identity()));
        } else {
            filteredItems = visibleItems = values.stream().collect(toLinkedMap(identifier, identity()));
        }
        pageInfo.setTotal(filteredItems.size()); // total first!
        pageInfo.setVisible(visibleItems.size());

        // notify displays
        for (Display<T> display : displays) {
            display.showItems(visibleItems.values(), pageInfo);
            display.updateSelection(selectionInfo);
            display.updateSortInfo(sortInfo);
        }
    }

    // ------------------------------------------------------ inner classes

    private static class Partition<T> extends AbstractList<List<T>> {

        private static int divide(int p, int q) {
            if (q == 0) {
                throw new ArithmeticException("/ by zero");
            }

            int div = p / q;
            int rem = p - q * div; // equal to p % q
            if (rem == 0) {
                return div;
            }

            int signum = 1 | ((p ^ q) >> (Integer.SIZE - 1));
            boolean increment = signum > 0;
            return increment ? div + signum : div;
        }

        final List<T> list;
        final int size;

        Partition(List<T> list, int size) {
            this.list = list;
            this.size = size;
        }

        @Override
        public List<T> get(int index) {
            checkElementIndex(index, size());
            int start = index * size;
            int end = Math.min(start + size, list.size());
            return list.subList(start, end);
        }

        @Override
        public int size() {
            return divide(list.size(), size);
        }

        @Override
        public boolean isEmpty() {
            return list.isEmpty();
        }

        private void checkElementIndex(int index, int size) {
            if (index < 0) {
                throw new IndexOutOfBoundsException("Index " + index + " must not be negative");
            } else if (index >= size) {
                throw new IndexOutOfBoundsException("Index (" + index + ") must be less than size (" + size + ")");
            }
        }
    }

    private Collector<T, ?, Map<String, T>> toLinkedMap(Function<? super T, ? extends String> keyMapper,
            Function<? super T, ? extends T> valueMapper) {
        return toMap(keyMapper, valueMapper, (u, v) -> {
            throw new IllegalStateException("Duplicate key " + u); // NON-NLS
        }, LinkedHashMap::new);
    }
}
