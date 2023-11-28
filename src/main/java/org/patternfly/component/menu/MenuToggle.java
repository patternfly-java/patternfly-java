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

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.IconPosition;
import org.patternfly.component.avatar.Avatar;
import org.patternfly.component.badge.Badge;
import org.patternfly.component.icon.InlineIcon;
import org.patternfly.core.Aria;
import org.patternfly.core.Logger;
import org.patternfly.core.Modifiers.Disabled;
import org.patternfly.core.WithIcon;
import org.patternfly.core.WithIconAndText;
import org.patternfly.core.WithText;
import org.patternfly.layout.Classes;
import org.patternfly.layout.PredefinedIcon;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.layout.Classes.button;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.controls;
import static org.patternfly.layout.Classes.count;
import static org.patternfly.layout.Classes.expanded;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.menuToggle;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.primary;
import static org.patternfly.layout.Classes.secondary;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.PredefinedIcon.caretDown;

/**
 * The menu toggle component pairs with the menu OR the panel component to create more customizable dropdown and select
 * implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the
 * standard dropdown or select components.
 *
 * @see <a href= *
 *      "https://www.patternfly.org/components/menus/menu-toggle/html">https://www.patternfly.org/components/menus/menu-toggle/html</a>
 */
public class MenuToggle extends BaseComponent<HTMLElement, MenuToggle> implements
        WithIcon<HTMLElement, MenuToggle>,
        WithText<HTMLElement, MenuToggle>,
        WithIconAndText<HTMLElement, MenuToggle>,
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

    public static MenuToggle menuToggle(InlineIcon icon) {
        return menuToggle(MenuToggleType.plain).icon(icon);
    }

    public static MenuToggle menuToggle(InlineIcon icon, String label) {
        return menuToggle(MenuToggleType.plain).icon(icon).ariaLabel(label);
    }

    public static MenuToggle menuToggle(MenuToggleType type) {
        switch (type) {
            case default_:
            case plain:
            case plainText:
                return new MenuToggle(button(), type);
            case split:
            case typeahead:
                return new MenuToggle(div(), type);
            default:
                Logger.unknown(ComponentType.MenuToggle, null, "Unknown menu toggle type '" + type.name() + "'. " +
                        "Fallback to '" + MenuToggleType.default_.name() + "'.");
                return new MenuToggle(button(), type);
        }
    }

    // ------------------------------------------------------ instance

    final HTMLElement toggleElement;
    private final MenuToggleType type;
    private final HTMLElement controlElement;
    private HTMLElement labelElement;
    private HTMLElement textElement;
    private Badge badge;
    private MenuToggleAction action;
    private MenuToggleCheckbox checkbox;

    <E extends HTMLElement> MenuToggle(HTMLContainerBuilder<E> builder, MenuToggleType type) {
        super(builder.css(component(menuToggle)).element(), ComponentType.MenuToggle);
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
                    .add(span().css(component(menuToggle, toggle, icon))
                            .add(inlineIcon(caretDown)))
                    .element());
            toggleElement = element();
        } else if (type == MenuToggleType.split || type == MenuToggleType.typeahead) {
            add(toggleElement = button().css(component(menuToggle, button))
                    .aria(expanded, false)
                    .add(span().css(component(menuToggle, controls))
                            .add(span().css(component(menuToggle, toggle, icon))
                                    .add(inlineIcon(caretDown))))
                    .element());
            controlElement = toggleElement;
        } else {
            toggleElement = div().element();
            controlElement = div().element();
            Logger.unknown(componentType(), element(), "Unknown menu toggle type '" + type.name() + "'");
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
            Logger.unsupported(componentType(), element(),
                    "Avatar is not supported for menu toggles with type '" + type.name() + "'");
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
            Logger.unsupported(componentType(), element(),
                    "Badge is not supported for menu toggles with type '" + type.name() + "'");
        }
        return this;
    }

    public MenuToggle addAction(MenuToggleAction action) {
        return add(action);
    }

    // override to assure internal wiring
    public MenuToggle add(MenuToggleAction action) {
        this.action = action;
        css(modifier(Classes.action));
        insertFirst(element(), action.element());
        return this;
    }

    public MenuToggle addCheckbox(MenuToggleCheckbox checkbox) {
        return add(checkbox);
    }

    // override to assure internal wiring
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
    public MenuToggle icon(InlineIcon icon) {
        if (type == MenuToggleType.plain) {
            add(icon.element());
        } else if (type == MenuToggleType.default_ || type == MenuToggleType.plainText) {
            insertFirst(element(), span().css(component(menuToggle, Classes.icon)).add(icon).element());
        } else {
            Logger.unsupported(componentType(), element(),
                    "Icon is not supported for menu toggles with type '" + type.name() + "'");
        }
        return this;
    }

    public MenuToggle primary() {
        return css(modifier(primary));
    }

    public MenuToggle secondary() {
        return css(modifier(secondary));
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
    public MenuToggle iconAndText(InlineIcon icon, String text, IconPosition iconPosition) {
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
}
