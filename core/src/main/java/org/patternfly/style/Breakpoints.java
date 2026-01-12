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
import static java.util.Collections.emptyList;
import static org.patternfly.core.Tuple.tuple;
import static org.patternfly.style.Breakpoint._2xl;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.lg;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoint.sm;
import static org.patternfly.style.Breakpoint.xl;

/**
 * This class represents a collection of {@linkplain Breakpoint breakpoints} and associated values. It extends the
 * {@link Tuples} class and adds methods to generate CSS modifier classes. The class is used as parameter in various components and
 * layouts to apply CSS modifiers for responsive layout.
 *
 * <p>
 * The CSS modifier class for a single breakpoint is generated using the following rules:
 * </p>
 * <ul>
 * <li>For normal breakpoints ({@code modifiers()} methods)
 * <ul>
 * <li>default breakpoint: {@code pf-m-<value>}</li>
 * <li>all other breakpoints: {@code pf-m-<value>-on-<breakpoint>}</li>
 * </ul>
 * </li>
 * <li>For vertical breakpoints ({@code verticalModifiers()} methods)
 * <ul>
 * <li>default breakpoint: {@code pf-m-<value>}</li>
 * <li>all other breakpoints: {@code pf-m-<value>-on-<breakpoint>-height}</li>
 * </ul>
 * </li>
 * </ul>
 *
 * <p>
 * When generating the CSS modifier classes, {@link String#valueOf(Object)} is used by default to build the {@code <value>}
 * part. If the value type implements {@link TypedModifier}, {@link TypedModifier#value()} is used instead.
 * </p>
 *
 * <p>
 * Breakpoints can be created using either factory methods or a fluent API:
 * </p>
 * <p>
 * {@snippet class=BreakpointsDemo region=factoryAndFluent}
 * </p>
 *
 * <p>
 * To get the CSS modifiers classes, use the {@code modifiers()} and {@code verticalModifiers()} methods. Depending on the
 *  signature, they return a list of CSS modifier classes, a single CSS modifier class or an empty string.
 * </p>
 * <p>
 * {@snippet class=BreakpointsDemo region=modifiers}
 * </p>
 *
 * @param <V> the type of values associated with each breakpoint
 */
public class Breakpoints<V> extends Tuples<Breakpoint, V> {

    // ------------------------------------------------------ factory

    /**
     * Creates a new instance of Breakpoints with an empty list of breakpoints.
     */
    public static <V> Breakpoints<V> breakpoints() {
        return new Breakpoints<>(emptyList());
    }

