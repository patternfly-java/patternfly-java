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

import java.util.LinkedHashSet;
import java.util.Set;
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

/** Manages a single theme dimension (color, contrast, or theme) by applying CSS classes and persisting the selection to local storage. */
class ThemeManager<E extends Enum<E> & SystemValue> {

    private static final Logger logger = Logger.getLogger(ThemeManager.class.getName());

    private final String storageKey;
    private final Set<String> managedClasses;
    private final Function<E, String> cssMapping;
    private final MediaQueryList mediaQuery;
    private final E mediaQueryValue;
    private final Function<E, String> save;
    private final HandlerRegistration handlerRegistration;
    E value;

    ThemeManager(String storageKey, Function<E, String> cssMapping, String mediaQuery,
            E defaultValue, E mediaQueryValue,
            Function<String, E> load, Function<E, String> save,
            E[] allValues) {
        this.storageKey = storageKey;
        this.cssMapping = cssMapping;
        this.mediaQueryValue = mediaQueryValue;
        this.save = save;

        this.managedClasses = new LinkedHashSet<>();
        for (E val : allValues) {
            String css = cssMapping.apply(val);
            if (css != null) {
                managedClasses.add(css);
            }
        }

        this.mediaQuery = window.matchMedia(mediaQuery);
        EventListener eventListener = event -> {
            if (value != null && value.systemValue()) {
                applySystemPreference(((MediaQueryListEvent) event).matches);
            }
        };
        this.mediaQuery.addEventListener(change.name, eventListener);
        this.handlerRegistration = () -> this.mediaQuery.removeEventListener(change.name, eventListener);

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
                applySystemPreference(mediaQuery.matches);
            } else {
                removeAllManagedClasses();
                String css = cssMapping.apply(this.value);
                if (css != null) {
                    document.querySelector("html").classList.add(css);
                }
            }
        }
    }

    private void applySystemPreference(boolean matches) {
        removeAllManagedClasses();
        if (matches) {
            String css = cssMapping.apply(mediaQueryValue);
            if (css != null) {
                document.querySelector("html").classList.add(css);
            }
        }
    }

    private void removeAllManagedClasses() {
        for (String css : managedClasses) {
            document.querySelector("html").classList.remove(css);
        }
    }
}
