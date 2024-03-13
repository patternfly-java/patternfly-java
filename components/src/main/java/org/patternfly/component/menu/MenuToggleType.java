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
package org.patternfly.component.menu;

import org.patternfly.style.Classes;

import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.splitButton;
import static org.patternfly.style.Classes.text;

public enum MenuToggleType {

    default_(""),

    plain(modifier(Classes.plain)),

    plainText(modifier(Classes.plain) + " " + modifier(text)),

    split(modifier(splitButton)),

    typeahead(modifier(Classes.typeahead));

    public final String modifier;

    MenuToggleType(String modifier) {
        this.modifier = modifier;
    }
}
