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
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.layout;

class ComponentLayoutTest {

    @Test
    void nil() {
        assertEquals("", component(null));
        assertEquals("", layout(null));
    }

    @Test
    void empty() {
        assertEquals("", component(""));
        assertEquals("", layout(""));
    }

    @Test
    void components() {
        assertEquals("pf-v5-c-foo", component("foo"));
        assertEquals("pf-v5-c-foo__bar", component("foo", "bar"));
        assertEquals("pf-v5-c-foo__bar-1-2-3", component("foo", "bar", "1", "2", "3"));
    }

    @Test
    void layouts() {
        assertEquals("pf-v5-l-foo", layout("foo"));
        assertEquals("pf-v5-l-foo__bar", layout("foo", "bar"));
        assertEquals("pf-v5-l-foo__bar-1-2-3", layout("foo", "bar", "1", "2", "3"));
    }
}
