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
package org.patternfly.layout.flex;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.core.Tuple;
import org.patternfly.core.Tuples;
import org.patternfly.layout.BaseLayout;
import org.patternfly.style.Breakpoint;
import org.patternfly.style.Modifiers.Fill;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.flex.Flex.booleanTuples;
import static org.patternfly.layout.flex.Flex.internalOrder;
import static org.patternfly.style.Classes.flex;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.layout;
import static org.patternfly.style.Classes.typedModifier;

public class FlexItem extends BaseLayout<HTMLElement, FlexItem> implements Fill<HTMLElement, FlexItem> {

    // ------------------------------------------------------ factory

    public static FlexItem flexItem() {
        return new FlexItem(div());
    }

    public static <E extends HTMLElement> FlexItem flexItem(HTMLContainerBuilder<E> builder) {
        return new FlexItem(builder);
    }

    // ------------------------------------------------------ instance

    <E extends HTMLElement> FlexItem(HTMLContainerBuilder<E> builder) {
        super(builder.css(layout(flex, item)).element());
    }

    // ------------------------------------------------------ builder

    /** Value to use for margin: auto at various breakpoints */
    public FlexItem align(Tuples<Breakpoint, Align> align) {
        return css(typedModifier(align));
    }

    /** Value to add for align-self property at various breakpoints */
    public FlexItem alignSelf(Tuples<Breakpoint, AlignSelf> alignSelf) {
        return css(typedModifier(alignSelf));
    }

    /** Value to add for flex property at various breakpoints */
    public FlexItem flex(Tuples<Breakpoint, FlexShorthand> flexShorthand) {
        return css(typedModifier(flexShorthand));
    }

    /** Whether to set width: 100% at various breakpoints */
    public FlexItem fullWidth(Tuples<Breakpoint, Boolean> fullWidth) {
        return css(booleanTuples(fullWidth, "full-width"));
    }

    /** Whether to add flex: grow at various breakpoints */
    public FlexItem grow(Tuples<Breakpoint, Boolean> grow) {
        return css(booleanTuples(grow, "grow"));
    }

    public FlexItem order(Tuples<Breakpoint, String> order) {
        if (order != null) {
            for (Tuple<Breakpoint, String> o : order) {
                internalOrder(element(), o);
            }
        }
        return this;
    }

    /** Whether to add flex: shrink at various breakpoints */
    public FlexItem shrink(Tuples<Breakpoint, Boolean> shrink) {
        return css(booleanTuples(shrink, "shrink"));
    }

    /** Spacers at various breakpoints */
    public FlexItem spacer(Tuples<Breakpoint, Spacer> spacer) {
        return css(typedModifier(spacer));
    }

    @Override
    public FlexItem that() {
        return this;
    }
}
