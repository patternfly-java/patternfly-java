package org.patternfly.component.skeleton;

import org.patternfly.style.Classes;

public enum Shape {

    circle("circle"),

    square("square");

    public final String modifier;


    Shape(String name) {
        this.modifier = Classes.modifier(name);
    }
}
