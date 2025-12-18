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
package org.patternfly.layout.grid;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.layout.BaseLayout;
import org.patternfly.layout.LayoutType;
import org.patternfly.layout.SubLayout;
import org.patternfly.style.Breakpoints;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.core.Validation.verifyRange;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.BreakpointCollector.modifiers;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.grid;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.layout;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.Order;

public class GridItem extends SubLayout<HTMLElement, GridItem> {

    // ------------------------------------------------------ factory

    public static GridItem gridItem() {
        return new GridItem(div());
    }

    public static <E extends HTMLElement> GridItem gridItem(HTMLContainerBuilder<E> builder) {
        return new GridItem(builder);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_LAYOUT_NAME = "gri";

    <E extends HTMLElement> GridItem(HTMLContainerBuilder<E> builder) {
        super(LayoutType.Grid, SUB_LAYOUT_NAME, builder.css(layout(grid, item)).element());
    }

    // ------------------------------------------------------ builder

    /**
     * Same as {@code span(breakpoints(default_, columns))}
     */
    public GridItem span(int columns) {
        return span(breakpoints(default_, columns));
    }

    /**
     * The number of columns the grid item spans on a specific breakpoint. Value should be a number 1-12.
     */
    public GridItem span(Breakpoints<Integer> columns) {
        String modifiers = columns.stream()
                .filter(bp -> verifyRange(element(), "span", bp.value, 1, 12))
                .collect(modifiers(col -> col + "-col"));
        return css(modifiers);
    }

    /**
     * Same as {@code rowSpan(breakpoints(default_, rows))}
     */
    public GridItem rowSpan(int rows) {
        return rowSpan(breakpoints(default_, rows));
    }

    /**
     * The number of rows the grid item spans on a specific breakpoint. Value should be a number 1-12
     */
    public GridItem rowSpan(Breakpoints<Integer> rows) {
        String modifiers = rows.stream()
                .filter(bp -> verifyRange(element(), "rowSpan", bp.value, 1, 12))
                .collect(modifiers(row -> row + "-row"));
        return css(modifiers);
    }

    /**
     * Same as {@code offset(breakpoints(default_, columns))}
     */
    public GridItem offset(int columns) {
        return offset(breakpoints(default_, columns));
    }

    /**
     * The number of columns the grid item is offset on a specific breakpoint. Value should be a number 1-12
     */
    public GridItem offset(Breakpoints<Integer> columns) {
        String modifiers = columns.stream()
                .filter(bp -> verifyRange(element(), "offset", bp.value, 1, 12))
                .collect(modifiers(col -> "offset-" + col + "-col"));
        return css(modifiers);
    }

    /**
     * Same as {@code order(breakpoints(default_, order))}
     */
    public GridItem order(String order) {
        return order(breakpoints(default_, order));
    }

    /**
     * Modifies the flex layout element order property.
     */
    public GridItem order(Breakpoints<String> order) {
        return componentVar(layout(grid), item, Order).applyTo(this).set(order);
    }

    @Override
    public GridItem that() {
        return this;
    }
}
