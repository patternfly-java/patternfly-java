package org.patternfly.client.components;

import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.By;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;
import org.patternfly.client.core.Disable;
import org.patternfly.client.core.HasValue;
import org.patternfly.client.core.SelectHandler;
import org.patternfly.client.resources.Constants;

import static org.jboss.gwt.elemento.core.Elements.button;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.jboss.gwt.elemento.core.EventType.click;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.fas;
import static org.patternfly.client.resources.Constants.input;
import static org.patternfly.client.resources.Constants.label;
import static org.patternfly.client.resources.Constants.toggle;
import static org.patternfly.client.resources.Constants.*;
import static org.patternfly.client.resources.Dataset.contextSelectorItem;

/**
 * PatternFly context selector component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/contextselector">https://www.patternfly.org/v4/documentation/core/components/contextselector</a>
 */
public class ContextSelector<T> extends BaseComponent<HTMLDivElement, ContextSelector<T>>
        implements HtmlContent<HTMLDivElement, ContextSelector<T>>, Disable<ContextSelector<T>>, HasValue<T> {

    private final CollapseExpandHandler ceh;
    private final ItemDisplay<HTMLButtonElement, T> itemDisplay;
    private T value;
    private SelectHandler<T> onSelect;

    private final HTMLElement text;
    private final HTMLButtonElement button;
    private final InputGroup.Search search;
    private final HTMLElement menu;
    private final HTMLElement ul;

    ContextSelector(String text) {
        super(div().css(component(contextSelector)).element(), "ContextSelector");
        this.ceh = new CollapseExpandHandler();
        this.itemDisplay = new ItemDisplay<>();

        String labelId = uniqueId(contextSelector, label);
        String buttonId = uniqueId(contextSelector, Constants.button);

        add(span().id(labelId).hidden(true).textContent(text));
        add(button = button().css(component(contextSelector, toggle))
                .id(buttonId)
                .aria(expanded, false_)
                .aria(labelledBy, labelId + " " + buttonId)
                .on(click, e -> ceh.expand(element(), buttonElement(), menuElement()))
                .add(this.text = span().css(component(contextSelector, toggle, Constants.text))
                        .textContent("Please select").element())
                .add(i().css(fas(caretDown), component(contextSelector, toggle, icon))
                        .aria(hidden, true_)).element());
        add(menu = div().css(component(contextSelector, Constants.menu))
                .attr(hidden, "")
                .add(div().css(component(contextSelector, Constants.menu, input))
                        .add(search = new InputGroup.Search("Search").onFilter(this::filter)))
                .add(ul = ul().css(component(contextSelector, Constants.menu, list))
                        .attr(role, Constants.menu).element()).element());
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
        HtmlContentBuilder<HTMLButtonElement> button = button()
                .css(component(contextSelector, Constants.menu, list, Constants.item))
                .data(contextSelectorItem, itemDisplay.itemId(item))
                .on(click, e -> {
                    ceh.collapse(element(), buttonElement(), menuElement());
                    select(item);
                });
        itemDisplay.display.accept(button, item);
        ul.appendChild(li().attr(role, none)
                .add(button).element());
        return this;
    }

    public ContextSelector<T> identifier(Function<T, String> identifier) {
        itemDisplay.identifier = identifier;
        return this;
    }

    public ContextSelector<T> display(BiConsumer<HtmlContentBuilder<HTMLButtonElement>, T> display) {
        itemDisplay.display = display;
        return this;
    }

    public ContextSelector<T> select(T item) {
        return select(item, true);
    }

    public ContextSelector<T> select(T item, boolean fireOnSelect) {
        value = item;
        text.textContent = itemDisplay.identifier.apply(item);
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
        for (HTMLElement e : findAll(menu,
                By.element("button").and(By.classname(component(contextSelector, Constants.menu, list, item))))) {
            HTMLElement parent = (HTMLElement) e.parentNode;
            setVisible(parent, e.textContent.toLowerCase().contains(value.toLowerCase()));
        }
    }

    private void clearFilter() {
        search.clear();
        for (HTMLElement e : findAll(menu,
                By.element("button").and(By.classname(component(contextSelector, Constants.menu, list, item))))) {
            HTMLElement parent = (HTMLElement) e.parentNode;
            setVisible(parent, true);
        }
    }
}
