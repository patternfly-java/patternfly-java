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
package org.patternfly.component.chip;

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
import static org.patternfly.component.ComponentStore.storeComponent;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.layout.Classes.chipGroup;
import static org.patternfly.layout.Classes.close;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.list;
import static org.patternfly.layout.Classes.main;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.overflow;
import static org.patternfly.layout.PredefinedIcon.timesCircle;

public class ChipGroup extends BaseComponent<HTMLDivElement, ChipGroup>
        implements HasValues<Chip>, Attachable, Closeable<HTMLDivElement, ChipGroup> {

    // ------------------------------------------------------ factory

    public static ChipGroup chipGroup() {
        return new ChipGroup(null);
    }

    public static ChipGroup chipGroup(String category) {
        return new ChipGroup(category);
    }

    // ------------------------------------------------------ instance

    private static final int DEFAULT_NUM_CHIPS = 3;
    private static final String REMAINING_PLACEHOLDER = "${remaining}";

    private final HTMLElement listElement;
    private final Map<String, Chip> chips;
    private boolean expanded;
    private int numChips;
    private String collapsedText;
    private String expandedText;
    private Chip overflowChip;
    private Button closeButton;
    private HTMLElement categoryElement;
    private HTMLElement overflowItem;
    private TooltipToggle tooltipToggle;
    private CloseHandler<ChipGroup> closeHandler;

    ChipGroup(String category) {
        super(div().css(component(chipGroup)).attr(role, "group").element(), ComponentType.ChipGroup);
        this.chips = new LinkedHashMap<>();
        this.expanded = false;
        this.numChips = DEFAULT_NUM_CHIPS;
        this.collapsedText = REMAINING_PLACEHOLDER + " more";
        this.expandedText = "Show less";

        add(div().css(component(chipGroup, main))
                .add(listElement = ul().css(component(chipGroup, list))
                        .attr(role, "list")
                        .element()));
        if (category != null) {
            category(category);
        } else {
            aria(Classes.label, "Chip group category");
        }
        storeComponent(this);
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (tooltipToggle != null) {
            tooltipToggle.eval();
        }
    }

    // ------------------------------------------------------ add

    public <T> ChipGroup addChips(Iterable<T> items, Function<T, Chip> display) {
        for (T item : items) {
            Chip chip = display.apply(item);
            addChip(chip);
        }
        return this;
    }

    public ChipGroup addChip(Chip chip) {
        return add(chip);
    }

    // override to assure internal wiring
    public ChipGroup add(Chip chip) {
        chips.put(chip.id, chip);
        HTMLLIElement itemElement = li().css(component(chipGroup, list, item))
                .add(chip)
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

    public ChipGroup category(String category) {
        if (categoryElement == null) {
            String categoryId = Id.unique(componentType().id, "category");
            css(modifier(Classes.category));
            categoryElement = span().css(component(chipGroup, Classes.label))
                    .id(categoryId)
                    .element();
            insertBefore(categoryElement, listElement);
            aria(labelledBy, categoryId);
            tooltipToggle = new TooltipToggle(categoryElement);
        }
        categoryElement.textContent = category;
        return this;
    }

    public ChipGroup numChips(int numChips) {
        if (numChips > 0) {
            this.numChips = numChips;
        }
        return this;
    }

    public ChipGroup closable() {
        return closable(null);
    }

    public ChipGroup closable(CloseHandler<ChipGroup> closeHandler) {
        this.closeHandler = closeHandler;

        String closeId = Id.unique(componentType().id, "close");
        String labelledBy = closeId;
        if (categoryElement != null) {
            labelledBy += " " + categoryElement.id;
        }

        add(div().css(component(chipGroup, close))
                .add(closeButton = button().icon(timesCircle).plain()
                        .id(closeId)
                        .aria(label, "Close chip group")
                        .aria(Aria.labelledBy, labelledBy)
                        .on(click, event -> close(event, true))));
        return this;
    }

    public ChipGroup collapsedText(String collapsedText) {
        this.collapsedText = collapsedText;
        return this;
    }

    public ChipGroup expandedText(String expandedText) {
        this.expandedText = expandedText;
        return this;
    }

    @Override
    public ChipGroup that() {
        return this;
    }

    // ------------------------------------------------------ aria

    @Override
    public ChipGroup aria(String name, String value) {
        if (name.equals(label)) {
            // set label also on list element
            listElement.setAttribute(label, value);
        }
        return super.aria(name, value);
    }

    public ChipGroup ariaCloseLabel(String label) {
        if (closeButton != null) {
            closeButton.aria(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public ChipGroup onClose(CloseHandler<ChipGroup> closeHandler) {
        this.closeHandler = closeHandler;
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Set<Chip> values() {
        return new HashSet<>(chips.values());
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
        chips.clear();
        overflowItem = null;
        overflowChip = null;
    }

    // ------------------------------------------------------ internal

    void close(Chip chip) {
        chips.remove(chip.id);
        Element element = chip.element().parentElement;
        if (element != null) {
            failSafeRemoveFromParent(element);
        } else {
            failSafeRemoveFromParent(chip);
        }
        overflow();
    }

    private void overflow() {
        if (chips.size() > numChips && overflowItem == null && overflowChip == null) {
            overflowItem = li().css(component(chipGroup, list, item))
                    .add(overflowChip = new Chip(Elements.button(), "")
                            .readonly()
                            .css(modifier(overflow))
                            .on(click, event -> toggle()))
                    .element();
            listElement.appendChild(overflowItem);
        }
        int index = 0;
        for (Chip chip : chips.values()) {
            setVisible((HTMLElement) chip.element().parentElement, expanded || index < numChips);
            index++;
        }
        if (overflowItem != null && overflowChip != null) {
            setVisible(overflowItem, chips.size() > numChips);
            overflowChip.textElement.textContent = expanded ? expandedText
                    : collapsedText.replace(REMAINING_PLACEHOLDER, String.valueOf(chips.size() - numChips));
        }
    }

    private void toggle() {
        expanded = !expanded;
        overflow();
    }
}
