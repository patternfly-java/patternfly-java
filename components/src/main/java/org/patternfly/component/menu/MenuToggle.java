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
package org.patternfly.component.menu;

import org.jboss.elemento.ButtonType;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.IconPosition;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentIconAndText;
import org.patternfly.component.WithText;
import org.patternfly.component.avatar.Avatar;
import org.patternfly.component.badge.Badge;
import org.patternfly.core.Aria;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Modifiers.Secondary;

import elemental2.dom.Element;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.icon.IconSets.fas.caretDown;
import static org.patternfly.style.Classes.button;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.controls;
import static org.patternfly.style.Classes.count;
import static org.patternfly.style.Classes.expanded;
import static org.patternfly.style.Classes.menuToggle;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.primary;
import static org.patternfly.style.Classes.toggle;

/**
 * The menu toggle component pairs with the menu OR the panel component to create more customizable dropdown and select
 * implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the
 * standard dropdown or select components.
 *
 * @see <a href= *
 * "https://www.patternfly.org/components/menus/menu-toggle">https://www.patternfly.org/components/menus/menu-toggle</a>
 */
public class MenuToggle extends BaseComponent<HTMLElement, MenuToggle> implements
        Secondary<HTMLElement, MenuToggle>,
        ComponentIcon<HTMLElement, MenuToggle>,
        WithText<HTMLElement, MenuToggle>,
        ComponentIconAndText<HTMLElement, MenuToggle>,
        Disabled<HTMLElement, MenuToggle> {

    // ------------------------------------------------------ factory

    public static MenuToggle menuToggle() {
        return menuToggle(MenuToggleType.default_);
    }

    public static MenuToggle menuToggle(String text) {
        return menuToggle(MenuToggleType.default_).text(text);
    }

    public static MenuToggle menuToggle(PredefinedIcon icon) {
        return menuToggle(MenuToggleType.plain).icon(icon);
    }

    public static MenuToggle menuToggle(PredefinedIcon icon, String label) {
        return menuToggle(MenuToggleType.plain).icon(icon).ariaLabel(label);
    }

    public static MenuToggle menuToggle(Element icon) {
        return menuToggle(MenuToggleType.plain).icon(icon);
    }

    public static MenuToggle menuToggle(Element icon, String label) {
        return menuToggle(MenuToggleType.plain).icon(icon).ariaLabel(label);
    }

    public static MenuToggle menuToggle(MenuToggleType type) {
        switch (type) {
            case default_:
            case plain:
            case plainText:
                return new MenuToggle(button(ButtonType.button), type);
            case split:
            case typeahead:
                return new MenuToggle(div(), type);
            default:
                logger.error("Unknown menu toggle type '%s'. Fallback to '%s'.", type.name(), MenuToggleType.default_.name());
                return new MenuToggle(button(ButtonType.button), type);
        }
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(MenuToggle.class.getName());
    final HTMLElement toggleElement;
    private final MenuToggleType type;
    private final HTMLElement controlElement;
    private HTMLElement labelElement;
    private HTMLElement textElement;
    private Badge badge;
    private MenuToggleAction action;
    private MenuToggleCheckbox checkbox;
    private Element icon;
    private HTMLElement iconContainer;

    <E extends HTMLElement> MenuToggle(HTMLContainerBuilder<E> builder, MenuToggleType type) {
        super(ComponentType.MenuToggle, builder.css(component(menuToggle)).element());
        this.type = type;
        if (!this.type.modifier.isEmpty()) {
            css(type.modifier);
        }

        if (type == MenuToggleType.plain) {
            aria(expanded, false);
            toggleElement = element();
            controlElement = null;
        } else if (type == MenuToggleType.default_ || type == MenuToggleType.plainText) {
            aria(expanded, false);
            add(controlElement = span().css(component(menuToggle, controls))
                    .add(span().css(component(menuToggle, toggle, Classes.icon))
                            .add(caretDown()))
                    .element());
            toggleElement = element();
        } else if (type == MenuToggleType.split || type == MenuToggleType.typeahead) {
            add(toggleElement = button(ButtonType.button).css(component(menuToggle, button))
                    .aria(expanded, false)
                    .add(span().css(component(menuToggle, controls))
                            .add(span().css(component(menuToggle, toggle, Classes.icon))
                                    .add(caretDown())))
                    .element());
            controlElement = toggleElement;
        } else {
            toggleElement = div().element();
            controlElement = div().element();
            logger.error("Unknown menu toggle type '%s' for menu toggle %o", type.name(), element());
        }
    }

    // ------------------------------------------------------ add

    public MenuToggle addAvatar(Avatar avatar) {
        return add(avatar);
    }

    // override to append to the right container!
    public MenuToggle add(Avatar avatar) {
        if (type == MenuToggleType.default_ || type == MenuToggleType.plainText) {
            insertFirst(element(), span().css(component(menuToggle, Classes.icon)).add(avatar).element());
        } else {
            logger.warn("Avatar is not supported for menu toggles %o with type '%s'", element(), type.name());
        }
        return this;
    }

    public MenuToggle addBadge(Badge badge) {
        return add(badge);
    }

    // override to append to the right container!
    public MenuToggle add(Badge badge) {
        if (type == MenuToggleType.default_ || type == MenuToggleType.plainText) {
            this.badge = badge;
            insertBefore(span().css(component(menuToggle, count)).add(badge), controlElement);
        } else {
            logger.warn("Badge is not supported for menu toggle %o with type '%s'", element(), type.name());
        }
        return this;
    }

    public MenuToggle addAction(MenuToggleAction action) {
        return add(action);
    }

    // override to ensure internal wiring
    public MenuToggle add(MenuToggleAction action) {
        this.action = action;
        css(modifier(Classes.action));
        insertFirst(element(), action.element());
        return this;
    }

    public MenuToggle addCheckbox(MenuToggleCheckbox checkbox) {
        return add(checkbox);
    }

    // override to ensure internal wiring
    public MenuToggle add(MenuToggleCheckbox checkbox) {
        this.checkbox = checkbox;
        insertFirst(element(), checkbox.element());
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public MenuToggle disabled(boolean disabled) {
        Disabled.super.disabled(disabled);
        if (type == MenuToggleType.split || type == MenuToggleType.typeahead) {
            ((HTMLButtonElement) toggleElement).disabled = disabled;
            if (action != null) {
                action.disabled(disabled);
            } else if (checkbox != null) {
                checkbox.disabled(disabled);
            }
        }
        return this;
    }

    @Override
    public MenuToggle icon(Element icon) {
        removeIcon();
        this.icon = icon;
        if (type == MenuToggleType.plain) {
            add(icon);
        } else if (type == MenuToggleType.default_ || type == MenuToggleType.plainText) {
            insertFirst(element(), iconContainer = span().css(component(menuToggle, Classes.icon)).add(icon).element());
        } else {
            logger.warn("Icon is not supported for menu toggle %o with type '%s'", element(), type.name());
        }
        return this;
    }

    @Override
    public MenuToggle removeIcon() {
        failSafeRemoveFromParent(icon);
        failSafeRemoveFromParent(iconContainer);
        return this;
    }

    public MenuToggle primary() {
        return css(modifier(primary));
    }

    @Override
    public MenuToggle text(String text) {
        if (type == MenuToggleType.default_ || type == MenuToggleType.plainText) {
            if (textElement == null) {
                HTMLElement before = badge != null ? badge.element() : controlElement;
                insertBefore(textElement = span().css(component(menuToggle, Classes.text)).element(), before);
            }
            textElement.textContent = text;
        } else if (type == MenuToggleType.split) {
            if (checkbox != null) {
                checkbox.text(text);
            } else if (action != null) {
                action.text(text);
            }
        }
        return this;
    }

    @Override
    public MenuToggle iconAndText(Element icon, String text, IconPosition iconPosition) {
        icon(icon);
        return text(text);
    }

    @Override
    public MenuToggle that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public MenuToggle ariaLabel(String label) {
        toggleElement.setAttribute(Aria.label, label);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String text() {
        if (type == MenuToggleType.default_ || type == MenuToggleType.plainText) {
            if (textElement != null) {
                return textElement.textContent;
            }
        } else if (type == MenuToggleType.split) {
            if (checkbox != null) {
                checkbox.text();
            } else if (action != null) {
                action.text();
            }
        }
        return null;
    }

    public Badge badge() {
        return badge;
    }
}
