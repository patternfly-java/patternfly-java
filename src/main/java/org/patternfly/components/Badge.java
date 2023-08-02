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
package org.patternfly.components;

import org.jboss.elemento.HtmlContent;
import org.patternfly.resources.Constants;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.badge;
import static org.patternfly.resources.Constants.read;
import static org.patternfly.resources.Constants.unread;

/**
 * PatternFly badge component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/badge">https://www.patternfly.org/v4/documentation/core/components/badge</a>
 */
public class Badge extends BaseComponent<HTMLElement, Badge> implements HtmlContent<HTMLElement, Badge> {

    // ------------------------------------------------------ factory methods

    public static Badge read(int count) {
        return new Badge(String.valueOf(count), true);
    }

    public static Badge read(String text) {
        return new Badge(text, true);
    }

    public static Badge unread(int count) {
        return new Badge(String.valueOf(count), false);
    }

    public static Badge unread(String text) {
        return new Badge(text, false);
    }

    // ------------------------------------------------------ instance

    Badge(int count) {
        this(String.valueOf(count));
    }

    Badge(String text) {
        super(span().css(component(badge)).textContent(text).element(), "Badge");
    }

    Badge(String text, boolean read) {
        super(span().css(component(badge), read ? modifier(Constants.read) : modifier(unread)).textContent(text).element(),
                "Badge");
    }

    @Override
    public Badge that() {
        return this;
    }

    // ------------------------------------------------------ public API

    /** Marks the badge as read. */
    public Badge read() {
        element.classList.remove(modifier(unread));
        element.classList.add(modifier(read));
        return this;
    }

    /** Marks the badge as unread. */
    public Badge unread() {
        element.classList.remove(modifier(read));
        element.classList.add(modifier(unread));
        return this;
    }

    /** Modifies the count of this badge. */
    public Badge count(int count) {
        return text(String.valueOf(count));
    }

    /** Modifies the text of this badge. */
    public Badge text(String text) {
        element.textContent = text;
        return this;
    }
}
