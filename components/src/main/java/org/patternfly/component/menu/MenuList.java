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
package org.patternfly.component.menu;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Supplier;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.AsyncItems;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.core.Aria;
import org.patternfly.core.AsyncStatus;
import org.patternfly.core.Roles;
import elemental2.dom.HTMLUListElement;
import elemental2.dom.MutationRecord;
import elemental2.promise.Promise;

import static java.util.Collections.emptyList;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.SelectionMode.multi;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.li;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.core.AsyncStatus.pending;
import static org.patternfly.core.AsyncStatus.rejected;
import static org.patternfly.core.AsyncStatus.resolved;
import static org.patternfly.core.AsyncStatus.static_;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.icon.IconSets.fas.exclamationCircle;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.menu;

public class MenuList extends MenuSubComponent<HTMLUListElement, MenuList> implements
        HasItems<HTMLUListElement, MenuList, MenuItem>,
        Attachable {

    // ------------------------------------------------------ factory

    /**
     * Creates a new menu list component.
     */
    public static MenuList menuList() {
        return new MenuList();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "ml";
    private static final Logger logger = Logger.getLogger(MenuList.class.getName());
    private static final Supplier<MenuItem> loading = () -> MenuItem.skeletonMenuItem("Loading items...");
    private static final Supplier<MenuItem> error = () -> menuItem(
            Id.unique(ComponentType.Menu.id, SUB_COMPONENT_NAME, "error"), "Error")
            .icon(exclamationCircle());

    final Map<String, MenuItem> items;
    private final List<BiConsumer<MenuList, MenuItem>> onAdd;
    private final List<BiConsumer<MenuList, MenuItem>> onRemove;
    private AsyncStatus status;
    private AsyncItems<MenuList, MenuItem> asyncItems;

    MenuList() {
        super(SUB_COMPONENT_NAME, ul().css(component(menu, list)).element());
        this.items = new LinkedHashMap<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();
        this.status = static_;
        storeSubComponent();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        Menu menu = lookupComponent();
        switch (menu.menuType) {
            case menu:
            case checkbox:
                attr(role, Roles.menu);
                break;
            case select:
                attr(role, Roles.listbox);
                if (menu.selectionMode == single) {
                    aria(Aria.multiSelectable, false);
                } else if (menu.selectionMode == multi) {
                    aria(Aria.multiSelectable, true);
                }
                break;
        }
    }

    // ------------------------------------------------------ add

    @Override
    public MenuList add(MenuItem item) {
        items.put(item.identifier(), item);
        MenuList result = add(item.element());
        onAdd.forEach(bc -> bc.accept(this, item));
        return result;
    }

    public MenuList addItems(AsyncItems<MenuList, MenuItem> items) {
        return add(items);
    }

    public MenuList add(AsyncItems<MenuList, MenuItem> items) {
        status = pending;
        asyncItems = items;
        return this;
    }

    public MenuList addDivider() {
        return add(divider(li));
    }

    // ------------------------------------------------------ builder

    @Override
    public MenuList that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public MenuList onAdd(BiConsumer<MenuList, MenuItem> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public MenuList onRemove(BiConsumer<MenuList, MenuItem> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

    // ------------------------------------------------------ api

    public Promise<Iterable<MenuItem>> load() {
        if (status == pending && asyncItems != null) {
            // Show the loading indicator immediately, not like in the tree view component after Timeouts.LOADING_TIMEOUT
            // The reason is that the menu is empty at first, then the loading indicator appears, and finally the items
            // are added, leading to a visual glitch. To prevent this, we show the loading indicator immediately.
            MenuItem loadingItem = loading.get();
            addItem(loadingItem);

            // load items
            return asyncItems.apply(this)
                    .then(items -> {
                        status = resolved;
                        failSafeRemoveFromParent(loadingItem);
                        for (MenuItem item : items) {
                            addItem(item);
                        }
                        return Promise.resolve(items);
                    })
                    .catch_(error -> {
                        status = rejected;
                        failSafeRemoveFromParent(loadingItem);
                        logger.error("Unable to load items for %o: %s", element(), error);
                        MenuItem errorItem = MenuList.error.get();
                        addItem(errorItem);
                        return Promise.reject(error);
                    });
        } else {
            return Promise.resolve(emptyList());
        }
    }

    public void reset() {
        if (status == resolved || status == rejected) {
            status = pending;
            internalClear();
        }
    }

    public Promise<Iterable<MenuItem>> reload() {
        reset();
        return load().then(Promise::resolve);
    }

    public AsyncStatus status() {
        return status;
    }

    @Override
    public Iterator<MenuItem> iterator() {
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
    public MenuItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void removeItem(String identifier) {
        MenuItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        if (item != null) {
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        if (status == static_) {
            internalClear();
        } else if (status == resolved || status == rejected || status == pending) {
            reset();
        }
    }

    // ------------------------------------------------------ internal

    void removeItem(MenuItem item) {
        items.remove(item.identifier());
        failSafeRemoveFromParent(item);
        onRemove.forEach(bc -> bc.accept(this, item));
    }

    private void internalClear() {
        Iterator<MenuItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            MenuItem item = iterator.next();
            failSafeRemoveFromParent(item);
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }
}
