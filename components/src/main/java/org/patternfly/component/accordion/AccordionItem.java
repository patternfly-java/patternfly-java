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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jboss.elemento.ButtonType;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.ElementContainerDelegate;
import org.patternfly.component.ElementTextDelegate;
import org.patternfly.component.Expandable;
import org.patternfly.component.HasIdentifier;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.dd;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.dt;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.expandableContent;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.modifier;

/**
 * Represents an item within an accordion component.
 * <p>
 * All content added to this item is delegated to a default {@link AccordionItemBody}. If you want to have multiple bodies,
 * please use {@link #addBody(AccordionItemBody)} and add the content to the specific {@link AccordionItemBody} instead of this
 * item.
 * <p>
 * Text methods are delegated to the accordion toggle.
 */
public class AccordionItem extends AccordionSubComponent<HTMLDivElement, AccordionItem> implements
        ComponentContext<HTMLDivElement, AccordionItem>,
        ElementContainerDelegate<HTMLDivElement, AccordionItem>,
        ElementTextDelegate<HTMLDivElement, AccordionItem>,
        HasIdentifier<HTMLDivElement, AccordionItem> {

    // ------------------------------------------------------ factory

    public static AccordionItem accordionItem(String identifier) {
        return new AccordionItem(identifier);
    }

    public static AccordionItem accordionItem(String identifier, String text) {
        return new AccordionItem(identifier).text(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "aci";
    private final String identifier;
    private final Map<String, Object> data;
    private final HTMLElement textElement;
    private final AccordionItemBody defaultBody;
    private final List<AccordionItemBody> bodies;
    private boolean expanded;
    private HTMLElement toggleElement;
    private HTMLElement contentElement;

    AccordionItem(String identifier) {
        super(SUB_COMPONENT_NAME, div().element()); // not a real subcomponent - just pass a fake <div/>
        this.identifier = identifier;
        this.data = new HashMap<>();
        this.expanded = false;
        this.textElement = span().css(component(Classes.accordion, Classes.toggle, Classes.text))
                .id(Id.unique(ComponentType.Accordion.id, "text"))
                .element();
        this.defaultBody = new AccordionItemBody();
        this.bodies = new ArrayList<>();
        this.bodies.add(defaultBody);
    }

    /**
     * Delegates to the default body.
     */
    @Override
    public Element containerDelegate() {
        return defaultBody.element();
    }

    /**
     * Delegates to the text element of the accordion toggle.
     */
    @Override
    public Element textDelegate() {
        return textElement;
    }

    // ------------------------------------------------------ add

    public AccordionItem addBody(AccordionItemBody body) {
        return add(body);
    }

    public AccordionItem add(AccordionItemBody body) {
        bodies.add(body);
        if (isAttached(this) && contentElement != null) {
            contentElement.appendChild(body.element());
        }
        return this;
    }

    // ------------------------------------------------------ builder

    public AccordionItem expanded() {
        this.expanded = true;
        return this;
    }

    @Override
    public <T> AccordionItem store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public AccordionItem that() {
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

    void appendTo(Accordion accordion) {
        HTMLContainerBuilder<? extends HTMLElement> toggle = accordion.dl ? dt() : h(accordion.headingLevel);
        toggle.data(Dataset.identifier, identifier)
                .add(toggleElement = button(ButtonType.button).css(component(Classes.accordion, Classes.toggle))
                        .on(click, e -> toggle(accordion))
                        .add(textElement)
                        .add(span().css(component(Classes.accordion, Classes.toggle, icon))
                                .add(angleRight().element()))
                        .element());

        HTMLContainerBuilder<? extends HTMLElement> content = accordion.dl ? dd() : div();
        content.css(component(Classes.accordion, expandableContent))
                .aria(labelledBy, textElement.id);
        if (accordion.fixed) {
            content.css(modifier(Classes.fixed));
        }
        content.addAll(bodies);
        contentElement = content.element();

        if (expanded) {
            Expandable.expand(contentElement, toggleElement, contentElement, true);
            contentElement.classList.add(modifier(Classes.expanded));
            toggleElement.classList.add(modifier(Classes.expanded));
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
            contentElement.classList.remove(modifier(Classes.expanded));
            toggleElement.classList.remove(modifier(Classes.expanded));
        }
    }

    void expand() {
        if (contentElement != null && toggleElement != null) {
            Expandable.expand(contentElement, toggleElement, contentElement);
            contentElement.classList.add(modifier(Classes.expanded));
            toggleElement.classList.add(modifier(Classes.expanded));
        }
    }
}
