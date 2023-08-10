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

import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.EventType;
import org.jboss.elemento.HtmlContent;
import org.jboss.elemento.HtmlContentBuilder;
import org.jboss.elemento.Id;
import org.jboss.elemento.InputType;
import org.jboss.elemento.Key;
import org.patternfly.core.CollapseExpandHandler;
import org.patternfly.core.Disable;
import org.patternfly.core.HasValue;
import org.patternfly.core.SelectHandler;
import org.patternfly.layout.Classes;
import org.patternfly.layout.Icons;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.KeyboardEvent;

import static elemental2.dom.DomGlobal.console;
import static elemental2.dom.DomGlobal.setTimeout;
import static org.jboss.elemento.Elements.*;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.form;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.EventType.blur;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.EventType.submit;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.core.Dataset.singleSelectFilter;
import static org.patternfly.core.Dataset.singleSelectItem;
import static org.patternfly.layout.Classes.*;
import static org.patternfly.layout.Classes.option;
import static org.patternfly.layout.Classes.select;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.Icons.caretDown;
import static org.patternfly.layout.Icons.check;
import static org.patternfly.layout.Icons.fas;

/**
 * PatternFly single select component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/select">https://www.patternfly.org/v4/documentation/core/components/select</a>
 */
public class SingleSelect<T> extends BaseComponent<HTMLDivElement, SingleSelect<T>>
        implements HtmlContent<HTMLDivElement, SingleSelect<T>>, Disable<SingleSelect<T>>, HasValue<T> {

    // ------------------------------------------------------ factory methods

    private static final HTMLLIElement NO_RESULTS = li().attr("role", presentation)
            .add(button().css(component(select, Classes.menu, item), modifier(disabled)).attr("role", option)
                    .textContent("No results found"))
            .element();

    public static <T> SingleSelect<T> single(String text) {
        return new SingleSelect<>(null, text, false);
    }

    public static <T> SingleSelect<T> single(Icon icon, String text) {
        return new SingleSelect<>(icon, text, false);
    }

    /*
     * NYI public static <T> SingleSelect<T> typeahead(String placeholder) { return new SingleSelect<>(null, placeholder, true);
     * }
     *
     * public static <T> SingleSelect<T> typeahead(Icon icon, String placeholder) { return new SingleSelect<>(icon, placeholder,
     * true); }
     */

    // ------------------------------------------------------ select instance

    private final boolean typeahead;
    private final CollapseExpandHandler ceh;
    private final ItemDisplay<HTMLButtonElement, T> itemDisplay;
    private final HTMLButtonElement button;
    private final HTMLElement text;
    private final HTMLInputElement input;
    private final HTMLElement menu;
    private T value;
    private SelectHandler<T> onSelect;
    private Function<T, String> typeaheadFilter;

    protected SingleSelect(Icon icon, String text, boolean typeahead) {
        super(div().css(component(select)).element(), "Select");
        this.typeahead = typeahead;
        this.ceh = new CollapseExpandHandler();
        this.itemDisplay = new ItemDisplay<>();

        String buttonId = Id.unique(select, Classes.button);
        if (typeahead) {
            HTMLDivElement wrapperElement;
            add(div()
                    .css(component(select, toggle),
                            modifier(Classes.typeahead))
                    .add(wrapperElement = div().css(component(select, toggle, wrapper))
                            .add(form().on(submit, Event::preventDefault)
                                    .add(input = input(InputType.text)
                                            .css(component(formControl), component(select, toggle, Classes.typeahead))
                                            .placeholder(text).autocomplete("off").on(keydown, e -> {
                                                console.log("input keydown(" + e.code + ")");
                                                onTypeahead(e, ((HTMLInputElement) e.currentTarget).value);
                                            }).on(EventType.focus, e -> {
                                                console.log("input focus");
                                                if (!ceh.expanded(element)) {
                                                    ceh.expand(element, buttonElement(), menuElement());
                                                }
                                            }).on(blur, e -> {
                                                console.log("input blur");
                                                setTimeout((o) -> ceh.collapse(element, buttonElement(), menuElement()), 222);
                                            }).element()))
                            .element())
                    .add(button = (HTMLButtonElement) Button.icon(icon(fas(caretDown)), "Options menu")
                            .css(component(select, toggle, Classes.button)).id(buttonId).aria("expanded", false)
                            .aria(hasPopup, listbox).on(click, e -> ceh.expand(element, buttonElement(), menuElement()))
                            .element()));
            if (icon != null) {
                insertFirst(wrapperElement, span().css(component(select, toggle, "icon")).add(icon).element());
            }
            this.text = null;
        } else {
            add(button = button().css(component(select, toggle)).id(buttonId).aria("expanded", false).aria(hasPopup, listbox)
                    .on(click, e -> ceh.expand(element, buttonElement(), menuElement()))
                    .add(div().css(component(select, toggle, wrapper))
                            .add(this.text = span().css(component(select, toggle, Classes.text)).textContent(text).element()))
                    .add(i().css(fas(caretDown), component(select, toggle, arrow)).aria("hidden", true)).element());
            if (icon != null) {
                insertBefore(span().css(component(select, toggle, "icon")).add(icon.aria("hidden", true)).element(),
                        this.text);
            }
            this.input = null;
        }
        add(menu = ul().css(component(select, Classes.menu)).hidden(true).aria(labelledBy, buttonId).attr("role", listbox)
                .element());

    }

    @Override
    public SingleSelect<T> that() {
        return this;
    }

    private HTMLElement buttonElement() {
        return button;
    }

    private HTMLElement menuElement() {
        return menu;
    }

    // ------------------------------------------------------ public API

    public SingleSelect<T> add(Iterable<T> items) {
        for (T item : items) {
            add(item);
        }
        return this;
    }

    public SingleSelect<T> add(T[] items) {
        for (T item : items) {
            add(item);
        }
        return this;
    }

    public SingleSelect<T> add(T item) {
        String itemId = itemDisplay.itemId(item);
        HtmlContentBuilder<HTMLButtonElement> button = button().css(component(select, Classes.menu, Classes.item))
                .attr("role", option).data(singleSelectItem, itemId).on(click, e -> {
                    ceh.collapse(element, buttonElement(), menuElement());
                    select(item);
                });
        itemDisplay.display.accept(button, item);
        if (typeahead) {
            String filter = typeaheadFilter != null ? typeaheadFilter.apply(item) : itemDisplay.asString.apply(item);
            button.data(singleSelectFilter, filter);
        }
        menu.appendChild(li().attr("role", presentation).add(button).element());
        return this;
    }

    @Override
    public T value() {
        return value;
    }

    public SingleSelect<T> select(T item) {
        return select(item, true);
    }

    public SingleSelect<T> select(T item, boolean fireOnSelect) {
        value = item;
        String itemId = itemDisplay.itemId(item);
        for (HTMLElement e : Elements.findAll(menu, By.data(singleSelectItem))) {
            Element icon = Elements.find(e, By.selector(".fas.fa-check"));
            if (itemId.equals(e.dataset.get(singleSelectItem))) {
                e.classList.add(modifier(selected));
                if (icon == null) {
                    e.appendChild(icon(fas(check)).css(component(select, Classes.menu, Classes.item, "icon"))
                            .aria("hidden", true).element());
                }
            } else {
                e.classList.remove(modifier(selected));
                failSafeRemove(e, icon);
            }
        }
        if (typeahead) {
            input.value = itemDisplay.asString.apply(item);
        } else {
            text.textContent = itemDisplay.asString.apply(item);
        }

        if (fireOnSelect && onSelect != null) {
            onSelect.onSelect(value);
        }
        return this;
    }

    public SingleSelect<T> identifier(Function<T, String> identifier) {
        itemDisplay.identifier = identifier;
        return this;
    }

    public SingleSelect<T> asString(Function<T, String> asString) {
        itemDisplay.asString = asString;
        return this;
    }

    public SingleSelect<T> display(BiConsumer<HtmlContentBuilder<HTMLButtonElement>, T> display) {
        itemDisplay.display = display;
        return this;
    }

    public SingleSelect<T> typeaheadFilter(Function<T, String> typeaheadFilter) {
        this.typeaheadFilter = typeaheadFilter;
        return this;
    }

    // ------------------------------------------------------ modifier

    public SingleSelect<T> up() {
        element.classList.add(modifier(Classes.top));
        return this;
    }

    @Override
    public SingleSelect<T> disable() {
        button.disabled = true;
        return this;
    }

    @Override
    public SingleSelect<T> enable() {
        button.disabled = false;
        return this;
    }

    public void disable(T item) {
        HTMLButtonElement element = itemElement(item);
        if (element != null) {
            element.disabled = true;
        }
    }

    public void enable(T item) {
        HTMLButtonElement element = itemElement(item);
        if (element != null) {
            element.disabled = false;
        }
    }

    // ------------------------------------------------------ events

    public SingleSelect<T> onToggle(Consumer<Boolean> onToggle) {
        ceh.onToggle = onToggle;
        return this;
    }

    public SingleSelect<T> onSelect(SelectHandler<T> onSelect) {
        this.onSelect = onSelect;
        return this;
    }

    // ------------------------------------------------------ internals

    private HTMLButtonElement itemElement(T item) {
        String itemId = itemDisplay.itemId(item);
        return Elements.find(menu, By.data(singleSelectItem, itemId));
    }

    private void onTypeahead(KeyboardEvent e, String value) {
        if (Key.Escape.match(e)) {
            console.log("key matches escape");
            ceh.collapse(element, buttonElement(), menuElement());
        } else if (Key.Enter.match(e)) {
            console.log("key matches enter");
            if (ceh.expanded(element)) {
                // TODO select first item
                ceh.collapse(element, buttonElement(), menuElement());
            } else {
                ceh.expand(element, buttonElement(), menuElement());
            }
        } else if (Key.ArrowUp.match(e)) {
            console.log("key matches arrow up");
            if (ceh.expanded(element)) {
                // TODO select previous
            }
        } else if (Key.ArrowDown.match(e)) {
            console.log("key matches arrow down");
            if (ceh.expanded(element)) {
                // TODO select next
            }
        } else {
            console.log("key matches anything else");
            if (value != null && value.length() != 0) {
                filter(value);
            }
        }
    }

    private void filter(String text) {
        console.log("filter for '" + text + "'");
        AtomicInteger count = new AtomicInteger();
        for (HTMLElement e : Elements.findAll(menu, By.data(singleSelectFilter))) {
            String filter = e.dataset.get(singleSelectFilter);
            if (filter.toLowerCase().contains(text.toLowerCase())) {
                count.incrementAndGet();
                setVisible(((HTMLElement) e.parentNode), true);
            } else {
                setVisible(((HTMLElement) e.parentNode), false);
            }
        }
        if (count.get() == 0) {
            menu.appendChild(NO_RESULTS);
        } else {
            failSafeRemoveFromParent(NO_RESULTS);
        }
    }
}
