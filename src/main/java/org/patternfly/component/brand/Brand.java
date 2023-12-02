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
package org.patternfly.component.brand;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;

import elemental2.dom.HTMLImageElement;

import static org.jboss.elemento.Elements.img;
import static org.patternfly.layout.Classes.brand;
import static org.patternfly.layout.Classes.component;

/**
 * A brand is used to place a product logotype on a screen.
 *
 * @see <a href= "https://www.patternfly.org/components/brand/html">https://www.patternfly.org/components/brand/html</a>
 */
public class Brand extends BaseComponent<HTMLImageElement, Brand> {

    // ------------------------------------------------------ factory

    public static Brand brand(String src) {
        return new Brand(src);
    }

    // ------------------------------------------------------ instance

    Brand(String src) {
        super(ComponentType.Brand, img(src).css(component(brand)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public Brand that() {
        return this;
    }
}
