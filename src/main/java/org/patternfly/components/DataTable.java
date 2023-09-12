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
package org.patternfly.components;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.function.Predicate;

import org.gwtproject.event.shared.HandlerRegistration;
import org.gwtproject.event.shared.HandlerRegistrations;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.jboss.elemento.InputType;
import org.patternfly.dataprovider.DataProvider;
import org.patternfly.dataprovider.Display;
import org.patternfly.dataprovider.PageInfo;
import org.patternfly.dataprovider.SelectionInfo;
import org.patternfly.dataprovider.SortInfo;
import org.patternfly.layout.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;
import elemental2.dom.HTMLTableSectionElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.caption;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.table;
import static org.jboss.elemento.Elements.tbody;
import static org.jboss.elemento.Elements.td;
import static org.jboss.elemento.Elements.th;
import static org.jboss.elemento.Elements.thead;
import static org.jboss.elemento.Elements.tr;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.core.Dataset.dataTableItem;
import static org.patternfly.core.Dataset.dataTableSort;
import static org.patternfly.layout.Classes.button;
import static org.patternfly.layout.Classes.check;
import static org.patternfly.layout.Classes.col;
import static org.patternfly.layout.Classes.compact;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;
import static org.patternfly.layout.Classes.controls;
import static org.patternfly.layout.Classes.expandable;
import static org.patternfly.layout.Classes.expandableContent;
import static org.patternfly.layout.Classes.expandableRow;
import static org.patternfly.layout.Classes.grid;
import static org.patternfly.layout.Classes.indicator;
import static org.patternfly.layout.Classes.labelledBy;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.noBorderRows;
import static org.patternfly.layout.Classes.none;
import static org.patternfly.layout.Classes.plain;
import static org.patternfly.layout.Classes.scope;
import static org.patternfly.layout.Classes.selected;
import static org.patternfly.layout.Classes.sort;
import static org.patternfly.layout.Classes.table;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.Icons.angleDown;
import static org.patternfly.layout.Icons.arrowsAltV;
import static org.patternfly.layout.Icons.fas;
import static org.patternfly.layout.Icons.longArrowAltDown;
import static org.patternfly.layout.Icons.longArrowAltUp;

/**
 * PatternFly data table.
 *
 * <p>
 * The data table does not manage data by itself. Use a {@link DataProvider} and add the data table as a display to the data
 * provider:
 * </p>
 *
 * <pre>
 * DataProvider dataProvider = ...;
 * DataTable table = ...;
 *
 * dataProvider.addDisplay(table);
 * dataProvider.update(...);
 * </pre>
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/table">https://www.patternfly.org/v4/documentation/core/components/table</a>
 */
