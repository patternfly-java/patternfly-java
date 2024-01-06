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
import static java.util.stream.Collectors.joining;
import static org.patternfly.core.Tuple.tuple;
import static org.patternfly.style.Breakpoint._2xl;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.lg;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoint.sm;
import static org.patternfly.style.Breakpoint.xl;

public class BreakpointModifiers<V> extends Tuples<Breakpoint, V> {

    // ------------------------------------------------------ factory

    public static <V> BreakpointModifiers<V> breakpointModifiers(
            Breakpoint breakpoint, V value) {
        List<Tuple<Breakpoint, V>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint, value));
        return new BreakpointModifiers<>(tuples);
    }

    public static <V> BreakpointModifiers<V> breakpointModifiers(
            Breakpoint breakpoint1, V value1,
            Breakpoint breakpoint2, V value2) {
        List<Tuple<Breakpoint, V>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint1, value1));
        tuples.add(tuple(breakpoint2, value2));
        return new BreakpointModifiers<>(tuples);
    }

    public static <V> BreakpointModifiers<V> breakpointModifiers(
            Breakpoint breakpoint1, V value1,
            Breakpoint breakpoint2, V value2,
            Breakpoint breakpoint3, V value3) {
        List<Tuple<Breakpoint, V>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint1, value1));
        tuples.add(tuple(breakpoint2, value2));
        tuples.add(tuple(breakpoint3, value3));
        return new BreakpointModifiers<>(tuples);
    }

    public static <V> BreakpointModifiers<V> breakpointModifiers(
            Breakpoint breakpoint1, V value1,
            Breakpoint breakpoint2, V value2,
            Breakpoint breakpoint3, V value3,
            Breakpoint breakpoint4, V value4) {
        List<Tuple<Breakpoint, V>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint1, value1));
        tuples.add(tuple(breakpoint2, value2));
        tuples.add(tuple(breakpoint3, value3));
        tuples.add(tuple(breakpoint4, value4));
        return new BreakpointModifiers<>(tuples);
    }

    public static <V> BreakpointModifiers<V> breakpointModifiers(
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
        return new BreakpointModifiers<>(tuples);
    }

    public static <V> BreakpointModifiers<V> breakpointModifiers(
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
        return new BreakpointModifiers<>(tuples);
    }

    public static <V> BreakpointModifiers<V> breakpointModifiers(Iterable<Tuple<Breakpoint, V>> breakpoints) {
        return new BreakpointModifiers<>(breakpoints);
    }

    // ------------------------------------------------------ instance

    static final List<Breakpoint> LARGE_TO_SMALL = asList(_2xl, xl, lg, md, sm, default_);

    BreakpointModifiers(Iterable<Tuple<Breakpoint, V>> breakpoints) {
        super(breakpoints);
    }

    // ------------------------------------------------------ fluent api

    public BreakpointModifiersFluent modifiers() {
        return new BreakpointModifiersFluent(this::modifierValues);
    }

    public BreakpointModifiersFluent modifiers(Function<V, String> stringValue) {
        return new BreakpointModifiersFluent(() -> modifierValues(stringValue));
    }

    public BreakpointModifiersFluent modifiers(Breakpoint breakpoint) {
        return new BreakpointModifiersFluent(() -> modifierValues(breakpoint));
    }

    public BreakpointModifiersFluent modifiers(Breakpoint breakpoint, Function<V, String> stringValue) {
        return new BreakpointModifiersFluent(() -> modifierValues(breakpoint, stringValue));
    }

    public BreakpointModifiersFluent verticalModifiers() {
        return new BreakpointModifiersFluent(this::verticalModifierValues);
    }

    public BreakpointModifiersFluent verticalModifiers(Function<V, String> stringValue) {
        return new BreakpointModifiersFluent(() -> verticalModifierValues(stringValue));
    }

    public BreakpointVariablesFluent<V> variables(Variable variable) {
        return new BreakpointVariablesFluent<>(this, variable, String::valueOf);
    }

    public BreakpointVariablesFluent<V> variables(Variable variable, Function<V, String> stringValue) {
        return new BreakpointVariablesFluent<>(this, variable, stringValue);
    }

    // ------------------------------------------------------ api

    public String modifierValues() {
        return collect(null, String::valueOf);
    }

    public String modifierValues(Function<V, String> stringValue) {
        return collect(null, stringValue);
    }

    public String modifierValues(Breakpoint breakpoint) {
        return collect(breakpoint, String::valueOf);
    }

    public String modifierValues(Breakpoint breakpoint, Function<V, String> stringValue) {
        return collect(breakpoint, stringValue);
    }

    public String verticalModifierValues() {
        return collectVertical(String::valueOf);
    }

    public String verticalModifierValues(Function<V, String> stringValue) {
        return collectVertical(stringValue);
    }

    // ------------------------------------------------------ internal

    protected String collect(Breakpoint breakpoint, Function<V, String> stringValue) {
        String modifier = "";
        if (!isEmpty()) {
            if (breakpoint != null) {
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
            } else {
                modifier = stream()
                        .map(tuple -> {
                            StringBuilder builder = new StringBuilder(stringValue.apply(tuple.value));
                            if (tuple.key != default_) {
                                builder.append("-on-").append(tuple.key.value);
                            }
                            return builder.toString();
                        })
                        .map(Classes::modifier)
                        .collect(joining(" "));
            }

        }
        return modifier;
    }

    protected String collectVertical(Function<V, String> stringValue) {
        if (!isEmpty()) {
            return stream()
                    .map(tuple -> {
                        StringBuilder builder = new StringBuilder(stringValue.apply(tuple.value));
                        if (tuple.key != default_) {
                            builder.append("-on-").append(tuple.key.value).append("-height");
                        }
                        return builder.toString();
                    })
                    .map(Classes::modifier)
                    .collect(joining(" "));
        }
        return "";
    }
}
