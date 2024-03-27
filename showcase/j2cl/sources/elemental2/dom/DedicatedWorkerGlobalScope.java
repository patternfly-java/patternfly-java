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
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface DedicatedWorkerGlobalScope extends WorkerGlobalScope {
  @JsFunction
  public interface OnmessageFn {
    void onInvoke(MessageEvent<Object> p0);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface WebkitPostMessageTransferOrOptionsUnionType {
    @JsOverlay
    static DedicatedWorkerGlobalScope.WebkitPostMessageTransferOrOptionsUnionType of(Object o) {
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

  @JsProperty
  DedicatedWorkerGlobalScope.OnmessageFn getOnmessage();

  void postMessage(
      Object message, WorkerGlobalScope.PostMessageTransferOrOptionsUnionType transferOrOptions);

  void postMessage(Object message);

  @JsProperty
  void setOnmessage(DedicatedWorkerGlobalScope.OnmessageFn onmessage);

  @JsOverlay
  default void webkitPostMessage(Object message, JsArray<Transferable> transferOrOptions) {
    webkitPostMessage(
        message,
        Js.<DedicatedWorkerGlobalScope.WebkitPostMessageTransferOrOptionsUnionType>uncheckedCast(
            transferOrOptions));
  }

  @JsOverlay
  default void webkitPostMessage(Object message, StructuredSerializeOptions transferOrOptions) {
    webkitPostMessage(
        message,
        Js.<DedicatedWorkerGlobalScope.WebkitPostMessageTransferOrOptionsUnionType>uncheckedCast(
            transferOrOptions));
  }

  @JsOverlay
  default void webkitPostMessage(Object message, Transferable[] transferOrOptions) {
    webkitPostMessage(message, Js.<JsArray<Transferable>>uncheckedCast(transferOrOptions));
  }

  void webkitPostMessage(
      Object message,
      DedicatedWorkerGlobalScope.WebkitPostMessageTransferOrOptionsUnionType transferOrOptions);

  void webkitPostMessage(Object message);
}
