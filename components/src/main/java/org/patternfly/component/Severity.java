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
package org.patternfly.component;

import java.util.function.Supplier;

import org.patternfly.icon.IconSets;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Status;

public enum Severity {

    custom(IconSets.fas::bell, Status.custom, "custom alert"),

    info(IconSets.fas::infoCircle, Status.info, "info alert"),

    success(IconSets.fas::checkCircle, Status.success, "success alert"),

    warning(IconSets.fas::exclamationTriangle, Status.warning, "warning alert"),

    danger(IconSets.fas::exclamationCircle, Status.danger, "danger alert");

    public final Supplier<PredefinedIcon> icon;
    public final Status status;
    public final String aria;

    Severity(Supplier<PredefinedIcon> icon, Status status, String aria) {
        this.icon = icon;
        this.status = status;
        this.aria = aria;
    }
}
