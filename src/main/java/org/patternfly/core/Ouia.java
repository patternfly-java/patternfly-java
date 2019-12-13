package org.patternfly.core;

import elemental2.dom.HTMLElement;
import elemental2.webstorage.Storage;
import elemental2.webstorage.WebStorageWindow;

import static elemental2.dom.DomGlobal.window;

/**
 * Support for OUIA tests.
 *
 * @see <a href="https://forum.patternfly.org/t/open-web-ui-design-specification-for-enabling-automation-ouia/154">https://forum.patternfly.org/t/open-web-ui-design-specification-for-enabling-automation-ouia/154</a>
 */
public final class Ouia {

    public static void component(HTMLElement element, String component) {
        component(element, component, null);
    }

    public static void component(HTMLElement element, String component, String id) {
        if (isSupported()) {
            element.dataset.set("ouiaComponentType", component);
            if (id != null) {
                element.dataset.set("ouiaComponentId", id);
            }
        }
    }

    public static void id(HTMLElement element, String id) {
        if (isSupported()) {
            element.dataset.set("ouiaComponentId", id);
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
