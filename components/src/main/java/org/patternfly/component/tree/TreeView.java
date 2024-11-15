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
package org.patternfly.component.tree;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.core.Aria;
import org.patternfly.handler.MultiSelectHandler;
import org.patternfly.handler.SelectHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;
import elemental2.dom.KeyboardEvent;
import elemental2.dom.MutationRecord;
import elemental2.dom.ScrollIntoViewOptions;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.document;
import static java.util.Collections.emptyList;
import static java.util.Collections.reverse;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.keydown;
import static org.patternfly.component.tree.TreeViewType.default_;
import static org.patternfly.component.tree.TreeViewType.selectableItems;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.tree;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.node;
import static org.patternfly.style.Classes.treeView;
import static org.patternfly.style.Modifiers.toggleModifier;

/**
 * A tree view is a structure that displays data in a hierarchical view. It can be used in a
 * {@linkplain org.patternfly.component.menu.Dropdown dropdown}, {@linkplain org.patternfly.component.drawer.Drawer drawer},
 * primary-detail, {@linkplain org.patternfly.component.modal.Modal modal}, or
 * {@linkplain org.patternfly.component.wizard.Wizard wizard}.
 *
 * @see <a href= "https://www.patternfly.org/components/tree-view">https://www.patternfly.org/components/tree-view</a>
 */
