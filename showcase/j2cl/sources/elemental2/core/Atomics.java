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

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Atomics {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AddTypedArrayUnionType {
    @JsOverlay
    static Atomics.AddTypedArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default BigInt64Array asBigInt64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default BigUint64Array asBigUint64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int16Array asInt16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int32Array asInt32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int8Array asInt8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint16Array asUint16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint32Array asUint32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint8Array asUint8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBigInt64Array() {
      return (Object) this instanceof BigInt64Array;
    }

    @JsOverlay
    default boolean isBigUint64Array() {
      return (Object) this instanceof BigUint64Array;
    }

    @JsOverlay
    default boolean isInt16Array() {
      return (Object) this instanceof Int16Array;
    }

    @JsOverlay
    default boolean isInt32Array() {
      return (Object) this instanceof Int32Array;
    }

    @JsOverlay
    default boolean isInt8Array() {
      return (Object) this instanceof Int8Array;
    }

    @JsOverlay
    default boolean isUint16Array() {
      return (Object) this instanceof Uint16Array;
    }

    @JsOverlay
    default boolean isUint32Array() {
      return (Object) this instanceof Uint32Array;
    }

    @JsOverlay
    default boolean isUint8Array() {
      return (Object) this instanceof Uint8Array;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AndTypedArrayUnionType {
    @JsOverlay
    static Atomics.AndTypedArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default BigInt64Array asBigInt64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default BigUint64Array asBigUint64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int16Array asInt16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int32Array asInt32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int8Array asInt8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint16Array asUint16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint32Array asUint32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint8Array asUint8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBigInt64Array() {
      return (Object) this instanceof BigInt64Array;
    }

    @JsOverlay
    default boolean isBigUint64Array() {
      return (Object) this instanceof BigUint64Array;
    }

    @JsOverlay
    default boolean isInt16Array() {
      return (Object) this instanceof Int16Array;
    }

    @JsOverlay
    default boolean isInt32Array() {
      return (Object) this instanceof Int32Array;
    }

    @JsOverlay
    default boolean isInt8Array() {
      return (Object) this instanceof Int8Array;
    }

    @JsOverlay
    default boolean isUint16Array() {
      return (Object) this instanceof Uint16Array;
    }

    @JsOverlay
    default boolean isUint32Array() {
      return (Object) this instanceof Uint32Array;
    }

    @JsOverlay
    default boolean isUint8Array() {
      return (Object) this instanceof Uint8Array;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface CompareExchangeTypedArrayUnionType {
    @JsOverlay
    static Atomics.CompareExchangeTypedArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default BigInt64Array asBigInt64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default BigUint64Array asBigUint64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int16Array asInt16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int32Array asInt32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int8Array asInt8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint16Array asUint16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint32Array asUint32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint8Array asUint8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBigInt64Array() {
      return (Object) this instanceof BigInt64Array;
    }

    @JsOverlay
    default boolean isBigUint64Array() {
      return (Object) this instanceof BigUint64Array;
    }

    @JsOverlay
    default boolean isInt16Array() {
      return (Object) this instanceof Int16Array;
    }

    @JsOverlay
    default boolean isInt32Array() {
      return (Object) this instanceof Int32Array;
    }

    @JsOverlay
    default boolean isInt8Array() {
      return (Object) this instanceof Int8Array;
    }

    @JsOverlay
    default boolean isUint16Array() {
      return (Object) this instanceof Uint16Array;
    }

    @JsOverlay
    default boolean isUint32Array() {
      return (Object) this instanceof Uint32Array;
    }

    @JsOverlay
    default boolean isUint8Array() {
      return (Object) this instanceof Uint8Array;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ExchangeTypedArrayUnionType {
    @JsOverlay
    static Atomics.ExchangeTypedArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default BigInt64Array asBigInt64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default BigUint64Array asBigUint64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int16Array asInt16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int32Array asInt32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int8Array asInt8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint16Array asUint16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint32Array asUint32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint8Array asUint8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBigInt64Array() {
      return (Object) this instanceof BigInt64Array;
    }

    @JsOverlay
    default boolean isBigUint64Array() {
      return (Object) this instanceof BigUint64Array;
    }

    @JsOverlay
    default boolean isInt16Array() {
      return (Object) this instanceof Int16Array;
    }

    @JsOverlay
    default boolean isInt32Array() {
      return (Object) this instanceof Int32Array;
    }

    @JsOverlay
    default boolean isInt8Array() {
      return (Object) this instanceof Int8Array;
    }

    @JsOverlay
    default boolean isUint16Array() {
      return (Object) this instanceof Uint16Array;
    }

    @JsOverlay
    default boolean isUint32Array() {
      return (Object) this instanceof Uint32Array;
    }

    @JsOverlay
    default boolean isUint8Array() {
      return (Object) this instanceof Uint8Array;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface NotifyTypedArrayUnionType {
    @JsOverlay
    static Atomics.NotifyTypedArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default BigInt64Array asBigInt64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int32Array asInt32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBigInt64Array() {
      return (Object) this instanceof BigInt64Array;
    }

    @JsOverlay
    default boolean isInt32Array() {
      return (Object) this instanceof Int32Array;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface OrTypedArrayUnionType {
    @JsOverlay
    static Atomics.OrTypedArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default BigInt64Array asBigInt64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default BigUint64Array asBigUint64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int16Array asInt16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int32Array asInt32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int8Array asInt8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint16Array asUint16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint32Array asUint32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint8Array asUint8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBigInt64Array() {
      return (Object) this instanceof BigInt64Array;
    }

    @JsOverlay
    default boolean isBigUint64Array() {
      return (Object) this instanceof BigUint64Array;
    }

    @JsOverlay
    default boolean isInt16Array() {
      return (Object) this instanceof Int16Array;
    }

    @JsOverlay
    default boolean isInt32Array() {
      return (Object) this instanceof Int32Array;
    }

    @JsOverlay
    default boolean isInt8Array() {
      return (Object) this instanceof Int8Array;
    }

    @JsOverlay
    default boolean isUint16Array() {
      return (Object) this instanceof Uint16Array;
    }

    @JsOverlay
    default boolean isUint32Array() {
      return (Object) this instanceof Uint32Array;
    }

    @JsOverlay
    default boolean isUint8Array() {
      return (Object) this instanceof Uint8Array;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface StoreTypedArrayUnionType {
    @JsOverlay
    static Atomics.StoreTypedArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default BigInt64Array asBigInt64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default BigUint64Array asBigUint64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int16Array asInt16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int32Array asInt32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int8Array asInt8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint16Array asUint16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint32Array asUint32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint8Array asUint8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBigInt64Array() {
      return (Object) this instanceof BigInt64Array;
    }

    @JsOverlay
    default boolean isBigUint64Array() {
      return (Object) this instanceof BigUint64Array;
    }

    @JsOverlay
    default boolean isInt16Array() {
      return (Object) this instanceof Int16Array;
    }

    @JsOverlay
    default boolean isInt32Array() {
      return (Object) this instanceof Int32Array;
    }

    @JsOverlay
    default boolean isInt8Array() {
      return (Object) this instanceof Int8Array;
    }

    @JsOverlay
    default boolean isUint16Array() {
      return (Object) this instanceof Uint16Array;
    }

    @JsOverlay
    default boolean isUint32Array() {
      return (Object) this instanceof Uint32Array;
    }

    @JsOverlay
    default boolean isUint8Array() {
      return (Object) this instanceof Uint8Array;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SubTypedArrayUnionType {
    @JsOverlay
    static Atomics.SubTypedArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default BigInt64Array asBigInt64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default BigUint64Array asBigUint64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int16Array asInt16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int32Array asInt32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int8Array asInt8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint16Array asUint16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint32Array asUint32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint8Array asUint8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBigInt64Array() {
      return (Object) this instanceof BigInt64Array;
    }

    @JsOverlay
    default boolean isBigUint64Array() {
      return (Object) this instanceof BigUint64Array;
    }

    @JsOverlay
    default boolean isInt16Array() {
      return (Object) this instanceof Int16Array;
    }

    @JsOverlay
    default boolean isInt32Array() {
      return (Object) this instanceof Int32Array;
    }

    @JsOverlay
    default boolean isInt8Array() {
      return (Object) this instanceof Int8Array;
    }

    @JsOverlay
    default boolean isUint16Array() {
      return (Object) this instanceof Uint16Array;
    }

    @JsOverlay
    default boolean isUint32Array() {
      return (Object) this instanceof Uint32Array;
    }

    @JsOverlay
    default boolean isUint8Array() {
      return (Object) this instanceof Uint8Array;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface WaitTypedArrayUnionType {
    @JsOverlay
    static Atomics.WaitTypedArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default BigInt64Array asBigInt64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int32Array asInt32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBigInt64Array() {
      return (Object) this instanceof BigInt64Array;
    }

    @JsOverlay
    default boolean isInt32Array() {
      return (Object) this instanceof Int32Array;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface XorTypedArrayUnionType {
    @JsOverlay
    static Atomics.XorTypedArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default BigInt64Array asBigInt64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default BigUint64Array asBigUint64Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int16Array asInt16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int32Array asInt32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Int8Array asInt8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint16Array asUint16Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint32Array asUint32Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default Uint8Array asUint8Array() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBigInt64Array() {
      return (Object) this instanceof BigInt64Array;
    }

    @JsOverlay
    default boolean isBigUint64Array() {
      return (Object) this instanceof BigUint64Array;
    }

    @JsOverlay
    default boolean isInt16Array() {
      return (Object) this instanceof Int16Array;
    }

    @JsOverlay
    default boolean isInt32Array() {
      return (Object) this instanceof Int32Array;
    }

    @JsOverlay
    default boolean isInt8Array() {
      return (Object) this instanceof Int8Array;
    }

    @JsOverlay
    default boolean isUint16Array() {
      return (Object) this instanceof Uint16Array;
    }

    @JsOverlay
    default boolean isUint32Array() {
      return (Object) this instanceof Uint32Array;
    }

    @JsOverlay
    default boolean isUint8Array() {
      return (Object) this instanceof Uint8Array;
    }
  }

  public static native double add(
      Atomics.AddTypedArrayUnionType typedArray, int index, double value);

  @JsOverlay
  public static final double add(BigInt64Array typedArray, int index, double value) {
    return add(Js.<Atomics.AddTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double add(BigUint64Array typedArray, int index, double value) {
    return add(Js.<Atomics.AddTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double add(Int16Array typedArray, int index, double value) {
    return add(Js.<Atomics.AddTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double add(Int32Array typedArray, int index, double value) {
    return add(Js.<Atomics.AddTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double add(Int8Array typedArray, int index, double value) {
    return add(Js.<Atomics.AddTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double add(Uint16Array typedArray, int index, double value) {
    return add(Js.<Atomics.AddTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double add(Uint32Array typedArray, int index, double value) {
    return add(Js.<Atomics.AddTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double add(Uint8Array typedArray, int index, double value) {
    return add(Js.<Atomics.AddTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  public static native double and(
      Atomics.AndTypedArrayUnionType typedArray, int index, double value);

  @JsOverlay
  public static final double and(BigInt64Array typedArray, int index, double value) {
    return and(Js.<Atomics.AndTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double and(BigUint64Array typedArray, int index, double value) {
    return and(Js.<Atomics.AndTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double and(Int16Array typedArray, int index, double value) {
    return and(Js.<Atomics.AndTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double and(Int32Array typedArray, int index, double value) {
    return and(Js.<Atomics.AndTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double and(Int8Array typedArray, int index, double value) {
    return and(Js.<Atomics.AndTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double and(Uint16Array typedArray, int index, double value) {
    return and(Js.<Atomics.AndTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double and(Uint32Array typedArray, int index, double value) {
    return and(Js.<Atomics.AndTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double and(Uint8Array typedArray, int index, double value) {
    return and(Js.<Atomics.AndTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double compareExchange(
      BigInt64Array typedArray, int index, double expectedValue, double replacementValue) {
    return compareExchange(
        Js.<Atomics.CompareExchangeTypedArrayUnionType>uncheckedCast(typedArray),
        index,
        expectedValue,
        replacementValue);
  }

  @JsOverlay
  public static final double compareExchange(
      BigUint64Array typedArray, int index, double expectedValue, double replacementValue) {
    return compareExchange(
        Js.<Atomics.CompareExchangeTypedArrayUnionType>uncheckedCast(typedArray),
        index,
        expectedValue,
        replacementValue);
  }

  public static native double compareExchange(
      Atomics.CompareExchangeTypedArrayUnionType typedArray,
      int index,
      double expectedValue,
      double replacementValue);

  @JsOverlay
  public static final double compareExchange(
      Int16Array typedArray, int index, double expectedValue, double replacementValue) {
    return compareExchange(
        Js.<Atomics.CompareExchangeTypedArrayUnionType>uncheckedCast(typedArray),
        index,
        expectedValue,
        replacementValue);
  }

  @JsOverlay
  public static final double compareExchange(
      Int32Array typedArray, int index, double expectedValue, double replacementValue) {
    return compareExchange(
        Js.<Atomics.CompareExchangeTypedArrayUnionType>uncheckedCast(typedArray),
        index,
        expectedValue,
        replacementValue);
  }

  @JsOverlay
  public static final double compareExchange(
      Int8Array typedArray, int index, double expectedValue, double replacementValue) {
    return compareExchange(
        Js.<Atomics.CompareExchangeTypedArrayUnionType>uncheckedCast(typedArray),
        index,
        expectedValue,
        replacementValue);
  }

  @JsOverlay
  public static final double compareExchange(
      Uint16Array typedArray, int index, double expectedValue, double replacementValue) {
    return compareExchange(
        Js.<Atomics.CompareExchangeTypedArrayUnionType>uncheckedCast(typedArray),
        index,
        expectedValue,
        replacementValue);
  }

  @JsOverlay
  public static final double compareExchange(
      Uint32Array typedArray, int index, double expectedValue, double replacementValue) {
    return compareExchange(
        Js.<Atomics.CompareExchangeTypedArrayUnionType>uncheckedCast(typedArray),
        index,
        expectedValue,
        replacementValue);
  }

  @JsOverlay
  public static final double compareExchange(
      Uint8Array typedArray, int index, double expectedValue, double replacementValue) {
    return compareExchange(
        Js.<Atomics.CompareExchangeTypedArrayUnionType>uncheckedCast(typedArray),
        index,
        expectedValue,
        replacementValue);
  }

  @JsOverlay
  public static final double exchange(BigInt64Array typedArray, int index, double value) {
    return exchange(
        Js.<Atomics.ExchangeTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double exchange(BigUint64Array typedArray, int index, double value) {
    return exchange(
        Js.<Atomics.ExchangeTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  public static native double exchange(
      Atomics.ExchangeTypedArrayUnionType typedArray, int index, double value);

  @JsOverlay
  public static final double exchange(Int16Array typedArray, int index, double value) {
    return exchange(
        Js.<Atomics.ExchangeTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double exchange(Int32Array typedArray, int index, double value) {
    return exchange(
        Js.<Atomics.ExchangeTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double exchange(Int8Array typedArray, int index, double value) {
    return exchange(
        Js.<Atomics.ExchangeTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double exchange(Uint16Array typedArray, int index, double value) {
    return exchange(
        Js.<Atomics.ExchangeTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double exchange(Uint32Array typedArray, int index, double value) {
    return exchange(
        Js.<Atomics.ExchangeTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double exchange(Uint8Array typedArray, int index, double value) {
    return exchange(
        Js.<Atomics.ExchangeTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  public static native boolean isLockFree(int size);

  public static native double load(TypedArray typedArray, int index);

  @JsOverlay
  public static final double notify(BigInt64Array typedArray, int index, double count) {
    return notify(Js.<Atomics.NotifyTypedArrayUnionType>uncheckedCast(typedArray), index, count);
  }

  @JsOverlay
  public static final double notify(BigInt64Array typedArray, int index) {
    return notify(Js.<Atomics.NotifyTypedArrayUnionType>uncheckedCast(typedArray), index);
  }

  @JsOverlay
  public static final double notify(Int32Array typedArray, int index, double count) {
    return notify(Js.<Atomics.NotifyTypedArrayUnionType>uncheckedCast(typedArray), index, count);
  }

  @JsOverlay
  public static final double notify(Int32Array typedArray, int index) {
    return notify(Js.<Atomics.NotifyTypedArrayUnionType>uncheckedCast(typedArray), index);
  }

  public static native double notify(
      Atomics.NotifyTypedArrayUnionType typedArray, int index, double count);

  public static native double notify(Atomics.NotifyTypedArrayUnionType typedArray, int index);

  @JsOverlay
  public static final double or(BigInt64Array typedArray, int index, double value) {
    return or(Js.<Atomics.OrTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double or(BigUint64Array typedArray, int index, double value) {
    return or(Js.<Atomics.OrTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double or(Int16Array typedArray, int index, double value) {
    return or(Js.<Atomics.OrTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double or(Int32Array typedArray, int index, double value) {
    return or(Js.<Atomics.OrTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double or(Int8Array typedArray, int index, double value) {
    return or(Js.<Atomics.OrTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  public static native double or(Atomics.OrTypedArrayUnionType typedArray, int index, double value);

  @JsOverlay
  public static final double or(Uint16Array typedArray, int index, double value) {
    return or(Js.<Atomics.OrTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double or(Uint32Array typedArray, int index, double value) {
    return or(Js.<Atomics.OrTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double or(Uint8Array typedArray, int index, double value) {
    return or(Js.<Atomics.OrTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double store(BigInt64Array typedArray, int index, double value) {
    return store(Js.<Atomics.StoreTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double store(BigUint64Array typedArray, int index, double value) {
    return store(Js.<Atomics.StoreTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double store(Int16Array typedArray, int index, double value) {
    return store(Js.<Atomics.StoreTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double store(Int32Array typedArray, int index, double value) {
    return store(Js.<Atomics.StoreTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double store(Int8Array typedArray, int index, double value) {
    return store(Js.<Atomics.StoreTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  public static native double store(
      Atomics.StoreTypedArrayUnionType typedArray, int index, double value);

  @JsOverlay
  public static final double store(Uint16Array typedArray, int index, double value) {
    return store(Js.<Atomics.StoreTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double store(Uint32Array typedArray, int index, double value) {
    return store(Js.<Atomics.StoreTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double store(Uint8Array typedArray, int index, double value) {
    return store(Js.<Atomics.StoreTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double sub(BigInt64Array typedArray, int index, double value) {
    return sub(Js.<Atomics.SubTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double sub(BigUint64Array typedArray, int index, double value) {
    return sub(Js.<Atomics.SubTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double sub(Int16Array typedArray, int index, double value) {
    return sub(Js.<Atomics.SubTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double sub(Int32Array typedArray, int index, double value) {
    return sub(Js.<Atomics.SubTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double sub(Int8Array typedArray, int index, double value) {
    return sub(Js.<Atomics.SubTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  public static native double sub(
      Atomics.SubTypedArrayUnionType typedArray, int index, double value);

  @JsOverlay
  public static final double sub(Uint16Array typedArray, int index, double value) {
    return sub(Js.<Atomics.SubTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double sub(Uint32Array typedArray, int index, double value) {
    return sub(Js.<Atomics.SubTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double sub(Uint8Array typedArray, int index, double value) {
    return sub(Js.<Atomics.SubTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final String wait(
      BigInt64Array typedArray, int index, double value, double timeout) {
    return wait(
        Js.<Atomics.WaitTypedArrayUnionType>uncheckedCast(typedArray), index, value, timeout);
  }

  @JsOverlay
  public static final String wait(BigInt64Array typedArray, int index, double value) {
    return wait(Js.<Atomics.WaitTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final String wait(Int32Array typedArray, int index, double value, double timeout) {
    return wait(
        Js.<Atomics.WaitTypedArrayUnionType>uncheckedCast(typedArray), index, value, timeout);
  }

  @JsOverlay
  public static final String wait(Int32Array typedArray, int index, double value) {
    return wait(Js.<Atomics.WaitTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  public static native String wait(
      Atomics.WaitTypedArrayUnionType typedArray, int index, double value, double timeout);

  public static native String wait(
      Atomics.WaitTypedArrayUnionType typedArray, int index, double value);

  public static native double wake(Int32Array typedArray, int index, double count);

  public static native double wake(Int32Array typedArray, int index);

  @JsOverlay
  public static final double xor(BigInt64Array typedArray, int index, double value) {
    return xor(Js.<Atomics.XorTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double xor(BigUint64Array typedArray, int index, double value) {
    return xor(Js.<Atomics.XorTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double xor(Int16Array typedArray, int index, double value) {
    return xor(Js.<Atomics.XorTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double xor(Int32Array typedArray, int index, double value) {
    return xor(Js.<Atomics.XorTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double xor(Int8Array typedArray, int index, double value) {
    return xor(Js.<Atomics.XorTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double xor(Uint16Array typedArray, int index, double value) {
    return xor(Js.<Atomics.XorTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double xor(Uint32Array typedArray, int index, double value) {
    return xor(Js.<Atomics.XorTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  @JsOverlay
  public static final double xor(Uint8Array typedArray, int index, double value) {
    return xor(Js.<Atomics.XorTypedArrayUnionType>uncheckedCast(typedArray), index, value);
  }

  public static native double xor(
      Atomics.XorTypedArrayUnionType typedArray, int index, double value);
}
