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
package org.patternfly.components.alert;

import org.patternfly.layout.Status;

import static org.patternfly.layout.Icons.bell;
import static org.patternfly.layout.Icons.checkCircle;
import static org.patternfly.layout.Icons.exclamationCircle;
import static org.patternfly.layout.Icons.exclamationTriangle;
import static org.patternfly.layout.Icons.fas;
import static org.patternfly.layout.Icons.infoCircle;

public enum AlertType {

    custom(fas(bell), Status.custom, "custom alert"),

    info(fas(infoCircle), Status.info, "info alert"),

    success(fas(checkCircle), Status.success, "success alert"),

    warning(fas(exclamationTriangle), Status.warning, "warning alert"),

    danger(fas(exclamationCircle), Status.danger, "danger alert");

    final String icon;
    final Status status;
    final String aria;

    AlertType(String icon, Status status, String aria) {
        this.icon = icon;
        this.status = status;
        this.aria = aria;
    }
}
