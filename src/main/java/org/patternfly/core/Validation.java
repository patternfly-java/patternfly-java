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

import java.util.EnumSet;

import org.patternfly.component.ComponentType;

import elemental2.dom.HTMLElement;

public final class Validation {

    public static boolean verifyRange(HTMLElement element, ComponentType componentType, String property, int value, int min,
            int max) {
        return verifyRange(element, componentType.componentName, property, value, min, max);
    }

    public static boolean verifyRange(HTMLElement element, String category, String property, int value, int min, int max) {
        if (value < 1 || value > 12) {
            Logger.unsupported(category, element, "'" + property + "' out of range. " +
                    "Given: " + value + ", allowed [" + min + "," + max + "].");
            return false;
        }
        return true;
    }

    @SafeVarargs
    public static <E extends Enum<E>> boolean verifyEnum(HTMLElement element, ComponentType componentType, String property,
            E value, E firstAllowedValue, E... otherAllowedValues) {
        return verifyEnum(element, componentType.componentName, property, value, firstAllowedValue, otherAllowedValues);
    }

    @SafeVarargs
    public static <E extends Enum<E>> boolean verifyEnum(HTMLElement element, String category, String property, E value,
            E firstAllowedValue, E... otherAllowedValues) {
        EnumSet<E> allowed = EnumSet.of(firstAllowedValue, otherAllowedValues);
        if (!allowed.contains(value)) {
            Logger.unsupported(category, element, "Unsupported value for '" + property + "'. " +
                    "Given: " + value + ", allowed " + allowed + ".");
            return false;
        }
        return true;
    }
}
