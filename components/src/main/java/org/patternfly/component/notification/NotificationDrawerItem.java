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

import java.util.HashMap;
import java.util.Map;

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.Severity;
import org.patternfly.core.ComponentContext;
import org.patternfly.style.Classes;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.header;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.notificationDrawer;
import static org.patternfly.style.Classes.screenReader;
import static org.patternfly.style.Classes.timestamp;
import static org.patternfly.style.Modifiers.toggleModifier;

public class NotificationDrawerItem extends NotificationDrawerSubComponent<HTMLElement, NotificationDrawerItem> implements
        ComponentContext<HTMLElement, NotificationDrawerItem>,
        HasIdentifier<HTMLElement, NotificationDrawerItem> {

    // ------------------------------------------------------ factory

    public static NotificationDrawerItem notificationDrawerItem(Severity type, String title) {
        return new NotificationDrawerItem(type, Id.unique(ComponentType.NotificationDrawer.id), title);
    }

    public static NotificationDrawerItem notificationDrawerItem(Severity type, String identifier, String title) {
        return new NotificationDrawerItem(type, identifier, title);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "ndi";
    private final String identifier;
    private final Map<String, Object> data;
    private final HTMLElement screenReaderElement;
    private HTMLElement timestampElement;

    NotificationDrawerItem(Severity severity, String identifier, String title) {
        super(SUB_COMPONENT_NAME, li().css(component(notificationDrawer, list, item), severity.status.modifier())
                .attr(tabindex, 0)
                .element());
        this.identifier = identifier;
        this.data = new HashMap<>();

        add(screenReaderElement = span().css(screenReader).text("unread").element());
        add(div().css(component(notificationDrawer, list, item, header))
                .add(span().css(component(notificationDrawer, list, item, header, Classes.icon))
                        .add(severity.icon.get().element()))
                .add(h(2).css(component(notificationDrawer, list, item, header, Classes.title))
                        .add(span().css(screenReader).text(severity.name() + " notification:"))
                        .add(title)));
    }

    // ------------------------------------------------------ add

    public NotificationDrawerItem addBody(NotificationDrawerItemBody body) {
        return add(body);
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #hoverable(boolean) hoverable(true)} */
    public NotificationDrawerItem hoverable() {
        return hoverable(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(hoverable)} */
    public NotificationDrawerItem hoverable(boolean hoverable) {
        return toggleModifier(that(), element(), Classes.hoverable, hoverable);
    }

    /** Same as {@linkplain #read(boolean) read(true)} */
    public NotificationDrawerItem read() {
        return read(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(read)} */
    public NotificationDrawerItem read(boolean read) {
        screenReaderElement.textContent = read ? "read" : "unread";
        return toggleModifier(that(), element(), Classes.read, read);
    }

    @Override
    public <T> NotificationDrawerItem store(String key, T value) {
        data.put(key, value);
        return this;
    }

    public NotificationDrawerItem timestamp(String timestamp) {
        failSafeTimestampElement().textContent = timestamp;
        return this;
    }

    @Override
    public NotificationDrawerItem that() {
        return this;
    }

    // ------------------------------------------------------ api

    @SuppressWarnings("unchecked")
    public <T> T get(String key) {
        if (data.containsKey(key)) {
            return (T) data.get(key);
        }
        return null;
    }

    @Override
    public boolean has(String key) {
        return data.containsKey(key);
    }

    @Override
    public String identifier() {
        return identifier;
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeTimestampElement() {
        if (timestampElement == null) {
            element().appendChild(timestampElement = div().css(component(notificationDrawer, list, item, timestamp)).element());
        }
        return timestampElement;
    }
}
