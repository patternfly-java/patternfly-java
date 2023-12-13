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

import org.patternfly.style.Classes;
import org.patternfly.style.PredefinedIcon;

import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.PredefinedIcon.checkCircle;
import static org.patternfly.style.PredefinedIcon.exclamationCircle;
import static org.patternfly.style.PredefinedIcon.exclamationTriangle;
import static org.patternfly.style.PredefinedIcon.minus;

public enum ValidationStatus {

    default_(null, minus),

    indeterminate(modifier(Classes.indeterminate), minus),

    warning(modifier(Classes.warning), exclamationTriangle),

    success(modifier(Classes.success), checkCircle),

    error(modifier(Classes.error), exclamationCircle),

    ;

    public final String modifier;
    public final PredefinedIcon icon;

    ValidationStatus(String modifier, PredefinedIcon icon) {
        this.modifier = modifier;
        this.icon = icon;
    }
}
