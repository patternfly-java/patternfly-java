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
package org.patternfly.component.banner;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.style.Classes;
import org.patternfly.style.Color;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertFirst;
import static org.patternfly.style.Classes.banner;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.screenReader;
import static org.patternfly.style.Color.grey;
import static org.patternfly.style.Modifiers.toggleModifier;

/**
 * A banner is a 1-line, full color, full width container that can be used to communicate short snippets of information to
 * users. Banners are un-intrusive and non-dismissible.
 *
 * @see <a href= "https://www.patternfly.org/components/banner">https://www.patternfly.org/components/banner</a>
 */
public class Banner extends BaseComponent<HTMLDivElement, Banner> {

    // ------------------------------------------------------ factory

    public static Banner banner() {
        return new Banner(null, grey);
    }

    public static Banner banner(Color color) {
        return new Banner(null, color);
    }

    public static Banner banner(String text) {
        return new Banner(text, grey);
    }

    public static Banner banner(String text, Color color) {
        return new Banner(text, color);
    }

    // ------------------------------------------------------ instance

    private HTMLElement screenReaderElement;

    Banner(String text, Color color) {
        super(ComponentType.Banner, div().css(component(banner), color.modifier).element());
        if (text != null) {
            element().textContent = text;
        }
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #sticky(boolean) sticky(true)} */
    public Banner sticky() {
        return sticky(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(sticky)} */
    public Banner sticky(boolean sticky) {
        return toggleModifier(that(), element(), Classes.sticky, sticky);
    }

    public Banner screenReader(String text) {
        failSafeScreenReaderElement().textContent = text;
        return this;
    }

    @Override
    public Banner that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeScreenReaderElement() {
        if (screenReaderElement == null) {
            insertFirst(element(), screenReaderElement = div().css(screenReader).element());
        }
        return screenReaderElement;
    }
}
