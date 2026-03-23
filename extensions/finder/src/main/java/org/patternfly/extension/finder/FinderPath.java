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
import java.util.List;
import java.util.function.Predicate;

import static java.util.stream.Collectors.joining;

public class FinderPath implements Iterable<FinderSegment> {

    private final List<FinderSegment> segments;

    FinderPath(List<FinderSegment> segments) {
        this.segments = segments;
    }

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
        return findSegment(segment -> segment.column.identifier().equals(identifier));
    }

    public FinderSegment findItem(String identifier) {
        return findSegment(segment -> segment.item.identifier().equals(identifier));
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
