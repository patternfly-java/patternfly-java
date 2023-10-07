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

import java.util.ArrayList;
import java.util.List;
import java.util.function.BiConsumer;
import java.util.function.Function;

import org.gwtproject.event.shared.HandlerRegistration;
import org.gwtproject.event.shared.HandlerRegistrations;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;

import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;

/** Reusable class for data components w/ select checkboxes. */
@Deprecated
class ItemSelect {

    private final HTMLElement root;
    private HandlerRegistration selectItemHandler;

    ItemSelect(HTMLElement root) {
        this.root = root;
    }

    void bindSelectHandler(By selector, Function<HTMLInputElement, String> closestId, BiConsumer<String, Boolean> selection) {
        List<HandlerRegistration> handler = new ArrayList<>();
        for (HTMLElement e : Elements.findAll(root, selector)) {
            handler.add(bind(e, click, evt -> {
                HTMLInputElement checkbox = (HTMLInputElement) e;
                String id = closestId.apply(checkbox);
                if (id != null) {
                    selection.accept(id, checkbox.checked);
                }
            }));
        }

        if (!handler.isEmpty()) {
            selectItemHandler = HandlerRegistrations.compose(handler.toArray(new HandlerRegistration[0]));
        }
    }

    void removeSelectHandler() {
        if (selectItemHandler != null) {
            selectItemHandler.removeHandler();
            selectItemHandler = null;
        }
    }

    void updateSelection(By selector, boolean selected) {
        HTMLInputElement checkbox = Elements.find(root, selector);
        if (checkbox != null) {
            checkbox.checked = selected;
        }
    }
}
