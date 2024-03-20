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
package org.patternfly.popper;

import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsType;

import static jsinterop.annotations.JsPackage.GLOBAL;

/**
 * Java API for Popper JS library.
 *
 * @see <a href="https://popper.js.org/">https://popper.js.org/</a>
 */
@JsType(isNative = true, name = "Popper", namespace = GLOBAL)
class PopperJs {

    @JsMethod
    static native PopperJs createPopper(HTMLElement trigger, HTMLElement popper, Options options);

    State state;

    native void destroy();

    native void setOptions(UpdateOptionsFn updateOptions);

    native Promise<State> update();
}
