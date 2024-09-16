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

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Consumer;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class FilterTest {

    static class SimpleChangeHandler implements Consumer<Filter<String>> {

        boolean notified = false;

        @Override
        public void accept(Filter<String> filter) {
            notified = true;
        }
    }

    Filter<String> filter;

    @BeforeEach
    void beforeEach() {
        filter = new Filter<>(FilterOperator.AND);
        filter.add(new FilterAttribute<>("string-equals", false, Objects::equals));
    }

    @Test
    void defined() {
        assertFalse(filter.defined());
        filter.set("unknown", "foo");
        assertFalse(filter.defined());
    }

    @Test
    void definedBackAndForth() {
        filter.set("string-equals", "foo");
        assertTrue(filter.defined());

        filter.set("string-equals", null);
        assertFalse(filter.defined());

        filter.set("string-equals", "bar");
        assertTrue(filter.defined());
        filter.reset("string-equals");
        assertFalse(filter.defined());

        filter.set("string-equals", "baz");
        assertTrue(filter.defined());
        filter.resetAll();
        assertFalse(filter.defined());
    }

    @Test
    void get() {
        assertNotNull(filter.get("string-equals"));
        assertNull(filter.get("unknown"));
    }

    @Test
    void set() {
        SimpleChangeHandler changeHandler = registerChangeHandler();
        filter.set("string-equals", "foo");
        assertTrue(changeHandler.notified);
    }

    @Test
    void setUnknown() {
        SimpleChangeHandler changeHandler = registerChangeHandler();
        filter.set("unknown", "foo");
        assertFalse(changeHandler.notified);
    }

    @Test
    void resetAll() {
        filter.set("string-equals", "foo");
        SimpleChangeHandler changeHandler = registerChangeHandler();
        filter.resetAll();
        assertTrue(changeHandler.notified);
    }

    @Test
    void resetAllAlreadyReset() {
        filter.set("string-equals", "foo");
        filter.reset("string-equals");
        SimpleChangeHandler changeHandler = registerChangeHandler();
        filter.resetAll();
        assertFalse(changeHandler.notified);
    }

    @Test
    void resetAllInitial() {
        SimpleChangeHandler changeHandler = registerChangeHandler();
        filter.resetAll();
        assertFalse(changeHandler.notified);
    }

    @Test
    void resetAttribute() {
        filter.set("string-equals", "foo");
        SimpleChangeHandler changeHandler = registerChangeHandler();
        filter.reset("string-equals");
        assertTrue(changeHandler.notified);
    }

    @Test
    void match() {
        filter.set("string-equals", "foo");
        assertTrue(filter.match("foo"));
        assertFalse(filter.match("bar"));
    }

    @Test
    void filter() {
        filter.add(new FilterAttribute<String, String>("contains", false,
                (city, value) -> city.toLowerCase().contains(value.toLowerCase())));
        filter.set("contains", "m");

        Map<String, Boolean> data = Map.of(
                "Munich", true,
                "Berlin", false,
                "Hamburg", true,
                "Dresden", false,
                "Leipzig", false,
                "Frankfurt", false
        );
        List<String> filtered = filter.filter(new ArrayList<>(data.keySet()),
                (city, match) -> assertEquals(data.get(city), match, city + " != " + match));
        assertEquals(2, filtered.size());
    }

    private SimpleChangeHandler registerChangeHandler() {
        SimpleChangeHandler changeHandler = new SimpleChangeHandler();
        filter.onChange(changeHandler);
        return changeHandler;
    }
}