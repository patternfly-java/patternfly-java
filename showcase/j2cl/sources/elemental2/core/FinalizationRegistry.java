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

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class FinalizationRegistry<TARGET, HELDVALUE, TOKEN> {
  @JsFunction
  public interface FinalizationRegistryCleanupCallbackFn<HELDVALUE> {
    Object onInvoke(HELDVALUE p0);
  }

  public FinalizationRegistry(
      FinalizationRegistry.FinalizationRegistryCleanupCallbackFn<? super HELDVALUE>
          cleanupCallback) {}

  public native void register(TARGET target, HELDVALUE heldValue, TOKEN unregisterToken);

  public native void register(TARGET target, HELDVALUE heldValue);

  public native void unregister(TOKEN unregisterToken);
}
