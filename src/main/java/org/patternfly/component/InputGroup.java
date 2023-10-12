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

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.inputGroup;

/**
 * PatternFly input group component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/inputgroup/">https://www.patternfly.org/v4/documentation/core/components/inputgroup</a>
 */
@Deprecated
public class InputGroup extends BaseComponent<HTMLDivElement, InputGroup> {

    // ------------------------------------------------------ factory

    public static InputGroup inputGroup() {
        return new InputGroup();
    }

    // ------------------------------------------------------ instance

    InputGroup() {
        super(div().css(component(inputGroup)).element(), "InputGroup");
    }

    @Override
    public InputGroup that() {
        return this;
    }
}
