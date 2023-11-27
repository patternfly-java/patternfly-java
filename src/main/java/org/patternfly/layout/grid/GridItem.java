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

import org.patternfly.core.Logger;
import org.patternfly.core.Modifiers.Fill;
import org.patternfly.layout.BaseLayout;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.grid;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.layout;
import static org.patternfly.layout.Classes.modifier;

public class GridItem extends BaseLayout<HTMLDivElement, GridItem> implements Fill<HTMLDivElement, GridItem> {

    // ------------------------------------------------------ factory

    public static GridItem gridItem() {
        return new GridItem();
    }

    // ------------------------------------------------------ instance

    GridItem() {
        super(div().css(layout(grid, item)).element());
    }

    // ------------------------------------------------------ builder

    public GridItem colSpan(int cols) {
        if (verifyRange("colSpan", cols)) {
            css(modifier(cols + "-col"));
        }
        return this;
    }

    public GridItem rowSpan(int rows) {
        if (verifyRange("rowSpan", rows)) {
            css(modifier(rows + "-row"));
        }
        return this;
    }

    @Override
    public GridItem that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private boolean verifyRange(String property, int value) {
        if (value < 1 || value > 12) {
            Logger.unsupported("PF5/GridItem", "'" + property + "' out of range. Given: " + value + ", allowed [1,12].");
            return false;
        }
        return true;
    }
}
