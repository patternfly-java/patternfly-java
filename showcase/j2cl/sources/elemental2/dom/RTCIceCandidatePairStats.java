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

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCIceCandidatePairStats extends RTCStats {
  @JsProperty
  double getAvailableIncomingBitrate();

  @JsProperty
  double getAvailableOutgoingBitrate();

  @JsProperty
  double getBytesDiscardedOnSend();

  @JsProperty
  double getBytesReceived();

  @JsProperty
  double getBytesSent();

  @JsProperty
  double getConsentRequestsSent();

  @JsProperty
  double getCurrentRoundTripTime();

  @JsProperty
  double getLastPacketReceivedTimestamp();

  @JsProperty
  String getLocalCandidateId();

  @JsProperty
  double getPacketsDiscardedOnSend();

  @JsProperty
  double getPacketsReceived();

  @JsProperty
  double getPacketsSent();

  @JsProperty
  String getRemoteCandidateId();

  @JsProperty
  double getRequestsReceived();

  @JsProperty
  double getRequestsSent();

  @JsProperty
  double getResponsesReceived();

  @JsProperty
  double getResponsesSent();

  @JsProperty
  String getState();

  @JsProperty
  double getTotalRoundTripTime();

  @JsProperty
  String getTransportId();

  @JsProperty
  boolean isNominated();
}
