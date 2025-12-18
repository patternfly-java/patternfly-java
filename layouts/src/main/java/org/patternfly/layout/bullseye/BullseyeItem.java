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
import org.patternfly.layout.LayoutType;
import org.patternfly.layout.SubLayout;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.bullseye;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.layout;

public class BullseyeItem extends SubLayout<HTMLElement, BullseyeItem> {

    // ------------------------------------------------------ factory

    public static BullseyeItem bullseyeItem() {
        return new BullseyeItem(div());
    }

    public static <E extends HTMLElement> BullseyeItem bullseyeItem(HTMLContainerBuilder<E> builder) {
        return new BullseyeItem(builder);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_LAYOUT_NAME = "bei";

    <E extends HTMLElement> BullseyeItem(HTMLContainerBuilder<E> builder) {
        super(LayoutType.Bullseye, SUB_LAYOUT_NAME, builder.css(layout(bullseye, item)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public BullseyeItem that() {
        return this;
    }
}
