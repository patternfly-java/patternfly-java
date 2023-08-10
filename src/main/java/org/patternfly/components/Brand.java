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

import elemental2.dom.HTMLImageElement;

import static org.jboss.elemento.Elements.img;
import static org.patternfly.layout.Classes.brand;

/**
 * PatternFly brand component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/brand">https://www.patternfly.org/v4/documentation/core/components/brand</a>
 */
public class Brand extends BaseComponent<HTMLImageElement, Brand> {

    // ------------------------------------------------------ factory methods

    public static Brand brand(String src) {
        return new Brand(src);
    }

    // ------------------------------------------------------ instance

    Brand(String src) {
        super(img(src).css(brand).element(), "Brand");
    }

    @Override
    public Brand that() {
        return this;
    }
}
