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
package org.patternfly.async;

import java.util.function.BiPredicate;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class ReloadStrategyTest {

    @Test
    void structuralChangeMinLengthAndDelimiter() {
        ReloadStrategy strategy = ReloadStrategy.structuralChange(5, '/');
        BiPredicate<String, String> predicate = strategy.predicate();
        assertNotNull(predicate);

        // crossing minLength threshold triggers reload
        assertTrue(predicate.test("tolk", "tolki"));
        // staying above minLength does not trigger
        assertFalse(predicate.test("tolki", "tolkie"));
        // crossing back below minLength does not trigger (only upward crossing)
        assertFalse(predicate.test("tolki", "tolk"));

        // delimiter count change triggers reload
        assertTrue(predicate.test("tolkien", "tolkien/"));
        assertTrue(predicate.test("tolkien/rings", "tolkien"));
        // same delimiter count does not trigger
        assertFalse(predicate.test("tolkien/ring", "tolkien/rings"));
    }

    @Test
    void structuralChangeMinLengthZero() {
        ReloadStrategy strategy = ReloadStrategy.structuralChange(0, '/');
        BiPredicate<String, String> predicate = strategy.predicate();

        // minLength=0 means the length threshold never fires
        assertFalse(predicate.test("", "a"));
        // but delimiter change still fires
        assertTrue(predicate.test("a", "a/"));
    }

    @Test
    void structuralChangeEmptyStrings() {
        ReloadStrategy strategy = ReloadStrategy.structuralChange(3, '/');
        BiPredicate<String, String> predicate = strategy.predicate();

        // empty to short: no reload
        assertFalse(predicate.test("", "ab"));
        // empty to at-threshold: reload
        assertTrue(predicate.test("", "abc"));
    }
}
