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
package org.patternfly.component;

import org.jboss.elemento.TypedBuilder;
import org.patternfly.handler.CloseHandler;

import elemental2.dom.Element;
import elemental2.dom.Event;

public interface Closeable<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B> {

    B onClose(CloseHandler<B> closeHandler);

    /** Shortcut for {@code close(new Event(""), true)} */
    default void close() {
        close(new Event(""), true);
    }

    /** Shortcut for {@code close(event, true)} */
    default void close(Event event) {
        close(event, true);
    }

    void close(Event event, boolean fireEvent);
}
