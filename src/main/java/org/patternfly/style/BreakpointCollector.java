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

/**
 * The {@code BreakpointCollector} collects tuples of {@link Breakpoint} and a generic value {@code V} as CSS modifier classes
 * and returns the collected data as a {@link String}. See {@link Breakpoints} for details how the CSS modifier classes are
 * built.
 *
 * <p>
 * The joining methods accept a string function that can be used to further modify the value. See the examples below for
 * details.
 * </p>
 *
 * <p>
 * {@snippet class = BreakpointsDemo region = collector}
 * </p>
 *
 * @param <V> the type of the values to be collected
 * @see Breakpoints
 * @see Collector
 */
public class BreakpointCollector<V> implements Collector<Tuple<Breakpoint, V>, StringBuilder, String> {

    // ------------------------------------------------------ factory

    /**
     * Returns a collector that accumulates {@code Tuple<Breakpoint, V>} objects into a {@code StringBuilder} and produces a
     * {@code String} representation of the accumulated modifiers.
     *
     * @param <V> the type of the value in the {@code Tuple}
     */
    public static <V> Collector<Tuple<Breakpoint, V>, StringBuilder, String> modifiers() {
        return new BreakpointCollector<>(false, String::valueOf);
    }

    /**
     * Returns a collector that accumulates {@code Tuple<Breakpoint, V>} objects into a {@code StringBuilder} and produces a
     * {@code String} representation of the accumulated modifiers.
     *
     * @param <V> the type of the value in the {@code Tuple}
     * @param stringValue a function that converts the value of the {@code Tuple} to a {@code String}
     */
    public static <V> Collector<Tuple<Breakpoint, V>, StringBuilder, String> modifiers(Function<V, String> stringValue) {
        return new BreakpointCollector<>(false, stringValue);
    }

    /**
     * Returns a collector that accumulates {@code Tuple<Breakpoint, V>} objects into a {@code StringBuilder} and produces a
     * {@code String} representation of the accumulated vertical modifiers.
     *
     * @param <V> the type of the value in the {@code Tuple}
     */
    public static <V> Collector<Tuple<Breakpoint, V>, StringBuilder, String> verticalModifiers() {
        return new BreakpointCollector<>(true, String::valueOf);
    }

    /**
     * Returns a collector that accumulates {@code Tuple<Breakpoint, V>} objects into a {@code StringBuilder} and produces a
     * {@code String} representation of the accumulated vertical modifiers.
     *
     * @param <V> the type of the value in the {@code Tuple}
     * @param stringValue a function that converts the value of the {@code Tuple} to a {@code String}
     */
    public static <V> Collector<Tuple<Breakpoint, V>, StringBuilder, String> verticalModifiers(
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
                if (vertical) {
                    classname.append("-height");
                }
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
            if (r1.length() > 0) {
                r1.append(" ");
            }
            r1.append(r2);
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
