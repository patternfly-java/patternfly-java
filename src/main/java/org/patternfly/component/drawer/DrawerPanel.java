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
package org.patternfly.component.drawer;

import org.jboss.elemento.Attachable;
import org.patternfly.handler.ResizeHandler;
import org.patternfly.style.Breakpoints;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.drawer;
import static org.patternfly.style.Classes.panel;
import static org.patternfly.style.Modifiers.toggleModifier;

/**
 * The sliding panel in a {@link Drawer} component. Elements should not be added directly to this subcomponent, but instead
 * nested inside a {@link DrawerPanelBody} or {@link DrawerPanelHead}.
 */
public class DrawerPanel extends DrawerSubComponent<HTMLDivElement, DrawerPanel> implements Attachable {

    // ------------------------------------------------------ factory

    public static DrawerPanel drawerPanel() {
        return new DrawerPanel();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "dp";
    private int increment;
    private String ariaResizeLabel;
    private ResizeHandler<DrawerPanel> resizeHandler;

    DrawerPanel() {
        super(SUB_COMPONENT_NAME, div().css(component(drawer, panel)).element());
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {

    }

    // ------------------------------------------------------ add

    public DrawerPanel addHead(DrawerPanelHead head) {
        return add(head);
    }

    public DrawerPanel addBody(DrawerPanelBody body) {
        return add(body);
    }

    // ------------------------------------------------------ builder

    /** The starting size of a resizable drawer, in either pixels or percentage. */
    public DrawerPanel defaultSize(String defaultSize) {
        return this;
    }

    /** The minimum size of a drawer, in either pixels or percentage. */
    public DrawerPanel minSize(String minSize) {
        return this;
    }

    /** The maximum size of a drawer, in either pixels or percentage. */
    public DrawerPanel maxSize(String maxSize) {
        return this;
    }

    public DrawerPanel color(DrawerColor color) {
        return css(color.modifier);
    }

    /** Same as {@linkplain #noBorder(boolean) noBorder(true)} */
    public DrawerPanel noBorder() {
        return noBorder(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(noBorder)} */
    public DrawerPanel noBorder(boolean noBorder) {
        return toggleModifier(this, element(), Classes.noBorder, noBorder);
    }

    /** Same as {@linkplain #resizable(boolean) resizable(true)} */
    public DrawerPanel resizable() {
        return resizable(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(resizable)} */
    public DrawerPanel resizable(boolean resizable) {
        return toggleModifier(this, element(), Classes.resizable, resizable);
    }

    /** The increment amount for keyboard drawer resizing, in pixels. */
    public DrawerPanel increment(int increment) {
        this.increment = increment;
        return this;
    }

    /**
     * Width for drawer panel at various breakpoints. Overridden by resizable drawer {@link #minSize(String)} and
     * {@link #defaultSize(String)}.
     */
    public DrawerPanel widths(Breakpoints<DrawerPanelWidth> widths) {
        return css(widths.modifiers());
    }

    @Override
    public DrawerPanel that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public DrawerPanel ariaResizeLabel(String ariaResizeLabel) {
        this.ariaResizeLabel = ariaResizeLabel;
        return this;
    }

    // ------------------------------------------------------ events

    public DrawerPanel onResize(ResizeHandler<DrawerPanel> resizeHandler) {
        this.resizeHandler = resizeHandler;
        return this;
    }
}
