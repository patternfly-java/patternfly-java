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
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCConfiguration {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetIceServersArrayUnionType {
    @JsOverlay
    static RTCConfiguration.GetIceServersArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default RTCConfiguration.IceServersFieldType asIceServersFieldType() {
      return Js.cast(this);
    }

    @JsOverlay
    default RTCIceServerInterface_ asRTCIceServerInterface_() {
      return Js.cast(this);
    }

    @JsOverlay
    default RTCConfiguration.UrlsFieldType asUrlsFieldType() {
      return Js.cast(this);
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface IceServersFieldType {
    @JsOverlay
    static RTCConfiguration.IceServersFieldType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    String getUrls();

    @JsProperty
    void setUrls(String urls);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface UrlsFieldType {
    @JsOverlay
    static RTCConfiguration.UrlsFieldType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    JsArray<String> getUrls();

    @JsProperty
    void setUrls(JsArray<String> urls);

    @JsOverlay
    default void setUrls(String[] urls) {
      setUrls(Js.<JsArray<String>>uncheckedCast(urls));
    }
  }

  @JsOverlay
  static RTCConfiguration create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  String getBundlePolicy();

  @JsProperty
  JsArray<RTCCertificate> getCertificates();

  @JsProperty
  double getIceCandidatePoolSize();

  @JsProperty
  JsArray<RTCConfiguration.GetIceServersArrayUnionType> getIceServers();

  @JsProperty
  String getIceTransportPolicy();

  @JsProperty
  String getRtcpMuxPolicy();

  @JsProperty
  String getSdpSemantics();

  @JsProperty
  void setBundlePolicy(String bundlePolicy);

  @JsProperty
  void setCertificates(JsArray<RTCCertificate> certificates);

  @JsOverlay
  default void setCertificates(RTCCertificate[] certificates) {
    setCertificates(Js.<JsArray<RTCCertificate>>uncheckedCast(certificates));
  }

  @JsProperty
  void setIceCandidatePoolSize(double iceCandidatePoolSize);

  @JsOverlay
  default void setIceServers(RTCConfiguration.GetIceServersArrayUnionType[] iceServers) {
    setIceServers(
        Js.<JsArray<RTCConfiguration.GetIceServersArrayUnionType>>uncheckedCast(iceServers));
  }

  @JsProperty
  void setIceServers(JsArray<RTCConfiguration.GetIceServersArrayUnionType> iceServers);

  @JsProperty
  void setIceTransportPolicy(String iceTransportPolicy);

  @JsProperty
  void setRtcpMuxPolicy(String rtcpMuxPolicy);

  @JsProperty
  void setSdpSemantics(String sdpSemantics);
}
