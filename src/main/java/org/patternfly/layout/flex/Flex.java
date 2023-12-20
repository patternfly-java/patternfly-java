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
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;

import static java.util.stream.Collectors.joining;
import static java.util.stream.StreamSupport.stream;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Classes.flex;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.layout;
import static org.patternfly.style.Classes.typedModifier;
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
    public Flex align(Tuples<Breakpoint, Align> align) {
        return css(typedModifier(align));
    }

    /** Value to add for align-content property at various breakpoints */
    public Flex alignContent(Tuples<Breakpoint, AlignContent> alignContent) {
        return css(typedModifier(alignContent));
    }

    /** Value to add for align-items property at various breakpoints */
    public Flex alignItems(Tuples<Breakpoint, AlignItems> alignItems) {
        return css(typedModifier(alignItems));
    }

    /** Value to add for align-self property at various breakpoints */
    public Flex alignSelf(Tuples<Breakpoint, AlignSelf> alignSelf) {
        return css(typedModifier(alignSelf));
    }

    /** Gap between columns at various breakpoints. This will override spacers for the main axis. */
    public Flex columnGap(Tuples<Breakpoint, Gap> columnGap) {
        return css(typedModifier(columnGap, "column-"));
    }

    /** Value to add for flex-direction property at various breakpoints */
    public Flex direction(Tuples<Breakpoint, Direction> direction) {
        return css(typedModifier(direction));
    }

    /** Value to set to display property at various breakpoints */
    public Flex display(Tuples<Breakpoint, Display> display) {
        return css(typedModifier(display));
    }

    /** Value to add for flex property at various breakpoints */
    public Flex flex(Tuples<Breakpoint, FlexShorthand> flexShorthand) {
        return css(typedModifier(flexShorthand));
    }

    /** Value to set for flex-wrap property at various breakpoints */
    public Flex flexWrap(Tuples<Breakpoint, FlexWrap> flexWrap) {
        return css(typedModifier(flexWrap));
    }

    /** Whether to set width: 100% at various breakpoints */
    public Flex fullWidth(Tuples<Breakpoint, Boolean> fullWidth) {
        return css(booleanTuples(fullWidth, "full-width"));
    }

    /** Gap between items at various breakpoints. This will override spacers for the main axis. */
    public Flex gap(Tuples<Breakpoint, Gap> gap) {
        return css(typedModifier(gap));
    }

    /** Whether to add flex: grow at various breakpoints */
    public Flex grow(Tuples<Breakpoint, Boolean> grow) {
        return css(booleanTuples(grow, "grow"));
    }

    /** Value to add for justify-content property at various breakpoints */
    public Flex justifyContent(Tuples<Breakpoint, JustifyContent> justifyContent) {
        return css(typedModifier(justifyContent));
    }

    public Flex order(Tuples<Breakpoint, String> order) {
        if (order != null) {
            for (Tuple<Breakpoint, String> o : order) {
                internalOrder(element(), o);
            }
        }
        return this;
    }

    /** Gap between rows at various breakpoints. This will override spacers for the main axis. */
    public Flex rowGap(Tuples<Breakpoint, Gap> rowGap) {
        return css(typedModifier(rowGap, "row-"));
    }

    /** Whether to add flex: shrink at various breakpoints */
    public Flex shrink(Tuples<Breakpoint, Boolean> shrink) {
        return css(booleanTuples(shrink, "shrink"));
    }

    /** Space items at various breakpoints */
    public Flex spaceItems(Tuples<Breakpoint, SpaceItems> spaceItems) {
        return css(typedModifier(spaceItems));
    }

    /** Spacers at various breakpoints */
    public Flex spacer(Tuples<Breakpoint, Spacer> spacer) {
        return css(typedModifier(spacer));
    }

    @Override
    public Flex that() {
        return this;
    }

    // ------------------------------------------------------ internal

    static void internalOrder(HTMLElement element, Tuple<Breakpoint, String> tuple) {
        // Variable examples:
        // --pf-v5-l-flex--item--Order: -1;
        // --pf-v5-l-flex--item--Order-on-md: 1;
        String orderPart = tuple.key == Breakpoint.default_ ? Order : Order + "-on-" + tuple.key.value;
        componentVar(layout(flex), item, orderPart).applyTo(element, tuple.value);
    }

    static String booleanTuples(Tuples<Breakpoint, Boolean> tuples, String className) {
        return stream(tuples.spliterator(), false)
                .filter(tuple -> tuple.value != null && tuple.value)
                .map(tuple -> {
                    StringBuilder builder = new StringBuilder(className);
                    if (tuple.key != default_) {
                        builder.append("-on-").append(tuple.key.value);
                    }
                    return builder.toString();
                })
                .map(Classes::modifier)
                .collect(joining(" "));
    }
}
