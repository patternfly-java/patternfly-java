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
import org.jboss.elemento.svg.SVGElement;
import org.jboss.elemento.svg.SVGElementDataMethods;
import org.jboss.elemento.svg.SVGElementStyleMethods;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.svg.SVG.path;
import static org.jboss.elemento.svg.SVG.svg;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.img;
import static org.patternfly.style.Classes.svg;

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

    /**
     * Constructs a predefined SVG icon based on the provided icon name. The method supports multiple icon groups, such as
     * "fab", "far", "fas", and "patternfly". If the name contains a group prefix (e.g., "fab.iconName"), the method will use
     * that group; otherwise, it defaults to the "fas" group.
     * <p>
     * Normally you should use the static methods from {@link IconSets} to get predefined icons. Only use this method if you
     * need to get an icon based on the icon name provided as string.
     *
     * @param name the name of the icon, optionally prefixed with the group name (e.g., "fab.iconName"). If no group is
     *             specified, "fas" is used by default.
     * @return a {@code PredefinedIcon} instance representing the specified icon.
     * @throws IllegalArgumentException if the group or icon name is unknown.
     */
    public static PredefinedIcon predefinedIcon(String name) {
        String group = "fas";
        String iconName = name;
        if (name.contains(".")) {
            group = name.substring(0, name.indexOf('.'));
            iconName = name.substring(name.indexOf('.') + 1);
        }
        IconSpec iconSpec = switch (group) {
            case "fab" -> IconSpecs.fab.valueOf(iconName).iconSpec;
            case "far" -> IconSpecs.far.valueOf(iconName).iconSpec;
            case "fas" -> IconSpecs.fas.valueOf(iconName).iconSpec;
            case "patternfly" -> IconSpecs.patternfly.valueOf(iconName).iconSpec;
            default -> throw new IllegalArgumentException("Unknown icon group/name: '" + name + "'");
        };
        return new PredefinedIcon(iconSpec);
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
