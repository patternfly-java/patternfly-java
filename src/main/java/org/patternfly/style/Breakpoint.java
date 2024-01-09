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

/**
 * The {@code Breakpoint} class represents different breakpoints for responsive design.
 *
 * <p>
 * Breakpoints are used to define the varying screen widths and heights at which a website or
 * application layout should change.
 * </p>
 *
 * <p>
 * The class is implemented as an {@code enum} with a fixed set of predefined breakpoints:
 * </p>
 * <ul>
 * <li>{@code default_} - The default breakpoint, used when no other breakpoint matches the given
 * width or height.</li>
 * <li>{@code sm} - The small breakpoint.</li>
 * <li>{@code md} - The medium breakpoint.</li>
 * <li>{@code lg} - The large breakpoint.</li>
 * <li>{@code xl} - The extra large breakpoint.</li>
 * <li>{@code _2xl} - The 2x extra large breakpoint.</li>
 * </ul>
 *
 * <p>
 * The class provides utility methods to retrieve the appropriate breakpoint based on a given width
 * or height, using the methods {@code breakpoint(int width)} and {@code verticalBreakpoint(int height)}.
 * </p>
 *
 * <p>
 * Each instance of the {@code Breakpoint} class has the following information:
 * </p>
 * <ul>
 * <li>{@code value} - The name or identifier of the breakpoint.</li>
 * <li>{@code widthValue} - The width value of the breakpoint in pixels.</li>
 * <li>{@code widthCss} - The width value of the breakpoint in CSS units.</li>
 * <li>{@code heightValue} - The height value of the breakpoint in pixels.</li>
 * <li>{@code heightCss} - The height value of the breakpoint in CSS units.</li>
 * </ul>
 */
public enum Breakpoint {

    // ------------------------------------------------------ enum

    default_("default", 0, "", 0, ""),

    sm("sm", 576, "px", 0, ""),

    md("md", 768, "px", 40, "rem"),

    lg("lg", 992, "px", 48, "rem"),

    xl("xl", 1200, "px", 60, "rem"),

    _2xl("2xl", 1450, "px", 80, "rem");

    // ------------------------------------------------------ static api

    /**
     * Determines the breakpoint for a given width value.
     *
     * @param width the width value
     * @return the breakpoint corresponding to the given width value or {@link #default_} if no width matches.
     */
    public static Breakpoint breakpoint(int width) {
        if (width >= _2xl.widthValue) {
            return _2xl;
        }
        if (width >= xl.widthValue) {
            return xl;
        }
        if (width >= lg.widthValue) {
            return lg;
        }
        if (width >= md.widthValue) {
            return md;
        }
        if (width >= sm.widthValue) {
            return sm;
        }
        return default_;
    }

    /**
     * Determines the breakpoint based on the given height value.
     *
     * @param height the height value to determine the breakpoint for
     * @return the Breakpoint corresponding to the given height value or {@link #default_} if no height matches.
     */
    public static Breakpoint verticalBreakpoint(int height) {
        if (height >= _2xl.heightValue) {
            return _2xl;
        }
        if (height >= xl.heightValue) {
            return xl;
        }
        if (height >= lg.heightValue) {
            return lg;
        }
        if (height >= md.heightValue) {
            return md;
        }
        if (height >= sm.heightValue) {
            return sm;
        }
        return default_;
    }

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