    /**
     * Creates a new instance of {@link Breakpoints} with a single tuple containing the given breakpoint and value.
     */
    public static <V> Breakpoints<V> breakpoints(
            Breakpoint breakpoint, V value) {
        List<Tuple<Breakpoint, V>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint, value));
        return new Breakpoints<>(tuples);
    }

    /**
     * Creates a new instance of Breakpoints with two tuples containing the given breakpoints and values.
     */
    public static <V> Breakpoints<V> breakpoints(
            Breakpoint breakpoint1, V value1,
            Breakpoint breakpoint2, V value2) {
        List<Tuple<Breakpoint, V>> tuples = new ArrayList<>();
        tuples.add(tuple(breakpoint1, value1));
        tuples.add(tuple(breakpoint2, value2));
        return new Breakpoints<>(tuples);
    }

    /**
     * Creates a new instance of Breakpoints with three tuples containing the given breakpoints and values.
     */
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

    /**
     * Creates a new instance of Breakpoints with four tuples containing the given breakpoints and values.
     */
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

    /**
     * Creates a new instance of Breakpoints with five tuples containing the given breakpoints and values.
     */
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

    /**
     * Creates a new instance of Breakpoints with six tuples containing the given breakpoints and values.
     */
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

    /**
     * Creates a new instance of Breakpoints with the given breakpoints and values.
     */
    public static <V> Breakpoints<V> breakpoints(Iterable<Tuple<Breakpoint, V>> breakpoints) {
        return new Breakpoints<>(breakpoints);
    }

    // ------------------------------------------------------ instance

    private static final List<Breakpoint> LARGE_TO_SMALL = asList(_2xl, xl, lg, md, sm, default_);

    private Breakpoints(Iterable<Tuple<Breakpoint, V>> breakpoints) {
        super(breakpoints);
    }

    // ------------------------------------------------------ builder

    /**
     * Adds the given value for the default breakpoint to the list of breakpoints.
     */
    public Breakpoints<V> default_(V value) {
        add(default_, value);
        return this;
    }

    /**
     * Adds the given value for the small breakpoint to the list of breakpoints.
     */
    public Breakpoints<V> sm(V value) {
        add(sm, value);
        return this;
    }

    /**
     * Adds the given value for the medium breakpoint to the list of breakpoints.
     */
    public Breakpoints<V> md(V value) {
        add(md, value);
        return this;
    }

    /**
     * Adds the given value for the large breakpoint to the list of breakpoints.
     */
    public Breakpoints<V> lg(V value) {
        add(lg, value);
        return this;
    }

    /**
     * Adds the given value for the x-large breakpoint to the list of breakpoints.
     */
    public Breakpoints<V> xl(V value) {
        add(xl, value);
        return this;
    }

    /**
     * Adds the given value for the 2xl breakpoint to the list of breakpoints.
     */
    public Breakpoints<V> _2xl(V value) {
        add(_2xl, value);
        return this;
    }

    // ------------------------------------------------------ api

    /**
     * Returns the CSS modifiers classes for the breakpoints of this class as a string separated by " ".
     * <p>
     * When generating the CSS modifier classes, {@link String#valueOf(Object)} is used by default to build the {@code <value>}
     * part. If the value type implements {@link TypedModifier}, {@link TypedModifier#value()} is used instead.
     * </p>
     */
    public String modifiers() {
        if (typedModifier()) {
            return modifiers(v -> ((TypedModifier) v).value());
        } else {
            return modifiers(String::valueOf);
        }
    }

    /**
     * Returns the CSS modifiers classes for the breakpoints of this class as a string separated by " ".
     * <p>
     * When generating the CSS modifier classes, the specified function is used to build the {@code <value>} part.
     * </p>
     */
    public String modifiers(Function<V, String> stringValue) {
        return stream().collect(BreakpointCollector.modifiers(stringValue));
    }

    /**
     * Returns a single CSS modifier class for the given breakpoint, if this class contains the breakpoint. Otherwise, returns a
     * single CSS modifier class for the given breakpoint, if this class contains a breakpoint smaller than the given one.
     * Otherwise, this method returns an empty string.
     * <p>
     * This method does not add the {@code -on-<breakpoint>} suffix!
     * </p>
     * <p>
     * When generating the CSS modifier classes, {@link String#valueOf(Object)} is used by default to build the {@code <value>}
     * part. If the value type implements {@link TypedModifier}, {@link TypedModifier#value()} is used instead.
     * </p>
     */
    public String modifier(Breakpoint breakpoint) {
        if (typedModifier()) {
            return modifier(breakpoint, v -> ((TypedModifier) v).value());
        } else {
            return modifier(breakpoint, String::valueOf);
        }
    }

    /**
     * Returns a single CSS modifier class for the given breakpoint, if this class contains the breakpoint. Otherwise, returns a
     * single CSS modifier class for the given breakpoint, if this class contains a breakpoint smaller than the given one.
     * Otherwise, this method returns an empty string.
     * <p>
     * This method does not add the {@code -on-<breakpoint>} suffix!
     * </p>
     * <p>
     * When generating the CSS modifier classes, the specified function is used to build the {@code <value>} part.
     * </p>
     */
    public String modifier(Breakpoint breakpoint, Function<V, String> stringValue) {
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

    /**
     * Returns the vertical CSS modifiers classes for the breakpoints of this class as a string separated by " ".
     * <p>
     * When generating the CSS modifier classes, {@link String#valueOf(Object)} is used by default to build the {@code <value>}
     * part. If the value type implements {@link TypedModifier}, {@link TypedModifier#value()} is used instead.
     * </p>
     */
    public String verticalModifiers() {
        if (typedModifier()) {
            return verticalModifiers(v -> ((TypedModifier) v).value());
        } else {
            return verticalModifiers(String::valueOf);
        }
    }

    /**
     * Returns the vertical CSS modifiers classes for the breakpoints of this class as a string separated by " ".
     * <p>
     * When generating the CSS modifier classes, the specified function is used to build the {@code <value>} part.
     * </p>
     */
    public String verticalModifiers(Function<V, String> stringValue) {
        return stream().collect(BreakpointCollector.verticalModifiers(stringValue));
    }

    // ------------------------------------------------------ internal

    boolean typedModifier() {
        return !isEmpty() && iterator().next().value instanceof TypedModifier;
    }
}
