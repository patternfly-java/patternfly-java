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
package org.patternfly.components.badge;

import org.patternfly.components.BaseComponent;
import org.patternfly.components.ComponentType;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.layout.Classes.badge;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.read;
import static org.patternfly.layout.Classes.unread;

/**
 * A badge is used to annotate other information like a label or an object name.
 *
 * @see <a href= "https://www.patternfly.org/components/badge/html">https://www.patternfly.org/components/badge/html</a>
 */
public class Badge extends BaseComponent<HTMLElement, Badge> {

    // ------------------------------------------------------ factory methods

    public static Badge badge(int count) {
        return new Badge(count);
    }

    public static Badge badge(int count, int limit) {
        return new Badge(count, limit);
    }

    // ------------------------------------------------------ instance

    private final HTMLElement value;
    private HTMLElement screenReader;
    private int limit;

    Badge(int count) {
        this(count, Integer.MAX_VALUE);
    }

    Badge(int count, int limit) {
        super(span().css(component(badge)).add(span()).element(), ComponentType.Badge);
        this.value = (HTMLElement) element().firstElementChild;
        this.limit = limit;
        count(count);
    }

    @Override
    public Badge that() {
        return this;
    }

    /** Sets the count of this badge. */
    public Badge count(int count) {
        value.textContent = count > limit ? count + "+" : String.valueOf(count);
        return this;
    }

    /** Sets the limit of this badge */
    public Badge limit(int limit) {
        this.limit = limit;
        return this;
    }

    public Badge screenReader(String text) {
        if (screenReader == null) {
            add(screenReader = span().css(Classes.screenReader).element());
        }
        screenReader.textContent = text;
        return this;
    }

    // ------------------------------------------------------ modifiers

    /** Marks the badge as read. */
    public Badge read() {
        element().classList.remove(modifier(unread));
        element().classList.add(modifier(read));
        return this;
    }

    /** Marks the badge as unread. */
    public Badge unread() {
        element().classList.remove(modifier(read));
        element().classList.add(modifier(unread));
        return this;
    }
}