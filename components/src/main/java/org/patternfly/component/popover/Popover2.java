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
package org.patternfly.component.popover;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.Closeable;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Severity;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.handler.CloseHandler;
import org.patternfly.popper.Placement;
import org.patternfly.style.Modifiers.NoPadding;
import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.popover.Popover2Header.popover2Header;
import static org.patternfly.core.Aria.describedBy;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Aria.modal;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.dialog;
import static org.patternfly.core.Validation.verifyEnum;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.popper.Placement.bottom;
import static org.patternfly.popper.Placement.left;
import static org.patternfly.popper.Placement.right;
import static org.patternfly.popper.Placement.top;
import static org.patternfly.style.Classes.arrow;
import static org.patternfly.style.Classes.close;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.popover;
import static org.patternfly.style.Classes.widthAuto;

/**
 * A popover is in-app messaging that provides more information on specific product areas. Popovers display content in a new
 * window that overlays the current page. Unlike modals, popovers don't block the current page.
 * <p>
 * This implementation uses the Popover API and CSS anchor positioning instead of Popper.js. The popover uses the browser's
 * top-layer rendering for correct stacking, eliminating z-index issues.
 */
public class Popover2 extends BaseComponent<HTMLDivElement, Popover2> implements
        Attachable,
        Closeable<HTMLDivElement, Popover2>,
        ComponentIcon<HTMLDivElement, Popover2>,
        NoPadding<HTMLDivElement, Popover2> {

    // ------------------------------------------------------ factory

    public static Popover2 popover2() {
        return new Popover2(null);
    }

    public static Popover2 popover2(By trigger) {
        return new Popover2(() -> Elements.querySelector(document.body, trigger));
    }

    public static Popover2 popover2(HTMLElement trigger) {
        return new Popover2(() -> trigger);
    }

    public static Popover2 popover2(Supplier<HTMLElement> trigger) {
        return new Popover2(trigger);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Popover2.class.getName());

    public static final int DISTANCE = 20;

    private final String id;
    private final HTMLElement contentElement;
    private final List<CloseHandler<Popover2>> closeHandler;
    private Supplier<HTMLElement> triggerSupplier;
    private HTMLElement trigger;
    private boolean visible;
    private boolean showClose;
    private int distance;
    // private Placement placement;
    private Severity severity;
    private Button closeButton;
    private Popover2Header header;
    private HandlerRegistration triggerHandlers;
    private HandlerRegistration outsideClickHandler;

    Popover2(Supplier<HTMLElement> trigger) {
        super(ComponentType.Popover2, div().css(component(popover), top.modifier)
                .attr(role, dialog)
                .aria(modal, true)
                .attr("popover", "manual")
                .element());

        this.id = Id.unique(componentType().id);
        this.triggerSupplier = trigger;
        this.closeHandler = new ArrayList<>();
        this.visible = false;
        this.showClose = true;
        this.distance = DISTANCE;
        // this.placement = top;

        String bodyId = Id.unique(componentType().id, "body");
        element().appendChild(div().css(component(popover, arrow)).element());
        element().appendChild(contentElement = div().css(component(popover, content)).element());
        aria(describedBy, bodyId);

        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (showClose) {
            closable();
        } else {
            failSafeRemoveFromParent(closeButton);
        }

        if (triggerSupplier != null) {
            trigger = triggerSupplier.get();
            if (trigger != null) {
                // CSS anchor positioning
                String anchorName = "--" + id;
                trigger.style.setProperty("anchor-name", anchorName);
                style("position-anchor", anchorName);
                style("margin", distance + "px");

                // placement
                // applyPlacement(placement);

                // click trigger: toggle on click
                triggerHandlers = bind(trigger, click, this::togglePopover);
            } else {
                logger.error("Unable to find trigger element for popover %o", element());
            }
        } else {
            logger.error("No trigger element defined for popover %o", element());
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (visible) {
            element().hidePopover();
            visible = false;
        }
        if (outsideClickHandler != null) {
            outsideClickHandler.removeHandler();
        }
        if (triggerHandlers != null) {
            triggerHandlers.removeHandler();
        }
        if (trigger != null) {
            trigger.style.removeProperty("anchor-name");
            trigger = null;
        }
    }

    // ------------------------------------------------------ add

    public Popover2 addHeader(String header) {
        if (this.header != null) {
            this.header.text(header);
            return this;
        } else {
            return add(popover2Header().text(header));
        }
    }

    public Popover2 addHeader(Popover2Header header) {
        return add(header);
    }

    // override to append to the right container!
    public Popover2 add(Popover2Header header) {
        this.header = header;
        contentElement.appendChild(header.element());
        aria(labelledBy, header.headerId);
        return this;
    }

    public Popover2 addBody(String body) {
        return add(Popover2Body.popover2Body().text(body));
    }

    public Popover2 addBody(Popover2Body body) {
        return add(body);
    }

    // override to append to the right container!
    public Popover2 add(Popover2Body body) {
        contentElement.appendChild(body.element());
        return this;
    }

    public Popover2 addFooter(String footer) {
        return add(Popover2Footer.popover2Footer().text(footer));
    }

    public Popover2 addFooter(Popover2Footer footer) {
        return add(footer);
    }

    // override to append to the right container!
    public Popover2 add(Popover2Footer footer) {
        contentElement.appendChild(footer.element());
        return this;
    }

    // ------------------------------------------------------ builder

    public Popover2 autoWidth() {
        return css(modifier(widthAuto));
    }

    public Popover2 closable() {
        return closable(null);
    }

    public Popover2 closable(CloseHandler<Popover2> closeHandler) {
        if (closeButton == null) {
            insertFirst(contentElement, div().css(component(popover, close))
                    .add(closeButton = button()
                            .plain()
                            .icon(times())
                            .aria(label, "Close")
                            .on(click, event -> close(event, true)))
                    .element());
        }
        return onClose(closeHandler);
    }

    public Popover2 distance(int distance) {
        this.distance = distance;
        return this;
    }

    @Override
    public Popover2 icon(Element icon) {
        failSafeHeader().removeIcon();
        failSafeHeader().icon(icon);
        return this;
    }

    @Override
    public Popover2 removeIcon() {
        if (header != null) {
            header.removeIcon();
        }
        return this;
    }

    public Popover2 noClose() {
        this.showClose = false;
        return this;
    }

    public Popover2 placement(Placement placement) {
        if (verifyEnum(element(), "placement", placement, top, right, bottom, left)) {
            for (String mod : Placement.modifiers) {
                classList().remove(mod);
            }
            classList().add(placement.modifier);
        }
        return this;
    }

    public Popover2 status(Severity severity) {
        return status(severity, severity.name() + " popover");
    }

    public Popover2 status(Severity severity, String screenReaderText) {
        if (this.severity != null) {
            element().classList.remove(this.severity.status.modifier());
        }
        this.severity = severity;
        css(severity.status.modifier());
        icon((severity.icon.get().element()));
        return this;
    }

    public Popover2 trigger(String trigger) {
        this.triggerSupplier = () -> Elements.querySelector(document.body, By.selector(trigger));
        return this;
    }

    public Popover2 trigger(By trigger) {
        this.triggerSupplier = () -> Elements.querySelector(document.body, trigger);
        return this;
    }

    public Popover2 trigger(HTMLElement trigger) {
        this.triggerSupplier = () -> trigger;
        return this;
    }

    public Popover2 trigger(Supplier<HTMLElement> trigger) {
        this.triggerSupplier = trigger;
        return this;
    }

    @Override
    public Popover2 that() {
        return this;
    }

    // ------------------------------------------------------ aria

    /**
     * Accessible label for the popover, required when header is not present.
     */
    public Popover2 ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    /**
     * Accessible label for the close button.
     */
    public Popover2 ariaCloseLabel(String label) {
        if (closeButton != null) {
            closeButton.aria(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public Popover2 onClose(CloseHandler<Popover2> closeHandler) {
        if (closeHandler != null) {
            this.closeHandler.add(closeHandler);
        }
        return this;
    }

    // ------------------------------------------------------ api

    public void show() {
        if (!visible && trigger != null) {
            element().showPopover();
            visible = true;
            outsideClickHandler = bind(document, click.name, this::onOutsideClick);
        }
    }

    @Override
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            if (visible) {
                element().hidePopover();
                visible = false;
                if (outsideClickHandler != null) {
                    outsideClickHandler.removeHandler();
                    outsideClickHandler = null;
                }
                fireEvent(this, closeHandler, event, fireEvent);
            }
        }
    }

    // ------------------------------------------------------ internal

    private void togglePopover(Event event) {
        if (visible) {
            close(event, true);
        } else {
            show();
        }
    }

    private void onOutsideClick(Event event) {
        if (visible && trigger != null) {
            Element target = (Element) event.target;
            if (!element().contains(target) && !trigger.contains(target)) {
                close(event, true);
            }
        }
    }

    private Popover2Header failSafeHeader() {
        if (header == null) {
            add(popover2Header());
        }
        return header;
    }
}
