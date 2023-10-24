package org.patternfly.popper;

import jsinterop.annotations.JsType;

import static jsinterop.annotations.JsPackage.GLOBAL;

@JsType(isNative = true, namespace = GLOBAL, name = "Object")
public class State {

    public StateElements elements;
    public String placement;
}
