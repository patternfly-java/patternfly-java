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

import java.util.EnumSet;
import java.util.Set;
import java.util.function.Supplier;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.button.Button;
import org.patternfly.component.icon.InlineIcon;
import org.patternfly.core.Aria;
import org.patternfly.core.Closeable;
import org.patternfly.core.Logger;
import org.patternfly.core.Severity;
import org.patternfly.core.WithIcon;
import org.patternfly.handler.CloseHandler;
import org.patternfly.style.Modifiers.NoPadding;
import org.patternfly.thirdparty.popper.Modifiers;
import org.patternfly.thirdparty.popper.Placement;
import org.patternfly.thirdparty.popper.Popper;
import org.patternfly.thirdparty.popper.PopperBuilder;
import org.patternfly.thirdparty.popper.TriggerAction;

import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;
import elemental2.dom.Node;

import static elemental2.dom.DomGlobal.document;
import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.popover.PopoverBody.popoverBody;
import static org.patternfly.component.popover.PopoverFooter.popoverFooter;
import static org.patternfly.component.popover.PopoverHeader.popoverHeader;
import static org.patternfly.core.Aria.describedBy;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Aria.modal;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.style.Classes.arrow;
import static org.patternfly.style.Classes.close;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.popover;
import static org.patternfly.style.Classes.screenReader;
import static org.patternfly.style.Classes.title;
import static org.patternfly.style.Classes.widthAuto;
import static org.patternfly.style.PredefinedIcon.times;
import static org.patternfly.thirdparty.popper.Placement.auto;
import static org.patternfly.thirdparty.popper.Placement.top;

/**
 * A popover is in-app messaging that provides more information on specific product areas. Popovers display content in a new
 * window that overlays the current page. Unlike modals, popovers don't block the current page.
 *
 * @see <a href= "https://www.patternfly.org/components/popover/html">https://www.patternfly.org/components/popover/html</a>
 */
