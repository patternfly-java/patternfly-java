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

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class PageInfoTest {

    private static final int PAGE_SIZE = 10;

    // ------------------------------------------------------ factory

    @Test
    void noItems() {
        PageInfo pageInfo = PageInfo.noItems();
        assertEquals(PageInfo.DEFAULT_PAGE_SIZE, pageInfo.pageSize());
        assertEquals(0, pageInfo.page());
        assertEquals(0, pageInfo.total());
        assertEquals(0, pageInfo.pages());
        assertEquals(0, pageInfo.from());
        assertEquals(0, pageInfo.to());
        assertFalse(pageInfo.isIndeterminate());
    }

    @Test
    void noItemsMatchesOfZero() {
        PageInfo noItems = PageInfo.noItems();
        PageInfo ofZero = PageInfo.of(0);
        assertEquals(noItems, ofZero);
    }

    @Test
    void indeterminate() {
        PageInfo pageInfo = PageInfo.indeterminate(PAGE_SIZE);
        assertEquals(PAGE_SIZE, pageInfo.pageSize());
        assertEquals(1, pageInfo.page());
        assertTrue(pageInfo.isIndeterminate());
        assertEquals(PageInfo.UNKNOWN, pageInfo.total());
        assertEquals(PageInfo.UNKNOWN, pageInfo.pages());
        assertEquals(1, pageInfo.from());
        assertEquals(10, pageInfo.to());
    }

    @Test
    void indeterminateDefaultPageSize() {
        PageInfo pageInfo = PageInfo.indeterminate();
        assertEquals(PageInfo.DEFAULT_PAGE_SIZE, pageInfo.pageSize());
        assertEquals(1, pageInfo.page());
        assertTrue(pageInfo.isIndeterminate());
    }

    @Test
    void of() {
        PageInfo pageInfo = PageInfo.of(100);
        assertEquals(PageInfo.DEFAULT_PAGE_SIZE, pageInfo.pageSize());
        assertEquals(1, pageInfo.page());
        assertEquals(100, pageInfo.total());
        assertFalse(pageInfo.isIndeterminate());
    }

    @Test
    void ofWithPageSize() {
        PageInfo pageInfo = PageInfo.of(PAGE_SIZE, 100);
        assertEquals(PAGE_SIZE, pageInfo.pageSize());
        assertEquals(1, pageInfo.page());
        assertEquals(100, pageInfo.total());
    }

    // ------------------------------------------------------ computed

    @Test
    void pages() {
        assertEquals(10, PageInfo.of(PAGE_SIZE, 100).pages());
        assertEquals(7, PageInfo.of(15, 100).pages());
        assertEquals(5, PageInfo.of(20, 100).pages());
        assertEquals(0, PageInfo.of(PAGE_SIZE, 0).pages());
    }

    @Test
    void fromTo() {
        PageInfo pageInfo = PageInfo.of(PAGE_SIZE, 100);
        assertEquals(1, pageInfo.from());
        assertEquals(10, pageInfo.to());

        PageInfo page2 = pageInfo.withPage(2);
        assertEquals(11, page2.from());
        assertEquals(20, page2.to());

        PageInfo lastPage = pageInfo.withPage(10);
        assertEquals(91, lastPage.from());
        assertEquals(100, lastPage.to());
    }

    @Test
    void fromToIndeterminate() {
        PageInfo pageInfo = PageInfo.indeterminate(PAGE_SIZE);
        assertEquals(1, pageInfo.from());
        assertEquals(10, pageInfo.to());

        PageInfo page3 = pageInfo.withPage(3);
        assertEquals(21, page3.from());
        assertEquals(30, page3.to());
    }

    // ------------------------------------------------------ withPage

    @Test
    void withPage() {
        PageInfo pageInfo = PageInfo.of(PAGE_SIZE, 100).withPage(2);
        assertEquals(2, pageInfo.page());
        assertEquals(11, pageInfo.from());
        assertEquals(20, pageInfo.to());
    }

    @Test
    void withPageClampLow() {
        PageInfo pageInfo = PageInfo.of(PAGE_SIZE, 100).withPage(-1);
        assertEquals(1, pageInfo.page());
    }

    @Test
    void withPageClampHigh() {
        PageInfo pageInfo = PageInfo.of(PAGE_SIZE, 100).withPage(11);
        assertEquals(10, pageInfo.page());
    }

    @Test
    void withPageIndeterminate() {
        PageInfo pageInfo = PageInfo.indeterminate(PAGE_SIZE).withPage(42);
        assertEquals(42, pageInfo.page());
    }

    // ------------------------------------------------------ withPageSize

    @Test
    void withPageSize() {
        PageInfo pageInfo = PageInfo.of(PAGE_SIZE, 100).withPageSize(20);
        assertEquals(20, pageInfo.pageSize());
        assertEquals(5, pageInfo.pages());
    }

    @Test
    void withPageSizeClamp() {
        PageInfo pageInfo = PageInfo.of(PAGE_SIZE, 100).withPageSize(-1);
        assertEquals(1, pageInfo.pageSize());
    }

    @Test
    void withPageSizeReclampsPage() {
        PageInfo pageInfo = PageInfo.of(PAGE_SIZE, 100).withPage(10).withPageSize(20);
        assertEquals(5, pageInfo.page());
    }

    // ------------------------------------------------------ withTotal

    @Test
    void withTotal() {
        PageInfo pageInfo = PageInfo.indeterminate(PAGE_SIZE).withTotal(100);
        assertFalse(pageInfo.isIndeterminate());
        assertEquals(100, pageInfo.total());
        assertEquals(10, pageInfo.pages());
    }

    @Test
    void withTotalReclampsPage() {
        PageInfo pageInfo = PageInfo.of(PAGE_SIZE, 100).withPage(10).withTotal(50);
        assertEquals(5, pageInfo.page());
    }

    // ------------------------------------------------------ boolean properties

    @Test
    void isFirstPage() {
        assertTrue(PageInfo.of(PAGE_SIZE, 100).isFirstPage());
        assertFalse(PageInfo.of(PAGE_SIZE, 100).withPage(2).isFirstPage());
        assertTrue(PageInfo.indeterminate(PAGE_SIZE).isFirstPage());
    }

    @Test
    void isLastPage() {
        assertTrue(PageInfo.of(PAGE_SIZE, 100).withPage(10).isLastPage());
        assertFalse(PageInfo.of(PAGE_SIZE, 100).withPage(9).isLastPage());
        assertFalse(PageInfo.of(PAGE_SIZE, 100).isLastPage());
    }

    @Test
    void isLastPageIndeterminate() {
        assertFalse(PageInfo.indeterminate(PAGE_SIZE).isLastPage());
        assertFalse(PageInfo.indeterminate(PAGE_SIZE).withPage(42).isLastPage());
    }

    @Test
    void hasPreviousPage() {
        assertFalse(PageInfo.of(PAGE_SIZE, 100).hasPreviousPage());
        assertTrue(PageInfo.of(PAGE_SIZE, 100).withPage(2).hasPreviousPage());
        assertFalse(PageInfo.indeterminate(PAGE_SIZE).hasPreviousPage());
        assertTrue(PageInfo.indeterminate(PAGE_SIZE).withPage(5).hasPreviousPage());
    }

    @Test
    void hasNextPage() {
        assertTrue(PageInfo.of(PAGE_SIZE, 100).hasNextPage());
        assertTrue(PageInfo.of(PAGE_SIZE, 100).withPage(9).hasNextPage());
        assertFalse(PageInfo.of(PAGE_SIZE, 100).withPage(10).hasNextPage());
    }

    @Test
    void hasNextPageIndeterminate() {
        assertTrue(PageInfo.indeterminate(PAGE_SIZE).hasNextPage());
        assertTrue(PageInfo.indeterminate(PAGE_SIZE).withPage(42).hasNextPage());
    }
}
