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
package org.patternfly.layout.level;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.layout.LayoutType;
import org.patternfly.layout.SubLayout;
import org.patternfly.style.Modifiers.Fill;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.layout;
import static org.patternfly.style.Classes.level;

public class LevelItem extends SubLayout<HTMLElement, LevelItem> implements Fill<HTMLElement, LevelItem> {

    // ------------------------------------------------------ factory

    public static LevelItem levelItem() {
        return new LevelItem(div());
    }

    public static <E extends HTMLElement> LevelItem levelItem(HTMLContainerBuilder<E> builder) {
        return new LevelItem(builder);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_LAYOUT_NAME = "lvi";

    <E extends HTMLElement> LevelItem(HTMLContainerBuilder<E> builder) {
        super(LayoutType.Level, SUB_LAYOUT_NAME, builder.css(layout(level, item)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public LevelItem that() {
        return this;
    }
}
