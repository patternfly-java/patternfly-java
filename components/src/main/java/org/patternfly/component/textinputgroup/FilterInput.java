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
 * A filter input is a special {@linkplain SearchInput search input} that adds a
 * {@linkplain org.patternfly.component.label.LabelGroup label group}.
 * <p>
 * Use {@link #noAddOnEnter()} to disable the default enter behavior. You can add additional enter handlers using
 * {@link #onEnter(ComponentHandler)}. To control the utilities visibility use {@link #showUtilitiesIf(BiFunction)}.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/text-input-group#with-filters">https://www.patternfly.org/components/text-input-group#with-filters</a>
 */
public class FilterInput extends BaseFilterInput<FilterInput> {

    // ------------------------------------------------------ factory

    public static FilterInput filterInput(String id) {
        return new FilterInput(id);
    }

    public static FilterInput filterInput(String id, String value) {
        return new FilterInput(id).value(value);
    }

    // ------------------------------------------------------ instance

    FilterInput(String id) {
        super(ComponentType.FilterInput, id);
    }

    // ------------------------------------------------------ builder

    @Override
    public FilterInput that() {
        return this;
    }
}
