/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.component.timestamp;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * A marker interface for different formatting options used in the Timestamp component.
 * This allows for a unified handling of various format settings.
 */
@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface FormatOptions {
    // This is a marker interface and does not define any methods.
}
