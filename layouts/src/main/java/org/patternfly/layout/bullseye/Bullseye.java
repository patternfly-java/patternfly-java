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
package org.patternfly.layout.bullseye;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.layout.BaseLayout;
import org.patternfly.layout.LayoutType;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.bullseye;
import static org.patternfly.style.Classes.layout;

/**
 * The bullseye layout centers content, both vertically and horizontally within a container.
 *
 * @see <a href="https://www.patternfly.org/layouts/bullseye">https://www.patternfly.org/layouts/bullseye</a>
 */
public class Bullseye extends BaseLayout<HTMLElement, Bullseye> {

    // ------------------------------------------------------ factory

    public static Bullseye bullseye() {
        return new Bullseye(div());
    }

    public static <E extends HTMLElement> Bullseye bullseye(HTMLContainerBuilder<E> builder) {
        return new Bullseye(builder);
    }

    // ------------------------------------------------------ instance

    <E extends HTMLElement> Bullseye(HTMLContainerBuilder<E> builder) {
        super(LayoutType.Bullseye, builder.css(layout(bullseye)).element());
    }

    // ------------------------------------------------------ add

    public Bullseye addItem(BullseyeItem item) {
        return add(item);
    }

    // ------------------------------------------------------ builder

    @Override
    public Bullseye that() {
        return this;
    }
}
