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
package org.patternfly.core;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import static java.util.Arrays.asList;
import static java.util.stream.Collectors.joining;
import static org.patternfly.core.Tuple.tuple;

public class Tuples<K, V> implements Iterable<Tuple<K, V>> {

    // ------------------------------------------------------ factory

    @SafeVarargs
    public static <K, V> Tuples<K, V> tuples(Tuple<K, V>... tuples) {
        return new Tuples<>(asList(tuples));
    }

    public static <K, V> Tuples<K, V> tuples(List<Tuple<K, V>> tuples) {
        return new Tuples<>(tuples);
    }

    // ------------------------------------------------------ instance

    private final List<Tuple<K, V>> tuples;

    protected Tuples(Iterable<Tuple<K, V>> tuples) {
        this.tuples = new ArrayList<>();
        if (tuples != null) {
            for (Tuple<K, V> tuple : tuples) {
                this.tuples.add(tuple);
            }
        }
    }

    @Override
    public String toString() {
        return tuples.stream().map(Tuple::toString).collect(joining(", ", "[", "]"));
    }

    // ------------------------------------------------------ api

    public boolean hasKey(K key) {
        return findTuple(key, null) != null;
    }

    public boolean hasValue(V value) {
        return findTuple(null, value) != null;
    }

    public K key(V value) {
        Tuple<K, V> tuple = findTuple(null, value);
        return tuple != null ? tuple.key : null;
    }

    public V value(K key) {
        Tuple<K, V> tuple = findTuple(key, null);
        return tuple != null ? tuple.value : null;
    }

    public boolean isEmpty() {
        return tuples.isEmpty();
    }

    public int size() {
        return tuples.size();
    }

    @Override
    public Iterator<Tuple<K, V>> iterator() {
        return tuples.iterator();
    }

    public Stream<Tuple<K, V>> stream() {
        return StreamSupport.stream(spliterator(), false);
    }

    // ------------------------------------------------------ internal

    protected void add(K key, V value) {
        tuples.add(tuple(key, value));
    }

    private Tuple<K, V> findTuple(K key, V value) {
        if (key != null) {
            for (Tuple<K, V> tuple : tuples) {
                if (key.equals(tuple.key)) {
                    return tuple;
                }
            }
        } else if (value != null) {
            for (Tuple<K, V> tuple : tuples) {
                if (value.equals(tuple.value)) {
                    return tuple;
                }
            }
        }
        return null;
    }
}
