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
import org.patternfly.core.Tuple;

import elemental2.dom.HTMLElement;

import static org.patternfly.style.Breakpoint.default_;

public class BreakpointVariablesFluent<V> {

    private final BreakpointModifiers<V> breakpointModifiers;
    private final Variable variable;
    private final Function<V, String> stringValue;

    BreakpointVariablesFluent(BreakpointModifiers<V> breakpointModifiers, Variable variable, Function<V, String> stringValue) {
        this.breakpointModifiers = breakpointModifiers;
        this.variable = variable;
        this.stringValue = stringValue;
    }

    public <E extends HTMLElement, B extends TypedBuilder<E, B>> B applyTo(HasHTMLElement<E, B> element) {
        if (variable != null && !variable.name.isEmpty()) {
            for (Tuple<Breakpoint, V> tuple : breakpointModifiers) {
                String property = tuple.key == default_ ? variable.name : variable.name + "-on-" + tuple.key.value;
                String value = stringValue.apply(tuple.value);
                element.style(property, value);
            }
        }
        return element.that();
    }
}
