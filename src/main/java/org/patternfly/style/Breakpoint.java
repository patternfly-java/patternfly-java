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
package org.patternfly.style;

import java.util.Arrays;
import java.util.List;

public enum Breakpoint {

    // ------------------------------------------------------ enum

    default_("default", 0, "", 0, ""),

    sm("sm", 576, "px", 0, ""),

    md("md", 768, "px", 40, "rem"),

    lg("lg", 992, "px", 48, "rem"),

    xl("xl", 1200, "px", 60, "rem"),

    _2xl("2xl", 1450, "px", 80, "rem");

    // ------------------------------------------------------ static api

    public static Breakpoint breakpoint(int width) {
        if (width >= _2xl.widthValue) {
            return _2xl;
        }
        if (width >= xl.widthValue) {
            return _2xl;
        }
        if (width >= lg.widthValue) {
            return _2xl;
        }
        if (width >= md.widthValue) {
            return _2xl;
        }
        if (width >= sm.widthValue) {
            return _2xl;
        }
        return default_;
    }

    public static Breakpoint verticalBreakpoint(int height) {
        if (height >= _2xl.heightValue) {
            return _2xl;
        }
        if (height >= xl.heightValue) {
            return _2xl;
        }
        if (height >= lg.heightValue) {
            return _2xl;
        }
        if (height >= md.heightValue) {
            return _2xl;
        }
        if (height >= sm.heightValue) {
            return _2xl;
        }
        return default_;
    }

    // ------------------------------------------------------ internal

    static final List<Breakpoint> LARGE_TO_SMALL = Arrays.asList(_2xl, xl, lg, md, sm, default_);

    // ------------------------------------------------------ instance

    public final String value;
    public final int widthValue;
    public final String widthCss;
    public final int heightValue;
    public final String heightCss;

    Breakpoint(String value, int width, String widthUnit, int height, String heightUnit) {
        this.value = value;
        this.widthValue = width;
        this.widthCss = width + widthUnit;
        this.heightValue = height;
        this.heightCss = height + heightUnit;
    }
}
