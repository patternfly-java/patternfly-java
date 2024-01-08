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

import java.util.function.Function;

import org.jboss.elemento.HasHTMLElement;
import org.jboss.elemento.TypedBuilder;
import org.jboss.elemento.svg.HasSVGElement;
import org.jboss.elemento.svg.SVGElement;
import org.patternfly.core.Logger;
import org.patternfly.core.PatternFly;
import org.patternfly.core.Tuple;

import elemental2.dom.HTMLElement;

import static org.patternfly.style.Breakpoint.default_;

/**
 * Provides methods to build and apply PatternFly global and component variables.
 *
 * @see <a href=
 *      "https://www.patternfly.org/developer-resources/global-css-variables">https://www.patternfly.org/developer-resources/global-css-variables</a>
 */
public class Variable {

    // ------------------------------------------------------ factory

    /**
     * Constructs a global {@linkplain Variable variable} with the given elements.
     *
     * @param firstElement the first element to include in the variable name
     * @param otherElements additional elements to append to the variable name
     * @return a new {@link Variable} object with the constructed variable name
     */
    public static Variable globalVar(String firstElement, String... otherElements) {
        StringBuilder builder = new StringBuilder();
        if (firstElement != null && !firstElement.isEmpty()) {
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
        }
        return new Variable(VariableScope.global, builder.toString());
    }

    /**
     * Constructs a component {@linkplain Variable variable} with the given component and elements.
     *
     * @param component the fully qualified component name built with {@link Classes#component(String, String...)}
     * @param elements optional elements to append to the component name
     * @return a new {@link Variable} object
     */
    public static Variable componentVar(String component, String... elements) {
        StringBuilder builder = new StringBuilder();
        if (component != null && component.startsWith("pf-" + PatternFly.VERSION + "-")) {
            builder.append("--").append(component);
            if (elements != null && elements.length != 0) {
                builder.append("--");
                for (int i = 0; i < elements.length; i++) {
                    builder.append(elements[i]);
                    if (i < elements.length - 1) {
                        builder.append("--");
                    }
                }
            }
        } else {
            Logger.undefined("PF5/Variable", null,
                    "Component \"" + component + "\" in Variable.componentVar(String) does not start with " +
                            "\"pf-" + PatternFly.VERSION + "-\".\n" +
                            "Please use Classes.component(String) to build the component.");
        }
        return new Variable(VariableScope.component, builder.toString());
    }

    // ------------------------------------------------------ instance

    public final VariableScope scope;
    public final String name;
    private final boolean valid;

    Variable(VariableScope scope, String name) {
        this.scope = scope;
        this.name = name;
        this.valid = !name.isEmpty();
    }

    // ------------------------------------------------------ api

    public <E extends HTMLElement, B extends TypedBuilder<E, B>> B applyTo(HasHTMLElement<E, B> element, int value) {
        if (valid) {
            element.style(name, value);
        }
        return element.that();
    }

    public <E extends HTMLElement, B extends TypedBuilder<E, B>> B applyTo(HasHTMLElement<E, B> element, String value) {
        if (valid) {
            element.style(name, value);
        }
        return element.that();
    }

    public <E extends HTMLElement, B extends TypedBuilder<E, B>, V> B applyTo(HasHTMLElement<E, B> element,
            Breakpoints<V> breakpoints) {
        if (breakpoints.typedModifier()) {
            return applyTo(element, breakpoints, v -> ((TypedModifier) v).value());
        } else {
            return applyTo(element, breakpoints, String::valueOf);
        }
    }

    public <E extends HTMLElement, B extends TypedBuilder<E, B>, V> B applyTo(HasHTMLElement<E, B> element,
            Breakpoints<V> breakpoints, Function<V, String> stringValue) {
        if (valid && breakpoints != null && !breakpoints.isEmpty()) {
            for (Tuple<Breakpoint, V> breakpoint : breakpoints) {
                String property = breakpoint.key == default_ ? name : name + "-on-" + breakpoint.key.value;
                String value = stringValue.apply(breakpoint.value);
                element.style(property, value);
            }
        }
        return element.that();
    }

    public <E extends SVGElement, B extends TypedBuilder<E, B>> B applyTo(HasSVGElement<E, B> element, int value) {
        if (valid) {
            element.element().style.setProperty(name, String.valueOf(value));
        }
        return element.that();
    }

    public <E extends SVGElement, B extends TypedBuilder<E, B>> B applyTo(HasSVGElement<E, B> element, String value) {
        if (valid) {
            element.element().style.setProperty(name, value);
        }
        return element.that();
    }

    public void applyTo(HTMLElement element, int value) {
        if (valid) {
            applyTo(element, String.valueOf(value));
        }
    }

    public void applyTo(HTMLElement element, String value) {
        if (valid) {
            element.style.setProperty(name, value);
        }
    }

    public <V> void applyTo(HTMLElement element, Breakpoints<V> breakpoints) {
        if (breakpoints.typedModifier()) {
            applyTo(element, breakpoints, v -> ((TypedModifier) v).value());
        } else {
            applyTo(element, breakpoints, String::valueOf);
        }
    }

    public <V> void applyTo(HTMLElement element, Breakpoints<V> breakpoints, Function<V, String> stringValue) {
        if (valid && breakpoints != null && !breakpoints.isEmpty()) {
            for (Tuple<Breakpoint, V> breakpoint : breakpoints) {
                String property = breakpoint.key == default_ ? name : name + "-on-" + breakpoint.key.value;
                String value = stringValue.apply(breakpoint.value);
                element.style.setProperty(property, value);
            }
        }
    }
}
