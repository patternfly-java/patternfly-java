/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.thirdparty.popper;

import elemental2.dom.CSSProperties.OpacityUnionType;
import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsType;

import static jsinterop.annotations.JsPackage.GLOBAL;
import static org.jboss.elemento.Elements.setVisible;

/**
 * Wrapper around the Popper JS library.
 *
 * @see <a href="https://popper.js.org/">https://popper.js.org/</a>
 */
@JsType(isNative = true)
public class Popper {

    @JsMethod(namespace = GLOBAL)
    public static native Popper createPopper(HTMLElement trigger, HTMLElement popper, Options options);

    public State state;

    @JsOverlay
    public final void show() {
        if (state.elements != null && state.elements.popper != null) {
            setVisible(state.elements.popper, true);
            update().then(__ -> {
                state.elements.popper.style.opacity = OpacityUnionType.of(1);
                return null;
            });

        }
    }

    // hide() is too specific to have a general purpose implementation here

    public native void destroy();

    public native Promise<State> update();
}
