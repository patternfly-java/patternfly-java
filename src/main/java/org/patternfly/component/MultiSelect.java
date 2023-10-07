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

import java.util.Set;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.core.CollapseExpand;
import org.patternfly.core.HasValues;
import org.patternfly.core.Modifiers;
import org.patternfly.core.OldItemDisplay;
import org.patternfly.handler.SelectHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.InputType.checkbox;
import static org.patternfly.core.Dataset.multiSelectItem;
import static org.patternfly.layout.Classes.arrow;
import static org.patternfly.layout.Classes.check;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.input;
import static org.patternfly.layout.Classes.labelledBy;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.select;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.Classes.top;
import static org.patternfly.layout.Classes.wrapper;
import static org.patternfly.layout.PredefinedIcon.caretDown;

/**
 * PatternFly multi select component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/select">https://www.patternfly.org/v4/documentation/core/components/select</a>
 */
// TODO Use static inner class Group instead of add(String group, T item)
@Deprecated
public class MultiSelect<T> extends BaseComponent<HTMLDivElement, MultiSelect<T>>
        implements Modifiers.Disabled<HTMLDivElement, MultiSelect<T>>, HasValues<T> {

    // ------------------------------------------------------ factory methods

    public static <T> MultiSelect<T> multi(String text) {
        return new MultiSelect<>(null, text, false);
    }

    public static <T> MultiSelect<T> multi(Icon icon, String text) {
        return new MultiSelect<>(icon, text, true);
    }

    /*
     * NYI public static <T>MultiSelect<T> typeahead(String placeholder) { return new MultiSelect<>(null, placeholder, true); }
     *
     * public static <T> MultiSelect<T> typeahead(Icon icon, String placeholder) { return new MultiSelect<>(icon, placeholder,
     * true); }
     */

    // ------------------------------------------------------ select instance

    private final boolean typeahead;
    private final CollapseExpand ceh;
    private final OldItemDisplay<HTMLElement, T> itemDisplay;
    private final HTMLButtonElement button;
    private final HTMLElement text;
    private final HTMLElement menu;
    private SelectHandler<T> onSelect;

    MultiSelect(Icon icon, String text, boolean typeahead) {
        super(div().css(component(select)).element(), "Select");
        this.typeahead = typeahead;
        this.ceh = new CollapseExpand();
        this.itemDisplay = new OldItemDisplay<>();

        String buttonId = Id.unique(select, Classes.button);
        add(button = button().css(component(select, toggle))
                .id(buttonId)
                .aria("expanded", false)
                .aria(labelledBy, buttonId)
                .on(click, e -> ceh.expand(element(), buttonElement(), menuElement()))
                .add(div().css(component(select, toggle, wrapper))
                        .add(this.text = span().css(component(select, toggle, Classes.text))
                                .textContent(text)
                                .element()))
                .add(i().css(caretDown.className, component(select, toggle, arrow)).aria("hidden", true))
                .element());
        add(menu = div().css(component(select, Classes.menu)).hidden(true).element());

        if (icon != null) {
            insertBefore(span().css(component(select, toggle, "icon")).add(icon.aria("hidden", true)).element(),
                    this.text);
        }
    }

    @Override
    public MultiSelect<T> that() {
        return this;
    }

    private HTMLElement buttonElement() {
        return button;
    }

    private HTMLElement menuElement() {
        return menu;
    }

    // ------------------------------------------------------ public API

    public MultiSelect<T> add(Iterable<T> items) {
        for (T item : items) {
            add(null, item);
        }
        return this;
    }

    public MultiSelect<T> add(T[] items) {
        for (T item : items) {
            add(null, item);
        }
        return this;
    }

    public MultiSelect<T> add(T item) {
        return add(null, item);
    }

    public MultiSelect<T> add(String group, Iterable<T> items) {
        return this;
    }

    public MultiSelect<T> add(String group, T[] items) {
        return this;
    }

    public MultiSelect<T> add(String group, T item) {
        HTMLContainerBuilder<HTMLElement> span = span().css(component(check, "label"));
        itemDisplay.display.accept(span, item);

        menu.appendChild(label().css(component(check), component(select, Classes.menu, Classes.item)).add(
                input(checkbox).css(component(check, input))
                        .data(multiSelectItem, itemDisplay.itemId(item))
                        .on(click, e -> {
                            ceh.collapse(element(), buttonElement(), menuElement());
                            select(item);
                        }))
                .add(span().css(component(check, "label")).textContent(Classes.text)).element());
        return this;
    }

    @Override
    public Set<T> values() {
        return null;
    }

    public MultiSelect<T> select(T item) {
        return select(item, true);
    }

    public MultiSelect<T> select(T item, boolean fireOnSelect) {
        text.textContent = itemDisplay.asString.apply(item);
        if (fireOnSelect && onSelect != null) {
            onSelect.onSelect(item);
        }
        return this;
    }

    public MultiSelect<T> identifier(Function<T, String> identifier) {
        itemDisplay.identifier = identifier;
        return this;
    }

    public MultiSelect<T> asString(Function<T, String> asString) {
        itemDisplay.asString = asString;
        return this;
    }

    public MultiSelect<T> display(BiConsumer<HTMLContainerBuilder<HTMLElement>, T> display) {
        itemDisplay.display = display;
        return this;
    }

    // ------------------------------------------------------ modifier

    public MultiSelect<T> up() {
        element().classList.add(modifier(top));
        return this;
    }

    @Override
    public MultiSelect<T> disabled(boolean disabled) {
        button.disabled = disabled;
        return this;
    }

    public void disable(T item) {
    }

    public void enable(T item) {
    }

    // ------------------------------------------------------ events

    public MultiSelect<T> onToggle(Consumer<Boolean> onToggle) {
        ceh.onToggle = onToggle;
        return this;
    }

    public MultiSelect<T> onSelect(SelectHandler<T> onSelect) {
        this.onSelect = onSelect;
        return this;
    }
}
