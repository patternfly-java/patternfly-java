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

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.AddItemHandler;
import org.patternfly.component.AsyncItems;
import org.patternfly.component.AurHandler;
import org.patternfly.component.HasAsyncItems;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.Ordered;
import org.patternfly.component.RemoveItemHandler;
import org.patternfly.component.UpdateItemHandler;
import org.patternfly.core.AsyncStatus;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.handler.SelectHandler;
import org.patternfly.style.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static java.util.Collections.emptyList;
import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.Role.tree;
import static org.patternfly.core.AsyncStatus.pending;
import static org.patternfly.core.AsyncStatus.rejected;
import static org.patternfly.core.AsyncStatus.resolved;
import static org.patternfly.core.AsyncStatus.static_;
import static org.patternfly.core.Timeouts.LOADING_TIMEOUT;
import static org.patternfly.extension.finder.FinderClasses.column;
import static org.patternfly.extension.finder.FinderItem.errorItem;
import static org.patternfly.extension.finder.FinderItem.loadingItem;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.filtered;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Modifiers.toggleModifier;

public class FinderColumn extends FinderSubComponent<HTMLElement, FinderColumn> implements
        ComponentContext<HTMLElement, FinderColumn>,
        HasAsyncItems<HTMLElement, FinderColumn, FinderItem>,
        HasIdentifier<HTMLElement, FinderColumn>,
        Ordered<HTMLElement, FinderColumn, FinderItem> {

    // ------------------------------------------------------ factory

    public static FinderColumn finderColumn(String identifier) {
        return new FinderColumn(identifier);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fc";
    private static final Logger logger = Logger.getLogger(FinderColumn.class.getName());

    // Use a direct reference to the finder instead of relying on storeComponent() / lookupComponent()
    // The component store relies on attach() / detach() and does not work when adding / removing existing references.
    // See: https://hal-console.gitbook.io/elemento/attach-detach
    Finder finder;
    PreviewHandler previewHandler;

    private final String identifier;
    private final Map<String, Object> data;
    private final Map<String, FinderItem> items;
    private final AurHandler<FinderColumn, FinderItem> aur;
    private final List<SelectHandler<FinderItem>> selectHandler;
    private final HTMLContainerBuilder<HTMLUListElement> ul;
    private boolean pinnable;
    private AsyncStatus status;
    private Comparator<FinderItem> comparator;
    private AsyncItems<FinderColumn, FinderItem> asyncItems;

    FinderColumn(String identifier) {
        super(SUB_COMPONENT_NAME, div().css(component(FinderClasses.finder, column))
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.data = new HashMap<>();
        this.items = new LinkedHashMap<>();
        this.aur = new AurHandler<>(this);
        this.selectHandler = new ArrayList<>();
        this.status = static_;

        add(ul = ul().css(component(FinderClasses.finder, column, FinderClasses.items))
                .role(tree));
        storeSubComponent();
    }

    // ------------------------------------------------------ add

    public FinderColumn addHeader(FinderColumnHeader header) {
        return add(header);
    }

    public FinderColumn add(FinderColumnHeader header) {
        insertFirst(element(), header);
        return this;
    }

    public FinderColumn addSearch(FinderColumnSearch search) {
        return add(search);
    }

    public FinderColumn add(FinderColumnSearch search) {
        insertBefore(search, ul.element());
        return this;
    }

    @Override
    public FinderColumn add(FinderItem item) {
        item.column = this;
        if (pinnable) {
            item.makePinnable();
        }
        addOrdered(ul, item);
        items.put(item.identifier(), item);
        return aur.added(item);
    }

    public FinderColumn add(AsyncItems<FinderColumn, FinderItem> items) {
        status = pending;
        asyncItems = items;
        return this;
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #active(boolean) active(true)} */
    public FinderColumn active() {
        return active(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(active)} */
    public FinderColumn active(boolean active) {
        return toggleModifier(this, element(), Classes.active, active);
    }

    @Override
    public FinderColumn ordered(Comparator<FinderItem> comparator) {
        this.comparator = comparator;
        return this;
    }

    /** Same as {@linkplain #pinnable(boolean) pinnable(true)} */
    public FinderColumn pinnable() {
        return pinnable(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(pinnable)} */
    public FinderColumn pinnable(boolean pinnable) {
        this.pinnable = pinnable;
        return toggleModifier(this, element(), FinderClasses.pinnable, pinnable);
    }

    @Override
    public <T> FinderColumn store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public FinderColumn that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public FinderColumn onAdd(AddItemHandler<FinderColumn, FinderItem> onAdd) {
        return aur.onAdd(onAdd);
    }

    @Override
    public FinderColumn onUpdate(UpdateItemHandler<FinderColumn, FinderItem> onUpdate) {
        return aur.onUpdate(onUpdate);
    }

    @Override
    public FinderColumn onRemove(RemoveItemHandler<FinderColumn, FinderItem> onRemove) {
        return aur.onRemove(onRemove);
    }

    public FinderColumn onSelect(SelectHandler<FinderItem> selectHandler) {
        this.selectHandler.add(selectHandler);
        return this;
    }

    public FinderColumn onPreview(PreviewHandler previewHandler) {
        this.previewHandler = previewHandler;
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Comparator<FinderItem> comparator() {
        return comparator;
    }

    @Override
    public Promise<Iterable<FinderItem>> load() {
        if (status == pending && asyncItems != null) {
            // show a loading indicator after a given timeout
            FinderItem[] loadingItem = new FinderItem[1];
            double handle = setTimeout(__ -> {
                loadingItem[0] = loadingItem();
                loadingItem[0].column = this;
                ul.add(loadingItem[0].element());
            }, LOADING_TIMEOUT);

            // load items
            return asyncItems.apply(this)
                    .then(items -> {
                        status = resolved;
                        clearTimeout(handle);
                        failSafeRemoveFromParent(loadingItem[0]);
                        for (FinderItem child : items) {
                            addItem(child);
                        }
                        return Promise.resolve(items);
                    })
                    .catch_(error -> {
                        status = rejected;
                        clearTimeout(handle);
                        failSafeRemoveFromParent(loadingItem[0]);
                        logger.error("Unable to load items for %o - %s: %s", element(), identifier, error);
                        FinderItem errorItem = errorItem();
                        errorItem.column = this;
                        ul.add(errorItem);
                        return Promise.reject(error);
                    });
        } else {
            return Promise.resolve(emptyList());
        }
    }

    @Override
    public Promise<Iterable<FinderItem>> reload() {
        if (status != pending) {
            reset();
            return load().then(Promise::resolve);
        }
        return Promise.resolve(emptyList());
    }

    @Override
    public void reset() {
        if (status == resolved || status == rejected) {
            status = pending;
            internalClear();
        }
    }

    @Override
    public AsyncStatus status() {
        return status;
    }

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

    @Override
    public Iterator<FinderItem> iterator() {
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
    public FinderItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void updateItem(FinderItem item) {
        replaceItemElement(item, (oldItem, newItem) -> {
            items.put(newItem.identifier(), newItem);
            aur.updated(oldItem, newItem);
        });
    }

    @Override
    public void removeItem(String identifier) {
        FinderItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        aur.removed(item);
    }

    @Override
    public void clear() {
        if (status == static_) {
            internalClear();
        } else if (status == resolved || status == rejected || status == pending) {
            reset();
        }
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

    public void select(FinderItem item) {
        select(item, true, true);
    }

    public void select(FinderItem item, boolean selected) {
        select(item, selected, true);
    }

    public void select(FinderItem item, boolean selected, boolean fireEvent) {
        if (item != null) {
            unselectAllItems();
            item.markSelected(selected);
            if (fireEvent) {
                selectHandler.forEach(selectHandler -> selectHandler.onSelect(new Event(""), item, selected));
            }
        }
    }

    // ------------------------------------------------------ internal

    FinderItem findItem(String identifier) {
        return items.get(identifier);
    }

    FinderItem previousItem(FinderItem item) {
        List<FinderItem> visible = visibleItems();
        int index = visible.indexOf(item);
        if (index > 0) {
            return visible.get(index - 1);
        }
        return null;
    }

    FinderItem nextItem(FinderItem item) {
        List<FinderItem> visible = visibleItems();
        int index = visible.indexOf(item);
        if (index != -1 && index < visible.size() - 1) {
            return visible.get(index + 1);
        }
        return null;
    }

    List<FinderItem> visibleItems() {
        return items.values().stream()
                .filter(item -> !item.classList().contains(modifier(filtered)))
                .collect(toList());
    }

    private void internalClear() {
        removeChildrenFrom(ul);
        Iterator<FinderItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            FinderItem item = iterator.next();
            iterator.remove();
            aur.removed(item);
        }
    }

    private void unselectAllItems() {
        for (FinderItem item : items.values()) {
            item.markSelected(false);
        }
    }
}
