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

import java.util.function.Supplier;

import org.patternfly.style.Classes;

import elemental2.dom.Element;

import static org.patternfly.icon.IconSets.fas.checkCircle;
import static org.patternfly.icon.IconSets.fas.exclamationCircle;
import static org.patternfly.icon.IconSets.fas.exclamationTriangle;
import static org.patternfly.icon.IconSets.patternfly.resourcesFull;
import static org.patternfly.style.Classes.modifier;

/**
 * Represents the variants of a progress step in a progress stepper component.
 * Each variant can have a specific icon and style associated with it.
 */
public enum ProgressStepVariant {
    default_(null, null),
    success(() -> checkCircle().element(), modifier(Classes.success)),
    info(() -> resourcesFull().element(), modifier(Classes.info)),
    pending(null, modifier(Classes.pending)),
    warning(() -> exclamationTriangle().element(), modifier(Classes.warning)),
    danger(() -> exclamationCircle().element(), modifier(Classes.danger));

    public final Supplier<Element> iconSupplier;
    public final String style;

    ProgressStepVariant(Supplier<Element> iconSupplier, String style) {
        this.iconSupplier = iconSupplier;
        this.style = style;
    }
}
