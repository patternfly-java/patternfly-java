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

import org.jboss.elemento.Elements;

import elemental2.dom.Element;

import static elemental2.dom.DomGlobal.console;

/**
 * Utility methods to classify specific use cases, prefix the log messages with the component name and use a specific log
 * level.
 */
public final class Logger {

    public static void debug(String category, String message) {
        console.debug(format(category, null, message));
    }

    public static void wrong(String category, Element element, String message) {
        console.warn(format(category, element, message));
    }

    public static void missing(String category, Element element, String message) {
        console.warn(format(category, element, message));
    }

    public static void nyi(String category, Element element, String message) {
        console.error(format(category, element, message));
    }

    public static void undefined(String category, Element element, String message) {
        console.error(format(category, element, message));
    }

    public static void unknown(String category, Element element, String message) {
        console.error(format(category, element, message));
    }

    public static void unsupported(String category, Element element, String message) {
        console.warn(format(category, element, message));
    }

    private static String format(String prefix, Element element, String message) {
        String log = prefix + ": " + message;
        if (element != null) {
            log += "\nElement: " + Elements.toString(element);
        }
        return log;
    }
}
