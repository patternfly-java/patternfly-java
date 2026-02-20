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
package org.patternfly.component;

import java.util.ArrayList;
import java.util.List;

/**
 * A utility class for managing add, update, and remove event handlers for a component. This class provides a mechanism to
 * register and execute handlers for processing specific actions related to items of a component.
 *
 * @param <C> the type of the component that implements the {@code HasItems} interface
 * @param <S> the type of the item that implements the {@code HasIdentifier} interface
 */
public class AurHandler<C extends HasItems<?, ?, ?>, S extends HasIdentifier<?, ?>> {

    private final C component;
    private final List<AddItemHandler<C, S>> onAdd;
    private final List<UpdateItemHandler<C, S>> onUpdate;
    private final List<RemoveItemHandler<C, S>> onRemove;

    public AurHandler(C component) {
        this.component = component;
        this.onAdd = new ArrayList<>();
        this.onUpdate = new ArrayList<>();
        this.onRemove = new ArrayList<>();
    }

    public C onAdd(AddItemHandler<C, S> onAdd) {
        this.onAdd.add(onAdd);
        return component;
    }

    public C onUpdate(UpdateItemHandler<C, S> onUpdate) {
        this.onUpdate.add(onUpdate);
        return component;
    }

    public C onRemove(RemoveItemHandler<C, S> onRemove) {
        this.onRemove.add(onRemove);
        return component;
    }

    public C added(S item) {
        if (item != null) {
            onAdd.forEach(handler -> handler.onAdd(component, item));
        }
        return component;
    }

    public C updated(S oldItem, S newItem) {
        if (oldItem != null && newItem != null) {
            onUpdate.forEach(handler -> handler.onUpdate(component, oldItem, newItem));
        }
        return component;
    }

    public C removed(S item) {
        if (item != null) {
            onRemove.forEach(handler -> handler.onRemove(component, item));
        }
        return component;
    }
}
