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
package org.patternfly.showcase.model;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class Server {

    public String name;
    public int threads;
    public int applications;
    public int workspaces;
    public String status;
    public String location;

    @JsOverlay
    public final Status status() {
        try {
            return Status.valueOf(this.status);
        } catch (IllegalArgumentException ignore) {
            return Status.UNKNOWN;
        }
    }

    enum Status {
        STOPPED, DOWN, DEGRADED, NEEDS_MAINTENANCE, RUNNING, UNKNOWN
    }
}
