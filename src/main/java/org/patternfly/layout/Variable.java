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
package org.patternfly.layout;

import org.jboss.elemento.HasHTMLElement;
import org.jboss.elemento.TypedBuilder;
import org.jboss.elemento.svg.HasSVGElement;
import org.jboss.elemento.svg.SVGElement;
import org.patternfly.core.PatternFly;

import elemental2.dom.HTMLElement;

/**
 * Provides methods to build and apply PatternFly global and component variables.
 *
 * @see <a href=
 *      "https://www.patternfly.org/developer-resources/global-css-variables">https://www.patternfly.org/developer-resources/global-css-variables</a>
 */
public class Variable {

    // ------------------------------------------------------ factory

    public static Variable globalVar(String firstElement, String... otherElements) {
        StringBuilder builder = new StringBuilder();
        builder.append("--pf-").append(PatternFly.VERSION).append("-global--").append(firstElement);
        if (otherElements != null && otherElements.length != 0) {
            builder.append("--");
            for (int i = 0; i < otherElements.length; i++) {
                builder.append(otherElements[i]);
                if (i < otherElements.length - 1) {
                    builder.append("--");
                }
            }
        }
        return new Variable(VariableScope.global, builder.toString());
    }

    public static Variable componentVar(String component, String... elements) {
        StringBuilder builder = new StringBuilder("--").append(component);
        if (elements != null && elements.length != 0) {
            builder.append("--");
            for (int i = 0; i < elements.length; i++) {
                builder.append(elements[i]);
                if (i < elements.length - 1) {
                    builder.append("--");
                }
            }
        }
        return new Variable(VariableScope.component, builder.toString());
    }

    // ------------------------------------------------------ instance

    public final VariableScope scope;
    public final String name;

    Variable(VariableScope scope, String name) {
        this.scope = scope;
        this.name = name;
    }

    // ------------------------------------------------------ api

    public <E extends HTMLElement, B extends TypedBuilder<E, B>> B applyTo(HasHTMLElement<E, B> element, int value) {
        return element.style(name, value);
    }

    public <E extends HTMLElement, B extends TypedBuilder<E, B>> B applyTo(HasHTMLElement<E, B> element, String value) {
        return element.style(name, value);
    }

    public <E extends SVGElement, B extends TypedBuilder<E, B>> B applyTo(HasSVGElement<E, B> element, int value) {
        element.element().style.setProperty(name, String.valueOf(value));
        return element.that();
    }

    public <E extends SVGElement, B extends TypedBuilder<E, B>> B applyTo(HasSVGElement<E, B> element, String value) {
        element.element().style.setProperty(name, value);
        return element.that();
    }

    public void applyTo(HTMLElement element, int value) {
        applyTo(element, String.valueOf(value));
    }

    public void applyTo(HTMLElement element, String value) {
        element.style.setProperty(name, value);
    }
}
