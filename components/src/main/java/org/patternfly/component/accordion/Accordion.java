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

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasItems;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Bordered;
import org.patternfly.style.Size;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.dl;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.style.Classes.accordion;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.display;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Size.lg;

/**
 * An accordion is an interactive container that expands and collapses to hide or reveal nested content. It takes advantage of
 * progressive disclosure to help reduce page scrolling, by allowing users to choose whether they want to show or hide more
 * detailed information as needed.
 *
 * @see <a href="https://www.patternfly.org/components/accordion">https://www.patternfly.org/components/accordion</a>
 */
public class Accordion extends BaseComponent<HTMLElement, Accordion> implements
        Bordered<HTMLElement, Accordion>,
        HasItems<HTMLElement, Accordion, AccordionItem>,
        Attachable {

    // ------------------------------------------------------ factory

    /**
     * Creates a new Accordion instance backed by a {@code
     * <p>
     * <dl/> }.
     */
    public static Accordion accordion() {
        return accordion(true);
    }

    public static Accordion accordion(boolean definitionList) {
        return definitionList ? new Accordion(dl()) : new Accordion(div());
    }

    // ------------------------------------------------------ instance

    final boolean dl;
    int headingLevel;
    boolean fixed;
    boolean singleExpand;
    private final Map<String, AccordionItem> items;
    private ToggleHandler<AccordionItem> toggleHandler;

    <E extends HTMLElement> Accordion(HTMLContainerBuilder<E> builder) {
        super(ComponentType.Accordion, builder.css(component(accordion)).element());
        this.dl = element().tagName.equalsIgnoreCase("dl");
        this.headingLevel = 3;
        this.singleExpand = false;
        this.items = new LinkedHashMap<>();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        for (AccordionItem item : items.values()) {
            item.appendTo(this);
        }
    }

    // ------------------------------------------------------ add

    @Override
    public Accordion add(AccordionItem item) {
        items.put(item.identifier(), item);
        if (isAttached(this)) {
            item.appendTo(this);
        }
        return this;
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #fixed(boolean) fixed(true)} */
    public Accordion fixed() {
        return fixed(true);
    }

    /** Flag to indicate Accordion content is fixed */
    public Accordion fixed(boolean fixed) {
        this.fixed = fixed;
        return this;
    }

    /** Same as {@linkplain #large(boolean) large(true)} */
    public Accordion large() {
        return large(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String, Size) modifier(large, lg)} */
    public Accordion large(boolean large) {
        if (large) {
            classList().add(modifier(display, lg));
        } else {
            classList().remove(modifier(display, lg));
        }
        return this;
    }

    /** Same as {@linkplain #singleExpand(boolean) singleExpand(true)} */
    public Accordion singleExpand() {
        return singleExpand(true);
    }

    /** Whether only one {@link AccordionItem} can be expanded */
    public Accordion singleExpand(boolean singleExpand) {
        this.singleExpand = singleExpand;
        return this;
    }

    public Accordion headingLevel(int headingLevel) {
        this.headingLevel = headingLevel;
        return this;
    }

    @Override
    public Accordion that() {
        return this;
    }

    // ------------------------------------------------------ events

    public Accordion onToggle(ToggleHandler<AccordionItem> toggleHandler) {
        this.toggleHandler = toggleHandler;
        return this;
    }

    // ------------------------------------------------------ api

    public void collapse(String identifier) {
        collapse(identifier, true);
    }

    public void collapse(String identifier, boolean fireEvent) {
        AccordionItem item = items.get(identifier);
        if (item != null) {
            collapseItem(item, fireEvent);
        }
    }

    public void expand(String identifier) {
        expand(identifier, true);
    }

    public void expand(String identifier, boolean fireEvent) {
        AccordionItem item = items.get(identifier);
        if (item != null) {
            expandItem(item, fireEvent);
        }
    }

    @Override
    public Iterator<AccordionItem> iterator() {
        return items.values().iterator();
    }

    @Override
    public int size() {
        return items.size();
    }

    @Override
    public boolean isEmpty() {
        return items.isEmpty();
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        items.clear();
    }

    // ------------------------------------------------------ internal

    void collapseItem(AccordionItem item, boolean fireEvent) {
        item.collapse();
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), item, false);
        }
    }

    void expandItem(AccordionItem item, boolean fireEvent) {
        item.expand();
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), item, true);
        }
        if (singleExpand) {
            for (AccordionItem otherItem : items.values()) {
                if (otherItem.identifier().equals(item.identifier())) {
                    continue;
                }
                otherItem.collapse();
            }
        }
    }
}
