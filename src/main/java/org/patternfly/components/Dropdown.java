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
import org.patternfly.core.CollapseExpandHandler;
import org.patternfly.core.Disable;
import org.patternfly.core.ItemDisplay;
import org.patternfly.core.SelectHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLIElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.InputType.checkbox;
import static org.patternfly.core.Dataset.dropdownItem;
import static org.patternfly.layout.Classes.alignRight;
import static org.patternfly.layout.Classes.check;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.disabled;
import static org.patternfly.layout.Classes.dropdown;
import static org.patternfly.layout.Classes.hasPopup;
import static org.patternfly.layout.Classes.invalid;
import static org.patternfly.layout.Classes.labelledBy;
import static org.patternfly.layout.Classes.menuitem;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.plain;
import static org.patternfly.layout.Classes.primary;
import static org.patternfly.layout.Classes.separator;
import static org.patternfly.layout.Classes.splitButton;
import static org.patternfly.layout.Classes.text;
import static org.patternfly.layout.Classes.top;
import static org.patternfly.layout.Icons.caretDown;
import static org.patternfly.layout.Icons.ellipsisV;
import static org.patternfly.layout.Icons.fas;

/**
 * PatternFly dropdown component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/dropdown">https://www.patternfly.org/v4/documentation/core/components/dropdown</a>
 */
