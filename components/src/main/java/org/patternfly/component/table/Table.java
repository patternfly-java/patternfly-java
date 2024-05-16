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
package org.patternfly.component.table;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.handler.SelectHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Compact;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLTableElement;

import static org.patternfly.component.table.GridBreakpoint.gridMd;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.grid;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.noBorderRows;
import static org.patternfly.style.Classes.table;
import static org.patternfly.style.Modifiers.toggleModifier;

/**
 * A table is used to display large data sets that can be easily laid out in a simple grid with column headers.
 *
 * @see <a href= "https://www.patternfly.org/components/table">https://www.patternfly.org/components/table</a>
 */
public class Table extends BaseComponent<HTMLTableElement, Table> implements Compact<HTMLTableElement, Table> {

    // ------------------------------------------------------ factory

    public static Table table() {
        return new Table().gridBreakpoint(gridMd);
    }

    // ------------------------------------------------------ instance

    private Tbody tbody;
    private SelectHandler<Tr> selectHandler;

    Table() {
        super(ComponentType.Table, Elements.table().css(component(table))
                .attr(role, grid)
                .element());
        storeComponent();
    }

    // ------------------------------------------------------ add

    public Table addCaption(TableCaption caption) {
        return add(caption);
    }

    public Table addHead(Thead head) {
        return add(head);
    }

    public Table addBody(Tbody tbody) {
        return add(tbody);
    }

    public Table add(Tbody tbody) {
        this.tbody = tbody;
        return add(tbody.element());
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #noBorders(boolean) borders(true)} */
    public Table noBorders() {
        return noBorders(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(noBorderRows)} */
    public Table noBorders(boolean borders) {
        return toggleModifier(that(), element(), noBorderRows, borders);
    }

    public Table gridBreakpoint(GridBreakpoint breakpoint) {
        return css(breakpoint.modifier());
    }

    @Override
    public Table that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Table ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public Table onSelect(SelectHandler<Tr> handler) {
        this.selectHandler = handler;
        return this;
    }

    // ------------------------------------------------------ api

    public void select(String key) {
        if (tbody != null) {
            Tr row = tbody.rows.get(key);
            if (row != null) {
                select(row);
            }
        }
    }

    public void select(Tr row) {
        select(row, true);
    }

    public void select(Tr row, boolean fireEvent) {
        unselectAll();
        if (row != null) {
            row.markSelected();
            if (fireEvent && selectHandler != null) {
                selectHandler.onSelect(new Event(""), row, true);
            }
        }
    }

    public Tbody tbody() {
        return tbody;
    }

    // ------------------------------------------------------ internal

    private Iterable<HTMLElement> rows() {
        return tbody.findAll(By.element("tr"));
    }

    private void unselectAll() {
        if (tbody != null) {
            for (Tr row : tbody.rows.values()) {
                row.clearSelection();
            }
        }
    }
}
