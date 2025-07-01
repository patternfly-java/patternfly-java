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
package org.patternfly.component.icon;

import org.patternfly.style.Classes;
import org.patternfly.style.Size;
import org.patternfly.style.TypedModifier;

public enum IconSize implements TypedModifier {

    sm("sm"),

    md("md"),

    lg("lg"),

    xl("xl"),

    _2xl("2xl"),

    _3xl("3xl"),

    bodySm("body-sm"),

    bodyDefault("body-default"),

    bodyLg("body-lg"),

    headingSm("heading-sm"),

    headingLg("heading-lg"),

    headingMd("heading-md"),

    headingXl("heading-xl"),

    heading2xl("heading-2xl"),

    heading3xl("heading-3xl"),

    ;

    private final String value;
    private final String modifier;

    IconSize(String value) {
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

    Size asSize() {
        if (this == IconSize.sm || this == IconSize.bodySm || this == IconSize.headingSm) {
            return Size.sm;
        } else if (this == IconSize.md || this == IconSize.bodyDefault || this == IconSize.headingMd) {
            return Size.md;
        } else if (this == IconSize.lg || this == IconSize.bodyLg || this == IconSize.headingLg) {
            return Size.lg;
        } else if (this == IconSize.xl || this == IconSize.headingXl) {
            return Size.xl;
        } else if (this == IconSize._2xl || this == IconSize.heading2xl) {
            return Size._2xl;
        } else if (this == IconSize._3xl || this == IconSize.heading3xl) {
            return Size._3xl;
        }
        return Size.sm;
    }
}
