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
package org.patternfly.component.page;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.brand.Brand;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.brand;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.masthead;

public class MastheadBrand extends MastheadSubComponent<HTMLElement, MastheadBrand> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static MastheadBrand mastheadBrand() {
        return new MastheadBrand(span());
    }

    public static <E extends HTMLElement> MastheadBrand mastheadBrand(HTMLContainerBuilder<E> builder) {
        return new MastheadBrand(builder);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "mb";

    <E extends HTMLElement> MastheadBrand(HTMLContainerBuilder<E> builder) {
        super(SUB_COMPONENT_NAME, builder.css(component(masthead, brand)).element());
    }

    // ------------------------------------------------------ add

    public MastheadBrand addBrand(Brand brand) {
        return add(brand);
    }

    // ------------------------------------------------------ builder

    @Override
    public MastheadBrand that() {
        return this;
    }
}
