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

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.core.LanguageDirection;
import org.patternfly.handler.ResizeHandler;
import org.patternfly.style.Breakpoints;
import org.patternfly.style.Classes;

import elemental2.dom.AddEventListenerOptions;
import elemental2.dom.DOMRect;
import elemental2.dom.Event;
import elemental2.dom.EventListener;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.KeyboardEvent;
import elemental2.dom.MouseEvent;
import elemental2.dom.MutationRecord;
import elemental2.dom.TouchEvent;

import static elemental2.core.JsNumber.EPSILON;
import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.EventType.mousedown;
import static org.jboss.elemento.EventType.mousemove;
import static org.jboss.elemento.EventType.mouseup;
import static org.jboss.elemento.EventType.touchend;
import static org.jboss.elemento.EventType.touchmove;
import static org.jboss.elemento.EventType.touchstart;
import static org.jboss.elemento.Key.ArrowDown;
import static org.jboss.elemento.Key.ArrowLeft;
import static org.jboss.elemento.Key.ArrowRight;
import static org.jboss.elemento.Key.ArrowUp;
import static org.jboss.elemento.Key.Enter;
import static org.jboss.elemento.Key.Escape;
import static org.patternfly.core.Aria.controls;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Aria.orientation;
import static org.patternfly.core.Aria.valueMax;
import static org.patternfly.core.Aria.valueMin;
import static org.patternfly.core.Aria.valueNow;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.LanguageDirection.languageDirection;
import static org.patternfly.core.Roles.separator;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.handle;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.panel;
import static org.patternfly.style.Classes.resizing;
import static org.patternfly.style.Classes.splitter;
import static org.patternfly.style.Classes.vertical;
import static org.patternfly.style.Modifiers.toggleModifier;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.FlexBasis;

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
    private boolean resizable;
    private boolean isResizing;
    private boolean setInitialVals;
    private double currentWidth, start, end, bottom;
    private String ariaResizeLabel;
    private Drawer drawer;
    private HTMLContainerBuilder<HTMLDivElement> splitterElement;
    private ResizeHandler<DrawerPanel> resizeHandler;
    private HandlerRegistration mouseDownHandler;
    private HandlerRegistration mouseMoveHandler;
    private HandlerRegistration mouseUpHandler;
    private HandlerRegistration touchStartHandler;
    private HandlerRegistration touchMoveHandler;
    private HandlerRegistration touchEndHandler;
    private HandlerRegistration keyDownHandler;

    DrawerPanel() {
        super(SUB_COMPONENT_NAME, div().css(component(Classes.drawer, panel)).element());
        this.increment = 5;
        this.resizable = false;
        this.isResizing = false;
        this.setInitialVals = true;
        this.ariaResizeLabel = "Resize";
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (resizable) {
            drawer = lookupFlatComponent();

            String id = element().id;
            if (id == null || id.isEmpty()) {
                id = Id.unique(ComponentType.Dropdown.id, "panel");
                id(id);
            }

            // create splitter and main container
            splitterElement = div().css(component(Classes.drawer, splitter))
                    .apply(e -> e.tabIndex = 0)
                    .attr(role, separator)
                    .aria(label, ariaResizeLabel)
                    .aria(controls, id)
                    .aria(valueMin, 0)
                    .aria(valueMax, 100)
                    .aria(orientation, drawer.position == Position.bottom ? "horizontal" : "vertical")
                    .add(div().css(component(Classes.drawer, splitter, handle)));
            if (drawer.position != Position.bottom) {
                splitterElement.css(modifier(vertical));
            }
            HTMLDivElement mainContainer = div().css(component(Classes.drawer, panel, main))
                    .element();

            // move existing elements to main container
            while (element().hasChildNodes()) {
                mainContainer.appendChild(element().firstChild);
            }

            // insert splitter and main container
            add(splitterElement);
            add(mainContainer);

            // bind events
            mouseDownHandler = bind(splitterElement, mousedown, this::handleMouseDown);
            touchStartHandler = bind(splitterElement, touchstart, this::handleTouchStart);
            keyDownHandler = bind(splitterElement, keydown, this::handleKeys);
            splitterElement.aria(valueNow, calcValueNow());
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (mouseDownHandler != null) {
            mouseDownHandler.removeHandler();
        }
        if (mouseMoveHandler != null) {
            mouseMoveHandler.removeHandler();
        }
        if (mouseUpHandler != null) {
            mouseUpHandler.removeHandler();
        }
        if (touchStartHandler != null) {
            touchStartHandler.removeHandler();
        }
        if (touchMoveHandler != null) {
            touchMoveHandler.removeHandler();
        }
        if (touchEndHandler != null) {
            touchEndHandler.removeHandler();
        }
        if (keyDownHandler != null) {
            keyDownHandler.removeHandler();
        }
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
        return componentVar(component(Classes.drawer, panel), md.value, FlexBasis).applyTo(this, defaultSize);
    }

    /** The minimum size of a drawer, in either pixels or percentage. */
    public DrawerPanel minSize(String minSize) {
        return componentVar(component(Classes.drawer, panel), md.value, FlexBasis, "min").applyTo(this, minSize);
    }

    /** The maximum size of a drawer, in either pixels or percentage. */
    public DrawerPanel maxSize(String maxSize) {
        return componentVar(component(Classes.drawer, panel), md.value, FlexBasis, "max").applyTo(this, maxSize);
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

    /** Makes this drawer panel resizable. Unlike other flags, this can only be turned on, but not off. */
    public DrawerPanel resizable() {
        this.resizable = true;
        return css(modifier(Classes.resizable));
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

    // ------------------------------------------------------ api

    public double currentWidth() {
        return currentWidth;
    }

    // ------------------------------------------------------ internal

    private int calcValueNow() {
        if (!resizableDrawer()) {
            return 0;
        }

        double splitterPos = 0;
        double drawerSize = 1;

        DOMRect drawerRect = drawer.element().getBoundingClientRect();
        DOMRect contentRect = drawer.content.element().getBoundingClientRect();
        DOMRect splitterRect = splitterElement.element().getBoundingClientRect();
        DOMRect panelRect = element().getBoundingClientRect();
        boolean rtl = languageDirection(element()) == LanguageDirection.rtl;

        if (drawer.inline) {
            if (drawer.position == Position.end) {
                if (rtl) {
                    splitterPos = panelRect.left - splitterRect.right;
                    drawerSize = drawerRect.left - drawerRect.right;
                } else {
                    splitterPos = panelRect.right - splitterRect.left;
                    drawerSize = drawerRect.right - drawerRect.left;
                }
            } else if (drawer.position == Position.start) {
                if (rtl) {
                    splitterPos = splitterRect.left - panelRect.right;
                    drawerSize = drawerRect.left - drawerRect.right;
                } else {
                    splitterPos = splitterRect.right - panelRect.left;
                    drawerSize = drawerRect.right - drawerRect.left;
                }
            }
        } else {
            if (drawer.position == Position.end) {
                if (rtl) {
                    splitterPos = contentRect.left - splitterRect.right;
                    drawerSize = contentRect.left - contentRect.right;
                } else {
                    splitterPos = contentRect.right - splitterRect.left;
                    drawerSize = contentRect.right - contentRect.left;
                }
            } else if (drawer.position == Position.start) {
                if (rtl) {
                    splitterPos = splitterRect.left - contentRect.right;
                    drawerSize = contentRect.left - contentRect.right;
                } else {
                    splitterPos = splitterRect.right - contentRect.left;
                    drawerSize = contentRect.right - contentRect.left;
                }
            } else if (drawer.position == Position.bottom) {
                splitterPos = contentRect.bottom - splitterRect.top;
                drawerSize = contentRect.bottom - contentRect.top;
            }
        }

        double newSplitterPos = (splitterPos / drawerSize) * 100;
        return (int) (Math.round((newSplitterPos + EPSILON) * 100) / 100);
    }

    private void handleMouseDown(MouseEvent event) {
        if (resizableDrawer()) {
            event.stopPropagation();
            event.preventDefault();
            mouseMoveHandler = bind(document, mousemove, this::handleMouseMove);
            mouseUpHandler = bind(document, mouseup, this::handleMouseUp);

            drawer.classList().add(modifier(resizing));
            isResizing = true;
            setInitialVals = true;
        }
    }

    private void handleTouchStart(TouchEvent event) {
        if (resizableDrawer()) {
            event.stopPropagation();
            // TODO Replace with EventType#bind(EventTarget, EventType<T,?>, AddEventListenerOptions, EventCallbackFn<T>)
            //  once a new Elemento version has been released
            AddEventListenerOptions options = AddEventListenerOptions.create();
            options.setPassive(true);
            EventListener listener = evt -> handleTouchMove(((TouchEvent) evt));
            document.addEventListener(touchmove.name, listener, options);
            touchMoveHandler = () -> document.removeEventListener(touchmove.name, listener, options);
            touchEndHandler = bind(document, touchend, this::handleTouchEnd);
            isResizing = true;
        }
    }

    private void handleMouseMove(MouseEvent event) {
        if (resizableDrawer()) {
            double mousePos = drawer.position == Position.bottom ? event.clientY : event.clientX;
            handleControlMove(event, mousePos);
        }
    }

    private void handleTouchMove(TouchEvent event) {
        if (resizableDrawer()) {
            event.preventDefault();
            event.stopImmediatePropagation();
            double touchPos = drawer.position == Position.bottom ? event.touches.item(0).clientY : event.touches.item(
                    0).clientX;
            handleControlMove(event, touchPos);
        }
    }

    private void handleControlMove(Event event, double controlPosition) {
        if (resizableDrawer()) {
            boolean rtl = languageDirection(element()) == LanguageDirection.rtl;
            event.stopPropagation();
            if (isResizing) {
                if (setInitialVals) {
                    DOMRect panelRect = element().getBoundingClientRect();
                    if (rtl) {
                        start = panelRect.right;
                        end = panelRect.left;
                    } else {
                        start = panelRect.left;
                        end = panelRect.right;
                    }
                    bottom = panelRect.bottom;
                    setInitialVals = false;
                }

                double newSize;
                if (drawer.position == Position.end) {
                    newSize = rtl ? controlPosition - end : end - controlPosition;
                } else if (drawer.position == Position.start) {
                    newSize = rtl ? start - controlPosition : controlPosition - start;
                } else {
                    newSize = bottom - controlPosition;
                }
                if (drawer.position == Position.bottom) {
                    style("overflow-anchor", "none");
                }
                updateSize(newSize);
            }
        }
    }

    private void handleMouseUp(MouseEvent event) {
        if (resizableDrawer() && isResizing) {
            drawer.classList().remove(modifier(resizing));
            isResizing = false;
            if (resizeHandler != null) {
                resizeHandler.onResize(this);
            }
            setInitialVals = true;
            mouseMoveHandler.removeHandler();
            mouseUpHandler.removeHandler();
        }
    }

    private void handleTouchEnd(TouchEvent event) {
        if (resizableDrawer()) {
            event.stopPropagation();
            if (isResizing) {
                isResizing = false;
                if (resizeHandler != null) {
                    resizeHandler.onResize(this);
                }
                touchMoveHandler.removeHandler();
                touchEndHandler.removeHandler();
            }
        }
    }

    private void handleKeys(KeyboardEvent event) {
        if (resizableDrawer()) {
            if (Escape.match(event) || Enter.match(event) ||
                    ArrowUp.match(event) || ArrowDown.match(event) || ArrowLeft.match(event) || ArrowRight.match(event)) {
                boolean rtl = languageDirection(element()) == LanguageDirection.rtl;
                event.preventDefault();

                if (Escape.match(event) || Enter.match(event)) {
                    if (resizeHandler != null) {
                        resizeHandler.onResize(this);
                    }
                }
                double delta = 0;
                DOMRect panelRect = element().getBoundingClientRect();
                double newSize = drawer.position == Position.bottom ? panelRect.height : panelRect.width;
                if (ArrowRight.match(event)) {
                    if (rtl) {
                        delta = drawer.position == Position.start ? -increment : increment;
                    } else {
                        delta = drawer.position == Position.start ? increment : -increment;
                    }
                } else if (ArrowLeft.match(event)) {
                    if (rtl) {
                        delta = drawer.position == Position.start ? increment : -increment;
                    } else {
                        delta = drawer.position == Position.start ? -increment : increment;
                    }
                } else if (ArrowUp.match(event)) {
                    delta = increment;
                } else if (ArrowDown.match(event)) {
                    delta = -increment;
                }
                newSize = newSize + delta;
                if (drawer.position == Position.bottom) {
                    style("overflow-anchor", "none");
                }
                updateSize(newSize);

            } else {
                if (isResizing) {
                    event.preventDefault();
                }
            }
        }
    }

    private void updateSize(double newSize) {
        currentWidth = newSize;
        splitterElement.aria(valueNow, calcValueNow());
        componentVar(component(Classes.drawer, panel), md.value, FlexBasis).applyTo(this, newSize + "px");
    }

    private boolean resizableDrawer() {
        return resizable && drawer != null;
    }
}
