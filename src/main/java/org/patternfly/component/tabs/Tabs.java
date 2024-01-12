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
package org.patternfly.component.tabs;

import java.util.LinkedHashMap;
import java.util.Map;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.core.Logger;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Fill;
import org.patternfly.style.Modifiers.Vertical;

import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.scrollButton;
import static org.patternfly.style.Modifiers.toggleModifier;

/**
 * Tabs allow users to navigate between views within the same page or context.
 *
 * @see <a href= "https://www.patternfly.org/components/tabs">https://www.patternfly.org/components/tabs</a>
 */
public class Tabs extends BaseComponentFlat<HTMLElement, Tabs>
        implements Attachable, Fill<HTMLElement, Tabs>, Vertical<HTMLElement, Tabs> {

    // ------------------------------------------------------ factory

    public static Tabs tabs() {
        return new Tabs();
    }

    // ------------------------------------------------------ instance

    private final HTMLElement tabsElement;
    private final HTMLContainerBuilder<HTMLButtonElement> scrollLeft;
    private final HTMLContainerBuilder<HTMLUListElement> ul;
    private final HTMLContainerBuilder<HTMLButtonElement> scrollRight;
    private final Map<String, Tab> tabs;
    private Tab currentTab;
    private ComponentHandler<Tabs> selectHandler;

    Tabs() {
        super(ComponentType.Tabs, div().element());
        this.tabs = new LinkedHashMap<>();
        storeFlatComponent();

        element().appendChild(tabsElement = div().css(component(Classes.tabs))
                .attr(role, "region")
                .add(scrollLeft = button().css(component(Classes.tabs, scrollButton))
                        .apply(b -> b.disabled = true)
                        .aria(hidden, true)
                        .aria(label, "Scroll left"))
                .add(ul = ul().css(component(Classes.tabs, list))
                        .attr(role, "tablist"))
                .add(scrollRight = button().css(component(Classes.tabs, scrollButton))
                        .apply(b -> b.disabled = true)
                        .aria(hidden, true)
                        .aria(label, "Scroll left"))
                .element());
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        for (Tab tab : tabs.values()) {
            if (tab.tooltip != null) {
                tab.tooltip.trigger(tab.button.element());
                element().appendChild(tab.tooltip.element());
            }
            if (tab.content != null) {
                tab.content.element().hidden = true;
                addContent(tab);
            }
        }
        if (!tabs.isEmpty()) {
            tabs.values().iterator().next().select(true);
        }
    }

    // ------------------------------------------------------ add

    public Tabs addTab(Tab tab) {
        return add(tab);
    }

    // override to assure internal wiring
    public Tabs add(Tab tab) {
        tabs.put(tab.id, tab);
        ul.add(tab);
        return this;
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #box(boolean) box(true)} */
    public Tabs box() {
        return box(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(box)} */
    public Tabs box(boolean box) {
        return toggleModifier(this, tabsElement, Classes.box, box);
    }

    @Override
    public Tabs fill(boolean fill) {
        return toggleModifier(this, tabsElement, Classes.fill, fill);
    }

    @Override
    public Tabs vertical(boolean vertical) {
        return toggleModifier(this, tabsElement, Classes.vertical, vertical);
    }

    @Override
    public Tabs that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Tabs ariaScrollLeftLabel(String label) {
        scrollLeft.aria(Aria.label, label);
        return this;
    }

    public Tabs ariaScrollRightLabel(String label) {
        scrollRight.aria(Aria.label, label);
        return this;
    }

    // ------------------------------------------------------ events

    public Tabs onSelect(ComponentHandler<Tabs> selectHandler) {
        this.selectHandler = selectHandler;
        return this;
    }

    // ------------------------------------------------------ api

    public void select(String id) {
        if (id != null) {
            select(tabs.get(id));
        } else {
            Logger.undefined(componentType(), element(), "Cannot select tab: No tab id given.");
        }
    }

    public void select(Tab tab) {
        if (tab != null) {
            for (Tab t : tabs.values()) {
                if (tab.id.equals(t.id)) {
                    t.select(true);
                    currentTab = t;
                } else {
                    t.select(false);
                }
            }
            if (selectHandler != null) {
                selectHandler.handle(new Event(""), this);
            }
        } else {
            Logger.undefined(componentType(), element(), "Cannot select tab: No tab given.");
        }
    }

    public Tab currentTab() {
        return currentTab;
    }

    // ------------------------------------------------------ internal

    void addContent(Tab tab) {
        tab.button.aria(Aria.controls, tab.contentId);
        tab.content.aria(Aria.labelledBy, tab.buttonId);
        element().appendChild(tab.content.element());
    }
}
