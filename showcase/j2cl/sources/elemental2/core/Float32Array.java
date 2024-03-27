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
public class Float32Array extends TypedArray {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorLengthUnionType {
    @JsOverlay
    static Float32Array.ConstructorLengthUnionType of(Object o) {
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
    static Float32Array.FromSourceUnionType of(Object o) {
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

  @JsOverlay public static final int BYTES_PER_ELEMENT = Float32Array__Constants.BYTES_PER_ELEMENT;

  public static native <S> Float32Array from(
      Float32Array.FromSourceUnionType source, Float32Array.FromMapFn mapFn, S thisArg);

  public static native Float32Array from(
      Float32Array.FromSourceUnionType source, Float32Array.FromMapFn mapFn);

  public static native Float32Array from(Float32Array.FromSourceUnionType source);

  @JsOverlay
  public static final <S> Float32Array from(
      JsArrayLike<Double> source, Float32Array.FromMapFn mapFn, S thisArg) {
    return from(Js.<Float32Array.FromSourceUnionType>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final Float32Array from(JsArrayLike<Double> source, Float32Array.FromMapFn mapFn) {
    return from(Js.<Float32Array.FromSourceUnionType>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final Float32Array from(JsArrayLike<Double> source) {
    return from(Js.<Float32Array.FromSourceUnionType>uncheckedCast(source));
  }

  @JsOverlay
  public static final <S> Float32Array from(
      JsIterable<Double> source, Float32Array.FromMapFn mapFn, S thisArg) {
    return from(Js.<Float32Array.FromSourceUnionType>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final Float32Array from(JsIterable<Double> source, Float32Array.FromMapFn mapFn) {
    return from(Js.<Float32Array.FromSourceUnionType>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final Float32Array from(JsIterable<Double> source) {
    return from(Js.<Float32Array.FromSourceUnionType>uncheckedCast(source));
  }

  @JsOverlay
  public static final <S> Float32Array from(
      String source, Float32Array.FromMapFn mapFn, S thisArg) {
    return from(Js.<Float32Array.FromSourceUnionType>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final Float32Array from(String source, Float32Array.FromMapFn mapFn) {
    return from(Js.<Float32Array.FromSourceUnionType>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final Float32Array from(String source) {
    return from(Js.<Float32Array.FromSourceUnionType>uncheckedCast(source));
  }

  @JsOverlay
  public static final <S> Float32Array from(
      double[] source, Float32Array.FromMapFn mapFn, S thisArg) {
    return from(Js.<JsArrayLike<Double>>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final Float32Array from(double[] source, Float32Array.FromMapFn mapFn) {
    return from(Js.<JsArrayLike<Double>>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final Float32Array from(double[] source) {
    return from(Js.<JsArrayLike<Double>>uncheckedCast(source));
  }

  public static native Float32Array of(double... var_args);

  public Float32Array(ArrayBuffer length, int byteOffset, int length0) {}

  public Float32Array(ArrayBuffer length, int byteOffset) {}

  public Float32Array(ArrayBuffer length) {}

  public Float32Array(ArrayBufferView length, int byteOffset, int length0) {}

  public Float32Array(ArrayBufferView length, int byteOffset) {}

  public Float32Array(ArrayBufferView length) {}

  public Float32Array(
      Float32Array.ConstructorLengthUnionType length, int byteOffset, int length0) {}

  public Float32Array(Float32Array.ConstructorLengthUnionType length, int byteOffset) {}

  public Float32Array(Float32Array.ConstructorLengthUnionType length) {}

  public Float32Array(JsArray<Double> length, int byteOffset, int length0) {}

  public Float32Array(JsArray<Double> length, int byteOffset) {}

  public Float32Array(JsArray<Double> length) {}

  public Float32Array(SharedArrayBuffer length, int byteOffset, int length0) {}

  public Float32Array(SharedArrayBuffer length, int byteOffset) {}

  public Float32Array(SharedArrayBuffer length) {}

  public Float32Array(double[] length, int byteOffset, int length0) {}

  public Float32Array(double[] length, int byteOffset) {}

  public Float32Array(double[] length) {}

  public Float32Array(int length, int byteOffset, int length0) {}

  public Float32Array(int length, int byteOffset) {}

  public Float32Array(int length) {}
}
