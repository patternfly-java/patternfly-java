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

/**
 * Enum representing various timestamp formats–for {@code dateStyle} and
 * {@code timeStyle}–based on the <a href=
 * "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat">Intl.DateTimeFormat</a>
 * API.
 *
 * <p>
 * The formats correspond to the standard JavaScript Intl.DateTimeFormat
 * options:
 * </p>
 * <ul>
 * <li>{@code full}</strong> - Tuesday, August 9, 2022 | 11:25:00 AM Eastern
 * Daylight Time</li>
 * <li>{@code long} - August 9, 2022 | 11:25:00 AM EDT</li>
 * <li>{@code medium} - Aug 9, 2022 | 11:25:00 AM</li>
 * <li>{@code short} - 8/9/22 | 11:25 AM</li>
 * </ul>
 */
public enum TimestampFormat {
    full("full"),
    _long("long"),
    medium("medium"),
    _short("short");

    public final String value;

    TimestampFormat(String value) {
        this.value = value;
    }
}
