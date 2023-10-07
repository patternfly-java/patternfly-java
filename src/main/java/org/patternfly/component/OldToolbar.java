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
package org.patternfly.component;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Objects;
import java.util.Stack;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.StreamSupport;

import org.gwtproject.event.shared.HandlerRegistration;
import org.gwtproject.event.shared.HandlerRegistrations;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.jboss.elemento.IsElement;
import org.patternfly.dataprovider.DataProvider;
import org.patternfly.dataprovider.Display;
import org.patternfly.dataprovider.PageInfo;
import org.patternfly.dataprovider.SelectionInfo;
import org.patternfly.dataprovider.SortInfo;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static java.lang.Boolean.parseBoolean;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.children;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.Icon.icon;
import static org.patternfly.layout.Classes.buttonGroup;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;
import static org.patternfly.layout.Classes.controls;
import static org.patternfly.layout.Classes.dataToolbar;
import static org.patternfly.layout.Classes.expandableContent;
import static org.patternfly.layout.Classes.filterGroup;
import static org.patternfly.layout.Classes.hasPopup;
import static org.patternfly.layout.Classes.iconButtonGroup;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.separator;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.Classes.toggleGroup;
import static org.patternfly.layout.Classes.toggleGroupContainer;
import static org.patternfly.layout.PredefinedIcon.filter;
import static org.patternfly.layout.PredefinedIcon.sortAmountDown;

/**
 * PatternFly data toolbar component.
 * <p>
 * All elements of a toolbar have to be nested inside instances of type {@link Content}. In general the structure of a toolbar
 * should apply to the following EBNF (the symbols enclosed in '?' represent PatternFly components / HTML nodes):
 *
 * <pre>
 * toolbar           = content, { content } ;
 * content           = { group | item | node } ;
 * group             = { group | item | node } ;
 * item              = bulk_select | filter | sort_menu | pagination ;
 * node              = ? HTML node ? ;
 * filter            = basic_filter
 *                   | attribute_value
 *                   | faceted_filter
 *                   | type_ahead_filter
 *                   | multiple_filter ;
 * basic_filter      = single_value | multi_value | date_range ;
 * attribute_value   = ? dropdown ?, basic_filter ;
 * faceted_filter    = ? grouped multi select ? ;
 * type_ahead_filter = ? type ahead single select ?
 *                   | ? type ahead multi select ? ;
 * multiple_filter   = named_filter, { named_filter }, clear_filter ;
 * single_value      = ? search box ?
 *                   | ? single select ? ;
 * multi_value       = ? multi select ? ;
 * date_range        = ? date picker ? ;
 * named_filter      = ? label ?, basic_filter ;
 * clear_filter      = ? clear filter link ? ;
 * </pre>
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/experimental/datatoolbar">https://www.patternfly.org/v4/documentation/core/experimental/datatoolbar</a>
 * @see <a href="https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form">Extended Backus–Naur form</a>
 */