public class TreeView extends BaseComponent<HTMLElement, TreeView> implements
        HasItems<HTMLElement, TreeView, TreeViewItem>,
        Attachable {

    // ------------------------------------------------------ factory

    public static TreeView treeView() {
        return new TreeView(default_);
    }

    public static TreeView treeView(TreeViewType type) {
        return new TreeView(type);
    }

    // ------------------------------------------------------ instance

    final TreeViewType type;
    private final LinkedHashMap<String, TreeViewItem> items;
    private final HTMLContainerBuilder<HTMLUListElement> ul;
    private final List<ToggleHandler<TreeViewItem>> toggleHandler;
    private final List<SelectHandler<TreeViewItem>> selectHandler;
    private final List<MultiSelectHandler<TreeView, TreeViewItem>> multiSelectHandler;
    Supplier<Element> icon;
    Supplier<Element> expandedIcon;
    private HandlerRegistration keyHandler;

    TreeView(TreeViewType type) {
        super(ComponentType.TreeView, div().css(component(treeView)).element());
        this.type = type;
        this.items = new LinkedHashMap<>();
        this.toggleHandler = new ArrayList<>();
        this.selectHandler = new ArrayList<>();
        this.multiSelectHandler = new ArrayList<>();
        this.icon = null;
        this.expandedIcon = null;

        add(ul = ul().css(component(treeView, list)).attr(role, tree));
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        traverseItems(this, treeViewItem -> treeViewItem.finishDOM(this));
        if (items.values().iterator().hasNext()) {
            TreeViewItem item = items.values().iterator().next();
            if (item.tabElement != null) {
                item.tabElement.tabIndex = 0;
            }
        }
        keyHandler = bind(element(), keydown, event -> {
            switch (type) {
                case default_:
                    handleKeys(event);
                    break;
                case selectableItems:
                case checkboxes:
                    handleKeysSelectable(event);
                    break;
            }
        });
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (keyHandler != null) {
            keyHandler.removeHandler();
        }
    }

    // ------------------------------------------------------ add

    @Override
    public TreeView add(TreeViewItem item) {
        items.put(item.identifier(), item);
        item.finishDOM(this);
        ul.add(item);
        return this;
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #guides(boolean) guides(true)} */
    public TreeView guides() {
        return guides(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(guides)} */
    public TreeView guides(boolean guides) {
        return toggleModifier(that(), element(), Classes.guides, guides);
    }

    public TreeView icon(Supplier<Element> icon) {
        this.icon = icon;
        return this;
    }

    public TreeView expandedIcon(Supplier<Element> icon) {
        this.expandedIcon = icon;
        return this;
    }

    @Override
    public TreeView that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public TreeView ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public TreeView onToggle(ToggleHandler<TreeViewItem> toggleHandler) {
        this.toggleHandler.add(toggleHandler);
        return this;
    }

    public TreeView onSelect(SelectHandler<TreeViewItem> selectHandler) {
        this.selectHandler.add(selectHandler);
        return this;
    }

    public TreeView onMultiSelect(MultiSelectHandler<TreeView, TreeViewItem> selectHandler) {
        this.multiSelectHandler.add(selectHandler);
        return this;
    }

    // ------------------------------------------------------ api

    public Promise<Iterable<TreeViewItem>> load(String identifier) {
        return load(findItem(identifier, items));
    }

    public Promise<Iterable<TreeViewItem>> load(TreeViewItem item) {
        if (item != null) {
            return item.load();
        } else {
            return Promise.resolve(emptyList());
        }
    }

    public void toggle(TreeViewItem item) {
        toggle(item, true);
    }

    public void toggle(TreeViewItem item, boolean fireEvent) {
        if (item != null) {
            item.toggle(fireEvent);
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), item, item.expanded()));
            }
        }
    }

    public void select(String identifier) {
        select(findItem(identifier, items), true, true);
    }

    public void select(TreeViewItem item) {
        select(item, true, true);
    }

    public void select(TreeViewItem item, boolean selected) {
        select(item, selected, true);
    }

    public void select(TreeViewItem item, boolean selected, boolean fireEvent) {
        if (item != null) {
            if ((type == default_ || type == selectableItems) && selected) {
                // unselect all items
                traverseItems(this, itm -> itm.markSelected(type, false));
            }
            // select specified item
            item.markSelected(type, selected);
            if (fireEvent) {
                selectHandler.forEach(sh -> sh.onSelect(new Event(""), item, selected));
                if (!multiSelectHandler.isEmpty()) {
                    multiSelectHandler.forEach(msh -> msh.onSelect(new Event(""), this, selectedItems()));
                }
            }
            if (selected) {
                // expand items from root to item
                List<TreeViewItem> parents = parents(item);
                reverse(parents);
                for (TreeViewItem treeViewItem : parents) {
                    treeViewItem.expand(false);
                }
                ScrollIntoViewOptions options = ScrollIntoViewOptions.create();
                options.setBlock("nearest");
                options.setInline("nearest");
                item.contentElement.scrollIntoView(options);
            }
        }
    }

    public List<TreeViewItem> selectedItems() {
        List<TreeViewItem> selected = new ArrayList<>();
        traverseItems(this, itm -> {
            if (itm.selected()) {
                selected.add(itm);
            }
        });
        return selected;
    }

    public void unselect() {
        unselect(false);
    }

    public void unselect(boolean fireEvent) {
        traverseItems(this, itm -> select(itm, false, fireEvent));
    }

    public void collapse() {
        items().forEach(item -> item.collapse(false));
    }

    public void reset() {
        traverseItems(this, TreeViewItem::reset);
    }

    public TreeViewItem findItem(String identifier) {
        return findItem(identifier, items);
    }

    @Override
    public Iterator<TreeViewItem> iterator() {
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
    public TreeViewItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void clear() {
        removeChildrenFrom(ul);
        items.clear();
    }

    // ------------------------------------------------------ internal

    /**
     * Traverses the tree structure of TreeViewItems and applies the provided code to each item. This method recursively
     * traverses the items and their children.
     *
     * @param items the TreeViewItems to traverse
     * @param code  the Consumer that will be applied to each TreeViewItem
     */
    static void traverseItems(HasItems<?, ?, TreeViewItem> items, Consumer<TreeViewItem> code) {
        for (TreeViewItem item : items) {
            code.accept(item);
            traverseItems(item, code);
        }
    }

    private TreeViewItem findItem(String id, LinkedHashMap<String, TreeViewItem> items) {
        TreeViewItem treeViewItem = items.get(id);
        if (treeViewItem == null) {
            for (Map.Entry<String, TreeViewItem> entry : items.entrySet()) {
                treeViewItem = findItem(id, entry.getValue().items);
                if (treeViewItem != null) {
                    break;
                }
            }
        }
        return treeViewItem;
    }

    private List<TreeViewItem> parents(TreeViewItem item) {
        List<TreeViewItem> parents = new ArrayList<>();
        addParent(item, parents);
        return parents;
    }

    private void addParent(TreeViewItem item, List<TreeViewItem> parents) {
        if (item != null && item.parent != null) {
            parents.add(item.parent);
            addParent(item.parent, parents);
        }
    }

    private void handleKeys(KeyboardEvent event) {
        HTMLElement target = (HTMLElement) event.target;
        if (!target.classList.contains(component(treeView, node))) {
            return;
        }
        Element activeElement = document.activeElement;
    }

    private void handleKeysSelectable(KeyboardEvent event) {
        HTMLElement target = (HTMLElement) event.target;
        if (!target.classList.contains(component(treeView, node))) {
            return;
        }
        Element activeElement = document.activeElement;
    }
}
