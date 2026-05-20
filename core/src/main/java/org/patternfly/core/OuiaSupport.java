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
package org.patternfly.core;

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;

import elemental2.dom.HTMLElement;

/**
 * Interface for components that support <a href="https://ouia.readthedocs.io/">Open UI Automation</a>. Implement this interface
 * in custom components to participate in OUIA without extending PatternFly Java base classes.
 *
 * <p>
 * Usage:
 * </p>
 *
 * <pre>
 * public class MyWidget implements IsElement&lt;HTMLElement&gt;, OuiaSupport&lt;HTMLElement, MyWidget&gt; {
 *
 *     &#64;Override
 *     public String ouiaComponentType() {
 *         return "MyApp/MyWidget";
 *     }
 * }
 * </pre>
 *
 * @see Ouia
 */
public interface OuiaSupport<E extends HTMLElement, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

    /** Returns the OUIA component type identifier (e.g. {@code "PF6/Component/Button"} or {@code "MyApp/MyWidget"}). */
    String ouiaComponentType();

    /** Sets the {@code data-ouia-component-id} attribute on this component's element. */
    default B ouiaId(String id) {
        Ouia.ouia(element(), id, ouiaComponentType());
        return that();
    }
}
