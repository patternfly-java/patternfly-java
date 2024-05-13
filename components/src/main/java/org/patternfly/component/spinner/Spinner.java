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
package org.patternfly.component.spinner;

import org.jboss.elemento.svg.SVGElement;
import org.patternfly.component.BaseComponentSVG;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.style.Modifiers.Inline;
import org.patternfly.style.Size;

import static org.jboss.elemento.svg.SVG.circle;
import static org.jboss.elemento.svg.SVG.svg;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.progressbar;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.path;
import static org.patternfly.style.Classes.spinner;
import static org.patternfly.style.Variable.componentVar;

/**
 * A spinner is used to indicate to users that an action is in progress. For actions that may take a long time, use a progress
 * bar instead.
 *
 * @see <a href= "https://www.patternfly.org/components/spinner">https://www.patternfly.org/components/spinner</a>
 */
public class Spinner extends BaseComponentSVG<SVGElement, Spinner> implements Inline<SVGElement, Spinner> {

    // ------------------------------------------------------ factory

    public static Spinner spinner() {
        return new Spinner(null, "Loading..");
    }

    public static Spinner spinner(Size size) {
        return new Spinner(size, "Loading..");
    }

    public static Spinner spinner(String label) {
        return new Spinner(null, label);
    }

    public static Spinner spinner(Size size, String label) {
        return new Spinner(size, label);
    }

    // ------------------------------------------------------ instance

    protected Spinner(Size size, String label) {
        super(ComponentType.Spinner, svg().css(component(spinner))
                .attr(role, progressbar)
                .attr("viewBox", "0 0 100 100")
                .aria(Aria.label, label)
                .add(circle().css(component(spinner, path))
                        .attr("cx", 50)
                        .attr("cy", 50)
                        .attr("r", 45)
                        .attr("fill", "none"))
                .element());
        if (size != null) {
            css(size.modifier());
        }
    }

    // ------------------------------------------------------ builder

    public Spinner size(Size size) {
        return css(size.modifier());
    }

    public Spinner diameter(String diameter) {
        return componentVar(component(spinner), "diameter").applyTo(this).set(diameter);
    }

    @Override
    public Spinner that() {
        return this;
    }
}
