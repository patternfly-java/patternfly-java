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
package elemental2.dom;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class History {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface PushStateUrlUnionType {
    @JsOverlay
    static History.PushStateUrlUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default URL asURL() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }

    @JsOverlay
    default boolean isURL() {
      return (Object) this instanceof URL;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ReplaceStateUrlUnionType {
    @JsOverlay
    static History.ReplaceStateUrlUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default URL asURL() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }

    @JsOverlay
    default boolean isURL() {
      return (Object) this instanceof URL;
    }
  }

  public int length;
  public String scrollRestoration;
  public Object state;

  public native void back();

  public native void forward();

  public native void go(int delta);

  public native void pushState(Object data, String title, History.PushStateUrlUnionType url);

  @JsOverlay
  public final void pushState(Object data, String title, String url) {
    pushState(data, title, Js.<History.PushStateUrlUnionType>uncheckedCast(url));
  }

  @JsOverlay
  public final void pushState(Object data, String title, URL url) {
    pushState(data, title, Js.<History.PushStateUrlUnionType>uncheckedCast(url));
  }

  public native void pushState(Object data, String title);

  public native void replaceState(Object data, String title, History.ReplaceStateUrlUnionType url);

  @JsOverlay
  public final void replaceState(Object data, String title, String url) {
    replaceState(data, title, Js.<History.ReplaceStateUrlUnionType>uncheckedCast(url));
  }

  @JsOverlay
  public final void replaceState(Object data, String title, URL url) {
    replaceState(data, title, Js.<History.ReplaceStateUrlUnionType>uncheckedCast(url));
  }

  public native void replaceState(Object data, String title);
}
