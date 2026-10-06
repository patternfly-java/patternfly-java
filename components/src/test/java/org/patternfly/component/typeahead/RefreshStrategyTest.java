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
package org.patternfly.component.typeahead;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.patternfly.component.typeahead.Decision.Action.DEBOUNCE;
import static org.patternfly.component.typeahead.Decision.Action.FILTER;
import static org.patternfly.component.typeahead.Decision.Action.KEEP;
import static org.patternfly.component.typeahead.Decision.Action.REFRESH;

public class RefreshStrategyTest {

    @Test
    void everyInputAlwaysDebounces() {
        RefreshStrategy strategy = RefreshStrategy.everyInput(300);
        Decision decision = strategy.evaluate("foo", "foob");
        assertEquals(DEBOUNCE, decision.action());
        assertEquals(300, decision.debounceMs());
    }

    @Test
    void structuralChangeMinLengthAndDelimiter() {
        RefreshStrategy strategy = RefreshStrategy.structuralChange(5, '/');

        // crossing minLength threshold triggers refresh
        assertEquals(REFRESH, strategy.evaluate("tolk", "tolki").action());
        // staying above minLength filters locally
        assertEquals(FILTER, strategy.evaluate("tolki", "tolkie").action());
        // crossing back below minLength filters locally (only upward crossing)
        assertEquals(FILTER, strategy.evaluate("tolki", "tolk").action());

        // delimiter count change triggers refresh
        assertEquals(REFRESH, strategy.evaluate("tolkien", "tolkien/").action());
        assertEquals(REFRESH, strategy.evaluate("tolkien/rings", "tolkien").action());
        // same delimiter count filters locally
        assertEquals(FILTER, strategy.evaluate("tolkien/ring", "tolkien/rings").action());
    }

    @Test
    void structuralChangeMinLengthZero() {
        RefreshStrategy strategy = RefreshStrategy.structuralChange(0, '/');

        // minLength=0 means the length threshold never fires
        assertEquals(FILTER, strategy.evaluate("", "a").action());
        // but delimiter change still fires
        assertEquals(REFRESH, strategy.evaluate("a", "a/").action());
    }

    @Test
    void structuralChangeEmptyStrings() {
        RefreshStrategy strategy = RefreshStrategy.structuralChange(3, '/');

        // empty to short: no refresh
        assertEquals(FILTER, strategy.evaluate("", "ab").action());
        // empty to at-threshold: refresh
        assertEquals(REFRESH, strategy.evaluate("", "abc").action());
    }

    @Test
    void customValueDrivenStrategy() {
        RefreshStrategy strategy = (prev, curr) -> curr.startsWith("/")
                ? Decision.debounce(300)
                : Decision.filter();

        assertEquals(DEBOUNCE, strategy.evaluate("", "/foo").action());
        assertEquals(FILTER, strategy.evaluate("", "foo").action());
        assertEquals(DEBOUNCE, strategy.evaluate("/fo", "/foo").action());
    }

    @Test
    void keepDecision() {
        RefreshStrategy strategy = (prev, curr) -> curr.length() == 1
                ? Decision.keep()
                : Decision.filter();

        assertEquals(KEEP, strategy.evaluate("", "a").action());
        assertEquals(FILTER, strategy.evaluate("a", "ab").action());
    }

    @Test
    void composeSelectionDefaultReturnsItemText() {
        RefreshStrategy strategy = RefreshStrategy.everyInput(300);
        assertEquals("MacBook", strategy.composeSelection("lapt", "MacBook"));
    }

    @Test
    void composeSelectionWithDelimiter() {
        RefreshStrategy strategy = RefreshStrategy.structuralChange(3, '/');

        assertEquals("MacBook", strategy.composeSelection("lapt", "MacBook"));
        assertEquals("laptops/MacBook", strategy.composeSelection("laptops/", "MacBook"));
        assertEquals("laptops/MacBook", strategy.composeSelection("laptops/mac", "MacBook"));
    }

    @Test
    void composeSelectionCustomStrategy() {
        RefreshStrategy strategy = new RefreshStrategy() {
            @Override
            public Decision evaluate(String previousValue, String currentValue) {
                return Decision.filter();
            }

            @Override
            public String composeSelection(String currentValue, String itemText) {
                int slashPos = currentValue.lastIndexOf('/');
                int equalsPos = currentValue.lastIndexOf('=');
                int pos = Math.max(slashPos, equalsPos);
                if (pos >= 0) {
                    return currentValue.substring(0, pos + 1) + itemText;
                }
                return itemText;
            }
        };

        assertEquals("subsystem=datasource", strategy.composeSelection("sub", "subsystem=datasource"));
        assertEquals("/subsystem=datasource/data-source=ExampleDS",
                strategy.composeSelection("/subsystem=datasource/data-source=", "ExampleDS"));
    }
}
