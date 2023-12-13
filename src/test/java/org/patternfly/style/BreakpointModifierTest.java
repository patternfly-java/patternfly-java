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

import org.junit.jupiter.api.Test;
import org.patternfly.core.Tuples;

import static java.util.Collections.emptyList;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.patternfly.core.Tuples.tuples;
import static org.patternfly.style.Breakpoint._2xl;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.lg;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoint.sm;
import static org.patternfly.style.Breakpoint.xl;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.verticalModifier;

class BreakpointModifierTest {

    @Test
    void nil() {
        assertEquals("", modifier((Tuples<Breakpoint, String>) null));
    }

    @Test
    void empty() {
        assertEquals("", modifier(tuples(emptyList())));
    }

    @Test
    void mods() {
        assertEquals("pf-m-foo", modifier(tuples(default_, "foo")));
        assertEquals("pf-m-foo-on-md", modifier(tuples(md, "foo")));
        assertEquals("pf-m-foo pf-m-bar-on-lg", modifier(tuples(default_, "foo", lg, "bar")));
    }

    @Test
    void breakpoint() {
        assertEquals("pf-m-foo", modifier(tuples(md, "foo"), _2xl));
    }

    @Test
    void vertical() {
        Tuples<Breakpoint, String> tuples = tuples(default_, "a",
                sm, "b",
                md, "c",
                lg, "d",
                xl, "e",
                _2xl, "f");
        assertEquals(
                "pf-m-a pf-m-b-on-sm-height pf-m-c-on-md-height pf-m-d-on-lg-height pf-m-e-on-xl-height pf-m-f-on-2xl-height",
                verticalModifier(tuples));
    }
}