// TODO Open with enter, navigation with up/down, select with enter, close with esc
public class Dropdown<T> extends BaseComponent<HTMLDivElement, Dropdown<T>>
        implements Disable<Dropdown<T>> {

    // ------------------------------------------------------ factory methods

    public static <T> Dropdown<T> text(String text) {
        return new Dropdown<>(text, null, false, false);
    }

    public static <T> Dropdown<T> kebab() {
        return new Dropdown<>(null, Icon.icon(fas(ellipsisV)), false, false);
    }

    public static <T> Dropdown<T> icon(Icon icon) {
        return new Dropdown<>(null, icon, false, false);
    }

    public static <T> Dropdown<T> splitCheckbox() {
        return new Dropdown<>(null, null, true, false);
    }

    public static <T> Dropdown<T> splitCheckbox(String text) {
        return new Dropdown<>(text, null, true, false);
    }

    public static <T> Dropdown<T> splitAction(Icon icon) {
        return new Dropdown<>(null, null, false, true);
    }

    public static <T> Dropdown<T> splitAction(String text) {
        return new Dropdown<>(text, null, false, true);
    }

    // ------------------------------------------------------ instance

    private final boolean splitCheckbox;
    private final boolean splitAction;
    private final CollapseExpandHandler ceh;
    private final ItemDisplay<HTMLButtonElement, T> itemDisplay;
    private final HTMLElement toggle;
    private final HTMLInputElement input;
    private final HTMLButtonElement button;

    private HTMLElement menu;
    private Consumer<Boolean> onChange;
    private SelectHandler<T> onSelect;

    protected Dropdown(String text, Icon icon, boolean splitCheckbox, boolean splitAction) {
        super(div().css(component(dropdown)).element(), "Dropdown");
        this.splitCheckbox = splitCheckbox;
        this.splitAction = splitAction;
        this.ceh = new CollapseExpandHandler();
        this.itemDisplay = new ItemDisplay<>();

        String buttonId = Id.unique(dropdown, Classes.button);
        HTMLContainerBuilder<HTMLButtonElement> buttonBuilder = button().id(buttonId).aria("expanded", false)
                .aria(hasPopup, true)
                .on(click, e -> ceh.expand(element(), buttonElement(), menuElement()));

        if (splitCheckbox || splitAction) {
            String inputId = Id.unique(dropdown, Classes.input);
            toggle = div().css(component(dropdown, Classes.toggle), modifier(splitButton))
                    .add(label().css(component(dropdown, Classes.toggle, check)).apply(l -> l.htmlFor = inputId)
                            .add(div().css(component(check))
                                    .add(input = input(checkbox).css(component(check, Classes.input))
                                            .id(inputId).aria(invalid, false).aria("label", "Select").on(change, e -> {
                                                if (onChange != null) {
                                                    onChange.accept(((HTMLInputElement) e.target).checked);
                                                }
                                            }).element())))
                    .add(button = buttonBuilder.css(component(dropdown, Classes.toggle, Classes.button))
                            .aria("label", "Select").add(i().css(fas(caretDown)).aria("hidden", true)).element())
                    .element();

        } else {
            input = null;
            buttonBuilder.css(component(dropdown, Classes.toggle));
            if (text != null) {
                button = buttonBuilder
                        .add(i().css(fas(caretDown), component(dropdown, Classes.toggle, "icon")).aria(
                                "hidden", true))
                        .element();
            } else { // icon != null
                button = buttonBuilder.css(modifier(plain)).aria("label", "Actions").add(icon.aria("hidden", true))
                        .element();
            }
            toggle = button;
        }
        add(toggle);
        setText(text);

        // assume an ungrouped dropdown
        menu = ul().css(component(dropdown, Classes.menu)).aria(labelledBy, buttonId).attr("role", Classes.menu)
                .hidden(true)
                .element();
        add(menu);
    }

    @Override
    public Dropdown<T> that() {
        return this;
    }

    private HTMLElement buttonElement() {
        return button;
    }

    private HTMLElement menuElement() {
        return menu;
    }

    // ------------------------------------------------------ add items, groups and separators

    public Dropdown<T> add(Iterable<T> items) {
        for (T item : items) {
            add(item);
        }
        return this;
    }

    public Dropdown<T> add(T[] items) {
        for (T item : items) {
            add(item);
        }
        return this;
    }

    public Dropdown<T> add(T item) {
        menu.appendChild(newItem(item));
        return this;
    }

    public Dropdown<T> addSeparator() {
        menu.appendChild(li().attr("role", separator).add(div().css(component(dropdown, separator))).element());
        return this;
    }

    // ------------------------------------------------------ select and update items

    public Dropdown<T> select(T item) {
        return select(item, true);
    }

    public Dropdown<T> select(T item, boolean fireEvent) {
        if (fireEvent && onSelect != null) {
            onSelect.onSelect(item);
        }
        return this;
    }

    public void update(T item) {
        HTMLButtonElement element = itemElement(item);
        itemDisplay.display.accept(button(element), item);
    }

    // ------------------------------------------------------ change display

    public Dropdown<T> identifier(Function<T, String> identifier) {
        itemDisplay.identifier = identifier;
        return this;
    }

    public Dropdown<T> asString(Function<T, String> asString) {
        itemDisplay.asString = asString;
        return this;
    }

    public Dropdown<T> display(BiConsumer<HTMLContainerBuilder<HTMLButtonElement>, T> display) {
        itemDisplay.display = display;
        return this;
    }

    // ------------------------------------------------------ split checkbox

    public Dropdown<T> check(boolean value) {
        return check(value, true);
    }

    public Dropdown<T> check(boolean value, boolean fireEvent) {
        if (input != null) {
            input.checked = value;
        }
        if (fireEvent && onChange != null) {
            onChange.accept(value);
        }
        return this;
    }

    public Dropdown<T> indeterminate(boolean value) {
        if (input != null) {
            input.indeterminate = value;
        }
        return this;
    }

    // ------------------------------------------------------ modifiers

    public Dropdown<T> up() {
        element().classList.add(modifier(top));
        return this;
    }

    public Dropdown<T> right() {
        menu.classList.add(modifier(alignRight));
        return this;
    }

    public Dropdown<T> primary() {
        if (!(splitCheckbox || splitAction)) {
            button.classList.add(modifier(primary));
        }
        return this;
    }

    @Override
    public Dropdown<T> disable() {
        button.disabled = true;
        if (splitCheckbox || splitAction) {
            toggle.classList.add(modifier(disabled));
            if (input != null) {
                input.disabled = true;
            }
        }
        return this;
    }

    @Override
    public Dropdown<T> enable() {
        button.disabled = false;
        if (splitCheckbox || splitAction) {
            toggle.classList.remove(modifier(disabled));
            if (input != null) {
                input.disabled = false;
            }
        }
        return this;
    }

    public void disable(T item) {
        HTMLButtonElement button = itemElement(item);
        if (button != null) {
            button.disabled = true;
        }
    }

    public void enable(T item) {
        HTMLButtonElement button = itemElement(item);
        if (button != null) {
            button.disabled = false;
        }
    }

    // ------------------------------------------------------ modify text

    public void setText(String text) {
        if (text == null) {
            clearText();
        } else {
            HTMLElement textElement = Elements.find(button,
                    By.classname(component(dropdown, Classes.toggle, Classes.text)));
            if (textElement != null) {
                textElement.textContent = text;
            } else {
                insertFirst(button,
                        span().css(component(dropdown, Classes.toggle, Classes.text)).textContent(text).element());
            }
            HTMLElement iconElement = Elements.find(button, By.selector(".fas.fa-caret-down"));
            if (iconElement != null) {
                iconElement.classList.add(component(dropdown, Classes.toggle, "icon"));
            }
        }
    }

    /** Removes the text from a dropdown created with {@link Dropdown#splitCheckbox()}. */
    public void clearText() {
        if (splitCheckbox) {
            HTMLElement element = Elements.find(button, By.classname(component(dropdown, Classes.toggle, text)));
            failSafeRemoveFromParent(element);
            HTMLElement iconElement = Elements.find(button, By.selector(".fas.fa-caret-down"));
            if (iconElement != null) {
                iconElement.classList.remove(component(dropdown, Classes.toggle, "icon"));
            }
        }
    }

    public void setText(T item, String text) {
        HTMLButtonElement element = itemElement(item);
        if (element != null) {
            element.textContent = text;
        }
    }

    // ------------------------------------------------------ events

    public Dropdown<T> onToggle(Consumer<Boolean> onToggle) {
        ceh.onToggle = onToggle;
        return this;
    }

    public Dropdown<T> onChange(Consumer<Boolean> onChange) {
        this.onChange = onChange;
        return this;
    }

    public Dropdown<T> onSelect(SelectHandler<T> onSelect) {
        this.onSelect = onSelect;
        return this;
    }

    // ------------------------------------------------------ internals

    private HTMLLIElement newItem(T item) {
        HTMLContainerBuilder<HTMLButtonElement> button = button().css(component(dropdown, Classes.menu, Classes.item))
                .attr("tabindex", -1).data(dropdownItem, itemDisplay.itemId(item)).on(click, e -> {
                    ceh.collapse(element(), buttonElement(), menuElement());
                    if (onSelect != null) {
                        onSelect.onSelect(item);
                    }
                });
        itemDisplay.display.accept(button, item);
        return li().attr("role", menuitem).add(button).element();
    }

    private HTMLButtonElement itemElement(T item) {
        String itemId = itemDisplay.itemId(item);
        return Elements.find(menu, By.data(dropdownItem, itemId));
    }
}
