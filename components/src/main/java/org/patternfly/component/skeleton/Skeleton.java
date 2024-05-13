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
package org.patternfly.component.skeleton;

import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;
import org.patternfly.style.Size;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.screenReader;
import static org.patternfly.style.Classes.skeleton;
import static org.patternfly.style.Classes.text;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.Height;
import static org.patternfly.style.Variables.Width;

/**
 * A skeleton is a type of loading state that allows you to expose content incrementally. For content that may take a long time
 * to load, use a progress bar in place of a skeleton.
 *
 * @see <a href= "https://www.patternfly.org/components/skeleton">https://www.patternfly.org/components/skeleton</a>
 */
public class Skeleton extends BaseComponentFlat<HTMLElement, Skeleton> {

    // ------------------------------------------------------ factory

    public static Skeleton skeleton() {
        return new Skeleton();
    }

    // ------------------------------------------------------ instance

    Skeleton() {
        super(ComponentType.Skeleton, div().css(component(skeleton)).element());
    }

    // ------------------------------------------------------ builder

    public Skeleton fontSize(Size size) {
        return css(modifier(text, size));
    }

    public Skeleton height(String height) {
        return componentVar(component(skeleton), Height).applyTo(this).set(height);
    }

    public Skeleton shape(Shape shape) {
        return css(shape.modifier);
    }

    public Skeleton width(String width) {
        return componentVar(component(skeleton), Width).applyTo(this).set(width);
    }

    public Skeleton screenReaderText(String text) {
        element().appendChild(span().css(screenReader).textContent(text).element());
        return this;
    }

    @Override
    public Skeleton that() {
        return this;
    }
}
