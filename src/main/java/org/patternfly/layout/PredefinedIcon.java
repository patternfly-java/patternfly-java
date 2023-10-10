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
package org.patternfly.layout;

public enum PredefinedIcon {

    angleDoubleLeft(fas("angle-double-left")),

    angleDoubleRight(fas("angle-double-right")),

    angleDown(fas("angle-down")),

    angleLeft(fas("angle-left")),

    angleRight(fas("angle-right")),

    arrowLeft(fas("arrow-left")),

    arrowRight(fas("arrow-right")),

    arrowsAltV(fas("arrows-alt-v")),

    bars(fas("bars")),

    bell(fas("bell")),

    caretDown(fas("caret-down")),

    check(fas("check")),

    copy(fas("copy")),

    checkCircle(fas("check-circle")),

    ellipsisV(fas("ellipsis-v")),

    exclamationCircle(fas("exclamation-circle")),

    exclamationTriangle(fas("exclamation-triangle")),

    externalLinkAlt(fas("external-link-alt")),

    externalLinkSquareAlt(fas("external-link-square-alt")),

    filter(fas("filter")),

    infoCircle(fas("info-circle")),

    longArrowAltDown(fas("long-arrow-alt-down")),

    longArrowAltUp(fas("long-arrow-alt-up")),

    play(fas("play")),

    plusCircle(fas("plus-circle")),

    search(fas("search")),

    sortAmountDown(fas("sort-amount-down")),

    star(fas("star")),

    times(fas("times")),

    timesCircle(fas("times-circle")),

    upload(fas("upload"));

    /**
     * Builds a PatternFly icons class.
     *
     * @param name the name of the PatternFly icon <strong>w/o</strong> any prefix.
     */
    public static String pfIcon(String name) {
        return "pf-icon-" + name;
    }

    /**
     * Builds a FontAwesome solid icons class.
     *
     * @param name the name of the FontAwesome icon <strong>w/o</strong> any prefix.
     */
    public static String fas(String name) {
        return "fas fa-" + name;
    }

    /**
     * Builds a FontAwesome regular icons class.
     *
     * @param name the name of the FontAwesome icon <strong>w/o</strong> any prefix.
     */
    public static String far(String name) {
        return "far fa-" + name;
    }

    public final String className;

    PredefinedIcon(String className) {
        this.className = className;
    }
}
