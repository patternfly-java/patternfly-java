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
package org.patternfly.components.page;

import org.patternfly.components.SubComponent;
import org.patternfly.components.brand.Brand;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.main;
import static org.patternfly.layout.Classes.masthead;

/**
 * Container for the main area of a {@link Masthead} component. This container represents the smaller area taken up by a logo,
 * and will typically contain a {@link Brand} inside an {@code <a/>} element.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/masthead/html#usage">https://www.patternfly.org/components/masthead/html#usage</a>
 */
public class MastheadMain extends SubComponent<HTMLDivElement, MastheadMain> {

    // ------------------------------------------------------ factory methods

    /**
     * Factory method to create a new instance of this component.
     */
    public static MastheadMain mastheadMain() {
        return new MastheadMain();
    }

    // ------------------------------------------------------ instance

    MastheadMain() {
        super(div().css(component(masthead, main)).element());
    }

    @Override
    public MastheadMain that() {
        return this;
    }
}
