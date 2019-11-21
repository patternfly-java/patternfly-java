package org.patternfly.client.components;

import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;
import org.patternfly.client.core.Disable;
import org.patternfly.client.core.SelectHandler;
import org.patternfly.client.resources.CSS;
import org.patternfly.client.resources.Constants;

import static org.jboss.gwt.elemento.core.Elements.button;
import static org.jboss.gwt.elemento.core.Elements.fieldset;
import static org.jboss.gwt.elemento.core.Elements.form;
import static org.jboss.gwt.elemento.core.Elements.input;
import static org.jboss.gwt.elemento.core.Elements.label;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.jboss.gwt.elemento.core.EventType.click;
import static org.jboss.gwt.elemento.core.InputType.checkbox;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.fieldset;
import static org.patternfly.client.resources.Constants.form;
import static org.patternfly.client.resources.Constants.input;
import static org.patternfly.client.resources.Constants.label;
import static org.patternfly.client.resources.Constants.select;
import static org.patternfly.client.resources.Constants.toggle;
import static org.patternfly.client.resources.Constants.*;
import static org.patternfly.client.resources.Dataset.multiSelectItem;

/**
 * PatternFly multi select component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/select">https://www.patternfly.org/v4/documentation/core/components/select</a>
 */
public class MultiSelect<T> extends BaseComponent<HTMLDivElement, MultiSelect<T>>
        implements HtmlContent<HTMLDivElement, MultiSelect<T>>, Disable<MultiSelect<T>> {

    // ------------------------------------------------------ factory methods

    public static <T> MultiSelect<T> simple(String text) {
        return new MultiSelect<>(text, null, false);
    }

    public static <T> MultiSelect<T> simple(String text, boolean typeahead) {
        return new MultiSelect<>(text, null, true);
    }

    public static <T> MultiSelect<T> checkbox(String text) {
        return new MultiSelect<>(text, null, false);
    }

    public static <T> MultiSelect<T> checkbox(String text, boolean grouped) {
        return null;
    }

    // ------------------------------------------------------ select instance

    private final boolean typeahead;
    private final CollapseExpandHandler ceh;
    private final ItemDisplay<HTMLElement, T> itemDisplay;
    private SelectHandler<T> onSelect;

    private final HTMLButtonElement button;
    private final HTMLElement text;
    private final HTMLElement menu;

    MultiSelect(String text, Icon icon, boolean typeahead) {
        super(div().css(component(select)).element(), "Select");
        this.typeahead = typeahead;
        this.ceh = new CollapseExpandHandler();
        this.itemDisplay = new ItemDisplay<>();

        String labelId = uniqueId(select, label);
        String buttonId = uniqueId(select, Constants.button);
        add(span().id(labelId).hidden(true).textContent(text));
        add(button = button().css(component(select, toggle))
                .id(buttonId)
                .aria(expanded, false_)
                .aria(labelledBy, labelId + " " + buttonId)
                .on(click, e -> ceh.expand(element(), buttonElement(), menuElement()))
                .add(div().css(component(select, toggle, wrapper))
                        .add(this.text = span().css(component(select, toggle, Constants.text))
                                .textContent(text).element()))
                .add(i().css(CSS.fas(caretDown), component(select, toggle, arrow))
                        .aria(hidden, true_)).element());
        add(div().css(component(select, Constants.menu))
                .add(form().css(component(form)).apply(f -> f.noValidate = true)
                        .add(div().css(component(form, group))
                                .add(menu = fieldset().css(component(component(form, fieldset)))
                                        .aria(label, "Select input").element()))));

        if (icon != null) {
            insertBefore(span().css(component(select, toggle, Constants.icon))
                            .add(icon.aria(hidden, true_)).element(),
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
            add(item);
        }
        return this;
    }

    public MultiSelect<T> add(T[] items) {
        for (T item : items) {
            add(item);
        }
        return this;
    }

    public MultiSelect<T> add(T item) {
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

    public MultiSelect<T> identifier(Function<T, String> identifier) {
        itemDisplay.identifier = identifier;
        return this;
    }

    public MultiSelect<T> display(BiConsumer<HtmlContentBuilder<HTMLElement>, T> display) {
        itemDisplay.display = display;
        return this;
    }

    public MultiSelect<T> plain() {
        return this;
    }

    public MultiSelect<T> icon() {
        return this;
    }

    public MultiSelect<T> up() {
        element.classList.add(modifier(top));
        return this;
    }

    public MultiSelect<T> select(T item) {
        return select(item, true);
    }

    public MultiSelect<T> select(T item, boolean fireOnSelect) {
        text.textContent = itemDisplay.identifier.apply(item);
        if (fireOnSelect && onSelect != null) {
            onSelect.onSelect(item);
        }
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
