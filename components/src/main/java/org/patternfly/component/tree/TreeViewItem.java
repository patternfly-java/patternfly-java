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

import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Supplier;

import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.component.WithIcon;
import org.patternfly.component.WithText;
import org.patternfly.core.ComponentContext;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Compact;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLUListElement;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.InputType.checkbox;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.component.tree.TreeViewItemStatus.pending;
import static org.patternfly.component.tree.TreeViewItemStatus.rejected;
import static org.patternfly.component.tree.TreeViewItemStatus.resolved;
import static org.patternfly.component.tree.TreeViewItemStatus.static_;
import static org.patternfly.component.tree.TreeViewType.checkboxes;
import static org.patternfly.component.tree.TreeViewType.default_;
import static org.patternfly.component.tree.TreeViewType.selectableItems;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.core.Roles.group;
import static org.patternfly.core.Roles.treeItem;
import static org.patternfly.core.Timeouts.LOADING_TIMEOUT;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.style.Classes.check;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.container;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.node;
import static org.patternfly.style.Classes.toggle;
import static org.patternfly.style.Classes.treeView;
import static org.patternfly.style.Size.md;

public class TreeViewItem extends TreeViewSubComponent<HTMLLIElement, TreeViewItem> implements
        TreeViewItems<HTMLLIElement, TreeViewItem>,
        ComponentContext<HTMLLIElement, TreeViewItem>,
        Compact<HTMLLIElement, TreeViewItem>,
        Expandable<HTMLLIElement, TreeViewItem>,
        WithIcon<HTMLLIElement, TreeViewItem>,
        WithText<HTMLLIElement, TreeViewItem> {

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
    private static final Supplier<TreeViewItem> loading = () -> treeViewItem(
            Id.unique(ComponentType.TreeView.id, SUB_COMPONENT_NAME, "loading"))
            .text("Loading")
            .icon(spinner(md, "Loading").element());

    public final String id;
    final LinkedHashMap<String, TreeViewItem> items;
    private final Map<String, Object> data;
    private final HTMLElement contentElement;
    private final HTMLElement containerElement;
    private final HTMLUListElement childrenElement;
    TreeViewItem parent;
    HTMLElement tabElement;
    private String text;
    private boolean domFinished;
    private TreeViewItemStatus status;
    private Element icon;
    private Element expandedIcon;
    private HTMLElement nodeElement;
    private HTMLElement textElement;
    private HTMLElement toggleElement;
    private HTMLElement iconContainer;
    private HTMLInputElement checkboxElement;
    private ToggleHandler<TreeViewItem> toggleHandler;
    private Function<TreeViewItem, Promise<Iterable<TreeViewItem>>> asyncItems;

    TreeViewItem(String id) {
        super(SUB_COMPONENT_NAME, li().css(component(treeView, list, item))
                .aria(expanded, false)
                .attr(role, treeItem)
                .attr(tabindex, -1)
                .element());
        this.id = id;
        this.domFinished = false;
        this.status = static_;
        this.items = new LinkedHashMap<>();
        this.data = new HashMap<>();

        add(contentElement = div().css(component(treeView, content)).element());
        containerElement = span().css(component(treeView, node, container)).element();
        childrenElement = ul().css(component(treeView, list)).attr(role, group).element();
    }

    // ------------------------------------------------------ add

    @Override
    public TreeViewItem add(TreeViewItem item) {
        item.parent = this;
        items.put(item.id, item);
        childrenElement.appendChild(item.element());
        TreeView treeView = lookupComponent(true);
        if (treeView != null) {
            item.finishDOM(treeView);
        }
        return this;
    }

    public TreeViewItem addItems(Function<TreeViewItem, Promise<Iterable<TreeViewItem>>> items) {
        return add(items);
    }

    public TreeViewItem add(Function<TreeViewItem, Promise<Iterable<TreeViewItem>>> items) {
        status = pending;
        asyncItems = items;
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public TreeViewItem text(String text) {
        this.text = text;
        if (domFinished) {
            textElement.textContent = text;
        }
        return this;
    }

    @Override
    public String text() {
        return text;
    }

    @Override
    public TreeViewItem icon(Element icon) {
        this.icon = icon;
        if (domFinished) {
            if (!expanded()) {
                failSafeIconContainer().replaceChildren(icon);
            }
        }
        return this;
    }

    @Override
    public TreeViewItem removeIcon() {
        icon = null;
        expandedIcon = null;
        failSafeRemoveFromParent(iconContainer);
        return this;
    }

    public TreeViewItem expandedIcon(PredefinedIcon icon) {
        return expandedIcon(icon.element());
    }

    public TreeViewItem expandedIcon(Element icon) {
        this.expandedIcon = icon;
        if (domFinished) {
            if (expanded()) {
                failSafeIconContainer().replaceChildren(icon);
            }
        }
        return this;
    }

    @Override
    public <T> TreeViewItem store(String key, T value) {
        data.put(key, value);
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

    // ------------------------------------------------------ api

    public boolean selected() {
        if (checkboxElement != null) {
            return checkboxElement.checked;
        } else if (nodeElement != null) {
            return nodeElement.classList.contains(modifier(current));
        }
        return false;
    }

    @Override
    public void collapse(boolean fireEvent) {
        Expandable.collapse(element(), element(), null);
        failSafeRemoveFromParent(childrenElement);
        if (domFinished && icon != null && expandedIcon != null) {
            failSafeIconContainer().replaceChildren(icon);
        }
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, false);
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        Expandable.expand(element(), element(), null);
        add(childrenElement);
        if (domFinished && icon != null && expandedIcon != null) {
            failSafeIconContainer().replaceChildren(expandedIcon);
        }
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, true);
        }
    }

    public void reset() {
        if (status == resolved || status == rejected) {
            status = pending;
            items.clear();
            collapse(false);
            removeChildrenFrom(childrenElement);
            if (domFinished && !containerElement.contains(toggleElement)) {
                insertFirst(containerElement, toggleElement);
            }
        }
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
    public Iterator<TreeViewItem> iterator() {
        return items.values().iterator();
    }

    // ------------------------------------------------------ internal

    void finishDOM(TreeView tv) {
        if (domFinished) {
            logger.warn("DOM for tree view item %o - %s[%s] is already finished", element(), id, tv.type.name());
            return;
        }

        logger.debug("Finishing DOM for tree view item %o - %s[%s]", element(), id, tv.type.name());
        // create node, toggle and text elements based on the tree view type
        switch (tv.type) {
            case default_:
                nodeElement = button().css(Classes.component(treeView, node))
                        .attr(tabindex, -1)
                        .on(click, e -> {
                            load();
                            if (status == pending || !items.isEmpty()) {
                                tv.toggle(this);
                            }
                            tv.select(this);
                        })
                        .element();
                toggleElement = span().css(component(treeView, node, toggle))
                        .add(span().css(component(treeView, node, toggle, Classes.icon)).add(angleRight()))
                        .element();
                textElement = span().css(component(treeView, node, Classes.text)).element();
                tabElement = nodeElement;
                break;
            case selectableItems:
                String selectableId = Id.unique(subComponentId(), "selectable");
                nodeElement = div().css(Classes.component(treeView, node), modifier(Classes.selectable))
                        .id(selectableId)
                        .on(click, e -> tv.select(this))
                        .element();
                toggleElement = button().css(component(treeView, node, toggle))
                        .attr(tabindex, -1)
                        .aria(labelledBy, selectableId)
                        .on(click, e -> {
                            load();
                            tv.toggle(this);
                            e.stopPropagation();
                        })
                        .add(span().css(component(treeView, node, toggle, Classes.icon)).add(angleRight()))
                        .element();
                textElement = button().css(component(treeView, node, Classes.text))
                        .attr(tabindex, -1)
                        .element();
                tabElement = textElement;
                break;
            case checkboxes:
                String labelId = Id.unique(subComponentId(), "label");
                String checkboxId = Id.unique(subComponentId(), "checkbox");
                nodeElement = label().css(Classes.component(treeView, node))
                        .id(labelId)
                        .apply(l -> l.htmlFor = checkboxId)
                        .element();
                toggleElement = button().css(component(treeView, node, toggle))
                        .attr(tabindex, -1)
                        .aria(labelledBy, labelId)
                        .on(click, e -> {
                            load();
                            tv.toggle(this);
                            e.stopPropagation();
                        })
                        .add(span().css(component(treeView, node, toggle, Classes.icon)).add(angleRight()))
                        .element();
                textElement = span().css(component(treeView, node, Classes.text)).element();
                containerElement.appendChild(span().css(component(treeView, node, check))
                        .add(checkboxElement = input(checkbox)
                                .id(checkboxId)
                                .aria(labelledBy, Id.build(id, "check"))
                                .tabIndex(-1)
                                .on(change, e -> tv.select(this, ((HTMLInputElement) e.target).checked))
                                .on(click, Event::stopPropagation)
                                .element())
                        .element());
                tabElement = checkboxElement;
                break;
            default:
                logger.error("Unsupported tree view type in tree view item %o - %s: %s", element(), id, tv.type.name());
                break;
        }

        // nest elements top-down: content → node → container → [toggle], text
        contentElement.appendChild(nodeElement);
        nodeElement.appendChild(containerElement);
        containerElement.appendChild(textElement);
        if (status == pending || !items.isEmpty()) {
            insertFirst(containerElement, toggleElement);
        }
        domFinished = true;

        // text & icons
        if (text != null) {
            text(text);
        }
        if (icon != null) {
            icon(icon);
        } else if (tv.icon != null) {
            icon(tv.icon.get());
        }
        if (expandedIcon != null) {
            expandedIcon(expandedIcon);
        } else if (tv.expandedIcon != null) {
            expandedIcon(tv.expandedIcon.get());
        }

        // children
        for (TreeViewItem child : items.values()) {
            if (!child.domFinished) {
                child.finishDOM(tv);
            }
        }
    }

    void markSelected(TreeViewType type, boolean selected) {
        if (domFinished) {
            tabElement.tabIndex = selected ? 0 : -1;
            if ((type == default_ && status == resolved && items.isEmpty()) || type == selectableItems) {
                nodeElement.classList.toggle(modifier(current), selected);
            } else if (checkboxElement != null && type == checkboxes) {
                // ↓ (un)check child items
                check(this, selected);
                // ↑ set indeterminate state on parent items
                indeterminate(parent);
            }
        }
    }

    private void check(TreeViewItem item, boolean checked) {
        if (item.checkboxElement != null) {
            item.checkboxElement.checked = checked;
            item.checkboxElement.indeterminate = false;
            for (TreeViewItem child : item.items.values()) {
                check(child, checked);
            }
        }
    }

    private void indeterminate(TreeViewItem item) {
        if (item != null && item.checkboxElement != null) {
            boolean all = true, some = false, none = true;
            for (TreeViewItem child : item.items.values()) {
                if (child.checkboxElement != null) {
                    boolean checked = child.checkboxElement.checked;
                    boolean indeterminate = child.checkboxElement.indeterminate;
                    all = all && checked;
                    some = some || checked || indeterminate;
                    none = none && !checked;
                    if (all) {
                        item.checkboxElement.checked = true;
                        item.checkboxElement.indeterminate = false;
                    } else if (some) {
                        item.checkboxElement.checked = false;
                        item.checkboxElement.indeterminate = true;
                    } else /*if (none)*/ {
                        item.checkboxElement.checked = false;
                        item.checkboxElement.indeterminate = false;
                    }
                }
            }
            indeterminate(item.parent);
        }
    }

    private void load() {
        if (status == pending && asyncItems != null) {

            // show loading indicator after a given timeout
            TreeViewItem[] loadingItem = new TreeViewItem[1];
            double handle = setTimeout(__ -> {
                loadingItem[0] = loading.get();
                TreeView treeView = lookupComponent(true);
                if (treeView != null) {
                    loadingItem[0].finishDOM(treeView);
                }
                childrenElement.appendChild(loadingItem[0].element());
            }, LOADING_TIMEOUT);

            // load items
            asyncItems.apply(this)
                    .then(items -> {
                        status = resolved;
                        for (TreeViewItem child : items) {
                            addItem(child);
                        }
                        if (this.items.isEmpty()) {
                            failSafeRemoveFromParent(toggleElement);
                            collapse(false);
                        }
                        return null;
                    })
                    .catch_(error -> {
                        status = rejected;
                        logger.error("Unable to load items for %o - %s: %s", element(), id, error);
                        return null;
                    })
                    .finally_(() -> {
                        clearTimeout(handle);
                        failSafeRemoveFromParent(loadingItem[0]);
                    });
        }
    }

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null && textElement != null) {
            insertBefore(iconContainer = span().css(component(treeView, node, Classes.icon)).element(), textElement);
        }
        return iconContainer;
    }
}
