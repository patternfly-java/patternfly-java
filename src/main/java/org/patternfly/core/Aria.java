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
package org.patternfly.core;

public interface Aria<T> {

    String current = "aria-current";
    String expanded = "aria-expanded";
    String hidden = "aria-hidden";
    String label = "aria-label";
    String labelledBy = "aria-labelledby";

    @Deprecated
    T label(String label);

    @Deprecated
    default T label(String target, String label) {
        return (T) this;
    }
}
