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
package org.patternfly.component.navigation;

import java.util.HashMap;
import java.util.Map;

import org.jboss.elemento.Elements;
import org.patternfly.component.ElementDelegate;
import org.patternfly.component.WithIdentifier;
import org.patternfly.component.WithText;
import org.patternfly.core.Aria;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.handler.ComponentHandler;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.ScrollIntoViewOptions;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.nav;

public class NavigationItem extends NavigationSubComponent<HTMLLIElement, NavigationItem> implements
        ComponentContext<HTMLLIElement, NavigationItem>,
        WithIdentifier<HTMLLIElement, NavigationItem>,
        WithText<HTMLLIElement, NavigationItem>,
        ElementDelegate<HTMLLIElement, NavigationItem> {

    // ------------------------------------------------------ factory

    public static NavigationItem navigationItem(String identifier) {
        return new NavigationItem(identifier);
    }

    public static NavigationItem navigationItem(String identifier, String text) {
        return new NavigationItem(identifier).text(text);
    }

    public static NavigationItem navigationItem(String identifier, String text, String href) {
        return new NavigationItem(identifier).text(text).href(href);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ni";

    final HTMLAnchorElement a;
    private final String identifier;
    private final Map<String, Object> data;
    private NavigationLinkText text;

    NavigationItem(String identifier) {
        super(SUB_COMPONENT_NAME, li().css(component(nav, item))
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.data = new HashMap<>();

        element().appendChild(a = a().css(component(nav, link))
                .element());
    }

    @Override
    public HTMLElement delegate() {
        return a;
    }

    // ------------------------------------------------------ add

    public NavigationItem addLinkText(NavigationLinkText text) {
        return add(text);
    }

    public NavigationItem add(NavigationLinkText text) {
        this.text = text;
        a.appendChild(text.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public NavigationItem text(String text) {
        if (text != null) {
            if (this.text != null) {
                this.text.textNode(text);
            } else {
                a(a).textNode(text);
            }
        }
        return this;
    }

    public NavigationItem href(String href) {
        if (href != null) {
            a.href = href;
        }
        return this;
    }

    @Override
    public <T> NavigationItem store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public NavigationItem that() {
        return this;
    }

    // ------------------------------------------------------ events

    public NavigationItem onClick(ComponentHandler<NavigationItem> handler) {
        a(a).on(click, e -> handler.handle(e, this));
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String identifier() {
        return identifier;
    }

    @Override
    public String text() {
        if (this.text != null) {
            return Elements.textNode(this.text);
        } else {
            return Elements.textNode(a);
        }
    }

    @Override
    public boolean has(String key) {
        return data.containsKey(key);
    }

    @SuppressWarnings("unchecked")
    public <T> T get(String key) {
        if (data.containsKey(key)) {
            return (T) data.get(key);
        }
        return null;
    }

    // ------------------------------------------------------ internal

    void select() {
        a.classList.add(modifier(current));
        a.setAttribute(Aria.current, "page");
        ScrollIntoViewOptions options = ScrollIntoViewOptions.create();
        options.setBlock("nearest");
        options.setInline("nearest");
        a.scrollIntoView(options);
    }
}
