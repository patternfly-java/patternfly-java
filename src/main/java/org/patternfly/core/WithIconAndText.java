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

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;
import org.patternfly.component.IconPosition;
import org.patternfly.component.icon.InlineIcon;
import org.patternfly.layout.PredefinedIcon;

import elemental2.dom.Element;

import static org.patternfly.component.IconPosition.start;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;

public interface WithIconAndText<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>,
        IsElement<E> {

    default B iconAndText(String iconClass, String text) {
        return iconAndText(inlineIcon(iconClass), text, start);
    }

    default B iconAndText(PredefinedIcon predefinedIcon, String text) {
        return iconAndText(inlineIcon(predefinedIcon), text, start);
    }

    default B iconAndText(InlineIcon icon, String text) {
        return iconAndText(icon, text, start);
    }

    default B iconAndText(String iconClass, String text, IconPosition position) {
        return iconAndText(inlineIcon(iconClass), text, position);
    }

    default B iconAndText(PredefinedIcon predefinedIcon, String text, IconPosition position) {
        return iconAndText(inlineIcon(predefinedIcon), text, position);
    }

    B iconAndText(InlineIcon icon, String text, IconPosition iconPosition);
}