public class Popover extends BaseComponent<HTMLDivElement, Popover> implements
        Closeable<HTMLDivElement, Popover>,
        NoPadding<HTMLDivElement, Popover>,
        WithIcon<HTMLDivElement, Popover>,
        Attachable {

    // ------------------------------------------------------ factory

    public static Popover popover() {
        return new Popover(null);
    }

    public static Popover popover(By trigger) {
        return new Popover(() -> Elements.find(document.body, trigger));
    }

    public static Popover popover(HTMLElement trigger) {
        return new Popover(() -> trigger);
    }

    public static Popover popover(Supplier<HTMLElement> trigger) {
        return new Popover(trigger);
    }

    // ------------------------------------------------------ instance

    public static final int ANIMATION_DURATION = 300;
    public static final int ENTRY_DELAY = 300;
    public static final int EXIT_DELAY = 300;
    public static final int DISTANCE = 25;
    public static final int Z_INDEX = 9999;

    private final HTMLElement contentElement;
    private final Set<TriggerAction> triggerActions;
    private Supplier<HTMLElement> trigger;
    private boolean flip;
    private boolean showClose;
    private int distance;
    private int animationDuration;
    private int zIndex;
    private Popper popper;
    private Placement placement;
    private Button closeButton;
    private Severity severity;
    private PopoverHeader header;
    private HTMLElement screenReaderElement;
    private HTMLElement iconContainer;
    private CloseHandler<Popover> closeHandler;

    Popover(Supplier<HTMLElement> trigger) {
        super(ComponentType.Popover, div().css(component(popover))
                .style("display", "none")
                .attr(role, "dialog")
                .aria(modal, true)
                .element());

        this.trigger = trigger;
        this.triggerActions = EnumSet.of(TriggerAction.click);
        this.flip = true;
        this.showClose = true;
        this.placement = top;
        this.zIndex = Z_INDEX;
        this.distance = DISTANCE;
        this.animationDuration = ANIMATION_DURATION;

        String bodyId = Id.unique(componentType().id, "body");
        add(div().css(component(popover, arrow)));
        add(contentElement = div().css(component(popover, content))
                .element());
        aria(describedBy, bodyId);

        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (showClose) {
            closable(closeHandler);
        } else {
            failSafeRemoveFromParent(closeButton);
        }

        if (trigger != null) {
            HTMLElement triggerElement = trigger.get();
            if (triggerElement != null) {
                popper = new PopperBuilder(componentType(), triggerElement, element())
                        .animationDuration(animationDuration)
                        .zIndex(zIndex)
                        .placement(placement)
                        .addModifier(Modifiers.offset(distance),
                                Modifiers.noOverflow(),
                                Modifiers.hide(),
                                Modifiers.flip(placement == auto || flip),
                                Modifiers.placement(),
                                Modifiers.eventListeners(false))
                        .registerHandler(triggerActions, this::show, this::close)
                        .removePopperOnTriggerDetach()
                        .build();
            } else {
                Logger.undefined(componentType(), element(), "Unable to get trigger element");
            }
        } else {
            Logger.undefined(componentType(), element(), "No trigger element defined");
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        popper.cleanup();
    }

    // ------------------------------------------------------ add

    public Popover addHeader(String header) {
        return add(popoverHeader().textContent(header));
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
        return add(popoverBody().textContent(body));
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
        return add(popoverFooter().textContent(footer));
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

    public Popover appendToBody() {
        return appendTo(document.body);
    }

    public Popover appendTo(Node node) {
        if (node != null) {
            node.appendChild(element());
        }
        return this;
    }

    public Popover animationDuration(int animationDuration) {
        this.animationDuration = animationDuration;
        return this;
    }

    public Popover autoWidth() {
        return css(modifier(widthAuto));
    }

    public Popover closable() {
        return closable(null);
    }

    public Popover closable(CloseHandler<Popover> closeHandler) {
        if (closeButton == null) {
            insertFirst(contentElement, div().css(component(popover, close))
                    .add(closeButton = button()
                            .plain()
                            .icon(times)
                            .aria(label, "Close")
                            .on(click, event -> close(event, true)))
                    .element());
        }
        return onClose(closeHandler);
    }

    public Popover distance(int distance) {
        this.distance = distance;
        return this;
    }

    public Popover flip(boolean flip) {
        this.flip = flip;
        return this;
    }

    @Override
    public Popover icon(InlineIcon icon) {
        removeIcon();
        failSafeIconContainer().appendChild(icon.element());
        return this;
    }

    @Override
    public Popover removeIcon() {
        failSafeRemoveFromParent(iconContainer);
        return this;
    }

    public Popover noClose() {
        this.showClose = false;
        return this;
    }

    public Popover placement(Placement placement) {
        if (placement == auto) {
            flip = true;
        }
        this.placement = placement;
        return this;
    }

    public Popover severity(Severity severity) {
        return severity(severity, severity.aria);
    }

    public Popover severity(Severity severity, String screenReaderText) {
        if (this.severity != null) {
            element().classList.remove(this.severity.status.modifier);
        }
        this.severity = severity;
        css(severity.status.modifier);
        removeChildrenFrom(failSafeIconContainer());
        icon(severity.icon);
        failSafeScreenReaderElement().textContent = screenReaderText;
        return this;
    }

    public Popover trigger(By trigger) {
        return trigger(() -> Elements.find(document.body, trigger));
    }

    public Popover trigger(HTMLElement trigger) {
        return trigger(() -> trigger);
    }

    public Popover trigger(Supplier<HTMLElement> trigger) {
        this.trigger = trigger;
        return this;
    }

    public Popover triggerActions(TriggerAction... triggerActions) {
        if (triggerActions != null) {
            this.triggerActions.clear();
            this.triggerActions.addAll(asList(triggerActions));
        }
        return this;
    }

    public Popover zIndex(int zIndex) {
        this.zIndex = zIndex;
        return this;
    }

    @Override
    public Popover that() {
        return this;
    }

    // ------------------------------------------------------ aria

    /**
     * Accessible label for the popover, required when header is not present.
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
        this.closeHandler = closeHandler;
        return this;
    }

    // ------------------------------------------------------ api

    public void show() {
        show(new Event(""));
    }

    public void show(Event event) {
        popper.show(null);
    }

    @Override
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            popper.hide(() -> fireEvent(this, closeHandler, event, fireEvent));
        }
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeHeaderElement() {
        if (header == null) {
            add(popoverHeader());
        }
        return header.element();
    }

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null) {
            insertBefore(iconContainer = span().css(component(popover, title, icon)).element(), failSafeHeaderElement());
        }
        return iconContainer;
    }

    private HTMLElement failSafeScreenReaderElement() {
        if (screenReaderElement == null) {
            insertFirst(failSafeHeaderElement(), screenReaderElement = span().css(screenReader).element());
        }
        return screenReaderElement;
    }
}
