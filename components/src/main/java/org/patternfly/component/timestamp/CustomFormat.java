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
public class CustomFormat implements FormatOptions {

    @JsOverlay
    public static final CustomFormat create() {
        return new CustomFormat();
    }

    @JsProperty
    private String year;
    @JsProperty
    private String month;
    @JsProperty
    private String day;
    @JsProperty
    private String weekday;
    @JsProperty
    private String hour;
    @JsProperty
    private String minute;
    @JsProperty
    private String second;
    @JsProperty
    private String timeZone;
    @JsProperty
    private String timeZoneName;
    @JsProperty
    private Boolean hour12;
    @JsProperty
    private String era;
    @JsProperty
    private String dayPeriod;
    @JsProperty
    private String fractionalSecondDigits;

    private CustomFormat() {
    }

    @JsOverlay
    public final CustomFormat year(DateTimeFormatOptions.Year year) {
        if (!Objects.equals(this.year, year.value)) {
            this.year = year.value;
        }
        return this;
    }

    @JsOverlay
    public final CustomFormat month(DateTimeFormatOptions.Month month) {
        if (!Objects.equals(this.month, month.value)) {
            this.month = month.value;
        }
        return this;
    }

    @JsOverlay
    public final CustomFormat day(DateTimeFormatOptions.Day day) {
        if (!Objects.equals(this.day, day.value)) {
            this.day = day.value;
        }
        return this;
    }

    @JsOverlay
    public final CustomFormat weekday(DateTimeFormatOptions.Weekday weekday) {
        if (!Objects.equals(this.weekday, weekday.value)) {
            this.weekday = weekday.value;
        }
        return this;
    }

    @JsOverlay
    public final CustomFormat hour(DateTimeFormatOptions.Hour hour) {
        if (!Objects.equals(this.hour, hour.value)) {
            this.hour = hour.value;
        }
        return this;
    }

    @JsOverlay
    public final CustomFormat minute(DateTimeFormatOptions.Minute minute) {
        if (!Objects.equals(this.minute, minute.value)) {
            this.minute = minute.value;
        }
        return this;
    }

    @JsOverlay
    public final CustomFormat second(DateTimeFormatOptions.Second second) {
        if (!Objects.equals(this.second, second.value)) {
            this.second = second.value;
        }
        return this;
    }

    @JsOverlay
    public final CustomFormat timeZone(String timeZone) {
        if (!Objects.equals(this.timeZone, timeZone)) {
            this.timeZone = timeZone; // IANA time zone name
        }
        return this;
    }

    @JsOverlay
    public final CustomFormat timeZoneName(DateTimeFormatOptions.TimeZoneName timeZoneName) {
        if (!Objects.equals(this.timeZoneName, timeZoneName.value)) {
            this.timeZoneName = timeZoneName.value;
        }
        return this;
    }

    @JsOverlay
    public final CustomFormat hour12(boolean hour12) {
        if (this.hour12 != hour12) {
            this.hour12 = hour12;
        }
        return this;
    }

    @JsOverlay
    public final CustomFormat era(DateTimeFormatOptions.Era era) {
        if (!Objects.equals(this.era, era.value)) {
            this.era = era.value;
        }
        return this;
    }

    @JsOverlay
    public final CustomFormat dayPeriod(DateTimeFormatOptions.DayPeriod dayPeriod) {
        if (!Objects.equals(this.dayPeriod, dayPeriod.value)) {
            this.dayPeriod = dayPeriod.value;
        }
        return this;
    }

    @JsOverlay
    public final CustomFormat fractionalSecondDigits(DateTimeFormatOptions.FractionalSecondDigits digits) {
        if (!Objects.equals(this.fractionalSecondDigits, digits.value)) {
            this.fractionalSecondDigits = digits.value;
        }
        return this;
    }
}
