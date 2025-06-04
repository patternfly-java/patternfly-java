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
