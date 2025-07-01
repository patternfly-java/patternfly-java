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

import static org.patternfly.style.Classes.modifier;

public enum ValidationStatus {

    default_(null, IconSets.fas::minus),

    indeterminate(modifier(Classes.indeterminate), IconSets.fas::minus),

    warning(modifier(Classes.warning), IconSets.fas::exclamationTriangle),

    success(modifier(Classes.success), IconSets.fas::checkCircle),

    error(modifier(Classes.error), IconSets.fas::exclamationCircle),

    ;

    public final String modifier;
    public final Supplier<PredefinedIcon> icon;

    ValidationStatus(String modifier, Supplier<PredefinedIcon> icon) {
        this.modifier = modifier;
        this.icon = icon;
    }

    public Severity asSeverity() {
        //noinspection EnhancedSwitchMigration
        switch (this) {
            case indeterminate:
            case default_:
                return Severity.info;
            case warning:
                return Severity.warning;
            case success:
                return Severity.success;
            case error:
                return Severity.danger;
        }
        return Severity.info;
    }
}
