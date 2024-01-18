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

import java.util.function.Function;

import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.button.Button;
import org.patternfly.component.icon.InlineIcon;
import org.patternfly.component.popover.Popover;
import org.patternfly.component.tooltip.Tooltip;
import org.patternfly.core.Aria;
import org.patternfly.core.Closeable;
import org.patternfly.core.Logger;
import org.patternfly.core.WithIcon;
import org.patternfly.core.WithText;
import org.patternfly.handler.CloseHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.PredefinedIcon;
import org.patternfly.style.Size;

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
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.core.Aria.selected;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
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
import static org.patternfly.style.PredefinedIcon.times;

public class Tab extends TabSubComponent<HTMLElement, Tab> implements
        Closeable<HTMLElement, Tab>,
        Disabled<HTMLElement, Tab>,
        WithText<HTMLElement, Tab>,
        WithIcon<HTMLElement, Tab> {

    // ------------------------------------------------------ factory

    public static Tab tab(String id) {
        return new Tab(button(), id, null);
    }

    public static Tab tab(String id, String text) {
        return new Tab(button(), id, text);
    }

    public static <E extends HTMLElement> Tab tab(HTMLContainerBuilder<E> builder, String id, String text) {
        return new Tab(builder, id, text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tab";
    private static final double LOADING_TIMEOUT = 222;

    public final String id;

    final String buttonId;
    final String contentId;
    final HTMLContainerBuilder<? extends HTMLElement> button;
    Popover help;
    Tooltip tooltip;
    Button helpButton;
    TabContent content;
    CloseHandler<Tab> closeHandler;
    Function<Tabs, Promise<TabContent>> dynamicContent;

    private final HTMLElement textElement;
    private final boolean anchorElement;
    private double loadingTimeout;
    private Button closeButton;
    private HTMLElement iconContainer;
    private HTMLElement loadingContainer;

    <E extends HTMLElement> Tab(HTMLContainerBuilder<E> builder, String id, String text) {
        super(SUB_COMPONENT_NAME, li().css(component(tabs, item))
                .attr(role, "presentation")
                .element());
        this.id = id;
        this.buttonId = Id.build(id, "tab");
        this.contentId = Id.build(id, "content");
        this.anchorElement = builder.element().tagName.equalsIgnoreCase("a");

        add(button = builder.css(component(tabs, link))
                .id(buttonId)
                .attr(role, "tab")
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
        dynamicContent = content;
        return this;
    }

    public Tab addHelp(Popover help) {
        return add(help);
    }

    // Override to add the tooltip to the tabs element in Tabs.attach()
    // If added to this element, the tooltip won't show,
    // because this element is inside a scrolling container (<ul/>)
    public Tab add(Popover help) {
        if (helpButton == null) {
            css(modifier(action));
            HTMLElement helpContainer = span().css(component(tabs, item, action))
                    .add(helpButton = Button.button().plain()
                            .aria(Aria.label, "More info for " + text())
                            .add(span().css(component(tabs, item, action, icon))
                                    .add(inlineIcon(PredefinedIcon.help))))
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

    public Tab addTooltip(Tooltip tooltip) {
        return add(tooltip);
    }

    // Override to add the tooltip to the tabs element in Tabs.attach()
    // If added to this element, the tooltip won't show,
    // because this element is inside a scrolling container (<ul/>)
    public Tab add(Tooltip tooltip) {
        this.tooltip = tooltip;
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
                                    .add(inlineIcon(times)))));
        }
        return onClose(closeHandler);
    }

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
            if (id.equals(tabs.currentTab().id)) {
                select(false);
            }
        }
        return this;
    }

    public Tab href(String href) {
        if (anchorElement) {
            ((HTMLAnchorElement) button.element()).href = href;
        } else {
            Logger.unsupported(ComponentType.Tabs, element(),
                    "Links are not supported for this tab. Please create the tab using the right factory method.");
        }
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
            Logger.undefined(ComponentType.Tabs, element(),
                    "Unable to set aria close label for tab " + id + ". Please make the tab closeable first.");
        }
        return this;
    }

    public Tab ariaHelpLabel(String label) {
        if (helpButton != null) {
            helpButton.aria(Aria.label, label);
        } else {
            Logger.undefined(ComponentType.Tabs, element(),
                    "Unable to set aria help label for tab " + id + ". Please add the help popover first.");
        }
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public Tab onClose(CloseHandler<Tab> closeHandler) {
        if (closeButton == null) {
            return closeable(closeHandler);
        } else {
            this.closeHandler = closeHandler;
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

    public String text() {
        return textElement.textContent;
    }

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
                    clearTimeout(loadingTimeout);
                    loadingTimeout = setTimeout(__ -> startLoading(), LOADING_TIMEOUT);
                    Tabs tabs = tabs();
                    dynamicContent.apply(tabs)
                            .then(c -> {
                                content = c;
                                dynamicContent = null;
                                tabs.addTabContent(this);
                                content.element().hidden = false;
                                return null;
                            })
                            .catch_(error -> {
                                Logger.undefined(ComponentType.Tabs, element(),
                                        "Unable to load content for tab " + id + ": " + error);
                                return null;
                            })
                            .finally_(this::stopLoading);
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
