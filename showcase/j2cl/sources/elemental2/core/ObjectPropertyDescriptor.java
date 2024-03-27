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
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface ObjectPropertyDescriptor<THIS> {
  @JsFunction
  public interface GetFn {
    Object onInvoke();
  }

  @JsFunction
  public interface SetFn {
    void onInvoke(Object p0);
  }

  @JsOverlay
  static ObjectPropertyDescriptor create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  ObjectPropertyDescriptor.GetFn getGet();

  @JsProperty
  ObjectPropertyDescriptor.SetFn getSet();

  @JsProperty
  Object getValue();

  @JsProperty
  boolean isConfigurable();

  @JsProperty
  boolean isEnumerable();

  @JsProperty
  boolean isWritable();

  @JsProperty
  void setConfigurable(boolean configurable);

  @JsProperty
  void setEnumerable(boolean enumerable);

  @JsProperty
  void setGet(ObjectPropertyDescriptor.GetFn get);

  @JsProperty
  void setSet(ObjectPropertyDescriptor.SetFn set);

  @JsProperty
  void setValue(Object value);

  @JsProperty
  void setWritable(boolean writable);
}
