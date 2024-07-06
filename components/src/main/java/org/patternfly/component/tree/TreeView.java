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
import java.util.LinkedHashMap;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.handler.MultiSelectHandler;
import org.patternfly.handler.SelectHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.tree.TreeViewType.default_;
import static org.patternfly.component.tree.TreeViewType.selectableItems;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.tree;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.list;
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
public class TreeView extends BaseComponent<HTMLElement, TreeView> implements Attachable {

    // ------------------------------------------------------ factory

    public static TreeView treeView() {
        return new TreeView(default_);
    }

    public static TreeView treeView(TreeViewType type) {
        return new TreeView(type);
    }

    // ------------------------------------------------------ instance

    final TreeViewType type;
    final LinkedHashMap<String, TreeViewItem> items;
    private final HTMLContainerBuilder<HTMLUListElement> ul;
    Supplier<Element> icon;
    Supplier<Element> expandedIcon;
    private ToggleHandler<TreeViewItem> toggleHandler;
    private SelectHandler<TreeViewItem> selectHandler;
    private MultiSelectHandler<TreeView, TreeViewItem> multiSelectHandler;

    TreeView(TreeViewType type) {
        super(ComponentType.TreeView, div().css(component(treeView)).element());
        this.type = type;
        this.items = new LinkedHashMap<>();
        this.icon = null;
        this.expandedIcon = null;

        add(ul = ul().css(component(treeView, list)).attr(role, tree));
        storeComponent();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (items.values().iterator().hasNext()) {
            TreeViewItem item = items.values().iterator().next();
            if (item.tabElement != null) {
                item.tabElement.tabIndex = 0;
            }
        }
    }

    // ------------------------------------------------------ add

    public <T> TreeView addItems(Iterable<T> items, Function<T, TreeViewItem> display) {
        for (T item : items) {
            TreeViewItem tvi = display.apply(item);
            addItem(tvi);
        }
        return this;
    }

    public TreeView addItem(TreeViewItem item) {
        return add(item);
    }

    // override to ensure internal wiring
    public TreeView add(TreeViewItem item) {
        items.put(item.id, item);
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
        this.toggleHandler = toggleHandler;
        return this;
    }

    public TreeView onSelect(SelectHandler<TreeViewItem> selectHandler) {
        this.selectHandler = selectHandler;
        return this;
    }

    public TreeView onMultiSelect(MultiSelectHandler<TreeView, TreeViewItem> selectHandler) {
        this.multiSelectHandler = selectHandler;
        return this;
    }

    // ------------------------------------------------------ api

    public void toggle(TreeViewItem item) {
        toggle(item, true);
    }

    public void toggle(TreeViewItem item, boolean fireEvent) {
        if (item != null) {
            item.toggle(fireEvent);
            if (toggleHandler != null && fireEvent) {
                toggleHandler.onToggle(new Event(""), item, item.expanded());
            }
        }
    }

    public void select(TreeViewItem item) {
        select(item, true, true);
    }

    public void select(TreeViewItem item, boolean selected) {
        select(item, selected, true);
    }

    public void select(TreeViewItem item, boolean selected, boolean fireEvent) {
        if (item != null) {
            if (type == default_ || type == selectableItems) {
                // unselect all items
                traverseItems(items.values(), itm -> itm.markSelected(type, false));
            }
            // select specified item
            item.markSelected(type, selected);
            if (selectHandler != null && fireEvent) {
                selectHandler.onSelect(new Event(""), item, selected);
            }
            if (multiSelectHandler != null) {
                multiSelectHandler.onSelect(new Event(""), this, selectedItems());
            }
        }
    }

    public List<TreeViewItem> selectedItems() {
        List<TreeViewItem> selected = new ArrayList<>();
        traverseItems(items.values(), itm -> {
            if (itm.selected()) {
                selected.add(itm);
            }
        });
        return selected;
    }

    // ------------------------------------------------------ internal

    private void traverseItems(Iterable<TreeViewItem> items, Consumer<TreeViewItem> code) {
        for (TreeViewItem item : items) {
            code.accept(item);
            traverseItems(item.items.values(), code);
        }
    }

}
