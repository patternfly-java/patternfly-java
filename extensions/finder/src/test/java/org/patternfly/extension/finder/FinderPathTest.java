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
package org.patternfly.extension.finder;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class FinderPathTest {

    // ------------------------------------------------------ parse: empty / null

    @Test
    public void parseNull() {
        FinderPath path = FinderPath.parse(null);
        assertTrue(path.isEmpty());
        assertEquals(0, path.size());
    }

    @Test
    public void parseEmpty() {
        FinderPath path = FinderPath.parse("");
        assertTrue(path.isEmpty());
        assertEquals(0, path.size());
    }

    // ------------------------------------------------------ parse: single segment

    @Test
    public void parseSingleSegmentWithItem() {
        FinderPath path = FinderPath.parse("col1=item1");
        assertFalse(path.isEmpty());
        assertEquals(1, path.size());

        FinderSegment segment = path.iterator().next();
        assertEquals("col1", segment.columnId);
        assertEquals("item1", segment.itemId);
    }

    @Test
    public void parseSingleSegmentWithoutItem() {
        FinderPath path = FinderPath.parse("col1");
        assertFalse(path.isEmpty());
        assertEquals(1, path.size());

        FinderSegment segment = path.iterator().next();
        assertEquals("col1", segment.columnId);
        assertNull(segment.itemId);
    }

    // ------------------------------------------------------ parse: multiple segments

    @Test
    public void parseMultipleSegments() {
        FinderPath path = FinderPath.parse("col1=item1/col2=item2");
        assertEquals(2, path.size());

        List<FinderSegment> segments = toList(path);
        assertEquals("col1", segments.get(0).columnId);
        assertEquals("item1", segments.get(0).itemId);
        assertEquals("col2", segments.get(1).columnId);
        assertEquals("item2", segments.get(1).itemId);
    }

    @Test
    public void parseLastSegmentWithoutItem() {
        FinderPath path = FinderPath.parse("col1=item1/col2");
        assertEquals(2, path.size());

        List<FinderSegment> segments = toList(path);
        assertEquals("col1", segments.get(0).columnId);
        assertEquals("item1", segments.get(0).itemId);
        assertEquals("col2", segments.get(1).columnId);
        assertNull(segments.get(1).itemId);
    }

    @Test
    public void parseThreeSegments() {
        FinderPath path = FinderPath.parse("a=1/b=2/c=3");
        assertEquals(3, path.size());

        List<FinderSegment> segments = toList(path);
        assertEquals("a", segments.get(0).columnId);
        assertEquals("1", segments.get(0).itemId);
        assertEquals("b", segments.get(1).columnId);
        assertEquals("2", segments.get(1).itemId);
        assertEquals("c", segments.get(2).columnId);
        assertEquals("3", segments.get(2).itemId);
    }

    // ------------------------------------------------------ parse: edge cases

    @Test
    public void parseTrailingEquals() {
        FinderPath path = FinderPath.parse("col1=");
        assertTrue(path.isEmpty());
    }

    @Test
    public void parseLeadingEquals() {
        FinderPath path = FinderPath.parse("=item1");
        assertTrue(path.isEmpty());
    }

    @Test
    public void parseOnlyEquals() {
        FinderPath path = FinderPath.parse("=");
        assertTrue(path.isEmpty());
    }

    @Test
    public void parseEmptyPartsBetweenSlashes() {
        FinderPath path = FinderPath.parse("col1=item1//col2=item2");
        assertEquals(2, path.size());
    }

    @Test
    public void parseMultipleEqualsInSegment() {
        FinderPath path = FinderPath.parse("col1=item=extra");
        assertEquals(1, path.size());

        FinderSegment segment = path.iterator().next();
        assertEquals("col1", segment.columnId);
        assertEquals("item=extra", segment.itemId);
    }

    // ------------------------------------------------------ toString

    @Test
    public void toStringEmpty() {
        FinderPath path = FinderPath.parse(null);
        assertEquals("", path.toString());
    }

    @Test
    public void toStringSingleSegment() {
        FinderPath path = FinderPath.parse("col1=item1");
        assertEquals("col1=item1", path.toString());
    }

    @Test
    public void toStringSegmentWithoutItem() {
        FinderPath path = FinderPath.parse("col1");
        assertEquals("col1", path.toString());
    }

    @Test
    public void toStringMultipleSegments() {
        FinderPath path = FinderPath.parse("col1=item1/col2=item2");
        assertEquals("col1=item1/col2=item2", path.toString());
    }

    @Test
    public void toStringRoundTrip() {
        String input = "a=1/b=2/c";
        assertEquals(input, FinderPath.parse(input).toString());
    }

    // ------------------------------------------------------ findColumn

    @Test
    public void findColumnExisting() {
        FinderPath path = FinderPath.parse("col1=item1/col2=item2");
        FinderSegment segment = path.findColumn("col2");
        assertNotNull(segment);
        assertEquals("col2", segment.columnId);
        assertEquals("item2", segment.itemId);
    }

    @Test
    public void findColumnNonExisting() {
        FinderPath path = FinderPath.parse("col1=item1");
        assertNull(path.findColumn("missing"));
    }

    @Test
    public void findColumnInEmptyPath() {
        FinderPath path = FinderPath.parse(null);
        assertNull(path.findColumn("col1"));
    }

    // ------------------------------------------------------ findItem

    @Test
    public void findItemExisting() {
        FinderPath path = FinderPath.parse("col1=item1/col2=item2");
        FinderSegment segment = path.findItem("item1");
        assertNotNull(segment);
        assertEquals("col1", segment.columnId);
        assertEquals("item1", segment.itemId);
    }

    @Test
    public void findItemNonExisting() {
        FinderPath path = FinderPath.parse("col1=item1");
        assertNull(path.findItem("missing"));
    }

    @Test
    public void findItemInEmptyPath() {
        FinderPath path = FinderPath.parse(null);
        assertNull(path.findItem("item1"));
    }

    @Test
    public void findItemNullItemId() {
        FinderPath path = FinderPath.parse("col1");
        assertNull(path.findItem("col1"));
    }

    // ------------------------------------------------------ helper

    private List<FinderSegment> toList(FinderPath path) {
        List<FinderSegment> list = new ArrayList<>();
        path.iterator().forEachRemaining(list::add);
        return list;
    }
}
