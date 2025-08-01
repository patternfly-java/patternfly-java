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
package org.patternfly.component.navigation;

import org.jboss.elemento.ElementTextMethods;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.nav;
import static org.patternfly.style.Classes.text;

public class NavigationLinkText extends NavigationSubComponent<HTMLElement, NavigationLinkText>
        implements ElementTextMethods<HTMLElement, NavigationLinkText> {

    // ------------------------------------------------------ factory

    public static NavigationLinkText navigationLinkText() {
        return new NavigationLinkText();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "nlt";

    NavigationLinkText() {
        super(SUB_COMPONENT_NAME, span().css(component(nav, link, text)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public NavigationLinkText that() {
        return this;
    }
}
