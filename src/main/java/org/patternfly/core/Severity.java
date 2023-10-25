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
package org.patternfly.core;

import org.patternfly.layout.PredefinedIcon;

import static org.patternfly.layout.PredefinedIcon.bell;
import static org.patternfly.layout.PredefinedIcon.checkCircle;
import static org.patternfly.layout.PredefinedIcon.exclamationCircle;
import static org.patternfly.layout.PredefinedIcon.exclamationTriangle;
import static org.patternfly.layout.PredefinedIcon.infoCircle;

public enum Severity {

    custom(bell, Status.custom, "custom alert"),

    info(infoCircle, Status.info, "info alert"),

    success(checkCircle, Status.success, "success alert"),

    warning(exclamationTriangle, Status.warning, "warning alert"),

    danger(exclamationCircle, Status.danger, "danger alert");

    public final PredefinedIcon icon;
    public final Status status;
    public final String aria;

    Severity(PredefinedIcon icon, Status status, String aria) {
        this.icon = icon;
        this.status = status;
        this.aria = aria;
    }
}
