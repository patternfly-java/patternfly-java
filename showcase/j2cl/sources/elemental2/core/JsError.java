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
package elemental2.core;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, name = "Error", namespace = JsPackage.GLOBAL)
public class JsError {
  public static double stackTraceLimit;

  public static native void captureStackTrace(JsObject error, Function constructor);

  public static native void captureStackTrace(JsObject error);

  @JsOverlay
  public static final void captureStackTrace(Object error, Function constructor) {
    captureStackTrace(Js.<JsObject>uncheckedCast(error), constructor);
  }

  @JsOverlay
  public static final void captureStackTrace(Object error) {
    captureStackTrace(Js.<JsObject>uncheckedCast(error));
  }

  public JsError cause;
  public String description;
  public String fileName;
  public double lineNumber;
  public String message;
  public String name;
  public Object sourceURL;
  public String stack;

  public JsError() {}

  public JsError(Object message, Object fileNameOrOptions, Object line) {}

  public JsError(Object message, Object fileNameOrOptions) {}

  public JsError(Object message) {}
}
