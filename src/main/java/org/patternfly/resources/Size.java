package org.patternfly.resources;

public enum Size {

    sm("sm"),

    md("md"),

    lg("lg"),

    xl("xl"),

    _2xl("2xl"),

    _3xl("3xl"),

    _4xl("4xl");

    public final String value;
    public final String modifier;

    Size(String value) {
        this.value = value;
        this.modifier = CSS.modifier(value);
    }
}
