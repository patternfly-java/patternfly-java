package org.patternfly.popper;

import elemental2.dom.HTMLElement;
import jsinterop.annotations.JsType;

import static jsinterop.annotations.JsPackage.GLOBAL;

@JsType(isNative = true, namespace = GLOBAL, name = "Object")
public class StateElements {

    public HTMLElement reference;
    public HTMLElement popper;
    public HTMLElement arrow;
}
