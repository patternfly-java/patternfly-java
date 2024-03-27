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

import javaemul.internal.ArrayStamper;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsArrayLike;

@JsType(isNative = true, name = "Array", namespace = JsPackage.GLOBAL)
public class JsArray<T> implements JsIterable<T>, ReadonlyArray<T>, JsArrayLike<T> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface FromArrayLikeUnionType<T> {
    @JsOverlay
    static JsArray.FromArrayLikeUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArrayLike<T> asJsArrayLike() {
      return Js.cast(this);
    }

    @JsOverlay
    default JsIterable<T> asJsIterable() {
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

  @JsFunction
  public interface FromMapFn<T, R> {
    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface P0UnionType<T> {
      @JsOverlay
      static JsArray.FromMapFn.P0UnionType of(Object o) {
        return Js.cast(o);
      }

      @JsOverlay
      default String asString() {
        return Js.asString(this);
      }

      @JsOverlay
      default T asT() {
        return Js.cast(this);
      }

      @JsOverlay
      default boolean isString() {
        return (Object) this instanceof String;
      }
    }

    R onInvoke(JsArray.FromMapFn.P0UnionType<T> p0, int p1);

    @JsOverlay
    default R onInvoke(String p0, int p1) {
      return onInvoke(Js.<JsArray.FromMapFn.P0UnionType<T>>uncheckedCast(p0), p1);
    }

    @JsOverlay
    default R onInvoke(T p0, int p1) {
      return onInvoke(Js.<JsArray.FromMapFn.P0UnionType<T>>uncheckedCast(p0), p1);
    }
  }

  @JsFunction
  public interface SortCompareFn<T> {
    double onInvoke(T p0, T p1);
  }

  @JsOverlay
  public static final <T> JsArray<T> asJsArray(T[] array) {
    return Js.uncheckedCast(array);
  }

  public static native <T, S, R> JsArray<R> from(
      JsArray.FromArrayLikeUnionType<T> arrayLike,
      JsArray.FromMapFn<? super T, ? extends R> mapFn,
      S this_);

  public static native <T, R> JsArray<R> from(
      JsArray.FromArrayLikeUnionType<T> arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn);

  public static native <T, R> JsArray<R> from(JsArray.FromArrayLikeUnionType<T> arrayLike);

  @JsOverlay
  public static final <T, S, R> JsArray<R> from(
      JsArrayLike<T> arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn, S this_) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike), mapFn, this_);
  }

  @JsOverlay
  public static final <T, R> JsArray<R> from(
      JsArrayLike<T> arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike), mapFn);
  }

  @JsOverlay
  public static final <T, R> JsArray<R> from(JsArrayLike<T> arrayLike) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike));
  }

  @JsOverlay
  public static final <T, S, R> JsArray<R> from(
      JsIterable<T> arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn, S this_) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike), mapFn, this_);
  }

  @JsOverlay
  public static final <T, R> JsArray<R> from(
      JsIterable<T> arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike), mapFn);
  }

  @JsOverlay
  public static final <T, R> JsArray<R> from(JsIterable<T> arrayLike) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike));
  }

  @JsOverlay
  public static final <T, S, R> JsArray<R> from(
      String arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn, S this_) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike), mapFn, this_);
  }

  @JsOverlay
  public static final <T, R> JsArray<R> from(
      String arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike), mapFn);
  }

  @JsOverlay
  public static final <T, R> JsArray<R> from(String arrayLike) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike));
  }

  @JsOverlay
  public static final <T, S, R> JsArray<R> from(
      T[] arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn, S this_) {
    return from(Js.<JsArrayLike<T>>uncheckedCast(arrayLike), mapFn, this_);
  }

  @JsOverlay
  public static final <T, R> JsArray<R> from(
      T[] arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn) {
    return from(Js.<JsArrayLike<T>>uncheckedCast(arrayLike), mapFn);
  }

  @JsOverlay
  public static final <T, R> JsArray<R> from(T[] arrayLike) {
    return from(Js.<JsArrayLike<T>>uncheckedCast(arrayLike));
  }

  public static native boolean isArray(Object arr);

  public static native <T> JsArray<T> of(T... var_args);

  public int index;
  public String input;
  public int length;

  public JsArray(T... items) {}

  @JsOverlay
  public final T[] asArray(T[] reference) {
    return ArrayStamper.stampJavaTypeInfo(this, reference);
  }

  public native T at(double index);

  public native JsArray<T> concat(T... items);

  public native JsArray<T> copyWithin(int target, int start, int end);

  public native JsArray<T> copyWithin(int target, int start);

  public native JsIteratorIterable<
          JsArray<ReadonlyArray.EntriesJsIteratorIterableTypeParameterArrayUnionType<T>>>
      entries();

  public native <S> boolean every(ReadonlyArray.EveryCallbackFn<? super T> callback, S thisobj);

  public native boolean every(ReadonlyArray.EveryCallbackFn<? super T> callback);

  public native JsArray<T> fill(T value, int begin, int end);

  public native JsArray<T> fill(T value, int begin);

  public native JsArray<T> fill(T value);

  public native <S> JsArray<T> filter(
      ReadonlyArray.FilterCallbackFn<? super T> callback, S thisobj);

  public native JsArray<T> filter(ReadonlyArray.FilterCallbackFn<? super T> callback);

  public native <S> T find(ReadonlyArray.FindPredicateFn<T> predicateFn, S this_);

  public native T find(ReadonlyArray.FindPredicateFn<T> predicateFn);

  public native <S> int findIndex(ReadonlyArray.FindIndexPredicateFn<T> predicateFn, S this_);

  public native int findIndex(ReadonlyArray.FindIndexPredicateFn<T> predicateFn);

  public native <S> JsArray<S> flat();

  public native <S> JsArray<S> flat(double depth);

  public native <THIS, S> JsArray<S> flatMap(
      ReadonlyArray.FlatMapCallbackFn<S, T> callback, THIS thisArg);

  public native <S> JsArray<S> flatMap(ReadonlyArray.FlatMapCallbackFn<S, T> callback);

  public native <S> void forEach(ReadonlyArray.ForEachCallbackFn<? super T> callback, S thisobj);

  public native void forEach(ReadonlyArray.ForEachCallbackFn<? super T> callback);

  public native boolean includes(T searchElement, int fromIndex);

  public native boolean includes(T searchElement);

  public native int indexOf(T obj, int fromIndex);

  public native int indexOf(T obj);

  public native String join();

  public native String join(Object separator);

  public native JsIteratorIterable<Double> keys();

  public native int lastIndexOf(T obj, int fromIndex);

  public native int lastIndexOf(T obj);

  public native <S, R> JsArray<R> map(
      ReadonlyArray.MapCallbackFn<? extends R, ? super T> callback, S thisobj);

  public native <R> JsArray<R> map(ReadonlyArray.MapCallbackFn<? extends R, ? super T> callback);

  public native T pop();

  public native int push(T... var_args);

  public native <R> R reduce(
      ReadonlyArray.ReduceCallbackFn<? extends R, ? super T> callback, Object initialValue);

  public native <R> R reduce(ReadonlyArray.ReduceCallbackFn<? extends R, ? super T> callback);

  public native <R> R reduceRight(
      ReadonlyArray.ReduceRightCallbackFn<? extends R, ? super T> callback, Object initialValue);

  public native <R> R reduceRight(
      ReadonlyArray.ReduceRightCallbackFn<? extends R, ? super T> callback);

  public native T[] reverse();

  public native T shift();

  public native JsArray<T> slice();

  public native JsArray<T> slice(int begin, int end);

  public native JsArray<T> slice(int begin);

  public native <S> boolean some(ReadonlyArray.SomeCallbackFn<? super T> callback, S thisobj);

  public native boolean some(ReadonlyArray.SomeCallbackFn<? super T> callback);

  public native JsArray<T> sort();

  public native JsArray<T> sort(JsArray.SortCompareFn<? super T> compareFn);

  public native JsArray<T> splice();

  public native JsArray<T> splice(int index, int howMany, T... var_args);

  public native JsArray<T> splice(int index);

  public native String toSource();

  @JsMethod(name = "toString")
  public native String toString_();

  public native int unshift(T... items);

  public native JsIteratorIterable<T> values();
}
