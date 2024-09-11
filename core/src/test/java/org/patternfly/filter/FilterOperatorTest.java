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

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.patternfly.filter.FilterOperator.AND;
import static org.patternfly.filter.FilterOperator.OR;

public class FilterOperatorTest {

    @Test
    void and() {
        Filter<String> filter = new Filter<>(AND);
        addFilterAttributes(filter);

        filter.set("starts-with", "a");
        filter.set("ends-with", "b");
        assertFalse(filter.match("abc"));

        filter.set("ends-with", "c");
        assertTrue(filter.match("abc"));
    }

    @Test
    void or() {
        Filter<String> filter = new Filter<>(OR);
        addFilterAttributes(filter);

        filter.set("starts-with", "a");
        filter.set("ends-with", "b");
        assertTrue(filter.match("abc"));

        filter.set("ends-with", "c");
        assertTrue(filter.match("abc"));
    }

    private void addFilterAttributes(Filter<String> filter) {
        filter.add(new FilterAttribute<String, String>("starts-with", false, String::startsWith));
        filter.add(new FilterAttribute<String, String>("ends-with", false, String::endsWith));
    }
}
