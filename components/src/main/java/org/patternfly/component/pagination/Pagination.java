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
package org.patternfly.component.pagination;

import java.util.ArrayList;
import java.util.List;

import org.jboss.elemento.Id;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.button.Button;
import org.patternfly.component.form.TextInput;
import org.patternfly.component.form.TextInputType;
import org.patternfly.component.menu.MenuToggle;
import org.patternfly.component.menu.SingleSelect;
import org.patternfly.style.Breakpoints;
import org.patternfly.style.Classes;
import org.patternfly.style.Inset;
import org.patternfly.style.Modifiers.Compact;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Modifiers.PageInsets;
import org.patternfly.style.Modifiers.Static;
import org.patternfly.style.Modifiers.Sticky;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;

import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.b;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.form.TextInput.textInput;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.menu.MenuToggle.menuToggle;
import static org.patternfly.component.menu.MenuToggleType.plainText;
import static org.patternfly.component.menu.SingleSelect.singleSelect;
import static org.patternfly.component.menu.SingleSelectMenu.singleSelectMenu;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Aria.label;
import static org.patternfly.icon.IconSets.rhMicrons.caretLeft;
import static org.patternfly.icon.IconSets.rhMicrons.caretRight;
import static org.patternfly.icon.IconSets.rhMicrons.doubleCaretLeft;
import static org.patternfly.icon.IconSets.rhMicrons.doubleCaretRight;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.control;
import static org.patternfly.style.Classes.first;
import static org.patternfly.style.Classes.formControl;
import static org.patternfly.style.Classes.last;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.nav;
import static org.patternfly.style.Classes.next;
import static org.patternfly.style.Classes.pageMenu;
import static org.patternfly.style.Classes.pageSelect;
import static org.patternfly.style.Classes.pagination;
import static org.patternfly.style.Classes.previous;
import static org.patternfly.style.Classes.totalItems;
import static org.patternfly.style.Modifiers.toggleModifier;
import static org.patternfly.style.Variable.componentVar;

/**
 * A pagination component allows users to navigate through large content views that have been split across multiple pages.
 *
 * @see <a href="https://www.patternfly.org/components/pagination">https://www.patternfly.org/components/pagination</a>
 */
