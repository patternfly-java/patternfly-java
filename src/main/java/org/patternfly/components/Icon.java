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
package org.patternfly.components;

import org.patternfly.layout.Size;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Constants.hidden;

/**
 * An icon component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each
 * other without shifting surrounding content.
 * <p>
 * {@snippet class = IconDemo region = icon}
 *
 * @see <a href="https://www.patternfly.org/components/icon/html">https://www.patternfly.org/components/icon/html</a>
 */
public class Icon extends BaseComponent<HTMLElement, Icon> {

    // ------------------------------------------------------ factory methods

    /**
     * Factory method to create a new instance of this component.
     */
    public static Icon icon(String iconClass) {
        return new Icon(iconClass);
    }

    // ------------------------------------------------------ instance

    Icon(String iconClass) {
        super(span().css(component("icon"))
                .add(span().css(component("icon", "content"))
                        .add(i().css(iconClass)
                                .aria(hidden, true)))
                .element(),
                ComponentType.Icon);
    }

    @Override
    public Icon that() {
        return this;
    }

    // ------------------------------------------------------ modifiers

    /**
     * Modifies the size of this component.
     */
    public Icon size(Size size) {
        return css(size.modifier);
    }

}
