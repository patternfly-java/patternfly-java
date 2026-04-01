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
import org.patternfly.style.TypedModifier;

/**
 * Placement enum for the deprecated Popper.js based components. Use {@link org.patternfly.style.Placement} for non-deprecated
 * components.
 *
 * @deprecated Use {@link org.patternfly.style.Placement} instead. This class exists only to support the deprecated Popper.js
 * based components.
 */
@Deprecated
public enum PopperPlacement implements TypedModifier {

    auto("auto", ""),

    top("top", Classes.modifier(Classes.top)),

    topStart("top-start", Classes.modifier(Classes.top) + "-left"),

    topEnd("top-end", Classes.modifier(Classes.top) + "-right"),

    bottom("bottom", Classes.modifier(Classes.bottom)),

    bottomStart("bottom-start", Classes.modifier(Classes.bottom) + "-left"),

    bottomEnd("bottom-end", Classes.modifier(Classes.bottom) + "-right"),

    left("left", Classes.modifier(Classes.left)),

    leftStart("left-start", Classes.modifier(Classes.left) + "-top"),

    leftEnd("left-end", Classes.modifier(Classes.left) + "-bottom"),

    right("right", Classes.modifier(Classes.right)),

    rightStart("right-start", Classes.modifier(Classes.right) + "-bottom"),

    rightEnd("right-end", Classes.modifier(Classes.right) + "-bottom");

    public static final String[] modifiers = Arrays.stream(values())
            .filter(p -> p != auto)
            .map(p -> p.modifier)
            .toArray(String[]::new);

    public static PopperPlacement of(String value) {
        for (PopperPlacement placement : values()) {
            if (placement.value.equals(value)) {
                return placement;
            }
        }
        return null;
    }

    private final String value;
    private final String modifier;

    PopperPlacement(String value, String modifier) {
        this.value = value;
        this.modifier = modifier;
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