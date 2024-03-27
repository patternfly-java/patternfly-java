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
import jsinterop.base.JsConstructorFn;

@JsType(isNative = true, name = "goog.global", namespace = JsPackage.GLOBAL)
public class Global {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface EvalCodeUnionType {
    @JsOverlay
    static Global.EvalCodeUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default TrustedScript asTrustedScript() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }

    @JsOverlay
    default boolean isTrustedScript() {
      return (Object) this instanceof TrustedScript;
    }
  }

  @Deprecated public static JsConstructorFn<?> ActiveXObject;
  @JsOverlay public static final double Infinity = Global__Constants.Infinity;
  public static JSONType JSON;
  @JsOverlay public static final double NaN = Global__Constants.NaN;
  public static Arguments arguments;
  @JsOverlay public static final Object undefined = Global__Constants.undefined;

  public static native String decodeURI(String uri);

  public static native String decodeURIComponent(String uri);

  public static native String encodeURI(String uri);

  public static native String encodeURIComponent(String uri);

  public static native String escape(String str);

  public static native Object eval(Global.EvalCodeUnionType code);

  @JsOverlay
  public static final Object eval(String code) {
    return eval(Js.<Global.EvalCodeUnionType>uncheckedCast(code));
  }

  @JsOverlay
  public static final Object eval(TrustedScript code) {
    return eval(Js.<Global.EvalCodeUnionType>uncheckedCast(code));
  }

  public static native boolean isFinite(Object num);

  public static native boolean isNaN(Object num);

  public static native double parseFloat(Object num);

  public static native int parseInt(Object num, int base);

  public static native String unescape(String str);
}
