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

import java.util.function.Consumer;
import java.util.function.Function;

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;

import elemental2.dom.Element;

/**
 * Holds common methods to add {@link TreeViewItem}s implemented by {@link TreeView} and {@link TreeViewItem}.
 */
public interface TreeViewItems<E extends Element, B extends TypedBuilder<E, B>>
        extends Iterable<TreeViewItem>, TypedBuilder<E, B>, IsElement<E> {

    /**
     * Traverses the tree structure of TreeViewItems and applies the provided code to each item.
     * This method recursively traverses the items and their children.
     *
     * @param items the TreeViewItems to traverse
     * @param code  the Consumer that will be applied to each TreeViewItem
     */
    static void traverseItems(TreeViewItems<?, ?> items, Consumer<TreeViewItem> code) {
        for (TreeViewItem item : items) {
            code.accept(item);
            traverseItems(item, code);
        }
    }

    default <T> B addItems(Iterable<T> items, Function<T, TreeViewItem> display) {
        for (T item : items) {
            TreeViewItem treeViewItem = display.apply(item);
            addItem(treeViewItem);
        }
        return that();
    }

    default B addItem(TreeViewItem item) {
        return add(item);
    }

    B add(TreeViewItem item);
}
