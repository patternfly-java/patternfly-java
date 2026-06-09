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

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.function.Predicate;

import static java.util.stream.Collectors.joining;

/**
 * A lightweight finder path containing only string-based {@link FinderSegment segments}. Supports encoding to and parsing from
 * a string format ({@code col1=item1/col2=item2}). Use this type for URL routing and serialization.
 * <p>
 * For a path with live references to {@link FinderColumn} and {@link FinderItem}, use {@link ResolvedFinderPath}.
 */
public class FinderPath implements Iterable<FinderSegment> {

    // ------------------------------------------------------ factory

    /**
     * Parses a finder path string in the format {@code col1=item1/col2=item2/col3}. The last segment may omit the item
     * identifier to represent a column with no selected item.
     *
     * @param path the encoded finder path string
     * @return a new {@link FinderPath}, or an empty path for {@code null} or empty input
     */
    public static FinderPath parse(String path) {
        List<FinderSegment> segments = new LinkedList<>();
        if (path != null && !path.isEmpty()) {
            for (String part : path.split("/")) {
                int eq = part.indexOf('=');
                if (eq > 0 && eq < part.length() - 1) {
                    segments.add(new FinderSegment(part.substring(0, eq), part.substring(eq + 1)));
                } else if (!part.isEmpty() && eq == -1) {
                    segments.add(new FinderSegment(part, null));
                }
            }
        }
        return new FinderPath(segments);
    }

    // ------------------------------------------------------ instance

    private final List<FinderSegment> segments;

    FinderPath(List<FinderSegment> segments) {
        this.segments = segments;
    }

    // ------------------------------------------------------ api

    public boolean isEmpty() {
        return segments.isEmpty();
    }

    public int size() {
        return segments.size();
    }

    @Override
    public Iterator<FinderSegment> iterator() {
        return segments.iterator();
    }

    @Override
    public String toString() {
        return segments.stream().map(FinderSegment::toString).collect(joining("/"));
    }

    public FinderSegment findColumn(String identifier) {
        return findSegment(segment -> segment.columnId.equals(identifier));
    }

    public FinderSegment findItem(String identifier) {
        return findSegment(segment -> identifier.equals(segment.itemId));
    }

    private FinderSegment findSegment(Predicate<FinderSegment> condition) {
        for (FinderSegment segment : this) {
            if (condition.test(segment)) {
                return segment;
            }
        }
        return null;
    }
}
