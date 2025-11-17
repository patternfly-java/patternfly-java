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

import org.patternfly.component.emptystate.EmptyState;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.setVisible;
import static org.patternfly.style.Classes.body;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.notificationDrawer;

public class NotificationDrawerBody extends NotificationDrawerSubComponent<HTMLElement, NotificationDrawerBody> {

    // ------------------------------------------------------ factory

    public static NotificationDrawerBody notificationDrawerBody() {
        return new NotificationDrawerBody();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ndb";
    private NotificationDrawerList list;
    private EmptyState emptyState;

    NotificationDrawerBody() {
        super(SUB_COMPONENT_NAME, div().css(component(notificationDrawer, body)).element());
    }

    // ------------------------------------------------------ add

    public NotificationDrawerBody addList(NotificationDrawerList list) {
        return add(list);
    }

    public NotificationDrawerBody add(NotificationDrawerList list) {
        this.list = list;
        element().appendChild(list.element());
        return this;
    }

    public NotificationDrawerBody addEmptyState(EmptyState emptyState) {
        return add(emptyState);
    }

    public NotificationDrawerBody add(EmptyState emptyState) {
        this.emptyState = emptyState;
        element().appendChild(this.emptyState.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public NotificationDrawerBody that() {
        return this;
    }

    // ------------------------------------------------------ api

    public void empty(boolean empty) {
        setVisible(list.element(), !empty);
        setVisible(emptyState.element(), empty);
    }
}
