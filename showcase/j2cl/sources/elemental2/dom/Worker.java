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
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Worker implements EventTarget {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorScriptURLUnionType {
    @JsOverlay
    static Worker.ConstructorScriptURLUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default TrustedScriptURL asTrustedScriptURL() {
      return Js.cast(this);
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
    default boolean isTrustedScriptURL() {
      return (Object) this instanceof TrustedScriptURL;
    }

    @JsOverlay
    default boolean isURL() {
      return (Object) this instanceof URL;
    }
  }

  @JsFunction
  public interface OnerrorFn {
    void onInvoke(ErrorEvent p0);
  }

  @JsFunction
  public interface OnmessageFn {
    void onInvoke(MessageEvent<Object> p0);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface PostMessageTransferOrOptionsUnionType {
    @JsOverlay
    static Worker.PostMessageTransferOrOptionsUnionType of(Object o) {
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

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface WebkitPostMessageTransferOrOptionsUnionType {
    @JsOverlay
    static Worker.WebkitPostMessageTransferOrOptionsUnionType of(Object o) {
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

  public Worker.OnerrorFn onerror;
  public Worker.OnmessageFn onmessage;

  public Worker(Worker.ConstructorScriptURLUnionType scriptURL, WorkerOptions options) {}

  public Worker(Worker.ConstructorScriptURLUnionType scriptURL) {}

  public Worker(String scriptURL, WorkerOptions options) {}

  public Worker(String scriptURL) {}

  public Worker(TrustedScriptURL scriptURL, WorkerOptions options) {}

  public Worker(TrustedScriptURL scriptURL) {}

  public Worker(URL scriptURL, WorkerOptions options) {}

  public Worker(URL scriptURL) {}

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType options);

  public native void addEventListener(String type, EventListener listener);

  public native boolean dispatchEvent(Event evt);

  @JsOverlay
  public final void postMessage(Object message, JsArray<Transferable> transferOrOptions) {
    postMessage(
        message, Js.<Worker.PostMessageTransferOrOptionsUnionType>uncheckedCast(transferOrOptions));
  }

  public native void postMessage(
      Object message, Worker.PostMessageTransferOrOptionsUnionType transferOrOptions);

  @JsOverlay
  public final void postMessage(Object message, StructuredSerializeOptions transferOrOptions) {
    postMessage(
        message, Js.<Worker.PostMessageTransferOrOptionsUnionType>uncheckedCast(transferOrOptions));
  }

  @JsOverlay
  public final void postMessage(Object message, Transferable[] transferOrOptions) {
    postMessage(message, Js.<JsArray<Transferable>>uncheckedCast(transferOrOptions));
  }

  public native void postMessage(Object message);

  public native void removeEventListener(
      String type, EventListener listener, EventTarget.RemoveEventListenerOptionsUnionType options);

  public native void removeEventListener(String type, EventListener listener);

  public native void terminate();

  @JsOverlay
  public final void webkitPostMessage(Object message, JsArray<Transferable> transferOrOptions) {
    webkitPostMessage(
        message,
        Js.<Worker.WebkitPostMessageTransferOrOptionsUnionType>uncheckedCast(transferOrOptions));
  }

  @JsOverlay
  public final void webkitPostMessage(
      Object message, StructuredSerializeOptions transferOrOptions) {
    webkitPostMessage(
        message,
        Js.<Worker.WebkitPostMessageTransferOrOptionsUnionType>uncheckedCast(transferOrOptions));
  }

  @JsOverlay
  public final void webkitPostMessage(Object message, Transferable[] transferOrOptions) {
    webkitPostMessage(message, Js.<JsArray<Transferable>>uncheckedCast(transferOrOptions));
  }

  public native void webkitPostMessage(
      Object message, Worker.WebkitPostMessageTransferOrOptionsUnionType transferOrOptions);

  public native void webkitPostMessage(Object message);
}
