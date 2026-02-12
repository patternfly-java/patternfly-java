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

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Ordered;
import org.patternfly.style.Breakpoints;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Compact;
import org.patternfly.style.Modifiers.Horizontal;
import org.patternfly.style.Orientation;
import org.patternfly.style.Size;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.dl;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.core.Validation.verifyEnum;
import static org.patternfly.core.Validation.verifyRange;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.BreakpointCollector.modifiers;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.descriptionList;
import static org.patternfly.style.Classes.display;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Modifiers.toggleModifier;
import static org.patternfly.style.Size._2xl;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.GridTemplateColumns;

/**
 * A description list contains terms and their corresponding descriptions.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/description-list">https://www.patternfly.org/components/description-list</a>
 */
public class DescriptionList extends BaseComponent<HTMLElement, DescriptionList> implements
        Compact<HTMLElement, DescriptionList>,
        Horizontal<HTMLElement, DescriptionList>,
        Ordered<HTMLElement, DescriptionList, DescriptionListGroup> {

    // ------------------------------------------------------ factory

    public static DescriptionList descriptionList() {
        return new DescriptionList();
    }

    // ------------------------------------------------------ instance

    private final Map<String, DescriptionListGroup> items;
    private final List<BiConsumer<DescriptionList, DescriptionListGroup>> onAdd;
    private final List<BiConsumer<DescriptionList, DescriptionListGroup>> onRemove;
    private Comparator<DescriptionListGroup> comparator;

    DescriptionList() {
        super(ComponentType.DescriptionList, dl().css(component(descriptionList)).element());
        this.items = new LinkedHashMap<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();
    }

    // ------------------------------------------------------ add

    @Override
    public DescriptionList add(DescriptionListGroup item) {
        addOrdered(this, item);
        items.put(item.identifier(), item);
        onAdd.forEach(bc -> bc.accept(this, item));
        return this;
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #autoColumnWidths(boolean) autoColumnWidths(true)} */
    public DescriptionList autoColumnWidths() {
        return autoColumnWidths(true);
    }

    /** Sets the description list to format automatically. */
    public DescriptionList autoColumnWidths(boolean autoColumnWidths) {
        return toggleModifier(that(), element(), Classes.autoColumnWidths, autoColumnWidths);
    }

    /** Same as {@linkplain #autoFit(boolean) autoFit(true)} */
    public DescriptionList autoFit() {
        return autoFit(true);
    }

    /** Sets the description list to auto-fit. */
    public DescriptionList autoFit(boolean autoFit) {
        return toggleModifier(that(), element(), Classes.autoFit, autoFit);
    }

    /**
     * Same as {@code autoFitMin(breakpoints(default_, autoFitMin))}
     */
    public DescriptionList autoFitMin(String autoFitMin) {
        return autoFitMin(breakpoints(default_, autoFitMin));
    }

    /**
     * Sets the minimum column size for the auto-fit layout at various breakpoints.
     */
    public DescriptionList autoFitMin(Breakpoints<String> autoFitMin) {
        // Variable examples:
        // --pf-v5-c-description-list--GridTemplateColumns--min: 500px;
        // --pf-v5-c-description-list--GridTemplateColumns--min-on-md: 100px;
        // --pf-v5-c-description-list--GridTemplateColumns--min-on-lg: 150px;
        // --pf-v5-c-description-list--GridTemplateColumns--min-on-xl: 200px;
        return componentVar(component(descriptionList), GridTemplateColumns, "min").applyTo(this).set(autoFitMin);
    }

    /**
     * Same as {@code columns(breakpoints(default_, columns))}
     */
    public DescriptionList columns(Integer columns) {
        return columns(breakpoints(default_, columns));
    }

    /**
     * Sets the number of columns on the description list at various breakpoints.
     */
    public DescriptionList columns(Breakpoints<Integer> columns) {
        if (columns != null) {
            String modifiers = columns.stream()
                    .filter(bp -> verifyRange(element(), "columns", bp.value, 1, 3))
                    .collect(modifiers(col -> col + "-col"));
            css(modifiers);
        }
        return this;
    }

    /**
     * Sets the display size of the descriptions in the description list.
     */
    public DescriptionList displaySize(Size size) {
        if (verifyEnum(element(), "displaySize", size, lg, _2xl)) {
            for (Size s : Size.values()) {
                classList().remove(modifier(display, s));
            }
            css(modifier(display, size));
        }
        return this;
    }

    /** Same as {@linkplain #fillColumns(boolean) fillColumns(true)} */
    public DescriptionList fillColumns() {
        return fillColumns(true);
    }

    /** Sets the default placement of description list groups to fill from top to bottom. */
    public DescriptionList fillColumns(boolean fillColumns) {
        return toggleModifier(that(), element(), Classes.fillColumns, fillColumns);
    }

    /** Same as {@linkplain #fluid(boolean) fluid(true)} */
    public DescriptionList fluid() {
        return fluid(true);
    }

    /** Sets a horizontal description list to have fluid styling. */
    public DescriptionList fluid(boolean fluid) {
        return toggleModifier(that(), element(), Classes.fluid, fluid);
    }

    /**
     * Same as {@code horizontalTermWidth(breakpoints(default_, horizontalTermWidth))}
     */
    public DescriptionList horizontalTermWidth(String horizontalTermWidth) {
        return horizontalTermWidth(breakpoints(default_, horizontalTermWidth));
    }

    /**
     * Sets the horizontal description list's term column width at various breakpoints.
     */
    public DescriptionList horizontalTermWidth(Breakpoints<String> horizontalTermWidth) {
        return componentVar(component(descriptionList), "m-horizontal__term", "width").applyTo(this).set(horizontalTermWidth);
    }

    /** Same as {@linkplain #inlineGrid(boolean) inlineGrid(true)} */
    public DescriptionList inlineGrid() {
        return inlineGrid(true);
    }

    /** Modifies the description list display to inline-grid. */
    public DescriptionList inlineGrid(boolean inlineGrid) {
        return toggleModifier(that(), element(), Classes.inlineGrid, inlineGrid);
    }

    @Override
    public DescriptionList ordered(Comparator<DescriptionListGroup> comparator) {
        this.comparator = comparator;
        return this;
    }

    /**
     * Same as {@code orientation(breakpoints(default_, orientation))}
     */
    public DescriptionList orientation(Orientation orientation) {
        return orientation(breakpoints(default_, orientation));
    }

    /** Indicates how the menu will align at various breakpoints. */
    public DescriptionList orientation(Breakpoints<Orientation> orientation) {
        return css(orientation.modifiers());
    }

    public DescriptionList termWidth(String width) {
        // --pf-v5-c-description-list__term--width: 10ch;
        return componentVar(component(descriptionList), "term", "width").applyTo(this).set(width);
    }

    @Override
    public DescriptionList that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public DescriptionList onAdd(BiConsumer<DescriptionList, DescriptionListGroup> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public DescriptionList onRemove(BiConsumer<DescriptionList, DescriptionListGroup> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Comparator<DescriptionListGroup> comparator() {
        return comparator;
    }

    @Override
    public Iterator<DescriptionListGroup> iterator() {
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
    public DescriptionListGroup item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void removeItem(String identifier) {
        DescriptionListGroup item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        if (item != null) {
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        Iterator<DescriptionListGroup> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            DescriptionListGroup item = iterator.next();
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }
}
