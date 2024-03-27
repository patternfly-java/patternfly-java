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
import jsinterop.base.JsBigint;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class BigUint64Array extends TypedArray {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorLengthOrArrayOrBufferUnionType {
    @JsOverlay
    static BigUint64Array.ConstructorLengthOrArrayOrBufferUnionType of(Object o) {
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
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default JsArray<JsBigint> asJsArray() {
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
    default boolean isDouble() {
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
    JsBigint onInvoke(Object element, int index);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface FromSourceUnionType {
    @JsOverlay
    static BigUint64Array.FromSourceUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArrayLike<JsBigint> asJsArrayLike() {
      return Js.cast(this);
    }

    @JsOverlay
    default JsIterable<JsBigint> asJsIterable() {
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
  public static final double BYTES_PER_ELEMENT = BigUint64Array__Constants.BYTES_PER_ELEMENT;

  public static native <S> BigUint64Array from(
      BigUint64Array.FromSourceUnionType source, BigUint64Array.FromMapFn mapFn, S thisArg);

  public static native BigUint64Array from(
      BigUint64Array.FromSourceUnionType source, BigUint64Array.FromMapFn mapFn);

  public static native BigUint64Array from(BigUint64Array.FromSourceUnionType source);

  @JsOverlay
  public static final <S> BigUint64Array from(
      JsArrayLike<JsBigint> source, BigUint64Array.FromMapFn mapFn, S thisArg) {
    return from(Js.<BigUint64Array.FromSourceUnionType>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final BigUint64Array from(
      JsArrayLike<JsBigint> source, BigUint64Array.FromMapFn mapFn) {
    return from(Js.<BigUint64Array.FromSourceUnionType>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final BigUint64Array from(JsArrayLike<JsBigint> source) {
    return from(Js.<BigUint64Array.FromSourceUnionType>uncheckedCast(source));
  }

  @JsOverlay
  public static final <S> BigUint64Array from(
      JsBigint[] source, BigUint64Array.FromMapFn mapFn, S thisArg) {
    return from(Js.<JsArrayLike<JsBigint>>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final BigUint64Array from(JsBigint[] source, BigUint64Array.FromMapFn mapFn) {
    return from(Js.<JsArrayLike<JsBigint>>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final BigUint64Array from(JsBigint[] source) {
    return from(Js.<JsArrayLike<JsBigint>>uncheckedCast(source));
  }

  @JsOverlay
  public static final <S> BigUint64Array from(
      JsIterable<JsBigint> source, BigUint64Array.FromMapFn mapFn, S thisArg) {
    return from(Js.<BigUint64Array.FromSourceUnionType>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final BigUint64Array from(
      JsIterable<JsBigint> source, BigUint64Array.FromMapFn mapFn) {
    return from(Js.<BigUint64Array.FromSourceUnionType>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final BigUint64Array from(JsIterable<JsBigint> source) {
    return from(Js.<BigUint64Array.FromSourceUnionType>uncheckedCast(source));
  }

  @JsOverlay
  public static final <S> BigUint64Array from(
      String source, BigUint64Array.FromMapFn mapFn, S thisArg) {
    return from(Js.<BigUint64Array.FromSourceUnionType>uncheckedCast(source), mapFn, thisArg);
  }

  @JsOverlay
  public static final BigUint64Array from(String source, BigUint64Array.FromMapFn mapFn) {
    return from(Js.<BigUint64Array.FromSourceUnionType>uncheckedCast(source), mapFn);
  }

  @JsOverlay
  public static final BigUint64Array from(String source) {
    return from(Js.<BigUint64Array.FromSourceUnionType>uncheckedCast(source));
  }

  public static native BigUint64Array of(JsBigint... var_args);

  public BigUint64Array(
      ArrayBuffer lengthOrArrayOrBuffer, double byteOffset, double bufferLength) {}

  public BigUint64Array(ArrayBuffer lengthOrArrayOrBuffer, double byteOffset) {}

  public BigUint64Array(ArrayBuffer lengthOrArrayOrBuffer) {}

  public BigUint64Array(
      ArrayBufferView lengthOrArrayOrBuffer, double byteOffset, double bufferLength) {}

  public BigUint64Array(ArrayBufferView lengthOrArrayOrBuffer, double byteOffset) {}

  public BigUint64Array(ArrayBufferView lengthOrArrayOrBuffer) {}

  public BigUint64Array(
      BigUint64Array.ConstructorLengthOrArrayOrBufferUnionType lengthOrArrayOrBuffer,
      double byteOffset,
      double bufferLength) {}

  public BigUint64Array(
      BigUint64Array.ConstructorLengthOrArrayOrBufferUnionType lengthOrArrayOrBuffer,
      double byteOffset) {}

  public BigUint64Array(
      BigUint64Array.ConstructorLengthOrArrayOrBufferUnionType lengthOrArrayOrBuffer) {}

  public BigUint64Array(
      JsArray<JsBigint> lengthOrArrayOrBuffer, double byteOffset, double bufferLength) {}

  public BigUint64Array(JsArray<JsBigint> lengthOrArrayOrBuffer, double byteOffset) {}

  public BigUint64Array(JsArray<JsBigint> lengthOrArrayOrBuffer) {}

  public BigUint64Array(JsBigint[] lengthOrArrayOrBuffer, double byteOffset, double bufferLength) {}

  public BigUint64Array(JsBigint[] lengthOrArrayOrBuffer, double byteOffset) {}

  public BigUint64Array(JsBigint[] lengthOrArrayOrBuffer) {}

  public BigUint64Array(
      SharedArrayBuffer lengthOrArrayOrBuffer, double byteOffset, double bufferLength) {}

  public BigUint64Array(SharedArrayBuffer lengthOrArrayOrBuffer, double byteOffset) {}

  public BigUint64Array(SharedArrayBuffer lengthOrArrayOrBuffer) {}

  public BigUint64Array(double lengthOrArrayOrBuffer, double byteOffset, double bufferLength) {}

  public BigUint64Array(double lengthOrArrayOrBuffer, double byteOffset) {}

  public BigUint64Array(double lengthOrArrayOrBuffer) {}
}
