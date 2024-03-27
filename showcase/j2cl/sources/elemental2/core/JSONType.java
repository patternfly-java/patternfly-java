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

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class JSONType {
  @JsFunction
  public interface ParseReviverFn {
    Object onInvoke(String p0, Object p1);
  }

  @JsFunction
  public interface StringifyReplacerFn {
    Object onInvoke(String p0, Object p1);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface StringifyReplacerUnionType {
    @JsOverlay
    static JSONType.StringifyReplacerUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArray<String> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default JSONType.StringifyReplacerFn asStringifyReplacerFn() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isStringifyReplacerFn() {
      return (Object) this instanceof JSONType.StringifyReplacerFn;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface StringifySpaceUnionType {
    @JsOverlay
    static JSONType.StringifySpaceUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default int asInt() {
      return Js.asInt(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isInt() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public native Object parse(String jsonStr, JSONType.ParseReviverFn reviver);

  public native Object parse(String jsonStr);

  @JsOverlay
  public final String stringify(Object jsonObj, JsArray<String> replacer, String space) {
    return stringify(
        jsonObj,
        Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer),
        Js.<JSONType.StringifySpaceUnionType>uncheckedCast(space));
  }

  @JsOverlay
  public final String stringify(
      Object jsonObj, JsArray<String> replacer, JSONType.StringifySpaceUnionType space) {
    return stringify(
        jsonObj, Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer), space);
  }

  @JsOverlay
  public final String stringify(Object jsonObj, JsArray<String> replacer, int space) {
    return stringify(
        jsonObj,
        Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer),
        Js.<JSONType.StringifySpaceUnionType>uncheckedCast(space));
  }

  @JsOverlay
  public final String stringify(Object jsonObj, JsArray<String> replacer) {
    return stringify(jsonObj, Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer));
  }

  @JsOverlay
  public final String stringify(Object jsonObj, String[] replacer, String space) {
    return stringify(jsonObj, Js.<JsArray<String>>uncheckedCast(replacer), space);
  }

  @JsOverlay
  public final String stringify(
      Object jsonObj, String[] replacer, JSONType.StringifySpaceUnionType space) {
    return stringify(jsonObj, Js.<JsArray<String>>uncheckedCast(replacer), space);
  }

  @JsOverlay
  public final String stringify(Object jsonObj, String[] replacer, int space) {
    return stringify(jsonObj, Js.<JsArray<String>>uncheckedCast(replacer), space);
  }

  @JsOverlay
  public final String stringify(Object jsonObj, String[] replacer) {
    return stringify(jsonObj, Js.<JsArray<String>>uncheckedCast(replacer));
  }

  @JsOverlay
  public final String stringify(
      Object jsonObj, JSONType.StringifyReplacerFn replacer, String space) {
    return stringify(
        jsonObj,
        Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer),
        Js.<JSONType.StringifySpaceUnionType>uncheckedCast(space));
  }

  @JsOverlay
  public final String stringify(
      Object jsonObj,
      JSONType.StringifyReplacerFn replacer,
      JSONType.StringifySpaceUnionType space) {
    return stringify(
        jsonObj, Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer), space);
  }

  @JsOverlay
  public final String stringify(Object jsonObj, JSONType.StringifyReplacerFn replacer, int space) {
    return stringify(
        jsonObj,
        Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer),
        Js.<JSONType.StringifySpaceUnionType>uncheckedCast(space));
  }

  @JsOverlay
  public final String stringify(Object jsonObj, JSONType.StringifyReplacerFn replacer) {
    return stringify(jsonObj, Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer));
  }

  @JsOverlay
  public final String stringify(
      Object jsonObj, JSONType.StringifyReplacerUnionType replacer, String space) {
    return stringify(jsonObj, replacer, Js.<JSONType.StringifySpaceUnionType>uncheckedCast(space));
  }

  public native String stringify(
      Object jsonObj,
      JSONType.StringifyReplacerUnionType replacer,
      JSONType.StringifySpaceUnionType space);

  @JsOverlay
  public final String stringify(
      Object jsonObj, JSONType.StringifyReplacerUnionType replacer, int space) {
    return stringify(jsonObj, replacer, Js.<JSONType.StringifySpaceUnionType>uncheckedCast(space));
  }

  public native String stringify(Object jsonObj, JSONType.StringifyReplacerUnionType replacer);

  public native String stringify(Object jsonObj);
}
