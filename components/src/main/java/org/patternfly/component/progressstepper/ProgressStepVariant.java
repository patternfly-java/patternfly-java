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
package org.patternfly.component.progressstepper;

import org.patternfly.style.Classes;

import elemental2.dom.Element;

import static org.patternfly.icon.IconSets.patternfly.resourcesFull;
import static org.patternfly.icon.IconSets.rhUi.checkCircleFill;
import static org.patternfly.icon.IconSets.rhUi.errorFill;
import static org.patternfly.icon.IconSets.rhUi.warningFill;
import static org.patternfly.style.Classes.modifier;

/**
 * Represents the variants of a progress step in a progress stepper component.
 * Each variant can have a specific icon and style associated with it.
 */
public enum ProgressStepVariant {
    default_(null) {
        @Override
        public Element icon() {
            return null;
        }
    },
    success(modifier(Classes.success)) {
        @Override
        public Element icon() {
            return checkCircleFill().element();
        }
    },
    info(modifier(Classes.info)) {
        @Override
        public Element icon() {
            return resourcesFull().element();
        }
    },
    pending(modifier(Classes.pending)) {
        @Override
        public Element icon() {
            return null;
        }
    },
    warning(modifier(Classes.warning)) {
        @Override
        public Element icon() {
            return warningFill().element();
        }
    },
    danger(modifier(Classes.danger)) {
        @Override
        public Element icon() {
            return errorFill().element();
        }
    };

    public final String style;

    ProgressStepVariant(String style) {
        this.style = style;
    }

    public abstract Element icon();
}
