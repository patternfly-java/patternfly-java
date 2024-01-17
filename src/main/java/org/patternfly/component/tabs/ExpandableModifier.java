package org.patternfly.component.tabs;

import org.patternfly.style.Classes;
import org.patternfly.style.TypedModifier;

public enum ExpandableModifier implements TypedModifier {

    expandable("expandable"),

    nonExpandable("non-expandable");

    private final String value;
    private final String modifier;

    ExpandableModifier(String value) {
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
}
