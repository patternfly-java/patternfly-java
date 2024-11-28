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

import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.style.Breakpoints;
import org.patternfly.style.Inset;
import org.patternfly.style.Orientation;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLHRElement;
import elemental2.dom.HTMLLIElement;

import static org.jboss.elemento.Elements.htmlElement;
import static org.patternfly.component.divider.DividerType.div;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.separator;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.divider;

/**
 * A divider is a horizontal or vertical line that is placed between screen elements to create visual divisions and content
 * groupings.
 *
 * @see <a href= "https://www.patternfly.org/components/divider">https://www.patternfly.org/components/divider</a>
 */
public class Divider extends BaseComponent<HTMLElement, Divider> {

    // ------------------------------------------------------ factory

    public static Divider divider(DividerType type) {
        switch (type) {
            case li:
                return new Divider("li", HTMLLIElement.class);
            case hr:
                return new Divider("hr", HTMLHRElement.class);
            case div:
                return new Divider("div", HTMLDivElement.class);
            default:
                logger.error("Unknown divider type %s. Fallback to %s", type, div.name());
                return new Divider("div", HTMLDivElement.class);
        }
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Divider.class.getName());

    <E extends HTMLElement> Divider(String element, Class<E> type) {
        super(ComponentType.Divider, htmlElement(element, type)
                .css(component(divider))
                .attr(role, separator)
                .element());
    }

    // ------------------------------------------------------ builder

    /**
     * Same as {@code inset(breakpoints(default_, inset))}
     */
    public Divider inset(Inset inset) {
        return inset(breakpoints(default_, inset));
    }

    public Divider inset(Breakpoints<Inset> inset) {
        return css(inset.modifiers());
    }

    /**
     * Same as {@code orientation(breakpoints(default_, orientation))}
     */
    public Divider orientation(Orientation orientation) {
        return orientation(breakpoints(default_, orientation));
    }

    public Divider orientation(Breakpoints<Orientation> orientation) {
        return css(orientation.modifiers());
    }

    @Override
    public Divider that() {
        return this;
    }
}
