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
import org.patternfly.component.ValidationStatus;
import org.patternfly.component.avatar.Avatar;
import org.patternfly.component.badge.Badge;
import org.patternfly.component.form.Checkbox;
import org.patternfly.component.textinputgroup.BaseFilterInput;
import org.patternfly.component.textinputgroup.BaseSearchInput;
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
import static org.jboss.elemento.Elements.span;
import static org.patternfly.icon.IconSets.fas.caretDown;
import static org.patternfly.style.Classes.button;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.controls;
import static org.patternfly.style.Classes.count;
import static org.patternfly.style.Classes.danger;
import static org.patternfly.style.Classes.expanded;
import static org.patternfly.style.Classes.menuToggle;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.small;
import static org.patternfly.style.Classes.toggle;

/**
 * The menu toggle component pairs with the menu OR the panel component to create a more customizable dropdown and select
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

    public static <T extends BaseSearchInput<T>> MenuToggle menuToggle(BaseSearchInput<T> searchInput) {
        return menuToggle(MenuToggleType.typeahead).addSearchInput(searchInput);
    }

    public static <T extends BaseFilterInput<T>> MenuToggle menuToggle(BaseFilterInput<T> filterInput) {
        return menuToggle(MenuToggleType.typeahead).addFilterInput(filterInput);
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
    private BaseSearchInput<?> searchInput;
    private BaseFilterInput<?> filterInput;
    private ValidationStatus status;
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
                    .add(controlElement = span().css(component(menuToggle, controls))
                            .add(span().css(component(menuToggle, toggle, Classes.icon))
                                    .add(caretDown()))
                            .element())
                    .element());
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

    /**
     * Adds a checkbox to the menu toggle and ensures the necessary internal wiring. Please make sure that the checkbox is a
     * wrapped checkbox created with {@link Checkbox#checkboxWrapped(String, String)}.
     *
     * @param checkbox the {@code Checkbox} component to be added to the menu toggle
     * @return the updated {@code MenuToggle} instance with the checkbox added
     */
    public MenuToggle addCheckbox(Checkbox checkbox) {
        return add(checkbox);
    }

    /**
     * Adds a checkbox to the menu toggle and ensures the necessary internal wiring. Please make sure that the checkbox is a *
     * wrapped checkbox created with {@link Checkbox#checkboxWrapped(String, String)}.
     *
     * @param checkbox the {@code Checkbox} component to be added to the menu toggle
     * @return the updated {@code MenuToggle} instance
     */
    // override to ensure internal wiring
    public MenuToggle add(Checkbox checkbox) {
        this.checkbox = checkbox;
        insertFirst(element(), checkbox.element());
        return this;
    }

    public MenuToggle addSearchInput(BaseSearchInput<?> searchInput) {
        return add(searchInput);
    }

    // override to ensure internal wiring
    public MenuToggle add(BaseSearchInput<?> searchInput) {
        this.searchInput = searchInput;
        insertFirst(element(), searchInput.element());
        return this;
    }

    public MenuToggle addFilterInput(BaseFilterInput<?> filterInput) {
        return add(filterInput);
    }

    // override to ensure internal wiring
    public MenuToggle add(BaseFilterInput<?> filterInput) {
        this.searchInput = filterInput; // every filter input is also a search input!
        this.filterInput = filterInput;
        insertFirst(element(), filterInput.element());
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
            } else if (searchInput != null) {
                searchInput.disabled(disabled);
            }
        }
        return this;
    }

    @Override
    public MenuToggle icon(Element icon) {
        removeIcon();
        this.icon = icon;
        if (type == MenuToggleType.plain || type == MenuToggleType.default_ || type == MenuToggleType.plainText) {
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
                String failSafeText = text == null ? "" : text;
                checkbox.standalone(failSafeText.isEmpty());
                if (!failSafeText.isEmpty()) {
                    checkbox.text(failSafeText);
                }
            } else if (action != null) {
                action.text(text);
            }
        } else if (type == MenuToggleType.typeahead) {
            if (searchInput != null) {
                searchInput.value(text);
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

    public MenuToggle validated(ValidationStatus status) {
        if (status != this.status) {
            if (this.status != null) {
                resetValidation();
            }
            this.status = status;
            if (status != null) {
                if (status.modifier != null) {
                    // Input fields and the menu toggle share the same ValidationStatus enum.
                    // But the input fields use 'pf-m-danger', the menu toggle uses 'pf-m-error' 😩
                    String modifier = status == ValidationStatus.error ? Classes.modifier(danger) : status.modifier;
                    css(modifier);
                }
                if (status.icon != null) {
                    insertFirst(controlElement, this.statusIconContainer = span()
                            .css(component(menuToggle, Classes.status, Classes.icon))
                            .add(status.icon.get())
                            .element());
                }
            }
        }
        return this;
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

    public void resetValidation() {
        if (status != null) {
            element().classList.remove(this.status.modifier);
            failSafeRemoveFromParent(statusIconContainer);
            statusIconContainer = null;
            status = null;
        }
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
        } else if (type == MenuToggleType.typeahead) {
            if (searchInput != null) {
                return searchInput.value();
            }
        }
        return null;
    }

    public BaseSearchInput<?> searchInput() {
        return searchInput;
    }

    public BaseFilterInput<?> filterInput() {
        return filterInput;
    }

    public Badge badge() {
        return badge;
    }

    public Checkbox checkbox() {
        return checkbox;
    }
}
