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
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsArrayLike;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface ReadonlyArray<T> extends JsIterable<T>, JsArrayLike<T> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface EntriesJsIteratorIterableTypeParameterArrayUnionType<T> {
    @JsOverlay
    static ReadonlyArray.EntriesJsIteratorIterableTypeParameterArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Double asDouble() {
      return Js.cast(this);
    }

    @JsOverlay
    default T asT() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }
  }

  @JsFunction
  public interface EveryCallbackFn<T> {
    Object onInvoke(T p0, int p1);
  }

  @JsFunction
  public interface FilterCallbackFn<T> {
    Object onInvoke(T p0, int p1);
  }

  @JsFunction
  public interface FindIndexPredicateFn<T> {
    boolean onInvoke(T p0, double p1, JsArray<T> p2);

    @JsOverlay
    default boolean onInvoke(T p0, double p1, T[] p2) {
      return onInvoke(p0, p1, Js.<JsArray<T>>uncheckedCast(p2));
    }
  }

  @JsFunction
  public interface FindPredicateFn<T> {
    boolean onInvoke(T p0, double p1, JsArray<T> p2);

    @JsOverlay
    default boolean onInvoke(T p0, double p1, T[] p2) {
      return onInvoke(p0, p1, Js.<JsArray<T>>uncheckedCast(p2));
    }
  }

  @JsFunction
  public interface FlatMapCallbackFn<S, T> {
    ReadonlyArray<S> onInvoke(T p0, double p1, JsArrayLike<T> p2);

    @JsOverlay
    default ReadonlyArray<S> onInvoke(T p0, double p1, T[] p2) {
      return onInvoke(p0, p1, Js.<JsArrayLike<T>>uncheckedCast(p2));
    }
  }

  @JsFunction
  public interface ForEachCallbackFn<T> {
    Object onInvoke(T p0, int p1);
  }

  @JsFunction
  public interface MapCallbackFn<R, T> {
    R onInvoke(T p0, int p1);
  }

  @JsFunction
  public interface ReduceCallbackFn<R, T> {
    R onInvoke(Object p0, T p1, int p2);
  }

  @JsFunction
  public interface ReduceRightCallbackFn<R, T> {
    R onInvoke(Object p0, T p1, int p2);
  }

  @JsFunction
  public interface SomeCallbackFn<T> {
    Object onInvoke(T p0, int p1);
  }

  T at(double index);

  JsArray<T> concat(T... items);

  JsIteratorIterable<JsArray<ReadonlyArray.EntriesJsIteratorIterableTypeParameterArrayUnionType<T>>>
      entries();

  <S> boolean every(ReadonlyArray.EveryCallbackFn<? super T> callback, S thisobj);

  boolean every(ReadonlyArray.EveryCallbackFn<? super T> callback);

  <S> JsArray<T> filter(ReadonlyArray.FilterCallbackFn<? super T> callback, S thisobj);

  JsArray<T> filter(ReadonlyArray.FilterCallbackFn<? super T> callback);

  <S> T find(ReadonlyArray.FindPredicateFn<T> predicateFn, S this_);

  T find(ReadonlyArray.FindPredicateFn<T> predicateFn);

  <S> int findIndex(ReadonlyArray.FindIndexPredicateFn<T> predicateFn, S this_);

  int findIndex(ReadonlyArray.FindIndexPredicateFn<T> predicateFn);

  <S> JsArray<S> flat();

  <S> JsArray<S> flat(double depth);

  <THIS, S> JsArray<S> flatMap(ReadonlyArray.FlatMapCallbackFn<S, T> callback, THIS thisArg);

  <S> JsArray<S> flatMap(ReadonlyArray.FlatMapCallbackFn<S, T> callback);

  <S> void forEach(ReadonlyArray.ForEachCallbackFn<? super T> callback, S thisobj);

  void forEach(ReadonlyArray.ForEachCallbackFn<? super T> callback);

  boolean includes(T searchElement, int fromIndex);

  boolean includes(T searchElement);

  int indexOf(T obj, int fromIndex);

  int indexOf(T obj);

  String join();

  String join(Object separator);

  JsIteratorIterable<Double> keys();

  int lastIndexOf(T obj, int fromIndex);

  int lastIndexOf(T obj);

  <S, R> JsArray<R> map(ReadonlyArray.MapCallbackFn<? extends R, ? super T> callback, S thisobj);

  <R> JsArray<R> map(ReadonlyArray.MapCallbackFn<? extends R, ? super T> callback);

  <R> R reduce(
      ReadonlyArray.ReduceCallbackFn<? extends R, ? super T> callback, Object initialValue);

  <R> R reduce(ReadonlyArray.ReduceCallbackFn<? extends R, ? super T> callback);

  <R> R reduceRight(
      ReadonlyArray.ReduceRightCallbackFn<? extends R, ? super T> callback, Object initialValue);

  <R> R reduceRight(ReadonlyArray.ReduceRightCallbackFn<? extends R, ? super T> callback);

  JsArray<T> slice();

  JsArray<T> slice(int begin, int end);

  JsArray<T> slice(int begin);

  <S> boolean some(ReadonlyArray.SomeCallbackFn<? super T> callback, S thisobj);

  boolean some(ReadonlyArray.SomeCallbackFn<? super T> callback);

  @JsMethod(name = "toString")
  String toString_();

  JsIteratorIterable<T> values();
}
