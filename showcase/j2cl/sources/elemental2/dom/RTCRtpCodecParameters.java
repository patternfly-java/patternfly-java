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
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCRtpCodecParameters {
  @JsOverlay
  static RTCRtpCodecParameters create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  double getChannels();

  @JsProperty
  double getClockRate();

  @JsProperty
  double getCname();

  @JsProperty
  String getMimeType();

  @JsProperty
  String getSdpFmtpLine();

  @JsProperty
  void setChannels(double channels);

  @JsProperty
  void setClockRate(double clockRate);

  @JsProperty
  void setCname(double cname);

  @JsProperty
  void setMimeType(String mimeType);

  @JsProperty
  void setSdpFmtpLine(String sdpFmtpLine);
}
