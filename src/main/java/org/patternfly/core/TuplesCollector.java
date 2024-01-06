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
import java.util.EnumSet;
import java.util.List;
import java.util.Set;
import java.util.function.BiConsumer;
import java.util.function.BinaryOperator;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collector;

public class TuplesCollector<K, V> implements Collector<Tuple<K, V>, List<Tuple<K, V>>, Tuples<K, V>> {

    // ------------------------------------------------------ factory

    public static <K, V> Collector<Tuple<K, V>, List<Tuple<K, V>>, Tuples<K, V>> toTuples() {
        return new TuplesCollector<>();
    }

    // ------------------------------------------------------ instance

    @Override
    public Supplier<List<Tuple<K, V>>> supplier() {
        return ArrayList::new;
    }

    @Override
    public BiConsumer<List<Tuple<K, V>>, Tuple<K, V>> accumulator() {
        return List::add;
    }

    @Override
    public BinaryOperator<List<Tuple<K, V>>> combiner() {
        return (left, right) -> {
            left.addAll(right);
            return left;
        };
    }

    @Override
    public Function<List<Tuple<K, V>>, Tuples<K, V>> finisher() {
        return Tuples::new;
    }

    @Override
    public Set<Characteristics> characteristics() {
        return EnumSet.of(Characteristics.UNORDERED);
    }
}
