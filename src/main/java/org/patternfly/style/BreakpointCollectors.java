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

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;
import java.util.Set;
import java.util.function.BiConsumer;
import java.util.function.BinaryOperator;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collector;

import org.patternfly.core.Tuple;

import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Classes.modifier;

public final class BreakpointCollectors {

    // ------------------------------------------------------ factory

    public static <V> Collector<Tuple<Breakpoint, V>, List<Tuple<Breakpoint, V>>, BreakpointModifiers<V>> toBreakpointModifiers() {
        return new BreakpointModifiersCollector<>();
    }

    public static <T extends TypedModifier> Collector<Tuple<Breakpoint, T>, List<Tuple<Breakpoint, T>>, BreakpointTypedModifiers<T>> toBreakpointTypedModifiers() {
        return new BreakpointTypedModifiersCollector<>();
    }

    public static <V> Collector<Tuple<Breakpoint, V>, StringBuilder, String> modifiers() {
        return new ClassListCollector<>(String::valueOf);
    }

    public static <T extends TypedModifier> Collector<Tuple<Breakpoint, T>, StringBuilder, String> typedModifiers() {
        return new ClassListCollector<>(TypedModifier::value);
    }

    // ------------------------------------------------------ internal

    private static class ClassListCollector<V>
            implements Collector<Tuple<Breakpoint, V>, StringBuilder, String> {

        private final Function<V, String> stringValue;

        private ClassListCollector(Function<V, String> stringValue) {
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
                builder.append(modifier(classname.toString()));
            };
        }

        @Override
        public BinaryOperator<StringBuilder> combiner() {
            return (r1, r2) -> {
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

    private static class BreakpointModifiersCollector<V>
            implements Collector<Tuple<Breakpoint, V>, List<Tuple<Breakpoint, V>>, BreakpointModifiers<V>> {

        @Override
        public Supplier<List<Tuple<Breakpoint, V>>> supplier() {
            return ArrayList::new;
        }

        @Override
        public BiConsumer<List<Tuple<Breakpoint, V>>, Tuple<Breakpoint, V>> accumulator() {
            return List::add;
        }

        @Override
        public BinaryOperator<List<Tuple<Breakpoint, V>>> combiner() {
            return (left, right) -> {
                left.addAll(right);
                return left;
            };
        }

        @Override
        public Function<List<Tuple<Breakpoint, V>>, BreakpointModifiers<V>> finisher() {
            return BreakpointModifiers::new;
        }

        @Override
        public Set<Characteristics> characteristics() {
            return EnumSet.of(Characteristics.UNORDERED);
        }
    }

    private static class BreakpointTypedModifiersCollector<T extends TypedModifier>
            implements Collector<Tuple<Breakpoint, T>, List<Tuple<Breakpoint, T>>, BreakpointTypedModifiers<T>> {

        @Override
        public Supplier<List<Tuple<Breakpoint, T>>> supplier() {
            return ArrayList::new;
        }

        @Override
        public BiConsumer<List<Tuple<Breakpoint, T>>, Tuple<Breakpoint, T>> accumulator() {
            return List::add;
        }

        @Override
        public BinaryOperator<List<Tuple<Breakpoint, T>>> combiner() {
            return (left, right) -> {
                left.addAll(right);
                return left;
            };
        }

        @Override
        public Function<List<Tuple<Breakpoint, T>>, BreakpointTypedModifiers<T>> finisher() {
            return BreakpointTypedModifiers::new;
        }

        @Override
        public Set<Characteristics> characteristics() {
            return EnumSet.of(Characteristics.UNORDERED);
        }
    }
}
