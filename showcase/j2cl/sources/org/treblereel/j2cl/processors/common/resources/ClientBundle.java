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

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * The use of this interface is similar to that of ImageBundle. Declare no-argument functions that
 * return subclasses of {@link ResourcePrototype}, which are annotated with {@link Source}
 * annotations specifying the classpath location of the resource to include in the output. At
 * runtime, the functions will return an object that can be used to access the data in the original
 * resource.
 */
public interface ClientBundle {
  /**
   * Specifies the classpath location of the resource or resources associated with the {@link
   * ResourcePrototype}.
   */
  @Documented
  @Retention(RetentionPolicy.RUNTIME)
  @Target(ElementType.METHOD)
  @interface Source {
    String[] value();
  }

  @Documented
  @Retention(RetentionPolicy.RUNTIME)
  @Target(ElementType.METHOD)
  @interface MavenArtifactSource {
    String repositoryId() default "central";

    String repositoryType() default "default";

    String repositoryUrl() default "https://repo1.maven.org/maven2/";

    String group();

    String artifact();

    String version();

    String path();

    String copyTo() default "<auto>";

    boolean unzip() default false;
  }
}
