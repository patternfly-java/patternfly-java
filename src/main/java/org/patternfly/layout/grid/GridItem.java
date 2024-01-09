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
import org.patternfly.style.Breakpoints;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.core.Validation.verifyRange;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.BreakpointCollector.modifiers;
import static org.patternfly.style.Classes.grid;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.layout;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.Order;

public class GridItem extends BaseLayout<HTMLElement, GridItem> {

    // ------------------------------------------------------ factory

    public static GridItem gridItem() {
        return new GridItem(div());
    }

    public static <E extends HTMLElement> GridItem gridItem(HTMLContainerBuilder<E> builder) {
        return new GridItem(builder);
    }

    // ------------------------------------------------------ instance

    <E extends HTMLElement> GridItem(HTMLContainerBuilder<E> builder) {
        super(builder.css(layout(grid, item)).element());
    }

    // ------------------------------------------------------ builder

    /**
     * The number of columns the grid item spans. Value should be a number 1-12.
     */
    public GridItem span(int columns) {
        if (verifyRange(element(), "PF5/GridItem", "span", columns, 1, 12)) {
            css(modifier(columns + "-col"));
        }
        return this;
    }

    /**
     * The number of columns the grid item spans on a specific breakpoint. Value should be a number 1-12.
     */
    public GridItem span(Breakpoints<Integer> columns) {
        String modifiers = columns.stream()
                .filter(bp -> verifyRange(element(), "PF5/GridItem", "span", bp.value, 1, 12))
                .filter(bp -> bp.key != default_)
                .collect(modifiers(col -> col + "-col"));
        return css(modifiers);
    }

    /**
     * The number of rows the grid item spans. Value should be a number 1-12.
     */
    public GridItem rowSpan(int rows) {
        if (verifyRange(element(), "PF5/GridItem", "rowSpan", rows, 1, 12)) {
            css(modifier(rows + "-row"));
        }
        return this;
    }

    /**
     * The number of rows the grid item spans on a specific breakpoint. Value should be a number 1-12
     */
    public GridItem rowSpan(Breakpoints<Integer> rows) {
        String modifiers = rows.stream()
                .filter(bp -> verifyRange(element(), "PF5/GridItem", "rowSpan", bp.value, 1, 12))
                .filter(bp -> bp.key != default_)
                .collect(modifiers(row -> row + "-row"));
        return css(modifiers);
    }

    /**
     * The number of columns a grid item is offset.
     */
    public GridItem offset(int columns) {
        if (verifyRange(element(), "PF5/GridItem", "offset", columns, 1, 12)) {
            css(modifier("offset-" + columns + "-col"));
        }
        return this;
    }

    /**
     * The number of columns the grid item is offset on a specific breakpoint. Value should be a number 1-12
     */
    public GridItem offset(Breakpoints<Integer> columns) {
        String modifiers = columns.stream()
                .filter(bp -> verifyRange(element(), "PF5/GridItem", "offset", bp.value, 1, 12))
                .filter(bp -> bp.key != default_)
                .collect(modifiers(col -> "offset-" + col + "-col"));
        return css(modifiers);
    }

    /**
     * Modifies the flex layout element order property.
     */
    public GridItem order(Breakpoints<String> order) {
        return componentVar(layout(grid), item, Order).applyTo(this, order);
    }

    @Override
    public GridItem that() {
        return this;
    }
}
