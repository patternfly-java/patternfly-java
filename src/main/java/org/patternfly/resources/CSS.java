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
package org.patternfly.resources;

import org.patternfly.core.PatternFly;

/** Methods to build PatternFly CSS classes. */
public interface CSS {

    static String component(String component, String... elements) {
        StringBuilder builder = new StringBuilder();
        builder.append("pf-").append(PatternFly.VERSION).append("-c-").append(component);
        if (elements != null && elements.length != 0) {
            builder.append("__");
            for (int i = 0; i < elements.length; i++) {
                builder.append(elements[i]);
                if (i < elements.length - 1) {
                    builder.append("-");
                }
            }
        }
        return builder.toString();
    }

    static String layout(String layout) {
        return "pf-" + PatternFly.VERSION + "-l-" + layout;
    }

    static String modifier(String modifier) {
        return "pf-m-" + modifier;
    }

    static String modifier(String modifier, Breakpoint breakpoint) {
        return "pf-m-" + modifier + "-on-" + breakpoint.value;
    }

    static String util(String utility) {
        return "pf-" + PatternFly.VERSION + "-u-" + utility;
    }

    /**
     * Builds a FontAwesome icons class.
     *
     * @param name the name of the FontAwesome icon <strong>w/o</strong> any prefix.
     */
    static String fas(String name) {
        return "fas fa-" + name;
    }
}
