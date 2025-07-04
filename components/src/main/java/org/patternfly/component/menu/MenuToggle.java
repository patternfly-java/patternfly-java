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
import org.jboss.elemento.ElementTextMethods;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentIconAndText;
import org.patternfly.component.ComponentType;
import org.patternfly.component.IconPosition;
import org.patternfly.component.Severity;
import org.patternfly.component.avatar.Avatar;
import org.patternfly.component.badge.Badge;
import org.patternfly.component.form.Checkbox;
import org.patternfly.component.textinputgroup.TextInputGroup;
import org.patternfly.core.Aria;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Modifiers.FullHeight;
import org.patternfly.style.Modifiers.FullWidth;
import org.patternfly.style.Modifiers.Primary;
import org.patternfly.style.Modifiers.Secondary;

import elemental2.dom.Element;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.core.Validation.verifyEnum;
import static org.patternfly.icon.IconSets.fas.caretDown;
import static org.patternfly.style.Classes.button;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.controls;
import static org.patternfly.style.Classes.count;
import static org.patternfly.style.Classes.expanded;
import static org.patternfly.style.Classes.menuToggle;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.small;
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
        ComponentIcon<HTMLElement, MenuToggle>,
        ComponentIconAndText<HTMLElement, MenuToggle>,
        Disabled<HTMLElement, MenuToggle>,
        ElementTextMethods<HTMLElement, MenuToggle>,
        FullHeight<HTMLElement, MenuToggle>,
        FullWidth<HTMLElement, MenuToggle>,
        Primary<HTMLElement, MenuToggle>,
        Secondary<HTMLElement, MenuToggle> {

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
        //noinspection EnhancedSwitchMigration
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
    private Badge badge;
    private MenuToggleAction action;
    private Checkbox checkbox;
    private TextInputGroup textInputGroup;
    private Severity severity;
    private Element icon;
    private HTMLElement textElement;
    private HTMLElement iconContainer;
    private HTMLElement statusIconContainer;

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
                    .apply(b -> b.tabIndex = -1)
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
        css(modifier(Classes.splitButton));
        insertFirst(element(), action.element());
        return this;
    }

    public MenuToggle addCheckbox(Checkbox checkbox) {
        return add(checkbox);
    }

    // override to ensure internal wiring
    public MenuToggle add(Checkbox checkbox) {
        this.checkbox = checkbox;
        insertFirst(element(), checkbox.element());
        return this;
    }

    public MenuToggle addTextInputGroup(TextInputGroup textInputGroup) {
        return add(textInputGroup);
    }

    // override to ensure internal wiring
    public MenuToggle add(TextInputGroup textInputGroup) {
        this.textInputGroup = textInputGroup;
        insertFirst(element(), textInputGroup.element());
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
            } else if (textInputGroup != null) {
                textInputGroup.disabled(disabled);
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

    public MenuToggle placeholder() {
        return placeholder(true);
    }

    public MenuToggle placeholder(boolean placeholder) {
        classList().toggle(modifier(Classes.placeholder), placeholder);
        return this;
    }

    public MenuToggle status(Severity severity) {
        if (severity != null) {
            if (verifyEnum(element(), "status", severity, Severity.success, Severity.danger, Severity.warning)) {
                clearStatus();
                css(severity.status.modifier());
                insertFirst(controlElement, this.statusIconContainer = span()
                        .css(component(menuToggle, Classes.status, Classes.icon))
                        .add(severity.icon.get())
                        .element());
                this.severity = severity;
            }
        } else {
            clearStatus();
        }
        return this;
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
        } else if (type == MenuToggleType.typeahead) {
            if (textInputGroup != null) {
                textInputGroup.main().text(text);
                setVisible(textInputGroup.utilities(), text != null && !text.isEmpty());
            }
        }
        return this;
    }

    @Override
    public MenuToggle iconAndText(Element icon, String text, IconPosition iconPosition) {
        icon(icon);
        return text(text);
    }

    public MenuToggle small() {
        return css(modifier(small));
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

    public void clearStatus() {
        if (severity != null) {
            classList().remove(severity.status.modifier());
        }
        failSafeRemoveFromParent(statusIconContainer);
        severity = null;
        statusIconContainer = null;
    }

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

    public TextInputGroup textInputGroup() {
        return textInputGroup;
    }

    public Badge badge() {
        return badge;
    }
}
