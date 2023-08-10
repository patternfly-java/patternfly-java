package org.patternfly.resources;

public enum Brightness {

    light("light"),

    dark("dark");

    public final String modifier;

    Brightness(String variant) {
        this.modifier = CSS.modifier(variant);
    }

    public String opacity(int opacity) {
        return modifier + "-" + opacity;
    }
}
