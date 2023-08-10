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
import java.util.Iterator;
import java.util.List;
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
import org.patternfly.core.SelectHandler;
import org.patternfly.resources.Constants;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLHeadingElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.*;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.InputType.checkbox;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.*;
import static org.patternfly.resources.Dataset.dropdownGroup;
import static org.patternfly.resources.Dataset.dropdownItem;

/**
 * PatternFly dropdown component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/dropdown">https://www.patternfly.org/v4/documentation/core/components/dropdown</a>
 */
// TODO Open with enter, navigation with up/down, select with enter, close with esc
public class GroupedDropdown<T> extends BaseComponent<HTMLDivElement, GroupedDropdown<T>>
        implements HtmlContent<HTMLDivElement, GroupedDropdown<T>>, Disable<GroupedDropdown<T>> {

    // ------------------------------------------------------ factory methods

    public static <T> GroupedDropdown<T> text(String text) {
        return new GroupedDropdown<>(text, null, false, false);
    }

    public static <T> GroupedDropdown<T> kebab() {
        return new GroupedDropdown<>(null, Icon.icon(fas("ellipsis-v")), false, false);
    }

    public static <T> GroupedDropdown<T> icon(Icon icon) {
        return new GroupedDropdown<>(null, icon, false, false);
    }

    public static <T> GroupedDropdown<T> splitCheckbox() {
        return new GroupedDropdown<>(null, null, true, false);
    }

    public static <T> GroupedDropdown<T> splitCheckbox(String text) {
        return new GroupedDropdown<>(text, null, true, false);
    }

    public static <T> GroupedDropdown<T> splitAction(Icon icon) {
        return new GroupedDropdown<>(null, null, false, true);
    }

    public static <T> GroupedDropdown<T> splitAction(String text) {
        return new GroupedDropdown<>(text, null, false, true);
    }

    public static <T> Group<T> group(String text) {
        return new GroupedDropdown.Group<>(text);
    }

    // ------------------------------------------------------ instance

    private static final String UNNAMED_GROUP_ID = "unnamed-group";
    private static final By UNNAMED_GROUP_SELECTOR = By.data(dropdownGroup, "unnamedGroup");

    private final boolean splitCheckbox;
    private final boolean splitAction;
    private final String buttonId;
    private final List<T> backupItems;
    private final CollapseExpandHandler ceh;
    private final ItemDisplay<HTMLButtonElement, T> itemDisplay;
    private final HTMLElement toggle;
    private final HTMLInputElement input;
    private final HTMLButtonElement button;

    private boolean grouped;
    private HTMLElement menu;
    private Consumer<Boolean> onChange;
    private SelectHandler<T> onSelect;

    protected GroupedDropdown(String text, Icon icon, boolean splitCheckbox, boolean splitAction) {
        super(div().css(component(dropdown)).element(), "Dropdown");
        this.splitCheckbox = splitCheckbox;
        this.splitAction = splitAction;
        this.buttonId = Id.unique(dropdown, Constants.button);
        this.backupItems = new ArrayList<>();
        this.ceh = new CollapseExpandHandler();
        this.itemDisplay = new ItemDisplay<>();

        HtmlContentBuilder<HTMLButtonElement> buttonBuilder = button().id(buttonId).aria(expanded, false).aria(hasPopup, true)
                .on(click, e -> ceh.expand(element(), buttonElement(), menuElement()));

        if (splitCheckbox || splitAction) {
            String inputId = Id.unique(dropdown, Constants.input);
            toggle = div().css(component(dropdown, Constants.toggle), modifier(splitButton))
                    .add(label().css(component(dropdown, Constants.toggle, check)).apply(l -> l.htmlFor = inputId)
                            .add(div().css(component(check)).add(input = input(checkbox).css(component(check, Constants.input))
                                    .id(inputId).aria(invalid, false).aria(Constants.label, "Select").on(change, e -> {
                                        if (onChange != null) {
                                            onChange.accept(((HTMLInputElement) e.target).checked);
                                        }
                                    }).element())))
                    .add(button = buttonBuilder.css(component(dropdown, Constants.toggle, Constants.button))
                            .aria(Constants.label, "Select").add(i().css(fas(caretDown)).aria(hidden, true)).element())
                    .element();

        } else {
            input = null;
            buttonBuilder.css(component(dropdown, Constants.toggle));
            if (text != null) {
                button = buttonBuilder
                        .add(i().css(fas(caretDown), component(dropdown, Constants.toggle, Constants.icon)).aria(hidden, true))
                        .element();
            } else { // icon != null
                button = buttonBuilder.css(modifier(plain)).aria(Constants.label, "Actions").add(icon.aria(hidden, true))
                        .element();
            }
            toggle = button;
        }
        add(toggle);
        setText(text);

        // assume an ungrouped dropdown
        grouped = false;
        menu = ul().css(component(dropdown, Constants.menu)).aria(labelledBy, buttonId).attr(role, Constants.menu).hidden(true)
                .element();
        add(menu);
    }

    @Override
    public GroupedDropdown<T> that() {
        return this;
    }

    private HTMLElement buttonElement() {
        return button;
    }

    private HTMLElement menuElement() {
        return menu;
    }

    // ------------------------------------------------------ add items, groups and separators

    public GroupedDropdown<T> add(Iterable<T> items) {
        for (T item : items) {
            add(item);
        }
        return this;
    }

    public GroupedDropdown<T> add(T[] items) {
        for (T item : items) {
            add(item);
        }
        return this;
    }

    public GroupedDropdown<T> add(T item) {
        if (grouped) {
            unnamedGroup().add(item);
        } else {
            backupItems.add(item);
            menu.appendChild(newItem(item));
        }
        return this;
    }

    public GroupedDropdown<T> addSeparator() {
        if (grouped) {
            unnamedGroup().addSeparator();
        } else {
            menu.appendChild(li().attr(role, separator).add(div().css(component(dropdown, separator))).element());
        }
        return this;
    }

    public GroupedDropdown<T> add(Group<T> group) {
        if (!grouped) {
            // this is our first group
            // 1. clear the dropdown
            failSafeRemoveFromParent(menu);
            // 2. switch menu from <ul/> to <div/>
            add(menu = div().css(component(dropdown, Constants.menu)).aria(labelledBy, buttonId).attr(role, Constants.menu)
                    .hidden(true).element());
            // 3. add the existing items to the unnamed group
            if (!backupItems.isEmpty()) {
                unnamedGroup().add(backupItems);
                backupItems.clear();
            }
            // mark as grouped.
            grouped = true;
        }
        menu.appendChild(group.element());
        group.playback(this);
        return this;
    }

    public Group<T> unnamedGroup() {
        HTMLElement section = Elements.find(menu, By.data(dropdownGroup, UNNAMED_GROUP_ID));
        if (section == null) {
            Group<T> unnamed = new Group<>(this);
            menu.appendChild(unnamed.element());
            return unnamed;
        } else {
            return new Group<>(this, section);
        }
    }

    public Group<T> getGroup(String name) {
        HTMLElement section = Elements.find(menu, By.data(dropdownGroup, Id.build(name)));
        if (section != null) {
            return new Group<>(this, section);
        }
        return unnamedGroup();
    }

    // ------------------------------------------------------ select and update items

    public GroupedDropdown<T> select(T item) {
        return select(item, true);
    }

    public GroupedDropdown<T> select(T item, boolean fireEvent) {
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

    public GroupedDropdown<T> identifier(Function<T, String> identifier) {
        itemDisplay.identifier = identifier;
        return this;
    }

    public GroupedDropdown<T> asString(Function<T, String> asString) {
        itemDisplay.asString = asString;
        return this;
    }

    public GroupedDropdown<T> display(BiConsumer<HtmlContentBuilder<HTMLButtonElement>, T> display) {
        itemDisplay.display = display;
        return this;
    }

    // ------------------------------------------------------ split checkbox

    public GroupedDropdown<T> check(boolean value) {
        return check(value, true);
    }

    public GroupedDropdown<T> check(boolean value, boolean fireEvent) {
        if (input != null) {
            input.checked = value;
        }
        if (fireEvent && onChange != null) {
            onChange.accept(value);
        }
        return this;
    }

    public GroupedDropdown<T> indeterminate(boolean value) {
        if (input != null) {
            input.indeterminate = value;
        }
        return this;
    }

    // ------------------------------------------------------ modifiers

    public GroupedDropdown<T> up() {
        element.classList.add(modifier(top));
        return this;
    }

    public GroupedDropdown<T> right() {
        menu.classList.add(modifier(alignRight));
        return this;
    }

    public GroupedDropdown<T> primary() {
        if (!(splitCheckbox || splitAction)) {
            button.classList.add(modifier(primary));
        }
        return this;
    }

    @Override
    public GroupedDropdown<T> disable() {
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
    public GroupedDropdown<T> enable() {
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
                    By.classname(component(dropdown, Constants.toggle, Constants.text)));
            if (textElement != null) {
                textElement.textContent = text;
            } else {
                insertFirst(button,
                        span().css(component(dropdown, Constants.toggle, Constants.text)).textContent(text).element());
            }
            HTMLElement iconElement = Elements.find(button, By.selector(".fas.fa-caret-down"));
            if (iconElement != null) {
                iconElement.classList.add(component(dropdown, Constants.toggle, icon));
            }
        }
    }

    /** Removes the text from a dropdown created with {@link GroupedDropdown#splitCheckbox()}. */
    public void clearText() {
        if (splitCheckbox) {
            HTMLElement element = Elements.find(button, By.classname(component(dropdown, Constants.toggle, text)));
            failSafeRemoveFromParent(element);
            HTMLElement iconElement = Elements.find(button, By.selector(".fas.fa-caret-down"));
            if (iconElement != null) {
                iconElement.classList.remove(component(dropdown, Constants.toggle, icon));
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

    public GroupedDropdown<T> onToggle(Consumer<Boolean> onToggle) {
        ceh.onToggle = onToggle;
        return this;
    }

    public GroupedDropdown<T> onChange(Consumer<Boolean> onChange) {
        this.onChange = onChange;
        return this;
    }

    public GroupedDropdown<T> onSelect(SelectHandler<T> onSelect) {
        this.onSelect = onSelect;
        return this;
    }

    // ------------------------------------------------------ internals

    private HTMLLIElement newItem(T item) {
        HtmlContentBuilder<HTMLButtonElement> button = button().css(component(dropdown, Constants.menu, Constants.item))
                .attr(tabindex, -1).data(dropdownItem, itemDisplay.itemId(item)).on(click, e -> {
                    ceh.collapse(element(), buttonElement(), menuElement());
                    if (onSelect != null) {
                        onSelect.onSelect(item);
                    }
                });
        itemDisplay.display.accept(button, item);
        return li().attr(role, menuitem).add(button).element();
    }

    private HTMLButtonElement itemElement(T item) {
        String itemId = itemDisplay.itemId(item);
        return Elements.find(menu, By.data(dropdownItem, itemId));
    }

    // ------------------------------------------------------ inner classes

    public static class Group<T> extends BaseComponent<HTMLElement, Group<T>>
            implements HtmlContent<HTMLElement, Group<T>>, Disable<Group<T>> {

        private final GroupedDropdown<T> dropdown;
        private final List<Consumer<GroupedDropdown<T>>> recorder;
        private final HTMLHeadingElement header;
        private final HTMLUListElement menu;

        protected Group(String text) {
            super(section().css(component(Constants.dropdown, group)).data(dropdownGroup, Id.build(text)).element(),
                    "DropdownGroup");
            this.dropdown = null;
            this.recorder = new ArrayList<>();
            add(header = h(1, text).css(component(Constants.dropdown, group, title)).aria(hidden, true).element());
            add(menu = ul().attr(role, none).element());
        }

        protected Group(GroupedDropdown<T> dropdown) {
            super(section().css(component(Constants.dropdown, group)).data(dropdownGroup, UNNAMED_GROUP_ID).element(),
                    "DropdownGroup");
            this.dropdown = dropdown;
            this.recorder = null;
            this.header = null;
            add(menu = ul().attr(role, none).element());
        }

        protected Group(GroupedDropdown<T> dropdown, HTMLElement section) {
            super(section, "DropdownGroup");
            this.dropdown = dropdown;
            this.recorder = null;
            header = find(By.element("h1"));
            menu = find(By.element("ul"));
        }

        private void playback(GroupedDropdown<T> dropdown) {
            if (recorder != null) {
                for (Iterator<Consumer<GroupedDropdown<T>>> iterator = recorder.iterator(); iterator.hasNext();) {
                    Consumer<GroupedDropdown<T>> consumer = iterator.next();
                    consumer.accept(dropdown);
                    iterator.remove();
                }
            }
        }

        @Override
        public Group<T> that() {
            return this;
        }

        // ------------------------------------------------------ add items and separators

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
            if (dropdown != null) {
                menu.appendChild(newItem(dropdown, item));
            } else if (recorder != null) {
                recorder.add(dd -> menu.appendChild(newItem(dd, item)));
            }
            return this;
        }

        public Group<T> addSeparator() {
            if (dropdown != null) {
                menu.appendChild(li().attr(role, separator).add(div().css(component(Constants.dropdown, separator))).element());
            } else if (recorder != null) {
                recorder.add(dd -> menu.appendChild(
                        li().attr(role, separator).add(div().css(component(Constants.dropdown, separator))).element()));
            }
            return this;
        }

        // ------------------------------------------------------ select and update items

        public Group<T> select(T item) {
            return select(item, true);
        }

        public Group<T> select(T item, boolean fireEvent) {
            if (dropdown != null) {
                if (fireEvent && dropdown.onSelect != null) {
                    dropdown.onSelect.onSelect(item);
                }
            }
            return this;
        }

        public void update(T item) {
            if (dropdown != null) {
                HTMLButtonElement element = itemElement(item);
                dropdown.itemDisplay.display.accept(button(element), item);
            }
        }

        // ------------------------------------------------------ modifiers

        @Override
        public Group<T> disable() {
            for (HTMLElement element : Elements.findAll(menu, By.data(dropdownItem))) {
                HTMLButtonElement button = (HTMLButtonElement) element;
                button.disabled = true;
            }
            return this;
        }

        @Override
        public Group<T> enable() {
            for (HTMLElement element : Elements.findAll(menu, By.data(dropdownItem))) {
                HTMLButtonElement button = (HTMLButtonElement) element;
                button.disabled = false;
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
            if (header != null) {
                header.textContent = text;
            }
        }

        public void setText(T item, String text) {
            HTMLButtonElement element = itemElement(item);
            if (element != null) {
                element.textContent = text;
            }
        }

        // ------------------------------------------------------ internals

        private HTMLLIElement newItem(GroupedDropdown<T> dd, T item) {
            HtmlContentBuilder<HTMLButtonElement> button = button()
                    .css(component(Constants.dropdown, Constants.menu, Constants.item)).attr(tabindex, -1)
                    .data(dropdownItem, dd.itemDisplay.itemId(item)).on(click, e -> {
                        dd.ceh.collapse(dd.element(), dd.buttonElement(), dd.menuElement());
                        if (dd.onSelect != null) {
                            dd.onSelect.onSelect(item);
                        }
                    });
            dd.itemDisplay.display.accept(button, item);
            return li().attr(role, menuitem).add(button).element();
        }

        private HTMLButtonElement itemElement(T item) {
            if (dropdown != null) {
                String itemId = dropdown.itemDisplay.itemId(item);
                return Elements.find(menu, By.data(dropdownItem, itemId));
            }
            return null;
        }
    }
}
