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
import jsinterop.base.JsArrayLike;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Uint8ClampedArray extends TypedArray {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorLengthUnionType {
    @JsOverlay
    static Uint8ClampedArray.ConstructorLengthUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ArrayBuffer asArrayBuffer() {
      return Js.cast(this);
    }

    @JsOverlay
    default ArrayBufferView asArrayBufferView() {
      return Js.cast(this);
    }

    @JsOverlay
    default int asInt() {
      return Js.asInt(this);
    }

    @JsOverlay
    default JsArray<Double> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default SharedArrayBuffer asSharedArrayBuffer() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isArrayBuffer() {
      return (Object) this instanceof ArrayBuffer;
    }

    @JsOverlay
    default boolean isArrayBufferView() {
      return (Object) this instanceof ArrayBufferView;
    }

    @JsOverlay
    default boolean isInt() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isSharedArrayBuffer() {
      return (Object) this instanceof SharedArrayBuffer;
    }
  }

  @JsFunction
  public interface FromMapFn {
    double onInvoke(Object element, int index);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface FromSourceUnionType {
    @JsOverlay
    static Uint8ClampedArray.FromSourceUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArrayLike<Double> asJsArrayLike() {
      return Js.cast(this);
    }

    @JsOverlay
    default JsIterable<Double> asJsIterable() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsOverlay
  public static final int BYTES_PER_ELEMENT = Uint8ClampedArray__Constants.BYTES_PER_ELEMENT;

  public static native <S> Uint8ClampedArray from(
      Uint8ClampedArray.FromSourceUnionType source, Uint8ClampedArray.FromMapFn mapFn, S thisArg);

  public static native Uint8ClampedArray from(
      Uint8ClampedArray.FromSourceUnionType source, Uint8ClampedArray.FromMapFn mapFn);

  public static native Uint8ClampedArray from(Uint8ClampedArray.FromSourceUnionType source);

  @JsOverlay
  public static final <S> Uint8ClampedArray from(
      JsArrayLike<Double> source, Uint8ClampedArray.FromMapFn mapFn, S thisArg) {
    return from(Js.<Uint8ClampedArray.FromSourceUnionType>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final Uint8ClampedArray from(
      JsArrayLike<Double> source, Uint8ClampedArray.FromMapFn mapFn) {
    return from(Js.<Uint8ClampedArray.FromSourceUnionType>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final Uint8ClampedArray from(JsArrayLike<Double> source) {
    return from(Js.<Uint8ClampedArray.FromSourceUnionType>uncheckedCast(source));
  }

  @JsOverlay
  public static final <S> Uint8ClampedArray from(
      JsIterable<Double> source, Uint8ClampedArray.FromMapFn mapFn, S thisArg) {
    return from(Js.<Uint8ClampedArray.FromSourceUnionType>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final Uint8ClampedArray from(
      JsIterable<Double> source, Uint8ClampedArray.FromMapFn mapFn) {
    return from(Js.<Uint8ClampedArray.FromSourceUnionType>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final Uint8ClampedArray from(JsIterable<Double> source) {
    return from(Js.<Uint8ClampedArray.FromSourceUnionType>uncheckedCast(source));
  }

  @JsOverlay
  public static final <S> Uint8ClampedArray from(
      String source, Uint8ClampedArray.FromMapFn mapFn, S thisArg) {
    return from(Js.<Uint8ClampedArray.FromSourceUnionType>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final Uint8ClampedArray from(String source, Uint8ClampedArray.FromMapFn mapFn) {
    return from(Js.<Uint8ClampedArray.FromSourceUnionType>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final Uint8ClampedArray from(String source) {
    return from(Js.<Uint8ClampedArray.FromSourceUnionType>uncheckedCast(source));
  }

  @JsOverlay
  public static final <S> Uint8ClampedArray from(
      double[] source, Uint8ClampedArray.FromMapFn mapFn, S thisArg) {
    return from(Js.<JsArrayLike<Double>>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final Uint8ClampedArray from(double[] source, Uint8ClampedArray.FromMapFn mapFn) {
    return from(Js.<JsArrayLike<Double>>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final Uint8ClampedArray from(double[] source) {
    return from(Js.<JsArrayLike<Double>>uncheckedCast(source));
  }

  public static native Uint8ClampedArray of(double... var_args);

  public Uint8ClampedArray(ArrayBuffer length, int byteOffset, int length0) {}

  public Uint8ClampedArray(ArrayBuffer length, int byteOffset) {}

  public Uint8ClampedArray(ArrayBuffer length) {}

  public Uint8ClampedArray(ArrayBufferView length, int byteOffset, int length0) {}

  public Uint8ClampedArray(ArrayBufferView length, int byteOffset) {}

  public Uint8ClampedArray(ArrayBufferView length) {}

  public Uint8ClampedArray(
      Uint8ClampedArray.ConstructorLengthUnionType length, int byteOffset, int length0) {}

  public Uint8ClampedArray(Uint8ClampedArray.ConstructorLengthUnionType length, int byteOffset) {}

  public Uint8ClampedArray(Uint8ClampedArray.ConstructorLengthUnionType length) {}

  public Uint8ClampedArray(JsArray<Double> length, int byteOffset, int length0) {}

  public Uint8ClampedArray(JsArray<Double> length, int byteOffset) {}

  public Uint8ClampedArray(JsArray<Double> length) {}

  public Uint8ClampedArray(SharedArrayBuffer length, int byteOffset, int length0) {}

  public Uint8ClampedArray(SharedArrayBuffer length, int byteOffset) {}

  public Uint8ClampedArray(SharedArrayBuffer length) {}

  public Uint8ClampedArray(double[] length, int byteOffset, int length0) {}

  public Uint8ClampedArray(double[] length, int byteOffset) {}

  public Uint8ClampedArray(double[] length) {}

  public Uint8ClampedArray(int length, int byteOffset, int length0) {}

  public Uint8ClampedArray(int length, int byteOffset) {}

  public Uint8ClampedArray(int length) {}
}
