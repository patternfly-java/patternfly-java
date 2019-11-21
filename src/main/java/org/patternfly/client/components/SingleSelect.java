package org.patternfly.client.components;

import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.KeyboardEvent;
import org.jboss.gwt.elemento.core.By;
import org.jboss.gwt.elemento.core.EventType;
import org.jboss.gwt.elemento.core.InputType;
import org.jboss.gwt.elemento.core.Key;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;
import org.patternfly.client.core.Disable;
import org.patternfly.client.core.HasValue;
import org.patternfly.client.core.SelectHandler;
import org.patternfly.client.resources.CSS;
import org.patternfly.client.resources.Constants;

import static elemental2.dom.DomGlobal.console;
import static elemental2.dom.DomGlobal.setTimeout;
import static org.jboss.gwt.elemento.core.Elements.button;
import static org.jboss.gwt.elemento.core.Elements.form;
import static org.jboss.gwt.elemento.core.Elements.input;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.jboss.gwt.elemento.core.EventType.blur;
import static org.jboss.gwt.elemento.core.EventType.click;
import static org.jboss.gwt.elemento.core.EventType.keydown;
import static org.jboss.gwt.elemento.core.EventType.submit;
import static org.patternfly.client.components.Components.icon;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.fas;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.option;
import static org.patternfly.client.resources.Constants.select;
import static org.patternfly.client.resources.Constants.toggle;
import static org.patternfly.client.resources.Constants.*;
import static org.patternfly.client.resources.Dataset.singleSelectFilter;
import static org.patternfly.client.resources.Dataset.singleSelectItem;

/**
 * PatternFly single select component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/select">https://www.patternfly.org/v4/documentation/core/components/select</a>
 */
