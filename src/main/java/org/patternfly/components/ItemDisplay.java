package org.patternfly.components;

import java.util.function.BiConsumer;
import java.util.function.Function;

import elemental2.dom.HTMLElement;
import org.jboss.elemento.HtmlContentBuilder;
import org.jboss.elemento.Id;

/** Reusable class for typed components to customize the item ID, string value and display. */
class ItemDisplay<E extends HTMLElement, T> {

    Function<T, String> identifier;
    Function<T, String> asString;
    BiConsumer<HtmlContentBuilder<E>, T> display;

    ItemDisplay() {
        this.identifier = item -> Id.build(String.valueOf(item));
        this.asString = String::valueOf;
        this.display = (element, item) -> element.textContent(asString.apply(item));
    }

    ItemDisplay(Function<T, String> identifier, Function<T, String> asString,
            BiConsumer<HtmlContentBuilder<E>, T> display) {
        this.identifier = identifier;
        this.asString = asString;
        this.display = display;
    }

    String itemId(T item) {
        return Id.build(identifier.apply(item));
    }
}
