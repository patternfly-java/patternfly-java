package org.patternfly.components;

import java.util.Set;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.jboss.elemento.HtmlContent;
import org.jboss.elemento.HtmlContentBuilder;
import org.patternfly.core.Disable;
import org.patternfly.core.HasValues;
import org.patternfly.core.SelectHandler;
import org.patternfly.resources.CSS;
import org.patternfly.resources.Constants;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.*;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.InputType.checkbox;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.input;
import static org.patternfly.resources.Constants.label;
import static org.patternfly.resources.Constants.select;
import static org.patternfly.resources.Constants.toggle;
import static org.patternfly.resources.Constants.*;
import static org.patternfly.resources.Dataset.multiSelectItem;

/**
 * PatternFly multi select component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/select">https://www.patternfly.org/v4/documentation/core/components/select</a>
 */
// TODO Use static inner class Group instead of add(String group, T item)
public class MultiSelect<T> extends BaseComponent<HTMLDivElement, MultiSelect<T>>
        implements HtmlContent<HTMLDivElement, MultiSelect<T>>, Disable<MultiSelect<T>>, HasValues<T> {

    // ------------------------------------------------------ factory methods

    public static <T> MultiSelect<T> multi(String text) {
        return new MultiSelect<>(null, text, false);
    }

    public static <T> MultiSelect<T> multi(Icon icon, String text) {
        return new MultiSelect<>(icon, text, true);
    }

/*
    NYI
    public static <T>MultiSelect<T> typeahead(String placeholder) {
        return new MultiSelect<>(null, placeholder, true);
    }

    public static <T> MultiSelect<T> typeahead(Icon icon, String placeholder) {
        return new MultiSelect<>(icon, placeholder, true);
    }
*/

    // ------------------------------------------------------ select instance

    private final boolean typeahead;
    private final CollapseExpandHandler ceh;
    private final ItemDisplay<HTMLElement, T> itemDisplay;
    private final HTMLButtonElement button;
    private final HTMLElement text;
    private final HTMLElement menu;
    private SelectHandler<T> onSelect;

    MultiSelect(Icon icon, String text, boolean typeahead) {
        super(div().css(component(select)).element(), "Select");
        this.typeahead = typeahead;
        this.ceh = new CollapseExpandHandler();
        this.itemDisplay = new ItemDisplay<>();

        String buttonId = uniqueId(select, Constants.button);
        add(button = button().css(component(select, toggle))
                .id(buttonId)
                .aria(expanded, false_)
                .aria(labelledBy, buttonId)
                .on(click, e -> ceh.expand(element(), buttonElement(), menuElement()))
                .add(div().css(component(select, toggle, wrapper))
                        .add(this.text = span().css(component(select, toggle, Constants.text))
                                .textContent(text).element()))
                .add(i().css(CSS.fas(caretDown), component(select, toggle, arrow))
                        .aria(hidden, true_)).element());
        add(menu = div().css(component(select, Constants.menu)).hidden(true).element());

        if (icon != null) {
            insertBefore(span().css(component(select, toggle, Constants.icon))
                    .add(icon.aria(hidden, true_)).element(), this.text);
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
        HtmlContentBuilder<HTMLElement> span = span().css(component(check, label));
        itemDisplay.display.accept(span, item);

        menu.appendChild(label().css(component(check), component(select, Constants.menu, Constants.item))
                .add(input(checkbox).css(component(check, input))
                        .data(multiSelectItem, itemDisplay.itemId(item))
                        .on(click, e -> {
                            ceh.collapse(element(), buttonElement(), menuElement());
                            select(item);
                        }))
                .add(span().css(component(check, label)).textContent(Constants.text)).element());
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

    public MultiSelect<T> display(BiConsumer<HtmlContentBuilder<HTMLElement>, T> display) {
        itemDisplay.display = display;
        return this;
    }

    // ------------------------------------------------------ modifier

    public MultiSelect<T> up() {
        element.classList.add(modifier(top));
        return this;
    }

    @Override
    public MultiSelect<T> disable() {
        button.disabled = true;
        return this;
    }

    @Override
    public MultiSelect<T> enable() {
        button.disabled = false;
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
