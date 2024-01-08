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

import java.util.Iterator;
import java.util.function.Function;

import org.junit.jupiter.api.Test;
import org.patternfly.core.Tuple;

import static java.util.Collections.emptyList;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.patternfly.style.Breakpoint._2xl;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.lg;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoint.sm;
import static org.patternfly.style.Breakpoint.xl;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.BreakpointsTest.Number.one;
import static org.patternfly.style.BreakpointsTest.Number.three;
import static org.patternfly.style.BreakpointsTest.Number.two;

class BreakpointsTest {

    enum Number implements TypedModifier {
        one("eins"),

        two("zwei"),

        three("drei");

        private final String value;
        private final String modifier;

        Number(String value) {
            this.value = value;
            this.modifier = Classes.modifier(value);
        }

        @Override
        public String value() {
            return value;
        }

        @Override
        public String modifier() {
            return modifier;
        }
    }

    @Test
    void nil() {
        assertEquals("", breakpoints(null).modifiers());
        assertEquals("", breakpoints(null).modifiers(default_));
        assertEquals("", breakpoints(null).modifiers(sm));
        assertEquals("", breakpoints(null).verticalModifiers());
    }

    @Test
    void empty() {
        assertEquals("", breakpoints(emptyList()).modifiers());
        assertEquals("", breakpoints(emptyList()).modifiers(default_));
        assertEquals("", breakpoints(emptyList()).modifiers(sm));
        assertEquals("", breakpoints(emptyList()).verticalModifiers());
    }

    @Test
    void modifiers() {
        assertEquals("pf-m-foo", breakpoints(default_, "foo").modifiers());
        assertEquals("pf-m-foo-on-md", breakpoints(md, "foo").modifiers());
        assertEquals("pf-m-foo pf-m-bar-on-lg",
                breakpoints(default_, "foo", lg, "bar").modifiers());
    }

    @Test
    void typedModifiers() {
        assertEquals("pf-m-eins", breakpoints(default_, one).modifiers());
        assertEquals("pf-m-zwei-on-md", breakpoints(md, two).modifiers());
        assertEquals("pf-m-eins pf-m-zwei-on-lg pf-m-drei-on-2xl",
                breakpoints(default_, one, lg, two, _2xl, three).modifiers());
    }

    @Test
    void prefix() {
        Function<String, String> prefix = string -> "prefix-" + string;
        assertEquals("pf-m-prefix-foo", breakpoints(default_, "foo").modifiers(prefix));
        assertEquals("pf-m-prefix-foo-on-md", breakpoints(md, "foo").modifiers(prefix));
        assertEquals("pf-m-prefix-foo pf-m-prefix-bar-on-lg",
                breakpoints(default_, "foo", lg, "bar").modifiers(prefix));
    }

    @Test
    void breakpoint() {
        assertEquals("pf-m-foo", breakpoints(md, "foo").modifiers(_2xl)); // md < _2xl
        assertEquals("", breakpoints(md, "foo").modifiers(sm)); // md > sm
    }

    @Test
    void breakpointPrefix() {
        Function<String, String> prefix = string -> "prefix-" + string;
        assertEquals("pf-m-prefix-foo", breakpoints(md, "foo").modifiers(_2xl, prefix)); // md < _2xl
        assertEquals("", breakpoints(md, "foo").modifiers(sm, prefix)); // md > sm
    }

    @Test
    void vertical() {
        Breakpoints<String> breakpoints = breakpoints(
                default_, "a",
                sm, "b",
                md, "c",
                lg, "d",
                xl, "e",
                _2xl, "f");
        assertEquals(
                "pf-m-a-height " +
                        "pf-m-b-on-sm-height " +
                        "pf-m-c-on-md-height " +
                        "pf-m-d-on-lg-height " +
                        "pf-m-e-on-xl-height " +
                        "pf-m-f-on-2xl-height",
                breakpoints.verticalModifiers());
    }

    @Test
    void verticalPrefix() {
        Function<String, String> prefix = string -> "prefix-" + string;
        Breakpoints<String> breakpoints = breakpoints(
                default_, "a",
                sm, "b",
                md, "c",
                lg, "d",
                xl, "e",
                _2xl, "f");
        assertEquals(
                "pf-m-prefix-a-height " +
                        "pf-m-prefix-b-on-sm-height " +
                        "pf-m-prefix-c-on-md-height " +
                        "pf-m-prefix-d-on-lg-height " +
                        "pf-m-prefix-e-on-xl-height " +
                        "pf-m-prefix-f-on-2xl-height",
                breakpoints.verticalModifiers(prefix));
    }

    @Test
    void builderAndFactory() {
        Breakpoints<Object> builder = breakpoints().sm(1).md(2).lg(3);
        Breakpoints<Integer> factory = breakpoints(sm, 1, md, 2, lg, 3);

        Iterator<Tuple<Breakpoint, Object>> bi = builder.iterator();
        Iterator<Tuple<Breakpoint, Integer>> fi = factory.iterator();
        while (bi.hasNext() && fi.hasNext()) {
            Tuple<Breakpoint, ?> bt = bi.next();
            Tuple<Breakpoint, Integer> ft = fi.next();
            assertEquals(bt.key, ft.key);
            assertEquals(bt.value, ft.value);
        }
        assertEquals(builder.modifiers(), factory.modifiers());
    }
}
