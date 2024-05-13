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
import org.patternfly.core.Tuple;

import static org.patternfly.style.Breakpoint.default_;

public class VariableAssignments {

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
            if (breakpoints.typedModifier()) {
                set(breakpoints, v -> ((TypedModifier) v).value());
            } else {
                set(breakpoints, String::valueOf);
            }
        }

        public <V> void set(Breakpoints<V> breakpoints, Function<V, String> stringValue) {
            if (variable.valid && breakpoints != null && !breakpoints.isEmpty()) {
                for (Tuple<Breakpoint, V> breakpoint : breakpoints) {
                    String property = breakpoint.key == default_ ? variable.name : variable.name + "-on-" + breakpoint.key.value;
                    String value = stringValue.apply(breakpoint.value);
                    element.style.setProperty(variable.name, value);
                }
            }
        }
    }

    public static class HTMLBuilder<E extends elemental2.dom.HTMLElement, B extends TypedBuilder<E, B>> {

        private final Variable variable;
        private final HasHTMLElement<E, B> element;

        HTMLBuilder(Variable variable, HasHTMLElement<E, B> element) {
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
            if (breakpoints.typedModifier()) {
                return set(breakpoints, v -> ((TypedModifier) v).value());
            } else {
                return set(breakpoints, String::valueOf);
            }
        }

        public <V> B set(Breakpoints<V> breakpoints, Function<V, String> stringValue) {
            if (variable.valid && breakpoints != null && !breakpoints.isEmpty()) {
                for (Tuple<Breakpoint, V> breakpoint : breakpoints) {
                    String property = breakpoint.key == default_ ? variable.name : variable.name + "-on-" + breakpoint.key.value;
                    String value = stringValue.apply(breakpoint.value);
                    element.style(property, value);
                }
            }
            return element.that();
        }
    }

    public static class SVGBuilder<E extends SVGElement, B extends TypedBuilder<E, B>> {

        private final Variable variable;
        private final HasSVGElement<E, B> element;

        SVGBuilder(Variable variable, HasSVGElement<E, B> element) {
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
            if (breakpoints.typedModifier()) {
                return set(breakpoints, v -> ((TypedModifier) v).value());
            } else {
                return set(breakpoints, String::valueOf);
            }
        }

        public <V> B set(Breakpoints<V> breakpoints, Function<V, String> stringValue) {
            if (variable.valid && breakpoints != null && !breakpoints.isEmpty()) {
                for (Tuple<Breakpoint, V> breakpoint : breakpoints) {
                    String property = breakpoint.key == default_ ? variable.name : variable.name + "-on-" + breakpoint.key.value;
                    String value = stringValue.apply(breakpoint.value);
                    element.style(property, value);
                }
            }
            return element.that();
        }
    }
}
