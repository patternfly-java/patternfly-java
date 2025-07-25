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

import org.jboss.elemento.ElementHTMLMethods;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.a;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.logo;
import static org.patternfly.style.Classes.masthead;

public class MastheadLogo extends MastheadSubComponent<HTMLElement, MastheadLogo> implements
        ElementHTMLMethods<HTMLElement, MastheadLogo> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static MastheadLogo mastheadLogo(String href) {
        return new MastheadLogo(href);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "mhl";

    MastheadLogo(String href) {
        super(SUB_COMPONENT_NAME, a(href).css(component(masthead, logo)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public MastheadLogo that() {
        return this;
    }
}
