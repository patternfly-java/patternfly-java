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

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;

public class TemplateComponent extends BaseComponent<HTMLElement, TemplateComponent> {

    // ------------------------------------------------------ factory methods

    public static TemplateComponent template() {
        return new TemplateComponent();
    }

    // ------------------------------------------------------ instance

    TemplateComponent() {
        super(div().element(), (ComponentType) null);
    }

    @Override
    public TemplateComponent that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    // ------------------------------------------------------ modifiers
}
