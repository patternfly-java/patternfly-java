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

import java.util.function.Consumer;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.EventType;
import org.jboss.elemento.InputElementBuilder;
import org.jboss.elemento.InputType;
import org.patternfly.component.button.Button;

import elemental2.dom.HTMLInputElement;

import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Key.Enter;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.formControl;
import static org.patternfly.layout.PredefinedIcon.search;

@Deprecated
public class Search extends InputGroup {

    // ------------------------------------------------------ factory

    public static Search search() {
        return new Search();
    }

    public static Search search(String placeholder) {
        return new Search(placeholder);
    }

    // ------------------------------------------------------ instance

    private final InputElementBuilder<HTMLInputElement> input;
    private final Button control;
    private HandlerRegistration searchHandler;
    private HandlerRegistration keyupHandler;

    protected Search() {
        this("Search");
    }

    protected Search(String placeholder) {
        super();
        add(input = input(InputType.search).css(component(formControl)).placeholder(placeholder));
        add(control = button(search, placeholder).control());
    }

    // ------------------------------------------------------ api

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

    // ------------------------------------------------------ internal

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
        control.onClick((e, b) -> consumer.accept(input.element().value));
    }
}
