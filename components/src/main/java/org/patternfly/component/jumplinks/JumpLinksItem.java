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
package org.patternfly.component.jumplinks;

import java.util.HashMap;
import java.util.Map;

import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.Elements;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.jumpLinks;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.text;

public class JumpLinksItem extends JumpLinksSubComponent<HTMLLIElement, JumpLinksItem> implements
        ComponentContext<HTMLLIElement, JumpLinksItem>,
        ElementTextDelegate<HTMLLIElement, JumpLinksItem>,
        HasIdentifier<HTMLLIElement, JumpLinksItem> {

    // ------------------------------------------------------ factory

    public static JumpLinksItem jumpLinksItem(String identifier, String text) {
        return new JumpLinksItem(identifier).text(text);
    }

    public static JumpLinksItem jumpLinksItem(String identifier, String text, String href) {
        return new JumpLinksItem(identifier).text(text).href(href);
    }

    public static JumpLinksItem jumpLinksItem(String identifier, String text, String href, String target) {
        return new JumpLinksItem(identifier).text(text).href(href).target(target);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "jli";
    private final String identifier;
    private final Map<String, Object> data;
    private final Button button;
    private final HTMLElement textElement;
    JumpLinksList list;

    JumpLinksItem(String identifier) {
        super(SUB_COMPONENT_NAME, li().css(component(jumpLinks, item))
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.data = new HashMap<>();

        add(span().css(component(jumpLinks, link))
                .add(button = button(a()).link()
                        .add(textElement = span().css(component(jumpLinks, link, text)).element())
                        .on(click, e -> {
                            JumpLinks jumpLinks = lookupComponent();
                            jumpLinks.select(this);
                        })));
    }

    @Override
    public Element textDelegate() {
        return textElement;
    }

    // ------------------------------------------------------ add

    public JumpLinksItem addList(JumpLinksList list) {
        return add(list);
    }

    // override to ensure internal wiring
    public JumpLinksItem add(JumpLinksList list) {
        this.list = list;
        add(list.element());
        return this;
    }

    // ------------------------------------------------------ builder

    public JumpLinksItem active() {
        return active(true);
    }

    public JumpLinksItem active(boolean active) {
        markSelected(active);
        return this;
    }

    @Override
    public JumpLinksItem text(String text) {
        Elements.textNode(textElement, text);
        return this;
    }

    public JumpLinksItem href(String href) {
        button.href(href);
        return this;
    }

    public JumpLinksItem target(String target) {
        button.target(target);
        return this;
    }

    @Override
    public <T> JumpLinksItem store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public JumpLinksItem that() {
        return this;
    }

    // ------------------------------------------------------ events

    public JumpLinksItem onClick(ComponentHandler<JumpLinksItem> handler) {
        button.onClick((e, b) -> handler.handle(e, this));
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String identifier() {
        return identifier;
    }

    @Override
    public String text() {
        return Elements.textNode(textElement);
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
        classList().toggle(modifier(Classes.current), selected);
        if (selected) {
            aria(Aria.current, "location");
        } else {
            element().removeAttribute(Aria.current);
        }
    }
}
