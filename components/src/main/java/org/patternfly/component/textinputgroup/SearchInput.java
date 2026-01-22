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
package org.patternfly.component.textinputgroup;

import java.util.function.BiFunction;

import org.patternfly.component.ComponentType;
import org.patternfly.handler.ComponentHandler;

/**
 * A search input is a special {@linkplain TextInputGroup text input group} that adds a clear utility button. The clear button
 * is only visible if the input field is not empty. By default, the clear button clears the input field (w/o firing a change
 * event).
 * <p>
 * Use {@link #noDefaultOnClear()} to disable the default clear behavior. You can add additional clear handlers using
 * {@link #onClear(ComponentHandler)}. To control the utilities visibility use {@link #showUtilitiesIf(BiFunction)}.
 *
 * @see <a href= "https://www.patternfly.org/components/search-input/">https://www.patternfly.org/components/search-input/</a>
 */
public class SearchInput extends BaseSearchInput<SearchInput> {

    // ------------------------------------------------------ factory

    public static SearchInput searchInput(String id) {
        return new SearchInput(id);
    }

    public static SearchInput searchInput(String id, String value) {
        return new SearchInput(id).value(value);
    }

    // ------------------------------------------------------ instance

    SearchInput(String id) {
        super(ComponentType.SearchInput, id);
    }

    // ------------------------------------------------------ builder

    @Override
    public SearchInput that() {
        return this;
    }
}
