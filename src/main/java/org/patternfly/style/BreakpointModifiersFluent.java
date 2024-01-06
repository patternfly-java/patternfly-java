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

import java.util.function.Supplier;

import org.jboss.elemento.HasElement;
import org.jboss.elemento.TypedBuilder;

import elemental2.dom.HTMLElement;

public class BreakpointModifiersFluent {

    private final Supplier<String> supplier;

    BreakpointModifiersFluent(Supplier<String> supplier) {
        this.supplier = supplier;
    }

    public <E extends HTMLElement, B extends TypedBuilder<E, B>> B addTo(HasElement<E, B> element) {
        element.classList().add(supplier.get());
        return element.that();
    }

    public <E extends HTMLElement, B extends TypedBuilder<E, B>> B removeFrom(HasElement<E, B> element) {
        element.classList().remove(supplier.get());
        return element.that();
    }
}
