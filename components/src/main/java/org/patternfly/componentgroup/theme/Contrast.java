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

enum Contrast implements SystemValue {

    SYSTEM("high-contrast-system", "System") {
        @Override
        public boolean systemValue() {
            return true;
        }
    },
    ON("high-contrast-on", "On"),
    OFF("high-contrast-off", "Off");

    static Contrast fromIdentifier(String identifier) {
        if (SYSTEM.identifier.equals(identifier)) {
            return SYSTEM;
        } else if (ON.identifier.equals(identifier)) {
            return ON;
        } else if (OFF.identifier.equals(identifier)) {
            return OFF;
        } else {
            return SYSTEM;
        }
    }

    final String identifier;
    final String text;

    Contrast(String identifier, String text) {
        this.identifier = identifier;
        this.text = text;
    }

    String identifier() {
        return identifier;
    }
}
