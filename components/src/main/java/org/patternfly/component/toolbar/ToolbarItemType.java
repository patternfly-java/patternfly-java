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
package org.patternfly.component.toolbar;

import org.patternfly.style.Classes;
import org.patternfly.style.TypedModifier;

public enum ToolbarItemType implements TypedModifier {

    bulkSelect("bulk-select"),

    overflowMenu("overflow-menu"),

    pagination("pagination"),

    searchFilter("search-filter"),

    label("label"),

    chipGroup("chip-group"),

    expandAll("expand-all");

    private final String value;
    private final String modifier;

    ToolbarItemType(String value) {
        this.value = value;
        this.modifier = Classes.modifier(value);
    }

    @Override
    public String value() {
        return value;
    }

    @Override
    public String modifier() {
        return modifier;
    }
}
