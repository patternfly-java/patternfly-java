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
import java.util.EnumSet;
import java.util.List;
import java.util.Set;
import java.util.function.Supplier;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.jboss.elemento.IsElement;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.button.Button;
import org.patternfly.component.icon.InlineIcon;
import org.patternfly.core.Aria;
import org.patternfly.core.Closeable;
import org.patternfly.core.Modifiers.NoPadding;
import org.patternfly.core.Severity;
import org.patternfly.handler.CloseHandler;
import org.patternfly.layout.Classes;
import org.patternfly.layout.PredefinedIcon;
import org.patternfly.thirdparty.popper.Modifiers;
import org.patternfly.thirdparty.popper.Placement;
import org.patternfly.thirdparty.popper.Popper;
import org.patternfly.thirdparty.popper.PopperBuilder;
import org.patternfly.thirdparty.popper.TriggerAction;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;
import elemental2.dom.Node;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.setTimeout;
import static java.util.Arrays.asList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.footer;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.header;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.core.Aria.describedBy;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Aria.modal;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.layout.Classes.arrow;
import static org.patternfly.layout.Classes.body;
import static org.patternfly.layout.Classes.close;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.content;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.popover;
import static org.patternfly.layout.Classes.screenReader;
import static org.patternfly.layout.Classes.text;
import static org.patternfly.layout.Classes.title;
import static org.patternfly.layout.PredefinedIcon.times;
import static org.patternfly.thirdparty.popper.Placement.auto;
import static org.patternfly.thirdparty.popper.Placement.top;

/**
 * A popover is in-app messaging that provides more information on specific product areas. Popovers display content in a new
 * window that overlays the current page. Unlike modals, popovers don't block the current page.
 *
 * @see <a href= "https://www.patternfly.org/components/popover/html">https://www.patternfly.org/components/popover/html</a>
 */
public class Popover extends BaseComponent<HTMLDivElement, Popover> implements Closeable<HTMLDivElement, Popover>,
        NoPadding<HTMLDivElement, Popover>, Attachable {

    // ------------------------------------------------------ factory

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
    private final HTMLElement bodyElement;
    private final Supplier<HTMLElement> trigger;
    private final Set<TriggerAction> triggerActions;
    private final List<HandlerRegistration> handlerRegistrations;
    private boolean flip;
    private boolean showClose;
    private int distance;
    private int animationDuration;
    private int zIndex;
    private double transitionTimer;
    private Popper popper;
    private Placement placement;
    private Button closeButton;
    private Severity severity;
    private HTMLElement headerElement;
    private HTMLElement screenReaderElement;
    private HTMLElement footerElement;
    private HTMLElement iconContainer;
    private CloseHandler<Popover> closeHandler;

    Popover(Supplier<HTMLElement> trigger) {
        super(div().css(component(popover))
                .style("display", "none")
                .attr(role, "dialog")
                .aria(modal, true)
                .element(), ComponentType.Popover);

        this.trigger = trigger;
        this.triggerActions = EnumSet.of(TriggerAction.click);
        this.handlerRegistrations = new ArrayList<>();

        this.flip = true;
        this.showClose = true;
        this.placement = top;
        this.zIndex = Z_INDEX;
        this.distance = DISTANCE;
        this.animationDuration = ANIMATION_DURATION;

        String bodyId = Id.unique(componentType().id, "body");
        add(div().css(component(popover, arrow)));
        add(contentElement = div().css(component(popover, content))
                .add(bodyElement = div().css(component(popover, body))
                        .id(bodyId)
                        .element())
                .element());
        aria(describedBy, bodyId);

        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (showClose) {
            closable();
        }

        HTMLElement triggerElement = trigger.get();
        if (triggerElement != null) {
            this.popper = new PopperBuilder(triggerElement, element())
                    .placement(placement)
                    .addModifier(Modifiers.offset(distance),
                            Modifiers.noOverflow(),
                            Modifiers.hide(),
                            Modifiers.flip(placement == auto || flip),
                            Modifiers.placement())
                    .applyStyles(zIndex, animationDuration)
                    .registerHandler(triggerActions, handlerRegistrations, this::show, this::close)
                    .build();
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        for (HandlerRegistration handlerRegistration : handlerRegistrations) {
            handlerRegistration.removeHandler();
        }
        if (popper != null) {
            popper.destroy();
        }
    }

    // ------------------------------------------------------ add

    public Popover addHeader(IsElement<?> header) {
        return addHeader(header.element());
    }

    public Popover addHeader(Element header) {
        failSafeHeaderElement().appendChild(header);
        return this;
    }

    public Popover addHeader(String header) {
        failSafeHeaderElement().textContent = header;
        return this;
    }

    public Popover addIcon(String iconClass) {
        return addIcon(inlineIcon(iconClass));
    }

    public Popover addIcon(PredefinedIcon icon) {
        return addIcon(inlineIcon(icon));
    }

    public Popover addIcon(InlineIcon icon) {
        failSafeIconContainer().appendChild(icon.element());
        return this;
    }

    public Popover addBody(IsElement<?> body) {
        return addBody(body.element());
    }

    public Popover addBody(Element body) {
        bodyElement.appendChild(body);
        return this;
    }

    public Popover addBody(String body) {
        bodyElement.textContent = body;
        return this;
    }

    public Popover addFooter(IsElement<?> footer) {
        return addFooter(footer.element());
    }

    public Popover addFooter(Element footer) {
        failSafeFooterElement().appendChild(footer);
        return this;
    }

    public Popover addFooter(String footer) {
        failSafeFooterElement().textContent = footer;
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

    public Popover closable() {
        return closable(null);
    }

    public Popover closable(CloseHandler<Popover> closeHandler) {
        insertFirst(contentElement, div().css(component(popover, close))
                .add(closeButton = button(times, "Close")
                        .plain()
                        .on(click, event -> close(event, true)))
                .element());
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
        addIcon(severity.icon);
        failSafeScreenReaderElement().textContent = screenReaderText;
        return this;
    }

    public Popover trigger(TriggerAction... trigger) {
        if (trigger != null) {
            triggerActions.clear();
            triggerActions.addAll(asList(trigger));
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
        if (popper != null) {
            clearTimeout(transitionTimer);
            popper.show();
        }
    }

    @Override
    public void close(Event event, boolean fireEvent) {
        if (popper != null && shouldClose(this, closeHandler, event, fireEvent)) {
            style("opacity", 0);
            transitionTimer = setTimeout(__ -> {
                setVisible(this, false);
                fireEvent(this, closeHandler, event, fireEvent);
            }, animationDuration);
        }
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeHeaderElement() {
        if (headerElement == null) {
            String headerId = Id.unique(componentType().id, "header");
            insertBefore(header().css(component(popover, Classes.header))
                    .add(div().css(component(popover, title))
                            .id(headerId)
                            .add(headerElement = h(6).css(component(popover, title, text))
                                    .element()))
                    .element(),
                    bodyElement);
            aria(labelledBy, headerId);
        }
        return headerElement;
    }

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null) {
            insertBefore(iconContainer = span().css(popover, title, icon).element(), failSafeHeaderElement());
        }
        return iconContainer;
    }

    private HTMLElement failSafeFooterElement() {
        if (footerElement == null) {
            contentElement.appendChild(footerElement = footer().css(component(popover, Classes.footer)).element());
        }
        return footerElement;
    }

    private HTMLElement failSafeScreenReaderElement() {
        if (screenReaderElement == null) {
            insertFirst(failSafeHeaderElement(), screenReaderElement = span().css(screenReader).element());
        }
        return screenReaderElement;
    }
}