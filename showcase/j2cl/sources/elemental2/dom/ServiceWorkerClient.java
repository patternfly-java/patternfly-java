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

import elemental2.core.JsArray;
import elemental2.core.Transferable;
import elemental2.promise.Promise;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ServiceWorkerClient {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface NavigateUrlUnionType {
    @JsOverlay
    static ServiceWorkerClient.NavigateUrlUnionType of(Object o) {
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

  public boolean focused;
  public String frameType;
  public boolean hidden;
  public String id;
  public Promise<Void> ready;
  public String url;
  public String visibilityState;

  public native Promise focus();

  public native Promise<ServiceWorkerClient> navigate(ServiceWorkerClient.NavigateUrlUnionType url);

  @JsOverlay
  public final Promise<ServiceWorkerClient> navigate(String url) {
    return navigate(Js.<ServiceWorkerClient.NavigateUrlUnionType>uncheckedCast(url));
  }

  @JsOverlay
  public final Promise<ServiceWorkerClient> navigate(URL url) {
    return navigate(Js.<ServiceWorkerClient.NavigateUrlUnionType>uncheckedCast(url));
  }

  public native void postMessage(Object message, JsArray<Transferable> transfer);

  @JsOverlay
  public final void postMessage(Object message, Transferable[] transfer) {
    postMessage(message, Js.<JsArray<Transferable>>uncheckedCast(transfer));
  }

  public native void postMessage(Object message);
}
