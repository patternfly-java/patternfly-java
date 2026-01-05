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
package org.patternfly.component.wizard;

import java.util.HashMap;
import java.util.Map;

import org.patternfly.core.ComponentContext;

import elemental2.dom.HTMLElement;

public class WizardContext implements ComponentContext<HTMLElement, WizardContext> {

    private final Wizard wizard;
    private final Map<String, Object> data;

    WizardContext(Wizard wizard) {
        this.wizard = wizard;
        this.data = new HashMap<>();
    }

    @Override
    public boolean has(String key) {
        return data.containsKey(key);
    }

    @SuppressWarnings("unchecked")
    public <T> T get(String key) {
        if (data.containsKey(key)) {
            return (T) data.get(key);
        }
        return null;
    }

    @Override
    public <T> WizardContext store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public HTMLElement element() {
        return wizard.element();
    }

    @Override
    public WizardContext that() {
        return this;
    }
}
