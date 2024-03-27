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
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DOMMatrix extends DOMMatrixReadOnly {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorInitUnionType {
    @JsOverlay
    static DOMMatrix.ConstructorInitUnionType of(Object o) {
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

  public static native DOMMatrix fromFloat32Array(Float32Array array32);

  public static native DOMMatrix fromFloat64Array(Float64Array array64);

  public static native DOMMatrix fromMatrix(DOMMatrixInit other);

  public DOMMatrix(DOMMatrix.ConstructorInitUnionType init) {
    // This super call is here only for the code to compile; it is never executed.
    super((DOMMatrixReadOnly.ConstructorInitUnionType) null);
  }

  public DOMMatrix(JsArray<Double> init) {
    // This super call is here only for the code to compile; it is never executed.
    super((DOMMatrixReadOnly.ConstructorInitUnionType) null);
  }

  public DOMMatrix(String init) {
    // This super call is here only for the code to compile; it is never executed.
    super((DOMMatrixReadOnly.ConstructorInitUnionType) null);
  }

  public DOMMatrix(double[] init) {
    // This super call is here only for the code to compile; it is never executed.
    super((DOMMatrixReadOnly.ConstructorInitUnionType) null);
  }

  public native DOMMatrix invertSelf();

  public native DOMMatrix multiplySelf(DOMMatrixInit other);

  public native DOMMatrix preMultiplySelf(DOMMatrixInit other);

  public native DOMMatrix rotateAxisAngleSelf();

  public native DOMMatrix rotateAxisAngleSelf(double x, double y, double z, double angle);

  public native DOMMatrix rotateAxisAngleSelf(double x, double y, double z);

  public native DOMMatrix rotateAxisAngleSelf(double x, double y);

  public native DOMMatrix rotateAxisAngleSelf(double x);

  public native DOMMatrix rotateFromVectorSelf();

  public native DOMMatrix rotateFromVectorSelf(double x, double y);

  public native DOMMatrix rotateFromVectorSelf(double x);

  public native DOMMatrix rotateSelf();

  public native DOMMatrix rotateSelf(double rotX, double rotY, double rotZ);

  public native DOMMatrix rotateSelf(double rotX, double rotY);

  public native DOMMatrix rotateSelf(double rotX);

  public native DOMMatrix scale3dSelf();

  public native DOMMatrix scale3dSelf(double scale, double originX, double originY, double originZ);

  public native DOMMatrix scale3dSelf(double scale, double originX, double originY);

  public native DOMMatrix scale3dSelf(double scale, double originX);

  public native DOMMatrix scale3dSelf(double scale);

  public native DOMMatrix scaleSelf();

  public native DOMMatrix scaleSelf(
      double scaleX, double scaleY, double scaleZ, double originX, double originY, double originZ);

  public native DOMMatrix scaleSelf(
      double scaleX, double scaleY, double scaleZ, double originX, double originY);

  public native DOMMatrix scaleSelf(double scaleX, double scaleY, double scaleZ, double originX);

  public native DOMMatrix scaleSelf(double scaleX, double scaleY, double scaleZ);

  public native DOMMatrix scaleSelf(double scaleX, double scaleY);

  public native DOMMatrix scaleSelf(double scaleX);

  public native DOMMatrix skewXSelf();

  public native DOMMatrix skewXSelf(double sx);

  public native DOMMatrix skewYSelf();

  public native DOMMatrix skewYSelf(double sy);

  public native DOMMatrix translateSelf();

  public native DOMMatrix translateSelf(double tx, double ty, double tz);

  public native DOMMatrix translateSelf(double tx, double ty);

  public native DOMMatrix translateSelf(double tx);
}
