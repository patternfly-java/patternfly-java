package org.patternfly.resources;

public enum Sticky {

    top("sticky-top"),

    bottom("sticky-bottom");

    public final String value;
    public final String modifier;

    Sticky(String value) {
        this.value = value;
        this.modifier = CSS.modifier(value);
    }

    public String onHeight(Breakpoint breakpoint) {
        return CSS.modifier(value, breakpoint) + "-height";
    }
}
