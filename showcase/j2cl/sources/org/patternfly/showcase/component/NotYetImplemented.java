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
package org.patternfly.showcase.component;

import org.jboss.elemento.IsElement;

import elemental2.dom.HTMLElement;

import static org.patternfly.component.Severity.warning;
import static org.patternfly.component.alert.Alert.alert;

class NotYetImplemented implements IsElement<HTMLElement> {

    static NotYetImplemented nyi() {
        return new NotYetImplemented();
    }

    private final HTMLElement root;

    NotYetImplemented() {
        this.root = alert(warning, "Not yet implemented").inline().plain().element();
    }

    @Override
    public HTMLElement element() {
        return root;
    }
}
