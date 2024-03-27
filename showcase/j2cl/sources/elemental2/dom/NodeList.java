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
package elemental2.dom;

import elemental2.core.JsArray;
import elemental2.core.JsIterable;
import elemental2.core.JsIteratorIterable;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsArrayLike;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class NodeList<T> implements JsIterable<T>, JsArrayLike<T> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface EntriesJsIteratorIterableTypeParameterArrayUnionType<T> {
    @JsOverlay
    static NodeList.EntriesJsIteratorIterableTypeParameterArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Double asDouble() {
      return Js.cast(this);
    }

    @JsOverlay
    default T asT() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }
  }

  @JsFunction
  public interface ForEachCallbackFn<T> {
    Object onInvoke(T currentValue, int currentIndex, NodeList<T> listObj);
  }

  public int length;

  public native JsIteratorIterable<
          JsArray<NodeList.EntriesJsIteratorIterableTypeParameterArrayUnionType<T>>>
      entries();

  public native <S> void forEach(NodeList.ForEachCallbackFn<T> callback, S thisobj);

  public native void forEach(NodeList.ForEachCallbackFn<T> callback);

  public native T item(int index);

  public native JsIteratorIterable<Double> keys();

  public native JsIteratorIterable<T> values();
}
