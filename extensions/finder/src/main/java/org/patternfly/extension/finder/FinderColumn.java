package org.patternfly.extension.finder;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Role;
import org.patternfly.component.AddItemHandler;
import org.patternfly.component.AurHandler;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.HasItems;
import org.patternfly.component.RemoveItemHandler;
import org.patternfly.component.UpdateItemHandler;
import org.patternfly.core.ComponentContext;
import org.patternfly.handler.SelectHandler;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.Role.tree;
import static org.patternfly.extension.finder.FinderClasses.column;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.extension.finder.FinderClasses.items;
import static org.patternfly.style.Classes.component;

public class FinderColumn extends BaseComponent<HTMLElement, FinderColumn> implements
        ComponentContext<HTMLElement, FinderColumn>,
        HasIdentifier<HTMLElement, FinderColumn>,
        HasItems<HTMLElement, FinderColumn, FinderItem> {

    // ------------------------------------------------------ factory

    public static FinderColumn finderColumn(String identifier) {
        return new FinderColumn(identifier);
    }

    // ------------------------------------------------------ instance

    private final String identifier;
    private final Map<String, Object> data;
    private final Map<String, FinderItem> items;
    private final AurHandler<FinderColumn, FinderItem> aur;
    private final List<SelectHandler<FinderItem>> selectHandler;
    private final HTMLContainerBuilder<HTMLUListElement> ul;

    FinderColumn(String identifier) {
        super(ComponentType.FinderColumn, div().css(component(finder, column)).element());
        this.identifier = identifier;
        this.data = new HashMap<>();
        this.items = new LinkedHashMap<>();
        this.aur = new AurHandler<>(this);
        this.selectHandler = new ArrayList<>();

        add(ul = ul().css(component(finder, column, FinderClasses.items))
                .role(tree));
        storeComponent();
    }

    // ------------------------------------------------------ add

    @Override
    public FinderColumn add(FinderItem item) {
        items.put(item.identifier(), item);
        ul.add(item.element());
        return aur.added(item);
    }

    public FinderColumn addSearch(FinderColumnSearch search) {
        return add(search);
    }

    // ------------------------------------------------------ builder

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

    // ------------------------------------------------------ api

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
        removeChildrenFrom(ul);
        Iterator<FinderItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            FinderItem item = iterator.next();
            iterator.remove();
            aur.removed(item);
        }
    }

    // ------------------------------------------------------ internal

    private FinderItem findItem(String identifier) {
        return items.get(identifier);
    }

    private void unselectAllItems() {
        for (FinderItem item : items.values()) {
            item.markSelected(false);
        }
    }
}
