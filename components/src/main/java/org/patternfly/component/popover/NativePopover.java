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
import org.patternfly.popover.NativeAnchor;
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
import static org.patternfly.component.popover.NativePopoverHeader.popoverHeader;
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
public class NativePopover extends BaseComponent<HTMLDivElement, NativePopover> implements
        Attachable,
        Closeable<HTMLDivElement, NativePopover>,
        ComponentIcon<HTMLDivElement, NativePopover>,
        NoPadding<HTMLDivElement, NativePopover> {

    // ------------------------------------------------------ factory

    public static NativePopover nativePopover() {
        return new NativePopover(null);
    }

    public static NativePopover nativePopover(By trigger) {
        return new NativePopover(() -> Elements.querySelector(document.body, trigger));
    }

    public static NativePopover nativePopover(HTMLElement trigger) {
        return new NativePopover(() -> trigger);
    }

    public static NativePopover nativePopover(Supplier<HTMLElement> trigger) {
        return new NativePopover(trigger);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(NativePopover.class.getName());

    public static final int DISTANCE = 20;

    private final NativeAnchor anchor;
    private final HTMLElement contentElement;
    private final List<CloseHandler<NativePopover>> closeHandler;
    private boolean visible;
    private boolean showClose;
    private Severity severity;
    private Button closeButton;
    private NativePopoverHeader header;
    private HandlerRegistration triggerHandlers;
    private HandlerRegistration outsideClickHandler;

    NativePopover(Supplier<HTMLElement> trigger) {
        super(ComponentType.NativePopover, div().css(component(popover), top.modifier)
                .attr(role, dialog)
                .aria(modal, true)
                .attr("popover", "manual")
                .element());

        String id = Id.unique(componentType().id);
        this.anchor = new NativeAnchor(id, DISTANCE, element(), trigger);
        this.closeHandler = new ArrayList<>();
        this.visible = false;
        this.showClose = true;

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

        HTMLElement trigger = anchor.attach();
        if (trigger != null) {
            // click trigger: toggle on click
            triggerHandlers = bind(trigger, click, this::togglePopover);
        } else if (anchor.hasTriggerSupplier()) {
            logger.error("Unable to find trigger element for popover %o", element());
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
        anchor.detach();
    }

    // ------------------------------------------------------ add

    public NativePopover addHeader(String header) {
        if (this.header != null) {
            this.header.text(header);
            return this;
        } else {
            return add(popoverHeader().text(header));
        }
    }

    public NativePopover addHeader(NativePopoverHeader header) {
        return add(header);
    }

    // override to append to the right container!
    public NativePopover add(NativePopoverHeader header) {
        this.header = header;
        contentElement.appendChild(header.element());
        aria(labelledBy, header.headerId);
        return this;
    }

    public NativePopover addBody(String body) {
        return add(NativePopoverBody.popoverBody().text(body));
    }

    public NativePopover addBody(NativePopoverBody body) {
        return add(body);
    }

    // override to append to the right container!
    public NativePopover add(NativePopoverBody body) {
        contentElement.appendChild(body.element());
        return this;
    }

    public NativePopover addFooter(String footer) {
        return add(NativePopoverFooter.popoverFooter().text(footer));
    }

    public NativePopover addFooter(NativePopoverFooter footer) {
        return add(footer);
    }

    // override to append to the right container!
    public NativePopover add(NativePopoverFooter footer) {
        contentElement.appendChild(footer.element());
        return this;
    }

    // ------------------------------------------------------ builder

    public NativePopover autoWidth() {
        return css(modifier(widthAuto));
    }

    public NativePopover closable() {
        return closable(null);
    }

    public NativePopover closable(CloseHandler<NativePopover> closeHandler) {
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

    public NativePopover distance(int distance) {
        anchor.distance(distance);
        return this;
    }

    @Override
    public NativePopover icon(Element icon) {
        failSafeHeader().removeIcon();
        failSafeHeader().icon(icon);
        return this;
    }

    @Override
    public NativePopover removeIcon() {
        if (header != null) {
            header.removeIcon();
        }
        return this;
    }

    public NativePopover noClose() {
        this.showClose = false;
        return this;
    }

    public NativePopover placement(Placement placement) {
        if (verifyEnum(element(), "placement", placement, top, right, bottom, left)) {
            anchor.applyPlacement(placement);
        }
        return this;
    }

    public NativePopover status(Severity severity) {
        return status(severity, severity.name() + " popover");
    }

    public NativePopover status(Severity severity, String screenReaderText) {
        if (this.severity != null) {
            element().classList.remove(this.severity.status.modifier());
        }
        this.severity = severity;
        css(severity.status.modifier());
        icon((severity.icon.get().element()));
        return this;
    }

    public NativePopover trigger(String trigger) {
        anchor.trigger(trigger);
        return this;
    }

    public NativePopover trigger(By trigger) {
        anchor.trigger(trigger);
        return this;
    }

    public NativePopover trigger(HTMLElement trigger) {
        anchor.trigger(trigger);
        return this;
    }

    public NativePopover trigger(Supplier<HTMLElement> trigger) {
        anchor.trigger(trigger);
        return this;
    }

    @Override
    public NativePopover that() {
        return this;
    }

    // ------------------------------------------------------ aria

    /**
     * Accessible label for the popover, required when header is not present.
     */
    public NativePopover ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    /**
     * Accessible label for the close button.
     */
    public NativePopover ariaCloseLabel(String label) {
        if (closeButton != null) {
            closeButton.aria(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public NativePopover onClose(CloseHandler<NativePopover> closeHandler) {
        if (closeHandler != null) {
            this.closeHandler.add(closeHandler);
        }
        return this;
    }

    // ------------------------------------------------------ api

    public void show() {
        if (!visible && anchor.trigger() != null) {
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
        HTMLElement trigger = anchor.trigger();
        if (visible && trigger != null) {
            Element target = (Element) event.target;
            if (!element().contains(target) && !trigger.contains(target)) {
                close(event, true);
            }
        }
    }

    private NativePopoverHeader failSafeHeader() {
        if (header == null) {
            add(popoverHeader());
        }
        return header;
    }
}
