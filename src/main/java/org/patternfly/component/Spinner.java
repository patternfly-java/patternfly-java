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
package org.patternfly.component;

import org.patternfly.layout.Size;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.layout.Classes.clipper;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.leadBall;
import static org.patternfly.layout.Classes.progressbar;
import static org.patternfly.layout.Classes.spinner;
import static org.patternfly.layout.Classes.tailBall;
import static org.patternfly.layout.Classes.valueText;

@Deprecated
public class Spinner extends BaseComponent<HTMLElement, Spinner> {

    // ------------------------------------------------------ factory methods

    public static Spinner spinner() {
        return new Spinner(null);
    }

    public static Spinner spinner(Size size) {
        return new Spinner(size);
    }

    // ------------------------------------------------------ instance

    protected Spinner(Size size) {
        super(span().css(component(spinner)).element(), "Spinner");
        if (size != null) {
            css().add(size.modifier);
        }
        aria(valueText, "Loading...");
        attr("role", progressbar);
        add(span().css(component(spinner, clipper)));
        add(span().css(component(spinner, leadBall)));
        add(span().css(component(spinner, tailBall)));
    }

    @Override
    public Spinner that() {
        return this;
    }
}
