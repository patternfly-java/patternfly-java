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

import org.patternfly.component.WithText;
import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.jumpLinks;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.text;

public class JumpLinksItem extends JumpLinksSubComponent<HTMLLIElement, JumpLinksItem> implements
        WithText<HTMLLIElement, JumpLinksItem> {

    // ------------------------------------------------------ factory

    public static JumpLinksItem jumpLinksItem(String id, String text) {
        return new JumpLinksItem(id).text(text);
    }

    public static JumpLinksItem jumpLinksItem(String id, String text, String href) {
        return new JumpLinksItem(id).text(text).href(href);
    }

    public static JumpLinksItem jumpLinksItem(String id, String text, String href, String target) {
        return new JumpLinksItem(id).text(text).href(href).target(target);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "jli";
    public final String id;
    private final HTMLAnchorElement anchorElement;
    private final HTMLElement textElement;
    JumpLinksList list;

    JumpLinksItem(String id) {
        super(SUB_COMPONENT_NAME, li().css(component(jumpLinks, item)).element());
        this.id = id;
        add(anchorElement = a().css(component(jumpLinks, link))
                .on(click, e -> {
                    JumpLinks jumpLinks = lookupFlatComponent();
                    jumpLinks.select(this);
                })
                .add(textElement = span().css(component(jumpLinks, link, text)).element())
                .element());
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
        textElement.textContent = text;
        return this;
    }

    public JumpLinksItem href(String href) {
        anchorElement.href = href;
        return this;
    }

    public JumpLinksItem target(String target) {
        anchorElement.target = target;
        return this;
    }

    @Override
    public JumpLinksItem that() {
        return this;
    }

    // ------------------------------------------------------ events

    public JumpLinksItem onClick(ComponentHandler<JumpLinksItem> actionHandler) {
        anchorElement.addEventListener(click.name, e -> actionHandler.handle(e, this));
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String text() {
        return textElement.textContent;
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
