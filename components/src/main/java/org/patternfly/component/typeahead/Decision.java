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

/**
 * The outcome of a {@link RefreshStrategy} evaluation. Tells the typeahead controller what to do with the current input value:
 *
 * <ul>
 *     <li>{@link #refresh()} — re-query the server immediately</li>
 *     <li>{@link #debounce(int)} — re-query the server after a debounce timeout</li>
 *     <li>{@link #filter()} — filter existing items locally, no server call</li>
 *     <li>{@link #keep()} — do nothing, keep the current menu state as-is</li>
 * </ul>
 */
public class Decision {

    // ------------------------------------------------------ factory

    private static final Decision REFRESH = new Decision(Action.REFRESH, 0);
    private static final Decision FILTER = new Decision(Action.FILTER, 0);
    private static final Decision KEEP = new Decision(Action.KEEP, 0);

    /** Re-query the server immediately. */
    public static Decision refresh() {
        return REFRESH;
    }

    /** Re-query the server after the given debounce timeout. */
    public static Decision debounce(int ms) {
        return new Decision(Action.DEBOUNCE, ms);
    }

    /** Filter existing items locally; no server call. */
    public static Decision filter() {
        return FILTER;
    }

    /** Do nothing; keep the current menu state as-is. */
    public static Decision keep() {
        return KEEP;
    }

    // ------------------------------------------------------ instance

    public enum Action {
        REFRESH, DEBOUNCE, FILTER, KEEP
    }

    private final Action action;
    private final int debounceMs;

    private Decision(Action action, int debounceMs) {
        this.action = action;
        this.debounceMs = debounceMs;
    }

    // ------------------------------------------------------ api

    /** Returns the action to take. */
    public Action action() {
        return action;
    }

    /** Returns the debounce timeout in milliseconds. Only meaningful when action is {@link Action#DEBOUNCE}. */
    public int debounceMs() {
        return debounceMs;
    }
}
