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

import org.patternfly.component.ComponentType;

/**
 * A text input group is a more flexible composable version of a text input. It enables consumers of PatternFly to build custom
 * inputs for filtering and similar use cases by placing elements like icons, chips groups and buttons within a text input.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/text-input-group">https://www.patternfly.org/components/text-input-group</a>
 */
public class TextInputGroup extends BaseTextInputGroup<TextInputGroup> {

    // ------------------------------------------------------ factory

    public static TextInputGroup textInputGroup(String id) {
        return new TextInputGroup(id);
    }

    public static TextInputGroup textInputGroup(String id, String value) {
        return new TextInputGroup(id).value(value);
    }

    // ------------------------------------------------------ instance

    TextInputGroup(String id) {
        super(ComponentType.TextInputGroup, id);
    }

    // ------------------------------------------------------ builder

    @Override
    public TextInputGroup that() {
        return this;
    }
}
