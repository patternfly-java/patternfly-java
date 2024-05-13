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
package org.patternfly.component.brand;

import org.jboss.elemento.HTMLElementBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.style.Breakpoints;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;

import static org.jboss.elemento.Elements.img;
import static org.jboss.elemento.Elements.picture;
import static org.jboss.elemento.Elements.source;
import static org.patternfly.style.Classes.brand;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.Height;
import static org.patternfly.style.Variables.Width;

/**
 * A brand is used to place a product logotype on a screen.
 *
 * @see <a href= "https://www.patternfly.org/components/brand">https://www.patternfly.org/components/brand</a>
 */
public class Brand extends BaseComponent<HTMLElement, Brand> {

    // ------------------------------------------------------ factory

    public static Brand brand(String src, String alt) {
        return new Brand(img().element(), src, alt);
    }

    public static Brand brand() {
        return new Brand(picture().element(), null, null);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Brand.class.getName());
    private final boolean picture;

    <E extends HTMLElement> Brand(E element, String src, String alt) {
        super(ComponentType.Brand, element);
        css(component(brand));
        picture = src == null;
        if (picture) {
            css(modifier(Classes.picture));
        } else {
            img(element).apply(i -> {
                i.src = src;
                i.alt = alt;
            }).element();
        }
    }

    // ------------------------------------------------------ add

    public Brand addSource(String src) {
        return addSource(src, null);
    }

    public Brand addSource(String src, String media) {
        if (picture) {
            add(source().apply(s -> {
                s.srcset = src;
                if (media != null) {
                    s.media = media;
                }
            }));
        } else {
            logger.warn("Brand %o contains a <img/> element. Adding sources is not supported.", element());
        }
        return this;
    }

    public Brand addImg(HTMLElementBuilder<HTMLImageElement> img) {
        return add(img);
    }

    public Brand add(HTMLElementBuilder<HTMLImageElement> img) {
        if (picture) {
            add(img.element());
        } else {
            logger.warn("Brand %o contains a <picture/> element. Adding a fallback image is not supported.", element());
        }
        return this;
    }

    // ------------------------------------------------------ builder

    public Brand widths(Breakpoints<String> widths) {
        return componentVar(component(brand), Width).applyTo(this).set(widths);
    }

    public Brand heights(Breakpoints<String> heights) {
        return componentVar(component(brand), Height).applyTo(this).set(heights);
    }

    @Override
    public Brand that() {
        return this;
    }
}
