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

import org.patternfly.handler.ChangeHandler;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLTextAreaElement;

import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.input;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.EventType.keyup;

/**
 * A utility class for handling {@link org.jboss.elemento.EventType#keydown}, {@link org.jboss.elemento.EventType#keyup},
 * {@link org.jboss.elemento.EventType#input}, and {@link org.jboss.elemento.EventType#change} events in components with an HTML
 * input element.
 */
public class KicHandler<C extends BaseComponent<HTMLElement, C>> {

    private final C component;
    private final HTMLInputElement inputElement;
    private final HTMLTextAreaElement textAreaElement;
    private final List<ChangeHandler<C, String>> keydownHandlers;
    private final List<ChangeHandler<C, String>> keyupHandlers;
    private final List<ChangeHandler<C, String>> inputHandlers;
    private final List<ChangeHandler<C, String>> changeHandlers;

    public KicHandler(C component, HTMLInputElement element) {
        this(component, element, null);
    }

    public KicHandler(C component, HTMLTextAreaElement element) {
        this(component, null, element);
    }

    private KicHandler(C component, HTMLInputElement element, HTMLTextAreaElement textAreaElement) {
        this.component = component;
        this.inputElement = element;
        this.textAreaElement = textAreaElement;
        this.keydownHandlers = new ArrayList<>();
        this.keyupHandlers = new ArrayList<>();
        this.inputHandlers = new ArrayList<>();
        this.changeHandlers = new ArrayList<>();
    }

    public C onKeydown(ChangeHandler<C, String> changeHandler) {
        boolean firstHandler = keydownHandlers.isEmpty();
        keydownHandlers.add(changeHandler);
        if (firstHandler) {
            inputElement.addEventListener(keydown.name,
                    e -> keydownHandlers.forEach(ch -> ch.onChange(e, component.that(), value())));
        }
        return component.that();
    }

    public C onKeyup(ChangeHandler<C, String> changeHandler) {
        boolean firstHandler = keyupHandlers.isEmpty();
        keyupHandlers.add(changeHandler);
        if (firstHandler) {
            inputElement.addEventListener(keyup.name,
                    e -> keyupHandlers.forEach(ch -> ch.onChange(e, component.that(), value())));
        }
        return component.that();
    }

    public C onInput(ChangeHandler<C, String> changeHandler) {
        boolean firstHandler = inputHandlers.isEmpty();
        inputHandlers.add(changeHandler);
        if (firstHandler) {
            inputElement.addEventListener(input.name,
                    e -> inputHandlers.forEach(ch -> ch.onChange(e, component.that(), value())));
        }
        return component.that();
    }

    public C onChange(ChangeHandler<C, String> changeHandler) {
        boolean firstHandler = changeHandlers.isEmpty();
        changeHandlers.add(changeHandler);
        if (firstHandler) {
            inputElement.addEventListener(change.name,
                    e -> changeHandlers.forEach(ch -> ch.onChange(e, component.that(), value())));
        }
        return component.that();
    }

    public void fireIfChanged(String value) {
        ChangeHandler.fireIfChanged(component.that(), value(), value, changeHandlers);
    }

    private String value() {
        if (inputElement != null) {
            return inputElement.value;
        } else if (textAreaElement != null) {
            return textAreaElement.value;
        }
        return null;
    }
}
