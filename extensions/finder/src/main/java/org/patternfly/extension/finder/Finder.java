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
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.EventType;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Key;
import org.patternfly.component.AddItemHandler;
import org.patternfly.component.AurHandler;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.HasItems;
import org.patternfly.component.RemoveItemHandler;
import org.patternfly.component.UpdateItemHandler;
import org.patternfly.core.Dataset;
import org.jboss.elemento.flow.FlowContext;
import org.jboss.elemento.flow.Task;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Bordered;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.KeyboardEvent;
import elemental2.dom.MutationRecord;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.requestAnimationFrame;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.flow.Flow.sequential;
import static org.patternfly.core.Aria.label;
import static org.patternfly.extension.finder.FinderClasses.columns;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.selected;

public class Finder extends BaseComponent<HTMLElement, Finder> implements
        Attachable,
        Bordered<HTMLElement, Finder>,
        HasItems<HTMLElement, Finder, FinderColumn> {

    // ------------------------------------------------------ factory

    public static Finder finder() {
        return new Finder();
    }

    // ------------------------------------------------------ instance

    private static final String STOP_SELECT_KEY = "stop-select";

    FinderPreview preview;
    private final Map<String, FinderColumn> items;
    private final AurHandler<Finder, FinderColumn> aur;
    private final HTMLContainerBuilder<HTMLDivElement> cc; // columns container
    private HandlerRegistration keydownHandler;

    Finder() {
        super(ComponentType.Finder, div().css(component(finder))
                .aria(label, "finder")
                .element());
        this.items = new LinkedHashMap<>();
        this.aur = new AurHandler<>(this);

        add(cc = div().css(component(finder, columns)));
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        keydownHandler = bind(this, EventType.keydown, this::handleKeydown);
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (keydownHandler != null) {
            keydownHandler.removeHandler();
        }
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
        internalAdd(item);
        item.load();
        return this;
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
     * <p>
     * Preview can be managed on a column basis by using {@link FinderColumn#onPreview(PreviewHandler)} or on an item basis by
     * using {@link FinderItem#onPreview(PreviewHandler)}.
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

    public ResolvedFinderPath path() {
        List<ResolvedFinderSegment> segments = new LinkedList<>();
        for (FinderColumn column : items.values()) {
            FinderItem selectedItem = column.selectedItem();
            if (selectedItem != null) {
                segments.add(new ResolvedFinderSegment(column, selectedItem));
            } else {
                segments.add(new ResolvedFinderSegment(column, null));
                break;
            }
        }
        return new ResolvedFinderPath(segments);
    }

    /**
     * Parses and selects items along the given finder path string, handling async column loading at each level. The path must
     * use the format produced by {@link FinderPath#toString()}: {@code col1=item1/col2=item2/col3}. The last segment may omit
     * the item identifier to represent a column with no selected item.
     *
     * @param path the encoded finder path string
     * @return a {@link Promise} that resolves with the {@link ResolvedFinderPath} of successfully selected items
     * @see #select(FinderPath)
     */
    public Promise<ResolvedFinderPath> select(String path) {
        return select(FinderPath.parse(path));
    }

    /**
     * Selects items along the given finder path, handling async column loading at each level. The first column in the path must
     * already be present in this finder. Each item selection may trigger creation and async loading of the next column (via
     * {@link FinderItem#nextColumn(java.util.function.Supplier)}).
     * <p>
     * Select and preview events are fired for every item in the path. If a segment cannot be resolved (column not found, item
     * not found after loading), the promise resolves with a partial {@link ResolvedFinderPath} containing only the successfully
     * selected segments.
     *
     * @param path the finder path to select
     * @return a {@link Promise} that resolves with the {@link ResolvedFinderPath} of successfully selected items
     */
    public Promise<ResolvedFinderPath> select(FinderPath path) {
        if (path == null || path.isEmpty()) {
            return Promise.resolve(path());
        }
        FlowContext context = new FlowContext();
        List<Task<FlowContext>> tasks = new ArrayList<>();
        for (FinderSegment segment : path) {
            tasks.add(ctx -> selectSegment(segment.columnId, segment.itemId, ctx));
        }
        return sequential(context, tasks)
                .then(ctx -> Promise.resolve(path()));
    }

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

    // ------------------------------------------------------ internal

    private void internalAdd(FinderColumn column) {
        column.finder = this;
        cc.add(column.element());
        items.put(column.identifier(), column);
        aur.added(column);
    }

    private Promise<FlowContext> selectSegment(String columnId, String itemId, FlowContext context) {
        if (context.get(STOP_SELECT_KEY) != null) {
            return context.resolve();
        }
        FinderColumn column = items.get(columnId);
        if (column == null) {
            context.set(STOP_SELECT_KEY, true);
            return context.resolve();
        }
        return column.load().then(__ -> {
            select(column);
            if (itemId == null) {
                context.set(STOP_SELECT_KEY, true);
                return context.resolve();
            }
            FinderItem item = column.findItem(itemId);
            if (item == null) {
                context.set(STOP_SELECT_KEY, true);
                return context.resolve();
            }
            column.select(item);
            FinderColumn nextColumn = item.supplyNextColumn();
            if (nextColumn != null) {
                internalAdd(nextColumn);
            }
            item.previewItem(this, column, item);
            return context.resolve();
        });
    }

    void select(FinderColumn column) {
        markActive(column);

        // Remove all columns after the selected one
        boolean found = false;
        Iterator<Map.Entry<String, FinderColumn>> iterator = items.entrySet().iterator();
        while (iterator.hasNext()) {
            Map.Entry<String, FinderColumn> entry = iterator.next();
            if (found) {
                FinderColumn removeColumn = entry.getValue();
                for (FinderItem item : removeColumn.items()) {
                    item.markSelected(false);
                }
                failSafeRemoveFromParent(removeColumn);
                iterator.remove();
                aur.removed(removeColumn);
            } else if (entry.getKey().equals(column.identifier())) {
                found = true;
            }
        }
    }

    void markActive(FinderColumn column) {
        for (FinderColumn c : items.values()) {
            c.active(false);
        }
        column.active(true);
    }

    private void handleKeydown(KeyboardEvent event) {
        HTMLElement target = (HTMLElement) event.target;
        HTMLElement itemElement = Elements.closest(target, By.classname(component(finder, item)));
        if (itemElement == null) {
            return;
        }
        FinderItem item = findItem(itemElement.dataset.get(Dataset.identifier));
        if (item == null || item.column == null) {
            return;
        }
        FinderColumn column = item.column;

        if (Key.ArrowDown.match(event)) {
            event.preventDefault();
            FinderItem nextItem = column.nextItem(item);
            if (nextItem != null) {
                nextItem.handleClick(this, column, nextItem);
                nextItem.element().focus();
            }

        } else if (Key.ArrowUp.match(event)) {
            event.preventDefault();
            FinderItem previousItem = column.previousItem(item);
            if (previousItem != null) {
                previousItem.handleClick(this, column, previousItem);
                previousItem.element().focus();
            }

        } else if (Key.ArrowLeft.match(event)) {
            event.preventDefault();
            FinderColumn previousColumn = previousColumn(column);
            if (previousColumn != null) {
                HTMLElement targetItem = previousColumn.querySelector(By.classname(component(finder, Classes.item))
                        .and(By.classname(modifier(selected))));
                if (targetItem != null) {
                    markActive(previousColumn);
                    targetItem.focus();
                    scrollIntoView(previousColumn);
                    FinderItem previousItem = previousColumn.item(targetItem.dataset.get(Dataset.identifier));
                    if (previousItem != null) {
                        previousItem.previewItem(this, previousColumn, previousItem);
                    }
                }
            }

        } else if (Key.ArrowRight.match(event)) {
            event.preventDefault();
            if (item.hasNext()) {
                // Don't use item.nextColumn() here!
                // If FinderItem.nextColumn is not null, it would return a
                // new column not in the Finder.items map and not attached to the DOM!
                // It is safe to assume that the next column is in the item map because
                // it has been selected. FinderItem.handleClick() took care of this.
                FinderColumn nextColumn = nextColumn(column);
                if (nextColumn != null) {
                    FinderItem targetItem = null;
                    if (!nextColumn.visibleItems().isEmpty()) {
                        targetItem = nextColumn.visibleItems().get(0);
                    }
                    if (targetItem != null) {
                        targetItem.handleClick(this, nextColumn, targetItem);
                        targetItem.element().focus();
                        scrollIntoView(nextColumn);
                    }
                }
            }
        }
    }

    private FinderColumn previousColumn(FinderColumn column) {
        FinderColumn previous = null;
        for (FinderColumn c : items.values()) {
            if (c.identifier().equals(column.identifier())) {
                return previous;
            }
            previous = c;
        }
        return null;
    }

    private FinderColumn nextColumn(FinderColumn column) {
        boolean found = false;
        for (FinderColumn c : items.values()) {
            if (found) {
                return c;
            }
            if (c.identifier().equals(column.identifier())) {
                found = true;
            }
        }
        return null;
    }

    private void scrollIntoView(FinderColumn column) {
        requestAnimationFrame(__ -> {
            HTMLElement container = cc.element();
            HTMLElement columnElement = column.element();
            var colLeft = columnElement.offsetLeft;
            var colRight = colLeft + columnElement.offsetWidth;
            var scrollLeft = container.scrollLeft;
            var viewWidth = container.clientWidth;

            if (colLeft < scrollLeft) {
                container.scrollLeft = colLeft;
            } else if (colRight > scrollLeft + viewWidth) {
                container.scrollLeft = colRight - viewWidth;
            }
        });
    }

    private FinderItem findItem(String identifier) {
        if (identifier != null) {
            for (FinderColumn column : items.values()) {
                FinderItem item = column.findItem(identifier);
                if (item != null) {
                    return item;
                }
            }
        }
        return null;
    }
}
