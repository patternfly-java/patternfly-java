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

    custom(IconSets.fas::bell, Status.custom),

    info(IconSets.fas::infoCircle, Status.info),

    success(IconSets.fas::checkCircle, Status.success),

    warning(IconSets.fas::exclamationTriangle, Status.warning),

    danger(IconSets.fas::exclamationCircle, Status.danger);

    public static Severity of(String severity) {
        return of(Status.of(severity));
    }

    public static Severity of(Status status) {
        return switch (status) {
            case custom -> custom;
            case info -> info;
            case success -> success;
            case warning -> warning;
            case danger -> danger;
        };
    }

    public final Supplier<PredefinedIcon> icon;
    public final Status status;

    Severity(Supplier<PredefinedIcon> icon, Status status) {
        this.icon = icon;
        this.status = status;
    }

    public ValidationStatus asValidationStatus() {
        //noinspection EnhancedSwitchMigration
        switch (this) {
            case custom:
            case info:
                return ValidationStatus.default_;
            case success:
                return ValidationStatus.success;
            case warning:
                return ValidationStatus.warning;
            case danger:
                return ValidationStatus.error;
        }
        return ValidationStatus.default_;
    }
}
