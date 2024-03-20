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
package org.patternfly.popper;

import java.util.Arrays;

import org.patternfly.style.Classes;

import static org.patternfly.style.Classes.modifier;

public enum Placement {

    auto("auto", ""),

    top("top", modifier(Classes.top)),

    topStart("top-start", modifier(Classes.top) + "-left"),

    topEnd("top-end", modifier(Classes.top) + "-right"),

    bottom("bottom", modifier(Classes.bottom)),

    bottomStart("bottom-start", modifier(Classes.bottom) + "-left"),

    bottomEnd("bottom-end", modifier(Classes.bottom) + "-right"),

    left("left", modifier(Classes.left)),

    leftStart("left-start", modifier(Classes.left) + "-top"),

    leftEnd("left-end", modifier(Classes.left) + "-bottom"),

    right("right", modifier(Classes.right)),

    rightStart("right-start", modifier(Classes.right) + "-bottom"),

    rightEnd("right-end", modifier(Classes.right) + "-bottom");

    public static final String[] modifiers = Arrays.stream(values())
            .filter(p -> p != auto)
            .map(p -> p.modifier)
            .toArray(String[]::new);

    public static Placement fromValue(String value) {
        for (Placement placement : values()) {
            if (placement.value.equals(value)) {
                return placement;
            }
        }
        return null;
    }

    public final String value;
    public final String modifier;

    Placement(String value, String modifier) {
        this.value = value;
        this.modifier = modifier;
    }
}
