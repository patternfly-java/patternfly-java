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
public interface DOMMatrix2DInit {
  @JsOverlay
  static DOMMatrix2DInit create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  double getA();

  @JsProperty
  double getB();

  @JsProperty
  double getC();

  @JsProperty
  double getD();

  @JsProperty
  double getE();

  @JsProperty
  double getF();

  @JsProperty
  double getM11();

  @JsProperty
  double getM12();

  @JsProperty
  double getM21();

  @JsProperty
  double getM22();

  @JsProperty
  double getM41();

  @JsProperty
  double getM42();

  @JsProperty
  void setA(double a);

  @JsProperty
  void setB(double b);

  @JsProperty
  void setC(double c);

  @JsProperty
  void setD(double d);

  @JsProperty
  void setE(double e);

  @JsProperty
  void setF(double f);

  @JsProperty
  void setM11(double m11);

  @JsProperty
  void setM12(double m12);

  @JsProperty
  void setM21(double m21);

  @JsProperty
  void setM22(double m22);

  @JsProperty
  void setM41(double m41);

  @JsProperty
  void setM42(double m42);
}
