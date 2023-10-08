package org.patternfly.js;

import org.patternfly.core.Clipboard;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ExtendedNavigator {

    public Clipboard clipboard;
}
