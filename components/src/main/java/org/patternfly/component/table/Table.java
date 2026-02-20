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

import java.util.ArrayList;
import java.util.List;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.SelectionMode;
import org.patternfly.core.Aria;
import org.patternfly.handler.MultiSelectHandler;
import org.patternfly.handler.SelectHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.GridBreakpoint;
import org.patternfly.style.Modifiers.Compact;

import elemental2.dom.Event;
import elemental2.dom.HTMLCollection;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;
import elemental2.dom.MutationRecord;

import static java.util.Collections.emptyList;
import static org.patternfly.component.SelectionMode.multi;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.gridcell;
import static org.patternfly.core.Validation.verifyEnum;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.noBorderRows;
import static org.patternfly.style.Classes.table;
import static org.patternfly.style.Classes.treeView;
import static org.patternfly.style.Modifiers.toggleModifier;
import static org.patternfly.style.TypedModifier.swap;

/**
 * A table is used to display large data sets that can be easily laid out in a simple grid with column headers.
 *
 * @see <a href= "https://www.patternfly.org/components/table">https://www.patternfly.org/components/table</a>
 */
public class Table extends BaseComponent<HTMLTableElement, Table> implements
        Compact<HTMLTableElement, Table>,
        Attachable {

    // ------------------------------------------------------ factory

    public static Table table() {
        return new Table(TableType.table);
    }

    public static Table table(TableType type) {
        return new Table(type);
    }

    // ------------------------------------------------------ instance

    private final TableType type;
    private final List<SelectHandler<Tr>> selectHandler;
    private final List<MultiSelectHandler<Table, Tr>> multiSelectHandler;
    private SelectionMode selectionMode;
    private Thead thead;
    private Tbody tbody;

    Table(TableType type) {
        super(ComponentType.Table, Elements.table().css(component(table))
                .attr(role, type.role)
                .element());
        this.type = type;
        this.selectHandler = new ArrayList<>();
        this.multiSelectHandler = new ArrayList<>();
        if (type == TableType.table) {
            gridBreakpoint(GridBreakpoint.gridMd);
        } else if (type == TableType.treeTable) {
            css(modifier(treeView));
            treeViewGridBreakpoint(TreeViewGridBreakpoint.gridMd);
        }
        storeComponent();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (type == TableType.treeTable) {
            if (tbody != null) {
                for (Tr tr : tbody.items.values()) {
                    tr.aria(Aria.level, 1);
                    tr.finishChildren();
                }
            }
            By selector = By.classname(component(table))
                    .and(By.classname(modifier(treeView)))
                    .desc(By.element("td"));
            for (HTMLElement td : querySelectorAll(selector)) {
                td.setAttribute(role, gridcell);
            }
        }
    }

    // ------------------------------------------------------ add

    public Table addCaption(TableCaption caption) {
        return add(caption);
    }

    public Table addHead(Thead head) {
        this.thead = head;
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
        if (verifyEnum(element(), "gridBreakpoint", breakpoint,
                GridBreakpoint.gridMd,
                GridBreakpoint.gridLg,
                GridBreakpoint.gridXl,
                GridBreakpoint.gird2xl)) {
            swap(this, element(), breakpoint, GridBreakpoint.values());
        }
        return this;
    }

    /**
     * Sets the selection mode for the table. If not set, the table does not support selection.
     *
     * @param selectionMode the {@link SelectionMode} that specifies how rows are selected in the table. Supported modes
     *                      include:
     *                      <ul>
     *                      <li>{@code single} - Only a single item can be selected at any time.</li>
     *                      <li>{@code multi} - Multiple items can be selected simultaneously.</li>
     *                      </ul>
     *                      If an unsupported mode is provided, the method will not update the current selection mode.
     * @return the current {@code Table} instance to allow for method chaining.
     */
    public Table selectionMode(SelectionMode selectionMode) {
        if (verifyEnum(element(), "selectionMode", selectionMode, single, multi)) {
            this.selectionMode = selectionMode;
        }
        return this;
    }

    public Table treeViewGridBreakpoint(TreeViewGridBreakpoint breakpoint) {
        if (verifyEnum(element(), "treeViewGridBreakpoint", breakpoint,
                TreeViewGridBreakpoint.gridMd,
                TreeViewGridBreakpoint.gridLg,
                TreeViewGridBreakpoint.gridXl,
                TreeViewGridBreakpoint.gird2xl)) {
            swap(this, element(), breakpoint, TreeViewGridBreakpoint.values());
        }
        return this;
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

    public Table onSingleSelect(SelectHandler<Tr> selectHandler) {
        this.selectHandler.add(selectHandler);
        return this;
    }

    public Table onMultiSelect(MultiSelectHandler<Table, Tr> selectHandler) {
        this.multiSelectHandler.add(selectHandler);
        return this;
    }

    // ------------------------------------------------------ api

    public void reset() {
        if (tbody != null) {
            for (Tr tr : tbody.items()) {
                tr.reset();
            }
        }
    }

    public void select(String identifier) {
        select(findItem(identifier), true, true);
    }

    public void select(String identifier, boolean selected) {
        select(findItem(identifier), selected, true);
    }

    public void select(String identifier, boolean selected, boolean fireEvent) {
        select(findItem(identifier), selected, fireEvent);
    }

    public void select(Tr item) {
        select(item, true, true);
    }

    public void select(Tr item, boolean selected) {
        select(item, selected, true);
    }

    public void select(Tr item, boolean selected, boolean fireEvent) {
        if (tbody != null && selectionMode != null && item != null) {
            if (selectionMode == single) {
                if (selected) {
                    unselectAll();
                }
                item.markSelected(selected);
                if (fireEvent) {
                    fireSingleSelection(item, selected);
                }
            } else if (selectionMode == multi) {
                item.markSelected(selected);
                if (tbody != null) {
                    HTMLInputElement checkbox = querySelector(By.data(Th.CHECKBOX_DATA_MARKER));
                    if (checkbox != null) {
                        if (selectedItems().isEmpty()) {
                            checkbox.checked = false;
                            checkbox.indeterminate = false;
                        } else if (selectedItems().size() == tbody.items().size()) {
                            checkbox.checked = true;
                            checkbox.indeterminate = false;
                        } else {
                            checkbox.checked = false;
                            checkbox.indeterminate = true;
                        }
                    }
                }
                if (fireEvent) {
                    fireMultiSelection();
                }
            }
        }
    }

    public void selectAll() {
        selectAll(true);
    }

    public void selectAll(boolean fireEvent) {
        if (tbody != null && selectionMode == multi) {
            for (Tr item : tbody.items()) {
                item.markSelected(true);
                if (fireEvent) {
                    fireMultiSelection();
                }
            }
        }
    }

    public void selectNone() {
        selectNone(true);
    }

    public void selectNone(boolean fireEvent) {
        if (tbody != null && selectionMode != null) {
            if (selectionMode == single) {
                List<Tr> selectedItems = fireEvent ? selectedItems() : emptyList();
                unselectAll();
                if (fireEvent) {
                    if (!selectedItems.isEmpty()) {
                        fireSingleSelection(selectedItems.get(0), false);
                    }
                }
            } else if (selectionMode == multi) {
                unselectAll();
                if (fireEvent) {
                    fireMultiSelection();
                }
            }
        }
    }

    public List<Tr> selectedItems() {
        List<Tr> selectedItems = new ArrayList<>();
        if (tbody != null) {
            for (Tr tr : tbody.items()) {
                if (tr.isSelected()) {
                    selectedItems.add(tr);
                }
            }
        }
        return selectedItems;
    }

    public Thead thead() {
        return thead;
    }

    public Tbody tbody() {
        return tbody;
    }

    // ------------------------------------------------------ internal

    int columns() {
        int columns = 0;
        if (element().rows.length > 0) {
            HTMLTableRowElement row = element().rows.item(0);
            HTMLCollection<HTMLTableCellElement> cells = row.cells;
            for (int i = 0; i < row.cells.length; i++) {
                columns += cells.item(i).colSpan;
            }
        }
        return columns;
    }

    private Tr findItem(String identifier) {
        return tbody != null ? tbody.items.get(identifier) : null;
    }

    private void fireSingleSelection(Tr item, boolean selected) {
        selectHandler.forEach(sh -> sh.onSelect(new Event(""), item, selected));
    }

    private void fireMultiSelection() {
        multiSelectHandler.forEach(msh -> msh.onSelect(new Event(""), this, selectedItems()));
    }

    private void unselectAll() {
        if (tbody != null) {
            for (Tr row : tbody.items.values()) {
                row.markSelected(false);
            }
        }
    }
}
