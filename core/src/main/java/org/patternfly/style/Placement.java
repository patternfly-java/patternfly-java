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
package org.patternfly.style;

public enum Placement implements TypedModifier {

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

    private final String value;
    private final String modifier;

    Placement(String value, String modifier) {
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
