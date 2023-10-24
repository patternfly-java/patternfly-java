package org.patternfly.popper;

import jsinterop.annotations.JsType;

import static jsinterop.annotations.JsPackage.GLOBAL;

@JsType(isNative = true, namespace = GLOBAL, name = "Object")
public class Modifier {

    public String name;
    public boolean enabled;
    public String phase;
    public String[] requires;
    public ModifierFn fn;
    public ModifierOptions options;
}
