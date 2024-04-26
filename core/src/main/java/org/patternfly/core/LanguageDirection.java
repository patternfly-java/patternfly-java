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

import org.jboss.elemento.logger.Logger;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.DomGlobal.window;

public enum LanguageDirection {

    ltr,

    rtl;

    private static final Logger logger = Logger.getLogger(LanguageDirection.class.getName());

    public static LanguageDirection languageDirection(HTMLElement element) {
        return languageDirection(element, ltr);
    }

    public static LanguageDirection languageDirection(HTMLElement element, LanguageDirection defaultValue) {
        LanguageDirection result = defaultValue;
        if (element != null) {
            String direction = window.getComputedStyle(element).getPropertyValue("direction");
            try {
                result = LanguageDirection.valueOf(direction);
            } catch (IllegalArgumentException e) {
                logger.error("Unable to get language direction from %o. Fall back to '%s'", element, defaultValue.name());
            }
        }
        return result;
    }
}
