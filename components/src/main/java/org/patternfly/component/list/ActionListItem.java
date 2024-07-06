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
package org.patternfly.component.list;

import java.util.HashMap;
import java.util.Map;

import org.patternfly.core.DataHolder;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.actionList;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.item;

public class ActionListItem extends ActionListSubComponent<HTMLDivElement, ActionListItem>
        implements DataHolder<HTMLDivElement, ActionListItem> {

    // ------------------------------------------------------ factory

    public static ActionListItem actionListItem() {
        return new ActionListItem();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ali";
    private final Map<String, Object> data;

    ActionListItem() {
        super(SUB_COMPONENT_NAME, div().css(component(actionList, item)).element());
        this.data = new HashMap<>();
    }

    // ------------------------------------------------------ builder

    @Override
    public <T> ActionListItem store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public ActionListItem that() {
        return this;
    }

    // ------------------------------------------------------ api

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
}
