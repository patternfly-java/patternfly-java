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
import org.jboss.elemento.TypedBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.ComponentDelegate;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.overlay.Overlay;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Placement;

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
import static org.patternfly.overlay.CssPositioning.anchorNameSupported;
import static org.patternfly.overlay.Overlay.overlay;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Placement.bottomStart;

/**
 * Abstract base component for components that combine a {@link MenuToggle} and a {@link Menu}, such as {@link Dropdown}, *
 * {@link SingleSelect}, {@link SingleTypeahead}, or {@link MultiSelect}.
 * <p>
 * The component delegates to the {@link MenuToggle} component. The {@link Menu} is managed using the native Popover API and CSS
 * anchor positioning via {@link Overlay}.
 */
abstract class MenuToggleMenu<B extends TypedBuilder<HTMLElement, B>> extends ComponentDelegate<HTMLElement, B>
        implements
        Disabled<HTMLElement, B>,
        Expandable<HTMLElement, B>,
        Attachable {

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(MenuToggleMenu.class.getName());

    final MenuToggle menuToggle;
    final Overlay overlay;
    Menu menu;
    private final HTMLElement menuPopover;
    private final List<ToggleHandler<B>> toggleHandler;
    private final List<ComponentHandler<B>> loadedHandler;
    private boolean disabled;
    private StayOpenPredicate stayOpen;
    private HandlerRegistration menuToggleClickHandler;
    private HandlerRegistration menuClickHandler;
    private HandlerRegistration keyHandler;
    private HandlerRegistration outsideClickHandler;

    MenuToggleMenu(ComponentType componentType, MenuToggle menuToggle) {
        super(componentType);
        this.menuToggle = menuToggle;
        this.toggleHandler = new ArrayList<>();
        this.loadedHandler = new ArrayList<>();

        menuPopover = div().css(component(Classes.overlay)).element();
        overlay = overlay(menuPopover, bottomStart)
                .trigger(menuToggle::element)
                .cssPositioning(anchorNameSupported())
                .matchTriggerWidth(true);

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
            overlay.attach();
            menuToggleClickHandler = bind(menuToggle.toggleElement, click, this::onMenuToggleClick);
            menuClickHandler = bind(menu, click, this::onMenuClick);
            keyHandler = bind(window, keydown, this::keyHandler);

        } else {
            logger.error("No toggle and/or menu defined for %s %o", componentType().name(), element());
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (expanded()) {
            overlay.hide();
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
        overlay.detach();
    }

    // ------------------------------------------------------ add

    public B addMenu(Menu menu) {
        return add(menu);
    }

    // override to ensure internal wiring
    public B add(Menu menu) {
        this.menu = menu;
        menuPopover.appendChild(menu.element());
        return that();
    }

    // ------------------------------------------------------ builder

    /** Provides access to the underlying menu toggle using a fluent API style */
    public B applyToMenuToggle(Consumer<MenuToggle> consumer) {
        consumer.accept(menuToggle);
        return that();
    }

    @Override
    public B disabled(boolean disabled) {
        if (menuToggle != null) {
            menuToggle.disabled(disabled);
        } else {
            // defer to attach()
            this.disabled = disabled;
        }
        return that();
    }

    @Override
    public boolean isDisabled() {
        return menuToggle == null ? disabled : menuToggle.isDisabled();
    }

    public B placement(Placement placement) {
        overlay.placement(placement);
        return that();
    }

    /**
     * Specifies a condition that determines whether the menu should remain open when the menu-toggle or the menu is clicked.
     *
     * @param stayOpen a {@link Predicate} that evaluates an {@link Event} to determine if the menu remains open.
     * @return the current instance with the condition applied, enabling method chaining.
     */
    public B stayOpen(StayOpenPredicate stayOpen) {
        this.stayOpen = stayOpen;
        return that();
    }

    // ------------------------------------------------------ aria

    public B ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public B onLoaded(ComponentHandler<B> loadedHandler) {
        this.loadedHandler.add(loadedHandler);
        return that();
    }

    public B onToggle(ToggleHandler<B> toggleHandler) {
        this.toggleHandler.add(toggleHandler);
        return that();
    }

    // ------------------------------------------------------ api

    @Override
    public void collapse(boolean fireEvent) {
        if (expanded()) {
            overlay.hide();
            Expandable.collapse(element(), element(), null);
            if (outsideClickHandler != null) {
                outsideClickHandler.removeHandler();
                outsideClickHandler = null;
            }
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), that(), false));
            }
            menuToggle.element().focus();
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        if (!expanded() && !isDisabled()) {
            overlay.show();
            Expandable.expand(element(), element(), null);
            outsideClickHandler = bind(document, click, this::onOutsideClick);
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), that(), true));
            }
            if (menu.hasAsyncItems()) {
                menu.loadAll().then(__ -> {
                    loadedHandler.forEach(th -> th.handle(new Event(""), that()));
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

    boolean menuItemClick(Event event) {
        return menu.element().contains((Node) event.target);
    }

    // ------------------------------------------------------ internal event handlers

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

    private void onMenuToggleClick(Event event) {
        if (expanded()) {
            if (stayOpen != null && stayOpen.test(event, menuToggle, menu)) {
                return;
            }
            collapse();
        } else {
            expand();
        }
    }

    private void onMenuClick(Event event) {
        if (expanded()) {
            if (stayOpen != null && stayOpen.test(event, menuToggle, menu)) {
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
                if (stayOpen != null && stayOpen.test(event, menuToggle, menu)) {
                    return;
                }
                collapse();
            }
        }
    }
}
