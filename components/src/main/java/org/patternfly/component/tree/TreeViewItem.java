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
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Supplier;

import org.jboss.elemento.ElementTextMethods;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.HasItems;
import org.patternfly.core.AsyncStatus;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Compact;
import org.patternfly.style.Modifiers.Disabled;
import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLUListElement;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static java.util.Collections.emptyList;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.InputType.checkbox;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.component.tree.TreeViewType.checkboxes;
import static org.patternfly.component.tree.TreeViewType.default_;
import static org.patternfly.component.tree.TreeViewType.selectableItems;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.AsyncStatus.pending;
import static org.patternfly.core.AsyncStatus.rejected;
import static org.patternfly.core.AsyncStatus.resolved;
import static org.patternfly.core.AsyncStatus.static_;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.core.Roles.group;
import static org.patternfly.core.Roles.treeItem;
import static org.patternfly.core.Timeouts.LOADING_TIMEOUT;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.icon.IconSets.fas.exclamationCircle;
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
        Compact<HTMLLIElement, TreeViewItem>,
        ComponentContext<HTMLLIElement, TreeViewItem>,
        ComponentIcon<HTMLLIElement, TreeViewItem>,
        Disabled<HTMLLIElement, TreeViewItem>,
        ElementTextMethods<HTMLLIElement, TreeViewItem>,
        Expandable<HTMLLIElement, TreeViewItem>,
        HasIdentifier<HTMLLIElement, TreeViewItem>,
        HasItems<HTMLLIElement, TreeViewItem, TreeViewItem> {

    // ------------------------------------------------------ factory

    public static TreeViewItem treeViewItem(String identifier) {
        return new TreeViewItem(identifier);
    }

    public static TreeViewItem treeViewItem(String identifier, String text) {
        return new TreeViewItem(identifier).text(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tvi";
    private static final Logger logger = Logger.getLogger(TreeViewItem.class.getName());
    private static final Supplier<TreeViewItem> loading = () -> treeViewItem(
            Id.unique(ComponentType.TreeView.id, SUB_COMPONENT_NAME, "loading"))
            .text("Loading")
            .icon(spinner(md, "Loading").element());
    private static final Supplier<TreeViewItem> error = () -> treeViewItem(
            Id.unique(ComponentType.TreeView.id, SUB_COMPONENT_NAME, "error"))
            .text("Error")
            .icon(exclamationCircle());

    final LinkedHashMap<String, TreeViewItem> items;
    final HTMLElement contentElement;
    private final String identifier;
    private final Map<String, Object> data;
    private final HTMLElement containerElement;
    private final HTMLUListElement childrenElement;
    private final List<HTMLButtonElement> buttonElements;
    private final List<HTMLInputElement> inputElements;

    TreeView tv;
    TreeViewItem parent;
    HTMLElement tabElement;
    private String text;
    private boolean domFinished;
    private AsyncStatus status;
    private Element icon;
    private Element expandedIcon;
    private HTMLElement nodeElement;
    private HTMLElement textElement;
    private HTMLElement toggleElement;
    private HTMLElement iconContainer;
    private HTMLInputElement checkboxElement;
    private final List<ToggleHandler<TreeViewItem>> toggleHandler;
    private Function<TreeViewItem, Promise<Iterable<TreeViewItem>>> asyncItems;

    TreeViewItem(String identifier) {
        super(SUB_COMPONENT_NAME, li().css(component(treeView, list, item))
                .aria(expanded, false)
                .attr(role, treeItem)
                .attr(tabindex, -1)
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.domFinished = false;
        this.status = static_;
        this.items = new LinkedHashMap<>();
        this.data = new HashMap<>();
        this.buttonElements = new ArrayList<>();
        this.inputElements = new ArrayList<>();
        this.toggleHandler = new ArrayList<>();

        add(contentElement = div().css(component(treeView, content)).element());
        containerElement = span().css(component(treeView, node, container)).element();
        childrenElement = ul().css(component(treeView, list)).attr(role, group).element();
    }

    // ------------------------------------------------------ add

    @Override
    public TreeViewItem add(TreeViewItem item) {
        item.parent = this;
        items.put(item.identifier, item);
        childrenElement.appendChild(item.element());
        item.finishDOM(tv);
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
    public TreeViewItem disabled(boolean disabled) {
        for (HTMLButtonElement buttonElement : buttonElements) {
            buttonElement.disabled = disabled;
        }
        for (HTMLInputElement inputElement : inputElements) {
            inputElement.disabled = disabled;
        }
        return Disabled.super.disabled(disabled);
    }

    @Override
    public TreeViewItem text(String text) {
        this.text = text;
        if (domFinished) {
            Elements.textNode(textElement, text);
        }
        return this;
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
        this.toggleHandler.add(toggleHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String identifier() {
        return identifier;
    }

    public TreeViewItem parent() {
        return parent;
    }

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
        if (expanded()) {
            Expandable.collapse(element(), element(), null);
            failSafeRemoveFromParent(childrenElement);
            if (domFinished && icon != null && expandedIcon != null) {
                failSafeIconContainer().replaceChildren(icon);
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
            if (!isAttached(childrenElement)) {
                add(childrenElement);
            }
            if (domFinished && icon != null && expandedIcon != null) {
                failSafeIconContainer().replaceChildren(expandedIcon);
            }
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), this, true));
            }
        }
    }

    public Promise<Iterable<TreeViewItem>> load() {
        if (status == pending && asyncItems != null) {
            // show loading indicator after a given timeout
            TreeViewItem[] loadingItem = new TreeViewItem[1];
            double handle = setTimeout(__ -> {
                loadingItem[0] = loading.get();
                loadingItem[0].finishDOM(tv);
                childrenElement.appendChild(loadingItem[0].element());
            }, LOADING_TIMEOUT);

            // load items
            return asyncItems.apply(this)
                    .then(items -> {
                        status = resolved;
                        clearTimeout(handle);
                        failSafeRemoveFromParent(loadingItem[0]);
                        for (TreeViewItem child : items) {
                            addItem(child);
                        }
                        if (this.items.isEmpty()) {
                            failSafeRemoveFromParent(toggleElement);
                            collapse(false);
                        }
                        return Promise.resolve(items);
                    })
                    .catch_(error -> {
                        status = rejected;
                        clearTimeout(handle);
                        failSafeRemoveFromParent(loadingItem[0]);
                        logger.error("Unable to load items for %o - %s: %s", element(), identifier, error);
                        TreeViewItem errorItem = TreeViewItem.error.get();
                        errorItem.finishDOM(tv);
                        childrenElement.appendChild(errorItem.element());
                        return Promise.reject(error);
                    });
        } else {
            return Promise.resolve(emptyList());
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

    public Promise<Iterable<TreeViewItem>> reload() {
        boolean expanded = expanded();
        reset();
        return load().then(items -> {
            if (expanded) {
                expand(false);
            }
            return Promise.resolve(items);
        });
    }

    public AsyncStatus status() {
        return status;
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
        if (status == static_) {
            removeChildrenFrom(element());
            items.clear();
        } else if (status == resolved || status == rejected || status == pending) {
            reset();
        }
    }

    @Override
    public String text() {
        return text;
    }

    // ------------------------------------------------------ internal

    void finishDOM(TreeView tv) {
        if (tv == null) {
            logger.warn("DOM for tree view item %s cannot be finished: Unable to find parent tree view component: %o",
                    identifier, element());
            return;
        }
        if (domFinished) {
            logger.warn("DOM for tree view item %s[%s] is already finished: %o", identifier, tv.type.name(), element());
            return;
        }

        this.tv = tv;
        logger.debug("Finish DOM for tree view item %s[%s]: %o", identifier, tv.type.name(), element());
        // create node, toggle and text elements based on the tree view type
        switch (tv.type) {
            case default_:
                nodeElement = button().css(component(treeView, node))
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
                buttonElements.add((HTMLButtonElement) nodeElement);
                break;
            case selectableItems:
                String selectableId = Id.unique(subComponentId(), "selectable");
                nodeElement = div().css(component(treeView, node), modifier(Classes.selectable))
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
                buttonElements.add((HTMLButtonElement) toggleElement);
                buttonElements.add((HTMLButtonElement) textElement);
                break;
            case checkboxes:
                String labelId = Id.unique(subComponentId(), "label");
                String checkboxId = Id.unique(subComponentId(), "checkbox");
                nodeElement = label().css(component(treeView, node))
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
                                .aria(labelledBy, Id.build(identifier, "check"))
                                .tabIndex(-1)
                                .on(change, e -> tv.select(this, ((HTMLInputElement) e.target).checked))
                                .on(click, Event::stopPropagation)
                                .element())
                        .element());
                tabElement = checkboxElement;
                buttonElements.add((HTMLButtonElement) toggleElement);
                inputElements.add(checkboxElement);
                break;
            default:
                logger.error("Unsupported tree view type in tree view item %s: %s %o", identifier, tv.type.name(), element());
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

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null && textElement != null) {
            insertBefore(iconContainer = span().css(component(treeView, node, Classes.icon)).element(), textElement);
        }
        return iconContainer;
    }
}
