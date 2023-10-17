/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.handler;

import elemental2.dom.Event;

@FunctionalInterface
public interface CloseHandler<C> {

    /**
     * Helper method which returns the result of {@link #shouldClose(Event, Object)}, if {@code fireEvent} is {@code true} and a
     * close handler has been defined, otherwise {@code true}.
     */
    static <C> boolean shouldClose(C component, CloseHandler<C> closeHandler, Event event, boolean fireEvent) {
        if (fireEvent && closeHandler != null) {
            return closeHandler.shouldClose(event, component);
        }
        return true;
    }

    /**
     * Helper method which calls {@link #onClose(Event, Object)}, if {@code fireEvent} is {@code true} and a close handler has
     * been defined.
     */
    static <C> void fireEvent(C component, CloseHandler<C> closeHandler, Event event, boolean fireEvent) {
        if (fireEvent && closeHandler != null) {
            closeHandler.onClose(event, component);
        }
    }

    /** Default implementation returns {@code true} */
    default boolean shouldClose(Event event, C component) {
        return true;
    }

    /** Called if {@link #shouldClose(Event, Object)} returned {@code true} */
    void onClose(Event event, C component);
}