public class SingleSelect<T> extends BaseComponent<HTMLDivElement, SingleSelect<T>>
        implements HtmlContent<HTMLDivElement, SingleSelect<T>>, Disable<SingleSelect<T>>, HasValue<T> {

    // ------------------------------------------------------ factory methods

    public static <T> SingleSelect<T> single(String text) {
        return new SingleSelect<>(null, text, false);
    }

    public static <T> SingleSelect<T> single(Icon icon, String text) {
        return new SingleSelect<>(icon, text, false);
    }

/*
    NYI
    public static <T> SingleSelect<T> typeahead(String placeholder) {
        return new SingleSelect<>(null, placeholder, true);
    }

    public static <T> SingleSelect<T> typeahead(Icon icon, String placeholder) {
        return new SingleSelect<>(icon, placeholder, true);
    }
*/

    // ------------------------------------------------------ select instance

    private static final HTMLLIElement NO_RESULTS = li().attr(role, presentation)
            .add(button().css(component(select, Constants.menu, item), modifier(disabled))
                    .attr(role, option)
                    .textContent("No results found")).element();

    private final boolean typeahead;
    private final CollapseExpandHandler ceh;
    private final ItemDisplay<HTMLButtonElement, T> itemDisplay;
    private T value;
    private SelectHandler<T> onSelect;
    private Function<T, String> typeaheadFilter;

    private final HTMLButtonElement button;
    private final HTMLElement text;
    private final HTMLInputElement input;
    private final HTMLElement menu;

    SingleSelect(Icon icon, String text, boolean typeahead) {
        super(div().css(component(select)).element(), "Select");
        this.typeahead = typeahead;
        this.ceh = new CollapseExpandHandler();
        this.itemDisplay = new ItemDisplay<>();

        String buttonId = uniqueId(select, Constants.button);
        if (typeahead) {
            HTMLDivElement wrapperElement;
            add(div().css(component(select, toggle), modifier(Constants.typeahead))
                    .add(wrapperElement = div().css(component(select, toggle, wrapper))
                            .add(form()
                                    .on(submit, Event::preventDefault)
                                    .add(input = input(InputType.text)
                                            .css(component(formControl), component(select, toggle, Constants.typeahead))
                                            .placeholder(text)
                                            .autocomplete("off")
                                            .on(keydown, e -> {
                                                console.log("input keydown(" + e.code + ")");
                                                onTypeahead(e, ((HTMLInputElement) e.currentTarget).value);
                                            })
                                            .on(EventType.focus, e -> {
                                                console.log("input focus");
                                                if (!ceh.expanded(element)) {
                                                    ceh.expand(element, buttonElement(), menuElement());
                                                }
                                            })
                                            .on(blur, e -> {
                                                console.log("input blur");
                                                setTimeout((o) -> ceh.collapse(element, buttonElement(), menuElement()),
                                                        222);
                                            }).element())).element())
                    .add(button = (HTMLButtonElement) Button.icon(icon(fas(caretDown)), "Options menu")
                            .css(component(select, toggle, Constants.button))
                            .id(buttonId)
                            .aria(expanded, false_)
                            .aria(hasPopup, listbox)
                            .on(click, e -> ceh.expand(element, buttonElement(), menuElement())).element()));
            if (icon != null) {
                insertFirst(wrapperElement, span().css(component(select, toggle, Constants.icon))
                        .add(icon).element());
            }
            this.text = null;
        } else {
            add(button = button().css(component(select, toggle))
                    .id(buttonId)
                    .aria(expanded, false_)
                    .aria(hasPopup, listbox)
                    .on(click, e -> ceh.expand(element, buttonElement(), menuElement()))
                    .add(div().css(component(select, toggle, wrapper))
                            .add(this.text = span().css(component(select, toggle, Constants.text))
                                    .textContent(text).element()))
                    .add(i().css(fas(caretDown), component(select, toggle, arrow))
                            .aria(hidden, true_)).element());
            if (icon != null) {
                insertBefore(span().css(component(select, toggle, Constants.icon))
                                .add(icon.aria(hidden, true_)).element(),
                        this.text);
            }
            this.input = null;
        }
        add(menu = ul().css(component(select, Constants.menu))
                .hidden(true)
                .aria(labelledBy, buttonId)
                .attr(role, listbox).element());

    }

    @Override
    public SingleSelect<T> that() {
        return this;
    }

    private HTMLElement buttonElement() {
        return button;
    }

    private HTMLElement menuElement() {
        return menu;
    }

    // ------------------------------------------------------ public API

    public SingleSelect<T> add(Iterable<T> items) {
        for (T item : items) {
            add(item);
        }
        return this;
    }

    public SingleSelect<T> add(T[] items) {
        for (T item : items) {
            add(item);
        }
        return this;
    }

    public SingleSelect<T> add(T item) {
        String itemId = itemDisplay.itemId(item);
        HtmlContentBuilder<HTMLButtonElement> button = button()
                .css(component(select, Constants.menu, Constants.item))
                .attr(role, option)
                .data(singleSelectItem, itemId)
                .on(click, e -> {
                    ceh.collapse(element, buttonElement(), menuElement());
                    select(item);
                });
        itemDisplay.display.accept(button, item);
        if (typeahead) {
            String filter = typeaheadFilter != null ? typeaheadFilter.apply(item) : itemDisplay.identifier.apply(item);
            button.data(singleSelectFilter, filter);
        }
        menu.appendChild(li().attr(role, presentation)
                .add(button).element());
        return this;
    }

    public SingleSelect<T> identifier(Function<T, String> identifier) {
        itemDisplay.identifier = identifier;
        return this;
    }

    public SingleSelect<T> display(BiConsumer<HtmlContentBuilder<HTMLButtonElement>, T> display) {
        itemDisplay.display = display;
        return this;
    }

    public SingleSelect<T> typeaheadFilter(Function<T, String> typeaheadFilter) {
        this.typeaheadFilter = typeaheadFilter;
        return this;
    }

    public SingleSelect<T> select(T item) {
        return select(item, true);
    }

    public SingleSelect<T> select(T item, boolean fireOnSelect) {
        value = item;
        String itemId = itemDisplay.itemId(item);
        for (HTMLElement e : findAll(menu, By.data(singleSelectItem))) {
            Element icon = find(e, By.selector(".fas.fa-check"));
            if (itemId.equals(e.dataset.get(singleSelectItem))) {
                e.classList.add(modifier(selected));
                if (icon == null) {
                    e.appendChild(icon(fas(check))
                            .css(component(select, Constants.menu, Constants.item, Constants.icon))
                            .aria(hidden, true_).element());
                }
            } else {
                e.classList.remove(modifier(selected));
                failSafeRemove(e, icon);
            }
        }
        if (typeahead) {
            input.value = itemDisplay.identifier.apply(item);
        } else {
            text.textContent = itemDisplay.identifier.apply(item);
        }

        if (fireOnSelect && onSelect != null) {
            onSelect.onSelect(value);
        }
        return this;
    }

    public SingleSelect<T> up() {
        element.classList.add(CSS.modifier(Constants.top));
        return this;
    }

    @Override
    public SingleSelect<T> disable() {
        button.disabled = true;
        return this;
    }

    @Override
    public SingleSelect<T> enable() {
        button.disabled = false;
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

    @Override
    public T value() {
        return value;
    }

    // ------------------------------------------------------ events

    public SingleSelect<T> onToggle(Consumer<Boolean> onToggle) {
        ceh.onToggle = onToggle;
        return this;
    }

    public SingleSelect<T> onSelect(SelectHandler<T> onSelect) {
        this.onSelect = onSelect;
        return this;
    }

    // ------------------------------------------------------ internals

    private HTMLButtonElement itemElement(T item) {
        String itemId = itemDisplay.itemId(item);
        return find(menu, By.data(singleSelectItem, itemId));
    }

    private void onTypeahead(KeyboardEvent e, String value) {
        if (Key.Escape.match(e)) {
            console.log("key matches escape");
            ceh.collapse(element, buttonElement(), menuElement());
        } else if (Key.Enter.match(e)) {
            console.log("key matches enter");
            if (ceh.expanded(element)) {
                // TODO select first item
                ceh.collapse(element, buttonElement(), menuElement());
            } else {
                ceh.expand(element, buttonElement(), menuElement());
            }
        } else if (Key.ArrowUp.match(e)) {
            console.log("key matches arrow up");
            if (ceh.expanded(element)) {
                // TODO select previous
            }
        } else if (Key.ArrowDown.match(e)) {
            console.log("key matches arrow down");
            if (ceh.expanded(element)) {
                // TODO select next
            }
        } else {
            console.log("key matches anything else");
            if (value != null && value.length() != 0) {
                filter(value);
            }
        }
    }

    private void filter(String text) {
        console.log("filter for '" + text + "'");
        AtomicInteger count = new AtomicInteger();
        for (HTMLElement e : findAll(menu, By.data(singleSelectFilter))) {
            String filter = e.dataset.get(singleSelectFilter);
            if (filter.toLowerCase().contains(text.toLowerCase())) {
                count.incrementAndGet();
                setVisible(((HTMLElement) e.parentNode), true);
            } else {
                setVisible(((HTMLElement) e.parentNode), false);
            }
        }
        if (count.get() == 0) {
            menu.appendChild(NO_RESULTS);
        } else {
            failSafeRemoveFromParent(NO_RESULTS);
        }
    }
}
