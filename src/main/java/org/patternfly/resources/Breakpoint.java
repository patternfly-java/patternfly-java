package org.patternfly.resources;

public enum Breakpoint {

    sm("sm"),

    md("md"),

    lg("lg"),

    xl("xl"),

    _2xl("2xl");

    public final String value;

    Breakpoint(String value) {
        this.value = value;
    }
}
