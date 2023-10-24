package org.patternfly.popper;

public enum Placement {

    auto("auto"),

    top("top"),

    topStart("top-start"),

    topEnd("top-end"),

    bottom("bottom"),

    bottomStart("bottom-start"),

    bottomEnd("bottom-end"),

    left("left"),

    leftStart("left-start"),

    leftEnd("left-end"),

    right("right"),

    rightStart("right-start"),

    rightEnd("right-end");

    public final String value;

    Placement(String value) {
        this.value = value;
    }
}
