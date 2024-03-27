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
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface PerformanceMeasureOptions {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetEndUnionType {
    @JsOverlay
    static PerformanceMeasureOptions.GetEndUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetStartUnionType {
    @JsOverlay
    static PerformanceMeasureOptions.GetStartUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsOverlay
  static PerformanceMeasureOptions create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  JsObject getDetail();

  @JsProperty
  double getDuration();

  @JsProperty
  PerformanceMeasureOptions.GetEndUnionType getEnd();

  @JsProperty
  PerformanceMeasureOptions.GetStartUnionType getStart();

  @JsProperty
  void setDetail(JsObject detail);

  @JsOverlay
  default void setDetail(Object detail) {
    setDetail(Js.<JsObject>uncheckedCast(detail));
  }

  @JsProperty
  void setDuration(double duration);

  @JsProperty
  void setEnd(PerformanceMeasureOptions.GetEndUnionType end);

  @JsOverlay
  default void setEnd(String end) {
    setEnd(Js.<PerformanceMeasureOptions.GetEndUnionType>uncheckedCast(end));
  }

  @JsOverlay
  default void setEnd(double end) {
    setEnd(Js.<PerformanceMeasureOptions.GetEndUnionType>uncheckedCast(end));
  }

  @JsProperty
  void setStart(PerformanceMeasureOptions.GetStartUnionType start);

  @JsOverlay
  default void setStart(String start) {
    setStart(Js.<PerformanceMeasureOptions.GetStartUnionType>uncheckedCast(start));
  }

  @JsOverlay
  default void setStart(double start) {
    setStart(Js.<PerformanceMeasureOptions.GetStartUnionType>uncheckedCast(start));
  }
}
