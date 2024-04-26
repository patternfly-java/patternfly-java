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
import static org.patternfly.style.VariableNames.componentName;
import static org.patternfly.style.VariableNames.globalName;

class VariableNamesTest {

    @Test
    void nil() {
        assertEquals("", globalName(null));
        assertEquals("", componentName(null));
    }

    @Test
    void empty() {
        assertEquals("", globalName(""));
        assertEquals("", componentName(""));
    }

    @Test
    void global() {
        assertEquals("--pf-v5-global--foo", globalName("foo"));
        assertEquals("--pf-v5-global--foo--bar", globalName("foo", "bar"));
    }

    @Test
    void wrongComponent() {
        assertEquals("", componentName("foo"));
    }

    @Test
    void rightComponent() {
        assertEquals("--pf-v5-c-foo",
                componentName(component("foo")));
        assertEquals("--pf-v5-c-foo__bar",
                componentName(component("foo", "bar")));
        assertEquals("--pf-v5-c-foo__bar--1",
                componentName(component("foo", "bar"), "1"));
        assertEquals("--pf-v5-c-foo__bar--1--2--3",
                componentName(component("foo", "bar"), "1", "2", "3"));
    }
}