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
package org.patternfly.component.tooltip;

import org.patternfly.component.Popover;
import org.patternfly.component.Tooltip;
import org.patternfly.layout.Classes;

import static org.patternfly.layout.Classes.modifier;

/** Position used by {@link Popover} and {@link Tooltip}. */
public enum Position {

    auto(""),

    top(modifier(Classes.top)),

    topStart(modifier(Classes.top) + "-left"),

    topEnd(modifier(Classes.top) + "-right"),

    bottom(modifier(Classes.bottom)),

    bottomStart(modifier(Classes.bottom) + "-left"),

    bottomEnd(modifier(Classes.bottom) + "-right"),

    left(modifier(Classes.left)),

    leftStart(modifier(Classes.left) + "-top"),

    leftEnd(modifier(Classes.left) + "-bottom"),

    right(modifier(Classes.right)),

    rightStart(modifier(Classes.right) + "-top"),

    rightEnd(modifier(Classes.right) + "-bottom");

    public final String modifier;

    Position(String modifier) {
        this.modifier = modifier;
    }
}
