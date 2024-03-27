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

import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
public class JsObject {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface DefinePropertyPropUnionType {
    @JsOverlay
    static JsObject.DefinePropertyPropUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Object asObject() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isObject() {
      return (Object) this instanceof Object;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface EntriesArrayArrayUnionType<T> {
    @JsOverlay
    static JsObject.EntriesArrayArrayUnionType of(Object o) {
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

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetOwnPropertyDescriptorPropUnionType {
    @JsOverlay
    static JsObject.GetOwnPropertyDescriptorPropUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Object asObject() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isObject() {
      return (Object) this instanceof Object;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface HasOwnPropertyNameUnionType {
    @JsOverlay
    static JsObject.HasOwnPropertyNameUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Object asObject() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isObject() {
      return (Object) this instanceof Object;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface PropertyIsEnumerablePropertyNameUnionType {
    @JsOverlay
    static JsObject.PropertyIsEnumerablePropertyNameUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Object asObject() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isObject() {
      return (Object) this instanceof Object;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public static native JsObject assign(JsObject target, JsObject... var_args);

  @JsOverlay
  public static final JsObject assign(Object target, Object... var_args) {
    return assign(Js.<JsObject>uncheckedCast(target), Js.<JsObject[]>uncheckedCast(var_args));
  }

  public static native JsObject create(
      JsObject proto, JsPropertyMap<ObjectPropertyDescriptor<Object>> properties);

  public static native JsObject create(JsObject proto);

  @JsOverlay
  public static final JsObject create(
      Object proto, JsPropertyMap<ObjectPropertyDescriptor<Object>> properties) {
    return create(Js.<JsObject>uncheckedCast(proto), properties);
  }

  @JsOverlay
  public static final JsObject create(Object proto) {
    return create(Js.<JsObject>uncheckedCast(proto));
  }

  public static native <T> T defineProperties(
      T obj, JsPropertyMap<ObjectPropertyDescriptor<T>> props);

  public static native <T> T defineProperty(
      T obj, JsObject.DefinePropertyPropUnionType prop, ObjectPropertyDescriptor<T> descriptor);

  @JsOverlay
  public static final <T> T defineProperty(
      T obj, Object prop, ObjectPropertyDescriptor<T> descriptor) {
    return defineProperty(
        obj, Js.<JsObject.DefinePropertyPropUnionType>uncheckedCast(prop), descriptor);
  }

  @JsOverlay
  public static final <T> T defineProperty(
      T obj, String prop, ObjectPropertyDescriptor<T> descriptor) {
    return defineProperty(
        obj, Js.<JsObject.DefinePropertyPropUnionType>uncheckedCast(prop), descriptor);
  }

  public static native <T> JsArray<JsArray<JsObject.EntriesArrayArrayUnionType<T>>> entries(
      JsPropertyMap<T> obj);

  public static native <T> T freeze(T obj);

  public static native JsObject fromEntries(JsIterable<Object> iter);

  public static native <T> ObjectPropertyDescriptor<T> getOwnPropertyDescriptor(
      T obj, JsObject.GetOwnPropertyDescriptorPropUnionType prop);

  @JsOverlay
  public static final <T> ObjectPropertyDescriptor<T> getOwnPropertyDescriptor(T obj, Object prop) {
    return getOwnPropertyDescriptor(
        obj, Js.<JsObject.GetOwnPropertyDescriptorPropUnionType>uncheckedCast(prop));
  }

  @JsOverlay
  public static final <T> ObjectPropertyDescriptor<T> getOwnPropertyDescriptor(T obj, String prop) {
    return getOwnPropertyDescriptor(
        obj, Js.<JsObject.GetOwnPropertyDescriptorPropUnionType>uncheckedCast(prop));
  }

  public static native JsPropertyMap<ObjectPropertyDescriptor> getOwnPropertyDescriptors(
      JsObject obj);

  @JsOverlay
  public static final JsPropertyMap<ObjectPropertyDescriptor> getOwnPropertyDescriptors(
      Object obj) {
    return getOwnPropertyDescriptors(Js.<JsObject>uncheckedCast(obj));
  }

  public static native JsArray<String> getOwnPropertyNames(JsObject obj);

  @JsOverlay
  public static final JsArray<String> getOwnPropertyNames(Object obj) {
    return getOwnPropertyNames(Js.<JsObject>uncheckedCast(obj));
  }

  public static native JsArray<Object> getOwnPropertySymbols(JsObject obj);

  @JsOverlay
  public static final JsArray<Object> getOwnPropertySymbols(Object obj) {
    return getOwnPropertySymbols(Js.<JsObject>uncheckedCast(obj));
  }

  public static native JsObject getPrototypeOf(JsObject obj);

  @JsOverlay
  public static final JsObject getPrototypeOf(Object obj) {
    return getPrototypeOf(Js.<JsObject>uncheckedCast(obj));
  }

  public static native boolean hasOwn(
      JsObject obj, JsObject.HasOwnPropertyNameUnionType propertyName);

  @JsOverlay
  public static final boolean hasOwn(JsObject obj, Object propertyName) {
    return hasOwn(obj, Js.<JsObject.HasOwnPropertyNameUnionType>uncheckedCast(propertyName));
  }

  @JsOverlay
  public static final boolean hasOwn(JsObject obj, String propertyName) {
    return hasOwn(obj, Js.<JsObject.HasOwnPropertyNameUnionType>uncheckedCast(propertyName));
  }

  @JsOverlay
  public static final boolean hasOwn(
      Object obj, JsObject.HasOwnPropertyNameUnionType propertyName) {
    return hasOwn(Js.<JsObject>uncheckedCast(obj), propertyName);
  }

  @JsOverlay
  public static final boolean hasOwn(Object obj, Object propertyName) {
    return hasOwn(Js.<JsObject>uncheckedCast(obj), propertyName);
  }

  @JsOverlay
  public static final boolean hasOwn(Object obj, String propertyName) {
    return hasOwn(Js.<JsObject>uncheckedCast(obj), propertyName);
  }

  public static native boolean is(Object a, Object b);

  public static native boolean isExtensible(JsObject obj);

  @JsOverlay
  public static final boolean isExtensible(Object obj) {
    return isExtensible(Js.<JsObject>uncheckedCast(obj));
  }

  public static native boolean isFrozen(JsObject obj);

  @JsOverlay
  public static final boolean isFrozen(Object obj) {
    return isFrozen(Js.<JsObject>uncheckedCast(obj));
  }

  public static native boolean isSealed(JsObject obj);

  @JsOverlay
  public static final boolean isSealed(Object obj) {
    return isSealed(Js.<JsObject>uncheckedCast(obj));
  }

  public static native JsArray<String> keys(JsObject obj);

  @JsOverlay
  public static final JsArray<String> keys(Object obj) {
    return keys(Js.<JsObject>uncheckedCast(obj));
  }

  public static native <T> T preventExtensions(T obj);

  public static native <T> T seal(T obj);

  public static native JsObject setPrototypeOf(JsObject obj, Object proto);

  @JsOverlay
  public static final JsObject setPrototypeOf(Object obj, Object proto) {
    return setPrototypeOf(Js.<JsObject>uncheckedCast(obj), proto);
  }

  public static native <T> JsArray<T> values(JsPropertyMap<T> obj);

  @Deprecated public JsObject __parent__;
  public JsObject __proto__;
  public Function constructor;

  public JsObject() {}

  public JsObject(Object value) {}

  @Deprecated
  public native void __defineGetter__(String sprop, Function fun);

  @Deprecated
  public native void __defineSetter__(String sprop, Function fun);

  @Deprecated
  public native Function __lookupGetter__(String sprop);

  @Deprecated
  public native Function __lookupSetter__(String sprop);

  @Deprecated
  public native Object __noSuchMethod__(Function fun);

  public native boolean hasOwnProperty(Object propertyName);

  public native boolean isPrototypeOf(JsObject other);

  @JsOverlay
  public final boolean isPrototypeOf(Object other) {
    return isPrototypeOf(Js.<JsObject>uncheckedCast(other));
  }

  @JsOverlay
  public final boolean propertyIsEnumerable(Object propertyName) {
    return propertyIsEnumerable(
        Js.<JsObject.PropertyIsEnumerablePropertyNameUnionType>uncheckedCast(propertyName));
  }

  public native boolean propertyIsEnumerable(
      JsObject.PropertyIsEnumerablePropertyNameUnionType propertyName);

  @JsOverlay
  public final boolean propertyIsEnumerable(String propertyName) {
    return propertyIsEnumerable(
        Js.<JsObject.PropertyIsEnumerablePropertyNameUnionType>uncheckedCast(propertyName));
  }

  public native Object toJSON();

  public native Object toJSON(String key);

  public native String toLocaleString();

  public native String toSource();

  @JsMethod(name = "toString")
  public native String toString_();

  public native Object valueOf();
}
