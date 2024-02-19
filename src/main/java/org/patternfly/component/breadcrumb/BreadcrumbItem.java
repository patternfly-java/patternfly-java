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

import org.patternfly.core.Aria;
import org.patternfly.core.WithText;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.style.Classes.breadcrumb;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.divider;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.PredefinedIcon.angleRight;

public class BreadcrumbItem extends BreadcrumbSubComponent<HTMLLIElement, BreadcrumbItem> implements
        WithText<HTMLLIElement, BreadcrumbItem> {

    // ------------------------------------------------------ factory

    public static BreadcrumbItem breadcrumbItem(String text) {
        return new BreadcrumbItem(text);
    }

    public static BreadcrumbItem breadcrumbItem(String text, String href) {
        return new BreadcrumbItem(text).href(href);
    }

    public static BreadcrumbItem breadcrumbItem(String text, String href, String target) {
        return new BreadcrumbItem(text).href(href).target(target);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "bci";
    private final HTMLElement textElement;
    private HTMLAnchorElement anchorElement;

    <E extends HTMLElement> BreadcrumbItem(String text) {
        super(SUB_COMPONENT_NAME, li().css(component(breadcrumb, item)).element());
        add(span().css(component(breadcrumb, item, divider))
                .add(inlineIcon(angleRight)));
        add(textElement = span().textContent(text).element());
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

    @Override
    public BreadcrumbItem text(String text) {
        if (anchorElement != null) {
            anchorElement.textContent = text;
        } else if (textElement != null) {
            textElement.textContent = text;
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
    public BreadcrumbItem that() {
        return this;
    }
    // ------------------------------------------------------ events

    public BreadcrumbItem onClick(ComponentHandler<BreadcrumbItem> actionHandler) {
        failSafeAnchorElement().addEventListener(click.name, e -> actionHandler.handle(e, this));
        return this;
    }

    // ------------------------------------------------------ internal

    private HTMLAnchorElement failSafeAnchorElement() {
        if (anchorElement == null) {
            anchorElement = a().css(component(breadcrumb, link)).textContent(textElement.textContent).element();
            textElement.replaceWith(anchorElement);
        }
        return anchorElement;
    }
}
