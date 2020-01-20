package org.patternfly.components;

import jsinterop.annotations.JsType;

@JsType(isNative = true)
class Tippy {

    public static native Tippy tippy(String selector);

    public native void show();

    public native void hide();
}
