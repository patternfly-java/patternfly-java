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

import org.jboss.elemento.ElementAttributeMethods;
import org.jboss.elemento.ElementClassListMethods;
import org.jboss.elemento.ElementConsumerMethods;
import org.jboss.elemento.ElementContainerMethods;
import org.jboss.elemento.ElementEventMethods;
import org.jboss.elemento.ElementIdMethods;
import org.jboss.elemento.ElementQueryMethods;
import org.jboss.elemento.ElementTextMethods;
import org.jboss.elemento.HTMLElementAttributeMethods;
import org.jboss.elemento.HTMLElementDataMethods;
import org.jboss.elemento.HTMLElementStyleMethods;
import org.jboss.elemento.HTMLElementVisibilityMethods;

import elemental2.dom.HTMLElement;

/**
 * Common interface for page sections like {@link PageBreadcrumb} and {@link PageSection}.
 */
public interface PageSectionLike<E extends HTMLElement, P extends PageSectionLike<E, P>> extends
        ElementAttributeMethods<E, P>,
        ElementClassListMethods<E, P>,
        ElementContainerMethods<E, P>,
        ElementConsumerMethods<E, P>,
        ElementEventMethods<E, P>,
        ElementIdMethods<E, P>,
        ElementQueryMethods<E>,
        ElementTextMethods<E, P>,
        HTMLElementAttributeMethods<E, P>,
        HTMLElementDataMethods<E, P>,
        HTMLElementStyleMethods<E, P>,
        HTMLElementVisibilityMethods<E, P> {
}
