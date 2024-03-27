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
public interface SecurityPolicyViolationEventInit extends EventInit {
  @JsOverlay
  static SecurityPolicyViolationEventInit create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  String getBlockedURI();

  @JsProperty
  int getColumnNumber();

  @JsProperty
  String getDisposition();

  @JsProperty
  String getDocumentURI();

  @JsProperty
  String getEffectiveDirective();

  @JsProperty
  int getLineNumber();

  @JsProperty
  String getOriginalPolicy();

  @JsProperty
  String getReferrer();

  @JsProperty
  String getSample();

  @JsProperty
  String getSourceFile();

  @JsProperty
  int getStatusCode();

  @JsProperty
  String getViolatedDirective();

  @JsProperty
  void setBlockedURI(String blockedURI);

  @JsProperty
  void setColumnNumber(int columnNumber);

  @JsProperty
  void setDisposition(String disposition);

  @JsProperty
  void setDocumentURI(String documentURI);

  @JsProperty
  void setEffectiveDirective(String effectiveDirective);

  @JsProperty
  void setLineNumber(int lineNumber);

  @JsProperty
  void setOriginalPolicy(String originalPolicy);

  @JsProperty
  void setReferrer(String referrer);

  @JsProperty
  void setSample(String sample);

  @JsProperty
  void setSourceFile(String sourceFile);

  @JsProperty
  void setStatusCode(int statusCode);

  @JsProperty
  void setViolatedDirective(String violatedDirective);
}
