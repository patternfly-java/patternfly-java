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
import org.patternfly.style.BreakpointModifiers;
import org.patternfly.style.BreakpointTypedModifiers;
import org.patternfly.style.Display;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.core.Tuple.tuple;
import static org.patternfly.style.BreakpointCollectors.toBreakpointModifiers;
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
    public Flex align(BreakpointTypedModifiers<Align> align) {
        return align.modifiers().addTo(this);
    }

    /** Value to add for align-content property at various breakpoints */
    public Flex alignContent(BreakpointTypedModifiers<AlignContent> alignContent) {
        return alignContent.modifiers().addTo(this);
    }

    /** Value to add for align-items property at various breakpoints */
    public Flex alignItems(BreakpointTypedModifiers<AlignItems> alignItems) {
        return alignItems.modifiers().addTo(this);
    }

    /** Value to add for align-self property at various breakpoints */
    public Flex alignSelf(BreakpointTypedModifiers<AlignSelf> alignSelf) {
        return alignSelf.modifiers().addTo(this);
    }

    /** Gap between columns at various breakpoints. This will override spacers for the main axis. */
    public Flex columnGap(BreakpointTypedModifiers<Gap> columnGap) {
        return columnGap.modifiers(m -> "column-" + m.value()).addTo(this);
    }

    /** Value to add for flex-direction property at various breakpoints */
    public Flex direction(BreakpointTypedModifiers<Direction> direction) {
        return direction.modifiers().addTo(this);
    }

    /** Value to set to display property at various breakpoints */
    public Flex display(BreakpointTypedModifiers<Display> display) {
        return display.modifiers().addTo(this);
    }

    /** Value to add for flex property at various breakpoints */
    public Flex flex(BreakpointTypedModifiers<FlexShorthand> flexShorthand) {
        return flexShorthand.modifiers().addTo(this);
    }

    /** Value to set for flex-wrap property at various breakpoints */
    public Flex flexWrap(BreakpointTypedModifiers<FlexWrap> flexWrap) {
        return flexWrap.modifiers().addTo(this);
    }

    /** Whether to set width: 100% at various breakpoints */
    public Flex fullWidth(Breakpoint breakpoint, Breakpoint... more) {
        BreakpointModifiers<String> fullWidth = EnumSet.of(breakpoint, more).stream()
                .map(bp -> tuple(bp, "full-width"))
                .collect(toBreakpointModifiers());
        return fullWidth.modifiers().addTo(this);
    }

    /** Gap between items at various breakpoints. This will override spacers for the main axis. */
    public Flex gap(BreakpointTypedModifiers<Gap> gap) {
        return gap.modifiers().addTo(this);
    }

    /** Whether to add flex: grow at various breakpoints */
    public Flex grow(Breakpoint breakpoint, Breakpoint... more) {
        BreakpointModifiers<String> grow = EnumSet.of(breakpoint, more).stream()
                .map(bp -> tuple(bp, "grow"))
                .collect(toBreakpointModifiers());
        return grow.modifiers().addTo(this);
    }

    /** Value to add for justify-content property at various breakpoints */
    public Flex justifyContent(BreakpointTypedModifiers<JustifyContent> justifyContent) {
        return justifyContent.modifiers().addTo(this);
    }

    public Flex order(BreakpointModifiers<String> order) {
        return order.variables(componentVar(layout(flex), item, Order)).applyTo(this);
    }

    /** Gap between rows at various breakpoints. This will override spacers for the main axis. */
    public Flex rowGap(BreakpointTypedModifiers<Gap> rowGap) {
        return rowGap.modifiers(m -> "row-" + m.value()).addTo(this);
    }

    /** Whether to add flex: shrink at various breakpoints */
    public Flex shrink(Breakpoint breakpoint, Breakpoint... more) {
        BreakpointModifiers<String> shrink = EnumSet.of(breakpoint, more).stream()
                .map(bp -> tuple(bp, "shrink"))
                .collect(toBreakpointModifiers());
        return shrink.modifiers().addTo(this);
    }

    /** Space items at various breakpoints */
    public Flex spaceItems(BreakpointTypedModifiers<SpaceItems> spaceItems) {
        return spaceItems.modifiers().addTo(this);
    }

    /** Spacers at various breakpoints */
    public Flex spacer(BreakpointTypedModifiers<Spacer> spacer) {
        return spacer.modifiers().addTo(this);
    }

    @Override
    public Flex that() {
        return this;
    }
}
