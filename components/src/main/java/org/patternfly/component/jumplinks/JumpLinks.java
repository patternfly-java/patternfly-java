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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Supplier;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.component.HasItems;
import org.patternfly.component.button.Button;
import org.patternfly.component.label.Label;
import org.patternfly.core.Aria;
import org.patternfly.core.Roles;
import org.patternfly.handler.SelectHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Breakpoints;
import org.patternfly.style.Classes;
import org.patternfly.style.ExpandableModifier;
import org.patternfly.style.Modifiers.Center;
import org.patternfly.style.Modifiers.Vertical;

import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.header;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.jumpLinks;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.text;
import static org.patternfly.style.Classes.toggle;

/**
 * Jump links allow users to navigate to sections within a page.
 *
 * @see <a href= "https://www.patternfly.org/components/jump-links">https://www.patternfly.org/components/jump-links</a>
 */
public class JumpLinks extends BaseComponent<HTMLElement, JumpLinks> implements
        Attachable,
        Center<HTMLElement, JumpLinks>,
        Expandable<HTMLElement, JumpLinks>,
        HasItems<HTMLElement, JumpLinks, JumpLinksItem>,
        Vertical<HTMLElement, JumpLinks> {

    // ------------------------------------------------------ factory

    public static JumpLinks jumpLinks() {
        return new JumpLinks(null);
    }

    public static JumpLinks jumpLinks(String label) {
        return new JumpLinks(label);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(JumpLinks.class.getName());
    private static final By JUMP_LINKS_ITEMS = By.classname(component(jumpLinks, item));

    private final Map<String, JumpLinksItem> items;
    private final List<ToggleHandler<JumpLinks>> toggleHandler;
    private final List<SelectHandler<JumpLinksItem>> selectHandler;
    private final List<BiConsumer<JumpLinks, JumpLinksItem>> onAdd;
    private final List<BiConsumer<JumpLinks, JumpLinksItem>> onRemove;
    private final HTMLContainerBuilder<HTMLDivElement> headerElement;
    private final HTMLContainerBuilder<HTMLDivElement> labelElement;
    private final HTMLContainerBuilder<HTMLUListElement> ulElement;
    private boolean expandable;
    private boolean vertical;
    private Button toggleButton;
    private Supplier<HTMLElement> scrollableElement; // TODO Implement scrollable selector support
    private HTMLContainerBuilder<HTMLElement> toggleTextElement;

    JumpLinks(String label) {
        super(ComponentType.JumpLinks, nav().css(component(jumpLinks)).element());
        this.items = new HashMap<>();
        this.toggleHandler = new ArrayList<>();
        this.selectHandler = new ArrayList<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();

        element().appendChild(div().css(component(jumpLinks, main))
                .add(headerElement = div().css(component(jumpLinks, header))
                        .add(labelElement = div().css(component(jumpLinks, Classes.label))))
                .add(ulElement = ul().css(component(jumpLinks, list))
                        .attr(role, Roles.list))
                .element());
        if (label != null) {
            label(label);
        }

        storeComponent();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (expandable && !vertical) {
            logger.warn("Jump links component %o is not vertical. Expandable is only supported for vertical jump links.",
                    element());
        } else {
            failSafeToggleButton();
        }
    }

    // ------------------------------------------------------ add

    @Override
    public JumpLinks add(JumpLinksItem item) {
        items.put(item.identifier(), item);
        ulElement.add(item);
        onAdd.forEach(bc -> bc.accept(this, item));
        return this;
    }

    // ------------------------------------------------------ builder

    /**
     * Same as {@code expandable(breakpoints(default_, expandable))}
     */
    public JumpLinks expandable(ExpandableModifier expandable) {
        return expandable(breakpoints(default_, expandable));
    }

    /**
     * When to collapse/expand at different breakpoints ({@link #vertical()} should be set to true for this to work).
     */
    public JumpLinks expandable(Breakpoints<ExpandableModifier> expandable) {
        this.expandable = expandable.hasValue(ExpandableModifier.expandable);
        classList().add(expandable.modifiers());
        return this;
    }

    public JumpLinks label(String label) {
        labelElement.text(label);
        if (toggleTextElement != null) {
            toggleTextElement.text(label);
        }
        return this;
    }

    public JumpLinks scrollableSelector(String selector) {
        return scrollableSelector(() -> Elements.querySelector(document.body, By.selector(selector)));
    }

    public JumpLinks scrollableSelector(By selector) {
        return scrollableSelector(() -> Elements.querySelector(document.body, selector));
    }

    public JumpLinks scrollableSelector(HTMLElement element) {
        return scrollableSelector(() -> element);
    }

    public JumpLinks scrollableSelector(Supplier<HTMLElement> element) {
        this.scrollableElement = element;
        return this;
    }

    @Override
    public JumpLinks vertical(boolean vertical) {
        this.vertical = vertical;
        return Vertical.super.vertical(vertical);
    }

    @Override
    public JumpLinks that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public JumpLinks ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    public JumpLinks ariaToggleLabel(String label) {
        if (toggleButton != null) {
            toggleButton.aria(Aria.label, label);
        }
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public JumpLinks onAdd(BiConsumer<JumpLinks, JumpLinksItem> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public JumpLinks onRemove(BiConsumer<JumpLinks, JumpLinksItem> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

    public JumpLinks onSelect(SelectHandler<JumpLinksItem> selectHandler) {
        this.selectHandler.add(selectHandler);
        return this;
    }

    public JumpLinks onToggle(ToggleHandler<JumpLinks> toggleHandler) {
        this.toggleHandler.add(toggleHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void collapse(boolean fireEvent) {
        Expandable.collapse(element(), toggleButton.element(), null);
        if (fireEvent) {
            toggleHandler.forEach(th -> th.onToggle(new Event(""), this, false));
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        Expandable.expand(element(), toggleButton.element(), null);
        if (fireEvent) {
            toggleHandler.forEach(th -> th.onToggle(new Event(""), this, true));
        }
    }

    public void select(String identifier) {
        select(findItem(identifier), true, true);
    }

    public void select(String identifier, boolean selected) {
        select(findItem(identifier), selected, true);
    }

    public void select(String identifier, boolean selected, boolean fireEvent) {
        select(findItem(identifier), selected, fireEvent);
    }

    public void select(JumpLinksItem item) {
        select(item, true, true);
    }

    public void select(JumpLinksItem item, boolean selected) {
        select(item, selected, true);
    }

    public void select(JumpLinksItem item, boolean fireEvent, boolean selected) {
        if (item != null) {
            unselectAllItems();
            item.markSelected(selected);
            if (fireEvent) {
                selectHandler.forEach(selectHandler -> selectHandler.onSelect(new Event(""), item, selected));
            }
        }
    }

    @Override
    public Iterator<JumpLinksItem> iterator() {
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
    public boolean contains(String identifier) {
        return items.containsKey(identifier);
    }

    @Override
    public JumpLinksItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void removeItem(String identifier) {
        JumpLinksItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        if (item != null) {
            item.list.clear();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        removeChildrenFrom(ulElement);
        Iterator<JumpLinksItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            JumpLinksItem item = iterator.next();
            if (item.list != null) {
                item.list.clear();
            }
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    // ------------------------------------------------------ internal

    private JumpLinksItem findItem(String identifier) {
        JumpLinksItem item = items.get(identifier);
        if (item == null) {
            for (Iterator<JumpLinksItem> iterator = items.values().iterator(); iterator.hasNext() && item == null; ) {
                JumpLinksItem itm = iterator.next();
                if (itm.list != null) {
                    item = itm.list.items.get(identifier);
                }
            }
        }
        return item;
    }

    private void unselectAllItems() {
        for (HTMLElement element : querySelectorAll(JUMP_LINKS_ITEMS)) {
            element.classList.remove(modifier(current));
            element.removeAttribute(Aria.current);
        }
    }

    private Button failSafeToggleButton() {
        if (toggleButton == null) {
            headerElement.add(div().css(component(jumpLinks, toggle))
                    .add(toggleButton = button().plain()
                            .aria(expanded, false)
                            .aria(Aria.label, "Toggle jump links")
                            .on(click, e -> toggle())
                            .add(span().css(component(jumpLinks, toggle, icon))
                                    .add(angleRight()))
                            .add(toggleTextElement = span().css(component(jumpLinks, toggle, text))
                                    .text(labelElement.element().textContent))));
        }
        return toggleButton;
    }
}