public class Pagination extends BaseComponent<HTMLElement, Pagination> implements
        Compact<HTMLElement, Pagination>,
        Disabled<HTMLElement, Pagination>,
        PageInsets<HTMLElement, Pagination>,
        Static<HTMLElement, Pagination>,
        Sticky<HTMLElement, Pagination> {

    // ------------------------------------------------------ factory

    /** Creates a pagination with an indeterminate total (unknown number of items). */
    public static Pagination pagination() {
        return new Pagination(PageInfo.indeterminate());
    }

    /** Creates a pagination with the given page info. */
    public static Pagination pagination(PageInfo pageInfo) {
        return new Pagination(pageInfo);
    }

    // ------------------------------------------------------ instance

    private static final String PAGE_SIZE_KEY = "pageSize";

    private final List<PaginationHandler> onFirst;
    private final List<PaginationHandler> onPrevious;
    private final List<PaginationHandler> onNext;
    private final List<PaginationHandler> onLast;
    private final List<PaginationHandler> onPageSize;
    private final List<PaginationHandler> onPageInput;

    private final HTMLElement rangeInfoElement;
    private final MenuToggle pageSizeMenuToggle;
    private final SingleSelect pageSizeSelect;
    private final Button firstPageButton;
    private final Button previousPageButton;
    private final Button nextPageButton;
    private final Button lastPageButton;
    private final TextInput pageInput;
    private final HTMLElement pagesElement;

    private boolean disabled;
    private PageInfo pageInfo;

    Pagination(PageInfo pageInfo) {
        super(ComponentType.Pagination, div().css(component(pagination)).element());

        this.onFirst = new ArrayList<>();
        this.onPrevious = new ArrayList<>();
        this.onNext = new ArrayList<>();
        this.onLast = new ArrayList<>();
        this.onPageSize = new ArrayList<>();
        this.onPageInput = new ArrayList<>();

        this.rangeInfoElement = div().css(component(pagination, totalItems)).element();
        this.pageSizeMenuToggle = menuToggle(plainText).text(""); // make sure textElement is assigned!
        this.pageSizeSelect = singleSelect(pageSizeMenuToggle).noDefaultSelectHandler();
        this.firstPageButton = button().plain().icon(doubleCaretLeft())
                .aria(label, "Go to first page")
                .onClick((e, b) -> {
                    pageInfo(this.pageInfo.firstPage());
                    fire(e, onFirst);
                });
        this.previousPageButton = button().plain().icon(caretLeft())
                .aria(label, "Go to previous page")
                .onClick((e, b) -> {
                    pageInfo(this.pageInfo.previousPage());
                    fire(e, onPrevious);
                });
        this.nextPageButton = button().plain().icon(caretRight())
                .aria(label, "Go to next page")
                .onClick((e, b) -> {
                    pageInfo(this.pageInfo.nextPage());
                    fire(e, onNext);
                });
        this.lastPageButton = button().plain().icon(doubleCaretRight())
                .aria(label, "Go to last page")
                .onClick((e, b) -> {
                    pageInfo(this.pageInfo.lastPage());
                    fire(e, onLast);
                });
        this.pageInput = textInput(TextInputType.number, Id.build(ComponentType.Pagination.id, "input"))
                .aria(label, "Current page")
                .applyTo(input -> input.min(1))
                .onChange((e, c, v) -> {
                    pageInfo(this.pageInfo.withPage(Integer.parseInt(v)));
                    fire(e, onPageInput);
                });
        this.pagesElement = span().aria(hidden, true).element();

        add(rangeInfoElement);
        add(div().css(component(pagination, pageMenu))
                .add(pageSizeSelect.addMenu(singleSelectMenu()
                        .onSingleSelect((e, mi, s) -> {
                            PageSize pageSize = mi.get(PAGE_SIZE_KEY);
                            if (pageSize != null) {
                                pageInfo(this.pageInfo.withPageSize(pageSize.value));
                                fire(e, onPageSize);
                            }
                        })
                        .addContent(menuContent().addList(menuList().addItems(asList(PageSize.values()), pageSize ->
                                menuItem(pageSize.identifier, pageSize.text)
                                        .store(PAGE_SIZE_KEY, pageSize)
                                        .run(mi -> {
                                            if (pageSize.value == pageInfo.pageSize()) {
                                                mi.selected();
                                            }
                                        })))))));
        add(nav().css(component(pagination, nav))
                .aria(label, "Pagination")
                .add(div().css(component(pagination, nav, control), modifier(first))
                        .add(firstPageButton))
                .add(div().css(component(pagination, nav, control), modifier(previous))
                        .add(previousPageButton))
                .add(div().css(component(pagination, nav, pageSelect))
                        .add(span().css(component(formControl))
                                .add(pageInput))
                        .add(pagesElement))
                .add(div().css(component(pagination, nav, control), modifier(next))
                        .add(nextPageButton))
                .add(div().css(component(pagination, nav, control), modifier(last))
                        .add(lastPageButton)));

        chars(2);
        ouiaSafe(false);
        pageInfo(pageInfo);
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #bottom(boolean) bottom(true)} */
    public Pagination bottom() {
        return bottom(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(bottom)}. Bottom variant hides the range info text. */
    public Pagination bottom(boolean bottom) {
        setVisible(rangeInfoElement, !bottom);
        return toggleModifier(this, element(), Classes.bottom, bottom);
    }

    /** Sets the width of the page number input field in characters. */
    public Pagination chars(int chars) {
        // --pf-v6-c-pagination__nav-page-select--c-form-control--width-chars
        return componentVar(component(pagination), "nav-page-select", "c-form-control", "width-chars")
                .applyTo(this)
                .set(chars);
    }

    @Override
    public Pagination disabled(boolean disabled) {
        this.disabled = disabled;
        pageSizeSelect.disabled(disabled);
        firstPageButton.disabled(disabled);
        previousPageButton.disabled(disabled);
        pageInput.disabled(disabled);
        nextPageButton.disabled(disabled);
        lastPageButton.disabled(disabled);
        return this;
    }

    /** Same as {@code display(breakpoints(default_, display))} */
    public Pagination display(Display display) {
        return display(breakpoints(default_, display));
    }

    /** Controls which pagination elements are visible at various breakpoints. */
    public Pagination display(Breakpoints<Display> display) {
        return css(display.modifiers());
    }

    /** Same as {@code inset(breakpoints(default_, inset))} */
    public Pagination inset(Inset inset) {
        return inset(breakpoints(default_, inset));
    }

    /** Insets at various breakpoints. */
    public Pagination inset(Breakpoints<Inset> inset) {
        return css(inset.modifiers());
    }

    /** Same as {@linkplain #stickyBase(boolean) stickyBase(true)} */
    public Pagination stickyBase() {
        return stickyBase(true);
    }

    /** Flag indicating the pagination should have sticky positioning relative to its container. */
    public Pagination stickyBase(boolean stickyBase) {
        return toggleModifier(this, element(), Classes.stickyBase, stickyBase);
    }

    /** Same as {@linkplain #stickyStuck(boolean) stickyStuck(true)} */
    public Pagination stickyStuck() {
        return stickyStuck(true);
    }

    /**
     * Flag indicating the pagination should have stuck styling, when the pagination is not at the top (for top variant) or
     * bottom (for bottom variant) of the scroll container.
     */
    public Pagination stickyStuck(boolean stickyStuck) {
        return toggleModifier(this, element(), Classes.stickyStuck, stickyStuck);
    }

    @Override
    public Pagination that() {
        return this;
    }

    // ------------------------------------------------------ events

    /** Registers a handler called when the user navigates to the first page. */
    public Pagination onFirst(PaginationHandler handler) {
        onFirst.add(handler);
        return this;
    }

    /** Registers a handler called when the user navigates to the previous page. */
    public Pagination onPrevious(PaginationHandler handler) {
        onPrevious.add(handler);
        return this;
    }

    /** Registers a handler called when the user navigates to the next page. */
    public Pagination onNext(PaginationHandler handler) {
        onNext.add(handler);
        return this;
    }

    /** Registers a handler called when the user navigates to the last page. */
    public Pagination onLast(PaginationHandler handler) {
        onLast.add(handler);
        return this;
    }

    /** Registers a handler called when the user changes the page size. */
    public Pagination onPageSize(PaginationHandler handler) {
        onPageSize.add(handler);
        return this;
    }

    /** Registers a handler called when the user enters a page number in the input field. */
    public Pagination onPageInput(PaginationHandler handler) {
        onPageInput.add(handler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public boolean isDisabled() {
        return disabled;
    }

    /** Updates the pagination state and refreshes all UI elements (range text, button states, page input). */
    public void pageInfo(PageInfo pageInfo) {
        this.pageInfo = pageInfo;
        internalUpdate();
    }

    public PageInfo pageInfo() {
        return pageInfo;
    }

    // ------------------------------------------------------ internal

    private void internalUpdate() {
        HTMLElement[] elements = new HTMLElement[]{rangeInfoElement, pageSizeMenuToggle.textElement()};
        for (HTMLElement element : elements) {
            removeChildrenFrom(element);
            element.appendChild(b(pageInfo.from() + " - " + pageInfo.to()).element());
            element.appendChild(element.ownerDocument.createTextNode(" of "));
            String total = pageInfo.isIndeterminate() ? "many" : String.valueOf(pageInfo.total());
            element.appendChild(b(total).element());
        }

        if (!disabled) {
            boolean justOneKnownPage = !pageInfo.isIndeterminate() && pageInfo.pages() < 2;
            firstPageButton.disabled(pageInfo.isFirstPage() || justOneKnownPage);
            previousPageButton.disabled(!pageInfo.hasPreviousPage() || justOneKnownPage);
            nextPageButton.disabled(!pageInfo.hasNextPage() || justOneKnownPage);
            lastPageButton.disabled(pageInfo.isLastPage() || justOneKnownPage);
            pageInput.disabled(justOneKnownPage);
        }

        if (pageInfo.isIndeterminate()) {
            pageInput.input().max("");
        } else {
            pageInput.input().max(pageInfo.pages());
        }
        pageInput.value(String.valueOf(pageInfo.page()), false);

        setVisible(pagesElement, !pageInfo.isIndeterminate());
        if (!pageInfo.isIndeterminate()) {
            pagesElement.textContent = "of " + pageInfo.pages();
        }
    }

    private void fire(Event event, List<PaginationHandler> handlers) {
        for (PaginationHandler handler : handlers) {
            handler.onNavigation(event, this, pageInfo);
        }
    }
}
