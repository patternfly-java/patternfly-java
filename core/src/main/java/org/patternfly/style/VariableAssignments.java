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

import java.util.function.BiConsumer;
import java.util.function.Function;

import org.jboss.elemento.HTMLElementStyleMethods;
import org.jboss.elemento.TypedBuilder;
import org.jboss.elemento.svg.SVGElement;
import org.jboss.elemento.svg.SVGElementStyleMethods;
import org.patternfly.core.Tuple;

import static org.patternfly.style.Breakpoint.default_;

public class VariableAssignments {

    static String propertyName(Variable variable, Breakpoint breakpoint) {
        return breakpoint == default_ ? variable.name : variable.name + "-on-" + breakpoint.value;
    }

    static <V> Function<V, String> resolveStringValue(Breakpoints<V> breakpoints, Function<V, String> explicit) {
        if (explicit != null) {
            return explicit;
        }
        if (breakpoints.typedModifier()) {
            return v -> ((TypedModifier) v).value();
        }
        return String::valueOf;
    }

    static <V> void applyBreakpoints(Variable variable, Breakpoints<V> breakpoints,
            Function<V, String> stringValue, BiConsumer<String, String> applier) {
        if (variable.valid && breakpoints != null && !breakpoints.isEmpty()) {
            Function<V, String> fn = resolveStringValue(breakpoints, stringValue);
            for (Tuple<Breakpoint, V> breakpoint : breakpoints) {
                applier.accept(propertyName(variable, breakpoint.key), fn.apply(breakpoint.value));
            }
        }
    }

    public static class HTMLElement {

        private final Variable variable;
        private final elemental2.dom.HTMLElement element;

        HTMLElement(Variable variable, elemental2.dom.HTMLElement element) {
            this.variable = variable;
            this.element = element;
        }

        public void set(int value) {
            if (variable.valid) {
                element.style.setProperty(variable.name, String.valueOf(value));
            }
        }

        public void set(String value) {
            if (variable.valid) {
                element.style.setProperty(variable.name, value);
            }
        }

        public <V> void set(Breakpoints<V> breakpoints) {
            set(breakpoints, null);
        }

        public <V> void set(Breakpoints<V> breakpoints, Function<V, String> stringValue) {
            applyBreakpoints(variable, breakpoints, stringValue, element.style::setProperty);
        }
    }

    public static class HTMLBuilder<E extends elemental2.dom.HTMLElement, B extends TypedBuilder<E, B>> {

        private final Variable variable;
        private final HTMLElementStyleMethods<E, B> element;

        HTMLBuilder(Variable variable, HTMLElementStyleMethods<E, B> element) {
            this.variable = variable;
            this.element = element;
        }

        public B set(int value) {
            if (variable.valid) {
                element.style(variable.name, value);
            }
            return element.that();
        }

        public B set(String value) {
            if (variable.valid) {
                element.style(variable.name, value);
            }
            return element.that();
        }

        public <V> B set(Breakpoints<V> breakpoints) {
            return set(breakpoints, null);
        }

        public <V> B set(Breakpoints<V> breakpoints, Function<V, String> stringValue) {
            applyBreakpoints(variable, breakpoints, stringValue, element::style);
            return element.that();
        }
    }

    public static class SVGBuilder<E extends SVGElement, B extends TypedBuilder<E, B>> {

        private final Variable variable;
        private final SVGElementStyleMethods<E, B> element;

        SVGBuilder(Variable variable, SVGElementStyleMethods<E, B> element) {
            this.variable = variable;
            this.element = element;
        }

        public B set(int value) {
            if (variable.valid) {
                element.style(variable.name, value);
            }
            return element.that();
        }

        public B set(String value) {
            if (variable.valid) {
                element.style(variable.name, value);
            }
            return element.that();
        }

        public <V> B set(Breakpoints<V> breakpoints) {
            return set(breakpoints, null);
        }

        public <V> B set(Breakpoints<V> breakpoints, Function<V, String> stringValue) {
            applyBreakpoints(variable, breakpoints, stringValue, element::style);
            return element.that();
        }
    }
}
