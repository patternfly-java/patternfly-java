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
package org.patternfly.components;

import org.jboss.elemento.HtmlContent;
import org.patternfly.resources.Constants;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.chipGroup;
import static org.patternfly.resources.Constants.label;
import static org.patternfly.resources.Constants.toolbar;

/**
 * PatternFly chip group toolbar component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/chipgroup">https://www.patternfly.org/v4/documentation/core/components/chipgroup</a>
 */
public class ChipGroupToolbar extends BaseComponent<HTMLElement, ChipGroupToolbar>
        implements HtmlContent<HTMLElement, ChipGroupToolbar> {

    // ------------------------------------------------------ factory methods

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

    // ------------------------------------------------------ public API

    public ChipGroupToolbar add(String category, ChipGroup chipGroup) {
        add(li().add(h(4, category).css(component(Constants.chipGroup, label))).add(chipGroup).element());
        return this;
    }
}
