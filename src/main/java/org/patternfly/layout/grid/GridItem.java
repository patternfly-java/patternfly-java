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
import org.patternfly.core.Logger;
import org.patternfly.core.Tuple;
import org.patternfly.core.Tuples;
import org.patternfly.layout.BaseLayout;
import org.patternfly.style.Breakpoint;
import org.patternfly.style.Modifiers.Fill;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.grid.Grid.internalOrder;
import static org.patternfly.style.Classes.grid;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.layout;
import static org.patternfly.style.Classes.modifier;

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
        if (verifyRange("span", columns)) {
            css(modifier(columns + "-col"));
        }
        return this;
    }

    /**
     * The number of columns the grid item spans on a specific breakpoint. Value should be a number 1-12.
     */
    public GridItem span(Tuples<Breakpoint, Integer> columns) {
        if (columns != null) {
            for (Tuple<Breakpoint, Integer> column : columns) {
                internalSpan(column);
            }
        }
        return this;
    }

    /**
     * The number of rows the grid item spans. Value should be a number 1-12.
     */
    public GridItem rowSpan(int rows) {
        if (verifyRange("rowSpan", rows)) {
            css(modifier(rows + "-row"));
        }
        return this;
    }

    /**
     * The number of rows the grid item spans on a specific breakpoint. Value should be a number 1-12
     */
    public GridItem rowSpan(Tuples<Breakpoint, Integer> rows) {
        if (rows != null) {
            for (Tuple<Breakpoint, Integer> row : rows) {
                internalRowSpan(row);
            }
        }
        return this;
    }

    /**
     * The number of columns a grid item is offset.
     */
    public GridItem offset(int columns) {
        if (verifyRange("offset", columns)) {
            css(modifier("offset-" + columns + "-col"));
        }
        return this;
    }

    /**
     * The number of columns the grid item is offset on a specific breakpoint. Value should be a number 1-12
     */
    public GridItem offset(Tuples<Breakpoint, Integer> columns) {
        if (columns != null) {
            for (Tuple<Breakpoint, Integer> column : columns) {
                internalOffset(column);
            }
        }
        return this;
    }

    /**
     * Modifies the flex layout element order property.
     */
    public GridItem order(Tuples<Breakpoint, String> order) {
        if (order != null) {
            for (Tuple<Breakpoint, String> o : order) {
                internalOrder(element(), o);
            }
        }
        return this;
    }

    @Override
    public GridItem that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private void internalSpan(Tuple<Breakpoint, Integer> tuple) {
        if (tuple.key != Breakpoint.default_) {
            if (verifyRange("span", tuple.value)) {
                css(modifier(tuple.value + "-col-on-" + tuple.key.value));
            }
        }
    }

    private void internalRowSpan(Tuple<Breakpoint, Integer> tuple) {
        if (tuple.key != Breakpoint.default_) {
            if (verifyRange("rowSpan", tuple.value)) {
                css(modifier(tuple.value + "-row-on-" + tuple.key.value));
            }
        }
    }

    private void internalOffset(Tuple<Breakpoint, Integer> tuple) {
        if (tuple.key != Breakpoint.default_) {
            if (verifyRange("offset", tuple.value)) {
                css(modifier("offset-" + tuple.value + "-col-on-" + tuple.key.value));
            }
        }
    }

    private boolean verifyRange(String property, int value) {
        if (value < 1 || value > 12) {
            Logger.unsupported("PF5/GridItem", element(),
                    "'" + property + "' out of range. Given: " + value + ", allowed [1,12].");
            return false;
        }
        return true;
    }
}
