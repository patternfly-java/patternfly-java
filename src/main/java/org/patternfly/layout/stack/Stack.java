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

import org.patternfly.layout.BaseLayout;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.gutter;
import static org.patternfly.layout.Classes.layout;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.stack;

public class Stack extends BaseLayout<HTMLDivElement, Stack> {

    // ------------------------------------------------------ factory methods

    public static Stack stack() {
        return new Stack();
    }

    // ------------------------------------------------------ instance

    Stack() {
        super(div().css(layout(stack)).element());
    }

    @Override
    public Stack that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public Stack addItem(StackItem item) {
        return add(item);
    }

    // ------------------------------------------------------ modifiers

    /** Adds {@linkplain Classes#modifier(String) modifier(gutter)} */
    public Stack gutter() {
        return css(modifier(gutter));
    }
}
