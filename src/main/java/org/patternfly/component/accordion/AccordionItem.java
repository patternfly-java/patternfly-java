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
package org.patternfly.component.accordion;

import java.util.ArrayList;
import java.util.List;

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.core.ElementDelegate;
import org.patternfly.core.Expandable;
import org.patternfly.core.WithText;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.dd;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.dt;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.expandableContent;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.PredefinedIcon.angleRight;

/**
 * Represents an item within an accordion component. All content added to this item is delegated to a default
 * {@link AccordionItemBody}. If you want to have multiple bodies, please use {@link #addBody(AccordionItemBody)} and add the
 * content to the specific {@link AccordionItemBody} instead of this item.
 */
public class AccordionItem extends AccordionSubComponent<HTMLDivElement, AccordionItem> implements
        ElementDelegate<HTMLDivElement, AccordionItem>,
        WithText<HTMLDivElement, AccordionItem> {

    // ------------------------------------------------------ factory

    public static AccordionItem accordionItem(String id) {
        return new AccordionItem(id, null);
    }

    public static AccordionItem accordionItem(String id, String text) {
        return new AccordionItem(id, text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "aci";
    final String id;
    private final AccordionItemBody defaultBody;
    private final List<AccordionItemBody> bodies;
    private String text;
    private boolean expanded;
    private HTMLElement toggleElement;
    private HTMLElement textElement;
    private HTMLElement contentElement;

    AccordionItem(String id, String text) {
        super(SUB_COMPONENT_NAME, div().element()); // not a real subcomponent - just pass a fake <div/>
        this.id = id;
        this.expanded = false;
        this.defaultBody = new AccordionItemBody();
        this.bodies = new ArrayList<>();
        this.bodies.add(defaultBody);
        if (text != null) {
            text(text);
        }
    }

    @Override
    public HTMLElement delegate() {
        return defaultBody.element();
    }

    // ------------------------------------------------------ add

    public AccordionItem addBody(AccordionItemBody body) {
        return add(body);
    }

    public AccordionItem add(AccordionItemBody body) {
        bodies.add(body);
        return this;
    }

    // ------------------------------------------------------ builder

    public AccordionItem expanded() {
        this.expanded = true;
        return this;
    }

    @Override
    public AccordionItem text(String text) {
        this.text = text;
        if (textElement != null && text != null) {
            textElement.textContent = text;
        }
        return this;
    }

    @Override
    public AccordionItem that() {
        return this;
    }

    // ------------------------------------------------------ internal

    void appendTo(Accordion accordion) {
        String textId = Id.unique(ComponentType.Accordion.id, "text");
        HTMLContainerBuilder<? extends HTMLElement> toggle = accordion.dl ? dt() : h(accordion.headingLevel);
        toggle.add(toggleElement = button().css(component(Classes.accordion, Classes.toggle))
                .on(click, e -> toggle(accordion))
                .add(textElement = span().css(component(Classes.accordion, Classes.toggle, Classes.text))
                        .id(textId)
                        .element())
                .add(span().css(component(Classes.accordion, Classes.toggle, icon))
                        .add(inlineIcon(angleRight)))
                .element());
        text(this.text);

        HTMLContainerBuilder<? extends HTMLElement> content = accordion.dl ? dd() : div();
        content.css(component(Classes.accordion, expandableContent))
                .aria(labelledBy, textId);
        if (accordion.fixed) {
            content.css(modifier(Classes.fixed));
        }
        content.addAll(bodies);
        contentElement = content.element();

        if (expanded) {
            Expandable.expand(contentElement, toggleElement, contentElement, true);
        } else {
            Expandable.collapse(contentElement, toggleElement, contentElement, true);
        }
        accordion.addAll(toggle, content);
    }

    private void toggle(Accordion accordion) {
        if (Expandable.expanded(contentElement)) {
            accordion.collapseItem(this, true);
        } else {
            accordion.expandItem(this, true);
        }
    }

    void collapse() {
        if (contentElement != null && toggleElement != null) {
            Expandable.collapse(contentElement, toggleElement, contentElement);
        }
    }

    void expand() {
        if (contentElement != null && toggleElement != null) {
            Expandable.expand(contentElement, toggleElement, contentElement);
        }
    }
}
