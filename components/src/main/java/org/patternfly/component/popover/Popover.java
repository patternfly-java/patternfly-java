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
import org.patternfly.core.Attributes;
import org.patternfly.handler.CloseHandler;
import org.patternfly.position.AnchorPositioning;
import org.patternfly.position.CssPositioning;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.NoPadding;
import org.patternfly.style.Placement;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.setTimeout;
import static org.gwtproject.event.shared.HandlerRegistrations.compose;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.focusin;
import static org.jboss.elemento.EventType.focusout;
import static org.jboss.elemento.EventType.mouseenter;
import static org.jboss.elemento.EventType.mouseleave;
import static org.jboss.elemento.EventType.scroll;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.popover.PopoverHeader.popoverHeader;
import static org.patternfly.core.Aria.describedBy;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Aria.modal;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.dialog;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.style.Classes.arrow;
import static org.patternfly.style.Classes.close;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.widthAuto;
import static org.patternfly.style.Placement.auto;
import static org.patternfly.style.Placement.top;

/**
 * A popover is in-app messaging that provides more information on specific product areas. Popovers display content in a new
 * window that overlays the current page. Unlike modals, popovers don't block the current page.
 * <p>
 * This implementation uses the Popover API and CSS anchor positioning instead of Popper.js. The popover uses the browser's
 * top-layer rendering for correct stacking, eliminating z-index issues.
 *
 * @see <a href= "https://www.patternfly.org/components/popover">https://www.patternfly.org/components/popover</a>
 */
