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
package org.patternfly.component.backdrop;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.backdrop;
import static org.patternfly.style.Classes.component;

/**
 * A backdrop is used to screen the main content of a page when a modal overlay is opened. It prevents the user from doing other
 * work on the page until the modal is dismissed.
 *
 * @see <a href= "https://www.patternfly.org/components/backdrop">https://www.patternfly.org/components/backdrop</a>
 */
public class Backdrop extends BaseComponent<HTMLElement, Backdrop> {

    // ------------------------------------------------------ factory

    public static Backdrop backdrop() {
        return new Backdrop();
    }

    // ------------------------------------------------------ instance

    Backdrop() {
        super(ComponentType.Backdrop, div().css(component(backdrop)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public Backdrop that() {
        return this;
    }
}
