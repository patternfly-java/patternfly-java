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

public interface Icons {

    String angleDoubleLeft = "angle-double-left";
    String angleDoubleRight = "angle-double-right";
    String angleDown = "angle-down";
    String angleLeft = "angle-left";
    String angleRight = "angle-right";
    String arrowsAltV = "arrows-alt-v";
    String bars = "bars";
    String bell = "bell";
    String caretDown = "caret-down";
    String check = "check";
    String checkCircle = "check-circle";
    String ellipsisV = "ellipsis-v";
    String exclamationCircle = "exclamation-circle";
    String exclamationTriangle = "exclamation-triangle";
    String externalLinkAlt = "external-link-alt";
    String filter = "filter";
    String infoCircle = "info-circle";
    String longArrowAltDown = "long-arrow-alt-down";
    String longArrowAltUp = "long-arrow-alt-up";
    String search = "search";
    String sortAmountDown = "sort-amount-down";
    String times = "times";
    String timesCircle = "times-circle";

    /**
     * Builds a FontAwesome icons class.
     *
     * @param name the name of the FontAwesome icon <strong>w/o</strong> any prefix.
     */
    static String fas(String name) {
        return "fas fa-" + name;
    }

}
