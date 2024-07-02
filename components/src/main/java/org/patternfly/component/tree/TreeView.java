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

import java.util.function.Function;

import org.jboss.elemento.By;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.handler.SelectHandler;
import org.patternfly.style.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.tree;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.modifier;
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
public class TreeView extends BaseComponent<HTMLElement, TreeView> {

    // ------------------------------------------------------ factory

    public static TreeView treeView() {
        return new TreeView();
    }

    // ------------------------------------------------------ instance

    private static final By CURRENT_TREE_VIEW_ITEM = By.classname(component(treeView, node))
            .and(By.classname(modifier(current)));
    private final HTMLContainerBuilder<HTMLUListElement> ul;
    private SelectHandler<TreeViewItem> selectHandler;

    TreeView() {
        super(ComponentType.TreeView, div().css(component(treeView)).element());
        add(ul = ul().css(component(treeView, list))
                .attr(role, tree));
        storeComponent();
    }

    // ------------------------------------------------------ add

    public <T> TreeView addItems(Iterable<T> items, Function<T, TreeViewItem> display) {
        for (T item : items) {
            TreeViewItem sli = display.apply(item);
            addItem(sli);
        }
        return this;
    }

    public TreeView addItem(TreeViewItem item) {
        return add(item);
    }

    // override to ensure internal wiring
    public TreeView add(TreeViewItem item) {
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

    @Override
    public TreeView that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public TreeView ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public TreeView onSelect(SelectHandler<TreeViewItem> selectHandler) {
        this.selectHandler = selectHandler;
        return this;
    }

    // ------------------------------------------------------ api

    public void select(TreeViewItem item) {
        select(item, true, true);
    }

    public void select(TreeViewItem item, boolean fireEvent) {
        select(item, true, fireEvent);
    }

    public void select(TreeViewItem item, boolean selected, boolean fireEvent) {
        if (item != null) {
            unselectAllItems();
            item.markSelected(selected);
            if (selectHandler != null && fireEvent) {
                selectHandler.onSelect(new Event(""), item, selected);
            }
        }
    }

    // ------------------------------------------------------ internal

    private void unselectAllItems() {
        for (HTMLElement element : findAll(CURRENT_TREE_VIEW_ITEM)) {
            element.classList.remove(modifier(current));
        }
    }
}
