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

/**
 * Handler called when an overlay's visibility changes.
 *
 * @see org.patternfly.overlay.Overlay
 */
@FunctionalInterface
public interface OverlayHandler {

    /**
     * Called when the overlay is shown or hidden.
     *
     * @param event the event that triggered the visibility change
     * @param open {@code true} if the overlay was shown, {@code false} if it was hidden
     */
    void handle(Event event, boolean open);
}