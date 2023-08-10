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
import java.util.List;
import java.util.function.BiConsumer;
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

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.*;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.*;
import static org.patternfly.resources.Constants.label;
import static org.patternfly.resources.Constants.toggle;
import static org.patternfly.resources.Dataset.multiOptionsMenuCheck;
import static org.patternfly.resources.Dataset.multiOptionsMenuItem;

/**
 * PatternFly options menu (grouped, multiple selections).
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/optionsmenu">https://www.patternfly.org/v4/documentation/core/components/optionsmenu</a>
 */
public class MultiOptionsMenu extends BaseComponent<HTMLDivElement, MultiOptionsMenu>
        implements HtmlContent<HTMLDivElement, MultiOptionsMenu>, Disable<MultiOptionsMenu> {

    // ------------------------------------------------------ factory methods

    public static MultiOptionsMenu text(String text) {
        return new MultiOptionsMenu(text, null, false);
    }

    public static MultiOptionsMenu icon(Icon icon) {
        return new MultiOptionsMenu(null, icon, false);
    }

    public static MultiOptionsMenu plain(String text) {
        return new MultiOptionsMenu(text, null, true);
    }

    // ------------------------------------------------------ options menu instance

    private final CollapseExpandHandler ceh;
    private final HTMLButtonElement button;
    private final HTMLElement plain;
    private final HTMLElement menu;
    private boolean collapseOnSelect;

    MultiOptionsMenu(String text, Icon icon, boolean plain) {
        super(div().css(component(optionsMenu)).element(), "OptionsMenu");
        this.ceh = new CollapseExpandHandler();
        this.collapseOnSelect = false;

        String buttonId = Id.unique(optionsMenu, Constants.button);
        HtmlContentBuilder<HTMLButtonElement> buttonBuilder = button().id(buttonId).aria(expanded, false)
                .aria(hasPopup, listbox).on(click, e -> ceh.expand(element(), buttonElement(), menuElement()));

        HTMLElement trigger;
        if (icon != null) {
            this.plain = null;
            this.button = buttonBuilder.css(component(optionsMenu, toggle), modifier(Constants.plain))
                    .add(icon.aria(hidden, true)).element();
            trigger = button;

        } else { // text != null
            if (plain) {
                this.plain = div().css(component(optionsMenu, toggle), modifier(Constants.plain), modifier(Constants.text))
                        .add(span().css(component(optionsMenu, toggle, Constants.text)).textContent(text))
                        .add(button = buttonBuilder.css(component(optionsMenu, toggle, Constants.button)).aria(label, text)
                                .add(i().css(fas(caretDown)).aria(hidden, true)).element())
                        .element();
                trigger = this.plain;

            } else {
                this.plain = null;
                this.button = buttonBuilder.css(component(optionsMenu, toggle)).aria(label, text)
                        .add(span().css(component(optionsMenu, toggle, Constants.text)).textContent(text))
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
    public MultiOptionsMenu that() {
        return this;
    }

    private HTMLElement buttonElement() {
        return button;
    }

    private HTMLElement menuElement() {
        return menu;
    }

    // ------------------------------------------------------ public API

    public <T> MultiOptionsMenu add(Group<T> group) {
        if (menu.childNodes.length != 0) {
            menu.appendChild(li().css(component(optionsMenu, separator)).attr(role, separator).element());
        }
        menu.appendChild(li().aria(label, group.text).add(group).element());

        for (T item : group.items) {
            HtmlContentBuilder<HTMLButtonElement> button = button().css(component(optionsMenu, Constants.menu, Constants.item))
                    .attr(Constants.tabindex, -1).data(multiOptionsMenuItem, group.itemDisplay.itemId(item)).on(click, e -> {
                        if (collapseOnSelect) {
                            ceh.collapse(element(), buttonElement(), menuElement());
                        }
                        group.select(item);
                    });
            group.itemDisplay.display.accept(button, item);
            HTMLElement icon;
            button.add(icon = i().css(fas(check), component(optionsMenu, Constants.menu, Constants.item, Constants.icon))
                    .aria(hidden, true).data(multiOptionsMenuCheck, group.itemDisplay.itemId(item)).element());
            setVisible(icon, false);

            group.element().appendChild(li().attr(role, menuitem).add(button).element());
        }
        return this;
    }

    // ------------------------------------------------------ modifiers

    public MultiOptionsMenu up() {
        element.classList.add(modifier(top));
        return this;
    }

    public MultiOptionsMenu right() {
        menu.classList.add(modifier(alignRight));
        return this;
    }

    public MultiOptionsMenu collapseOnSelect() {
        this.collapseOnSelect = true;
        return this;
    }

    @Override
    public MultiOptionsMenu disable() {
        button.disabled = true;
        if (plain != null) {
            plain.classList.add(modifier(disabled));
        }
        return this;
    }

    @Override
    public MultiOptionsMenu enable() {
        button.disabled = false;
        if (plain != null) {
            plain.classList.remove(modifier(disabled));
        }
        return this;
    }

    // ------------------------------------------------------ inner classes

    public static class Group<T> extends BaseComponent<HTMLUListElement, Group<T>>
            implements HtmlContent<HTMLUListElement, Group<T>>, HasValue<T> {

        private final String text;
        private final List<T> items;
        private final ItemDisplay<HTMLButtonElement, T> itemDisplay;
        private T value;
        private SelectHandler<T> onSelect;

        public Group(String text) {
            super(ul().element(), "MultiOptionsMenuGroup");
            this.text = text;
            this.items = new ArrayList<>();
            this.itemDisplay = new ItemDisplay<>();
        }

        @Override
        public Group<T> that() {
            return this;
        }

        public Group<T> add(Iterable<T> items) {
            for (T item : items) {
                add(item);
            }
            return this;
        }

        public Group<T> add(T[] items) {
            for (T item : items) {
                add(item);
            }
            return this;
        }

        public Group<T> add(T item) {
            items.add(item);
            return this;
        }

        @Override
        public T value() {
            return value;
        }

        public Group<T> identifier(Function<T, String> identifier) {
            this.itemDisplay.identifier = identifier;
            return this;
        }

        public Group<T> asString(Function<T, String> asString) {
            itemDisplay.asString = asString;
            return this;
        }

        public Group<T> display(BiConsumer<HtmlContentBuilder<HTMLButtonElement>, T> display) {
            this.itemDisplay.display = display;
            return this;
        }

        public Group<T> onSelect(SelectHandler<T> onSelect) {
            this.onSelect = onSelect;
            return this;
        }

        public Group<T> select(T item) {
            return select(item, true);
        }

        public Group<T> select(T item, boolean fireEvent) {
            value = item;
            String itemId = itemDisplay.itemId(item);
            for (HTMLElement e : Elements.findAll(element,
                    By.classname(component(optionsMenu, Constants.menu, Constants.item, icon)))) {
                setVisible(e, itemId.equals(e.dataset.get(multiOptionsMenuCheck)));
            }

            if (fireEvent && onSelect != null) {
                onSelect.onSelect(value);
            }
            return this;
        }

        public Group<T> clearSelection() {
            value = null;
            for (HTMLElement e : Elements.findAll(element, By.classname(component(optionsMenu, Constants.menu, item, icon)))) {
                setVisible(e, false);
            }
            return this;
        }
    }
}
