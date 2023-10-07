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
package org.patternfly.component.divider;

import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLHRElement;
import elemental2.dom.HTMLLIElement;

import static org.jboss.elemento.Elements.htmlElement;
import static org.patternfly.core.Constants.role;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.divider;

/**
 * A divider is a horizontal or vertical line that is placed between screen elements to create visual divisions and content
 * groupings.
 *
 * @see <a href= "https://www.patternfly.org/components/divider/html">https://www.patternfly.org/components/divider/html</a>
 */
public class Divider extends BaseComponentFlat<HTMLElement, Divider> {

    // ------------------------------------------------------ factory methods

    public static Divider divider(DividerType type) {
        switch (type) {
            case li:
                return new Divider("li", HTMLLIElement.class);
            case hr:
                return new Divider("hr", HTMLHRElement.class);
        }
        throw new IllegalArgumentException("Unknown divider type " + type);
    }

    // ------------------------------------------------------ instance

    <E extends HTMLElement> Divider(String element, Class<E> type) {
        super(htmlElement(element, type)
                .css(component(divider))
                .attr(role, "separator")
                .element(),
                ComponentType.Divider);
    }

    @Override
    public Divider that() {
        return this;
    }
}
