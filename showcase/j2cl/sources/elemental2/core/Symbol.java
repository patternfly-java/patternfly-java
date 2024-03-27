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

import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Symbol {
  @JsOverlay public static final Object asyncIterator = Symbol__Constants.asyncIterator;
  @JsOverlay public static final Object hasInstance = Symbol__Constants.hasInstance;
  @JsOverlay public static final Object isConcatSpreadable = Symbol__Constants.isConcatSpreadable;
  @JsOverlay public static final Object iterator = Symbol__Constants.iterator;
  @JsOverlay public static final Object match = Symbol__Constants.match;
  @JsOverlay public static final Object matchAll = Symbol__Constants.matchAll;
  @JsOverlay public static final Object replace = Symbol__Constants.replace;
  @JsOverlay public static final Object search = Symbol__Constants.search;
  @JsOverlay public static final Object species = Symbol__Constants.species;
  @JsOverlay public static final Object toPrimitive = Symbol__Constants.toPrimitive;
  @JsOverlay public static final Object toStringTag = Symbol__Constants.toStringTag;
  @JsOverlay public static final Object unscopables = Symbol__Constants.unscopables;

  @JsMethod(name = "for")
  public static native Object for_(String sym);

  public static native String keyFor(Object sym);

  public String description;

  public Symbol() {}

  public Symbol(Object description) {}
}
