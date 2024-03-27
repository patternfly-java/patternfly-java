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

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;
import org.patternfly.icon.PredefinedIcon;

import elemental2.dom.Element;

import static org.patternfly.component.IconPosition.start;

public interface WithIconAndText<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>,
        IsElement<E> {

    default B iconAndText(PredefinedIcon icon, String text) {
        return iconAndText(icon.element(), text, start);
    }

    default B iconAndText(PredefinedIcon icon, String text, IconPosition position) {
        return iconAndText(icon.element(), text, position);
    }

    B iconAndText(Element icon, String text, IconPosition iconPosition);
}
