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

import org.jboss.elemento.svg.SVGContainerBuilder;
import org.jboss.elemento.svg.SVGElement;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.svg.SVG.path;
import static org.jboss.elemento.svg.SVG.svg;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.img;
import static org.patternfly.style.Classes.svg;

/**
 * The PredefinedIcon class represents a predefined SVG icon. It extends the SVGContainerBuilder class
 * and provides methods for creating and configuring the SVG element for the icon.
 */
public final class PredefinedIcon extends SVGContainerBuilder<SVGElement> {

    public final IconSpec iconSpec;

    PredefinedIcon(IconSpec iconSpec) {
        super(svg().css(svg)
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
                .element());
        this.iconSpec = iconSpec;
    }

    @Override
    public PredefinedIcon that() {
        return this;
    }
}
