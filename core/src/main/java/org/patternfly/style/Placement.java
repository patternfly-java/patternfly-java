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

    top("top", Classes.modifier(Classes.top), Alignment.NONE),

    topStart("top-start", Classes.modifier(Classes.top) + "-left", Alignment.START),

    topEnd("top-end", Classes.modifier(Classes.top) + "-right", Alignment.END),

    bottom("bottom", Classes.modifier(Classes.bottom), Alignment.NONE),

    bottomStart("bottom-start", Classes.modifier(Classes.bottom) + "-left", Alignment.START),

    bottomEnd("bottom-end", Classes.modifier(Classes.bottom) + "-right", Alignment.END),

    left("left", Classes.modifier(Classes.left), Alignment.NONE),

    leftStart("left-start", Classes.modifier(Classes.left) + "-top", Alignment.START),

    leftEnd("left-end", Classes.modifier(Classes.left) + "-bottom", Alignment.END),

    right("right", Classes.modifier(Classes.right), Alignment.NONE),

    rightStart("right-start", Classes.modifier(Classes.right) + "-bottom", Alignment.START),

    rightEnd("right-end", Classes.modifier(Classes.right) + "-bottom", Alignment.END);

    private enum Alignment {NONE, START, END}

    private final String value;
    private final String modifier;
    private final Alignment alignment;

    Placement(String value, String modifier, Alignment alignment) {
        this.value = value;
        this.modifier = modifier;
        this.alignment = alignment;
    }

    @Override
    public String value() {
        return value;
    }

    @Override
    public String modifier() {
        return modifier;
    }

    /** Returns the base direction ({@code top}, {@code bottom}, {@code left}, or {@code right}) for this placement. */
    public Placement base() {
        return switch (this) {
            case topStart, topEnd -> top;
            case bottomStart, bottomEnd -> bottom;
            case leftStart, leftEnd -> left;
            case rightStart, rightEnd -> right;
            default -> this;
        };
    }

    /**
     * Returns a placement that combines the base direction of {@code newBase} with the alignment (none, start, end) of this
     * placement. For example, {@code topStart.withBase(bottom)} returns {@code bottomStart}.
     */
    public Placement withBase(Placement newBase) {
        Placement base = newBase.base();
        return switch (alignment) {
            case START -> {
                if (base == top) {yield topStart;}
                if (base == bottom) {yield bottomStart;}
                if (base == left) {yield leftStart;}
                yield rightStart;
            }
            case END -> {
                if (base == top) {yield topEnd;}
                if (base == bottom) {yield bottomEnd;}
                if (base == left) {yield leftEnd;}
                yield rightEnd;
            }
            default -> base;
        };
    }
}
