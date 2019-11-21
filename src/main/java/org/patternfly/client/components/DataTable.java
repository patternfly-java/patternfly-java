package org.patternfly.client.components;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.function.Predicate;

import elemental2.dom.Element;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;
import elemental2.dom.HTMLTableSectionElement;
import org.gwtproject.event.shared.HandlerRegistration;
import org.gwtproject.event.shared.HandlerRegistrations;
import org.jboss.gwt.elemento.core.By;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.InputType;
import org.jboss.gwt.elemento.core.builder.ElementBuilder;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;
import org.patternfly.client.dataprovider.DataProvider;
import org.patternfly.client.dataprovider.Display;
import org.patternfly.client.dataprovider.PageInfo;
import org.patternfly.client.dataprovider.SelectionInfo;
import org.patternfly.client.dataprovider.SortInfo;
import org.patternfly.client.resources.Constants;

import static org.jboss.gwt.elemento.core.Elements.*;
import static org.jboss.gwt.elemento.core.EventType.bind;
import static org.jboss.gwt.elemento.core.EventType.click;
import static org.patternfly.client.components.Components.icon;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.fas;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.action;
import static org.patternfly.client.resources.Constants.angleDown;
import static org.patternfly.client.resources.Constants.button;
import static org.patternfly.client.resources.Constants.check;
import static org.patternfly.client.resources.Constants.col;
import static org.patternfly.client.resources.Constants.compact;
import static org.patternfly.client.resources.Constants.content;
import static org.patternfly.client.resources.Constants.controls;
import static org.patternfly.client.resources.Constants.expandable;
import static org.patternfly.client.resources.Constants.expandableContent;
import static org.patternfly.client.resources.Constants.expandableRow;
import static org.patternfly.client.resources.Constants.expanded;
import static org.patternfly.client.resources.Constants.false_;
import static org.patternfly.client.resources.Constants.grid;
import static org.patternfly.client.resources.Constants.icon;
import static org.patternfly.client.resources.Constants.indicator;
import static org.patternfly.client.resources.Constants.label;
import static org.patternfly.client.resources.Constants.labelledBy;
import static org.patternfly.client.resources.Constants.noBorderRows;
import static org.patternfly.client.resources.Constants.noPadding;
import static org.patternfly.client.resources.Constants.none;
import static org.patternfly.client.resources.Constants.plain;
import static org.patternfly.client.resources.Constants.role;
import static org.patternfly.client.resources.Constants.scope;
import static org.patternfly.client.resources.Constants.selected;
import static org.patternfly.client.resources.Constants.sort;
import static org.patternfly.client.resources.Constants.table;
import static org.patternfly.client.resources.Constants.toggle;
import static org.patternfly.client.resources.Dataset.dataTableItem;
import static org.patternfly.client.resources.Dataset.dataTableSort;

/**
 * PatternFly data table.
 *
 * <p>
 * The data table does not manage data by itself. Use a {@link DataProvider} and add the data table as a display to the
 * data provider:
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
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/table">https://www.patternfly.org/v4/documentation/core/components/table</a>
 */
