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
package org.patternfly.componentgroup.theme;

import java.util.function.Function;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.logger.Logger;

import elemental2.dom.EventListener;
import elemental2.dom.MediaQueryList;
import elemental2.dom.MediaQueryListEvent;
import elemental2.webstorage.WebStorageWindow;

import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.window;
import static org.jboss.elemento.EventType.change;

class ThemeManager<E extends Enum<E> & SystemValue> {

    private static final Logger logger = Logger.getLogger(ThemeManager.class.getName());

    private final String storageKey;
    private final String css;
    private final E addClassValue;
    private final MediaQueryList mediaQuery;
    private final Function<E, String> save;
    private final HandlerRegistration handlerRegistration;
    E value;

    ThemeManager(String storageKey, String css, String mediaQuery, E defaultValue, E addClassValue, E mediaQueryValue,
            Function<String, E> load, Function<E, String> save) {
        this.storageKey = storageKey;
        this.css = css;
        this.addClassValue = addClassValue;
        this.save = save;

        // listen for OS/browser changes
        this.mediaQuery = window.matchMedia(mediaQuery);
        EventListener eventListener = event -> {
            if (((MediaQueryListEvent) event).matches) {
                apply(mediaQueryValue);
            } else {
                apply(defaultValue);
            }
        };
        this.mediaQuery.addEventListener(change.name, eventListener);
        this.handlerRegistration = () -> this.mediaQuery.removeEventListener(change.name, eventListener);

        // load from local storage
        String item = WebStorageWindow.of(window).localStorage.getItem(storageKey);
        if (item != null) {
            apply(load.apply(item));
        } else {
            apply(defaultValue);
        }
    }

    void cleanup() {
        if (handlerRegistration != null) {
            handlerRegistration.removeHandler();
        }
    }

    void apply(E value) {
        if (value != null && value != this.value) {
            this.value = value;
            String item = save.apply(this.value);
            if (item != null) {
                WebStorageWindow.of(window).localStorage.setItem(storageKey, item);
            }
            if (this.value.systemValue()) {
                if (mediaQuery.matches) {
                    document.querySelector("html").classList.add(css);
                } else {
                    document.querySelector("html").classList.remove(css);
                }
            } else {
                if (this.value == addClassValue) {
                    document.querySelector("html").classList.add(css);
                } else {
                    document.querySelector("html").classList.remove(css);
                }
            }
        }
    }
}
