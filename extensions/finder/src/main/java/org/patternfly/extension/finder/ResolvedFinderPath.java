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
import static java.util.stream.Collectors.toList;

/**
 * A resolved finder path containing live references to {@link FinderColumn} and {@link FinderItem} instances. Produced by
 * {@link Finder#path()} to inspect the current state of the finder.
 * <p>
 * For a lightweight string-based path suitable for URL routing and serialization, use {@link FinderPath}.
 */
public class ResolvedFinderPath implements Iterable<ResolvedFinderSegment> {

    private final List<ResolvedFinderSegment> segments;

    ResolvedFinderPath(List<ResolvedFinderSegment> segments) {
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
    public Iterator<ResolvedFinderSegment> iterator() {
        return segments.iterator();
    }

    @Override
    public String toString() {
        return segments.stream().map(ResolvedFinderSegment::toString).collect(joining("/"));
    }

    public ResolvedFinderSegment findColumn(String identifier) {
        return findSegment(segment -> segment.column.identifier().equals(identifier));
    }

    public ResolvedFinderSegment findItem(String identifier) {
        return findSegment(segment -> segment.item != null && segment.item.identifier().equals(identifier));
    }

    /**
     * Converts this resolved path to a lightweight {@link FinderPath} containing only string identifiers.
     */
    public FinderPath toFinderPath() {
        return new FinderPath(segments.stream()
                .map(s -> new FinderSegment(
                        s.column.identifier(),
                        s.item != null ? s.item.identifier() : null))
                .collect(toList()));
    }

    private ResolvedFinderSegment findSegment(Predicate<ResolvedFinderSegment> condition) {
        for (ResolvedFinderSegment segment : this) {
            if (condition.test(segment)) {
                return segment;
            }
        }
        return null;
    }
}
