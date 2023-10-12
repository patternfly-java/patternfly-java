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

import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.core.HasValue;
import org.patternfly.core.Modifiers;
import org.patternfly.handler.SelectHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemove;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Dataset.singleOptionsMenuItem;
import static org.patternfly.layout.Classes.alignRight;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.hasPopup;
import static org.patternfly.layout.Classes.labelledBy;
import static org.patternfly.layout.Classes.listbox;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.optionsMenu;
import static org.patternfly.layout.Classes.presentation;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.Classes.top;
import static org.patternfly.layout.PredefinedIcon.caretDown;
import static org.patternfly.layout.PredefinedIcon.check;

/**
 * PatternFly options menu (not grouped, single selection).
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/optionsmenu">https://www.patternfly.org/v4/documentation/core/components/optionsmenu</a>
 */
@Deprecated
public class SingleOptionsMenu<T> extends BaseComponent<HTMLDivElement, SingleOptionsMenu<T>>
        implements HasValue<T>, Modifiers.Disabled<HTMLDivElement, SingleOptionsMenu<T>> {

    // ------------------------------------------------------ factory

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

    private final CollapseExpand ceh;
    private final OldItemDisplay<HTMLButtonElement, T> itemDisplay;
    private final HTMLButtonElement button;
    private final HTMLElement plain;
    private final HTMLElement text;
    private final HTMLElement menu;
    private T value;
    private SelectHandler<T> onSelect;
    private boolean collapseOnSelect;

    protected SingleOptionsMenu(String text, Icon icon, boolean plain) {
        super(div().css(component(optionsMenu)).element(), "OptionsMenu");
        this.ceh = new CollapseExpand();
        this.itemDisplay = new OldItemDisplay<>();
        this.collapseOnSelect = false;

        String buttonId = Id.unique(optionsMenu, Classes.button);
        HTMLContainerBuilder<HTMLButtonElement> buttonBuilder = button().id(buttonId).aria("expanded", false)
                .aria(hasPopup, listbox).on(click, e -> ceh.expand(element(), buttonElement(), menuElement()));

        HTMLElement trigger;
        if (icon != null) {
            this.plain = null;
            this.text = null;
            this.button = buttonBuilder.css(component(optionsMenu, toggle), modifier(Classes.plain))
                    .add(icon.aria("hidden", true)).element();
            trigger = button;

        } else { // text != null
            if (plain) {
                this.plain = div().css(component(optionsMenu, toggle), modifier(Classes.plain), modifier(Classes.text))
                        .add(this.text = span().css(component(optionsMenu, toggle, Classes.text))
                                .textContent(text)
                                .element())
                        .add(button = buttonBuilder.css(component(optionsMenu, toggle, Classes.button))
                                .aria("label", text)
                                .add(i().css(caretDown.className).aria("hidden", true))
                                .element())
                        .element();
                trigger = this.plain;

            } else {
                this.plain = null;
                this.button = buttonBuilder.css(component(optionsMenu, toggle)).aria("label", text)
                        .add(this.text = span().css(component(optionsMenu, toggle, Classes.text))
                                .textContent(text)
                                .element())
                        .add(i().css(caretDown.className, component(optionsMenu, toggle, "icon")).aria("hidden", true))
                        .element();
                trigger = button;
            }
        }

        add(trigger);
        add(menu = ul().css(component(optionsMenu, Classes.menu)).hidden(true).aria(labelledBy, buttonId)
                .attr("role", Classes.menu).element());
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

    // ------------------------------------------------------ api

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
        HTMLContainerBuilder<HTMLButtonElement> button = button().css(
                component(optionsMenu, Classes.menu, Classes.item))
                .attr("tabindex", -1).data(singleOptionsMenuItem, itemId).on(click, e -> {
                    if (collapseOnSelect) {
                        ceh.collapse(element(), buttonElement(), menuElement());
                    }
                    select(item);
                });
        itemDisplay.display.accept(button, item);
        menu.appendChild(li().attr("role", presentation).add(button).element());
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

    public SingleOptionsMenu<T> display(BiConsumer<HTMLContainerBuilder<HTMLButtonElement>, T> display) {
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
                            Icon.icon(check.className).css(component(optionsMenu, Classes.menu, Classes.item, "icon"))
                                    .aria("hidden", true).element());
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
        element().classList.add(modifier(top));
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
    public SingleOptionsMenu<T> disabled(boolean disabled) {
        button.disabled = disabled;
        if (plain != null) {
            if (disabled) {
                plain.classList.add(modifier(Classes.disabled));
            } else {
                plain.classList.remove(modifier(Classes.disabled));
            }
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

    // ------------------------------------------------------ internal

    private HTMLButtonElement itemElement(T item) {
        String itemId = itemDisplay.itemId(item);
        return Elements.find(menu, By.data(singleOptionsMenuItem, itemId));
    }
}
