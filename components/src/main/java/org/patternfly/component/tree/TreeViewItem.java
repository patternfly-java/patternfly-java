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

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.Expandable;
import org.patternfly.component.IconPosition;
import org.patternfly.component.WithIcon;
import org.patternfly.component.WithIconAndText;
import org.patternfly.component.WithText;
import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.icon.IconSets;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Compact;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.core.Roles.group;
import static org.patternfly.core.Roles.treeItem;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.treeView;

public class TreeViewItem extends TreeViewSubComponent<HTMLLIElement, TreeViewItem> implements
        Compact<HTMLLIElement, TreeViewItem>,
        Expandable<HTMLLIElement, TreeViewItem>,
        WithIcon<HTMLLIElement, TreeViewItem>,
        WithText<HTMLLIElement, TreeViewItem>,
        WithIconAndText<HTMLLIElement, TreeViewItem> {

    // ------------------------------------------------------ factory

    public static TreeViewItem treeViewItem(String id) {
        return new TreeViewItem(id);
    }

    public static TreeViewItem treeViewItem(String id, String text) {
        return new TreeViewItem(id).text(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tvi";
    private static final Logger logger = Logger.getLogger(TreeViewItem.class.getName());
    public final String id;
    TreeViewItem parent;
    private final HTMLContainerBuilder<HTMLButtonElement> node;
    private final HTMLContainerBuilder<HTMLElement> container;
    private final HTMLContainerBuilder<HTMLElement> text;
    private HTMLElement toggle;
    private HTMLUListElement children;
    private ToggleHandler<TreeViewItem> toggleHandler;

    TreeViewItem(String id) {
        super(SUB_COMPONENT_NAME, li().css(component(treeView, list, item))
                .aria(Aria.expanded, false)
                .attr(role, treeItem)
                .attr(tabindex, -1)
                .element());
        this.id = id;
        add(div().css(component(treeView, content))
                .add(node = button().css(component(treeView, Classes.node))
                        .attr(tabindex, 0)
                        .on(click, e -> {
                            if (leaf()) {
                                TreeView treeView = lookupComponent();
                                treeView.select(this);
                            } else {
                                toggle();
                            }
                        })
                        .add(container = span().css(component(treeView, Classes.node, Classes.container))
                                .add(text = span().css(component(treeView, Classes.node, Classes.text))))));
    }

    // ------------------------------------------------------ add

    public <T> TreeViewItem addItems(Iterable<T> items, Function<T, TreeViewItem> display) {
        for (T item : items) {
            TreeViewItem sli = display.apply(item);
            addItem(sli);
        }
        return this;
    }

    public TreeViewItem addItem(TreeViewItem item) {
        return add(item);
    }

    // override to ensure internal wiring
    public TreeViewItem add(TreeViewItem item) {
        failSafeAddToggle();
        failSafeChildren().appendChild(item.element());
        item.parent = this;
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public TreeViewItem text(String text) {
        this.text.textContent(text);
        return this;
    }

    @Override
    public TreeViewItem icon(Element icon) {
        return this;
    }

    @Override
    public TreeViewItem removeIcon() {
        return this;
    }

    @Override
    public TreeViewItem iconAndText(Element icon, String text, IconPosition iconPosition) {
        return this;
    }

    @Override
    public TreeViewItem that() {
        return this;
    }

    // ------------------------------------------------------ events

    public TreeViewItem onToggle(ToggleHandler<TreeViewItem> toggleHandler) {
        this.toggleHandler = toggleHandler;
        return this;
    }

    public TreeViewItem onClick(ComponentHandler<TreeViewItem> actionHandler) {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void collapse(boolean fireEvent) {
        Expandable.collapse(element(), element(), null);
        failSafeRemoveFromParent(children);
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, false);
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        Expandable.expand(element(), element(), null);
        if (children != null) {
            add(children);
        }
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, true);
        }
    }

    public boolean leaf() {
        return children == null;
    }

    // ------------------------------------------------------ internal

    void markSelected(boolean selected) {
        node.classList().toggle(modifier(current), selected);
    }

    private HTMLUListElement failSafeChildren() {
        if (children == null) {
            children = ul().css(component(treeView, list))
                    .attr(role, group)
                    .element();
        }
        return children;
    }

    private void failSafeAddToggle() {
        if (toggle == null) {
            container.add(toggle = span().css(component(treeView, Classes.node, Classes.toggle))
                    .add(span().css(component(treeView, Classes.node, Classes.toggle, icon))
                            .add(IconSets.fas.angleRight()))
                    .element());
        }
    }
}
