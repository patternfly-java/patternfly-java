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
package org.patternfly.core;

import org.jboss.elemento.svg.SVGElement;

import elemental2.dom.Event;
import elemental2.dom.EventListener;
import elemental2.dom.HTMLElement;
import elemental2.webstorage.Storage;
import elemental2.webstorage.WebStorageWindow;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static elemental2.dom.DomGlobal.window;

/**
 * Support for Open UI Automation.
 *
 * @see <a href= "https://ouia.readthedocs.io/">https://ouia.readthedocs.io/</a>
 * @see <a href=
 * "https://www.patternfly.org/developer-resources/open-ui-automation">https://www.patternfly.org/developer-resources/open-ui-automation</a>
 */
public final class Ouia {

    /** Sets {@code data-ouia-component-type} and {@code data-ouia-safe="true"} on the given HTML element. */
    public static void ouia(HTMLElement element, String componentType) {
        if (element != null && componentType != null && isSupported()) {
            element.dataset.set("ouiaComponentType", componentType);
            element.dataset.set("ouiaSafe", "true");
        }
    }

    /** Sets {@code data-ouia-component-id}, {@code data-ouia-component-type}, and {@code data-ouia-safe="true"} on the given HTML element. */
    public static void ouia(HTMLElement element, String componentId, String componentType) {
        if (element != null && componentType != null && isSupported()) {
            if (componentId != null) {
                element.dataset.set("ouiaComponentId", componentId);
            }
            element.dataset.set("ouiaComponentType", componentType);
            element.dataset.set("ouiaSafe", "true");
        }
    }

    /** Sets {@code data-ouia-component-type} and {@code data-ouia-safe="true"} on the given SVG element. */
    public static void ouia(SVGElement element, String componentType) {
        if (element != null && componentType != null && isSupported()) {
            element.dataset.set("ouiaComponentType", componentType);
            element.dataset.set("ouiaSafe", "true");
        }
    }

    /** Sets {@code data-ouia-component-id}, {@code data-ouia-component-type}, and {@code data-ouia-safe="true"} on the given SVG element. */
    public static void ouia(SVGElement element, String componentId, String componentType) {
        if (element != null && componentType != null && isSupported()) {
            if (componentId != null) {
                element.dataset.set("ouiaComponentId", componentId);
            }
            element.dataset.set("ouiaComponentType", componentType);
            element.dataset.set("ouiaSafe", "true");
        }
    }

    /** Sets {@code data-ouia-safe} to the given value on the given HTML element. */
    public static void ouiaSafe(HTMLElement element, boolean safe) {
        if (element != null && isSupported()) {
            element.dataset.set("ouiaSafe", String.valueOf(safe));
        }
    }

    /** Sets {@code data-ouia-safe} to the given value on the given SVG element. */
    public static void ouiaSafe(SVGElement element, boolean safe) {
        if (element != null && isSupported()) {
            element.dataset.set("ouiaSafe", String.valueOf(safe));
        }
    }

    /**
     * Marks the element as unsafe ({@code data-ouia-safe="false"}) and restores it to safe after the CSS transition ends. A
     * fallback timeout ensures the element is marked safe even if no CSS transition is defined.
     */
    public static void ouiaTransition(HTMLElement element) {
        if (element != null && isSupported()) {
            ouiaSafe(element, false);
            double[] guard = {0};
            guard[0] = setTimeout(e -> ouiaSafe(element, true), 300);
            element.addEventListener("transitionend", new EventListener() {
                @Override
                public void handleEvent(Event evt) {
                    clearTimeout(guard[0]);
                    ouiaSafe(element, true);
                    element.removeEventListener("transitionend", this);
                }
            });
        }
    }

    private static boolean isSupported() {
        Storage localStorage = WebStorageWindow.of(window).localStorage;
        if (localStorage != null) {
            return Boolean.parseBoolean(localStorage.getItem("ouia"));
        }
        return false;
    }

    private Ouia() {
    }
}
