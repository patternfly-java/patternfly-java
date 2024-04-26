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

import org.jboss.elemento.logger.Logger;

import elemental2.dom.Element;

import static java.util.stream.Collectors.joining;

public final class Validation {

    private static final Logger logger = Logger.getLogger(Validation.class.getName());

    public static boolean verifyRange(String category, Element element, String property, int value, int min, int max) {
        if (value < 1 || value > 12) {
            logger.warn("'%s' in element %o out of range. Given: %d, allowed [%d,%d].", property, element, value, min, max);
            return false;
        }
        return true;
    }

    @SafeVarargs
    public static <E extends Enum<E>> boolean verifyEnum(String category, Element element, String property, E value,
            E firstAllowedValue, E... otherAllowedValues) {
        EnumSet<E> allowed = EnumSet.of(firstAllowedValue, otherAllowedValues);
        if (!allowed.contains(value)) {
            logger.warn("Unsupported value for '%s' in element %o. Given: %s, allowed $s.",
                    property, element, value.name(), allowed.stream().map(Enum::name).collect(joining()));
            return false;
        }
        return true;
    }
}
