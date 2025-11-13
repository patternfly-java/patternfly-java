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
package org.patternfly.component.notification;

import java.util.ArrayList;
import java.util.List;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.Closeable;
import org.patternfly.component.ComponentType;
import org.patternfly.handler.CloseHandler;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertFirst;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.notificationDrawer;

public class NotificationDrawer extends BaseComponent<HTMLElement, NotificationDrawer> implements
        Closeable<HTMLElement, NotificationDrawer> {

    // ------------------------------------------------------ factory

    public static NotificationDrawer notificationDrawer() {
        return new NotificationDrawer();
    }

    // ------------------------------------------------------ instance

    private NotificationDrawerHeader header;
    private NotificationDrawerBody body;
    private final List<CloseHandler<NotificationDrawer>> closeHandler;

    private NotificationDrawer() {
        super(ComponentType.NotificationDrawer, div().css(component(notificationDrawer)).element());
        this.closeHandler = new ArrayList<>();
    }

    // ------------------------------------------------------ add

    public NotificationDrawer addHeader(NotificationDrawerHeader header) {
        return add(header);
    }

    public NotificationDrawer add(NotificationDrawerHeader header) {
        this.header = header;
        insertFirst(element(), header.element());
        return this;
    }

    public NotificationDrawer addBody(NotificationDrawerBody body) {
        return add(body);
    }

    public NotificationDrawer add(NotificationDrawerBody body) {
        this.body = body;
        element().appendChild(body.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public NotificationDrawer that() {
        return null;
    }

    // ------------------------------------------------------ events

    @Override
    public NotificationDrawer onClose(CloseHandler<NotificationDrawer> closeHandler) {
        this.closeHandler.add(closeHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            fireEvent(this, closeHandler, event, fireEvent);
        }
    }

    public NotificationDrawerHeader header() {
        return header;
    }

    public NotificationDrawerBody body() {
        return body;
    }
}
