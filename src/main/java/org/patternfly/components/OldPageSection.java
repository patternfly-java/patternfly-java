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

import org.jboss.elemento.Elements;
import org.jboss.elemento.HtmlContent;

import elemental2.dom.HTMLElement;

import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.mainSection;

public class OldPageSection extends BaseComponent<HTMLElement, OldPageSection> implements
        HtmlContent<HTMLElement, OldPageSection> {

    protected OldPageSection() {
        super(Elements.section().css(component("page", mainSection)).element(), "PageSection");
    }

    @Override
    public OldPageSection that() {
        return this;
    }
}
