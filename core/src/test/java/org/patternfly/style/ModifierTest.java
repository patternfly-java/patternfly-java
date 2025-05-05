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

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.patternfly.style.Breakpoint._2xl;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Size.md;

class ModifierTest {

    @Test
    void nil() {
        assertEquals("", modifier((String) null));
        assertEquals("", modifier("foo", (Size) null));
        assertEquals("", modifier("foo", (Breakpoint) null));
    }

    @Test
    void empty() {
        assertEquals("", modifier(""));
    }

    @Test
    void modifiers() {
        assertEquals("pf-m-foo", modifier("foo"));
        assertEquals("pf-m-foo-md", modifier("foo", md));
        assertEquals("pf-m-foo", modifier("foo", default_));
        assertEquals("pf-m-foo-on-2xl", modifier("foo", _2xl));
    }

    @Test
    void noDuplicates() {
        assertEquals("pf-m-foo", modifier("pf-m-foo"));
        assertEquals("pf-m-foo", modifier(modifier("foo")));
        assertEquals("pf-m-foo", modifier(modifier(modifier("foo"))));
    }
}
