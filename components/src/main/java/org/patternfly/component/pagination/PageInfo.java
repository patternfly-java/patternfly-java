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
package org.patternfly.component.pagination;

import static java.lang.Math.max;
import static java.lang.Math.min;

/** Immutable pagination state: current page (1-based), page size, and total item count. */
public record PageInfo(int page, int pageSize, int total) {

    public static final int UNKNOWN = -1;
    public static final int FIRST_PAGE = 1;
    public static final int DEFAULT_PAGE_SIZE = 20;

    // ------------------------------------------------------ factory

    public static PageInfo noItems() {
        return new PageInfo(0, DEFAULT_PAGE_SIZE, 0);
    }

    public static PageInfo indeterminate() {
        return new PageInfo(FIRST_PAGE, DEFAULT_PAGE_SIZE, UNKNOWN);
    }

    public static PageInfo indeterminate(int pageSize) {
        return new PageInfo(FIRST_PAGE, pageSize, UNKNOWN);
    }

    public static PageInfo of(int total) {
        return new PageInfo(FIRST_PAGE, DEFAULT_PAGE_SIZE, total);
    }

    public static PageInfo of(int pageSize, int total) {
        return new PageInfo(FIRST_PAGE, pageSize, total);
    }

    // ------------------------------------------------------ instance

    public PageInfo {
        pageSize = max(FIRST_PAGE, pageSize);
        total = max(UNKNOWN, total);
        page = clampPage(page, pageSize, total);
    }

    @Override
    public String toString() {
        return "PageInfo(page=" + page + ", pageSize=" + pageSize + ", total=" + (isIndeterminate() ? "UNKNOWN" : total) + ')';
    }

    // ------------------------------------------------------ read

    public int pages() {
        if (isIndeterminate()) {
            return UNKNOWN;
        }
        if (total == 0) {
            return 0;
        }
        int pages = total / pageSize;
        if (total % pageSize != 0) {
            pages++;
        }
        return pages;
    }

    public int from() {
        if (total == 0) {
            return 0;
        }
        return (page - 1) * pageSize + 1;
    }

    public int to() {
        if (total == 0) {
            return 0;
        }
        if (isIndeterminate()) {
            return from() + pageSize - 1;
        }
        return min(total, from() + pageSize - 1);
    }

    public boolean isIndeterminate() {
        return total == UNKNOWN;
    }

    public boolean isFirstPage() {
        return page == FIRST_PAGE;
    }

    public boolean isLastPage() {
        if (isIndeterminate()) {
            return false;
        }
        return page == pages();
    }

    public boolean hasPreviousPage() {
        return page > 1;
    }

    public boolean hasNextPage() {
        if (isIndeterminate()) {
            return true;
        }
        return page < pages();
    }

    // ------------------------------------------------------ modify

    public PageInfo firstPage() {
        return withPage(FIRST_PAGE);
    }

    public PageInfo previousPage() {
        return withPage(page - 1);
    }

    public PageInfo nextPage() {
        return withPage(page + 1);
    }

    public PageInfo lastPage() {
        if (isIndeterminate()) {
            return withPage(page + 1);
        } else {
            return withPage(pages());
        }
    }

    public PageInfo withPage(int page) {
        return new PageInfo(page, pageSize, total);
    }

    public PageInfo withPageSize(int pageSize) {
        return new PageInfo(page, pageSize, total);
    }

    public PageInfo withTotal(int total) {
        return new PageInfo(page, pageSize, total);
    }

    // ------------------------------------------------------ internal

    private int clampPage(int page, int pageSize, int total) {
        if (total == 0) {
            return 0;
        }
        if (total == UNKNOWN) {
            return max(1, page);
        }
        int maxPages = max(1, (total + pageSize - 1) / pageSize);
        return max(1, min(page, maxPages));
    }
}
