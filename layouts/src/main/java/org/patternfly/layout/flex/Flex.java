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
import org.patternfly.layout.LayoutType;
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
        super(LayoutType.Flex, builder.css(layout(flex)).element());
    }

    // ------------------------------------------------------ add

    public Flex addItem(FlexItem item) {
        return add(item);
    }

    // ------------------------------------------------------ builder

    /**
     * Same as {@code align(breakpoints(default_, align))}
     */
    public Flex align(Align align) {
        return align(breakpoints(default_, align));
    }

    /** Value to use for margin: auto at various breakpoints */
    public Flex align(Breakpoints<Align> align) {
        return css(align.modifiers());
    }

    /**
     * Same as {@code alignContent(breakpoints(default_, alignContent))}
     */
    public Flex alignContent(AlignContent alignContent) {
        return alignContent(breakpoints(default_, alignContent));
    }

    /** Value to add for align-content property at various breakpoints */
    public Flex alignContent(Breakpoints<AlignContent> alignContent) {
        return css(alignContent.modifiers());
    }

    /**
     * Same as {@code alignItems(breakpoints(default_, alignItems))}
     */
    public Flex alignItems(AlignItems alignItems) {
        return alignItems(breakpoints(default_, alignItems));
    }

    /** Value to add for align-items property at various breakpoints */
    public Flex alignItems(Breakpoints<AlignItems> alignItems) {
        return css(alignItems.modifiers());
    }

    /**
     * Same as {@code alignSelf(breakpoints(default_, alignSelf))}
     */
    public Flex alignSelf(AlignSelf alignSelf) {
        return alignSelf(breakpoints(default_, alignSelf));
    }

    /** Value to add for align-self property at various breakpoints */
    public Flex alignSelf(Breakpoints<AlignSelf> alignSelf) {
        return css(alignSelf.modifiers());
    }

    /**
     * Same as {@code columnGap(breakpoints(default_, columnGap))}
     */
    public Flex columnGap(Gap columnGap) {
        return columnGap(breakpoints(default_, columnGap));
    }

    /** Gap between columns at various breakpoints. This will override spacers for the main axis. */
    public Flex columnGap(Breakpoints<Gap> columnGap) {
        return css(columnGap.modifiers(gap -> "column-" + gap.value()));
    }

    /**
     * Same as {@code direction(breakpoints(default_, direction))}
     */
    public Flex direction(Direction direction) {
        return direction(breakpoints(default_, direction));
    }

    /** Value to add for flex-direction property at various breakpoints */
    public Flex direction(Breakpoints<Direction> direction) {
        return css(direction.modifiers());
    }

    /**
     * Same as {@code display(breakpoints(default_, display))}
     */
    public Flex display(Display display) {
        return display(breakpoints(default_, display));
    }

    /** Value to set to display property at various breakpoints */
    public Flex display(Breakpoints<Display> display) {
        return css(display.modifiers());
    }

    /**
     * Same as {@code flex(breakpoints(default_, flexShorthand))}
     */
    public Flex flex(FlexShorthand flexShorthand) {
        return flex(breakpoints(default_, flexShorthand));
    }

    /** Value to add for flex property at various breakpoints */
    public Flex flex(Breakpoints<FlexShorthand> flexShorthand) {
        return css(flexShorthand.modifiers());
    }

    /**
     * Same as {@code flexWrap(breakpoints(default_, flexWrap))}
     */
    public Flex flexWrap(FlexWrap flexWrap) {
        return flexWrap(breakpoints(default_, flexWrap));
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

    /**
     * Same as {@code gap(breakpoints(default_, gap))}
     */
    public Flex gap(Gap gap) {
        return gap(breakpoints(default_, gap));
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

    /**
     * Same as {@code justifyContent(breakpoints(default_, justifyContent))}
     */
    public Flex justifyContent(JustifyContent justifyContent) {
        return justifyContent(breakpoints(default_, justifyContent));
    }

    /** Value to add for justify-content property at various breakpoints */
    public Flex justifyContent(Breakpoints<JustifyContent> justifyContent) {
        return css(justifyContent.modifiers());
    }

    /**
     * Same as {@code order(breakpoints(default_, order))}
     */
    public Flex order(String order) {
        return order(breakpoints(default_, order));
    }

    public Flex order(Breakpoints<String> order) {
        return componentVar(layout(flex), item, Order).applyTo(this).set(order);
    }

    /**
     * Same as {@code rowGap(breakpoints(default_, rowGap))}
     */
    public Flex rowGap(Gap rowGap) {
        return rowGap(breakpoints(default_, rowGap));
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

    /**
     * Same as {@code spaceItems(breakpoints(default_, spaceItems))}
     */
    public Flex spaceItems(SpaceItems spaceItems) {
        return spaceItems(breakpoints(default_, spaceItems));
    }

    /** Space items at various breakpoints */
    public Flex spaceItems(Breakpoints<SpaceItems> spaceItems) {
        return css(spaceItems.modifiers());
    }

    /**
     * Same as {@code spacer(breakpoints(default_, spacer))}
     */
    public Flex spacer(Spacer spacer) {
        return spacer(breakpoints(default_, spacer));
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
