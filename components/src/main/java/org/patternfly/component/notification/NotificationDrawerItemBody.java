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

import org.jboss.elemento.ElementTextMethods;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.body;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.description;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.notificationDrawer;

public class NotificationDrawerItemBody extends NotificationDrawerSubComponent<HTMLElement, NotificationDrawerItemBody>
        implements ElementTextMethods<HTMLElement, NotificationDrawerItemBody> {

    // ------------------------------------------------------ factory

    public static NotificationDrawerItemBody notificationDrawerItemBody() {
        return new NotificationDrawerItemBody();
    }

    public static NotificationDrawerItemBody notificationDrawerItemBody(String text) {
        return new NotificationDrawerItemBody().text(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ndib";

    NotificationDrawerItemBody() {
        super(SUB_COMPONENT_NAME, div().css(component(notificationDrawer, list, item, description)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public NotificationDrawerItemBody that() {
        return this;
    }
}
