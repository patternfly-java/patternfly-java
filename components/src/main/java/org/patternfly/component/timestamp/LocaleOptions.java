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

import java.util.Objects;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class LocaleOptions implements FormatOptions {

    @JsOverlay
    public static final LocaleOptions create() {
        return new LocaleOptions();
    }

    @JsProperty
    private String dateStyle;
    @JsProperty
    private String timeStyle;
    @JsProperty
    private boolean hour12;
    @JsProperty
    private String timeZone;

    private LocaleOptions() {
    }

    @JsOverlay
    public final LocaleOptions dateStyle(TimestampFormat dateStyle) {
        if (!Objects.equals(this.dateStyle, dateStyle.value)) {
            this.dateStyle = dateStyle.value;
        }
        return this;
    }

    @JsOverlay
    public final LocaleOptions timeStyle(TimestampFormat timeStyle) {
        if (!Objects.equals(this.timeStyle, timeStyle.value)) {
            this.timeStyle = timeStyle.value;
        }
        return this;
    }

    @JsOverlay
    public final LocaleOptions hour12(boolean hour12) {
        if (this.hour12 != hour12) {
            this.hour12 = hour12;
        }
        return this;
    }

    @JsOverlay
    public final LocaleOptions timeZone(String timeZone) {
        if (!Objects.equals(this.timeZone, timeZone)) {
            this.timeZone = timeZone;
        }
        return this;
    }
}
