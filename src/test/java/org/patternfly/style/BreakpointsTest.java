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

import java.util.function.Function;

import org.junit.jupiter.api.Test;

import static java.util.Collections.emptyList;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.patternfly.style.Breakpoint._2xl;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.lg;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoint.sm;
import static org.patternfly.style.Breakpoint.xl;
import static org.patternfly.style.Breakpoints.breakpoints;

class BreakpointsTest {

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
        assertEquals("pf-m-foo pf-m-bar-on-lg", breakpoints(default_, "foo", lg, "bar").modifiers());
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
}
