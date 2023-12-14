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

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Tuples;
import org.patternfly.style.Breakpoint;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.img;
import static org.jboss.elemento.Elements.picture;
import static org.jboss.elemento.Elements.source;
import static org.patternfly.style.Classes.brand;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.Height;
import static org.patternfly.style.Variables.Width;

/**
 * A brand is used to place a product logotype on a screen.
 *
 * @see <a href= "https://www.patternfly.org/components/brand/html">https://www.patternfly.org/components/brand/html</a>
 */
public class Brand extends BaseComponent<HTMLElement, Brand> {

    // ------------------------------------------------------ factory

    public static Brand brand(String src, String alt) {
        return brand(src, alt, false);
    }

    public static Brand brand(String src, String alt, boolean usePicture) {
        return usePicture ? new Brand(picture().element(), src, alt) : new Brand(img().element(), src, alt);
    }

    // ------------------------------------------------------ instance

    private final boolean picture;

    <E extends HTMLElement> Brand(E element, String src, String alt) {
        super(ComponentType.Brand, element);
        picture = element.tagName.equalsIgnoreCase("picture");
        css(component(brand));
        if (picture) {
            add(img(src).apply(i -> i.alt = alt));
        } else {
            img(element).apply(i -> {
                i.src = src;
                i.alt = alt;
            });
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
        }
        return that();
    }

    // ------------------------------------------------------ builder

    public Brand widths(Tuples<Breakpoint, String> widths) {
        return componentVar(component(brand), Width).applyTo(this, widths);
    }

    public Brand heights(Tuples<Breakpoint, String> heights) {
        return componentVar(component(brand), Height).applyTo(this, heights);
    }

    @Override
    public Brand that() {
        return this;
    }
}
