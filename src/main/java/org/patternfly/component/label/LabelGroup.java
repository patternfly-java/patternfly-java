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
package org.patternfly.component.label;

import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.button.Button;
import org.patternfly.component.tooltip.TooltipToggle;
import org.patternfly.core.Aria;
import org.patternfly.core.Closeable;
import org.patternfly.core.HasValues;
import org.patternfly.handler.CloseHandler;
import org.patternfly.layout.Classes;
import org.patternfly.layout.Color;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.layout.Classes.chipGroup;
import static org.patternfly.layout.Classes.close;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.labelGroup;
import static org.patternfly.layout.Classes.list;
import static org.patternfly.layout.Classes.main;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.overflow;
import static org.patternfly.layout.Classes.vertical;
import static org.patternfly.layout.PredefinedIcon.timesCircle;

public class LabelGroup extends BaseComponent<HTMLDivElement, LabelGroup>
        implements HasValues<Label>, Attachable, Closeable<HTMLDivElement, LabelGroup> {

    // ------------------------------------------------------ factory

    public static LabelGroup labelGroup() {
        return new LabelGroup(null);
    }

    public static LabelGroup labelGroup(String category) {
        return new LabelGroup(category);
    }

    // ------------------------------------------------------ instance

    private static final int DEFAULT_NUM_CHIPS = 3;
    private static final String REMAINING_PLACEHOLDER = "${remaining}";

    private final HTMLElement listElement;
    private final Map<String, Label> labels;
    private boolean expanded;
    private int numLabels;
    private String collapsedText;
    private String expandedText;
    private Label overflowLabel;
    private Button closeButton;
    private HTMLElement categoryElement;
    private HTMLElement overflowItem;
    private TooltipToggle tooltipToggle;
    private CloseHandler<LabelGroup> closeHandler;

    LabelGroup(String category) {
        super(div().css(component(labelGroup)).element(), ComponentType.ChipGroup);
        this.labels = new LinkedHashMap<>();
        this.expanded = false;
        this.numLabels = DEFAULT_NUM_CHIPS;
        this.collapsedText = REMAINING_PLACEHOLDER + " more";
        this.expandedText = "Show less";

        add(div().css(component(labelGroup, main))
                .add(listElement = ul().css(component(labelGroup, list))
                        .attr(role, "list")
                        .element()));
        if (category != null) {
            category(category);
        } else {
            listElement.setAttribute(label, "Label group category");
        }
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (tooltipToggle != null) {
            tooltipToggle.eval();
        }
        for (Label label : labels.values()) {
            label.passComponent(this);
        }
    }

    // ------------------------------------------------------ add

    public <T> LabelGroup addLabels(Iterable<T> items, Function<T, Label> display) {
        for (T item : items) {
            Label label = display.apply(item);
            addLabel(label);
        }
        return this;
    }

    public LabelGroup addLabel(Label label) {
        return add(label);
    }

    // override to assure internal wiring
    public LabelGroup add(Label label) {
        labels.put(label.id, label);
        // If this component is already attached, call passComponent() manually (normally this takes place
        // automatically initiated by the base component's attach handler).
        if (element().isConnected) {
            label.passComponent(this);
        }

        HTMLLIElement itemElement = li().css(component(labelGroup, list, item))
                .add(label)
                .element();
        if (overflowItem != null) {
            insertBefore(itemElement, overflowItem);
        } else {
            listElement.appendChild(itemElement);
        }

        overflow();
        return this;
    }

    // ------------------------------------------------------ builder

    public LabelGroup category(String category) {
        if (categoryElement == null) {
            css(modifier(Classes.category));
            String categoryId = Id.unique(componentType().id, "category");
            categoryElement = span().css(component(labelGroup, Classes.label))
                    .id(categoryId)
                    .aria(hidden, true)
                    .element();
            insertBefore(categoryElement, listElement);
            listElement.setAttribute(labelledBy, categoryId);
            tooltipToggle = new TooltipToggle(categoryElement);
        }
        categoryElement.textContent = category;
        return this;
    }

    public LabelGroup numLabels(int numLabels) {
        if (numLabels > 0) {
            this.numLabels = numLabels;
        }
        return this;
    }

    public LabelGroup closable() {
        return closable(null);
    }

    public LabelGroup closable(CloseHandler<LabelGroup> closeHandler) {
        this.closeHandler = closeHandler;

        String closeId = Id.unique(componentType().id, "close");
        String labelledBy = closeId;
        if (categoryElement != null) {
            labelledBy += " " + categoryElement.id;
        }

        add(div().css(component(labelGroup, close))
                .add(closeButton = button(timesCircle, "Close label group")
                        .plain()
                        .id(closeId)
                        .aria(Aria.labelledBy, labelledBy)
                        .on(click, event -> close(event, true))));
        return this;
    }

    public LabelGroup collapsedText(String collapsedText) {
        this.collapsedText = collapsedText;
        return this;
    }

    public LabelGroup expandedText(String expandedText) {
        this.expandedText = expandedText;
        return this;
    }

    public LabelGroup vertical() {
        return css(modifier(vertical));
    }

    @Override
    public LabelGroup that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public LabelGroup ariaCloseLabel(String label) {
        if (closeButton != null) {
            closeButton.aria(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public LabelGroup onClose(CloseHandler<LabelGroup> closeHandler) {
        this.closeHandler = closeHandler;
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Set<Label> values() {
        return new HashSet<>(labels.values());
    }

    @Override
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            failSafeRemoveFromParent(this);
            fireEvent(this, closeHandler, event, fireEvent);
        }
    }

    public void clear() {
        removeChildrenFrom(listElement);
        labels.clear();
        overflowItem = null;
        overflowLabel = null;
    }

    // ------------------------------------------------------ internal

    void close(Label label) {
        labels.remove(label.id);
        Element element = label.element().parentElement;
        if (element != null) {
            failSafeRemoveFromParent(element);
        } else {
            failSafeRemoveFromParent(label);
        }
        overflow();
    }

    private void overflow() {
        if (labels.size() > numLabels && overflowItem == null && overflowLabel == null) {
            overflowItem = li().css(component(chipGroup, list, item))
                    .add(overflowLabel = new Label(Elements.button(), "", Color.grey)
                            .css(modifier(overflow))
                            .on(click, event -> toggle()))
                    .element();
            listElement.appendChild(overflowItem);
        }
        int index = 0;
        for (Label label : labels.values()) {
            setVisible((HTMLElement) label.element().parentElement, expanded || index < numLabels);
            index++;
        }
        if (overflowItem != null && overflowLabel != null) {
            setVisible(overflowItem, labels.size() > numLabels);
            overflowLabel.textElement.textContent = expanded ? expandedText
                    : collapsedText.replace(REMAINING_PLACEHOLDER, String.valueOf(labels.size() - numLabels));
        }
    }

    private void toggle() {
        expanded = !expanded;
        overflow();
    }
}
