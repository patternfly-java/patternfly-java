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
package org.patternfly.extension.finder;

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.function.Function;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.AddItemHandler;
import org.patternfly.component.AurHandler;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.HasItems;
import org.patternfly.component.RemoveItemHandler;
import org.patternfly.component.UpdateItemHandler;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.core.Aria.label;
import static org.patternfly.extension.finder.FinderClasses.columns;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.style.Classes.component;

public class Finder extends BaseComponent<HTMLElement, Finder> implements
        HasItems<HTMLElement, Finder, FinderColumn> {

    // ------------------------------------------------------ factory

    public static Finder finder() {
        return new Finder();
    }

    // ------------------------------------------------------ instance

    private final Map<String, FinderColumn> items;
    private final AurHandler<Finder, FinderColumn> aur;
    private final HTMLContainerBuilder<HTMLDivElement> cc; // columns container
    private FinderPreview preview;

    Finder() {
        super(ComponentType.Finder, div().css(component(finder))
                .aria(label, "finder")
                .element());
        this.items = new LinkedHashMap<>();
        this.aur = new AurHandler<>(this);

        add(cc = div().css(component(finder, columns)));

    }

    // ------------------------------------------------------ add

    /** Same as {@link #addItems(Iterable, Function)} */
    public <T> Finder addColumns(Iterable<T> items, Function<T, FinderColumn> display) {
        return addItems(items, display);
    }

    /** Same as {@link #addItem(HasIdentifier)} */
    public Finder addColumn(FinderColumn column) {
        return addItem(column);
    }

    @Override
    public Finder add(FinderColumn item) {
        items.put(item.identifier(), item);
        cc.add(item.element());
        return aur.added(item);
    }

    /**
     * Adds the specified {@link FinderPreview} instance to the finder. This method ensures that any previously added preview is
     * safely removed before adding the new one.
     *
     * @param preview the {@link FinderPreview} instance to add. Represents the preview component to be added to the finder.
     * @return the current {@link Finder} instance, allowing for method chaining.
     */
    public Finder addPreview(FinderPreview preview) {
        return add(preview);
    }

    /**
     * Adds the specified {@link FinderPreview} instance to the finder. This method ensures that any previously added preview is
     * safely removed before adding the new one.
     *
     * @param preview the {@link FinderPreview} instance to add. Represents the preview component to be added to the finder.
     * @return the current {@link Finder} instance, allowing for method chaining.
     */
    public Finder add(FinderPreview preview) {
        failSafeRemoveFromParent(this.preview);
        add(preview.element());
        this.preview = preview;
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public Finder that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public Finder onAdd(AddItemHandler<Finder, FinderColumn> onAdd) {
        return aur.onAdd(onAdd);
    }

    @Override
    public Finder onUpdate(UpdateItemHandler<Finder, FinderColumn> onUpdate) {
        return aur.onUpdate(onUpdate);
    }

    @Override
    public Finder onRemove(RemoveItemHandler<Finder, FinderColumn> onRemove) {
        return aur.onRemove(onRemove);
    }

    // ------------------------------------------------------ api

    @Override
    public Iterator<FinderColumn> iterator() {
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
    public FinderColumn item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void updateItem(FinderColumn item) {
        replaceItemElement(item, (oldItem, newItem) -> {
            items.put(newItem.identifier(), newItem);
            aur.updated(oldItem, newItem);
        });
    }

    @Override
    public void removeItem(String identifier) {
        FinderColumn item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        aur.removed(item);
    }

    @Override
    public void clear() {
        removeChildrenFrom(cc);
        Iterator<FinderColumn> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            FinderColumn item = iterator.next();
            iterator.remove();
            aur.removed(item);
        }
    }
}
