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

import java.util.HashMap;
import java.util.Map;
import java.util.function.Supplier;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.emptystate.EmptyState;
import org.patternfly.core.Aria;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static java.lang.Boolean.parseBoolean;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.Role.treeitem;
import static org.patternfly.component.Severity.danger;
import static org.patternfly.component.emptystate.EmptyState.emptyState;
import static org.patternfly.component.emptystate.EmptyStateBody.emptyStateBody;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Aria.selected;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.extension.finder.FinderClasses.folder;
import static org.patternfly.extension.finder.FinderClasses.pin;
import static org.patternfly.extension.finder.FinderItemDescription.finderItemDescription;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.icon.IconSets.fas.thumbtack;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.status;
import static org.patternfly.style.Modifiers.toggleModifier;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Size.xs;

public class FinderItem extends FinderSubComponent<HTMLElement, FinderItem> implements
        ComponentContext<HTMLElement, FinderItem>,
        ComponentIcon<HTMLElement, FinderItem>,
        ElementTextDelegate<HTMLElement, FinderItem>,
        HasIdentifier<HTMLElement, FinderItem> {

    // ------------------------------------------------------ factory

    public static FinderItem finderItem(String identifier) {
        return new FinderItem(identifier);
    }

    public static FinderItem finderItem(String identifier, String text) {
        return new FinderItem(identifier).text(text);
    }

    public static FinderItem finderItem(String identifier, String text, String description) {
        return new FinderItem(identifier).text(text).addDescription(description);
    }

    public static FinderItem emptyItem(EmptyState emptyState) {
        FinderItem error = statusItem(Id.unique(ComponentType.TreeView.id, SUB_COMPONENT_NAME, "empty"));
        removeChildrenFrom(error.element());
        error.add(emptyState);
        return error;
    }

    static FinderItem loadingItem() {
        FinderItem loading = statusItem(Id.unique(ComponentType.Finder.id, SUB_COMPONENT_NAME, "loading"));
        insertFirst(loading.rc.element(), spinner(lg, "sm").element());
        return loading.text("Loading...");
    }

    static FinderItem errorItem() {
        FinderItem error = statusItem(Id.unique(ComponentType.TreeView.id, SUB_COMPONENT_NAME, "error"));
        removeChildrenFrom(error.element());
        error.add(emptyState().size(xs).status(danger).text("Error")
                .addBody(emptyStateBody().text("An error occurred while loading the data.")));
        return error;
    }

    private static FinderItem statusItem(String identifier) {
        FinderItem item = new FinderItem(identifier).css(modifier(status));
        item.clickHandler.removeHandler();
        item.element().removeAttribute(role);
        item.element().removeAttribute(selected);
        item.element().removeAttribute(tabindex);
        return item;
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fi";

    // Use a direct reference to the parent column instead of relying on storeComponent() / lookupComponent()
    // The component store relies on attach() / detach() and does not work when adding / removing existing references.
    // See: https://hal-console.gitbook.io/elemento/attach-detach
    FinderColumn column;

    private final String identifier;
    private final Map<String, Object> data;
    private final HandlerRegistration clickHandler;
    private final HTMLContainerBuilder<HTMLDivElement> rc; // row container
    private final HTMLContainerBuilder<HTMLElement> cc; // content container
    private final HTMLContainerBuilder<HTMLElement> tc; // text container
    private HTMLElement ic;
    private PreviewHandler previewHandler;
    private Supplier<FinderColumn> nextColumn;

    FinderItem(String identifier) {
        super(SUB_COMPONENT_NAME, li().css(component(finder, item))
                .apply(li -> li.tabIndex = 0)
                .aria(selected, false)
                .data(Dataset.identifier, identifier)
                .role(treeitem)
                .element());
        this.identifier = identifier;
        this.data = new HashMap<>();
        this.clickHandler = bind(element(), click, e -> {
            if (column != null && column.finder != null) {
                handleClick(column.finder, column, this);
            }
        });

        add(rc = div().css(component(finder, item, Classes.row))
                .add(cc = span().css(component(finder, item, content))
                        .add(tc = span().css(component(finder, item, Classes.text))))
                .add(span().css(component(finder, item, folder, icon))
                        .add(angleRight())));
    }

    @Override
    public Element textDelegate() {
        return tc.element();
    }

    // ------------------------------------------------------ add

    public FinderItem addDescription(String description) {
        return add(finderItemDescription().text(description));
    }

    public FinderItem addDescription(FinderItemDescription description) {
        return add(description);
    }

    // override to ensure internal wiring
    public FinderItem add(FinderItemDescription description) {
        cc.add(description.element());
        return this;
    }

    public FinderItem addActions(FinderItemActions actions) {
        return add(actions);
    }

    public FinderItem add(FinderItemActions actions) {
        insertAfter(actions.element(), cc.element());
        return this;
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #folder(boolean) folder(true)} */
    public FinderItem folder() {
        return folder(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(folder)} */
    public FinderItem folder(boolean folder) {
        aria(expanded, false);
        return toggleModifier(this, element(), FinderClasses.folder, folder);
    }

    @Override
    public FinderItem icon(Element icon) {
        removeChildrenFrom(ic);
        failSafeIconContainer().appendChild(icon);
        return this;
    }

    public FinderItem nextColumn(Supplier<FinderColumn> column) {
        this.nextColumn = column;
        return folder(true);
    }

    @Override
    public FinderItem removeIcon() {
        failSafeRemoveFromParent(ic);
        return this;
    }

    @Override
    public <T> FinderItem store(String key, T value) {
        data.put(key, value);
        return this;
    }


    @Override
    public FinderItem that() {
        return this;
    }

    // ------------------------------------------------------ events

    public FinderItem onPreview(PreviewHandler previewHandler) {
        this.previewHandler = previewHandler;
        return this;
    }

    // ------------------------------------------------------ api

    public FinderColumn column() {
        return column;
    }

    public Finder finder() {
        return column.finder();
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

    void handleClick(Finder finder, FinderColumn column, FinderItem item) {
        if (isSelected()) {
            finder.markActive(column);
            previewItem(finder, column, item);
            return;
        }

        finder.select(column);
        column.select(item);
        if (hasNext()) {
            FinderColumn nextColumnInstance = nextColumn.get();
            if (nextColumnInstance != null) {
                finder.addItem(nextColumnInstance);
            }
        }
        previewItem(finder, column, item);
    }

    void markSelected(boolean selected) {
        aria(Aria.selected, selected);
        classList().toggle(modifier(Classes.selected), selected);
    }

    boolean isSelected() {
        return parseBoolean((element().getAttribute(Aria.selected))) && classList().contains(modifier(Classes.selected));
    }

    boolean hasNext() {
        return nextColumn != null;
    }

    void makePinnable() {
        insertAfter(button().css(component(finder, item, pin))
                .on(click, this::togglePin)
                .add(thumbtack().css(component(finder, item, pin, icon) + "--default"))
                .add(times().css(component(finder, item, pin, icon) + "--pinned"))
                .element(), cc.element());
    }

    void togglePin(Event event) {
        event.stopPropagation();
    }

    void previewItem(Finder finder, FinderColumn column, FinderItem item) {
        if (finder.preview != null) {
            removeChildrenFrom(finder.preview);
            if (previewHandler != null) {
                previewHandler.onPreview(item, finder.preview);
            } else if (column.previewHandler != null) {
                column.previewHandler.onPreview(item, finder.preview);
            }
        }
    }

    private HTMLElement failSafeIconContainer() {
        if (ic == null) {
            insertFirst(rc.element(), ic = span().css(component(finder, item, icon)).element());
        }
        return ic;
    }
}
