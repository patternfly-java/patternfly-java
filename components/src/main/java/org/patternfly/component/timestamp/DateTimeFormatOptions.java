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
 * Container for all date/time formatting options based on <a href=
 * "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat">MDN
 * Intl.DateTimeFormat</a>
 * Consolidates all format enums into static inner classes for better
 * organization.
 *
 */
public class DateTimeFormatOptions {

    /**
     * Options for weekday formatting.
     * <ul>
     * <li>{@code narrow} - "T"</li>
     * <li>{@code _short} - "Thu"</li>
     * <li>{@code _long} - "Thursday"</li>
     * </ul>
     */
    public enum Weekday {
        narrow("narrow"),
        _short("short"),
        _long("long");

        public final String value;

        Weekday(String value) {
            this.value = value;
        }
    }

    /**
     * Options for era formatting.
     * <ul>
     * <li>{@code narrow} - "A"</li>
     * <li>{@code _short} - "AD"</li>
     * <li>{@code _long} - "Anno Domini"</li>
     * </ul>
     */
    public enum Era {
        narrow("narrow"),
        _short("short"),
        _long("long");

        public final String value;

        Era(String value) {
            this.value = value;
        }
    }

    /**
     * Options for year formatting.
     * <ul>
     * <li>{@code numeric} - "2023"</li>
     * <li>{@code _2digit} - "23"</li>
     * </ul>
     */
    public enum Year {
        numeric("numeric"),
        _2digit("2-digit");

        public final String value;

        Year(String value) {
            this.value = value;
        }
    }

    /**
     * Options for month formatting.
     * <ul>
     * <li>{@code numeric} - "3"</li>
     * <li>{@code _2digit} - "03"</li>
     * <li>{@code narrow} - "M"</li>
     * <li>{@code _short} - "Mar"</li>
     * <li>{@code _long} - "March"</li>
     * </ul>
     */
    public enum Month {
        numeric("numeric"),
        _2digit("2-digit"),
        narrow("narrow"),
        _short("short"),
        _long("long");

        public final String value;

        Month(String value) {
            this.value = value;
        }
    }

    /**
     * Options for day formatting.
     * <ul>
     * <li>{@code numeric} - "9"</li>
     * <li>{@code _2digit} - "09"</li>
     * </ul>
     */
    public enum Day {
        numeric("numeric"),
        _2digit("2-digit");

        public final String value;

        Day(String value) {
            this.value = value;
        }
    }

    /**
     * Options for hour formatting.
     * <ul>
     * <li>{@code numeric} - "2"</li>
     * <li>{@code _2digit} - "02"</li>
     * </ul>
     */
    public enum Hour {
        numeric("numeric"),
        _2digit("2-digit");

        public final String value;

        Hour(String value) {
            this.value = value;
        }
    }

    /**
     * Options for minute formatting.
     * <ul>
     * <li>{@code numeric} - "5"</li>
     * <li>{@code _2digit} - "05"</li>
     * </ul>
     */
    public enum Minute {
        numeric("numeric"),
        _2digit("2-digit");

        public final String value;

        Minute(String value) {
            this.value = value;
        }
    }

    /**
     * Options for second formatting.
     * <ul>
     * <li>{@code numeric} - "7"</li>
     * <li>{@code _2digit} - "07"</li>
     * </ul>
     */
    public enum Second {
        numeric("numeric"),
        _2digit("2-digit");

        public final String value;

        Second(String value) {
            this.value = value;
        }
    }

    /**
     * Options for fractional second digits.
     * The number of digits used to represent fractions of a second (any additional
     * digits are truncated).
     * <ul>
     * <li>{@code _1} - 1 digit</li>
     * <li>{@code _2} - 2 digits</li>
     * <li>{@code _3} - 3 digits</li>
     * </ul>
     */
    public enum FractionalSecondDigits {
        _1("1"),
        _2("2"),
        _3("3");

        public final String value;

        FractionalSecondDigits(String value) {
            this.value = value;
        }
    }

    /**
     * Options for day period formatting.
     * The formatting style used for day periods like "in the morning", "am",
     * "noon", etc.
     * <p>
     * <strong>Note:</strong> This option only has an effect if a 12-hour clock
     * ({@code hourCycle: "h12"} or {@code hourCycle: "h11"}) is used.
     * Many locales use the same string irrespective of the width specified.
     * </p>
     * <ul>
     * <li>{@code narrow} - "mat." (French), "a" (English)</li>
     * <li>{@code _short} - "matin" (French), "AM" (English)</li>
     * <li>{@code _long} - "du matin" (French), "AM" (English)</li>
     * </ul>
     */
    public enum DayPeriod {
        narrow("narrow"),
        _short("short"),
        _long("long");

        public final String value;

        DayPeriod(String value) {
            this.value = value;
        }
    }

    /**
     * Options for time zone name formatting.
     * The localized representation of the time zone name.
     * <p>
     * <strong>Note:</strong> Timezone display may fall back to another format if a
     * required string is unavailable.
     * For example, the non-location formats should display the timezone without a
     * specific country/city location
     * like "Pacific Time", but may fall back to a timezone like "Los Angeles Time".
     * </p>
     * <ul>
     * <li>{@code _short} - "PST", "GMT-8"</li>
     * <li>{@code _long} - "Pacific Standard Time", "Nordamerikanische
     * Westküsten-Normalzeit"</li>
     * <li>{@code shortOffset} - "GMT-8"</li>
     * <li>{@code longOffset} - "GMT-08:00"</li>
     * <li>{@code shortGeneric} - "PT", "Los Angeles Zeit"</li>
     * <li>{@code longGeneric} - "Pacific Time", "Nordamerikanische
     * Westküstenzeit"</li>
     * </ul>
     */
    public enum TimeZoneName {
        _short("short"),
        _long("long"),
        shortOffset("shortOffset"),
        longOffset("longOffset"),
        shortGeneric("shortGeneric"),
        longGeneric("longGeneric");

        public final String value;

        TimeZoneName(String value) {
            this.value = value;
        }
    }
}
