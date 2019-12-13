package org.patternfly.components;

import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLIElement;
import org.jboss.gwt.elemento.core.By;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;
import org.patternfly.core.Disable;
import org.patternfly.core.SelectHandler;
import org.patternfly.resources.Constants;

import static org.jboss.gwt.elemento.core.Elements.button;
import static org.jboss.gwt.elemento.core.Elements.input;
import static org.jboss.gwt.elemento.core.Elements.label;
import static org.jboss.gwt.elemento.core.Elements.section;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.jboss.gwt.elemento.core.EventType.change;
import static org.jboss.gwt.elemento.core.EventType.click;
import static org.jboss.gwt.elemento.core.InputType.checkbox;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.*;
import static org.patternfly.resources.Dataset.dropdownGroup;
import static org.patternfly.resources.Dataset.dropdownItem;

/**
 * PatternFly dropdown component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/dropdown">https://www.patternfly.org/v4/documentation/core/components/dropdown</a>
 */
// TODO Open with enter, navigation with up/down, select with enter
public class Dropdown<T> extends BaseComponent<HTMLDivElement, Dropdown<T>>
        implements HtmlContent<HTMLDivElement, Dropdown<T>>, Disable<Dropdown<T>> {

    // ------------------------------------------------------ factory methods

    public static <T> Dropdown<T> text(String text) {
        return new Dropdown<>(text, null, false, false);
    }

    public static <T> Dropdown<T> text(String text, boolean grouped) {
        return new Dropdown<>(text, null, grouped, false);
    }

    public static <T> Dropdown<T> kebab() {
        return new Dropdown<>(null, Icon.icon(fas("ellipsis-v")), false, false);
    }

    public static <T> Dropdown<T> kebab(boolean grouped) {
        return new Dropdown<>(null, Icon.icon(fas("ellipsis-v")), grouped, false);
    }

    public static <T> Dropdown<T> icon(Icon icon) {
        return new Dropdown<>(null, icon, false, false);
    }

    public static <T> Dropdown<T> icon(Icon icon, boolean grouped) {
        return new Dropdown<>(null, icon, grouped, false);
    }

    public static <T> Dropdown<T> split() {
        return new Dropdown<>(null, null, false, true);
    }

    public static <T> Dropdown<T> split(boolean grouped) {
        return new Dropdown<>(null, null, grouped, true);
    }

    public static <T> Dropdown<T> split(String text) {
        return new Dropdown<>(text, null, false, true);
    }

    public static <T> Dropdown<T> split(String text, boolean grouped) {
        return new Dropdown<>(text, null, grouped, true);
    }

    // ------------------------------------------------------ instance

    private static final String UNNAMED_GROUP = "org.patternfly.dropdown.unnamedGroup";

    private final boolean grouped;
    private final boolean split;
    private final CollapseExpandHandler ceh;
    private final ItemDisplay<HTMLButtonElement, T> itemDisplay;
    private Consumer<Boolean> onChange;
    private SelectHandler<T> onSelect;

    private final HTMLElement toggle;
    private final HTMLInputElement input;
    private final HTMLButtonElement button;
    private final HTMLElement menu;
    private HTMLElement lastMenu;

    Dropdown(String text, Icon icon, boolean grouped, boolean split) {
        super(div().css(component(dropdown)).element(), "Dropdown");
        this.grouped = grouped;
        this.split = split;
        this.ceh = new CollapseExpandHandler();
        this.itemDisplay = new ItemDisplay<>();

        String buttonId = uniqueId(dropdown, Constants.button);
        HtmlContentBuilder<HTMLButtonElement> buttonBuilder = button()
                .id(buttonId)
                .aria(expanded, false_)
                .aria(hasPopup, true_)
                .on(click, e -> ceh.expand(element(), buttonElement(), menuElement()));

        if (split) {
            String inputId = uniqueId(dropdown, Constants.input);
            toggle = div().css(component(dropdown, Constants.toggle), modifier(splitButton))
                    .add(label().css(component(dropdown, Constants.toggle, check))
                            .apply(l -> l.htmlFor = inputId)
                            .add(div().css(component(check))
                                    .add(input = input(checkbox).css(component(check, Constants.input))
                                            .id(inputId)
                                            .aria(invalid, false_)
                                            .aria(Constants.label, "Select")
                                            .on(change, e -> {
                                                if (onChange != null) {
                                                    onChange.accept(((HTMLInputElement) e.target).checked);
                                                }
                                            }).element())))
                    .add(button = buttonBuilder.css(component(dropdown, Constants.toggle, Constants.button))
                            .aria(Constants.label, "Select")
                            .add(i().css(fas(caretDown)).aria(hidden, true_)).element()).element();

        } else {
            input = null;
            buttonBuilder.css(component(dropdown, Constants.toggle));
            if (text != null) {
                button = buttonBuilder
                        .add(i().css(fas(caretDown), component(dropdown, Constants.toggle, Constants.icon))
                                .aria(hidden, true_)).element();
            } else { // icon != null
                button = buttonBuilder.css(modifier(plain)).aria(Constants.label, "Actions")
                        .add(icon.aria(hidden, true_)).element();
            }
            toggle = button;
        }
        add(toggle);
        setText(text);

        HtmlContentBuilder<?> menuBuilder;
        if (grouped) {
            menuBuilder = div();
        } else {
            menuBuilder = ul();
        }
        menu = menuBuilder.css(component(dropdown, Constants.menu))
                .aria(labelledBy, buttonId)
                .attr(hidden, "")
                .attr(role, Constants.menu).element();
        lastMenu = menu;
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

    // ------------------------------------------------------ public API

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
        return add(item, false);
    }

    public Dropdown<T> add(T item, boolean disabled) {
        if (grouped) {
            add(UNNAMED_GROUP, item, disabled);
        } else {
            menu.appendChild(newItem(item, disabled));
        }
        return this;
    }

    public Dropdown<T> add(String group, T item) {
        return add(group, item, false);
    }

    public Dropdown<T> add(String group, T item, boolean disabled) {
        String groupId = buildId(group);
        By selector = By.element("section").and(By.data(dropdownGroup, groupId)).desc(By.element("ul"));
        lastMenu = find(menu, selector);
        if (lastMenu == null) {
            HtmlContentBuilder<HTMLElement> builder = section().css(component(dropdown, Constants.group))
                    .data(dropdownGroup, groupId);
            if (!UNNAMED_GROUP.equals(group)) {
                builder.add(h(1, group).css(component(dropdown, Constants.group, title)).aria(hidden, true_));
            }
            builder.add(lastMenu = ul().attr(role, none).element());
            menu.appendChild(builder.element());
        }
        lastMenu.appendChild(newItem(item, disabled));
        return this;
    }

    public Dropdown<T> addSeparator() {
        if (lastMenu != null) {
            lastMenu.appendChild(li().attr(role, separator)
                    .add(div().css(component(dropdown, separator))).element());
        }
        return this;
    }

    public Dropdown<T> identifier(Function<T, String> identifier) {
        itemDisplay.identifier = identifier;
        return this;
    }

    public Dropdown<T> display(BiConsumer<HtmlContentBuilder<HTMLButtonElement>, T> display) {
        itemDisplay.display = display;
        return this;
    }

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

    public Dropdown<T> up() {
        element.classList.add(modifier(top));
        return this;
    }

    public Dropdown<T> right() {
        menu.classList.add(modifier(alignRight));
        return this;
    }

    public Dropdown<T> primary() {
        if (!split) {
            button.classList.add(modifier(primary));
        }
        return this;
    }

    @Override
    public Dropdown<T> disable() {
        button.disabled = true;
        if (split) {
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
        if (split) {
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

    public void setText(String text) {
        if (text == null) {
            clearText();
        } else {
            HTMLElement textElement = find(button, By.classname(component(dropdown, Constants.toggle, Constants.text)));
            if (textElement != null) {
                textElement.textContent = text;
            } else {
                insertFirst(button, span().css(component(dropdown, Constants.toggle, Constants.text))
                        .textContent(text).element());
            }
            HTMLElement iconElement = find(button, By.selector(".fas.fa-caret-down"));
            if (iconElement != null) {
                iconElement.classList.add(component(dropdown, Constants.toggle, icon));
            }
        }
    }

    public void clearText() {
        HTMLElement element = find(button, By.classname(component(dropdown, Constants.toggle, text)));
        failSafeRemoveFromParent(element);
        HTMLElement iconElement = find(button, By.selector(".fas.fa-caret-down"));
        if (iconElement != null) {
            iconElement.classList.remove(component(dropdown, Constants.toggle, icon));
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

    private HTMLLIElement newItem(T item, boolean disabled) {
        HtmlContentBuilder<HTMLButtonElement> button = button().css(component(dropdown, Constants.menu, Constants.item))
                .attr(tabindex, _1)
                .data(dropdownItem, itemDisplay.itemId(item))
                .on(click, e -> {
                    ceh.collapse(element(), buttonElement(), menuElement());
                    if (onSelect != null) {
                        onSelect.onSelect(item);
                    }
                });
        itemDisplay.display.accept(button, item);
        HTMLButtonElement buttonElement = button.element();
        buttonElement.disabled = disabled;
        return li().attr(role, menuitem)
                .add(buttonElement).element();
    }

    private HTMLButtonElement itemElement(T item) {
        String itemId = itemDisplay.itemId(item);
        return find(menu, By.data(dropdownItem, itemId));
    }
}
