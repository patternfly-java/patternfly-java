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
public interface DisplayMediaStreamOptions {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetAudioUnionType {
    @JsOverlay
    static DisplayMediaStreamOptions.GetAudioUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default boolean asBoolean() {
      return Js.asBoolean(this);
    }

    @JsOverlay
    default MediaTrackConstraints asMediaTrackConstraints() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBoolean() {
      return (Object) this instanceof Boolean;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetVideoUnionType {
    @JsOverlay
    static DisplayMediaStreamOptions.GetVideoUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default boolean asBoolean() {
      return Js.asBoolean(this);
    }

    @JsOverlay
    default MediaTrackConstraints asMediaTrackConstraints() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBoolean() {
      return (Object) this instanceof Boolean;
    }
  }

  @JsOverlay
  static DisplayMediaStreamOptions create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  DisplayMediaStreamOptions.GetAudioUnionType getAudio();

  @JsProperty
  CaptureController getController();

  @JsProperty
  String getSelfBrowserSurface();

  @JsProperty
  String getSurfaceSwitching();

  @JsProperty
  String getSystemAudio();

  @JsProperty
  DisplayMediaStreamOptions.GetVideoUnionType getVideo();

  @JsProperty
  boolean isPreferCurrentTab();

  @JsProperty
  void setAudio(DisplayMediaStreamOptions.GetAudioUnionType audio);

  @JsOverlay
  default void setAudio(MediaTrackConstraints audio) {
    setAudio(Js.<DisplayMediaStreamOptions.GetAudioUnionType>uncheckedCast(audio));
  }

  @JsOverlay
  default void setAudio(boolean audio) {
    setAudio(Js.<DisplayMediaStreamOptions.GetAudioUnionType>uncheckedCast(audio));
  }

  @JsProperty
  void setController(CaptureController controller);

  @JsProperty
  void setPreferCurrentTab(boolean preferCurrentTab);

  @JsProperty
  void setSelfBrowserSurface(String selfBrowserSurface);

  @JsProperty
  void setSurfaceSwitching(String surfaceSwitching);

  @JsProperty
  void setSystemAudio(String systemAudio);

  @JsProperty
  void setVideo(DisplayMediaStreamOptions.GetVideoUnionType video);

  @JsOverlay
  default void setVideo(MediaTrackConstraints video) {
    setVideo(Js.<DisplayMediaStreamOptions.GetVideoUnionType>uncheckedCast(video));
  }

  @JsOverlay
  default void setVideo(boolean video) {
    setVideo(Js.<DisplayMediaStreamOptions.GetVideoUnionType>uncheckedCast(video));
  }
}
