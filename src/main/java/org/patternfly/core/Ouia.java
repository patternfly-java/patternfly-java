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

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;

import elemental2.dom.HTMLElement;
import elemental2.webstorage.Storage;
import elemental2.webstorage.WebStorageWindow;

import static elemental2.dom.DomGlobal.window;

/**
 * Support for Open UI Automation.
 *
 * @see <a href= "https://ouia.readthedocs.io/">https://ouia.readthedocs.io/</a>
 * @see <a href=
 *      "https://www.patternfly.org/developer-resources/open-ui-automation">https://www.patternfly.org/developer-resources/open-ui-automation</a>
 */
public final class Ouia {

    public static void component(HTMLElement element, ComponentType componentType) {
        if (element != null && componentType.componentName != null && isSupported()) {
            component(element, componentType.componentName, Id.unique("ouia", componentType.id));
        }
    }

    public static void component(HTMLElement element, String name, String id) {
        if (element != null && name != null && isSupported()) {
            element.dataset.set("ouiaComponentType", name);
            element.dataset.set("ouiaComponentId", id);
            element.dataset.set("ouiaComponentSafe", "true");
        }
    }

    public static void safe(HTMLElement element, boolean safe) {
        if (element != null && isSupported()) {
            element.dataset.set("ouiaComponentSafe", String.valueOf(safe));
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
