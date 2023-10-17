package org.patternfly.core;

import org.jboss.elemento.TypedBuilder;
import org.patternfly.handler.CloseHandler;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.MouseEvent;

import static org.jboss.elemento.EventType.click;

public interface Closeable<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B> {

    B onClose(CloseHandler<B> closeHandler);

    /** Shortcut for {@code close(new MouseEvent("click"), true)} */
    default void close() {
        close(new MouseEvent(click.name), true);
    }

    /** Shortcut for {@code close(event, true)} */
    default void close(Event event) {
        close(event, true);
    }

    void close(Event event, boolean fireEvent);
}