@Deprecated
public class OldToolbar<T> extends BaseComponent<HTMLDivElement, OldToolbar<T>>
        implements Display<T>, Attachable {

    // ------------------------------------------------------ factory methods

    public static <T> OldToolbar<T> toolbar() {
        return new OldToolbar<>(null);
    }

    public static <T> OldToolbar<T> toolbar(DataProvider<T> dataProvider) {
        return new OldToolbar<>(dataProvider);
    }

    public static Content content() {
        return new Content();
    }

    public static Group group() {
        return new Group();
    }

    public static Item item() {
        return new Item();
    }

    public static BulkSelect bulkSelect() {
        return new BulkSelect();
    }

    public static <T> SortMenu<T> sortMenu(SortOptions<T> sortOptions) {
        return new SortMenu<>(sortOptions);
    }

    // ------------------------------------------------------ instance

    private static final By TOGGLE_GROUP_SELECTOR = By.classname(modifier(toggleGroup));
    private static final By TOGGLE_SELECTOR = By.classname(component(dataToolbar, toggle)).desc(By.element("button"));

    private final DataProvider<T> dataProvider;
    private BulkSelect bulkSelect;
    private SortMenu<T> sortMenu;
    private Pagination pagination;
    private HandlerRegistration toggleGroupHandler;

    protected OldToolbar(DataProvider<T> dataProvider) {
        super(div().css(component(dataToolbar)).element(), "Toolbar");
        this.dataProvider = dataProvider;
        Attachable.register(element(), this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        bindToggleGroupHandler();
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        removeToggleGroupHandler();
    }

    @Override
    public OldToolbar<T> that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public OldToolbar<T> add(Content content) {
        add(content.element());
        content.bindToolbar(this);
        return this;
    }

    // ------------------------------------------------------ display API

    @Override
    public void showItems(Iterable<T> items, PageInfo pageInfo) {
        if (pagination != null) {
            pagination.update(pageInfo);
        }
        if (bulkSelect != null) {
            bulkSelect.update(pageInfo);
        }
    }

    @Override
    public void updateSelection(SelectionInfo<T> selectionInfo) {
        if (bulkSelect != null) {
            int selected = selectionInfo.getSelectionCount();
            int filtered = (int) StreamSupport.stream(dataProvider.getFilteredItems().spliterator(), false).count();
            int visible = (int) StreamSupport.stream(dataProvider.getVisibleItems().spliterator(), false).count();
            int all = (int) StreamSupport.stream(dataProvider.getAllItems().spliterator(), false).count();
            bulkSelect.update(selected, filtered, visible, all);
        }
    }

    @Override
    public void updateSortInfo(SortInfo<T> sortInfo) {
        if (sortMenu != null) {
            sortMenu.update(sortInfo);
        }
    }

    // ------------------------------------------------------ internal

    private void bindToggleGroupHandler() {
        List<HandlerRegistration> handler = new ArrayList<>();
        for (HTMLElement htmlElement : Elements.findAll(element(), TOGGLE_GROUP_SELECTOR)) {
            HTMLElement toggleGroupParent = (HTMLElement) htmlElement.parentNode;
            toggleGroupParent.classList.add(toggleGroupContainer);

            // add expandable content
            String expandableContentId = Id.unique(dataToolbar, expandableContent);
            HTMLElement expandableContentGroup = group().element();
            HTMLContainerBuilder<HTMLDivElement> expandableContent = div()
                    .css(component(dataToolbar, Classes.expandableContent)).id(expandableContentId)
                    .add(expandableContentGroup);
            setVisible(expandableContent.element(), false);
            toggleGroupParent.appendChild(expandableContent.element());

            // wire aria attributes and add expand / collapse handler
            HTMLButtonElement e = Elements.find(htmlElement, TOGGLE_SELECTOR);
            if (e != null) {
                HTMLContainerBuilder<HTMLButtonElement> button = button(e);
                button.aria(hasPopup, false).aria("expanded", false).aria(controls, expandableContentId);
                handler.add(bind(button.element(), click, evt -> {
                    boolean expanded = parseBoolean(button.element().getAttribute("aria-expanded"));
                    if (expanded) {
                        // collapse:
                        // 1. move all content from expandable content to toggle group
                        // 2. hide expandable content
                        for (HTMLElement element : children(expandableContentGroup)) {
                            htmlElement.appendChild(element);
                        }
                        button.aria("expanded", false);
                        expandableContent.toggle(modifier("expanded"));
                        setVisible(expandableContent.element(), false);
                    } else {
                        // expand:
                        // 1. move all elements but the toggle from toggle group to expandable content
                        // 2. show expandable content
                        for (HTMLElement element : children(htmlElement)) {
                            if (element.classList.contains(component(dataToolbar, toggle))) {
                                continue;
                            }
                            expandableContentGroup.appendChild(element);
                        }
                        button.aria("expanded", true);
                        expandableContent.toggle(modifier("expanded"));
                        setVisible(expandableContent.element(), true);
                    }
                }));
            }
        }
        if (!handler.isEmpty()) {
            toggleGroupHandler = HandlerRegistrations.compose(handler.toArray(new HandlerRegistration[0]));
        }
    }

    private void removeToggleGroupHandler() {
        if (toggleGroupHandler != null) {
            toggleGroupHandler.removeHandler();
            toggleGroupHandler = null;
        }
    }

    // ------------------------------------------------------ inner classes (content)

    @Deprecated
    public static class Content extends SubComponent<HTMLDivElement, Content> {

        private final List<Group> groups;
        private final List<Item> items;

        protected Content() {
            super(div().css(component(dataToolbar, content)).element());
            groups = new ArrayList<>();
            items = new ArrayList<>();
        }

        @Override
        public Content that() {
            return this;
        }

        public Content add(Group group) {
            groups.add(group);
            return add(group.element());
        }

        public Content add(Item item) {
            items.add(item);
            return add(item.element());
        }

        private <T> void bindToolbar(OldToolbar<T> toolbar) {
            for (Group group : groups) {
                group.bindToolbar(toolbar);
            }
            for (Item item : items) {
                item.bindToolbar(toolbar);
            }
        }
    }

    @Deprecated
    public static class Group extends SubComponent<HTMLDivElement, Group> {

        private final List<Group> groups;
        private final List<Item> items;

        protected Group() {
            super(div().css(component(dataToolbar, "group")).element());
            groups = new ArrayList<>();
            items = new ArrayList<>();
        }

        @Override
        public Group that() {
            return this;
        }

        public Group add(Group group) {
            groups.add(group);
            return add(group.element());
        }

        public Group add(Item item) {
            items.add(item);
            return add(item.element());
        }

        public Group button() {
            return css(modifier(buttonGroup));
        }

        public Group filter() {
            return css(modifier(filterGroup));
        }

        public Group iconButton() {
            return css(modifier(iconButtonGroup));
        }

        @Override
        public Group toggle(String breakpoint) {
            String bpModifier = breakpoint.startsWith("pf-m-") ? breakpoint : modifier(breakpoint);
            return css(modifier(toggleGroup), bpModifier)
                    .add(div().css(component(dataToolbar, toggle)).add(Button.icon(icon(filter.className), "Show filters")));
        }

        private <T> void bindToolbar(OldToolbar<T> toolbar) {
            for (Group group : groups) {
                group.bindToolbar(toolbar);
            }
            for (Item item : items) {
                item.bindToolbar(toolbar);
            }
        }
    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    @Deprecated
    public static class Item extends SubComponent<HTMLDivElement, Item> {

        private final Stack<Consumer<OldToolbar>> delayedInit;

        protected Item() {
            super(div().css(component(dataToolbar, item)).element());
            this.delayedInit = new Stack<>();
        }

        @Override
        public Item that() {
            return this;
        }

        public Item add(BulkSelect bulkSelect) {
            delayedInit.push(toolbar -> {
                toolbar.bulkSelect = bulkSelect;
                bulkSelect.bindToolbar(toolbar);
            });
            return add(bulkSelect.element());
        }

        public <T> Item add(Filter filter) {
            return this;
        }

        public <T> Item add(String id, String placeholder, Function<String, Predicate<T>> filterFn) {
            Search search = new Search(placeholder);
            delayedInit.push(toolbar -> search.onSearch(query -> {
                if (query == null || query.length() == 0) {
                    toolbar.dataProvider.removeFilter(id);
                } else {
                    toolbar.dataProvider.addFilter(id, filterFn.apply(query));
                }
            }));
            return add(search.element());
        }

        public <T> Item add(SortMenu<T> sortMenu) {
            delayedInit.push(toolbar -> {
                toolbar.sortMenu = sortMenu;
                sortMenu.bindToolbar(toolbar);
            });
            return add(sortMenu.element());
        }

        public Item add(Pagination pagination) {
            delayedInit.push(toolbar -> {
                toolbar.pagination = pagination;
                pagination.onFirstPage(toolbar.dataProvider::gotoFirstPage)
                        .onPreviousPage(toolbar.dataProvider::gotoPreviousPage)
                        .onNextPage(toolbar.dataProvider::gotoNextPage)
                        .onLastPage(toolbar.dataProvider::gotoLastPage)
                        .onGotoPage(toolbar.dataProvider::gotoPage)
                        .onPageSize(toolbar.dataProvider::setPageSize);
            });
            return css(modifier(Classes.pagination)).add(pagination.element());
        }

        public Item separator() {
            return css(modifier(separator));
        }

        private <T> void bindToolbar(OldToolbar<T> toolbar) {
            while (!delayedInit.isEmpty()) {
                delayedInit.pop().accept(toolbar);
            }
        }
    }

    @Deprecated
    private static class Filter {

    }

    // ------------------------------------------------------ inner classes (options)

    @Deprecated
    private static class BulkSelect implements IsElement<HTMLDivElement> {

        private static final BulkSelectOption SELECT_NONE = new BulkSelectOption("select-none",
                "Select none (0 items)");
        private static final BulkSelectOption SELECT_PAGE = new BulkSelectOption("select-page", "Select page");
        private static final BulkSelectOption SELECT_ALL = new BulkSelectOption("select-all", "Select all");

        private final Dropdown<BulkSelectOption> dropdown;

        protected BulkSelect() {
            this.dropdown = Dropdown.<BulkSelectOption> splitCheckbox()
                    .identifier(bso -> bso.id)
                    .display((html, bso) -> html.textContent(bso.text))
                    .add(SELECT_NONE)
                    .add(SELECT_PAGE)
                    .add(SELECT_ALL);
        }

        @Override
        public HTMLDivElement element() {
            return dropdown.element();
        }

        private <T> void bindToolbar(OldToolbar<T> toolbar) {
            dropdown.onSelect(item -> {
                if (SELECT_NONE.equals(item)) {
                    toolbar.dataProvider.clearAllSelection();
                } else if (SELECT_PAGE.equals(item)) {
                    toolbar.dataProvider.selectVisible();
                } else if (SELECT_ALL.equals(item)) {
                    toolbar.dataProvider.selectAll();
                }
            });
            dropdown.onChange(all -> {
                if (all) {
                    toolbar.dataProvider.selectAll();
                } else {
                    toolbar.dataProvider.clearAllSelection();
                }
            });
        }

        private void update(PageInfo pageInfo) {
            SELECT_PAGE.text = "Select page (" + pageInfo.getVisible() + " items)";
            SELECT_ALL.text = "Select all (" + pageInfo.getTotal() + " items)";
            dropdown.update(SELECT_PAGE);
            dropdown.update(SELECT_ALL);
        }

        private void update(int selected, int filtered, int visible, int all) {
            if (selected == 0) {
                dropdown.check(false);
                dropdown.indeterminate(false);
                dropdown.clearText();
            } else {
                if (selected == all || (selected == filtered && filtered == visible)) {
                    dropdown.check(true, false);
                    dropdown.indeterminate(false);
                } else {
                    dropdown.check(false, false);
                    dropdown.indeterminate(true);
                }
                dropdown.setText(selected + " selected");
            }
        }
    }

    @Deprecated
    private static class BulkSelectOption {

        private final String id;
        private String text;

        private BulkSelectOption(String id, String text) {
            this.id = id;
            this.text = text;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (!(o instanceof BulkSelectOption)) {
                return false;
            }
            BulkSelectOption that = (BulkSelectOption) o;
            return id.equals(that.id);
        }

        @Override
        public int hashCode() {
            return Objects.hash(id);
        }

        @Override
        public String toString() {
            return text;
        }
    }

    @Deprecated
    private static class SortMenu<T> implements IsElement<HTMLDivElement> {

        private final SortOptions<T> sortOptions;
        private final MultiOptionsMenu.Group<SortOption<T>> sortBy;
        private final MultiOptionsMenu.Group<SortDirection> sortDirection;
        private final MultiOptionsMenu mom;

        private SortMenu(SortOptions<T> sortOptions) {
            this.sortOptions = sortOptions;
            this.sortBy = new MultiOptionsMenu.Group<SortOption<T>>("Sort by")
                    .display((html, sortOption) -> html.textContent(sortOption.name)).add(sortOptions);
            this.sortDirection = new MultiOptionsMenu.Group<SortDirection>("Sort direction")
                    .display((html, sortDirection) -> html.textContent(sortDirection.text)).add(SortDirection.ASCENDING)
                    .add(SortDirection.DESCENDING);
            this.mom = MultiOptionsMenu.icon(Icon.icon(sortAmountDown.className));

            mom.add(sortBy);
            mom.add(sortDirection);
        }

        @Override
        public HTMLDivElement element() {
            return mom.element();
        }

        private void bindToolbar(OldToolbar<T> toolbar) {
            sortBy.onSelect(so -> sort(toolbar.dataProvider, so, sortDirection.value()));
            sortDirection.onSelect(so -> sort(toolbar.dataProvider, sortBy.value(), so));
        }

        private void sort(DataProvider<T> dataProvider, SortOption<T> sortBy, SortDirection sortDirection) {
            if (sortBy != null) {
                boolean ascending = sortDirection == null || sortDirection.ascending;
                Comparator<T> c = ascending ? sortBy.comparator : sortBy.comparator.reversed();
                dataProvider.sort(new SortInfo<>(sortBy.id, c, ascending));
            }
        }

        private void update(SortInfo<T> sortInfo) {
            SortOption<T> sortOption = sortOptions.get(sortInfo.getId());
            if (sortBy != null) {
                if (sortOption == null) {
                    sortBy.clearSelection();
                } else {
                    sortBy.select(sortOption, false);
                }
            }
            if (sortDirection != null) {
                sortDirection.select(sortInfo.isAscending() ? SortDirection.ASCENDING : SortDirection.DESCENDING,
                        false);
            }
        }
    }

    @Deprecated
    private enum SortDirection {
        ASCENDING("Ascending", true), DESCENDING("Descending", false);

        private final String text;
        private final boolean ascending;

        SortDirection(String text, boolean ascending) {
            this.text = text;
            this.ascending = ascending;
        }

        @Override
        public String toString() {
            return text;
        }
    }

    @Deprecated
    public static class SortOptions<T> implements Iterable<SortOption<T>> {

        private final LinkedHashMap<String, SortOption<T>> sortOptions;

        public SortOptions() {
            sortOptions = new LinkedHashMap<>();
        }

        public SortOptions<T> add(SortOption<T> sortOption) {
            sortOptions.put(sortOption.id, sortOption);
            return this;
        }

        public SortOption<T> get(String key) {
            return sortOptions.get(key);
        }

        @Override
        public Iterator<SortOption<T>> iterator() {
            return sortOptions.values().iterator();
        }
    }

    @Deprecated
    public static class SortOption<T> {

        private final String id;
        private final String name;
        private final Comparator<T> comparator;

        public SortOption(String name, Comparator<T> comparator) {
            this.id = Id.build(name);
            this.name = name;
            this.comparator = comparator;
        }

        @Override
        public String toString() {
            return name;
        }
    }
}
