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

import org.patternfly.core.Tuple;

import static org.patternfly.core.Tuple.tuple;

public class BreakpointTypedModifiers<T extends TypedModifier> extends BreakpointModifiers<T> {

    // ------------------------------------------------------ factory

    public static <T extends TypedModifier> BreakpointTypedModifiers<T> breakpointTypedModifiers(
            Breakpoint breakpoint, T value) {
        List<Tuple<Breakpoint, T>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint, value));
        return new BreakpointTypedModifiers<>(tuples);
    }

    public static <T extends TypedModifier> BreakpointTypedModifiers<T> breakpointTypedModifiers(
            Breakpoint breakpoint1, T value1,
            Breakpoint breakpoint2, T value2) {
        List<Tuple<Breakpoint, T>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint1, value1));
        tuples.add(tuple(breakpoint2, value2));
        return new BreakpointTypedModifiers<>(tuples);
    }

    public static <T extends TypedModifier> BreakpointTypedModifiers<T> breakpointTypedModifiers(
            Breakpoint breakpoint1, T value1,
            Breakpoint breakpoint2, T value2,
            Breakpoint breakpoint3, T value3) {
        List<Tuple<Breakpoint, T>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint1, value1));
        tuples.add(tuple(breakpoint2, value2));
        tuples.add(tuple(breakpoint3, value3));
        return new BreakpointTypedModifiers<>(tuples);
    }

    public static <T extends TypedModifier> BreakpointTypedModifiers<T> breakpointTypedModifiers(
            Breakpoint breakpoint1, T value1,
            Breakpoint breakpoint2, T value2,
            Breakpoint breakpoint3, T value3,
            Breakpoint breakpoint4, T value4) {
        List<Tuple<Breakpoint, T>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint1, value1));
        tuples.add(tuple(breakpoint2, value2));
        tuples.add(tuple(breakpoint3, value3));
        tuples.add(tuple(breakpoint4, value4));
        return new BreakpointTypedModifiers<>(tuples);
    }

    public static <T extends TypedModifier> BreakpointTypedModifiers<T> breakpointTypedModifiers(
            Breakpoint breakpoint1, T value1,
            Breakpoint breakpoint2, T value2,
            Breakpoint breakpoint3, T value3,
            Breakpoint breakpoint4, T value4,
            Breakpoint breakpoint5, T value5) {
        List<Tuple<Breakpoint, T>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint1, value1));
        tuples.add(tuple(breakpoint2, value2));
        tuples.add(tuple(breakpoint3, value3));
        tuples.add(tuple(breakpoint4, value4));
        tuples.add(tuple(breakpoint5, value5));
        return new BreakpointTypedModifiers<>(tuples);
    }

    public static <T extends TypedModifier> BreakpointTypedModifiers<T> breakpointTypedModifiers(
            Breakpoint breakpoint1, T value1,
            Breakpoint breakpoint2, T value2,
            Breakpoint breakpoint3, T value3,
            Breakpoint breakpoint4, T value4,
            Breakpoint breakpoint5, T value5,
            Breakpoint breakpoint6, T value6) {
        List<Tuple<Breakpoint, T>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint1, value1));
        tuples.add(tuple(breakpoint2, value2));
        tuples.add(tuple(breakpoint3, value3));
        tuples.add(tuple(breakpoint4, value4));
        tuples.add(tuple(breakpoint5, value5));
        tuples.add(tuple(breakpoint6, value6));
        return new BreakpointTypedModifiers<>(tuples);
    }

    public static <T extends TypedModifier> BreakpointTypedModifiers<T> breakpointTypedModifiers(
            Iterable<Tuple<Breakpoint, T>> breakpoints) {
        return new BreakpointTypedModifiers<>(breakpoints);
    }

    // ------------------------------------------------------ instance

    BreakpointTypedModifiers(Iterable<Tuple<Breakpoint, T>> breakpoints) {
        super(breakpoints);
    }

    // ------------------------------------------------------ api

    @Override
    public BreakpointVariablesFluent<T> variables(Variable variable) {
        return new BreakpointVariablesFluent<>(this, variable, TypedModifier::value);
    }

    @Override
    public String modifierValues() {
        return collect(null, TypedModifier::value);
    }

    @Override
    public String modifierValues(Breakpoint breakpoint) {
        return collect(breakpoint, TypedModifier::value);
    }

    @Override
    public String verticalModifierValues() {
        return collectVertical(TypedModifier::value);
    }
}
