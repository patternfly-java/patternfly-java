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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.jboss.elemento.ButtonType;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.Closeable;
import org.patternfly.component.WithIcon;
import org.patternfly.component.WithIdentifier;
import org.patternfly.component.WithText;
import org.patternfly.component.button.Button;
import org.patternfly.component.popover.Popover;
import org.patternfly.component.tooltip.Tooltip;
import org.patternfly.core.Aria;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.core.Roles;
import org.patternfly.handler.CloseHandler;
import org.patternfly.icon.IconSets.patternfly;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Size;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.isVisible;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.core.Aria.selected;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.core.Roles.presentation;
import static org.patternfly.core.Timeouts.LOADING_TIMEOUT;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.style.Classes.action;
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
        Closeable<HTMLElement, Tab>,
        ComponentContext<HTMLElement, Tab>,
        Disabled<HTMLElement, Tab>,
        WithIdentifier<HTMLElement, Tab>,
        WithText<HTMLElement, Tab>,
        WithIcon<HTMLElement, Tab> {

    // ------------------------------------------------------ factory

    public static Tab tab(String identifier) {
        return new Tab(button(ButtonType.button), identifier, null);
    }

    public static Tab tab(String identifier, String text) {
        return new Tab(button(ButtonType.button), identifier, text);
    }

    public static <E extends HTMLElement> Tab tab(HTMLContainerBuilder<E> builder, String identifier, String text) {
        return new Tab(builder, identifier, text);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Tab.class.getName());
    static final String SUB_COMPONENT_NAME = "tab";

    final String buttonId;
    final String contentId;
    final HTMLContainerBuilder<? extends HTMLElement> button;
    final List<CloseHandler<Tab>> closeHandler;
    Popover help;
    Tooltip tooltip;
    Button helpButton;
    TabContent content;
    Function<Tabs, Promise<TabContent>> asyncContent;

    private final String identifier;
    private final Map<String, Object> data;
    private final HTMLElement textElement;
    private final boolean anchorElement;
    private double loadingTimeout;
    private Button closeButton;
    private HTMLElement iconContainer;
    private HTMLElement loadingContainer;

    <E extends HTMLElement> Tab(HTMLContainerBuilder<E> builder, String identifier, String text) {
        super(SUB_COMPONENT_NAME, li().css(component(tabs, item))
                .attr(role, presentation)
                .data(Dataset.identifier, identifier)
                .element());
        this.identifier = identifier;
        this.data = new HashMap<>();
        this.closeHandler = new ArrayList<>();
        this.buttonId = Id.build(identifier, "tab");
        this.contentId = Id.build(identifier, "content");
        this.anchorElement = builder.element().tagName.equalsIgnoreCase("a");

        add(button = builder.css(component(tabs, link))
                .id(buttonId)
                .attr(role, Roles.tab)
                .aria(selected, false)
                .on(click, e -> {
                    HTMLElement currentTarget = (HTMLElement) e.currentTarget;
                    if (currentTarget.classList.contains(modifier(ariaDisabled))) {
                        e.preventDefault();
                    } else {
                        tabs().select(this);
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

    public Tab addContent(Function<Tabs, Promise<TabContent>> content) {
        return add(content);
    }

    public Tab add(Function<Tabs, Promise<TabContent>> content) {
        asyncContent = content;
        return this;
    }

    // ------------------------------------------------------ builder

    public Tab closeable() {
        return closeable(null);
    }

    public Tab closeable(CloseHandler<Tab> closeHandler) {
        if (closeButton == null) {
            css(modifier(action));
            add(span().css(component(tabs, item, action))
                    .add(closeButton = Button.button().plain()
                            .aria(Aria.label, "Close " + text())
                            .on(click, e -> close(e, true))
                            .add(span().css(component(tabs, item, action, icon))
                                    .add(times()))));
        }
        return onClose(closeHandler);
    }

    @Override
    public Tab icon(Element icon) {
        removeChildrenFrom(failSafeIconContainer());
        failSafeIconContainer().appendChild(icon);
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
        if (anchorElement) {
            if (disabled) {
                button.element().tabIndex = -1;
            } else {
                button.element().removeAttribute(tabindex);
            }
            toggleModifier(this, button.element(), Classes.ariaDisabled, disabled);
        } else {
            ((HTMLButtonElement) button.element()).disabled = disabled;
        }
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

    @Override
    public Tab hidden(boolean hidden) {
        Elements.setVisible(this, !hidden);
        Tabs tabs = lookupFlatComponent(true);
        if (tabs != null && tabs.currentTab() != null) {
            if (identifier.equals(tabs.currentTab().identifier)) {
                select(false);
            }
        }
        return this;
    }

    public Tab href(String href) {
        if (anchorElement) {
            ((HTMLAnchorElement) button.element()).href = href;
        } else {
            logger.warn("Links are not supported for tab %o. Please create the tab using the right factory method.", element());
        }
        return this;
    }

    public Tab help(Popover help) {
        // Override to add the tooltip to the tabs element in Tabs.attach()
        // If added to this element, the tooltip won't show,
        // because this element is inside a scrolling container (<ul/>)
        if (helpButton == null) {
            css(modifier(action));
            HTMLElement helpContainer = span().css(component(tabs, item, action))
                    .add(helpButton = Button.button().plain()
                            .aria(Aria.label, "More info for " + text())
                            .add(span().css(component(tabs, item, action, icon))
                                    .add(patternfly.help())))
                    .element();
            if (closeButton == null) {
                add(helpContainer);
            } else {
                insertBefore(helpContainer, closeButton.element());
            }
        }
        this.help = help;
        return this;
    }

    public Tab selected() {
        return this;
    }

    public Tab tooltip(Tooltip tooltip) {
        // Override to add the tooltip to the tabs element in Tabs.attach()
        // If added to this element, the tooltip won't show,
        // because this element is inside a scrolling container (<ul/>)
        this.tooltip = tooltip;
        return this;
    }

    @Override
    public <T> Tab store(String key, T value) {
        data.put(key, value);
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

    public Tab ariaCloseLabel(String label) {
        if (closeButton != null) {
            closeButton.aria(Aria.label, label);
        } else {
            logger.error("Unable to set aria close label for tab %o. Please make the tab closeable first.", element());
        }
        return this;
    }

    public Tab ariaHelpLabel(String label) {
        if (helpButton != null) {
            helpButton.aria(Aria.label, label);
        } else {
            logger.error("Unable to set aria help label for tab %o. Please add the help popover first.", element());
        }
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public Tab onClose(CloseHandler<Tab> closeHandler) {
        if (closeButton == null) {
            return closeable(closeHandler);
        } else {
            if (closeHandler != null) {
                this.closeHandler.add(closeHandler);
            }
            return this;
        }
    }

    // ------------------------------------------------------ api

    @Override
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            tabs().close(this);
            fireEvent(this, closeHandler, event, fireEvent);
        }
    }

    public boolean hidden() {
        return !isVisible(this);
    }

    @Override
    public String text() {
        return textElement.textContent;
    }

    /**
     * Returns the enclosing {@link Tabs} component. Only valid <strong>after</strong> the tabs component has been attached!
     */
    public Tabs tabs() {
        return lookupFlatComponent();
    }

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

    void select(boolean selected) {
        button.aria(Aria.selected, selected);
        if (selected) {
            classList().add(modifier(current));
            if (content == null) {
                if (asyncContent != null) {
                    clearTimeout(loadingTimeout);
                    loadingTimeout = setTimeout(__ -> startLoading(), LOADING_TIMEOUT);
                    Tabs tabs = tabs();
                    asyncContent.apply(tabs)
                            .then(c -> {
                                content = c;
                                asyncContent = null;
                                tabs.addTabContent(this);
                                content.element().hidden = false;
                                return null;
                            })
                            .catch_(error -> {
                                logger.error("Unable to load content for tab %o: %s", element(), error);
                                return null;
                            })
                            .finally_(this::stopLoading);
                } else {
                    logger.error("No content defined for tab %o", element());
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

    void disableCloseButton(boolean disable) {
        if (closeButton != null) {
            closeButton.disabled(disable);
        }
    }

    private void startLoading() {
        if (iconContainer != null) {
            setVisible(iconContainer, false);
        }
        insertFirst(button.element(), loadingContainer = span().css(component(tabs, item, icon))
                .add(spinner().size(Size.md))
                .element());
    }

    private void stopLoading() {
        clearTimeout(loadingTimeout);
        failSafeRemoveFromParent(loadingContainer);
        if (iconContainer != null) {
            setVisible(iconContainer, true);
        }
    }

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null) {
            insertFirst(button.element(), iconContainer = span().css(component(tabs, item, icon)).element());
        }
        return iconContainer;
    }
}
