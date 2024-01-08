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
import java.util.List;
import java.util.function.Function;

import org.patternfly.core.Tuple;
import org.patternfly.core.Tuples;

import static java.util.Arrays.asList;
import static org.patternfly.core.Tuple.tuple;
import static org.patternfly.style.Breakpoint._2xl;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.lg;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoint.sm;
import static org.patternfly.style.Breakpoint.xl;
import static org.patternfly.style.BreakpointCollector.joining;
import static org.patternfly.style.BreakpointCollector.joiningVertical;

public class Breakpoints<V> extends Tuples<Breakpoint, V> {

    // ------------------------------------------------------ factory

    public static <V> Breakpoints<V> breakpoints(
            Breakpoint breakpoint, V value) {
        List<Tuple<Breakpoint, V>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint, value));
        return new Breakpoints<>(tuples);
    }

    public static <V> Breakpoints<V> breakpoints(
            Breakpoint breakpoint1, V value1,
            Breakpoint breakpoint2, V value2) {
        List<Tuple<Breakpoint, V>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint1, value1));
        tuples.add(tuple(breakpoint2, value2));
        return new Breakpoints<>(tuples);
    }

    public static <V> Breakpoints<V> breakpoints(
            Breakpoint breakpoint1, V value1,
            Breakpoint breakpoint2, V value2,
            Breakpoint breakpoint3, V value3) {
        List<Tuple<Breakpoint, V>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint1, value1));
        tuples.add(tuple(breakpoint2, value2));
        tuples.add(tuple(breakpoint3, value3));
        return new Breakpoints<>(tuples);
    }

    public static <V> Breakpoints<V> breakpoints(
            Breakpoint breakpoint1, V value1,
            Breakpoint breakpoint2, V value2,
            Breakpoint breakpoint3, V value3,
            Breakpoint breakpoint4, V value4) {
        List<Tuple<Breakpoint, V>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint1, value1));
        tuples.add(tuple(breakpoint2, value2));
        tuples.add(tuple(breakpoint3, value3));
        tuples.add(tuple(breakpoint4, value4));
        return new Breakpoints<>(tuples);
    }

    public static <V> Breakpoints<V> breakpoints(
            Breakpoint breakpoint1, V value1,
            Breakpoint breakpoint2, V value2,
            Breakpoint breakpoint3, V value3,
            Breakpoint breakpoint4, V value4,
            Breakpoint breakpoint5, V value5) {
        List<Tuple<Breakpoint, V>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint1, value1));
        tuples.add(tuple(breakpoint2, value2));
        tuples.add(tuple(breakpoint3, value3));
        tuples.add(tuple(breakpoint4, value4));
        tuples.add(tuple(breakpoint5, value5));
        return new Breakpoints<>(tuples);
    }

    public static <V> Breakpoints<V> breakpoints(
            Breakpoint breakpoint1, V value1,
            Breakpoint breakpoint2, V value2,
            Breakpoint breakpoint3, V value3,
            Breakpoint breakpoint4, V value4,
            Breakpoint breakpoint5, V value5,
            Breakpoint breakpoint6, V value6) {
        List<Tuple<Breakpoint, V>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint1, value1));
        tuples.add(tuple(breakpoint2, value2));
        tuples.add(tuple(breakpoint3, value3));
        tuples.add(tuple(breakpoint4, value4));
        tuples.add(tuple(breakpoint5, value5));
        tuples.add(tuple(breakpoint6, value6));
        return new Breakpoints<>(tuples);
    }

    public static <V> Breakpoints<V> breakpoints(Iterable<Tuple<Breakpoint, V>> breakpoints) {
        return new Breakpoints<>(breakpoints);
    }

    // ------------------------------------------------------ instance

    private static final List<Breakpoint> LARGE_TO_SMALL = asList(_2xl, xl, lg, md, sm, default_);

    private Breakpoints(Iterable<Tuple<Breakpoint, V>> breakpoints) {
        super(breakpoints);
    }

    // ------------------------------------------------------ api

    public String modifiers() {
        if (typedModifier()) {
            return modifiers(v -> ((TypedModifier) v).value());
        } else {
            return modifiers(String::valueOf);
        }
    }

    public String modifiers(Function<V, String> stringValue) {
        return stream().collect(joining(stringValue));
    }

    public String modifiers(Breakpoint breakpoint) {
        if (typedModifier()) {
            return modifiers(breakpoint, v -> ((TypedModifier) v).value());
        } else {
            return modifiers(breakpoint, String::valueOf);
        }
    }

    public String modifiers(Breakpoint breakpoint, Function<V, String> stringValue) {
        String modifier = "";
        if (hasKey(breakpoint)) {
            modifier = Classes.modifier(stringValue.apply(value(breakpoint)));
        } else {
            int index = LARGE_TO_SMALL.indexOf(breakpoint);
            for (int i = index; i < LARGE_TO_SMALL.size(); i++) {
                Breakpoint bp = LARGE_TO_SMALL.get(i);
                if (hasKey(bp)) {
                    modifier = Classes.modifier(stringValue.apply(value(bp)));
                }
            }
        }
        return modifier;
    }

    public String verticalModifiers() {
        if (typedModifier()) {
            return verticalModifiers(v -> ((TypedModifier) v).value());
        } else {
            return verticalModifiers(String::valueOf);
        }
    }

    public String verticalModifiers(Function<V, String> stringValue) {
        return stream().collect(joiningVertical(stringValue));
    }

    // ------------------------------------------------------ internal

    boolean typedModifier() {
        return !isEmpty() && iterator().next().value instanceof TypedModifier;
    }
}
