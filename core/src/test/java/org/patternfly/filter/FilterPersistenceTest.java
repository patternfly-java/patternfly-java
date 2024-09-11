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

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.patternfly.filter.FilterOperator.AND;

public class FilterPersistenceTest {

    static class PersistentFilterAttribute extends FilterAttribute<String, String> {

        PersistentFilterAttribute(String name) {
            super(name, true, (o, v) -> true);
        }

        @Override
        protected void loadValue(String value) {
            set(value);
        }
    }

    Filter<String> filter;

    @BeforeEach
    void beforeEach() {
        filter = new Filter<>(AND);
        filter.add(new PersistentFilterAttribute("a"));
        filter.add(new FilterAttribute<>("b", false, (o, v) -> true));
        filter.add(new PersistentFilterAttribute("c"));
        filter.add(new PersistentFilterAttribute("d") {
            @Override
            protected String valueAsString() {
                return String.valueOf(value()).toUpperCase();
            }

            @Override
            protected void loadValue(String value) {
                if (value != null) {
                    set(value.toUpperCase());
                }
            }
        });
    }

    @Test
    void saveEmpty() {
        assertEquals("", filter.save());
    }

    @Test
    void saveNonPersistent() {
        filter.set("b", "foo");
        assertEquals("", filter.save());
    }

    @Test
    void save() {
        filter.set("a", "one");
        filter.set("b", "two");
        filter.set("c", "three");
        filter.set("d", "four");
        assertEquals("a=one|c=three|d=FOUR", filter.save());
    }

    @Test
    void load() {
        filter.load("a=one|c=three|d=four");
        assertEquals("one", filter.<String>get("a").value());
        assertFalse(filter.get("b").defined());
        assertEquals("three", filter.<String>get("c").value());
        assertEquals("FOUR", filter.<String>get("d").value());
    }

    @Test
    void loadSingle() {
        filter.load("a=one");
        assertEquals("one", filter.<String>get("a").value());
        assertFalse(filter.get("b").defined());
        assertFalse(filter.get("c").defined());
        assertFalse(filter.get("d").defined());
    }

    @Test
    void loadNoValue() {
        filter.load("c=");
        assertEquals("", filter.<String>get("c").value());
    }

    @Test
    void loadUnknown() {
        filter.load("x=unknown");
        assertNull(filter.get("x"));
    }

    @Test
    void loadNull() {
        filter.load(null);
        assertFalse(filter.get("a").defined());
        assertFalse(filter.get("b").defined());
        assertFalse(filter.get("c").defined());
        assertFalse(filter.get("d").defined());
    }

    @Test
    void loadEmpty() {
        filter.load("");
        assertFalse(filter.get("a").defined());
        assertFalse(filter.get("b").defined());
        assertFalse(filter.get("c").defined());
        assertFalse(filter.get("d").defined());
    }

    @Test
    void loadBlank() {
        filter.load("  ");
        assertFalse(filter.get("a").defined());
        assertFalse(filter.get("b").defined());
        assertFalse(filter.get("c").defined());
        assertFalse(filter.get("d").defined());
    }

    @Test
    void loadMalformed1() {
        filter.load("a");
        assertFalse(filter.get("a").defined());
        assertFalse(filter.get("b").defined());
        assertFalse(filter.get("c").defined());
        assertFalse(filter.get("d").defined());
    }

    @Test
    void loadMalformed2() {
        filter.load("a|b");
        assertFalse(filter.get("a").defined());
        assertFalse(filter.get("b").defined());
        assertFalse(filter.get("c").defined());
        assertFalse(filter.get("d").defined());
    }

    @Test
    void loadMalformed3() {
        filter.load("=b");
        assertFalse(filter.get("a").defined());
        assertFalse(filter.get("b").defined());
        assertFalse(filter.get("c").defined());
        assertFalse(filter.get("d").defined());
    }
}
