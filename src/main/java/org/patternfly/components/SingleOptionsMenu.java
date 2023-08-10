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

import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HtmlContent;
import org.jboss.elemento.HtmlContentBuilder;
import org.jboss.elemento.Id;
import org.patternfly.core.CollapseExpandHandler;
import org.patternfly.core.Disable;
import org.patternfly.core.HasValue;
import org.patternfly.core.SelectHandler;
import org.patternfly.resources.Constants;

import elemental2.dom.Element;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.*;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.*;
import static org.patternfly.resources.Constants.label;
import static org.patternfly.resources.Constants.toggle;
import static org.patternfly.resources.Dataset.singleOptionsMenuItem;

/**
 * PatternFly options menu (not grouped, single selection).
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/optionsmenu">https://www.patternfly.org/v4/documentation/core/components/optionsmenu</a>
 */
public class SingleOptionsMenu<T> extends BaseComponent<HTMLDivElement, SingleOptionsMenu<T>>
        implements HtmlContent<HTMLDivElement, SingleOptionsMenu<T>>, HasValue<T>, Disable<SingleOptionsMenu<T>> {

    // ------------------------------------------------------ factory methods

    public static <T> SingleOptionsMenu<T> text(String text) {
        return new SingleOptionsMenu<>(text, null, false);
    }

    public static <T> SingleOptionsMenu<T> icon(Icon icon) {
        return new SingleOptionsMenu<>(null, icon, false);
    }

    public static <T> SingleOptionsMenu<T> plain(String text) {
        return new SingleOptionsMenu<>(text, null, true);
    }

    // ------------------------------------------------------ options menu instance

    private final CollapseExpandHandler ceh;
    private final ItemDisplay<HTMLButtonElement, T> itemDisplay;
    private final HTMLButtonElement button;
    private final HTMLElement plain;
    private final HTMLElement text;
    private final HTMLElement menu;
    private T value;
    private SelectHandler<T> onSelect;
    private boolean collapseOnSelect;

    protected SingleOptionsMenu(String text, Icon icon, boolean plain) {
        super(div().css(component(optionsMenu)).element(), "OptionsMenu");
        this.ceh = new CollapseExpandHandler();
        this.itemDisplay = new ItemDisplay<>();
        this.collapseOnSelect = false;

        String buttonId = Id.unique(optionsMenu, Constants.button);
        HtmlContentBuilder<HTMLButtonElement> buttonBuilder = button().id(buttonId).aria(expanded, false)
                .aria(hasPopup, listbox).on(click, e -> ceh.expand(element(), buttonElement(), menuElement()));

        HTMLElement trigger;
        if (icon != null) {
            this.plain = null;
            this.text = null;
            this.button = buttonBuilder.css(component(optionsMenu, toggle), modifier(Constants.plain))
                    .add(icon.aria(hidden, true)).element();
            trigger = button;

        } else { // text != null
            if (plain) {
                this.plain = div().css(component(optionsMenu, toggle), modifier(Constants.plain), modifier(Constants.text))
                        .add(this.text = span().css(component(optionsMenu, toggle, Constants.text)).textContent(text).element())
                        .add(button = buttonBuilder.css(component(optionsMenu, toggle, Constants.button)).aria(label, text)
                                .add(i().css(fas(caretDown)).aria(hidden, true)).element())
                        .element();
                trigger = this.plain;

            } else {
                this.plain = null;
                this.button = buttonBuilder.css(component(optionsMenu, toggle)).aria(label, text)
                        .add(this.text = span().css(component(optionsMenu, toggle, Constants.text)).textContent(text).element())
                        .add(i().css(fas(caretDown), component(optionsMenu, toggle, Constants.icon)).aria(hidden, true))
                        .element();
                trigger = button;
            }
        }

        add(trigger);
        add(menu = ul().css(component(optionsMenu, Constants.menu)).hidden(true).aria(labelledBy, buttonId)
                .attr(role, Constants.menu).element());
    }

    @Override
    public SingleOptionsMenu<T> that() {
        return this;
    }

    private HTMLElement buttonElement() {
        return button;
    }

    private HTMLElement menuElement() {
        return menu;
    }

    HTMLElement textElement() {
        return text;
    }

    // ------------------------------------------------------ public API

    public SingleOptionsMenu<T> add(Iterable<T> items) {
        for (T item : items) {
            add(item);
        }
        return this;
    }

    public SingleOptionsMenu<T> add(T[] items) {
        for (T item : items) {
            add(item);
        }
        return this;
    }

    public SingleOptionsMenu<T> add(T item) {
        String itemId = itemDisplay.itemId(item);
        HtmlContentBuilder<HTMLButtonElement> button = button().css(component(optionsMenu, Constants.menu, Constants.item))
                .attr(tabindex, -1).data(singleOptionsMenuItem, itemId).on(click, e -> {
                    if (collapseOnSelect) {
                        ceh.collapse(element(), buttonElement(), menuElement());
                    }
                    select(item);
                });
        itemDisplay.display.accept(button, item);
        menu.appendChild(li().attr(role, presentation).add(button).element());
        return this;
    }

    public SingleOptionsMenu<T> identifier(Function<T, String> identifier) {
        itemDisplay.identifier = identifier;
        return this;
    }

    public SingleOptionsMenu<T> asString(Function<T, String> asString) {
        itemDisplay.asString = asString;
        return this;
    }

    public SingleOptionsMenu<T> display(BiConsumer<HtmlContentBuilder<HTMLButtonElement>, T> display) {
        itemDisplay.display = display;
        return this;
    }

    public SingleOptionsMenu<T> select(T item) {
        return select(item, true);
    }

    public SingleOptionsMenu<T> select(T item, boolean fireOnSelect) {
        value = item;
        String itemId = itemDisplay.itemId(item);
        for (HTMLElement e : Elements.findAll(menu, By.data(singleOptionsMenuItem))) {
            Element icon = Elements.find(e, By.selector(".fas.fa-check"));
            if (itemId.equals(e.dataset.get(singleOptionsMenuItem))) {
                if (icon == null) {
                    e.appendChild(
                            Icon.icon(fas(check)).css(component(optionsMenu, Constants.menu, Constants.item, Constants.icon))
                                    .aria(hidden, true).element());
                }
            } else {
                failSafeRemove(e, icon);
            }
        }

        if (fireOnSelect && onSelect != null) {
            onSelect.onSelect(value);
        }
        return this;
    }

    @Override
    public T value() {
        return value;
    }

    // ------------------------------------------------------ modifier

    public SingleOptionsMenu<T> up() {
        element.classList.add(modifier(top));
        return this;
    }

    public SingleOptionsMenu<T> right() {
        menu.classList.add(modifier(alignRight));
        return this;
    }

    public SingleOptionsMenu<T> collapseOnSelect() {
        this.collapseOnSelect = true;
        return this;
    }

    @Override
    public SingleOptionsMenu<T> disable() {
        button.disabled = true;
        if (plain != null) {
            plain.classList.add(modifier(Constants.disabled));
        }
        return this;
    }

    @Override
    public SingleOptionsMenu<T> enable() {
        button.disabled = false;
        if (plain != null) {
            plain.classList.remove(modifier(Constants.disabled));
        }
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

    public SingleOptionsMenu<T> onToggle(Consumer<Boolean> onToggle) {
        ceh.onToggle = onToggle;
        return this;
    }

    public SingleOptionsMenu<T> onSelect(SelectHandler<T> onSelect) {
        this.onSelect = onSelect;
        return this;
    }

    // ------------------------------------------------------ internals

    private HTMLButtonElement itemElement(T item) {
        String itemId = itemDisplay.itemId(item);
        return Elements.find(menu, By.data(singleOptionsMenuItem, itemId));
    }
}
