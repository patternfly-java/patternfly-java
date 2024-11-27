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
package org.patternfly.component.list;

import java.util.HashMap;
import java.util.Map;

import org.jboss.elemento.ButtonType;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.ElementDelegate;
import org.patternfly.component.WithIdentifier;
import org.patternfly.component.WithText;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.handler.ComponentHandler;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.simpleList;

public class SimpleListItem extends SimpleListSubComponent<HTMLLIElement, SimpleListItem> implements
        ComponentContext<HTMLLIElement, SimpleListItem>,
        WithIdentifier<HTMLLIElement, SimpleListItem>,
        WithText<HTMLLIElement, SimpleListItem>,
        ElementDelegate<HTMLLIElement, SimpleListItem> {

    // ------------------------------------------------------ factory

    public static SimpleListItem simpleListItem(String identifier) {
        return new SimpleListItem(identifier, button(ButtonType.button));
    }

    public static SimpleListItem simpleListItem(String identifier, String text) {
        return new SimpleListItem(identifier, button(ButtonType.button)).text(text);
    }

    public static SimpleListItem simpleListItem(String identifier, String text, String href) {
        return new SimpleListItem(identifier, a().apply(a -> a.tabIndex = 0)).text(text).href(href);
    }

    public static SimpleListItem simpleListItem(String identifier, String text, String href, String target) {
        return new SimpleListItem(identifier, a().apply(a -> a.tabIndex = 0)).text(text).href(href).target(target);
    }

    public static <E extends HTMLElement> SimpleListItem simpleListItem(String identifier, HTMLContainerBuilder<E> builder) {
        return new SimpleListItem(identifier, builder);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "sli";
    private static final Logger logger = Logger.getLogger(SimpleListItem.class.getName());

    private final String identifier;
    private final Map<String, Object> data;
    private final HTMLElement itemElement;
    private final HTMLAnchorElement anchorElement;

    <E extends HTMLElement> SimpleListItem(String identifier, HTMLContainerBuilder<E> builder) {
        super(SUB_COMPONENT_NAME, li().css(component(simpleList, item))
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.data = new HashMap<>();
        this.itemElement = builder.css(component(simpleList, item, link))
                .on(click, e -> {
                    SimpleList simpleList = lookupComponent();
                    simpleList.select(this);
                })
                .element();
        this.anchorElement = itemElement.tagName.equalsIgnoreCase("a") ? (HTMLAnchorElement) itemElement : null;
        element().appendChild(itemElement);
    }

    @Override
    public HTMLElement delegate() {
        return itemElement;
    }

    // ------------------------------------------------------ builder

    @Override
    public SimpleListItem text(String text) {
        return textNode(text);
    }

    public SimpleListItem href(String href) {
        if (anchorElement != null) {
            anchorElement.href = href;
        } else {
            logger.error("Unable to set href on %o: This simple list item is not an <a/> item.", element());
        }
        return this;
    }

    public SimpleListItem target(String target) {
        if (anchorElement != null) {
            anchorElement.target = target;
        } else {
            logger.error("Unable to set target on %o: This simple list item is not an <a/> item.", element());
        }
        return this;
    }

    @Override
    public <T> SimpleListItem store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public SimpleListItem that() {
        return this;
    }

    // ------------------------------------------------------ events

    public SimpleListItem onClick(ComponentHandler<SimpleListItem> actionHandler) {
        itemElement.addEventListener(click.name, e -> actionHandler.handle(e, this));
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String identifier() {
        return identifier;
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

    void markSelected(boolean selected) {
        itemElement.classList.toggle(modifier(current), selected);
    }
}
