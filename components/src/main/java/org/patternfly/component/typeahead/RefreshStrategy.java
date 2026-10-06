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

import java.util.function.BiPredicate;

/**
 * Decides what to do with a typeahead input value. Given the previous and current input values, returns a {@link Decision}
 * telling the controller whether to re-query the server, debounce, or filter locally.
 *
 * <p>Use one of the static convenience factories for common patterns, or implement the interface directly for custom
 * value-driven logic:
 *
 * <ul>
 *     <li>{@link #everyInput(int)} — debounce every input change; the server does the filtering</li>
 *     <li>{@link #structuralChange(BiPredicate)} — refresh when the predicate detects a structural change; filter locally
 *         between refreshes</li>
 *     <li>{@link #structuralChange(int, char)} — refresh on length threshold or delimiter count change</li>
 * </ul>
 *
 * <p>For value-driven strategy switching:
 * <pre>
 * refreshOn((prev, curr) -&gt; curr.startsWith("/")
 *     ? Decision.debounce(300)
 *     : myPredicate.test(prev, curr)
 *         ? Decision.refresh()
 *         : Decision.filter());
 * </pre>
 */
@FunctionalInterface
public interface RefreshStrategy {

    /**
     * Evaluates the input transition and returns the appropriate {@link Decision}.
     *
     * @param previousValue the input value before the change
     * @param currentValue  the input value after the change
     * @return the decision for how to handle the current input
     */
    Decision evaluate(String previousValue, String currentValue);

    /**
     * Composes the new input value when a menu item is selected. The default implementation returns the item text as-is.
     * Strategies that understand hierarchical input (e.g., delimiter-based) override this to preserve the prefix.
     *
     * @param currentValue the current input value at the time of selection
     * @param itemText     the text of the selected menu item
     * @return the composed value to set in the input field
     */
    default String composeSelection(String currentValue, String itemText) {
        return itemText;
    }

    /**
     * Creates a strategy that debounces every input change by the given timeout. The server is responsible for filtering — no
     * client-side filter is applied.
     *
     * @param debounceMs the debounce timeout in milliseconds; must be &gt; 0
     */
    static RefreshStrategy everyInput(int debounceMs) {
        return (prev, curr) -> Decision.debounce(debounceMs);
    }

    /**
     * Creates a strategy that refreshes items when the predicate detects a structural change between the previous and current
     * input values. Between refreshes, items are filtered locally using the configured filter.
     *
     * @param predicate receives (previousValue, currentValue), returns {@code true} to trigger a refresh
     */
    static RefreshStrategy structuralChange(BiPredicate<String, String> predicate) {
        return (prev, curr) -> predicate.test(prev, curr) ? Decision.refresh() : Decision.filter();
    }

    /**
     * Convenience factory for a common structural-change pattern: refresh when the input first reaches {@code minLength}
     * characters, and again whenever the number of {@code delimiter} characters changes. Between refreshes, items are filtered
     * locally using the configured filter.
     * <p>
     * The returned strategy also overrides {@link #composeSelection(String, String)} to preserve the prefix up to and including
     * the last delimiter when a menu item is selected.
     *
     * @param minLength refresh when input length first reaches or exceeds this threshold (previous &lt; minLength, current
     *                  &gt;= minLength); deleting text back below the threshold does not trigger a refresh
     * @param delimiter refresh when the count of this character changes between previous and current input
     */
    static RefreshStrategy structuralChange(int minLength, char delimiter) {
        return new RefreshStrategy() {
            @Override
            public Decision evaluate(String previousValue, String currentValue) {
                boolean thresholdCrossed = previousValue.length() < minLength && currentValue.length() >= minLength;
                boolean delimiterCountChanged = countOccurrences(previousValue, delimiter) !=
                        countOccurrences(currentValue, delimiter);
                return thresholdCrossed || delimiterCountChanged ? Decision.refresh() : Decision.filter();
            }

            @Override
            public String composeSelection(String currentValue, String itemText) {
                int pos = currentValue.lastIndexOf(delimiter);
                if (pos >= 0) {
                    return currentValue.substring(0, pos + 1) + itemText;
                }
                return itemText;
            }
        };
    }

    private static int countOccurrences(String s, char c) {
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == c) {
                count++;
            }
        }
        return count;
    }
}
