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
package org.patternfly.component.breadcrumb;

import java.util.HashMap;
import java.util.Map;

import org.jboss.elemento.ElementTextDelegate;
import org.patternfly.component.HasIdentifier;
import org.patternfly.core.Aria;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.style.Classes;
import elemental2.dom.Element;
import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.style.Classes.breadcrumb;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.divider;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.modifier;

public class BreadcrumbItem extends BreadcrumbSubComponent<HTMLLIElement, BreadcrumbItem> implements
        ComponentContext<HTMLLIElement, BreadcrumbItem>,
        ElementTextDelegate<HTMLLIElement, BreadcrumbItem>,
        HasIdentifier<HTMLLIElement, BreadcrumbItem> {

    // ------------------------------------------------------ factory

    public static BreadcrumbItem breadcrumbItem(String identifier, String text) {
        return new BreadcrumbItem(identifier).text(text);
    }

    public static BreadcrumbItem breadcrumbItem(String identifier, String text, String href) {
        return new BreadcrumbItem(identifier).href(href).text(text);
    }

    public static BreadcrumbItem breadcrumbItem(String identifier, String text, String href, String target) {
        return new BreadcrumbItem(identifier).href(href).target(target).text(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "bci";
    private final String identifier;
    private final Map<String, Object> data;
    private final HTMLElement textElement;
    private HTMLAnchorElement anchorElement;

    <E extends HTMLElement> BreadcrumbItem(String identifier) {
        super(SUB_COMPONENT_NAME, li().css(component(breadcrumb, item))
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.data = new HashMap<>();
        add(span().css(component(breadcrumb, item, divider))
                .add(angleRight().element()));
        add(textElement = span().element());
    }

    @Override
    public Element textDelegate() {
        if (anchorElement != null) {
            return anchorElement;
        }
        return textElement;
    }

    // ------------------------------------------------------ builder

    public BreadcrumbItem active() {
        return active(true);
    }

    public BreadcrumbItem active(boolean active) {
        if (active) {
            failSafeAnchorElement().classList.add(modifier(Classes.current));
            failSafeAnchorElement().setAttribute(Aria.current, "page");
        } else {
            failSafeAnchorElement().classList.remove(modifier(Classes.current));
            failSafeAnchorElement().removeAttribute(Aria.current);
        }
        return this;
    }

    public BreadcrumbItem href(String href) {
        failSafeAnchorElement().href = href;
        return this;
    }

    public BreadcrumbItem target(String target) {
        failSafeAnchorElement().target = target;
        return this;
    }

    @Override
    public <T> BreadcrumbItem store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public BreadcrumbItem that() {
        return this;
    }

    // ------------------------------------------------------ events

    public BreadcrumbItem onClick(ComponentHandler<BreadcrumbItem> actionHandler) {
        failSafeAnchorElement().addEventListener(click.name, e -> actionHandler.handle(e, this));
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

    private HTMLAnchorElement failSafeAnchorElement() {
        if (anchorElement == null) {
            anchorElement = a().css(component(breadcrumb, link)).text(textElement.textContent).element();
            textElement.replaceWith(anchorElement);
        }
        return anchorElement;
    }
}
