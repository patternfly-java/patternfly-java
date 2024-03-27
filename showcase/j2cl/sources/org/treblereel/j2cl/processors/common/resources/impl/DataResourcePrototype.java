/*
 * Copyright 2011 Google Inc.
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

package org.treblereel.j2cl.processors.common.resources.impl;

import org.treblereel.j2cl.processors.common.resources.DataResource;

/** Simple implementation of {@link DataResource}. */
public class DataResourcePrototype implements DataResource {
  private final String name;
  private final String uri;

  /** Only called by generated code. */
  public DataResourcePrototype(String name, String uri) {
    this.name = name;
    this.uri = uri;
  }

  public String getName() {
    return name;
  }

  public String asString() {
    return uri;
  }
}
