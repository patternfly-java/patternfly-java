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
