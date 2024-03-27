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
import static org.patternfly.style.Classes.flex;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.layout;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.Order;

/**
 * The flex layout supports a completely custom layout by utilizing the PatternFly spacer and breakpoint systems. Flex layouts
 * are infinitely nestable and allow you to adjust spacing, direction, alignment, justification, wrapping, and width to fit your
 * needs.
 *
 * @see <a href="https://www.patternfly.org/layouts/flex">https://www.patternfly.org/layouts/flex</a>
 */
public class Flex extends BaseLayout<HTMLElement, Flex> {

    // ------------------------------------------------------ factory

    public static Flex flex() {
        return new Flex(div());
    }

    public static <E extends HTMLElement> Flex flex(HTMLContainerBuilder<E> builder) {
        return new Flex(builder);
    }

    // ------------------------------------------------------ instance

    <E extends HTMLElement> Flex(HTMLContainerBuilder<E> builder) {
        super(builder.css(layout(flex)).element());
    }

    // ------------------------------------------------------ add

    public Flex addItem(FlexItem item) {
        return add(item);
    }

    // ------------------------------------------------------ builder

    /** Value to use for margin: auto at various breakpoints */
    public Flex align(Breakpoints<Align> align) {
        return css(align.modifiers());
    }

    /** Value to add for align-content property at various breakpoints */
    public Flex alignContent(Breakpoints<AlignContent> alignContent) {
        return css(alignContent.modifiers());
    }

    /** Value to add for align-items property at various breakpoints */
    public Flex alignItems(Breakpoints<AlignItems> alignItems) {
        return css(alignItems.modifiers());
    }

    /** Value to add for align-self property at various breakpoints */
    public Flex alignSelf(Breakpoints<AlignSelf> alignSelf) {
        return css(alignSelf.modifiers());
    }

    /** Gap between columns at various breakpoints. This will override spacers for the main axis. */
    public Flex columnGap(Breakpoints<Gap> columnGap) {
        return css(columnGap.modifiers(gap -> "column-" + gap.value()));
    }

    /** Value to add for flex-direction property at various breakpoints */
    public Flex direction(Breakpoints<Direction> direction) {
        return css(direction.modifiers());
    }

    /** Value to set to display property at various breakpoints */
    public Flex display(Breakpoints<Display> display) {
        return css(display.modifiers());
    }

    /** Value to add for flex property at various breakpoints */
    public Flex flex(Breakpoints<FlexShorthand> flexShorthand) {
        return css(flexShorthand.modifiers());
    }

    /** Value to set for flex-wrap property at various breakpoints */
    public Flex flexWrap(Breakpoints<FlexWrap> flexWrap) {
        return css(flexWrap.modifiers());
    }

    /** Whether to set width: 100% at various breakpoints */
    public Flex fullWidth(Breakpoint breakpoint, Breakpoint... more) {
        String modifiers = EnumSet.of(breakpoint, more).stream()
                .map(bp -> tuple(bp, "full-width"))
                .collect(BreakpointCollector.modifiers());
        return css(modifiers);
    }

    /** Gap between items at various breakpoints. This will override spacers for the main axis. */
    public Flex gap(Breakpoints<Gap> gap) {
        return css(gap.modifiers());
    }

    /** Whether to add flex: grow at various breakpoints */
    public Flex grow(Breakpoint breakpoint, Breakpoint... more) {
        String modifiers = EnumSet.of(breakpoint, more).stream()
                .map(bp -> tuple(bp, "grow"))
                .collect(BreakpointCollector.modifiers());
        return css(modifiers);
    }

    /** Value to add for justify-content property at various breakpoints */
    public Flex justifyContent(Breakpoints<JustifyContent> justifyContent) {
        return css(justifyContent.modifiers());
    }

    public Flex order(Breakpoints<String> order) {
        return componentVar(layout(flex), item, Order).applyTo(this, order);
    }

    /** Gap between rows at various breakpoints. This will override spacers for the main axis. */
    public Flex rowGap(Breakpoints<Gap> rowGap) {
        return css(rowGap.modifiers(m -> "row-" + m.value()));
    }

    /** Whether to add flex: shrink at various breakpoints */
    public Flex shrink(Breakpoint breakpoint, Breakpoint... more) {
        String modifiers = EnumSet.of(breakpoint, more).stream()
                .map(bp -> tuple(bp, "shrink"))
                .collect(BreakpointCollector.modifiers());
        return css(modifiers);
    }

    /** Space items at various breakpoints */
    public Flex spaceItems(Breakpoints<SpaceItems> spaceItems) {
        return css(spaceItems.modifiers());
    }

    /** Spacers at various breakpoints */
    public Flex spacer(Breakpoints<Spacer> spacer) {
        return css(spacer.modifiers());
    }

    @Override
    public Flex that() {
        return this;
    }
}
