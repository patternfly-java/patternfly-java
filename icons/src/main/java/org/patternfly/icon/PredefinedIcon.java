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
package org.patternfly.icon;

import org.jboss.elemento.ElementAttributeMethods;
import org.jboss.elemento.ElementClassListMethods;
import org.jboss.elemento.ElementConsumerMethods;
import org.jboss.elemento.ElementEventMethods;
import org.jboss.elemento.ElementIdMethods;
import org.jboss.elemento.ElementQueryMethods;
import org.jboss.elemento.ElementTextMethods;
import org.jboss.elemento.logger.Logger;
import org.jboss.elemento.svg.SVGElement;
import org.jboss.elemento.svg.SVGElementDataMethods;
import org.jboss.elemento.svg.SVGElementStyleMethods;

import elemental2.dom.Element;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.svg.SVG.path;
import static org.jboss.elemento.svg.SVG.svg;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.img;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.svg;
import static org.patternfly.style.Classes.unknown;

/**
 * The PredefinedIcon class represents a predefined SVG icon. It implements SVG builder interfaces and provides methods for
 * creating and configuring the SVG element for the icon.
 */
public final class PredefinedIcon implements
        ElementAttributeMethods<SVGElement, PredefinedIcon>,
        ElementClassListMethods<SVGElement, PredefinedIcon>,
        ElementConsumerMethods<SVGElement, PredefinedIcon>,
        ElementEventMethods<SVGElement, PredefinedIcon>,
        ElementIdMethods<SVGElement, PredefinedIcon>,
        ElementQueryMethods<SVGElement>,
        ElementTextMethods<SVGElement, PredefinedIcon>,
        SVGElementDataMethods<SVGElement, PredefinedIcon>,
        SVGElementStyleMethods<SVGElement, PredefinedIcon> {

    // ------------------------------------------------------ factory

    private static final Logger logger = Logger.getLogger(PredefinedIcon.class.getName());
    private static final IconSpec UNKNOWN_ICON = new IconSpec("fas", "circle-question",
            0, 0, 512, 512,
            "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z",
            "FontAwesome. CC-BY-4.0");

    /**
     * Constructs a predefined SVG icon based on the provided icon name. The method supports multiple icon groups, such as
     * "fab", "far", "fas", and "patternfly". If the name contains a group prefix (e.g., "fab.iconName"), the method will use
     * that group; otherwise, it defaults to the "fas" group.
     * <p>
     * Normally you should use the static methods from {@link IconSets} to get predefined icons. Only use this method if you
     * need to get an icon based on the icon name provided as string.
     * <p>
     * If the icon name is unknown, a fallback icon (circle-question) is returned and an error is logged.
     *
     * @param name the name of the icon, optionally prefixed with the group name (e.g., "fab.iconName"). If no group is
     *             specified, "fas" is used by default.
     * @return a {@code PredefinedIcon} instance representing the specified icon, or a fallback icon if the name is unknown.
     */
    public static PredefinedIcon predefinedIcon(String name) {
        try {
            return new PredefinedIcon(IconSpecLookup.find(name));
        } catch (IllegalArgumentException e) {
            logger.error("Unknown icon '%s'. Falling back to circle-question icon.", name);
            return new PredefinedIcon(UNKNOWN_ICON)
                    .css(modifier(unknown))
                    .run(pi -> {
                        Element title = document.createElementNS("http://www.w3.org/2000/svg", "title");
                        title.textContent = "Unknown icon: " + name;
                        pi.element().insertBefore(title, pi.element().firstChild);
                    });
        }
    }

    // ------------------------------------------------------ instance

    public final IconSpec iconSpec;
    private final SVGElement element;

    PredefinedIcon(IconSpec iconSpec) {
        this.iconSpec = iconSpec;
        this.element = svg().css(svg)
                .attr("viewBox", iconSpec.xOffset + " " + iconSpec.yOffset + " " + iconSpec.width + " " + iconSpec.height)
                .attr("width", "1em")
                .attr("height", "1em")
                .attr("fill", "currentColor")
                .attr(role, img)
                .aria(hidden, true)
                .data("iconName", iconSpec.id)
                .add(document.createComment(iconSpec.license))
                .add(path()
                        .attr("d", iconSpec.path))
                .element();
    }

    @Override
    public SVGElement element() {
        return element;
    }

    @Override
    public PredefinedIcon that() {
        return this;
    }
}
