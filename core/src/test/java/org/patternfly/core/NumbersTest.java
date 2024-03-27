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
package org.patternfly.core;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class NumbersTest {

    @Test
    public void zero() {
        double value = 0.0, min = 0.0, max = 0.0;
        double result = Numbers.percentage(value, min, max);
        assertEquals(0.0, result);
    }

    @Test
    public void valueMax() {
        double value = 50.0, max = 100.0;
        double result = Numbers.percentage(value, max);
        assertEquals(50.0, result);
    }

    @Test
    public void valueMinMax() {
        double value = 75.0, min = 50.0, max = 150.0;
        double result = Numbers.percentage(value, min, max);
        assertEquals(25.0, result);
    }
}