public class DataTable<T> extends ElementBuilder<HTMLTableElement, DataTable<T>>
        implements HtmlContent<HTMLTableElement, DataTable<T>>, Display<T> {

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

    private final HtmlContentBuilder<HTMLTableRowElement> theadRow;
    private final HtmlContentBuilder<HTMLTableSectionElement> tbody;

    DataTable(DataProvider<T> dataProvider, String caption) {
        super(table().css(component(table))
                .attr(role, grid).element());
        this.dataProvider = dataProvider;
        this.columns = new ArrayList<>();
        this.itemSelect = new ItemSelect(element);
        this.noContentColumns = 0;

        if (caption != null) {
            element.appendChild(caption().textContent(caption).element());
        }
        theadRow = tr();
        tbody = tbody();
        element.appendChild(thead().add(theadRow).element());
        element.appendChild(tbody.element());
    }

    @Override
    public DataTable<T> that() {
        return this;
    }

    // ------------------------------------------------------ add components

    public DataTable<T> add(Column<T> column) {
        columns.add(column);
        HtmlContentBuilder<HTMLTableCellElement> th = th();
        theadRow.add(th);
        if (column.headDisplay != null) {
            column.headDisplay.render(th);
            if (column.comparator != null) {
                Element sortButton = find(th, By.data(dataTableSort, column.id));
                if (sortButton != null) {
                    bind(sortButton, click, e -> {
                        HTMLButtonElement b = (HTMLButtonElement) e.currentTarget;
                        HTMLElement sortTh = closest(b, By.classname(component(table, sort)));
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
            findAll(element, By.element("tbody")).forEach(Elements::failSafeRemoveFromParent);
        } else {
            removeChildrenFrom(tbody.element());
        }

        for (T item : items) {
            String id = dataProvider.getId(item);
            HtmlContentBuilder<HTMLTableRowElement> tr = tr().data(dataTableItem, id);
            for (Column<T> column : columns) {
                HtmlContentBuilder<HTMLTableCellElement> td = td();
                if (!EXPAND_COLUMN.equals(column.id) ||
                        expandablePredicate == null ||
                        expandablePredicate.test(item)) {
                    if (column.bodyDisplay != null) {
                        column.bodyDisplay.render(td, dataProvider, item);
                    }
                }
                tr.add(td);
            }

            if (expandableColumn) {
                HtmlContentBuilder<HTMLTableSectionElement> tbody = tbody().add(tr);
                if (expandableDisplay != null) {
                    if (expandablePredicate == null || expandablePredicate.test(item)) {
                        HtmlContentBuilder<HTMLTableRowElement> etr = tr().css(component(table, expandableRow))
                                .hidden(true);
                        HtmlContentBuilder<HTMLTableCellElement> etd = td();
                        HtmlContentBuilder<HTMLDivElement> ec = div().css(component(table, expandableRow, content));
                        expandableDisplay.render(ec, dataProvider, item);
                        if (expandableNoPadding) {
                            etd.css(modifier(noPadding));
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
                element.appendChild(tbody.element());
            } else {
                tbody.add(tr);
            }
        }

        itemSelect.bindSelectHandler(SELECT_ITEM_SELECTOR,
                checkbox -> {
                    HTMLElement itemElement = closest(checkbox, By.data(dataTableItem));
                    if (itemElement != null) {
                        return itemElement.dataset.get(dataTableItem);
                    }
                    return null;
                },
                (id, selected) -> {
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
            itemSelect.updateSelection(By.data(dataTableItem, id).desc(CHECK_SELECTOR),
                    selectionInfo.isSelected(item));
        }
    }

    @Override
    public void updateSortInfo(SortInfo<T> sortInfo) {
        for (HTMLElement e : findAll(theadRow, SORT_SELECTOR)) {
            HTMLButtonElement button = find(e, By.data(dataTableSort));
            HTMLElement tsi = find(e, By.classname(component(table, sort, indicator)));
            if (button != null && tsi != null) {
                removeChildrenFrom(tsi);
                if (sortInfo.getId().equals(button.dataset.get(dataTableSort))) {
                    e.classList.add(modifier(selected));
                    if (sortInfo.isAscending()) {
                        e.setAttribute(ARIA_SORT, "descending");
                        tsi.appendChild(i().css(fas("long-arrow-alt-up")).element());
                    } else {
                        e.setAttribute(ARIA_SORT, "ascending");
                        tsi.appendChild(i().css(fas("long-arrow-alt-down")).element());
                    }
                } else {
                    e.classList.remove(modifier(selected));
                    e.setAttribute(ARIA_SORT, none);
                    tsi.appendChild(i().css(fas("arrows-alt-v")).element());
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
        HTMLElement selectAll = find(element, SELECT_ALL_SELECTOR);
        if (selectAll != null) {
            setVisible(selectAll, false);
        }
        return this;
    }

    // ------------------------------------------------------ internals

    private void bindSelectAllHandler() {
        HTMLInputElement checkbox = find(theadRow, SELECT_ALL_SELECTOR);
        if (checkbox != null) {
            selectAllHandler = bind(checkbox, click,
                    e -> {
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
        for (HTMLElement e : findAll(element, TOGGLE_SELECTOR)) {
            HTMLElement itemElement = closest(e, By.data(dataTableItem));
            if (itemElement != null) {
                HTMLElement tbody = (HTMLElement) itemElement.parentNode;
                HTMLElement contentRow = (HTMLElement) itemElement.nextElementSibling;
                if (tbody != null && contentRow != null) {
                    String itemId = itemElement.dataset.get(dataTableItem);
                    String buttonId = buildId(itemId, toggle);
                    String contentId = buildId(itemId, expandableContent);
                    e.id = buttonId;
                    e.setAttribute(ARIA + labelledBy, itemId + " " + buttonId);
                    e.setAttribute(ARIA + expanded, false_);
                    e.setAttribute(ARIA + controls, contentId);
                    contentRow.id = contentId;
                    contentRow.hidden = true;
                    contentRow.setAttribute(ARIA + label, "Details");

                    handler.add(bind(e, click, evt -> {
                        if (tbody.classList.contains(modifier(expanded))) {
                            // collapse
                            tbody.classList.remove(modifier(expanded));
                            e.classList.remove(modifier(expanded));
                            e.setAttribute(ARIA + "expanded", false);
                            contentRow.classList.remove(modifier(expanded));
                            contentRow.hidden = true;
                        } else {
                            // expand
                            tbody.classList.add(modifier(expanded));
                            e.classList.add(modifier(expanded));
                            e.setAttribute(ARIA + "expanded", true);
                            contentRow.classList.add(modifier(expanded));
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

    public static <T> Column<T> expandColumn() {
        return new Column<>(EXPAND_COLUMN, null, null,
                (td, dataProvider, item) -> {
                    String iconClass = fas(angleDown) + " " + component(table, toggle, Constants.icon);
                    td.css(component(table, toggle)).add(Button.icon(icon(iconClass), "Toggle details"));
                }, null);
    }

    public static <T> Column<T> checkboxColumn() {
        return new Column<>(CHECKBOX_COLUMN, null,
                th -> th.css(component(table, check))
                        .add(input(InputType.checkbox)
                                .aria(label, "Select all rows")),
                (td, dataProvider, item) -> td.css(component(table, check))
                        .add(input(InputType.checkbox)
                                .name(buildId(dataProvider.getId(item), "select"))
                                .aria(labelledBy, dataProvider.getId(item))),
                null);
    }

    public static <T> Column<T> iconColumn(Icon icon) {
        return iconColumn((td, dataProvider, item) -> td.add(icon));
    }

    public static <T> Column<T> iconColumn(BodyDisplay<T> bodyDisplay) {
        BodyDisplay<T> css = (td, dataProvider, item) -> td.css(component(table, icon));
        return new Column<>(uniqueId("icon"), null,
                th -> th.css(component(table, icon)).attr(scope, col), css.andThen(bodyDisplay), null);
    }

    public static <T> Column<T> actionsColumn(BodyDisplay<T> bodyDisplay) {
        BodyDisplay<T> css = (td, dataProvider, item) -> td.css(component(table, action));
        return new Column<>(ACTIONS_COLUMN, null, null, css.andThen(bodyDisplay), null);
    }

    public static <T> Column<T> column(String name, BodyDisplay<T> bodyDisplay) {
        return new Column<>(name, null, th -> th.attr(scope, col).textContent(name), bodyDisplay, null);
    }

    public static <T> Column<T> column(String name, Comparator<T> comparator, BodyDisplay<T> bodyDisplay) {
        return new Column<>(name, comparator,
                th -> th.css(component(table, sort))
                        .aria(sort, none)
                        .attr(scope, col)
                        .add(button().css(component(button), modifier(plain))
                                .data(dataTableSort, buildId(name)) // keep in sync with Column constructor!
                                .add(name)
                                .add(span().css(component(table, sort, indicator))
                                        .add(i().css(fas("arrows-alt-v"))))),
                bodyDisplay, null);
    }

    public static <T> Column<T> column(String name, HeadDisplay headDisplay, BodyDisplay<T> bodyDisplay) {
        return new Column<>(name, null, headDisplay, bodyDisplay, null);
    }

    @FunctionalInterface
    public interface HeadDisplay {

        void render(HtmlContentBuilder<HTMLTableCellElement> th);

        default HeadDisplay andThen(HeadDisplay after) {
            return th -> {
                render(th);
                after.render(th);
            };
        }
    }

    @FunctionalInterface
    public interface BodyDisplay<T> {

        void render(HtmlContentBuilder<HTMLTableCellElement> td, DataProvider<T> dataProvider, T item);

        default BodyDisplay<T> andThen(BodyDisplay<T> after) {
            return (td, dataProvider, item) -> {
                render(td, dataProvider, item);
                after.render(td, dataProvider, item);
            };
        }
    }

    @FunctionalInterface
    public interface ExpandableDisplay<T> {

        void render(HtmlContentBuilder<HTMLDivElement> html, DataProvider<T> dataProvider, T item);

        default ExpandableDisplay<T> andThen(ExpandableDisplay<T> after) {
            return (html, dataProvider, item) -> {
                render(html, dataProvider, item);
                after.render(html, dataProvider, item);
            };
        }
    }

    @FunctionalInterface
    public interface CompoundDisplay<T> {

        void render(HtmlContentBuilder<HTMLTableCellElement> html, DataProvider<T> dataProvider, T item);

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

        private Column(String name, Comparator<T> comparator, HeadDisplay headDisplay, BodyDisplay<T> bodyDisplay,
                CompoundDisplay<T> compoundDisplay) {
            this.id = buildId(name);
            this.comparator = comparator;
            this.headDisplay = headDisplay;
            this.bodyDisplay = bodyDisplay;
            this.compoundDisplay = compoundDisplay;
        }
    }
}
