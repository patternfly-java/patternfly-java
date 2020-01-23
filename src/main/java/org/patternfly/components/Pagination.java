package org.patternfly.components;

import java.util.function.Consumer;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import org.jboss.elemento.EventType;
import org.jboss.elemento.HtmlContent;
import org.jboss.elemento.HtmlContentBuilder;
import org.patternfly.core.Callback;
import org.patternfly.core.Disable;
import org.patternfly.dataprovider.PageInfo;

import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.*;
import static org.jboss.elemento.InputType.number;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.label;
import static org.patternfly.resources.Constants.nav;
import static org.patternfly.resources.Constants.select;
import static org.patternfly.resources.Constants.*;

/**
 * PatternFly pagination component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/pagination">https://www.patternfly.org/v4/documentation/core/components/pagination</a>
 */
public class Pagination extends BaseComponent<HTMLDivElement, Pagination>
        implements HtmlContent<HTMLDivElement, Pagination>, Disable<Pagination> {

    // ------------------------------------------------------ factory methods

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

    Pagination() {
        super(div().css(component(pagination)).element(), "Pagination");

        infoElement = div().css(component(pagination, totalItems)).element();
        pageSizeMenu = SingleOptionsMenu.<Integer>plain("")
                .collapseOnSelect()
                .display((html, pageSize) -> {
                    html.add(String.valueOf(pageSize));
                    html.add(span().css(component(pagination, menu, text)).textContent("per page"));
                })
                .add(new Integer[]{10, 20, 50, 100})
                .onSelect(pageSize -> {
                    if (pageSizeHandler != null) {
                        pageSizeHandler.accept(pageSize);
                    }
                });

        element.appendChild(infoElement);
        element.appendChild(pageSizeMenu.element());
        element.appendChild(nav().css(component(pagination, nav))
                .add(firstPageButton = Button.icon(icon(fas("angle-double-left")), "Go to first page")
                        .onClick(() -> {
                            if (firstPageHandler != null) {
                                firstPageHandler.call();
                            }
                        }))
                .add(previousPageButton = Button.icon(icon(fas("angle-left")), "Go to previous page")
                        .onClick(() -> {
                            if (previousPageHandler != null) {
                                previousPageHandler.call();
                            }
                        }))
                .add(navPageSelect = div().css(component(pagination, nav, page, select))
                        .add(gotoPageInput = input(number).css(component(formControl))
                                .aria(label, "Current page")
                                .min(1)
                                .on(EventType.change, e -> {
                                    if (gotoPageHandler != null) {
                                        try {
                                            int page = Integer.parseInt(((HTMLInputElement) e.currentTarget).value);
                                            gotoPageHandler.accept(page - 1);
                                        } catch (NumberFormatException ignored) {
                                        }
                                    }
                                }).element())
                        .add(pagesElement = span().aria(hidden, true_).element()).element())
                .add(nextPageButton = Button.icon(icon(fas("angle-right")), "Go to next page")
                        .onClick(() -> {
                            if (nextPageHandler != null) {
                                nextPageHandler.call();
                            }
                        }))
                .add(lastPageButton = Button.icon(icon(fas("angle-double-right")), "Go to last page")
                        .onClick(() -> {
                            if (lastPageHandler != null) {
                                lastPageHandler.call();
                            }
                        })).element());
    }

    @Override
    public Pagination that() {
        return this;
    }

    // ------------------------------------------------------ public API

    @Override
    public Pagination disable() {
        pageSizeMenu.disable();
        firstPageButton.disable();
        previousPageButton.disable();
        gotoPageInput.disabled = true;
        nextPageButton.disable();
        lastPageButton.disable();
        return this;
    }

    @Override
    public Pagination enable() {
        pageSizeMenu.enable();
        firstPageButton.enable();
        previousPageButton.enable();
        gotoPageInput.disabled = false;
        nextPageButton.enable();
        lastPageButton.enable();
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

    // ------------------------------------------------------ internals

    void update(PageInfo pageInfo) {
        HTMLElement[] elements = new HTMLElement[]{infoElement, pageSizeMenu.textElement()};
        for (HTMLElement element : elements) {
            removeChildrenFrom(element);
            HtmlContentBuilder<HTMLElement> builder = new HtmlContentBuilder<>(element);
            builder
                    .add(b().textContent(pageInfo.getFrom() + " - " + pageInfo.getTo()))
                    .add(" of ")
                    .add(b().textContent(String.valueOf(pageInfo.getTotal())));
        }

        pageSizeMenu.select(pageInfo.getPageSize());
        gotoPageInput.value = String.valueOf(pageInfo.getPage() + 1);
        gotoPageInput.max = String.valueOf(pageInfo.getPages());
        gotoPageInput.disabled = pageInfo.getPages() < 2;
        pagesElement.textContent = "of " + pageInfo.getPages();

        if (pageInfo.getPage() == 0) {
            firstPageButton.disable();
            previousPageButton.disable();
        } else {
            firstPageButton.enable();
            previousPageButton.enable();
        }
        if (pageInfo.getPage() == pageInfo.getPages() - 1) {
            nextPageButton.disable();
            lastPageButton.disable();
        } else {
            nextPageButton.enable();
            lastPageButton.enable();
        }
    }
}
