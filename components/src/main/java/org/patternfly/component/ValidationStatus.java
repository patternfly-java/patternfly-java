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
import org.patternfly.style.Classes;
import org.patternfly.style.Status;

import static org.patternfly.style.Classes.modifier;

public enum ValidationStatus {

    default_(Status.info, null, IconSets.fas::minus),

    indeterminate(Status.info, modifier(Classes.indeterminate), IconSets.fas::minus),

    success(Status.success, Status.success.modifier(), IconSets.fas::checkCircle),

    warning(Status.warning, Status.warning.modifier(), IconSets.fas::exclamationTriangle),

    error(Status.danger, modifier(Classes.error), IconSets.fas::exclamationCircle);

    public final Status status;
    public final String modifier;
    public final Supplier<PredefinedIcon> icon;

    ValidationStatus(Status status, String modifier, Supplier<PredefinedIcon> icon) {
        this.status = status;
        this.modifier = modifier;
        this.icon = icon;
    }
}
