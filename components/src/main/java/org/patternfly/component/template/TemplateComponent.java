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

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.patternfly.component.AddItemHandler;
import org.patternfly.component.AurHandler;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Ordered;
import org.patternfly.component.RemoveItemHandler;
import org.patternfly.component.UpdateItemHandler;
import org.patternfly.core.Aria;
import org.patternfly.handler.SelectHandler;
import org.patternfly.style.Modifiers.Compact;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Modifiers.FullHeight;
import org.patternfly.style.Modifiers.Glass;
import org.patternfly.style.Modifiers.Plain;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.style.Classes._template;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.modifier;

/**
 * The template component is a template for creating new components.
 *
 * @see <a href= "https://www.patternfly.org/components/template">https://www.patternfly.org/components/template</a>
 */
public class TemplateComponent extends BaseComponent<HTMLElement, TemplateComponent> implements
        Compact<HTMLElement, TemplateComponent>,
        Disabled<HTMLElement, TemplateComponent>,
        FullHeight<HTMLElement, TemplateComponent>,
        Glass<HTMLElement, TemplateComponent>,
        Ordered<HTMLElement, TemplateComponent, TemplateItem>,
        Plain<HTMLElement, TemplateComponent> {

    // ------------------------------------------------------ factory

    public static TemplateComponent template() {
        return new TemplateComponent();
    }

    // ------------------------------------------------------ instance

    public final String foo;
    public String bar;
    final int baz;
    double qux;
    private final Map<String, TemplateItem> items;
    private final AurHandler<TemplateComponent, TemplateItem> aur;
    private final List<SelectHandler<TemplateItem>> selectHandler;
    private Comparator<TemplateItem> comparator;
    private boolean someThing;

    TemplateComponent() {
        super(ComponentType._Template, div().css(component(_template)).element());
        this.foo = "bar";
        this.baz = 42;
        this.items = new LinkedHashMap<>();
        this.aur = new AurHandler<>(this);
        this.selectHandler = new ArrayList<>();
    }

    // ------------------------------------------------------ add

    @Override
    public TemplateComponent add(TemplateItem item) {
        addOrdered(this, item);
        items.put(item.identifier(), item);
        return aur.added(item);
    }

    // ------------------------------------------------------ builder

    public TemplateComponent methodsReturningAReferenceToItself() {
        return this;
    }

    @Override
    public TemplateComponent ordered(Comparator<TemplateItem> comparator) {
        this.comparator = comparator;
        return this;
    }

    @Override
    public TemplateComponent that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public TemplateComponent ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    @Override
    public TemplateComponent onAdd(AddItemHandler<TemplateComponent, TemplateItem> onAdd) {
        return aur.onAdd(onAdd);
    }

    @Override
    public TemplateComponent onUpdate(UpdateItemHandler<TemplateComponent, TemplateItem> onUpdate) {
        return aur.onUpdate(onUpdate);
    }

    @Override
    public TemplateComponent onRemove(RemoveItemHandler<TemplateComponent, TemplateItem> onRemove) {
        return aur.onRemove(onRemove);
    }

    public TemplateComponent onSelect(SelectHandler<TemplateItem> selectHandler) {
        this.selectHandler.add(selectHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Comparator<TemplateItem> comparator() {
        return comparator;
    }

    @Override
    public Iterator<TemplateItem> iterator() {
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
    public TemplateItem item(String identifier) {
        return items.get(identifier);
    }

    public void select(String identifier) {
        select(findItem(identifier), true, true);
    }

    public void select(String identifier, boolean selected) {
        select(findItem(identifier), selected, true);
    }

    public void select(String identifier, boolean selected, boolean fireEvent) {
        select(findItem(identifier), selected, fireEvent);
    }

    public void select(TemplateItem item) {
        select(item, true, true);
    }

    public void select(TemplateItem item, boolean selected) {
        select(item, selected, true);
    }

    public void select(TemplateItem item, boolean selected, boolean fireEvent) {
        if (item != null) {
            unselectAllItems();
            item.markSelected(selected);
            if (fireEvent) {
                selectHandler.forEach(selectHandler -> selectHandler.onSelect(new Event(""), item, selected));
            }
        }
    }

    @Override
    public void updateItem(TemplateItem item) {
        replaceItemElement(item, (oldItem, newItem) -> {
            items.put(newItem.identifier(), newItem);
            aur.updated(oldItem, newItem);
        });
    }

    @Override
    public void removeItem(String identifier) {
        TemplateItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        aur.removed(item);
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        Iterator<TemplateItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            TemplateItem item = iterator.next();
            iterator.remove();
            aur.removed(item);
        }
    }

    // ------------------------------------------------------ internal

    private TemplateItem findItem(String identifier) {
        return items.get(identifier);
    }

    private void unselectAllItems() {
        for (TemplateItem item : items.values()) {
            item.classList().remove(modifier(current));
        }
    }
}
