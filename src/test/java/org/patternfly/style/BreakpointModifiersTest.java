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
import static org.patternfly.style.BreakpointModifiers.breakpointModifiers;

class BreakpointModifiersTest {

    @Test
    void nil() {
        assertEquals("", breakpointModifiers(null).modifierValues());
        assertEquals("", breakpointModifiers(null).modifierValues(default_));
        assertEquals("", breakpointModifiers(null).modifierValues(sm));
        assertEquals("", breakpointModifiers(null).verticalModifierValues());
    }

    @Test
    void empty() {
        assertEquals("", breakpointModifiers(emptyList()).modifierValues());
        assertEquals("", breakpointModifiers(emptyList()).modifierValues(default_));
        assertEquals("", breakpointModifiers(emptyList()).modifierValues(sm));
        assertEquals("", breakpointModifiers(emptyList()).verticalModifierValues());
    }

    @Test
    void modifiers() {
        assertEquals("pf-m-foo", breakpointModifiers(default_, "foo").modifierValues());
        assertEquals("pf-m-foo-on-md", breakpointModifiers(md, "foo").modifierValues());
        assertEquals("pf-m-foo pf-m-bar-on-lg", breakpointModifiers(default_, "foo", lg, "bar").modifierValues());
    }

    @Test
    void prefix() {
        Function<String, String> prefix = string -> "prefix-" + string;
        assertEquals("pf-m-prefix-foo", breakpointModifiers(default_, "foo").modifierValues(prefix));
        assertEquals("pf-m-prefix-foo-on-md", breakpointModifiers(md, "foo").modifierValues(prefix));
        assertEquals("pf-m-prefix-foo pf-m-prefix-bar-on-lg",
                breakpointModifiers(default_, "foo", lg, "bar").modifierValues(prefix));
    }

    @Test
    void breakpoint() {
        assertEquals("pf-m-foo", breakpointModifiers(md, "foo").modifierValues(_2xl)); // md < _2xl
        assertEquals("", breakpointModifiers(md, "foo").modifierValues(sm)); // md > sm
    }

    @Test
    void breakpointPrefix() {
        Function<String, String> prefix = string -> "prefix-" + string;
        assertEquals("pf-m-prefix-foo", breakpointModifiers(md, "foo").modifierValues(_2xl, prefix)); // md < _2xl
        assertEquals("", breakpointModifiers(md, "foo").modifierValues(sm, prefix)); // md > sm
    }

    @Test
    void vertical() {
        BreakpointModifiers<String> breakpointModifiers = breakpointModifiers(
                default_, "a",
                sm, "b",
                md, "c",
                lg, "d",
                xl, "e",
                _2xl, "f");
        assertEquals(
                "pf-m-a " +
                        "pf-m-b-on-sm-height " +
                        "pf-m-c-on-md-height " +
                        "pf-m-d-on-lg-height " +
                        "pf-m-e-on-xl-height " +
                        "pf-m-f-on-2xl-height",
                breakpointModifiers.verticalModifierValues());
    }

    @Test
    void verticalPrefix() {
        Function<String, String> prefix = string -> "prefix-" + string;
        BreakpointModifiers<String> breakpointModifiers = breakpointModifiers(
                default_, "a",
                sm, "b",
                md, "c",
                lg, "d",
                xl, "e",
                _2xl, "f");
        assertEquals(
                "pf-m-prefix-a " +
                        "pf-m-prefix-b-on-sm-height " +
                        "pf-m-prefix-c-on-md-height " +
                        "pf-m-prefix-d-on-lg-height " +
                        "pf-m-prefix-e-on-xl-height " +
                        "pf-m-prefix-f-on-2xl-height",
                breakpointModifiers.verticalModifierValues(prefix));
    }
}
