package org.patternfly.core;

import elemental2.promise.Promise;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Clipboard {

    public native Promise<String> readText();

    public native Promise<Void> writeText(String text);
}
