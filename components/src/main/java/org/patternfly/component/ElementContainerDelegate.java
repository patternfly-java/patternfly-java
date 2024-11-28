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
package org.patternfly.component;

import java.util.function.Supplier;

import org.jboss.elemento.ElementContainerMethods;
import org.jboss.elemento.TypedBuilder;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;

/**
 * Delegates all {@code add()} methods from {@link ElementContainerMethods} to the element returned by {@link #delegate()}.
 * <p>
 * Please note that if you implement this interface in your (sub)component, you must use {@code element().appendChild()} to add
 * something to the (sub)component itself!
 */
public interface ElementContainerDelegate<E extends Element, B extends TypedBuilder<E, B>> extends
        TypedBuilder<E, B>,
        ElementContainerMethods<E, B> {

    HTMLElement delegate();

    @Override
    default B add(Node node) {
        delegate().appendChild(node);
        return that();
    }

    @Override
    default B add(Supplier<Node> supplier) {
        delegate().appendChild(supplier.get());
        return that();
    }
}
