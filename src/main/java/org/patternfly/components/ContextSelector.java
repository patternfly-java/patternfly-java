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
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.core.CollapseExpand;
import org.patternfly.core.Disable;
import org.patternfly.core.HasValue;
import org.patternfly.core.ItemDisplay;
import org.patternfly.core.SelectHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Dataset.contextSelectorItem;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.contextSelector;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.input;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.labelledBy;
import static org.patternfly.layout.Classes.list;
import static org.patternfly.layout.Classes.none;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.Constants.hidden;
import static org.patternfly.layout.Icons.caretDown;
import static org.patternfly.layout.Icons.fas;

/**
 * PatternFly context selector component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/contextselector">https://www.patternfly.org/v4/documentation/core/components/contextselector</a>
 */
public class ContextSelector<T> extends BaseComponent<HTMLDivElement, ContextSelector<T>>
        implements Disable<ContextSelector<T>>, HasValue<T> {

    // ------------------------------------------------------ factory methods

    public static <T> ContextSelector<T> contextSelector(String text) {
        return new ContextSelector<>(text);
    }

    // ------------------------------------------------------ instance

    private final CollapseExpand ceh;
    private final ItemDisplay<HTMLButtonElement, T> itemDisplay;
    private final HTMLElement text;
    private final HTMLButtonElement button;
    private final Search search;
    private final HTMLElement menu;
    private final HTMLElement ul;
    private T value;
    private SelectHandler<T> onSelect;

    protected ContextSelector(String text) {
        super(div().css(component(contextSelector)).element(), "ContextSelector");
        this.ceh = new CollapseExpand();
        this.itemDisplay = new ItemDisplay<>();

        String labelId = Id.unique(contextSelector, "label");
        String buttonId = Id.unique(contextSelector, Classes.button);

        add(span().id(labelId).hidden(true).textContent(text));
        add(button = button().css(component(contextSelector, toggle)).id(buttonId).aria("expanded", false)
                .aria(labelledBy, labelId + " " + buttonId)
                .on(click, e -> ceh.expand(element(), buttonElement(), menuElement()))
                .add(this.text = span().css(component(contextSelector, toggle, Classes.text)).textContent("Please select")
                        .element())
                .add(i().css(fas(caretDown), component(contextSelector, toggle, icon)).aria(hidden, true)).element());
        add(menu = div().css(component(contextSelector, Classes.menu)).attr(hidden, "")
                .add(div().css(component(contextSelector, Classes.menu, input))
                        .add(search = new Search("Search").onFilter(this::filter)))
                .add(ul = ul().css(component(contextSelector, Classes.menu, list)).attr("role", Classes.menu).element())
                .element());
    }

    @Override
    public ContextSelector<T> that() {
        return this;
    }

    private HTMLElement buttonElement() {
        return button;
    }

    private HTMLElement menuElement() {
        return menu;
    }

    // ------------------------------------------------------ public API

    public ContextSelector<T> add(Iterable<T> items) {
        for (T item : items) {
            add(item);
        }
        return this;
    }

    public ContextSelector<T> add(T[] items) {
        for (T item : items) {
            add(item);
        }
        return this;
    }

    public ContextSelector<T> add(T item) {
        HTMLContainerBuilder<HTMLButtonElement> button = button()
                .css(component(contextSelector, Classes.menu, list, Classes.item))
                .data(contextSelectorItem, itemDisplay.itemId(item)).on(click, e -> {
                    ceh.collapse(element(), buttonElement(), menuElement());
                    select(item);
                });
        itemDisplay.display.accept(button, item);
        ul.appendChild(li().attr("role", none).add(button).element());
        return this;
    }

    public ContextSelector<T> identifier(Function<T, String> identifier) {
        itemDisplay.identifier = identifier;
        return this;
    }

    public ContextSelector<T> asString(Function<T, String> asString) {
        itemDisplay.asString = asString;
        return this;
    }

    public ContextSelector<T> display(BiConsumer<HTMLContainerBuilder<HTMLButtonElement>, T> display) {
        itemDisplay.display = display;
        return this;
    }

    public ContextSelector<T> select(T item) {
        return select(item, true);
    }

    public ContextSelector<T> select(T item, boolean fireOnSelect) {
        value = item;
        text.textContent = itemDisplay.asString.apply(item);
        if (fireOnSelect && onSelect != null) {
            onSelect.onSelect(value);
        }
        return this;
    }

    @Override
    public ContextSelector<T> disable() {
        button.disabled = true;
        return this;
    }

    @Override
    public ContextSelector<T> enable() {
        button.disabled = false;
        return this;
    }

    @Override
    public T value() {
        return value;
    }

    // ------------------------------------------------------ events

    public ContextSelector<T> onToggle(Consumer<Boolean> onToggle) {
        ceh.onToggle = onToggle;
        return this;
    }

    public ContextSelector<T> onSelect(SelectHandler<T> onSelect) {
        this.onSelect = onSelect;
        return this;
    }

    // ------------------------------------------------------ internals

    private void filter(String value) {
        for (HTMLElement e : Elements.findAll(menu,
                By.element("button").and(By.classname(component(contextSelector, Classes.menu, list, item))))) {
            HTMLElement parent = (HTMLElement) e.parentNode;
            setVisible(parent, e.textContent.toLowerCase().contains(value.toLowerCase()));
        }
    }

    private void clearFilter() {
        search.clear();
        for (HTMLElement e : Elements.findAll(menu,
                By.element("button").and(By.classname(component(contextSelector, Classes.menu, list, item))))) {
            HTMLElement parent = (HTMLElement) e.parentNode;
            setVisible(parent, true);
        }
    }
}