public class Popover extends BaseComponent<HTMLDivElement, Popover> implements
        Attachable,
        Closeable<HTMLDivElement, Popover>,
        ComponentIcon<HTMLDivElement, Popover>,
        NoPadding<HTMLDivElement, Popover> {

    // ------------------------------------------------------ factory

    public static Popover popover() {
        return new Popover(null);
    }

    public static Popover popover(By trigger) {
        return new Popover(() -> Elements.querySelector(document.body, trigger));
    }

    public static Popover popover(HTMLElement trigger) {
        return new Popover(() -> trigger);
    }

    public static Popover popover(Supplier<HTMLElement> trigger) {
        return new Popover(trigger);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Popover.class.getName());

    public static final int DISTANCE = 20;
    public static final int ENTRY_DELAY = 300;
    public static final int EXIT_DELAY = 300;

    private final AnchorPositioning ap;
    private final HTMLElement contentElement;
    private final List<CloseHandler<Popover>> closeHandler;

    private boolean showClose;
    private boolean hoverable;
    private int entryDelay;
    private int exitDelay;
    private double showTimeout;
    private double hideTimeout;
    private Placement placement;
    private Severity severity;
    private Button closeButton;
    private PopoverHeader header;
    private HandlerRegistration triggerHandlers;
    private HandlerRegistration anchorHandlers;
    private HandlerRegistration outsideClickHandler;
    private HandlerRegistration scrollHandler;

    Popover(Supplier<HTMLElement> trigger) {
        super(ComponentType.Popover, div().css(component(Classes.popover), top.modifier())
                .attr(role, dialog)
                .aria(modal, true)
                .attr(Attributes.popover, "manual")
                .element());

        String id = Id.unique(componentType().id);
        this.ap = new AnchorPositioning(id, element(), trigger, DISTANCE, CssPositioning.popoverEnabled(), false);
        this.closeHandler = new ArrayList<>();
        this.showClose = true;
        this.hoverable = false;
        this.showTimeout = 0;
        this.hideTimeout = 0;
        this.entryDelay = ENTRY_DELAY;
        this.exitDelay = EXIT_DELAY;
        this.placement = auto;

        String bodyId = Id.unique(componentType().id, "body");
        element().appendChild(div().css(component(Classes.popover, arrow)).element());
        element().appendChild(contentElement = div().css(component(Classes.popover, content)).element());
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

        HTMLElement trigger = ap.attach();
        if (trigger != null) {
            // top is the default for auto and recalculated on show()
            ap.applyPlacement(placement == auto ? top : placement);

            if (hoverable) {
                triggerHandlers = compose(
                        bind(trigger, mouseenter, e -> scheduleShow()),
                        bind(trigger, mouseleave, e -> scheduleHide()),
                        bind(trigger, focusin, e -> scheduleShow()),
                        bind(trigger, focusout, e -> scheduleHide()));
                anchorHandlers = compose(
                        bind(element(), mouseenter, e -> cancelTimers()),
                        bind(element(), mouseleave, e -> scheduleHide()));

            } else {
                triggerHandlers = bind(trigger, click, this::togglePopover);
            }

            if (!ap.cssPositioning()) {
                scrollHandler = bind(document, scroll, true, e -> recalculatePlacement());
            }

        } else if (ap.hasTriggerSupplier()) {
            logger.error("Unable to find trigger element for popover %o", element());
        } else {
            logger.error("No trigger element defined for popover %o", element());
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        cancelTimers();
        if (ap.visible()) {
            ap.hide();
        }
        if (scrollHandler != null) {
            scrollHandler.removeHandler();
        }
        if (anchorHandlers != null) {
            anchorHandlers.removeHandler();
        }
        if (outsideClickHandler != null) {
            outsideClickHandler.removeHandler();
        }
        if (triggerHandlers != null) {
            triggerHandlers.removeHandler();
        }
        ap.detach();
    }

    // ------------------------------------------------------ add

    public Popover addHeader(String header) {
        if (this.header != null) {
            this.header.text(header);
            return this;
        } else {
            return add(popoverHeader().text(header));
        }
    }

    public Popover addHeader(PopoverHeader header) {
        return add(header);
    }

    // override to append to the right container!
    public Popover add(PopoverHeader header) {
        this.header = header;
        contentElement.appendChild(header.element());
        aria(labelledBy, header.headerId);
        return this;
    }

    public Popover addBody(String body) {
        return add(PopoverBody.popoverBody().text(body));
    }

    public Popover addBody(PopoverBody body) {
        return add(body);
    }

    // override to append to the right container!
    public Popover add(PopoverBody body) {
        contentElement.appendChild(body.element());
        return this;
    }

    public Popover addFooter(String footer) {
        return add(PopoverFooter.popoverFooter().text(footer));
    }

    public Popover addFooter(PopoverFooter footer) {
        return add(footer);
    }

    // override to append to the right container!
    public Popover add(PopoverFooter footer) {
        contentElement.appendChild(footer.element());
        return this;
    }

    // ------------------------------------------------------ builder

    public Popover autoWidth() {
        return css(modifier(widthAuto));
    }

    public Popover closable() {
        return closable(null);
    }

    public Popover closable(CloseHandler<Popover> closeHandler) {
        if (closeButton == null) {
            insertFirst(contentElement, div().css(component(Classes.popover, close))
                    .add(closeButton = button()
                            .plain()
                            .icon(times())
                            .aria(label, "Close")
                            .on(click, event -> close(event, true)))
                    .element());
        }
        return onClose(closeHandler);
    }

    public Popover distance(int distance) {
        ap.distance(distance);
        return this;
    }

    public Popover entryDelay(int delay) {
        this.entryDelay = delay;
        return this;
    }

    public Popover exitDelay(int delay) {
        this.exitDelay = delay;
        return this;
    }

    public Popover hoverable() {
        return hoverable(true);
    }

    public Popover hoverable(boolean hoverable) {
        this.hoverable = hoverable;
        return this;
    }

    @Override
    public Popover icon(Element icon) {
        failSafeHeader().removeIcon();
        failSafeHeader().icon(icon);
        return this;
    }

    @Override
    public Popover removeIcon() {
        if (header != null) {
            header.removeIcon();
        }
        return this;
    }

    public Popover noClose() {
        this.showClose = false;
        return this;
    }

    public Popover placement(Placement placement) {
        this.placement = placement;
        return this;
    }

    public Popover status(Severity severity) {
        return status(severity, severity.name() + " popover");
    }

    public Popover status(Severity severity, String screenReaderText) {
        if (this.severity != null) {
            element().classList.remove(this.severity.status.modifier());
        }
        this.severity = severity;
        css(severity.status.modifier());
        icon((severity.icon.get().element()));
        return this;
    }

    public Popover trigger(String trigger) {
        ap.trigger(trigger);
        return this;
    }

    public Popover trigger(By trigger) {
        ap.trigger(trigger);
        return this;
    }

    public Popover trigger(HTMLElement trigger) {
        ap.trigger(trigger);
        return this;
    }

    public Popover trigger(Supplier<HTMLElement> trigger) {
        ap.trigger(trigger);
        return this;
    }

    @Override
    public Popover that() {
        return this;
    }

    // ------------------------------------------------------ aria

    /**
     * Accessible label for the popover, required when a header is not present.
     */
    public Popover ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    /**
     * Accessible label for the close button.
     */
    public Popover ariaCloseLabel(String label) {
        if (closeButton != null) {
            closeButton.aria(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public Popover onClose(CloseHandler<Popover> closeHandler) {
        if (closeHandler != null) {
            this.closeHandler.add(closeHandler);
        }
        return this;
    }

    // ------------------------------------------------------ api

    public void show() {
        if (!ap.visible() && ap.trigger() != null) {
            if (ap.cssPositioning()) {
                // CSS handles position-try-fallbacks; just apply preferred placement and show
                ap.applyPlacement(placement == auto ? top : placement);
                ap.show();
            } else {
                // JS calculates the best placement via viewport measurements.
                // For the calculation to work, the tooltip must be at least hidden
                style("visibility", "hidden");
                ap.show();
                ap.applyBestPlacement(placement);
                element().style.removeProperty("visibility");
            }
            if (!hoverable) {
                outsideClickHandler = bind(document, click.name, this::onOutsideClick);
            }
        }
    }

    @Override
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            if (ap.visible()) {
                ap.hide();
                if (outsideClickHandler != null) {
                    outsideClickHandler.removeHandler();
                    outsideClickHandler = null;
                }
                fireEvent(this, closeHandler, event, fireEvent);
            }
        }
    }

    // ------------------------------------------------------ internal

    private void scheduleShow() {
        cancelTimers();
        showTimeout = setTimeout(e -> show(), entryDelay);
    }

    private void scheduleHide() {
        cancelTimers();
        hideTimeout = setTimeout(e -> close(new Event(""), true), exitDelay);
    }

    private void recalculatePlacement() {
        if (ap.visible()) {
            ap.applyBestPlacement(placement);
        }
    }

    private void cancelTimers() {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
    }

    private void togglePopover(Event event) {
        if (ap.visible()) {
            close(event, true);
        } else {
            show();
        }
    }

    private void onOutsideClick(Event event) {
        HTMLElement trigger = ap.trigger();
        if (ap.visible() && trigger != null) {
            Element target = (Element) event.target;
            if (!element().contains(target) && !trigger.contains(target)) {
                close(event, true);
            }
        }
    }

    private PopoverHeader failSafeHeader() {
        if (header == null) {
            add(popoverHeader());
        }
        return header;
    }
}
