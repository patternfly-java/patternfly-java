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

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, name = "WeakMap", namespace = JsPackage.GLOBAL)
public class JsWeakMap<KEY, VALUE> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE> {
    @JsOverlay
    static JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default KEY asKEY() {
      return Js.cast(this);
    }

    @JsOverlay
    default VALUE asVALUE() {
      return Js.cast(this);
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorIterableUnionType<KEY, VALUE> {
    @JsOverlay
    static JsWeakMap.ConstructorIterableUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArray<
            JsArray<JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE>>>
        asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default JsIterable<
            JsArray<JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE>>>
        asJsIterable() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }
  }

  public JsWeakMap() {}

  public JsWeakMap(
      JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE>[][]
          iterable) {}

  public JsWeakMap(JsWeakMap.ConstructorIterableUnionType<KEY, VALUE> iterable) {}

  public JsWeakMap(
      JsArray<
              JsArray<
                  JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE>>>
          iterable) {}

  public JsWeakMap(
      JsIterable<
              JsArray<
                  JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE>>>
          iterable) {}

  public native void clear();

  public native boolean delete(KEY key);

  public native VALUE get(KEY key);

  public native boolean has(KEY key);

  public native JsWeakMap<KEY, VALUE> set(KEY key, VALUE value);
}
