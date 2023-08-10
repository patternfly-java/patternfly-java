package org.patternfly.resources;

public enum Alignment {

    center("center");

    public final String modifier;

    Alignment(String value) {
        this.modifier = CSS.modifier(value);
    }
}
