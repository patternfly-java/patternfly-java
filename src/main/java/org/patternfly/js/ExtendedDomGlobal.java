package org.patternfly.js;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, name = "goog.global", namespace = JsPackage.GLOBAL)
public class ExtendedDomGlobal {

    @JsOverlay public static final ExtendedNavigator navigator = ExtendedDomGlobal__Constants.navigator;
}
