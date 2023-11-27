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
package org.patternfly.layout.gallery;

import org.patternfly.core.Tuple;
import org.patternfly.layout.BaseLayout;
import org.patternfly.layout.Breakpoint;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Breakpoint.default_;
import static org.patternfly.layout.Classes.gallery;
import static org.patternfly.layout.Classes.gutter;
import static org.patternfly.layout.Classes.layout;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Variable.componentVar;
import static org.patternfly.layout.Variables.GridTemplateColumns;

public class Gallery extends BaseLayout<HTMLDivElement, Gallery> {

    // ------------------------------------------------------ factory

    public static Gallery gallery() {
        return new Gallery();
    }

    // ------------------------------------------------------ instance

    Gallery() {
        super(div().css(layout(gallery)).element());
    }

    // ------------------------------------------------------ add

    public Gallery addItem(GalleryItem item) {
        return add(item);
    }

    // ------------------------------------------------------ builder

    /** Adds {@linkplain Classes#modifier(String) modifier(gutter)} */
    public Gallery gutter() {
        return css(modifier(gutter));
    }

    @SafeVarargs
    public final Gallery minWidths(Tuple<Breakpoint, String> first, Tuple<Breakpoint, String>... rest) {
        minMax("min", first);
        if (rest != null) {
            for (Tuple<Breakpoint, String> tuple : rest) {
                minMax("min", tuple);
            }
        }
        return this;
    }

    @SafeVarargs
    public final Gallery maxWidths(Tuple<Breakpoint, String> first, Tuple<Breakpoint, String>... rest) {
        minMax("max", first);
        if (rest != null) {
            for (Tuple<Breakpoint, String> tuple : rest) {
                minMax("max", tuple);
            }
        }
        return this;
    }

    @Override
    public Gallery that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private void minMax(String minMax, Tuple<Breakpoint, String> tuple) {
        // Variable examples:
        // --pf-v5-l-gallery--GridTemplateColumns--min: 100%;
        // --pf-v5-l-gallery--GridTemplateColumns--min-on-md: 100px;
        // --pf-v5-l-gallery--GridTemplateColumns--min-on-xl: 300px;
        // --pf-v5-l-gallery--GridTemplateColumns--max-on-md: 200px;
        // --pf-v5-l-gallery--GridTemplateColumns--max-on-xl: 1fr;
        String minMaxBreak = tuple.key == default_ ? minMax : minMax + "-on-" + tuple.key.value;
        componentVar(layout(gallery), GridTemplateColumns, minMaxBreak).applyTo(element(), tuple.value);
    }
}
