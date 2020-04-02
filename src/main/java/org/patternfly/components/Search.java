package org.patternfly.components;

import java.util.function.Consumer;

import elemental2.dom.HTMLInputElement;
import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.EventType;
import org.jboss.elemento.InputBuilder;
import org.jboss.elemento.InputType;

import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Key.Enter;
import static org.patternfly.components.Button.control;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.Constants.formControl;
import static org.patternfly.resources.Constants.title;

public class Search extends InputGroup {

    // ------------------------------------------------------ factory methods

    public static Search search() {
        return new Search();
    }

    public static Search search(String placeholder) {
        return new Search(placeholder);
    }

    // ------------------------------------------------------ instance

    private final InputBuilder<HTMLInputElement> input;
    private final Button control;
    private HandlerRegistration searchHandler;
    private HandlerRegistration keyupHandler;

    Search() {
        this("Search");
    }

    Search(String placeholder) {
        super();
        add(input = input(InputType.search).css(component(formControl))
                .placeholder(placeholder));
        add(control = control(icon(fas("search")).aria(title, placeholder)));
    }

    // ------------------------------------------------------ public API

    public void clear() {
        input.element().value = "";
    }

    public Search onFilter(Consumer<String> onFilter) {
        bind(onFilter, false);
        return this;
    }

    public Search onSearch(Consumer<String> onSearch) {
        bind(onSearch, true);
        return this;
    }

    // ------------------------------------------------------ internals

    private void bind(Consumer<String> consumer, boolean onlyOnEnter) {
        if (searchHandler != null) {
            searchHandler.removeHandler();
        }
        if (keyupHandler != null) {
            keyupHandler.removeHandler();
        }

        searchHandler = EventType.bind(input.element(), EventType.search,
                e -> consumer.accept(((HTMLInputElement) e.currentTarget).value));
        keyupHandler = EventType.bind(input.element(), EventType.keyup, e -> {
            if (onlyOnEnter) {
                if (Enter.match(e)) {
                    consumer.accept(((HTMLInputElement) e.currentTarget).value);
                }
            } else {
                consumer.accept(((HTMLInputElement) e.currentTarget).value);
            }
        });
        control.onClick(() -> consumer.accept(input.element().value));
    }
}
