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

/**
 * Defines when and how asynchronously loaded items should be reloaded in response to user input. Use one of the static factory
 * methods to choose a strategy:
 *
 * <ul>
 *     <li>{@link #everyInput(int)} — re-query the server on every input change (debounced). The server is responsible for
 *         filtering; no client-side filter is applied.</li>
 *     <li>{@link #structuralChange(BiPredicate)} — reload items when the predicate detects a structural change in the input.
 *         Between reloads, items are filtered locally.</li>
 * </ul>
 *
 * <p>If no strategy is set, the default behavior is to load items once and filter them locally.
 */
public class ReloadStrategy {

    private final int debounceMs;
    private final BiPredicate<String, String> predicate;

    private ReloadStrategy(int debounceMs, BiPredicate<String, String> predicate) {
        this.debounceMs = debounceMs;
        this.predicate = predicate;
    }

    /**
     * Creates a strategy that re-queries the server on every input change, debounced by the given timeout. The server is
     * responsible for filtering — no client-side filter is applied.
     *
     * @param debounceMs the debounce timeout in milliseconds; must be &gt; 0
     */
    public static ReloadStrategy everyInput(int debounceMs) {
        return new ReloadStrategy(debounceMs, null);
    }

    /**
     * Creates a strategy that reloads items when the predicate detects a structural change between the previous and current input
     * values. Between reloads, items are filtered locally using the configured filter.
     *
     * @param predicate receives (previousValue, currentValue), returns {@code true} to trigger a reload
     */
    public static ReloadStrategy structuralChange(BiPredicate<String, String> predicate) {
        return new ReloadStrategy(0, predicate);
    }

    /**
     * Convenience factory for a common structural-change pattern: reload when the input first reaches {@code minLength}
     * characters, and again whenever the number of {@code delimiter} characters changes. Between reloads, items are filtered
     * locally using the configured filter.
     *
     * @param minLength reload when input length crosses this threshold (previous &lt; minLength, current &gt;= minLength)
     * @param delimiter reload when the count of this character changes between previous and current input
     */
    public static ReloadStrategy structuralChange(int minLength, char delimiter) {
        return structuralChange((prev, curr) ->
                (prev.length() < minLength && curr.length() >= minLength) ||
                        countOccurrences(prev, delimiter) != countOccurrences(curr, delimiter));
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

    /** Returns the debounce timeout in milliseconds, or 0 if this is not a debounce strategy. */
    public int debounceMs() {
        return debounceMs;
    }

    /** Returns the predicate for structural change detection, or {@code null} if this is not a structural-change strategy. */
    public BiPredicate<String, String> predicate() {
        return predicate;
    }
}
