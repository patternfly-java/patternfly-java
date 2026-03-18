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
package org.patternfly.extension.finder;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.extension.finder.FinderClasses.preview;
import static org.patternfly.style.Classes.component;

public class FinderPreview extends FinderSubComponent<HTMLElement, FinderPreview> {

    // ------------------------------------------------------ factory

    public static FinderPreview finderPreview() {
        return new FinderPreview();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fp";

    FinderPreview() {
        super(SUB_COMPONENT_NAME, div().css(component(finder, preview)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public FinderPreview that() {
        return this;
    }
}
