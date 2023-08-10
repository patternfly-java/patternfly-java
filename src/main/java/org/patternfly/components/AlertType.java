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
package org.patternfly.components;

import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.*;

public enum AlertType {

    CUSTOM(fas("bell"), modifier(custom), "custom alert"),

    INFO(fas("info-circle"), modifier(info), "info alert"),

    SUCCESS(fas("check-circle"), modifier(success), "success alert"),

    WARNING(fas("exclamation-triangle"), modifier(warning), "warning alert"),

    DANGER(fas("exclamation-circle"), modifier(danger), "danger alert");

    final String icon;
    final String modifier;
    final String aria;

    AlertType(String icon, String modifier, String aria) {
        this.icon = icon;
        this.modifier = modifier;
        this.aria = aria;
    }
}
