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

import java.util.function.Consumer;

import org.jboss.elemento.EventType;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.button.Button;
import org.patternfly.core.Modifiers;
import org.patternfly.dataprovider.PageInfo;
import org.patternfly.handler.Callback;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;

import static org.jboss.elemento.Elements.b;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.InputType.number;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.layout.Classes.compact;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.formControl;
import static org.patternfly.layout.Classes.menu;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.pagination;
import static org.patternfly.layout.Classes.select;
import static org.patternfly.layout.Classes.text;
import static org.patternfly.layout.Classes.totalItems;
import static org.patternfly.layout.PredefinedIcon.angleDoubleLeft;
import static org.patternfly.layout.PredefinedIcon.angleDoubleRight;
import static org.patternfly.layout.PredefinedIcon.angleLeft;
import static org.patternfly.layout.PredefinedIcon.angleRight;

/**
 * PatternFly pagination component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/pagination">https://www.patternfly.org/v4/documentation/core/components/pagination</a>
 */
@Deprecated
public class Pagination extends BaseComponent<HTMLDivElement, Pagination>
        implements Modifiers.Disabled<HTMLDivElement, Pagination> {

    // ------------------------------------------------------ factory

    public static Pagination pagination() {
        return new Pagination();
    }

    // ------------------------------------------------------ instance

    private final HTMLElement infoElement;
    private final SingleOptionsMenu<Integer> pageSizeMenu;
    private final Button firstPageButton;
    private final Button previousPageButton;
    private final HTMLElement navPageSelect;
    private final HTMLInputElement gotoPageInput;
    private final HTMLElement pagesElement;
    private final Button nextPageButton;
    private final Button lastPageButton;

    private Consumer<Integer> pageSizeHandler;
    private Consumer<Integer> gotoPageHandler;
    private Callback firstPageHandler;
    private Callback previousPageHandler;
    private Callback nextPageHandler;
    private Callback lastPageHandler;

    protected Pagination() {
        super(div().css(component(pagination)).element(), "Pagination");

        infoElement = div().css(component(pagination, totalItems)).element();
        pageSizeMenu = SingleOptionsMenu.<Integer> plain("").collapseOnSelect().display((html, pageSize) -> {
            html.add(String.valueOf(pageSize));
            html.add(span().css(component(pagination, menu, text)).textContent("per page"));
        }).add(new Integer[] { 10, 20, 50, 100 }).onSelect(pageSize -> {
            if (pageSizeHandler != null) {
                pageSizeHandler.accept(pageSize);
            }
        });

        element().appendChild(infoElement);
        element().appendChild(pageSizeMenu.element());
        element().appendChild(nav().css(component(pagination, "nav"))
                .add(firstPageButton = button(angleDoubleLeft, "Go to first page").onAction((e, b) -> {
                    if (firstPageHandler != null) {
                        firstPageHandler.call();
                    }
                }))
                .add(previousPageButton = button(angleLeft, "Go to previous page").onAction((e, b) -> {
                    if (previousPageHandler != null) {
                        previousPageHandler.call();
                    }
                }))
                .add(navPageSelect = div().css(component(pagination, "nav", "page", select))
                        .add(gotoPageInput = input(number)
                                .css(component(formControl))
                                .aria("label", "Current page")
                                .min(1)
                                .on(EventType.change, e -> {
                                    if (gotoPageHandler != null) {
                                        try {
                                            int page = Integer.parseInt(((HTMLInputElement) e.currentTarget).value);
                                            gotoPageHandler.accept(page - 1);
                                        } catch (NumberFormatException ignored) {
                                        }
                                    }
                                })
                                .element())
                        .add(pagesElement = span().aria("hidden", true).element())
                        .element())
                .add(nextPageButton = button(angleRight.className, "Go to next page").onAction((e, b) -> {
                    if (nextPageHandler != null) {
                        nextPageHandler.call();
                    }
                }))
                .add(lastPageButton = button(angleDoubleRight, "Go to last page").onAction((e, b) -> {
                    if (lastPageHandler != null) {
                        lastPageHandler.call();
                    }
                }))
                .element());
    }

    @Override
    public Pagination that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Pagination disabled(boolean disabled) {
        pageSizeMenu.disabled(disabled);
        firstPageButton.disabled(disabled);
        previousPageButton.disabled(disabled);
        gotoPageInput.disabled = disabled;
        nextPageButton.disabled(disabled);
        lastPageButton.disabled(disabled);
        return this;
    }

    public Pagination compact() {
        setVisible(firstPageButton.element(), false);
        setVisible(navPageSelect, false);
        setVisible(lastPageButton.element(), false);
        return css(modifier(compact));
    }

    // ------------------------------------------------------ events

    public Pagination onPageSize(Consumer<Integer> pageSizeHandler) {
        this.pageSizeHandler = pageSizeHandler;
        return this;
    }

    /**
     * Consumer is called with 0-based page index.
     */
    public Pagination onGotoPage(Consumer<Integer> gotoPageHandler) {
        this.gotoPageHandler = gotoPageHandler;
        return this;
    }

    public Pagination onFirstPage(Callback firstPageHandler) {
        this.firstPageHandler = firstPageHandler;
        return this;
    }

    public Pagination onPreviousPage(Callback previousPageHandler) {
        this.previousPageHandler = previousPageHandler;
        return this;
    }

    public Pagination onNextPage(Callback nextPageHandler) {
        this.nextPageHandler = nextPageHandler;
        return this;
    }

    public Pagination onLastPage(Callback lastPageHandler) {
        this.lastPageHandler = lastPageHandler;
        return this;
    }

    // ------------------------------------------------------ internal

    void update(PageInfo pageInfo) {
        HTMLElement[] elements = new HTMLElement[] { infoElement, pageSizeMenu.textElement() };
        for (HTMLElement element : elements) {
            removeChildrenFrom(element);
            HTMLContainerBuilder<HTMLElement> builder = new HTMLContainerBuilder<>(element);
            builder.add(b().textContent(pageInfo.getFrom() + " - " + pageInfo.getTo())).add(" of ")
                    .add(b().textContent(String.valueOf(pageInfo.getTotal())));
        }

        pageSizeMenu.select(pageInfo.getPageSize());
        gotoPageInput.value = String.valueOf(pageInfo.getPage() + 1);
        gotoPageInput.max = String.valueOf(pageInfo.getPages());
        gotoPageInput.disabled = pageInfo.getPages() < 2;
        pagesElement.textContent = "of " + pageInfo.getPages();

        firstPageButton.disabled(pageInfo.getPage() == 0);
        previousPageButton.disabled(pageInfo.getPage() == 0);
        nextPageButton.disabled(pageInfo.getPage() == pageInfo.getPages() - 1);
        lastPageButton.disabled(pageInfo.getPage() == pageInfo.getPages() - 1);
    }
}
