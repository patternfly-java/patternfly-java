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

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface DOMMatrixInit extends DOMMatrix2DInit {
  @JsOverlay
  static DOMMatrixInit create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  double getM13();

  @JsProperty
  double getM14();

  @JsProperty
  double getM23();

  @JsProperty
  double getM24();

  @JsProperty
  double getM31();

  @JsProperty
  double getM32();

  @JsProperty
  double getM33();

  @JsProperty
  double getM34();

  @JsProperty
  double getM43();

  @JsProperty
  double getM44();

  @JsProperty
  boolean isIs2D();

  @JsProperty
  void setIs2D(boolean is2D);

  @JsProperty
  void setM13(double m13);

  @JsProperty
  void setM14(double m14);

  @JsProperty
  void setM23(double m23);

  @JsProperty
  void setM24(double m24);

  @JsProperty
  void setM31(double m31);

  @JsProperty
  void setM32(double m32);

  @JsProperty
  void setM33(double m33);

  @JsProperty
  void setM34(double m34);

  @JsProperty
  void setM43(double m43);

  @JsProperty
  void setM44(double m44);
}
