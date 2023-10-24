package org.patternfly.popper;

import elemental2.core.JsArray;
import jsinterop.annotations.JsType;

import static jsinterop.annotations.JsPackage.GLOBAL;

@JsType(isNative = true, namespace = GLOBAL, name = "Object")
public class Options {

    public String placement;
    public JsArray<Modifier> modifiers;
    public Strategy strategy;
    public FirstUpdateFn onFirstUpdate;
}
