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
import elemental2.promise.Promise;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface ServiceWorkerClients {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface OpenWindowUrlUnionType {
    @JsOverlay
    static ServiceWorkerClients.OpenWindowUrlUnionType of(Object o) {
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

  Promise<Void> claim();

  Promise<ServiceWorkerClient> get(String id);

  Promise<JsArray<ServiceWorkerClient>> getAll();

  Promise<JsArray<ServiceWorkerClient>> getAll(ServiceWorkerClientQueryOptions options);

  Promise<JsArray<ServiceWorkerClient>> matchAll();

  Promise<JsArray<ServiceWorkerClient>> matchAll(ServiceWorkerClientQueryOptions options);

  Promise<ServiceWorkerClient> openWindow(ServiceWorkerClients.OpenWindowUrlUnionType url);

  @JsOverlay
  default Promise<ServiceWorkerClient> openWindow(String url) {
    return openWindow(Js.<ServiceWorkerClients.OpenWindowUrlUnionType>uncheckedCast(url));
  }

  @JsOverlay
  default Promise<ServiceWorkerClient> openWindow(URL url) {
    return openWindow(Js.<ServiceWorkerClients.OpenWindowUrlUnionType>uncheckedCast(url));
  }
}
