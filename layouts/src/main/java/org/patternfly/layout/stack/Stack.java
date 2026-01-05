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
package org.patternfly.layout.stack;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.layout.BaseLayout;
import org.patternfly.layout.LayoutType;
import org.patternfly.style.Modifiers.Gutter;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.layout;
import static org.patternfly.style.Classes.stack;

/**
 * The stack layout positions items vertically, with one or more items filling the available vertical space.
 *
 * @see <a href="https://www.patternfly.org/layouts/stack">https://www.patternfly.org/layouts/stack</a>
 */
public class Stack extends BaseLayout<HTMLElement, Stack> implements Gutter<HTMLElement, Stack> {

    // ------------------------------------------------------ factory

    public static Stack stack() {
        return new Stack(div());
    }

    public static <E extends HTMLElement> Stack stack(HTMLContainerBuilder<E> builder) {
        return new Stack(builder);
    }

    // ------------------------------------------------------ instance

    <E extends HTMLElement> Stack(HTMLContainerBuilder<E> builder) {
        super(LayoutType.Split, builder.css(layout(stack)).element());
    }

    // ------------------------------------------------------ add

    public Stack addItem(StackItem item) {
        return add(item);
    }

    // ------------------------------------------------------ builder

    @Override
    public Stack that() {
        return this;
    }
}
