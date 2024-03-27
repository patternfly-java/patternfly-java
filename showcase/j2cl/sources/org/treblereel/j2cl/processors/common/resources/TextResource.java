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

import org.treblereel.j2cl.processors.common.resources.ResourcePrototype.DefaultExtensions;

/** A resource that contains text that should be incorporated into the compiled output. */
@DefaultExtensions(value = {".txt"})
public interface TextResource extends ResourcePrototype {
  String getText();

  void insureInjectedAsScript();

  void insureInjectedAsStyle();
}
