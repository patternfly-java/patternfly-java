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
package org.patternfly.filter;

import java.util.Objects;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

class FilterAttributeTest {

    FilterAttribute<String, String> filterAttribute;

    @BeforeEach
    void beforeEach() {
        filterAttribute = new FilterAttribute<>("string-equals", false, Objects::equals);
    }

    @Test
    void initial() {
        assertFalse(filterAttribute.defined());
        assertEquals(filterAttribute.initialValue(), filterAttribute.value());
    }

    @Test
    void value() {
        assertTrue(filterAttribute.set("foo"));
        assertTrue(filterAttribute.defined());
        assertEquals("foo", filterAttribute.value());
        assertNotEquals(filterAttribute.initialValue(), filterAttribute.value());
    }

    @Test
    void initialValue() {
        assertFalse(filterAttribute.set(null));
        assertFalse(filterAttribute.defined());
        assertNull(filterAttribute.value());

        filterAttribute.set("foo");
        assertTrue(filterAttribute.set(null)); // same as reset()
        assertFalse(filterAttribute.defined());
        assertNull(filterAttribute.value());
    }

    @Test
    void sameValue() {
        filterAttribute.set("foo");
        assertFalse(filterAttribute.set("foo"));
    }

    @Test
    void anotherValue() {
        filterAttribute.set("foo");
        assertTrue(filterAttribute.set("bar"));
        assertTrue(filterAttribute.defined());
        assertEquals("bar", filterAttribute.value());
    }

    @Test
    void reset() {
        filterAttribute.set("foo");
        assertTrue(filterAttribute.reset());
        assertFalse(filterAttribute.defined());
        assertEquals(filterAttribute.initialValue(), filterAttribute.value());
    }

    @Test
    void resetInitial() {
        assertFalse(filterAttribute.reset());
    }

    @Test
    void resetTwice() {
        filterAttribute.set("foo");
        assertTrue(filterAttribute.reset());
        assertFalse(filterAttribute.reset());
    }

    @Test
    void match() {
        filterAttribute.set("foo");
        assertTrue(filterAttribute.match("foo"));
        assertFalse(filterAttribute.match("bar"));
    }

    @Test
    void matchInitial() {
        assertFalse(filterAttribute.match("foo"));
        assertFalse(filterAttribute.match("bar"));
    }

    @Test
    void matchUndefined() {
        filterAttribute.set("foo");
        filterAttribute.reset();
        assertFalse(filterAttribute.match("foo"));
        assertFalse(filterAttribute.match("bar"));
    }
}
