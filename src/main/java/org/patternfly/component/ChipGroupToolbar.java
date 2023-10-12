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

import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.layout.Classes.chipGroup;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.toolbar;

/**
 * PatternFly chip group toolbar component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/chipgroup">https://www.patternfly.org/v4/documentation/core/components/chipgroup</a>
 */
@Deprecated
public class ChipGroupToolbar extends BaseComponent<HTMLElement, ChipGroupToolbar> {

    // ------------------------------------------------------ factory

    public static ChipGroupToolbar chipGroupToolbar() {
        return new ChipGroupToolbar();
    }

    // ------------------------------------------------------ instance

    protected ChipGroupToolbar() {
        super(ul().css(component(chipGroup), modifier(toolbar)).element(), "ChipGroupToolbar");
    }

    @Override
    public ChipGroupToolbar that() {
        return this;
    }

    // ------------------------------------------------------ api

    public ChipGroupToolbar add(String category, ChipGroup chipGroup) {
        add(li().add(h(4, category).css(component(Classes.chipGroup, "label"))).add(chipGroup).element());
        return this;
    }
}
