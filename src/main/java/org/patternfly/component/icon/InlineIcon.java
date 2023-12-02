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
package org.patternfly.component.icon;

import org.patternfly.component.ComponentType;
import org.patternfly.component.BaseSubComponent;
import org.patternfly.layout.PredefinedIcon;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.i;
import static org.patternfly.core.Aria.hidden;

public class InlineIcon extends BaseSubComponent<HTMLElement, InlineIcon> {

    // ------------------------------------------------------ factory

    public static InlineIcon inlineIcon(PredefinedIcon predefinedIcon) {
        return new InlineIcon(predefinedIcon.className);
    }

    public static InlineIcon inlineIcon(String iconClass) {
        return new InlineIcon(iconClass);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ii";

    InlineIcon(String iconClass) {
        super(i().css(iconClass).aria(hidden, true).element(), ComponentType.Icon, SUB_COMPONENT_NAME);
    }

    // ------------------------------------------------------ builder
    @Override
    public InlineIcon that() {
        return this;
    }
}
