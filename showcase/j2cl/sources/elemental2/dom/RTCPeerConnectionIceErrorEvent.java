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

import elemental2.core.JsObject;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class RTCPeerConnectionIceErrorEvent extends Event {
  public String address;
  public double errorCode;
  public String errorText;
  public double port;
  public String url;

  public RTCPeerConnectionIceErrorEvent(String type, JsObject eventInitDict) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (EventInit) null);
  }

  public RTCPeerConnectionIceErrorEvent(String type, Object eventInitDict) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (EventInit) null);
  }
}
