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

import java.util.EnumSet;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.layout.BaseLayout;
import org.patternfly.style.Breakpoint;
import org.patternfly.style.BreakpointCollector;
import org.patternfly.style.Breakpoints;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.core.Tuple.tuple;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.flex;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.layout;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.Order;

public class FlexItem extends BaseLayout<HTMLElement, FlexItem> {

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

    /**
     * Same as {@code align(breakpoints(default_, align))}
     */
    public FlexItem align(Align align) {
        return align(breakpoints(default_, align));
    }

    /** Value to use for margin: auto at various breakpoints */
    public FlexItem align(Breakpoints<Align> align) {
        return css(align.modifiers());
    }

    /**
     * Same as {@code alignSelf(breakpoints(default_, alignSelf))}
     */
    public FlexItem alignSelf(AlignSelf alignSelf) {
        return alignSelf(breakpoints(default_, alignSelf));
    }

    /** Value to add for align-self property at various breakpoints */
    public FlexItem alignSelf(Breakpoints<AlignSelf> alignSelf) {
        return css(alignSelf.modifiers());
    }

    /**
     * Same as {@code flex(breakpoints(default_, flexShorthand))}
     */
    public FlexItem flex(FlexShorthand flexShorthand) {
        return flex(breakpoints(default_, flexShorthand));
    }

    /** Value to add for flex property at various breakpoints */
    public FlexItem flex(Breakpoints<FlexShorthand> flexShorthand) {
        return css(flexShorthand.modifiers());
    }

    /** Whether to set width: 100% at various breakpoints */
    public FlexItem fullWidth(Breakpoint breakpoint, Breakpoint... more) {
        String modifiers = EnumSet.of(breakpoint, more).stream()
                .map(bp -> tuple(bp, "full-width"))
                .collect(BreakpointCollector.modifiers());
        return css(modifiers);
    }

    /** Whether to add flex: grow at various breakpoints */
    public FlexItem grow(Breakpoint breakpoint, Breakpoint... more) {
        String modifiers = EnumSet.of(breakpoint, more).stream()
                .map(bp -> tuple(bp, "grow"))
                .collect(BreakpointCollector.modifiers());
        return css(modifiers);
    }

    /**
     * Same as {@code order(breakpoints(default_, order))}
     */
    public FlexItem order(String order) {
        return order(breakpoints(default_, order));
    }

    public FlexItem order(Breakpoints<String> order) {
        return componentVar(layout(flex), item, Order).applyTo(this).set(order);
    }

    /** Whether to add flex: shrink at various breakpoints */
    public FlexItem shrink(Breakpoint breakpoint, Breakpoint... more) {
        String modifiers = EnumSet.of(breakpoint, more).stream()
                .map(bp -> tuple(bp, "shrink"))
                .collect(BreakpointCollector.modifiers());
        return css(modifiers);
    }

    /**
     * Same as {@code spacer(breakpoints(default_, spacer))}
     */
    public FlexItem spacer(Spacer spacer) {
        return spacer(breakpoints(default_, spacer));
    }

    /** Spacers at various breakpoints */
    public FlexItem spacer(Breakpoints<Spacer> spacer) {
        return css(spacer.modifiers());
    }

    @Override
    public FlexItem that() {
        return this;
    }
}
