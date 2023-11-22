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

import org.patternfly.component.ComponentType;

import static elemental2.dom.DomGlobal.console;

/**
 * Utility methods to classify specific use cases, prefix the log messages with the component name and use a specific log level.
 */
public final class Logger {

    public static void nyi(ComponentType componentType, String message) {
        console.error(format(componentType, message));
    }

    public static void undefined(ComponentType componentType, String message) {
        console.error(format(componentType, message));
    }

    public static void unknown(ComponentType componentType, String message) {
        console.error(format(componentType, message));
    }

    public static void unsupported(ComponentType componentType, String message) {
        console.warn(format(componentType, message));
    }

    private static String format(ComponentType componentType, String message) {
        String prefix = componentType != null ? componentType.componentName + ": " : "";
        return prefix + message;
    }
}
