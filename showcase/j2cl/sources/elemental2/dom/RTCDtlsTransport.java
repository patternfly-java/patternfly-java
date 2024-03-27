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

import elemental2.core.ArrayBuffer;
import elemental2.core.JsArray;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCDtlsTransport extends EventTarget {
  @JsFunction
  public interface OnerrorFn {
    Object onInvoke(RTCErrorEvent p0);
  }

  @JsFunction
  public interface OnstatechangeFn {
    Object onInvoke(Event p0);
  }

  @JsProperty
  RTCIceTransport getIceTransport();

  @JsProperty
  RTCDtlsTransport.OnerrorFn getOnerror();

  @JsProperty
  RTCDtlsTransport.OnstatechangeFn getOnstatechange();

  JsArray<ArrayBuffer> getRemoteCertificates();

  @JsProperty
  String getState();

  @JsProperty
  void setOnerror(RTCDtlsTransport.OnerrorFn onerror);

  @JsProperty
  void setOnstatechange(RTCDtlsTransport.OnstatechangeFn onstatechange);
}
