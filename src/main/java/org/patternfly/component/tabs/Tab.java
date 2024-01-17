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

import org.jboss.elemento.Elements;
import org.jboss.elemento.EventType;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.icon.InlineIcon;
import org.patternfly.component.tooltip.Tooltip;
import org.patternfly.core.Aria;
import org.patternfly.core.Logger;
import org.patternfly.core.WithIcon;
import org.patternfly.core.WithText;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.core.Aria.selected;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.style.Classes.ariaDisabled;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.tabs;
import static org.patternfly.style.Modifiers.toggleModifier;

public class Tab extends TabSubComponent<HTMLElement, Tab> implements
        Disabled<HTMLElement, Tab>,
        WithText<HTMLElement, Tab>,
        WithIcon<HTMLElement, Tab> {

    // ------------------------------------------------------ factory

    public static Tab tab(String id) {
        return new Tab(id, null);
    }

    public static Tab tab(String id, String text) {
        return new Tab(id, text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tab";
    final String id;
    final String buttonId;
    final String contentId;
    final HTMLContainerBuilder<HTMLButtonElement> button;
    final HTMLElement textElement;
    private HTMLElement iconContainer;
    TabContent content;
    Promise<TabContent> dynamicContent;
    Tooltip tooltip;

    Tab(String id, String text) {
        super(SUB_COMPONENT_NAME, li().css(component(tabs, item))
                .attr(role, "presentation")
                .element());
        this.id = id;
        this.buttonId = Id.build(id, "tab");
        this.contentId = Id.build(id, "content");

        add(button = button().css(component(tabs, link))
                .id(buttonId)
                .attr(role, "tab")
                .aria(selected, false)
                .on(EventType.click, e -> {
                    HTMLElement currentTarget = (HTMLElement) e.currentTarget;
                    if (currentTarget.classList.contains(modifier(ariaDisabled))) {
                        e.preventDefault();
                    } else {
                        Tabs tabs = lookupFlatComponent();
                        tabs.select(this);
                    }
                })
                .add(textElement = span().css(component(tabs, item, Classes.text)).element()));
        if (text != null) {
            textElement.textContent = text;
        }
    }

    // ------------------------------------------------------ add

    public Tab addContent(TabContent content) {
        return add(content);
    }

    public Tab add(TabContent content) {
        this.content = content;
        return this;
    }

    public Tab addContent(Promise<TabContent> content) {
        return add(content);
    }

    public Tab add(Promise<TabContent> content) {
        dynamicContent = content;
        return this;
    }

    // Override to add the tooltip to the tabs element in Tabs.attach()
    // If added to this element, the tooltip won't show,
    // because this element is inside a scrolling container (<ul/>)
    public Tab add(Tooltip tooltip) {
        this.tooltip = tooltip;
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public Tab icon(InlineIcon icon) {
        removeChildrenFrom(failSafeIconContainer());
        failSafeIconContainer().appendChild(icon.element());
        return this;
    }

    @Override
    public Tab removeIcon() {
        failSafeRemoveFromParent(failSafeIconContainer());
        iconContainer = null;
        return null;
    }

    @Override
    public Tab text(String text) {
        textElement.textContent = text;
        return this;
    }

    @Override
    public Tab disabled(boolean disabled) {
        button.element().disabled = disabled;
        button.aria(Aria.disabled, disabled);
        return Disabled.super.disabled(disabled);
    }

    public Tab ariaDisabled() {
        return ariaDisabled(true);
    }

    public Tab ariaDisabled(boolean disabled) {
        button.aria(Aria.disabled, disabled);
        toggleModifier(this, element(), Classes.disabled, disabled);
        toggleModifier(this, button.element(), Classes.ariaDisabled, disabled);
        return this;
    }

    public Tab hidden() {
        return hidden(true);
    }

    @Override
    public Tab hidden(boolean hidden) {
        Elements.setVisible(this, !hidden);
        return this;
    }

    @Override
    public Tab that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Tab ariaLabel(String label) {
        button.aria(Aria.label, label);
        return this;
    }

    // ------------------------------------------------------ api

    /**
     * Returns the enclosing {@link Tabs} component. Only valid <strong>after</strong> the tabs component has been attached!
     */
    public Tabs tabs() {
        return lookupFlatComponent();
    }

    // ------------------------------------------------------ internal

    void select(boolean selected) {
        button.aria(Aria.selected, selected);
        if (selected) {
            classList().add(modifier(current));
            if (content == null) {
                if (dynamicContent != null) {
                    dynamicContent.then(c -> {
                        content = c;
                        dynamicContent = null;
                        Tabs tabs = lookupFlatComponent();
                        tabs.addTabContent(this);
                        content.element().hidden = false;
                        return null;
                    }).catch_(error -> {
                        Logger.undefined(ComponentType.Tabs, element(), "Unable to load content for tab " + id + ": " + error);
                        return null;
                    });
                } else {
                    Logger.missing(ComponentType.Tabs, element(), "No content defined for tab " + id);
                }
            } else {
                content.element().hidden = false;
            }
        } else {
            classList().remove(modifier(current));
            if (content != null) {
                content.element().hidden = true;
            }
        }
    }

    String text() {
        return textElement.textContent;
    }

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null) {
            insertFirst(button.element(), iconContainer = span().css(component(tabs, item, icon)).element());
        }
        return iconContainer;
    }
}
