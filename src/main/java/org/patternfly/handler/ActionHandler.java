package org.patternfly.handler;

import elemental2.dom.Event;

@FunctionalInterface
public interface ActionHandler<C> {

    void onAction(Event event, C component);
}
