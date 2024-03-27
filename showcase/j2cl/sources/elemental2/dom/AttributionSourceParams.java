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
public interface AttributionSourceParams {
  @JsOverlay
  static AttributionSourceParams create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  String getAttributionDestination();

  @JsProperty
  double getAttributionExpiry();

  @JsProperty
  String getAttributionReportTo();

  @JsProperty
  String getAttributionSourceEventId();

  @JsProperty
  void setAttributionDestination(String attributionDestination);

  @JsProperty
  void setAttributionExpiry(double attributionExpiry);

  @JsProperty
  void setAttributionReportTo(String attributionReportTo);

  @JsProperty
  void setAttributionSourceEventId(String attributionSourceEventId);
}
