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
package org.patternfly.component.descriptionlist;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.style.BreakpointModifiers;
import org.patternfly.style.BreakpointTypedModifiers;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Compact;
import org.patternfly.style.Modifiers.Horizontal;
import org.patternfly.style.Orientation;
import org.patternfly.style.Size;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.dl;
import static org.patternfly.core.Tuple.tuple;
import static org.patternfly.core.Validation.verifyEnum;
import static org.patternfly.core.Validation.verifyRange;
import static org.patternfly.style.BreakpointCollectors.toBreakpointModifiers;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.descriptionList;
import static org.patternfly.style.Classes.display;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.typedModifier;
import static org.patternfly.style.Modifiers.toggleModifier;
import static org.patternfly.style.Size._2xl;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.GridTemplateColumns;

/**
 * A description list contains terms and their corresponding descriptions.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/description-list">https://www.patternfly.org/components/description-list</a>
 */
public class DescriptionList extends BaseComponent<HTMLElement, DescriptionList> implements
        Compact<HTMLElement, DescriptionList>,
        Horizontal<HTMLElement, DescriptionList> {

    // ------------------------------------------------------ factory

    public static DescriptionList descriptionList() {
        return new DescriptionList();
    }

    // ------------------------------------------------------ instance

    DescriptionList() {
        super(ComponentType.DescriptionList, dl().css(component(descriptionList)).element());
    }

    // ------------------------------------------------------ add

    public DescriptionList addGroup(DescriptionListGroup group) {
        return add(group);
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

    /** Sets the description list to auto fit. */
    public DescriptionList autoFit(boolean autoFit) {
        return toggleModifier(that(), element(), Classes.autoFit, autoFit);
    }

    /**
     * Sets the minimum column size for the auto-fit (isAutoFit) layout at various breakpoints.
     */
    public DescriptionList autoFitMin(BreakpointModifiers<String> autoFitMin) {
        // Variable examples:
        // --pf-v5-c-description-list--GridTemplateColumns--min: 500px;
        // --pf-v5-c-description-list--GridTemplateColumns--min-on-md: 100px;
        // --pf-v5-c-description-list--GridTemplateColumns--min-on-lg: 150px;
        // --pf-v5-c-description-list--GridTemplateColumns--min-on-xl: 200px;
        if (autoFitMin != null) {
            autoFitMin.variables(componentVar(component(descriptionList), GridTemplateColumns, "min"))
                    .applyTo(this);
        }
        return this;
    }

    /**
     * Sets the number of columns on the description list at various breakpoints.
     */
    public DescriptionList columns(BreakpointModifiers<Integer> columns) {
        if (columns != null) {
            BreakpointModifiers<String> stringColumns = columns.stream()
                    .filter(t -> verifyRange(element(), componentType(), "columns", t.value, 1, 3))
                    .map(t -> tuple(t.key, t.value + "-col"))
                    .collect(toBreakpointModifiers());
            css(modifier(stringColumns));
            stringColumns.modifiers().addTo(this);
        }
        return this;
    }

    /**
     * Sets the display size of the descriptions in the description list.
     */
    public DescriptionList displaySize(Size size) {
        if (verifyEnum(element(), componentType(), "displaySize", size, lg, _2xl)) {
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
     * Sets the horizontal description list's term column width at various breakpoints.
     */
    public DescriptionList horizontalTermWidth(BreakpointModifiers<String> horizontalTermWidth) {
        if (horizontalTermWidth != null) {
            // Variable examples:
            // --pf-v5-c-description-list--m-horizontal__term--width: 12ch;
            // --pf-v5-c-description-list--m-horizontal__term--width-on-sm: 15ch;
            // --pf-v5-c-description-list--m-horizontal__term--width-on-md: 20ch;
            // --pf-v5-c-description-list--m-horizontal__term--width-on-lg: 28ch;
            horizontalTermWidth
                    .variables(componentVar(component(descriptionList), "m-horizontal__term", "width"))
                    .applyTo(this);
            // for (Tuple<Breakpoint, String> tuple : horizontalTermWidth) {
            // String widthPart = tuple.key == default_ ? "width" : "width-on-" + tuple.key.value;
            // componentVar(component(descriptionList), "m-horizontal__term", widthPart).applyTo(this, tuple.value);
            // }
        }
        return this;
    }

    /** Same as {@linkplain #inlineGrid(boolean) inlineGrid(true)} */
    public DescriptionList inlineGrid() {
        return inlineGrid(true);
    }

    /** Modifies the description list display to inline-grid. */
    public DescriptionList inlineGrid(boolean inlineGrid) {
        return toggleModifier(that(), element(), Classes.inlineGrid, inlineGrid);
    }

    /** Indicates how the menu will align at various breakpoints. */
    public DescriptionList orientation(BreakpointTypedModifiers<Orientation> orientation) {
        return css(typedModifier(orientation));
    }

    public DescriptionList termWidth(String width) {
        // --pf-v5-c-description-list__term--width: 10ch;
        return componentVar(component(descriptionList), "term", "width").applyTo(this, width);
    }

    @Override
    public DescriptionList that() {
        return this;
    }
}
