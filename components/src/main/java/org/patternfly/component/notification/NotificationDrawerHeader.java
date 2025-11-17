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

import org.jboss.elemento.ElementTextDelegate;
import org.patternfly.component.menu.Dropdown;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.Aria.label;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.style.Classes.action;
import static org.patternfly.style.Classes.close;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.header;
import static org.patternfly.style.Classes.notificationDrawer;
import static org.patternfly.style.Classes.status;
import static org.patternfly.style.Classes.title;

public class NotificationDrawerHeader extends NotificationDrawerSubComponent<HTMLElement, NotificationDrawerHeader>
        implements ElementTextDelegate<HTMLElement, NotificationDrawerHeader> {

    // ------------------------------------------------------ factory

    public static NotificationDrawerHeader notificationDrawerHeader() {
        return new NotificationDrawerHeader();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ndh";
    private final HTMLElement textElement;
    private final HTMLElement statusElement;
    private final HTMLElement closeElement;

    NotificationDrawerHeader() {
        super(SUB_COMPONENT_NAME, div().css(component(notificationDrawer, header)).element());
        add(textElement = h(1, "Notifications").css(component(notificationDrawer, header, title)).element());
        add(statusElement = span().css(component(notificationDrawer, header, status)).element());
        add(div().css(component(notificationDrawer, header, action))
                .add(closeElement = div().css(component(notificationDrawer, header, action, close))
                        .add(button(times()).plain()
                                .aria(label, "Close")
                                .onClick((event, component) -> {
                                    NotificationDrawer drawer = lookupComponent();
                                    drawer.close();
                                }))
                        .element()));
    }

    @Override
    public Element textDelegate() {
        return textElement;
    }

    // ------------------------------------------------------ add

    public NotificationDrawerHeader addAction(Dropdown dropdown) {
        return addAction(dropdown.element());
    }

    public NotificationDrawerHeader addAction(HTMLElement element) {
        insertBefore(element, closeElement);
        return this;
    }

    // ------------------------------------------------------ builder

    public NotificationDrawerHeader status(String status) {
        statusElement.textContent = status;
        return this;
    }

    @Override
    public NotificationDrawerHeader that() {
        return this;
    }
}
