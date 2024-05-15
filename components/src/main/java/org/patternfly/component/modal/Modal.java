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
package org.patternfly.component.modal;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.Id;
import org.jboss.elemento.Key;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.Closeable;
import org.patternfly.component.ComponentDelegate;
import org.patternfly.component.ComponentType;
import org.patternfly.component.backdrop.Backdrop;
import org.patternfly.core.Aria;
import org.patternfly.handler.CloseHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Size;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.keydown;
import static org.patternfly.component.backdrop.Backdrop.backdrop;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.modal.ModalHeader.modalHeader;
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
import static org.patternfly.layout.bullseye.Bullseye.bullseye;
import static org.patternfly.style.Classes.alignTop;
import static org.patternfly.style.Classes.close;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.modalBox;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Size.md;
import static org.patternfly.style.Size.sm;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.MaxWidth;
import static org.patternfly.style.Variables.Width;

/**
 * A modal displays important information to a user without requiring them to navigate to a new page.
 *
 * @see <a href= "https://www.patternfly.org/components/modal">https://www.patternfly.org/components/modal</a>
 */
public class Modal extends ComponentDelegate<HTMLElement, Modal> implements Attachable, Closeable<HTMLElement, Modal> {

    // ------------------------------------------------------ factory

    public static Modal modal() {
        return new Modal();
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Modal.class.getName());
    private final Backdrop backdrop;
    private final HTMLElement closeContainer;
    private boolean open;
    private boolean hideClose;
    private ModalHeader header;
    private ModalBody body;
    private ModalFooter footer;
    private HTMLElement target;
    private CloseHandler<Modal> closeHandler;
    private HandlerRegistration escapeHandler;
    boolean autoClose;

    Modal() {
        super(ComponentType.Modal);
        this.open = false;
        this.autoClose = false;
        this.hideClose = false;
        HTMLElement modalElement;
        this.backdrop = backdrop()
                .add(bullseye()
                        .add(modalElement = div().css(component(modalBox))
                                .attr(role, dialog)
                                .aria(modal, true)
                                .add(closeContainer = div().css(component(modalBox, close))
                                        .add(button()
                                                .plain()
                                                .icon(times())
                                                .aria(label, "Close")
                                                .on(click, e -> close(e, true)))
                                        .element())
                                .element()));
        delegateTo(modalElement);
        Attachable.register(modalElement, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (hideClose) {
            setVisible(closeContainer, false);
        }
        if (!element().hasAttribute(labelledBy)) {
            if (header != null && header.title != null) {
                String titleId;
                if (header.title.element().hasAttribute("id")) {
                    titleId = header.title.element().getAttribute("id");
                } else {
                    titleId = Id.unique(componentType().id, "header", "title");
                }
                aria(labelledBy, titleId);
                if (header.title.severity != null) {
                    css(header.title.severity.status.modifier);
                }
            }
        }
        if (!element().hasAttribute(Aria.describedBy)) {
            if (body != null) {
                String bodyId;
                if (body.element().hasAttribute("id")) {
                    bodyId = body.element().getAttribute("id");
                } else {
                    bodyId = Id.unique(componentType().id, "body");
                }
                aria(describedBy, bodyId);
            }
        }
    }

    // ------------------------------------------------------ add

    public Modal appendToBody() {
        return appendTo(document.body);
    }

    public Modal appendTo(HTMLElement element) {
        target = element;
        return this;
    }

    public Modal addHeader(String title) {
        return add(modalHeader().addTitle(title));
    }

    public Modal addHeader(ModalHeader header) {
        return add(header);
    }

    public Modal add(ModalHeader header) {
        if (this.header != null) {
            logger.warn("Header already added to modal %o", element());
        }
        this.header = header;
        insertAfter(header, closeContainer);
        return this;
    }

    public Modal addBody(ModalBody body) {
        return add(body);
    }

    public Modal add(ModalBody body) {
        if (this.body != null) {
            logger.warn("Body already added to modal %o", element());
        }
        this.body = body;
        if (header != null) {
            insertAfter(body, header.element());
        } else if (footer != null) {
            insertBefore(body, footer.element());
        } else {
            insertAfter(body, closeContainer);
        }
        return this;
    }

    public Modal addFooter(ModalFooter footer) {
        return add(footer);
    }

    public Modal add(ModalFooter footer) {
        if (this.footer != null) {
            logger.warn("Footer already added to modal %o", element());
        }
        this.footer = footer;
        if (body != null) {
            insertAfter(footer, body.element());
        } else if (header != null) {
            insertAfter(footer, header.element());
        } else {
            insertAfter(footer, closeContainer);
        }
        return this;
    }

    // ------------------------------------------------------ builder

    public Modal autoClose(boolean autoClose) {
        this.autoClose = autoClose;
        return this;
    }

    public Modal hideClose() {
        this.hideClose = true;
        return this;
    }

    public Modal maxWidth(String maxWidth) {
        // --pf-v5-c-modal-box--MaxWidth
        return componentVar(component(modalBox), MaxWidth).applyTo(this).set(maxWidth);
    }

    public Modal size(Size size) {
        if (verifyEnum(element(), "size", size, sm, md, lg)) {
            css(size.modifier());
        }
        return this;
    }

    public Modal top() {
        return css(modifier(alignTop));
    }

    public Modal width(String width) {
        // --pf-v5-c-modal-box--Width
        return componentVar(component(modalBox), Width).applyTo(this).set(width);
    }

    @Override
    public Modal that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public Modal onClose(CloseHandler<Modal> closeHandler) {
        this.closeHandler = closeHandler;
        return null;
    }

    // ------------------------------------------------------ api

    public void open() {
        if (open) {
            logger.warn("Modal %o already open", element());
        } else {
            storeComponent();
            HTMLElement failSafeTarget = failSafeTarget();
            failSafeTarget.appendChild(backdrop.element());
            failSafeTarget.classList.add(component(Classes.backdrop, Classes.open));
            escapeHandler = bind(failSafeTarget, keydown, e -> {
                if (Key.Escape.match(e)) {
                    close(e, true);
                }
            });
            open = true;
        }
    }

    @Override
    public void close(Event event, boolean fireEvent) {
        if (open && shouldClose(this, closeHandler, event, fireEvent)) {
            failSafeRemoveFromParent(backdrop);
            failSafeTarget().classList.remove(component(Classes.backdrop, Classes.open));
            if (escapeHandler != null) {
                escapeHandler.removeHandler();
            }
            fireEvent(this, closeHandler, event, fireEvent);
            open = false;
        }
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeTarget() {
        return target == null ? document.body : target;
    }
}
