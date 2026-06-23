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

import org.patternfly.icon.IconSets;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Classes;
import org.patternfly.style.Status;

import static org.patternfly.style.Classes.modifier;

/** Defines the validation states available for {@link Validatable} form components. */
public enum ValidationStatus {

    default_(Status.info, null) {
        @Override
        public PredefinedIcon icon() {
            return null;
        }
    },

    indeterminate(Status.info, modifier(Classes.indeterminate)) {
        @Override
        public PredefinedIcon icon() {
            return IconSets.rhUi.minus();
        }
    },

    success(Status.success, Status.success.modifier()) {
        @Override
        public PredefinedIcon icon() {
            return IconSets.rhUi.checkCircleFill();
        }
    },

    warning(Status.warning, Status.warning.modifier()) {
        @Override
        public PredefinedIcon icon() {
            return IconSets.rhUi.warningFill();
        }
    },

    error(Status.danger, modifier(Classes.error)) {
        @Override
        public PredefinedIcon icon() {
            return IconSets.rhUi.errorFill();
        }
    };

    public final Status status;
    public final String modifier;

    ValidationStatus(Status status, String modifier) {
        this.status = status;
        this.modifier = modifier;
    }

    public abstract PredefinedIcon icon();
}
