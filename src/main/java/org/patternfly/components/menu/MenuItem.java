package org.patternfly.components.menu;

import org.jboss.elemento.EventCallbackFn;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.components.SubComponent;
import org.patternfly.components.divider.MenuItemType;
import org.patternfly.core.Aria;
import org.patternfly.core.Disable;
import org.patternfly.core.SelectionMode;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MouseEvent;
import jsinterop.base.Js;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.components.divider.MenuItemType.link;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.SelectionMode.multi;
import static org.patternfly.core.SelectionMode.none;
import static org.patternfly.core.SelectionMode.single;
import static org.patternfly.layout.Classes.action;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.danger;
import static org.patternfly.layout.Classes.description;
import static org.patternfly.layout.Classes.disabled;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.list;
import static org.patternfly.layout.Classes.main;
import static org.patternfly.layout.Classes.menu;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.text;
import static org.patternfly.layout.Constants.role;
import static org.patternfly.layout.Constants.tabindex;

public class MenuItem extends SubComponent<HTMLElement, MenuItem> implements Disable<MenuItem>, MenuHolder {

    // ------------------------------------------------------ factory methods

    /**
     * Create a new menu item with type {@link MenuItemType#action}.
     */
    public static MenuItem menuItem(String id) {
        return new MenuItem(id, MenuItemType.action);
    }

    /**
     * Create a new menu item with the given type.
     */
    public static MenuItem menuItem(String id, MenuItemType itemType) {
        return new MenuItem(id, itemType);
    }

    // ------------------------------------------------------ instance

    public final String id;
    private final MenuItemType itemType;
    private final HTMLElement itemElement;
    private final HTMLElement mainElement;
    private final HTMLElement textElement;
    private HTMLElement iconElement;
    private HTMLElement descriptionElement;
    private HTMLButtonElement actionElement;

    MenuItem(String id, MenuItemType itemType) {
        super(li().css(component(menu, list, item))
                .attr(role, "none")
                .element());
        this.id = id;
        this.itemType = itemType;

        // add required elements
        HTMLContainerBuilder<? extends HTMLElement> itemBuilder;
        switch (itemType) {
            case action:
                add(itemElement = button().css(component(menu, item)).attr(tabindex, 0).element());
                break;
            case link:
                add(itemElement = a().css(component(menu, item)).attr(tabindex, -1).element());
                break;
            default:
                itemElement = div().element(); // create a pseudo element, but don't add it
                console.error("Unknown menu item type " + itemType);
        }
        itemElement
                .appendChild(mainElement = span().css(component(menu, item, main))
                        .add(textElement = span().css(component(menu, item, text)).element())
                        .element());
    }

    @Override
    public void passMenu(Menu menu) {
        switch (menu.menuType) {
            case standalone:
            case dropdown:
                itemElement.setAttribute(role, "menuitem");
                break;
            case select:
                itemElement.setAttribute(role, "option");
                break;
        }
        itemElement.addEventListener(click.getName(), e -> menu.select(this));
    }

    @Override
    public MenuItem that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public MenuItem text(String text) {
        textElement.textContent = text;
        return this;
    }

    public MenuItem text(HTMLElement element) {
        removeChildrenFrom(textElement);
        textElement.appendChild(element);
        return this;
    }

    public MenuItem href(String href) {
        if (itemType == link) {
            ((HTMLAnchorElement) itemElement).href = href;
        }
        return this;
    }

    public MenuItem description(String description) {
        if (descriptionElement != null) {
            descriptionElement.textContent = description;
        } else {
            itemElement.appendChild(descriptionElement = span().css(component(menu, item, Classes.description))
                    .textContent(description)
                    .element());
        }
        return this;
    }

    public MenuItem description(HTMLElement element) {
        if (descriptionElement != null) {
            removeChildrenFrom(descriptionElement);
            descriptionElement.appendChild(element);
        } else {
            itemElement.appendChild(descriptionElement = span().css(component(menu, item, description))
                    .add(element)
                    .element());
        }
        return this;
    }

    public MenuItem icon(String icon) {
        if (iconElement != null) {
            removeChildrenFrom(iconElement);
            iconElement.appendChild(i().css(icon).aria(hidden, true).element());
        } else {
            insertFirst(mainElement, iconElement = span().css(component(menu, item, Classes.icon))
                    .add(i().css(icon).aria(hidden, true))
                    .element());
        }
        return this;
    }

    public MenuItem icon(HTMLElement element) {
        if (iconElement != null) {
            removeChildrenFrom(iconElement);
            iconElement.appendChild(element);
        } else {
            insertFirst(mainElement, iconElement = span().css(component(menu, item, Classes.icon))
                    .add(element)
                    .element());
        }
        return this;
    }

    public MenuItem onClick(EventCallbackFn<MouseEvent> onClick) {
        itemElement.addEventListener(click.getName(), e -> onClick.onEvent(Js.cast(e)));
        return this;
    }

    public MenuItem action(String icon, String ariaLabel, EventCallbackFn<MouseEvent> onClick) {
        if (actionElement != null) {
            removeChildrenFrom(actionElement);
        }
        HTMLContainerBuilder<HTMLButtonElement> actionBuilder = actionElement == null
                ? button()
                : button(actionElement);
        actionBuilder
                .aria(Aria.label, ariaLabel)
                .on(click, onClick)
                .attr(tabindex, -1)
                .add(span().css(menu, item, action, Classes.icon)
                        .add(i().css(icon)));
        if (actionElement == null) {
            itemElement.appendChild(actionElement = actionBuilder.element());
        }
        return this;
    }

    @Override
    public MenuItem enable() {
        element().classList.remove(modifier(disabled));
        switch (itemType) {
            case action:
                ((HTMLButtonElement) itemElement).disabled = false;
                break;
            case link:
                itemElement.removeAttribute(Aria.disabled);
                break;
        }
        if (actionElement != null) {
            actionElement.disabled = false;
        }
        return this;
    }

    @Override
    public MenuItem disable() {
        element().classList.add(modifier(disabled));
        switch (itemType) {
            case action:
                ((HTMLButtonElement) itemElement).disabled = true;
                break;
            case link:
                itemElement.setAttribute(Aria.disabled, true);
                break;
        }
        if (actionElement != null) {
            actionElement.disabled = true;
        }
        return this;
    }

    // ------------------------------------------------------ modifiers

    public MenuItem danger() {
        return css(modifier(danger));
    }

    // ------------------------------------------------------ internals

    void select(SelectionMode selectionMode) {
        if (selectionMode == none) {
            itemElement.setAttribute(Aria.current, true);
        } else if (selectionMode == single || selectionMode == multi) {
            itemElement.setAttribute(Aria.selected, true);
            itemElement.classList.add(modifier(Classes.selected));
        }
    }

    boolean isSelected(SelectionMode selectionMode) {
        if (selectionMode == none) {
            return Boolean.parseBoolean(itemElement.getAttribute(Aria.current));
        } else if (selectionMode == single || selectionMode == multi) {
            return Boolean.parseBoolean(itemElement.getAttribute(Aria.selected));
        } else {
            return false;
        }
    }
}
