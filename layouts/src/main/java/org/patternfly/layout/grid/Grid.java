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

import java.util.function.Function;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.layout.BaseLayout;
import org.patternfly.style.Breakpoints;
import org.patternfly.style.Modifiers.Gutter;

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

/**
 * The grid layout places content on a fixed 12 column grid.
 *
 * @see <a href="https://www.patternfly.org/layouts/grid">https://www.patternfly.org/layouts/grid</a>
 */
public class Grid extends BaseLayout<HTMLElement, Grid> implements Gutter<HTMLElement, Grid> {

    // ------------------------------------------------------ factory

    public static Grid grid() {
        return new Grid(div());
    }

    public static <E extends HTMLElement> Grid grid(HTMLContainerBuilder<E> builder) {
        return new Grid(builder);
    }

    // ------------------------------------------------------ instance

    <E extends HTMLElement> Grid(HTMLContainerBuilder<E> builder) {
        super(builder.css(layout(grid)).element());
    }

    // ------------------------------------------------------ add

    public <T> Grid addItems(Iterable<T> items, Function<T, GridItem> display) {
        for (T item : items) {
            GridItem gridItem = display.apply(item);
            addItem(gridItem);
        }
        return this;
    }

    public Grid addItem(GridItem item) {
        return add(item);
    }

    // ------------------------------------------------------ builder

    /**
     * The number of columns all grid items should span on a specific breakpoint.
     */
    public Grid columns(Breakpoints<Integer> columns) {
        String modifiers = columns.stream()
                .filter(bp -> verifyRange(element(), "columns", bp.value, 1, 12))
                .filter(bp -> bp.key != default_)
                .collect(modifiers(col -> "all-" + col + "-col"));
        return css(modifiers);
    }

    /** Modifies the flex layout element order property. */
    public Grid order(Breakpoints<String> order) {
        return componentVar(layout(grid), item, Order).applyTo(this).set(order);
    }

    /**
     * The number of rows a column in the grid should span. Value should be a number 1-12.
     */
    public Grid span(int rows) {
        if (verifyRange(element(), "span", rows, 1, 12)) {
            css(modifier("all-" + rows + "-col"));
        }
        return this;
    }

    @Override
    public Grid that() {
        return this;
    }
}
