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

import java.util.function.BiConsumer;
import java.util.function.Function;

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;

import elemental2.dom.HTMLElement;

/** Reusable class for typed components to customize the item ID, string value and display. */
public class OldItemDisplay<E extends HTMLElement, T> {

    public Function<T, String> identifier;
    public Function<T, String> asString;
    public BiConsumer<HTMLContainerBuilder<E>, T> display;

    public OldItemDisplay() {
        this.identifier = item -> Id.build(String.valueOf(item));
        this.asString = String::valueOf;
        this.display = (element, item) -> element.textContent(asString.apply(item));
    }

    public OldItemDisplay(Function<T, String> identifier, Function<T, String> asString,
            BiConsumer<HTMLContainerBuilder<E>, T> display) {
        this.identifier = identifier;
        this.asString = asString;
        this.display = display;
    }

    public String itemId(T item) {
        return Id.build(identifier.apply(item));
    }
}
