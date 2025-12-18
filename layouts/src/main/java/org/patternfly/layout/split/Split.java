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
package org.patternfly.layout.split;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.layout.BaseLayout;
import org.patternfly.layout.LayoutType;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Gutter;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.layout;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.split;
import static org.patternfly.style.Classes.wrap;

/**
 * The bullseye layout centers content, both vertically and horizontally within a container.
 *
 * @see <a href="https://www.patternfly.org/layouts/bullseye">https://www.patternfly.org/layouts/bullseye</a>
 */
public class Split extends BaseLayout<HTMLElement, Split> implements Gutter<HTMLElement, Split> {

    // ------------------------------------------------------ factory

    public static Split split() {
        return new Split(div());
    }

    public static <E extends HTMLElement> Split split(HTMLContainerBuilder<E> builder) {
        return new Split(builder);
    }

    // ------------------------------------------------------ instance

    <E extends HTMLElement> Split(HTMLContainerBuilder<E> builder) {
        super(LayoutType.Split, builder.css(layout(split)).element());
    }

    // ------------------------------------------------------ add

    public Split addItem(SplitItem item) {
        return add(item);
    }

    // ------------------------------------------------------ builder

    /** Adds {@linkplain Classes#modifier(String) modifier(wrap)} */
    public Split wrap() {
        return css(modifier(wrap));
    }

    @Override
    public Split that() {
        return this;
    }
}
