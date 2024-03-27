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
public class Int8Array extends TypedArray {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorLengthUnionType {
    @JsOverlay
    static Int8Array.ConstructorLengthUnionType of(Object o) {
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
    static Int8Array.FromSourceUnionType of(Object o) {
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

  @JsOverlay public static final int BYTES_PER_ELEMENT = Int8Array__Constants.BYTES_PER_ELEMENT;

  public static native <S> Int8Array from(
      Int8Array.FromSourceUnionType source, Int8Array.FromMapFn mapFn, S thisArg);

  public static native Int8Array from(
      Int8Array.FromSourceUnionType source, Int8Array.FromMapFn mapFn);

  public static native Int8Array from(Int8Array.FromSourceUnionType source);

  @JsOverlay
  public static final <S> Int8Array from(
      JsArrayLike<Double> source, Int8Array.FromMapFn mapFn, S thisArg) {
    return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final Int8Array from(JsArrayLike<Double> source, Int8Array.FromMapFn mapFn) {
    return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final Int8Array from(JsArrayLike<Double> source) {
    return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source));
  }

  @JsOverlay
  public static final <S> Int8Array from(
      JsIterable<Double> source, Int8Array.FromMapFn mapFn, S thisArg) {
    return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final Int8Array from(JsIterable<Double> source, Int8Array.FromMapFn mapFn) {
    return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final Int8Array from(JsIterable<Double> source) {
    return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source));
  }

  @JsOverlay
  public static final <S> Int8Array from(String source, Int8Array.FromMapFn mapFn, S thisArg) {
    return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final Int8Array from(String source, Int8Array.FromMapFn mapFn) {
    return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final Int8Array from(String source) {
    return from(Js.<Int8Array.FromSourceUnionType>uncheckedCast(source));
  }

  @JsOverlay
  public static final <S> Int8Array from(double[] source, Int8Array.FromMapFn mapFn, S thisArg) {
    return from(Js.<JsArrayLike<Double>>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final Int8Array from(double[] source, Int8Array.FromMapFn mapFn) {
    return from(Js.<JsArrayLike<Double>>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final Int8Array from(double[] source) {
    return from(Js.<JsArrayLike<Double>>uncheckedCast(source));
  }

  public static native Int8Array of(double... var_args);

  public Int8Array(ArrayBuffer length, int byteOffset, int length0) {}

  public Int8Array(ArrayBuffer length, int byteOffset) {}

  public Int8Array(ArrayBuffer length) {}

  public Int8Array(ArrayBufferView length, int byteOffset, int length0) {}

  public Int8Array(ArrayBufferView length, int byteOffset) {}

  public Int8Array(ArrayBufferView length) {}

  public Int8Array(Int8Array.ConstructorLengthUnionType length, int byteOffset, int length0) {}

  public Int8Array(Int8Array.ConstructorLengthUnionType length, int byteOffset) {}

  public Int8Array(Int8Array.ConstructorLengthUnionType length) {}

  public Int8Array(JsArray<Double> length, int byteOffset, int length0) {}

  public Int8Array(JsArray<Double> length, int byteOffset) {}

  public Int8Array(JsArray<Double> length) {}

  public Int8Array(SharedArrayBuffer length, int byteOffset, int length0) {}

  public Int8Array(SharedArrayBuffer length, int byteOffset) {}

  public Int8Array(SharedArrayBuffer length) {}

  public Int8Array(double[] length, int byteOffset, int length0) {}

  public Int8Array(double[] length, int byteOffset) {}

  public Int8Array(double[] length) {}

  public Int8Array(int length, int byteOffset, int length0) {}

  public Int8Array(int length, int byteOffset) {}

  public Int8Array(int length) {}
}
