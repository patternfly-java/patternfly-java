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
package org.patternfly.component.list;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.handler.ToggleHandler;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.Aria.controls;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.control;
import static org.patternfly.style.Classes.dataList;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.row;
import static org.patternfly.style.Classes.toggle;

public class DataListItem extends DataListSubComponent<HTMLLIElement, DataListItem> implements
        ComponentContext<HTMLLIElement, DataListItem>,
        Expandable<HTMLLIElement, DataListItem>,
        HasIdentifier<HTMLLIElement, DataListItem> {

    // ------------------------------------------------------ factory

    /**
     * Creates a new data list item. The identifier is not used directly as an element ID but used to wire ARIA-related attributes. It
     * is expected that you add a {@link DataListCell} with an element ID matching the identifier.
     */
    public static DataListItem dataListItem(String identifier) {
        return new DataListItem(identifier);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "dli";
    private final String identifier;
    private final Map<String, Object> data;
    private final HTMLElement rowElement;
    private HTMLElement controlElement;
    private HTMLElement contentElement;
    private HTMLElement actionElement;
    private Button toggleButton;
    private DataListExpandableContent expandableContent;
    private ToggleHandler<DataListItem> toggleHandler;

    DataListItem(String identifier) {
        super(SUB_COMPONENT_NAME, li().css(component(dataList, item))
                .aria(labelledBy, identifier)
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.data = new HashMap<>();
        add(rowElement = div().css(component(dataList, item, row)).element());
    }

    // ------------------------------------------------------ add

    public <T> DataListItem addCells(Iterable<T> items, Function<T, DataListCell> display) {
        for (T item : items) {
            DataListCell dlc = display.apply(item);
            addCell(dlc);
        }
        return this;
    }

    public DataListItem addCell(DataListCell cell) {
        return add(cell);
    }

    public DataListItem add(DataListCell cell) {
        failSafeContentElement().appendChild(cell.element());
        return this;
    }

    public DataListItem addAction(DataListAction action) {
        return add(action);
    }

    public DataListItem add(DataListAction action) {
        action.attr("rowid", identifier);
        rowElement.appendChild(action.element());
        return this;
    }

    public DataListItem addExpandableContent(DataListExpandableContent expandableContent) {
        return add(expandableContent);
    }

    public DataListItem add(DataListExpandableContent expandableContent) {
        this.expandableContent = expandableContent;
        wireExpandable();
        return add(expandableContent.element());
    }

    // ------------------------------------------------------ builder

    /**
     * Make this data list item expandable. Please make sure to add expandable content using
     * {@link #addExpandableContent(DataListExpandableContent)}.
     */
    public DataListItem expandable() {
        return expandable(null);
    }

    /**
     * Make this data list item expandable and register a {@link ToggleHandler}. Please make sure to add expandable content
     * using {@link #addExpandableContent(DataListExpandableContent)}.
     */
    public DataListItem expandable(ToggleHandler<DataListItem> toggleHandler) {
        this.toggleHandler = toggleHandler;
        failSafeControlElement().appendChild(div().css(component(dataList, toggle))
                .add(toggleButton = button().plain()
                        .aria(expanded, false)
                        .on(click, e -> toggle())
                        .add(div().css(component(dataList, toggle, icon))
                                .add(angleRight().element())))
                .element());
        wireExpandable();
        return this;
    }

    @Override
    public <T> DataListItem store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public DataListItem that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public DataListItem ariaToggleLabel(String label) {
        if (toggleButton != null) {
            toggleButton.aria(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ api


    @Override
    public String identifier() {
        return identifier;
    }

    @Override
    public void collapse(boolean fireEvent) {
        Expandable.collapse(element(), toggleButton.element(), expandableContent.element());
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, false);
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        Expandable.expand(element(), toggleButton.element(), expandableContent.element());
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, true);
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

    // ------------------------------------------------------ internal

    private HTMLElement failSafeControlElement() {
        if (controlElement == null) {
            rowElement.appendChild(controlElement = div().css(component(dataList, item, control)).element());
        }
        return controlElement;
    }

    private HTMLElement failSafeContentElement() {
        if (contentElement == null) {
            rowElement.appendChild(contentElement = div().css(component(dataList, item, content)).element());
        }
        return contentElement;
    }

    private void wireExpandable() {
        if (toggleButton != null && expandableContent != null) {
            String toggleId = toggleButton.element().id == null || toggleButton.element().id.isEmpty()
                    ? Id.unique(ComponentType.DataList.id, identifier, "toggle")
                    : toggleButton.element().id;
            String expandableContentId = expandableContent.element().id == null || expandableContent.element().id.isEmpty()
                    ? Id.unique(ComponentType.DataList.id, identifier, "expandable", "content")
                    : expandableContent.element().id;
            toggleButton.aria(controls, expandableContentId);
            toggleButton.aria(labelledBy, identifier + " " + toggleId);
            // data item are collapsed by default
            Expandable.collapse(element(), toggleButton.element(), expandableContent.element(), true);
        }
    }
}
