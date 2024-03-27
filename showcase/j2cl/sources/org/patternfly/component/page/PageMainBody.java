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

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.body;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.page;

/**
 * Container for the body of a {@link PageSection} container. Required if the {@link PageSection} has a
 * {@link PageSectionBuilder#limitWidth()} modifier.
 * <p>
 * {@snippet class = PageDemo region = pageMainBody}
 */
public class PageMainBody extends PageSubComponent<HTMLDivElement, PageMainBody> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static PageMainBody pageMainBody() {
        return new PageMainBody();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "pmb";

    PageMainBody() {
        super(SUB_COMPONENT_NAME, div().css(component(page, main, body)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public PageMainBody that() {
        return this;
    }
}
