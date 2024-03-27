/*
 * Copyright 2008 Google Inc.
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

package org.treblereel.j2cl.processors.common.resources;

import elemental2.dom.Image;
import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.treblereel.j2cl.processors.common.resources.ResourcePrototype.DefaultExtensions;

/** Provides access to image resources at runtime. */
@DefaultExtensions(value = {".png", ".jpg", ".gif", ".bmp"})
public interface ImageResource extends ResourcePrototype {

  /** Returns the height of the image. */
  int getHeight();

  /** Returns the Image */
  Image getImage();

  /** Returns the width of the image. */
  int getWidth();

  String getSrc();

  /** Specifies additional options to control how an image is bundled. */
  @Documented
  @Retention(RetentionPolicy.RUNTIME)
  @Target(ElementType.METHOD)
  @interface ImageOptions {

    /**
     * Set to a positive value to override the image's intrinsic height. The image bundling code
     * will scale the image to the desired height. If only one of <code>width</code> or <code>height
     * </code> are set, the aspect ratio of the image will be maintained.
     */
    int height() default -1;

    /**
     * Set to a positive value to override the image's intrinsic width. The image bundling code will
     * scale the image to the desired width. If only one of <code>width</code> or <code>height
     * </code> are set, the aspect ratio of the image will be maintained.
     */
    int width() default -1;
  }
}