public class DataTable<T> extends BaseComponent<HTMLTableElement, DataTable<T>>
        implements Display<T> {

    // ------------------------------------------------------ factory methods

    public static <T> DataTable<T> dataTable(DataProvider<T> dataProvider) {
        return new DataTable<>(dataProvider, null);
    }

    public static <T> DataTable<T> dataTable(DataProvider<T> dataProvider, String caption) {
        return new DataTable<>(dataProvider, caption);
    }

    public static <T> Column<T> expandColumn() {
        return new Column<>(EXPAND_COLUMN, null, null, (td, dataProvider, item) -> {
            String iconClass = fas(angleDown) + " " + component(table, toggle, Classes.icon);
            td.css(component(table, toggle)).add(Button.icon(icon(iconClass), "Toggle details"));
        }, null);
    }

    public static <T> Column<T> checkboxColumn() {
        return new Column<>(CHECKBOX_COLUMN, null,
                th -> th.css(component(table, check)).add(input(InputType.checkbox).aria("label", "Select all rows")),
                (td, dataProvider,
                        item) -> td.css(component(table, check)).add(input(InputType.checkbox)
                                .name(Id.build(dataProvider.getId(item), "select")).aria(labelledBy, dataProvider.getId(item))),
                null);
    }

    public static <T> Column<T> iconColumn(Icon icon) {
        return iconColumn((td, dataProvider, item) -> td.add(icon));
    }

    public static <T> Column<T> iconColumn(BodyDisplay<T> bodyDisplay) {
        BodyDisplay<T> css = (td, dataProvider, item) -> td.css(component(table, "icon"));
        return new Column<>(Id.unique("icon"), null, th -> th.css(component(table, "icon")).attr(scope, col),
                css.andThen(bodyDisplay), null);
    }

    public static <T> Column<T> actionsColumn(BodyDisplay<T> bodyDisplay) {
        BodyDisplay<T> css = (td, dataProvider, item) -> td.css(component(table, "action"));
        return new Column<>(ACTIONS_COLUMN, null, null, css.andThen(bodyDisplay), null);
    }

    public static <T> Column<T> column(String name, BodyDisplay<T> bodyDisplay) {
        return new Column<>(name, null, th -> th.attr(scope, col).textContent(name), bodyDisplay, null);
    }

    public static <T> Column<T> column(String name, Comparator<T> comparator, BodyDisplay<T> bodyDisplay) {
        return new Column<>(name, comparator, th -> th.css(component(table, sort)).aria(sort, none).attr(scope, col)
                .add(button().css(component(button), modifier(plain))
                        .data(dataTableSort, Id.build(name)) // keep in sync with
                        // Column constructor!
                        .add(name)
                        .add(span().css(component(table, sort, indicator)).add(i().css(fas(arrowsAltV))))),
                bodyDisplay, null);
    }

    public static <T> Column<T> column(String name, HeadDisplay headDisplay, BodyDisplay<T> bodyDisplay) {
        return new Column<>(name, null, headDisplay, bodyDisplay, null);
    }

    // ------------------------------------------------------ instance

    private static final String ARIA = "aria-";
    private static final String ARIA_SORT = "aria-sort";
    private static final String CHECKBOX_COLUMN = "checkbox";
    private static final String EXPAND_COLUMN = "expand";
    private static final String ACTIONS_COLUMN = "actions";

    private static final By SORT_SELECTOR = By.classname(component(table, sort));
    private static final By TOGGLE_SELECTOR = By.classname(component(table, toggle)).child(By.element("button"));
    private static final By CHECK_SELECTOR = By.classname(component(table, check))
            .desc(By.element("input").and(By.attribute("type", "checkbox")));
    private static final By SELECT_ALL_SELECTOR = By.element("thead").desc(CHECK_SELECTOR);
    private static final By SELECT_ITEM_SELECTOR = By.element("tbody").desc(CHECK_SELECTOR);

    private final DataProvider<T> dataProvider;
    private final List<Column<T>> columns;
    private final ItemSelect itemSelect;
    private final HTMLContainerBuilder<HTMLTableRowElement> theadRow;
    private final HTMLContainerBuilder<HTMLTableSectionElement> tbody;
    private HandlerRegistration selectAllHandler;
    private HandlerRegistration expandHandler;
    private Predicate<T> expandablePredicate;
    private ExpandableDisplay<T> expandableDisplay;
    private boolean expandableFullWidth;
    private boolean expandableNoPadding;
    private boolean expandableColumn;
    private boolean checkboxColumn;
    private boolean actionsColumn;
    private int noContentColumns;

    protected DataTable(DataProvider<T> dataProvider, String caption) {
        super(table().css(component(table)).attr("role", grid).element(), ComponentType.DataTable);
        this.dataProvider = dataProvider;
        this.columns = new ArrayList<>();
        this.itemSelect = new ItemSelect(element());
        this.noContentColumns = 0;

        if (caption != null) {
            element().appendChild(caption().textContent(caption).element());
        }
        theadRow = tr();
        tbody = tbody();
        element().appendChild(thead().add(theadRow).element());
        element().appendChild(tbody.element());
    }

    @Override
    public DataTable<T> that() {
        return this;
    }

    // ------------------------------------------------------ add components

    public DataTable<T> add(Column<T> column) {
        columns.add(column);
        HTMLContainerBuilder<HTMLTableCellElement> th = th();
        theadRow.add(th);
        if (column.headDisplay != null) {
            column.headDisplay.render(th);
            if (column.comparator != null) {
                Element sortButton = Elements.find(th, By.data(dataTableSort, column.id));
                if (sortButton != null) {
                    bind(sortButton, click, e -> {
                        HTMLButtonElement b = (HTMLButtonElement) e.currentTarget;
                        HTMLElement sortTh = Elements.closest(b, By.classname(component(table, sort)));
                        if (sortTh != null) {
                            boolean descending = "descending".equals(sortTh.getAttribute(ARIA_SORT));
                            Comparator<T> c = descending ? column.comparator.reversed() : column.comparator;
                            dataProvider.sort(new SortInfo<>(column.id, c, !descending));
                        }
                    });
                }
            }
        }
        if (EXPAND_COLUMN.equals(column.id)) {
            expandableColumn = true;
            noContentColumns++;
            css(modifier(expandable));
        }
        if (CHECKBOX_COLUMN.equals(column.id)) {
            checkboxColumn = true;
            noContentColumns++;
            bindSelectAllHandler();
        }
        if (ACTIONS_COLUMN.equals(column.id)) {
            actionsColumn = true;
            noContentColumns++;
        }
        return this;
    }

    public DataTable<T> expandableRow(ExpandableDisplay<T> expandableDisplay) {
        return expandableRow(null, false, false, expandableDisplay);
    }

    public DataTable<T> expandableRow(boolean fullWidth, ExpandableDisplay<T> expandableDisplay) {
        return expandableRow(null, fullWidth, false, expandableDisplay);
    }

    public DataTable<T> expandableRow(boolean fullWidth, boolean noPadding, ExpandableDisplay<T> expandableDisplay) {
        return expandableRow(null, fullWidth, noPadding, expandableDisplay);
    }

    public DataTable<T> expandableRow(Predicate<T> expandable, ExpandableDisplay<T> expandableDisplay) {
        return expandableRow(expandable, false, false, expandableDisplay);
    }

    public DataTable<T> expandableRow(Predicate<T> expandable, boolean fullWidth,
            ExpandableDisplay<T> expandableDisplay) {
        return expandableRow(expandable, fullWidth, false, expandableDisplay);
    }

    public DataTable<T> expandableRow(Predicate<T> expandable, boolean fullWidth, boolean noPadding,
            ExpandableDisplay<T> expandableDisplay) {
        this.expandableColumn = true;
        this.expandablePredicate = expandable;
        this.expandableFullWidth = fullWidth;
        this.expandableNoPadding = noPadding;
        this.expandableDisplay = expandableDisplay;
        return this;
    }

    // ------------------------------------------------------ display API

    @Override
    public void showItems(Iterable<T> items, PageInfo pageInfo) {
        itemSelect.removeSelectHandler();
        if (expandHandler != null) {
            expandHandler.removeHandler();
        }
        if (expandableColumn) {
            Elements.findAll(element(), By.element("tbody")).forEach(Elements::failSafeRemoveFromParent);
        } else {
            removeChildrenFrom(tbody.element());
        }

        for (T item : items) {
            String id = dataProvider.getId(item);
            HTMLContainerBuilder<HTMLTableRowElement> tr = tr().data(dataTableItem, id);
            for (Column<T> column : columns) {
                HTMLContainerBuilder<HTMLTableCellElement> td = td();
                if (!EXPAND_COLUMN.equals(column.id) || expandablePredicate == null || expandablePredicate.test(item)) {
                    if (column.bodyDisplay != null) {
                        column.bodyDisplay.render(td, dataProvider, item);
                    }
                }
                tr.add(td);
            }

            if (expandableColumn) {
                HTMLContainerBuilder<HTMLTableSectionElement> tbody = tbody().add(tr);
                if (expandableDisplay != null) {
                    if (expandablePredicate == null || expandablePredicate.test(item)) {
                        HTMLContainerBuilder<HTMLTableRowElement> etr = tr().css(component(table, expandableRow))
                                .hidden(true);
                        HTMLContainerBuilder<HTMLTableCellElement> etd = td();
                        HTMLContainerBuilder<HTMLDivElement> ec = div().css(component(table, expandableRow, content));
                        expandableDisplay.render(ec, dataProvider, item);
                        if (expandableNoPadding) {
                            etd.css(modifier("no-padding"));
                        }
                        if (expandableFullWidth) {
                            etr.add(etd.apply(e -> e.colSpan = columns.size()).add(ec));
                        } else {
                            if (checkboxColumn) {
                                etr.add(td());
                            }
                            if (actionsColumn) {
                                etr.add(td());
                            }
                            etr.add(etd.apply(e -> e.colSpan = columns.size() - noContentColumns).add(ec));
                            if (actionsColumn) {
                                etr.add(td());
                            }
                        }
                        tbody.add(etr);
                    }
                }
                element().appendChild(tbody.element());
            } else {
                tbody.add(tr);
            }
        }

        itemSelect.bindSelectHandler(SELECT_ITEM_SELECTOR, checkbox -> {
            HTMLElement itemElement = Elements.closest(checkbox, By.data(dataTableItem));
            if (itemElement != null) {
                return itemElement.dataset.get(dataTableItem);
            }
            return null;
        }, (id, selected) -> {
            T item = dataProvider.getItem(id);
            if (item != null) {
                dataProvider.select(item, selected);
            }
        });
        bindExpandHandler();
    }

    @Override
    public void updateSelection(SelectionInfo<T> selectionInfo) {
        for (T item : dataProvider.getVisibleItems()) {
            String id = dataProvider.getId(item);
            itemSelect.updateSelection(By.data(dataTableItem, id).desc(CHECK_SELECTOR), selectionInfo.isSelected(item));
        }
    }

    @Override
    public void updateSortInfo(SortInfo<T> sortInfo) {
        for (HTMLElement e : Elements.findAll(theadRow, SORT_SELECTOR)) {
            HTMLButtonElement button = Elements.find(e, By.data(dataTableSort));
            HTMLElement tsi = Elements.find(e, By.classname(component(table, sort, indicator)));
            if (button != null && tsi != null) {
                removeChildrenFrom(tsi);
                if (sortInfo.getId().equals(button.dataset.get(dataTableSort))) {
                    e.classList.add(modifier(selected));
                    if (sortInfo.isAscending()) {
                        e.setAttribute(ARIA_SORT, "descending");
                        tsi.appendChild(i().css(fas(longArrowAltUp)).element());
                    } else {
                        e.setAttribute(ARIA_SORT, "ascending");
                        tsi.appendChild(i().css(fas(longArrowAltDown)).element());
                    }
                } else {
                    e.classList.remove(modifier(selected));
                    e.setAttribute(ARIA_SORT, none);
                    tsi.appendChild(i().css(fas(arrowsAltV)).element());
                }
            }
        }
    }

    // ------------------------------------------------------ modifiers

    public DataTable<T> compact() {
        return css(modifier(compact));
    }

    public DataTable<T> noBorders() {
        return css(modifier(noBorderRows));
    }

    public DataTable<T> noSelectAll() {
        HTMLElement selectAll = Elements.find(element(), SELECT_ALL_SELECTOR);
        if (selectAll != null) {
            setVisible(selectAll, false);
        }
        return this;
    }

    // ------------------------------------------------------ internals

    private void bindSelectAllHandler() {
        HTMLInputElement checkbox = Elements.find(theadRow, SELECT_ALL_SELECTOR);
        if (checkbox != null) {
            selectAllHandler = bind(checkbox, click, e -> {
                boolean selectAll = ((HTMLInputElement) e.currentTarget).checked;
                if (selectAll) {
                    dataProvider.selectVisible();
                } else {
                    dataProvider.clearVisibleSelection();
                }
            });
        }
    }

    private void removeSelectAllHandler() {
        if (selectAllHandler != null) {
            selectAllHandler.removeHandler();
            selectAllHandler = null;
        }
    }

    private void bindExpandHandler() {
        List<HandlerRegistration> handler = new ArrayList<>();
        for (HTMLElement e : Elements.findAll(element(), TOGGLE_SELECTOR)) {
            HTMLElement itemElement = Elements.closest(e, By.data(dataTableItem));
            if (itemElement != null) {
                HTMLElement tbody = (HTMLElement) itemElement.parentNode;
                HTMLElement contentRow = (HTMLElement) itemElement.nextElementSibling;
                if (tbody != null && contentRow != null) {
                    String itemId = itemElement.dataset.get(dataTableItem);
                    String buttonId = Id.build(itemId, toggle);
                    String contentId = Id.build(itemId, expandableContent);
                    e.id = buttonId;
                    e.setAttribute(ARIA + labelledBy, itemId + " " + buttonId);
                    e.setAttribute(ARIA + "expanded", false);
                    e.setAttribute(ARIA + controls, contentId);
                    contentRow.id = contentId;
                    contentRow.hidden = true;
                    contentRow.setAttribute(ARIA + "label", "Details");

                    handler.add(bind(e, click, evt -> {
                        if (tbody.classList.contains(modifier("expanded"))) {
                            // collapse
                            tbody.classList.remove(modifier("expanded"));
                            e.classList.remove(modifier("expanded"));
                            e.setAttribute(ARIA + "expanded", false);
                            contentRow.classList.remove(modifier("expanded"));
                            contentRow.hidden = true;
                        } else {
                            // expand
                            tbody.classList.add(modifier("expanded"));
                            e.classList.add(modifier("expanded"));
                            e.setAttribute(ARIA + "expanded", true);
                            contentRow.classList.add(modifier("expanded"));
                            contentRow.hidden = false;
                        }
                    }));
                }
            }
        }
        if (!handler.isEmpty()) {
            expandHandler = HandlerRegistrations.compose(handler.toArray(new HandlerRegistration[0]));
        }
    }

    private void removeExpandHandler() {
        if (expandHandler != null) {
            expandHandler.removeHandler();
            expandHandler = null;
        }
    }

    // ------------------------------------------------------ inner classes

    @FunctionalInterface
    public interface HeadDisplay {

        void render(HTMLContainerBuilder<HTMLTableCellElement> th);

        default HeadDisplay andThen(HeadDisplay after) {
            return th -> {
                render(th);
                after.render(th);
            };
        }
    }

    @FunctionalInterface
    public interface BodyDisplay<T> {

        void render(HTMLContainerBuilder<HTMLTableCellElement> td, DataProvider<T> dataProvider, T item);

        default BodyDisplay<T> andThen(BodyDisplay<T> after) {
            return (td, dataProvider, item) -> {
                render(td, dataProvider, item);
                after.render(td, dataProvider, item);
            };
        }
    }

    @FunctionalInterface
    public interface ExpandableDisplay<T> {

        void render(HTMLContainerBuilder<HTMLDivElement> html, DataProvider<T> dataProvider, T item);

        default ExpandableDisplay<T> andThen(ExpandableDisplay<T> after) {
            return (html, dataProvider, item) -> {
                render(html, dataProvider, item);
                after.render(html, dataProvider, item);
            };
        }
    }

    @FunctionalInterface
    public interface CompoundDisplay<T> {

        void render(HTMLContainerBuilder<HTMLTableCellElement> html, DataProvider<T> dataProvider, T item);

        default CompoundDisplay<T> andThen(CompoundDisplay<T> after) {
            return (html, dataProvider, item) -> {
                render(html, dataProvider, item);
                after.render(html, dataProvider, item);
            };
        }
    }

    public static class Column<T> {

        private final String id;
        private final Comparator<T> comparator;
        private final HeadDisplay headDisplay;
        private final BodyDisplay<T> bodyDisplay;
        // TODO support compound expandable
        private final CompoundDisplay<T> compoundDisplay;

        protected Column(String name, Comparator<T> comparator, HeadDisplay headDisplay, BodyDisplay<T> bodyDisplay,
                CompoundDisplay<T> compoundDisplay) {
            this.id = Id.build(name);
            this.comparator = comparator;
            this.headDisplay = headDisplay;
            this.bodyDisplay = bodyDisplay;
            this.compoundDisplay = compoundDisplay;
        }
    }
}
