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
package org.patternfly.component.table;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.function.BiFunction;
import java.util.function.Function;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.component.HasItems;
import org.patternfly.component.WithIdentifier;
import org.patternfly.component.tree.TreeViewItem;
import org.patternfly.core.Aria;
import org.patternfly.core.AsyncStatus;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLTableRowElement;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static java.util.Collections.emptyList;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.Key.Enter;
import static org.jboss.elemento.Key.Spacebar;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.component.table.TitleCell.titleCell;
import static org.patternfly.core.AsyncStatus.pending;
import static org.patternfly.core.AsyncStatus.rejected;
import static org.patternfly.core.AsyncStatus.resolved;
import static org.patternfly.core.AsyncStatus.static_;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.row;
import static org.patternfly.core.Timeouts.LOADING_TIMEOUT;
import static org.patternfly.icon.IconSets.fas.exclamationCircle;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.selected;
import static org.patternfly.style.Classes.table;
import static org.patternfly.style.Classes.tr;
import static org.patternfly.style.Size.md;

public class Tr extends TableSubComponent<HTMLTableRowElement, Tr> implements
        ComponentContext<HTMLTableRowElement, Tr>,
        Expandable<HTMLTableRowElement, Tr>,
        HasItems<HTMLTableRowElement, Tr, Cell<?>>,
        WithIdentifier<HTMLTableRowElement, Tr> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Tr tr(String identifier) {
        return new Tr(identifier);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tr";
    private static final Logger logger = Logger.getLogger(Tr.class.getName());
    private static final BiFunction<Integer, Integer, Tr> loading = (colspan, level) -> tr(
            Id.unique(ComponentType.Table.id, SUB_COMPONENT_NAME, "loading"))
            .aria(Aria.level, level)
            .aria(Aria.setsize, 1)
            .aria(Aria.posinset, 1)
            .addTitleCell(titleCell().colSpan(colspan)
                    .icon(spinner(md, "Loading").element())
                    .text("Loading"));
    private static final BiFunction<Integer, Integer, Tr> error = (colspan, level) -> tr(
            Id.unique(ComponentType.TreeView.id, SUB_COMPONENT_NAME, "error"))
            .aria(Aria.level, level)
            .aria(Aria.setsize, 1)
            .aria(Aria.posinset, 1)
            .addTitleCell(titleCell().colSpan(colspan)
                    .icon(exclamationCircle())
                    .text("Error"));

    Tbody tbody;
    private final String identifier;
    private final Map<String, Cell<?>> items;
    private final Map<String, Object> data;
    private final List<ToggleHandler<Tr>> toggleHandler;
    private final LinkedList<Tr> children;
    private Tr parent;
    private TitleCell titleCell;
    private AsyncStatus status;
    private HandlerRegistration clickHandler;
    private HandlerRegistration keyHandler;
    private Function<Tr, Promise<Iterable<Tr>>> asyncChildren;

    Tr(String identifier) {
        super(SUB_COMPONENT_NAME, Elements.tr().css(component(table, tr))
                .attr(role, row)
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.items = new LinkedHashMap<>();
        this.data = new HashMap<>();
        this.toggleHandler = new ArrayList<>();
        this.children = new LinkedList<>();
        this.status = static_;
    }

    // ------------------------------------------------------ add

    @Override
    public Tr add(Cell<?> item) {
        items.put(item.identifier(), item);
        return add(item.element());
    }

    public Tr addTitleCell(TitleCell titleCell) {
        return add(titleCell);
    }

    public Tr add(TitleCell titleCell) {
        this.titleCell = titleCell;
        this.titleCell.tr = this;
        return add(titleCell.element());
    }

    public Tr addChildren(Function<Tr, Promise<Iterable<Tr>>> children) {
        return add(children);
    }

    public Tr add(Function<Tr, Promise<Iterable<Tr>>> children) {
        status = pending;
        asyncChildren = children;
        return this;
    }

    public <T> Tr addChildren(Iterable<T> items, Function<T, Tr> display) {
        for (T item : items) {
            Tr tr = display.apply(item);
            addChild(tr);
        }
        return that();
    }

    public Tr addChild(Tr child) {
        return add(child);
    }

    public Tr add(Tr child) {
        children.add(child);
        if (isAttached(element())) {
            HTMLElement after = children.isEmpty() ? element() : children.getLast().element();
            internalAddChild(child, after);
        }
        return this;
    }

    // ------------------------------------------------------ builder

    public Tr clickable() {
        return clickable(true);
    }

    public Tr clickable(boolean clickable) {
        if (clickable) {
            element().tabIndex = 0;
            classList().add(modifier(Classes.clickable));
            clickHandler = bind(element(), click, e -> {
                // Leniently, because the event might bubble up from an action in a <td>
                // If that action had removed the <tr>, the lookup would fail.
                Table table = lookupComponent(true);
                if (table != null) {
                    table.select(this);
                }
            });
            keyHandler = bind(element(), keydown, e -> {
                if (Enter.match(e) || Spacebar.match(e)) {
                    e.preventDefault();
                    Table table = lookupComponent();
                    table.select(this);
                }
            });
        } else {
            element().tabIndex = -1;
            classList().remove(modifier(Classes.clickable));
            if (clickHandler != null) {
                clickHandler.removeHandler();
            }
            if (keyHandler != null) {
                keyHandler.removeHandler();
            }
        }
        return this;
    }

    @Override
    public <T> Tr store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public Tr that() {
        return this;
    }

    // ------------------------------------------------------ events

    public Tr onToggle(ToggleHandler<Tr> toggleHandler) {
        this.toggleHandler.add(toggleHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void collapse(boolean fireEvent) {
        if (expanded()) {
            Expandable.collapse(element(), element(), null);
            List<Tr> allChildren = new ArrayList<>();
            collectAllChildren(allChildren);
            for (Tr child : allChildren) {
                child.element().hidden = true;
            }
            if (titleCell != null) {
                titleCell.collapse();
            }
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), this, false));
            }
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        if (!expanded()) {
            Expandable.expand(element(), element(), null);
            List<Tr> allChildren = new ArrayList<>();
            collectAllChildren(allChildren);
            for (Tr child : allChildren) {
                boolean parentExpanded = child.parent != null && Boolean.parseBoolean(
                        child.parent.element().getAttribute(Aria.expanded));
                child.element().hidden = !parentExpanded;
            }
            if (titleCell != null) {
                titleCell.expand();
            }
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), this, true));
            }
        }
    }

    public Promise<Iterable<TreeViewItem>> load() {
        if (status == pending && asyncChildren != null) {
            // show loading indicator after a given timeout
            Table tbl = lookupComponent();
            Tr[] loadingItem = new Tr[1];
            double handle = setTimeout(__ -> {
                loadingItem[0] = loading.apply(tbl.columns(), currentLevel());
                insertAfter(loadingItem[0].element(), element());
            }, LOADING_TIMEOUT);

            // load items
            this.children.clear();
            return asyncChildren.apply(this)
                    .then(children -> {
                        status = resolved;
                        clearTimeout(handle);
                        failSafeRemoveFromParent(loadingItem[0]);

                        for (Tr tr : children) {
                            HTMLElement after = this.children.isEmpty() ? element() : this.children.getLast().element();
                            internalAddChild(tr, after);
                            this.children.add(tr);
                        }
                        if (this.children.isEmpty() && titleCell != null) {
                            titleCell.removeToggle();
                            collapse(false);
                        }
                        return Promise.resolve(children);
                    })
                    .catch_(error -> {
                        status = rejected;
                        clearTimeout(handle);
                        failSafeRemoveFromParent(loadingItem[0]);
                        logger.error("Unable to load items for %o - %s: %s", element(), identifier, error);
                        Tr errorItem = Tr.error.apply(tbl.columns(), currentLevel());
                        internalAddChild(errorItem, element());
                        children.add(errorItem);
                        return Promise.reject(error);
                    });
        } else {
            return Promise.resolve(emptyList());
        }
    }

    public void reset() {
        if (status == resolved || status == rejected) {
            status = pending;
            collapse(false);
            for (Tr child : children) {
                failSafeRemoveFromParent(child);
                child.reset();
            }
            children.clear();
            if (titleCell != null) {
                titleCell.addToggle();
            }
        }
    }

    @Override
    public Iterator<Cell<?>> iterator() {
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
    public void clear() {
        removeChildrenFrom(element());
        items.clear();
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

    // ------------------------------------------------------ internal

    void markSelected() {
        classList().add(modifier(selected));
        aria(Aria.label, "Row selected");
    }

    void clearSelection() {
        classList().remove(modifier(selected));
        element().removeAttribute(Aria.label);
    }

    void finishChildren() {
        if (!children.isEmpty()) {
            for (Tr child : children) {
                internalAddChild(child, element());
                child.finishChildren();
                if (titleCell != null) {
                    titleCell.addToggle();
                }
            }
        } else if (status == pending && asyncChildren != null) {
            if (titleCell != null) {
                titleCell.addToggle();
            }
        }
    }

    private void collectAllChildren(List<Tr> allChildren) {
        allChildren.addAll(children);
        for (Tr child : children) {
            child.collectAllChildren(allChildren);
        }
    }

    private void internalAddChild(Tr child, HTMLElement after) {
        child.tbody = tbody;
        child.parent = this;
        child.element().hidden = !Boolean.parseBoolean(element().getAttribute(Aria.expanded));
        int currentLevel = currentLevel();
        if (currentLevel > 0) {
            child.aria(Aria.level, currentLevel + 1);
        }
        insertAfter(child.element(), after);
    }

    private int currentLevel() {
        int level = -1;
        String attribute = element().getAttribute("aria-level");
        try {
            level = Integer.parseInt(attribute);
        } catch (NumberFormatException ignored) {}
        return level;
    }
}
