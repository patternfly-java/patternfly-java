/*
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package elemental2.core;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, name = "Set", namespace = JsPackage.GLOBAL)
public class JsSet<VALUE> implements JsIterable<VALUE> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorIterableUnionType<VALUE> {
    @JsOverlay
    static JsSet.ConstructorIterableUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArray<VALUE> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default JsIterable<VALUE> asJsIterable() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }
  }

  @JsFunction
  public interface ForEachCallbackFn<VALUE> {
    Object onInvoke(VALUE p0, VALUE p1, JsSet<? extends VALUE> p2);
  }

  public int size;

  public JsSet() {}

  public JsSet(JsSet.ConstructorIterableUnionType<VALUE> iterable) {}

  public JsSet(JsArray<VALUE> iterable) {}

  public JsSet(JsIterable<VALUE> iterable) {}

  public JsSet(VALUE[] iterable) {}

  public native JsSet<VALUE> add(VALUE value);

  public native void clear();

  public native boolean delete(VALUE value);

  public native JsIteratorIterable<JsArray<VALUE>> entries();

  public native <THIS> Object forEach(
      JsSet.ForEachCallbackFn<? super VALUE> callback, THIS thisArg);

  public native Object forEach(JsSet.ForEachCallbackFn<? super VALUE> callback);

  public native boolean has(VALUE value);

  public native JsIteratorIterable<VALUE> keys();

  public native JsIteratorIterable<VALUE> values();
}
