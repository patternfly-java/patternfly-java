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

import elemental2.dom.HTMLElement;
import elemental2.webstorage.Storage;
import elemental2.webstorage.WebStorageWindow;

import static elemental2.dom.DomGlobal.window;

/**
 * Support for Open UI Automation.
 *
 * @see <a href= "https://ouia.readthedocs.io/">https://ouia.readthedocs.io/</a>
 * @see <a href=
 * "https://www.patternfly.org/developer-resources/open-ui-automation">https://www.patternfly.org/developer-resources/open-ui-automation</a>
 */
public final class Ouia {

    public static void ouia(HTMLElement element, String id, String name) {
        if (element != null && name != null && isSupported()) {
            element.dataset.set("ouiaId", id);
            element.dataset.set("ouiaType", name);
            element.dataset.set("ouiaSafe", "true");
        }
    }

    public static void ouia(SVGElement element, String id, String name) {
        if (element != null && name != null && isSupported()) {
            element.dataset.set("ouiaId", id);
            element.dataset.set("ouiaType", name);
            element.dataset.set("ouiaSafe", "true");
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
