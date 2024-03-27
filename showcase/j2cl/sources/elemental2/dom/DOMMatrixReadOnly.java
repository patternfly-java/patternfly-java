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

import elemental2.core.Float32Array;
import elemental2.core.Float64Array;
import elemental2.core.JsArray;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DOMMatrixReadOnly implements DOMMatrixInit {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorInitUnionType {
    @JsOverlay
    static DOMMatrixReadOnly.ConstructorInitUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArray<Double> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public static native DOMMatrixReadOnly fromFloat32Array(Float32Array array32);

  public static native DOMMatrixReadOnly fromFloat64Array(Float64Array array64);

  public static native DOMMatrixReadOnly fromMatrix(DOMMatrixInit other);

  public double a;
  public double b;
  public double c;
  public double d;
  public double e;
  public double f;
  public boolean is2D;
  public boolean isIdentity;
  public double m11;
  public double m12;
  public double m13;
  public double m14;
  public double m21;
  public double m22;
  public double m23;
  public double m24;
  public double m31;
  public double m32;
  public double m33;
  public double m34;
  public double m41;
  public double m42;
  public double m43;
  public double m44;

  public DOMMatrixReadOnly(DOMMatrixReadOnly.ConstructorInitUnionType init) {}

  public DOMMatrixReadOnly(JsArray<Double> init) {}

  public DOMMatrixReadOnly(String init) {}

  public DOMMatrixReadOnly(double[] init) {}

  public native DOMMatrix flipX();

  public native DOMMatrix flipY();

  @JsProperty
  public native double getA();

  @JsProperty
  public native double getB();

  @JsProperty
  public native double getC();

  @JsProperty
  public native double getD();

  @JsProperty
  public native double getE();

  @JsProperty
  public native double getF();

  @JsProperty
  public native double getM11();

  @JsProperty
  public native double getM12();

  @JsProperty
  public native double getM13();

  @JsProperty
  public native double getM14();

  @JsProperty
  public native double getM21();

  @JsProperty
  public native double getM22();

  @JsProperty
  public native double getM23();

  @JsProperty
  public native double getM24();

  @JsProperty
  public native double getM31();

  @JsProperty
  public native double getM32();

  @JsProperty
  public native double getM33();

  @JsProperty
  public native double getM34();

  @JsProperty
  public native double getM41();

  @JsProperty
  public native double getM42();

  @JsProperty
  public native double getM43();

  @JsProperty
  public native double getM44();

  public native DOMMatrix inverse();

  @JsProperty
  public native boolean isIs2D();

  public native DOMMatrix multiply(DOMMatrixInit other);

  public native DOMMatrix rotate();

  public native DOMMatrix rotate(double rotX, double rotY, double rotZ);

  public native DOMMatrix rotate(double rotX, double rotY);

  public native DOMMatrix rotate(double rotX);

  public native DOMMatrix rotateAxisAngle();

  public native DOMMatrix rotateAxisAngle(double x, double y, double z, double angle);

  public native DOMMatrix rotateAxisAngle(double x, double y, double z);

  public native DOMMatrix rotateAxisAngle(double x, double y);

  public native DOMMatrix rotateAxisAngle(double x);

  public native DOMMatrix rotateFromVector();

  public native DOMMatrix rotateFromVector(double x, double y);

  public native DOMMatrix rotateFromVector(double x);

  public native DOMMatrix scale();

  public native DOMMatrix scale(
      double scaleX, double scaleY, double scaleZ, double originX, double originY, double originZ);

  public native DOMMatrix scale(
      double scaleX, double scaleY, double scaleZ, double originX, double originY);

  public native DOMMatrix scale(double scaleX, double scaleY, double scaleZ, double originX);

  public native DOMMatrix scale(double scaleX, double scaleY, double scaleZ);

  public native DOMMatrix scale(double scaleX, double scaleY);

  public native DOMMatrix scale(double scaleX);

  public native DOMMatrix scale3d();

  public native DOMMatrix scale3d(double scale, double originX, double originY, double originZ);

  public native DOMMatrix scale3d(double scale, double originX, double originY);

  public native DOMMatrix scale3d(double scale, double originX);

  public native DOMMatrix scale3d(double scale);

  public native DOMMatrix scaleNonUniform();

  public native DOMMatrix scaleNonUniform(double scaleX, double scaleY);

  public native DOMMatrix scaleNonUniform(double scaleX);

  @JsProperty
  public native void setA(double a);

  @JsProperty
  public native void setB(double b);

  @JsProperty
  public native void setC(double c);

  @JsProperty
  public native void setD(double d);

  @JsProperty
  public native void setE(double e);

  @JsProperty
  public native void setF(double f);

  @JsProperty
  public native void setIs2D(boolean is2D);

  @JsProperty
  public native void setM11(double m11);

  @JsProperty
  public native void setM12(double m12);

  @JsProperty
  public native void setM13(double m13);

  @JsProperty
  public native void setM14(double m14);

  @JsProperty
  public native void setM21(double m21);

  @JsProperty
  public native void setM22(double m22);

  @JsProperty
  public native void setM23(double m23);

  @JsProperty
  public native void setM24(double m24);

  @JsProperty
  public native void setM31(double m31);

  @JsProperty
  public native void setM32(double m32);

  @JsProperty
  public native void setM33(double m33);

  @JsProperty
  public native void setM34(double m34);

  @JsProperty
  public native void setM41(double m41);

  @JsProperty
  public native void setM42(double m42);

  @JsProperty
  public native void setM43(double m43);

  @JsProperty
  public native void setM44(double m44);

  public native DOMMatrix skewX();

  public native DOMMatrix skewX(double sx);

  public native DOMMatrix skewY();

  public native DOMMatrix skewY(double sy);

  public native Float32Array toFloat32Array();

  public native Float64Array toFloat64Array();

  public native DOMPoint transformPoint(DOMPointInit point);

  public native DOMMatrix translate();

  public native DOMMatrix translate(double tx, double ty, double tz);

  public native DOMMatrix translate(double tx, double ty);

  public native DOMMatrix translate(double tx);
}
