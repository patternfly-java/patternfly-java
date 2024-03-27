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
public class Location {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AssignUrlUnionType {
    @JsOverlay
    static Location.AssignUrlUnionType of(Object o) {
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
  public interface ReplaceUrlUnionType {
    @JsOverlay
    static Location.ReplaceUrlUnionType of(Object o) {
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

  public DOMStringList ancestorOrigins;
  public String hash;
  public String host;
  public String hostname;
  public String href;
  public String origin;
  public String pathname;
  public String port;
  public String protocol;
  public String search;

  public native void assign(Location.AssignUrlUnionType url);

  @JsOverlay
  public final void assign(String url) {
    assign(Js.<Location.AssignUrlUnionType>uncheckedCast(url));
  }

  @JsOverlay
  public final void assign(URL url) {
    assign(Js.<Location.AssignUrlUnionType>uncheckedCast(url));
  }

  public native void reload();

  public native void reload(boolean forceReload);

  public native void replace(Location.ReplaceUrlUnionType url);

  @JsOverlay
  public final void replace(String url) {
    replace(Js.<Location.ReplaceUrlUnionType>uncheckedCast(url));
  }

  @JsOverlay
  public final void replace(URL url) {
    replace(Js.<Location.ReplaceUrlUnionType>uncheckedCast(url));
  }
}
