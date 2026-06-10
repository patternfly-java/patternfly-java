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
package org.patternfly.component.template;

import java.util.HashMap;
import java.util.Map;

import org.patternfly.component.HasIdentifier;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.handler.ComponentHandler;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.style.Classes._template;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.modifier;

/** A selectable item within a {@link Template} component. */
public class TemplateItem extends TemplateSubComponent<HTMLElement, TemplateItem> implements
        ComponentContext<HTMLElement, TemplateItem>,
        HasIdentifier<HTMLElement, TemplateItem> {

    // ------------------------------------------------------ factory

    public static TemplateItem templateItem(String identifier) {
        return new TemplateItem(identifier);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_ID = "ti";
    public static final String SUB_COMPONENT_NAME = "TemplateItem";

    public final String foo;
    public String bar;
    final int baz;
    double qux;
    private final String identifier;
    private final Map<String, Object> data;
    private boolean someThing;

    TemplateItem(String identifier) {
        super(SUB_COMPONENT_ID, SUB_COMPONENT_NAME, div().css(component(_template, item))
                .data(Dataset.identifier, identifier)
                .element());
        this.foo = "bar";
        this.baz = 42;
        this.identifier = identifier;
        this.data = new HashMap<>();
    }

    // ------------------------------------------------------ builder

    @Override
    public <T> TemplateItem store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public TemplateItem that() {
        return this;
    }

    // ------------------------------------------------------ events

    public TemplateItem onClick(ComponentHandler<TemplateItem> actionHandler) {
        element().addEventListener(click.name, e -> actionHandler.handle(e, this));
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String identifier() {
        return identifier;
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

    // ------------------------------------------------------ internal

    void markSelected(boolean selected) {
        classList().toggle(modifier(current), selected);
    }
}
