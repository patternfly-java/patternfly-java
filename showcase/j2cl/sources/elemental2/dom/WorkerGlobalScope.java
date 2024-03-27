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
import elemental2.core.JsError;
import elemental2.core.Transferable;
import elemental2.promise.Promise;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface WorkerGlobalScope extends EventTarget {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface FetchInputUnionType {
    @JsOverlay
    static WorkerGlobalScope.FetchInputUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Request asRequest() {
      return Js.cast(this);
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
    default boolean isRequest() {
      return (Object) this instanceof Request;
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

  @JsFunction
  public interface OnerrorFn {
    void onInvoke(String event, String source, int lineno, int colno, JsError error);
  }

  @JsFunction
  public interface OnofflineFn {
    void onInvoke(Event p0);
  }

  @JsFunction
  public interface OnonlineFn {
    void onInvoke(Event p0);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface PostMessageTransferOrOptionsUnionType {
    @JsOverlay
    static WorkerGlobalScope.PostMessageTransferOrOptionsUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArray<Transferable> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default StructuredSerializeOptions asStructuredSerializeOptions() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }
  }

  void close();

  Promise<Response> fetch(WorkerGlobalScope.FetchInputUnionType input, RequestInit init);

  Promise<Response> fetch(WorkerGlobalScope.FetchInputUnionType input);

  @JsOverlay
  default Promise<Response> fetch(Request input, RequestInit init) {
    return fetch(Js.<WorkerGlobalScope.FetchInputUnionType>uncheckedCast(input), init);
  }

  @JsOverlay
  default Promise<Response> fetch(Request input) {
    return fetch(Js.<WorkerGlobalScope.FetchInputUnionType>uncheckedCast(input));
  }

  @JsOverlay
  default Promise<Response> fetch(String input, RequestInit init) {
    return fetch(Js.<WorkerGlobalScope.FetchInputUnionType>uncheckedCast(input), init);
  }

  @JsOverlay
  default Promise<Response> fetch(String input) {
    return fetch(Js.<WorkerGlobalScope.FetchInputUnionType>uncheckedCast(input));
  }

  @JsOverlay
  default Promise<Response> fetch(URL input, RequestInit init) {
    return fetch(Js.<WorkerGlobalScope.FetchInputUnionType>uncheckedCast(input), init);
  }

  @JsOverlay
  default Promise<Response> fetch(URL input) {
    return fetch(Js.<WorkerGlobalScope.FetchInputUnionType>uncheckedCast(input));
  }

  @JsProperty
  WorkerLocation getLocation();

  @JsProperty
  WorkerNavigator getNavigator();

  @JsProperty
  WorkerGlobalScope.OnerrorFn getOnerror();

  @JsProperty
  WorkerGlobalScope.OnofflineFn getOnoffline();

  @JsProperty
  WorkerGlobalScope.OnonlineFn getOnonline();

  @JsProperty
  String getOrigin();

  @JsProperty
  WorkerPerformance getPerformance();

  @JsProperty
  WorkerGlobalScope getSelf();

  @JsOverlay
  default void postMessage(Object message, JsArray<Transferable> transferOrOptions) {
    postMessage(
        message,
        Js.<WorkerGlobalScope.PostMessageTransferOrOptionsUnionType>uncheckedCast(
            transferOrOptions));
  }

  void postMessage(
      Object message, WorkerGlobalScope.PostMessageTransferOrOptionsUnionType transferOrOptions);

  @JsOverlay
  default void postMessage(Object message, StructuredSerializeOptions transferOrOptions) {
    postMessage(
        message,
        Js.<WorkerGlobalScope.PostMessageTransferOrOptionsUnionType>uncheckedCast(
            transferOrOptions));
  }

  @JsOverlay
  default void postMessage(Object message, Transferable[] transferOrOptions) {
    postMessage(message, Js.<JsArray<Transferable>>uncheckedCast(transferOrOptions));
  }

  void postMessage(Object message);

  @JsProperty
  void setLocation(WorkerLocation location);

  @JsProperty
  void setNavigator(WorkerNavigator navigator);

  @JsProperty
  void setOnerror(WorkerGlobalScope.OnerrorFn onerror);

  @JsProperty
  void setOnoffline(WorkerGlobalScope.OnofflineFn onoffline);

  @JsProperty
  void setOnonline(WorkerGlobalScope.OnonlineFn ononline);

  @JsProperty
  void setPerformance(WorkerPerformance performance);

  @JsProperty
  void setSelf(WorkerGlobalScope self);
}
