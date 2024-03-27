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
package org.patternfly.component.textinputgroup;

import org.patternfly.style.Classes;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.utilities;

public class TextInputGroupUtilities extends TextInputGroupSubComponent<HTMLDivElement, TextInputGroupUtilities> {

    // ------------------------------------------------------ factory

    /** Same as {@linkplain #textInputGroupUtilities(boolean) textInputGroupUtilities(true)} */
    public static TextInputGroupUtilities textInputGroupUtilities() {
        return new TextInputGroupUtilities(true);
    }

    public static TextInputGroupUtilities textInputGroupUtilities(boolean hidden) {
        return new TextInputGroupUtilities(hidden);
    }

    private TextInputGroup textInputGroup;

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tigu";

    TextInputGroupUtilities(boolean hidden) {
        super(SUB_COMPONENT_NAME, div().css(component(Classes.textInputGroup, utilities)).element());
        if (hidden) {
            style("display", "none");
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public TextInputGroupUtilities that() {
        return this;
    }
}
