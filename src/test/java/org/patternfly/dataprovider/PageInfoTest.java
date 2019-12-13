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
package org.patternfly.dataprovider;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PageInfoTest {

    private static final int PAGE_SIZE = 10;

    @Test
    void empty() {
        PageInfo pageInfo = new PageInfo(PAGE_SIZE);
        assertEmpty(pageInfo);
    }

    @Test
    void reset() {
        PageInfo pageInfo = new PageInfo(PAGE_SIZE, 1, 2, 3);
        pageInfo.reset();
        assertEmpty(pageInfo);
    }

    @Test
    void setPageSize() {
        PageInfo pageInfo = new PageInfo(PAGE_SIZE, 0, 50, 100);
        assertEquals(10, pageInfo.getPages());

        pageInfo.setPageSize(15);
        assertEquals(7, pageInfo.getPages());

        pageInfo.setPageSize(20);
        assertEquals(5, pageInfo.getPages());
    }

    @Test
    void setIllegalPageSize() {
        PageInfo pageInfo = new PageInfo(PAGE_SIZE);
        pageInfo.setPageSize(-1);
        assertEquals(1, pageInfo.getPageSize());
    }

    @Test
    void setPage() {
        PageInfo pageInfo = new PageInfo(PAGE_SIZE, 0, 50, 100);
        pageInfo.setPage(1);
        assertEquals(1, pageInfo.getPage());
        assertEquals(11, pageInfo.getFrom());
        assertEquals(20, pageInfo.getTo());
    }

    @Test
    void setIllegalPage() {
        PageInfo pageInfo = new PageInfo(PAGE_SIZE, 0, 50, 100);
        pageInfo.setPage(-1);
        assertEquals(0, pageInfo.getPage());
        pageInfo.setPage(10);
        assertEquals(9, pageInfo.getPage());
    }

    @Test
    void setVisible() {
        PageInfo pageInfo = new PageInfo(PAGE_SIZE, 0, 50, 100);
        pageInfo.setVisible(66);
        assertEquals(66, pageInfo.getVisible());
    }

    @Test
    void setIllegalVisible() {
        PageInfo pageInfo = new PageInfo(PAGE_SIZE, 0, 50, 100);
        pageInfo.setVisible(101);
        assertEquals(100, pageInfo.getVisible());
    }

    private void assertEmpty(PageInfo pageInfo) {
        assertEquals(PAGE_SIZE, pageInfo.getPageSize());
        assertEquals(0, pageInfo.getPage());
        assertEquals(1, pageInfo.getPages());
        assertEquals(0, pageInfo.getVisible());
        assertEquals(0, pageInfo.getTotal());
        assertEquals(0, pageInfo.getFrom());
        assertEquals(0, pageInfo.getTo());
    }
}
