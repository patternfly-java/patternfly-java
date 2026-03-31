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

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.ComponentDelegate;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.popper.Placement;
import org.patternfly.position.AnchorPositioning;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import elemental2.core.JsArray;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.KeyboardEvent;
import elemental2.dom.MutationRecord;
import elemental2.dom.Node;

import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.window;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.isVisible;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.Key.ArrowDown;
import static org.jboss.elemento.Key.ArrowUp;
import static org.jboss.elemento.Key.Escape;
import static org.jboss.elemento.Key.Tab;
import static org.patternfly.component.menu.DropdownMenu.dropdownMenu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.core.Attributes.popover;
import static org.patternfly.popper.Placement.auto;
import static org.patternfly.popper.Placement.bottomStart;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.list;

/**
 * A dropdown presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new
 * location.
 * <p>
 * This implementation uses the Popover API and CSS anchor positioning instead of Popper.js. The dropdown uses the browser's
 * top-layer rendering for correct stacking, eliminating z-index issues. CSS {@code position-try-fallbacks} handles menu
 * flipping when there is not enough space.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/menus/dropdown/">https://www.patternfly.org/components/menus/dropdown/</a>
 */
public class NativeDropdown extends ComponentDelegate<HTMLElement, NativeDropdown> implements
        Disabled<HTMLElement, NativeDropdown>,
        Expandable<HTMLElement, NativeDropdown>,
        Attachable {

    // ------------------------------------------------------ factory

    public static NativeDropdown nativeDropdown(String text) {
        return new NativeDropdown(MenuToggle.menuToggle(text));
    }

    public static NativeDropdown nativeDropdown(PredefinedIcon icon, String label) {
        return new NativeDropdown(MenuToggle.menuToggle(icon, label));
    }

    public static NativeDropdown nativeDropdown(MenuToggle menuToggle) {
        return new NativeDropdown(menuToggle);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(NativeDropdown.class.getName());
    private static final int DISTANCE = 0;

    private final MenuToggle menuToggle;
    private final HTMLElement menuPopover;
    private final AnchorPositioning ap;
    private final List<ToggleHandler<NativeDropdown>> toggleHandler;
    private final List<ComponentHandler<NativeDropdown>> loadedHandler;

    private boolean disabled;
    private Menu menu;
    private MenuContent menuContent;
    private MenuList menuList;
    private Placement placement;
    private Predicate<Event> stayOpen;
    private HandlerRegistration menuToggleClickHandler;
    private HandlerRegistration menuClickHandler;
    private HandlerRegistration keyHandler;
    private HandlerRegistration outsideClickHandler;

    NativeDropdown(MenuToggle menuToggle) {
        super(ComponentType.NativeDropdown);
        this.menuToggle = menuToggle;
        this.toggleHandler = new ArrayList<>();
        this.loadedHandler = new ArrayList<>();
        this.placement = auto;

        String id = Id.unique(componentType().id);
        menuPopover = div().css(component(Classes.menu, Classes.popover))
                .attr(popover, "manual")
                .element();
        ap = new AnchorPositioning(id, menuPopover, menuToggle::element, DISTANCE, true);

        delegateTo(menuToggle.element());
        Attachable.register(menuToggle.element(), this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (menuToggle != null && menu != null) {
            if (disabled) {
                menuToggle.disabled(true);
            }
            insertAfter(menuPopover, menuToggle.element());
            ap.attach();
            ap.applyPlacement(placement == auto ? bottomStart : placement);
            menuToggleClickHandler = bind(menuToggle.toggleElement, click, e -> toggle());
            menuClickHandler = bind(menu, click, this::onMenuClick);
            keyHandler = bind(window, keydown, this::keyHandler);

        } else {
            logger.error("No toggle and/or menu defined for %s %o", componentType().name(), element());
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (expanded()) {
            menu.element().hidePopover();
        }
        if (outsideClickHandler != null) {
            outsideClickHandler.removeHandler();
        }
        if (keyHandler != null) {
            keyHandler.removeHandler();
        }
        if (menuClickHandler != null) {
            menuClickHandler.removeHandler();
        }
        if (menuToggleClickHandler != null) {
            menuToggleClickHandler.removeHandler();
        }
        if (ap != null) {
            ap.detach();
        }
    }

    // ------------------------------------------------------ add

    public NativeDropdown addMenu(Menu menu) {
        return add(menu);
    }

    // override to ensure internal wiring
    public NativeDropdown add(Menu menu) {
        this.menu = menu;
        menuPopover.appendChild(menu.element());
        return this;
    }

    // ------------------------------------------------------ builder

    /** Provides access to the underlying menu toggle using a fluent API style */
    public NativeDropdown applyToMenuToggle(Consumer<MenuToggle> consumer) {
        consumer.accept(menuToggle);
        return this;
    }

    /**
     * Applies the provided {@link Consumer} to the {@link MenuList} associated with this {@link NativeDropdown}. If the menu,
     * menu content, or menu list is not yet initialized, they will be created as part of this method. This allows for
     * modification or customization of the menu list using the specified consumer.
     * <p>
     * This method simplifies the process of adding menu items to the dropdown menu. It is a shortcut for creating and adding a
     * {@link DropdownMenu}, {@link MenuContent}, and {@link MenuList} in a single step.
     * <p>
     * The two dropdowns below are exactly the same. Use the explicit approach if you need to customize the menu, content or
     * list or if you want to add {@link MenuGroup}s.
     * {@snippet :
     *  NativeDropdown implicit = nativeDropdown("Dropdown")
     *     .applyToMenuList(ml -> ml.addItem(menuItem("item-0", "Action")));
     *
     * NativeDropdown explicit = nativeDropdown("Dropdown")
     *     .addContent(menuContent()
     *         .addList(menuList()
     *             .addItem(menuItem("item-0", "Action"))));
     *}
     *
     * @param consumer a {@link Consumer} that accepts a {@link MenuList} for customization or modification
     * @return the current {@link NativeDropdown} instance for method chaining
     */
    public NativeDropdown applyToMenuList(Consumer<MenuList> consumer) {
        if (menu == null) {
            add(dropdownMenu());
        }
        if (menuContent == null) {
            menuContent = menuContent();
            menu.addContent(menuContent);
        }
        if (menuList == null) {
            menuList = menuList();
            menuContent.addList(menuList);
        }

        consumer.accept(menuList);
        return this;
    }

    @Override
    public NativeDropdown disabled(boolean disabled) {
        if (menuToggle != null) {
            menuToggle.disabled(disabled);
        } else {
            // defer to attach()
            this.disabled = disabled;
        }
        return this;
    }

    @Override
    public boolean isDisabled() {
        return menuToggle == null ? disabled : menuToggle.isDisabled();
    }

    public NativeDropdown placement(Placement placement) {
        this.placement = placement;
        return this;
    }

    public NativeDropdown stayOpen() {
        return stayOpen(event -> true);
    }

    /**
     * Specifies a condition that determines whether the menu should remain open when an event occurs.
     *
     * @param stayOpen a {@link Predicate} that evaluates an {@link Event} to determine if the menu remains open.
     * @return the current instance with the condition applied, enabling method chaining.
     */
    public NativeDropdown stayOpen(Predicate<Event> stayOpen) {
        this.stayOpen = stayOpen;
        return this;
    }

    @Override
    public NativeDropdown that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public NativeDropdown ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public NativeDropdown onLoaded(ComponentHandler<NativeDropdown> loadedHandler) {
        this.loadedHandler.add(loadedHandler);
        return this;
    }

    public NativeDropdown onToggle(ToggleHandler<NativeDropdown> toggleHandler) {
        this.toggleHandler.add(toggleHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void collapse(boolean fireEvent) {
        if (expanded()) {
            menuPopover.hidePopover();
            Expandable.collapse(element(), element(), null);
            if (outsideClickHandler != null) {
                outsideClickHandler.removeHandler();
                outsideClickHandler = null;
            }
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), this, false));
            }
            menuToggle.element().focus();
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        if (!expanded() && !isDisabled()) {
            ap.applyPlacement(placement == auto ? bottomStart : placement);
            menuPopover.showPopover();
            Expandable.expand(element(), element(), null);
            outsideClickHandler = bind(document, click, this::onOutsideClick);
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), this, true));
            }
            if (menu.hasAsyncItems()) {
                menu.loadAll().then(__ -> {
                    loadedHandler.forEach(th -> th.handle(new Event(""), this));
                    return null;
                });
            }
        }
    }

    public MenuToggle menuToggle() {
        return menuToggle;
    }

    public Menu menu() {
        return menu;
    }

    // ------------------------------------------------------ internal

    void searchInputControlsMenuList() {
        if (menu != null && menuToggle != null && menuToggle.searchInput() != null) {
            HTMLElement menuListElement = menu.querySelector(By.classname(component(Classes.menu, list)));
            if (menuListElement != null) {
                String id = menuListElement.getAttribute("id");
                if (id == null || id.isEmpty()) {
                    id = Id.unique(ComponentType.Menu.id, "list");
                }
                menuToggle.searchInput().input().aria(Aria.controls, id);
            }
        }
    }

    private void keyHandler(KeyboardEvent event) {
        if (expanded()) {
            if (Escape.match(event)) {
                collapse();
                return;
            }
            if ((menuToggle.element().contains((Node) event.target) ||
                    menu.element().contains((Node) event.target)) && Tab.match(event)) {
                collapse();
            }
        }

        if (expanded() && menuToggle.element().contains((Node) event.target)) {
            boolean arrowUp = ArrowUp.match(event);
            boolean arrowDown = ArrowDown.match(event);
            if (arrowUp || arrowDown) {
                event.preventDefault();
                HTMLElement focusableElement;
                JsArray<HTMLElement> listItems = JsArray.from(menu.element().querySelectorAll("li").values());
                JsArray<HTMLElement> focusableElements = listItems
                        .filter((li, __) -> isVisible(li))
                        .map((li, __) -> ((HTMLElement) li.querySelector(
                                "button:not(:disabled),input:not(:disabled),a:not([aria-disabled=\"true\"])")))
                        .filter((li, __) -> li != null);
                if (arrowDown) {
                    focusableElement = focusableElements.at(0);
                } else {
                    focusableElement = focusableElements.at(focusableElements.length - 1);
                }
                if (focusableElement != null) {
                    focusableElement.focus();
                }
            }
        }
    }

    private void onMenuClick(Event event) {
        if (expanded()) {
            if (stayOpen != null && stayOpen.test(event)) {
                return;
            }
            collapse();
        }
    }

    private void onOutsideClick(Event event) {
        if (expanded()) {
            Node target = (Node) event.target;
            boolean insideMenu = menu.element().contains(target);
            boolean insideToggle = menuToggle.element().contains(target);
            if (!insideMenu && !insideToggle) {
                if (stayOpen != null && stayOpen.test(event)) {
                    return;
                }
                collapse();
            }
        }
    }
}