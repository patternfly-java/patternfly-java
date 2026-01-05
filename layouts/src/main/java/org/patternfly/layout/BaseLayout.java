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
package org.patternfly.layout;

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
import org.jboss.elemento.TypedBuilder;

import elemental2.dom.HTMLElement;
import jsinterop.base.Js;

import static java.util.Objects.requireNonNull;
import static org.patternfly.core.Ouia.ouia;

public abstract class BaseLayout<E extends HTMLElement, B extends TypedBuilder<E, B>> implements
        Layout,
        ElementAttributeMethods<E, B>,
        ElementClassListMethods<E, B>,
        ElementContainerMethods<E, B>,
        ElementConsumerMethods<E, B>,
        ElementEventMethods<E, B>,
        ElementIdMethods<E, B>,
        ElementQueryMethods<E>,
        ElementTextMethods<E, B>,
        HTMLElementAttributeMethods<E, B>,
        HTMLElementDataMethods<E, B>,
        HTMLElementStyleMethods<E, B>,
        HTMLElementVisibilityMethods<E, B> {

    private final LayoutType layoutType;
    private final E element;

    protected BaseLayout(LayoutType layoutType, E element) {
        this.layoutType = requireNonNull(layoutType, "layout type required");
        this.element = Js.uncheckedCast(requireNonNull(element, "element required"));
        ouia(element, layoutType.id, layoutType.layoutName);
    }

    @Override
    public E element() {
        return element;
    }

    @Override
    public LayoutType layoutType() {
        return layoutType;
    }

}
