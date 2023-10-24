package org.patternfly.popper;

import jsinterop.annotations.JsType;

import static jsinterop.annotations.JsPackage.GLOBAL;

@JsType(isNative = true, namespace = GLOBAL, name = "Object")
public class ModifierArguments {

    public State state;
    public String name;
}
