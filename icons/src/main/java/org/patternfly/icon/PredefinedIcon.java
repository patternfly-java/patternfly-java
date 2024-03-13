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

import org.jboss.elemento.Container;
import org.jboss.elemento.Finder;
import org.jboss.elemento.HasElement;
import org.jboss.elemento.svg.HasSVGElement;
import org.jboss.elemento.svg.SVGElement;

import static org.jboss.elemento.svg.SVG.path;
import static org.jboss.elemento.svg.SVG.svg;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.svg;

public interface PredefinedIcon extends
        HasElement<SVGElement, IconSet>,
        HasSVGElement<SVGElement, IconSet>,
        Finder<SVGElement>,
        Container<SVGElement, IconSet> {

    IconSpec spec();

    @Override
    default SVGElement element() {
        return svg().css(svg)
                .attr("viewBox", spec().xOffset + " " + spec().yOffset + " " + spec().width + " " + spec().height)
                .attr("width", "1em")
                .attr("height", "1em")
                .attr("fill", "currentColor")
                .attr(role, "img")
                .aria(hidden, true)
                .data("iconName", spec().id)
                .add(path()
                        .attr("d", spec().path))
                .element();
    }
}
