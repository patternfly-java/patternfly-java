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

import org.patternfly.component.breadcrumb.Breadcrumb;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.section;
import static org.patternfly.style.Classes.breadcrumb;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.page;

/**
 * Container to nest a {@link Breadcrumb} in a {@link PageGroup} or {@link PageMain}
 * container.
 */
public class PageBreadcrumb extends PageSectionBuilder<HTMLElement, PageBreadcrumb> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static PageBreadcrumb pageBreadcrumb() {
        return new PageBreadcrumb();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "pb";

    PageBreadcrumb() {
        super(SUB_COMPONENT_NAME, section().css(component(page, main, breadcrumb)).element());
    }

    // ------------------------------------------------------ add

    public PageBreadcrumb addBreadcrumb(Breadcrumb breadcrumb) {
        return add(breadcrumb);
    }

    // ------------------------------------------------------ builder

    @Override
    public PageBreadcrumb that() {
        return this;
    }
}
