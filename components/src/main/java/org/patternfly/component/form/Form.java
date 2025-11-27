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
package org.patternfly.component.form;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Function;

import org.jboss.elemento.Elements;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.component.label.Label;
import org.patternfly.style.Modifiers.Horizontal;

import elemental2.dom.HTMLFormElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.form;
import static org.patternfly.style.Classes.limitWidth;
import static org.patternfly.style.Classes.modifier;

/**
 * A form is a group of elements used to collect information from a user in a variety of contexts, including in a modal, in a
 * wizard, or on a page. Use cases for forms include tasks reliant on user-inputted information for completion like logging in,
 * registering, configuring settings, or completing surveys.
 *
 * @see <a href= "https://www.patternfly.org/components/forms/form">https://www.patternfly.org/components/forms/form</a>
 */
public class Form extends BaseComponent<HTMLFormElement, Form> implements
        HasItems<HTMLFormElement, Form, FormGroup>,
        Horizontal<HTMLFormElement, Form> {

    // ------------------------------------------------------ factory

    public static Form form() {
        return new Form();
    }

    // ------------------------------------------------------ instance

    private final Map<String, FormGroup> items;
    private final List<FormAlert> alerts;
    private final List<BiConsumer<Form, FormGroup>> onAdd;
    private final List<BiConsumer<Form, FormGroup>> onRemove;

    Form() {
        super(ComponentType.Form, Elements.form().css(component(form)).apply(f -> f.noValidate = true).element());
        this.items = new LinkedHashMap<>();
        this.alerts = new ArrayList<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();
        storeComponent();
    }

    // ------------------------------------------------------ add

    public <T> Form addItems(Iterable<T> items, Function<T, FormGroup> display) {
        for (T item : items) {
            FormGroup group = display.apply(item);
            addItem(group);
        }
        return this;
    }

    public Form addItem(FormGroup item) {
        return add(item);
    }

    public Form addGroup(FormGroup group) {
        return add(group);
    }

    @Override
    public Form add(FormGroup item) {
        items.put(item.identifier(), item);
        Form result = add(item.element());
        onAdd.forEach(bc -> bc.accept(this, item));
        return result;
    }

    public Form addAlert(FormAlert alert) {
        return add(alert);
    }

    public Form add(FormAlert alert) {
        alerts.add(alert);
        insertFirst(element(), alert.element());
        return this;
    }

    public Form addSection(FormSection section) {
        return add(section);
    }

    public Form addFieldGroup(FormFieldGroup fieldGroup) {
        return add(fieldGroup);
    }

    public Form addActionGroup(FormActionGroup actionGroup) {
        return add(actionGroup);
    }

    // ------------------------------------------------------ builder

    public Form limitWidth() {
        return css(modifier(limitWidth));
    }

    @Override
    public Form that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public Form onAdd(BiConsumer<Form, FormGroup> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public Form onRemove(BiConsumer<Form, FormGroup> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Iterator<FormGroup> iterator() {
        return items.values().iterator();
    }

    @Override
    public int size() {
        return items.size();
    }

    @Override
    public boolean isEmpty() {
        return items.isEmpty();
    }

    @Override
    public boolean contains(String identifier) {
        return items.containsKey(identifier);
    }

    @Override
    public FormGroup item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void removeItem(String identifier) {
        FormGroup item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        if (item != null) {
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        Iterator<FormGroup> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            FormGroup item = iterator.next();
            failSafeRemoveFromParent(item);
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    public void clearAlerts() {
        for (FormAlert alert : alerts) {
            failSafeRemoveFromParent(alert);
        }
    }
}
