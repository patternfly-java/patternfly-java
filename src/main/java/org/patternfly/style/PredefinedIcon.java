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

public enum PredefinedIcon {

    angleDoubleLeft(fas("angle-double-left")),

    angleDoubleRight(fas("angle-double-right")),

    angleDown(fas("angle-down")),

    angleLeft(fas("angle-left")),

    angleRight(fas("angle-right")),

    angleUp(fas("angle-up")),

    arrowLeft(fas("arrow-left")),

    arrowRight(fas("arrow-right")),

    arrowsAltV(fas("arrows-alt-v")),

    bars(fas("bars")),

    bell(fas("bell")),

    book(fas("book")),

    box(fas("box")),

    bullhorn(fas("bullhorn")),

    caretDown(fas("caret-down")),

    check(fas("check")),

    checkCircle(fas("check-circle")),

    code(fas("code")),

    cog(fas("cog")),

    copy(fas("copy")),

    cube(fas("cube")),

    database(fas("database")),

    download(fas("download")),

    ellipsisV(fas("ellipsis-v")),

    exclamationCircle(fas("exclamation-circle")),

    exclamationTriangle(fas("exclamation-triangle")),

    externalLinkAlt(fas("external-link-alt")),

    externalLinkSquareAlt(fas("external-link-square-alt")),

    filter(fas("filter")),

    flag(fas("flag")),

    globe(fas("globe")),

    help(pfIcon("help")),

    infoCircle(fas("info-circle")),

    key(fas("key")),

    laptop(fas("laptop")),

    longArrowAltDown(fas("long-arrow-alt-down")),

    longArrowAltUp(fas("long-arrow-alt-up")),

    minus(fas("minus")),

    play(fas("play")),

    plusCircle(fas("plus-circle")),

    search(fas("search")),

    server(fas("server")),

    sortAmountDown(fas("sort-amount-down")),

    star(fas("star")),

    users(fas("users")),

    times(fas("times")),

    timesCircle(fas("times-circle")),

    trash(fas("trash")),

    undo(fas("undo")),

    upload(fas("upload"));

    /**
     * Builds a PatternFly icons class.
     *
     * @param name the name of the PatternFly icon <strong>w/o</strong> any prefix.
     */
    public static String pfIcon(String name) {
        return "pf-v5-pficon pf-v5-pficon-" + name;
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
