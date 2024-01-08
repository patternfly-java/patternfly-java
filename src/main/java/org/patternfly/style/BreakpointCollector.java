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
package org.patternfly.style;

import java.util.EnumSet;
import java.util.Set;
import java.util.function.BiConsumer;
import java.util.function.BinaryOperator;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collector;

import org.patternfly.core.Tuple;

import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Classes.modifier;

public class BreakpointCollector<V> implements Collector<Tuple<Breakpoint, V>, StringBuilder, String> {

    // ------------------------------------------------------ factory

    public static <V> Collector<Tuple<Breakpoint, V>, StringBuilder, String> joining() {
        return new BreakpointCollector<>(false, String::valueOf);
    }

    public static <V> Collector<Tuple<Breakpoint, V>, StringBuilder, String> joining(Function<V, String> stringValue) {
        return new BreakpointCollector<>(false, stringValue);
    }

    public static <V> Collector<Tuple<Breakpoint, V>, StringBuilder, String> joiningVertical() {
        return new BreakpointCollector<>(true, String::valueOf);
    }

    public static <V> Collector<Tuple<Breakpoint, V>, StringBuilder, String> joiningVertical(
            Function<V, String> stringValue) {
        return new BreakpointCollector<>(true, stringValue);
    }

    // ------------------------------------------------------ internal

    private final boolean vertical;
    private final Function<V, String> stringValue;

    private BreakpointCollector(boolean vertical, Function<V, String> stringValue) {
        this.vertical = vertical;
        this.stringValue = stringValue;
    }

    @Override
    public Supplier<StringBuilder> supplier() {
        return StringBuilder::new;
    }

    @Override
    public BiConsumer<StringBuilder, Tuple<Breakpoint, V>> accumulator() {
        return (builder, tuple) -> {
            StringBuilder classname = new StringBuilder(stringValue.apply(tuple.value));
            if (tuple.key != default_) {
                classname.append("-on-").append(tuple.key.value);
            }
            if (vertical) {
                classname.append("-height");
            }
            if (builder.length() > 0) {
                builder.append(" ");
            }
            builder.append(modifier(classname.toString()));
        };
    }

    @Override
    public BinaryOperator<StringBuilder> combiner() {
        return (r1, r2) -> {
            r1.append(" ").append(r2);
            return r1;
        };
    }

    @Override
    public Function<StringBuilder, String> finisher() {
        return StringBuilder::toString;
    }

    @Override
    public Set<Characteristics> characteristics() {
        return EnumSet.of(Characteristics.UNORDERED);
    }
}
