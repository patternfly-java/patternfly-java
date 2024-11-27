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
package org.patternfly.style;

import org.jboss.elemento.HTMLElementStyleMethods;
import org.jboss.elemento.TypedBuilder;
import org.jboss.elemento.logger.Logger;
import org.jboss.elemento.svg.SVGElement;
import org.jboss.elemento.svg.SVGElementStyleMethods;
import org.patternfly.core.Version;

import elemental2.dom.HTMLElement;

import static org.patternfly.style.VariableNames.componentName;
import static org.patternfly.style.VariableNames.utilName;

/**
 * Provides methods to build and apply PatternFly global and component variables.
 *
 * @see <a href=
 * "https://www.patternfly.org/developer-resources/global-css-variables">https://www.patternfly.org/developer-resources/global-css-variables</a>
 */
public class Variable {

    // ------------------------------------------------------ factory

    /**
     * Constructs a utility {@linkplain Variable variable} with the given elements.
     *
     * @param firstElement  the first element to include in the variable name
     * @param otherElements additional elements to append to the variable name
     * @return a new {@link Variable} object with the constructed variable name
     */
    public static Variable utilVar(String firstElement, String... otherElements) {
        return new Variable(utilName(firstElement, otherElements));
    }

    /**
     * Constructs a component {@linkplain Variable variable} with the given component and elements.
     *
     * @param component the fully qualified component name built with {@link Classes#component(String, String...)}
     * @param elements  optional elements to append to the component name
     * @return a new {@link Variable} object
     */
    public static Variable componentVar(String component, String... elements) {
        String name = componentName(component, elements);
        if (name.isEmpty()) {
            logger.error("Component '%s' in Variable.componentVar(String) does not start with 'pf-%s-'. " +
                            "Please use Classes.component(String) to build the component.",
                    component, Version.PATTERN_FLY_MAJOR_VERSION);
        }
        return new Variable(name);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Variable.class.getName());
    public final String name;
    final boolean valid;

    Variable(String name) {
        this.name = name;
        this.valid = !name.isEmpty();
    }

    // ------------------------------------------------------ api

    public String asVar() {
        return "var(" + name + ")";
    }

    public <E extends HTMLElement, B extends TypedBuilder<E, B>> VariableAssignments.HTMLBuilder<E, B> applyTo(
            HTMLElementStyleMethods<E, B> element) {
        return new VariableAssignments.HTMLBuilder<>(this, element);
    }

    public <E extends SVGElement, B extends TypedBuilder<E, B>> VariableAssignments.SVGBuilder<E, B> applyTo(
            SVGElementStyleMethods<E, B> element) {
        return new VariableAssignments.SVGBuilder<>(this, element);
    }

    public VariableAssignments.HTMLElement applyTo(HTMLElement element) {
        return new VariableAssignments.HTMLElement(this, element);
    }
}
