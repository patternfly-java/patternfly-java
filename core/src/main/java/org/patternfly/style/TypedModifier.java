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

import org.jboss.elemento.TypedBuilder;

import elemental2.dom.Element;

public interface TypedModifier {

    /**
     * Swaps a typed modifier on an element builder. Swapping is done by removing all modifiers given as {@code values} and then
     * setting the new modifier given as {@code value}.
     */
    static <T extends TypedModifier, E extends Element, B extends TypedBuilder<E, B>> B swap(B builder, Element element,
            T value, T[] values) {
        if (values != null) {
            for (T v : values) {
                if (!v.modifier().isEmpty()) {
                    element.classList.remove(v.modifier());
                }
            }
        }
        if (value != null) {
            if (!value.modifier().isEmpty()) {
                element.classList.add(value.modifier());
            }
        }
        return builder;
    }

    /**
     * Swaps a typed modifier on an element builder. Swapping is done by removing the previous modifier, applying the current
     * modifier, and optionally performing an assignment.
     */
    static <T extends TypedModifier, E extends Element, B extends TypedBuilder<E, B>> B swap(B builder, Element element,
            T current, T previous, Runnable assignment) {
        if (previous != null && !previous.modifier().isEmpty()) {
            element.classList.remove(previous.modifier());
        }
        if (assignment != null) {
            assignment.run();
        }
        if (current != null && !current.modifier().isEmpty()) {
            element.classList.add(current.modifier());
        }
        return builder;
    }

    String value();

    String modifier();
}
