package org.patternfly.popper;

import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsType;

import static jsinterop.annotations.JsPackage.GLOBAL;

/**
 * Wrapper around the Popper JS library.
 *
 * @see <a href="https://popper.js.org/">https://popper.js.org/</a>
 */
@JsType(isNative = true)
public class Popper {

    @JsMethod(namespace = GLOBAL)
    public static native Popper createPopper(HTMLElement reference, HTMLElement floating, Options options);

    public State state;

    public native void destroy();

    public native void forceUpdate();

    public native Promise<State> update();

    public native Promise<State> setOptions(Options options);
}
