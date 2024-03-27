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

import org.patternfly.component.WithText;
import org.patternfly.core.Aria;
import org.patternfly.core.ElementDelegate;
import org.patternfly.handler.ComponentHandler;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.ScrollIntoViewOptions;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Dataset.navigationItem;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.nav;

public class NavigationItem extends NavigationSubComponent<HTMLLIElement, NavigationItem> implements
        WithText<HTMLLIElement, NavigationItem>, ElementDelegate<HTMLLIElement, NavigationItem> {

    // ------------------------------------------------------ factory

    public static NavigationItem navigationItem(String id) {
        return new NavigationItem(id);
    }

    public static NavigationItem navigationItem(String id, String text) {
        return new NavigationItem(id).text(text);
    }

    public static NavigationItem navigationItem(String id, String text, String href) {
        return new NavigationItem(id).text(text).href(href);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "ni";

    public final String id;
    final HTMLAnchorElement a;
    private NavigationLinkText text;

    NavigationItem(String id) {
        super(SUB_COMPONENT_NAME, li().css(component(nav, item)).element());
        this.id = id;

        element().appendChild(a = a().css(component(nav, link))
                .on(click, e -> {
                    Navigation navigation = lookupComponent();
                    navigation.select(this);
                })
                .data(navigationItem, id)
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
    public NavigationItem that() {
        return this;
    }

    // ------------------------------------------------------ events

    public NavigationItem onClick(ComponentHandler<NavigationItem> handler) {
        a(a).on(click, e -> handler.handle(e, this));
        return this;
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
