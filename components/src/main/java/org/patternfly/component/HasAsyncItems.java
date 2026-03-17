package org.patternfly.component;

import org.patternfly.component.menu.MenuItem;
import org.patternfly.core.AsyncStatus;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;

public interface HasAsyncItems<E extends Element, C extends HasItems<E, C, S>, S extends HasIdentifier<? extends HTMLElement, ?>> {

    default C addItems(AsyncItems<C, S> items) {
        return add(items);
    }

    C add(AsyncItems<C, S> items);

    Promise<Iterable<S>> load();

    Promise<Iterable<S>> reload();

    void reset();

    AsyncStatus status();
}