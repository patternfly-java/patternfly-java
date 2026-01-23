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
import java.util.EnumSet;
import java.util.List;
import java.util.Set;
import java.util.function.Consumer;
import java.util.function.Predicate;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.EventType;
import org.jboss.elemento.Id;
import org.jboss.elemento.TypedBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.ComponentDelegate;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.popper.Modifiers;
import org.patternfly.popper.Placement;
import org.patternfly.popper.Popper;
import org.patternfly.popper.PopperBuilder;
import org.patternfly.popper.TriggerAction;
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
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.isVisible;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.Key.ArrowDown;
import static org.jboss.elemento.Key.ArrowUp;
import static org.jboss.elemento.Key.Tab;
import static org.patternfly.popper.Placement.auto;
import static org.patternfly.popper.Placement.bottomStart;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.list;

/**
 * Abstract base component for components that combine a {@link MenuToggle} and a {@link Menu}, such as {@link Dropdown},
 * {@link SingleSelect}, {@link SingleTypeahead}, or {@link MultiSelect}.
 * <p>
 * The component delegates to the {@link MenuToggle} component. The {@link Menu} is managed by a {@link Popper} instance.
 */
public abstract class MenuToggleMenu<B extends TypedBuilder<HTMLElement, B>> extends ComponentDelegate<HTMLElement, B> implements
        Disabled<HTMLElement, B>,
        Expandable<HTMLElement, B>,
        Attachable {

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(MenuToggleMenu.class.getName());
    private static final int Z_INDEX = 9999;

    final MenuToggle menuToggle;
    Menu menu;
    private final Set<TriggerAction> triggerActions;
    private final List<ToggleHandler<B>> toggleHandler;
    private final List<ComponentHandler<B>> loadedHandler;
    private int zIndex;
    private boolean flip;
    private boolean disabled;
    private Placement placement;
    private Popper popper;
    private HandlerRegistration keyHandler;
    private Predicate<Event> stayOpen;

    MenuToggleMenu(ComponentType componentType, MenuToggle menuToggle, TriggerAction triggerAction) {
        super(componentType);
        this.menuToggle = menuToggle;
        this.toggleHandler = new ArrayList<>();
        this.loadedHandler = new ArrayList<>();
        this.triggerActions = EnumSet.of(triggerAction);
        this.flip = true;
        this.placement = bottomStart;
        this.zIndex = Z_INDEX;

        delegateTo(menuToggle.element());
        Attachable.register(menuToggle.element(), this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (menuToggle != null && menu != null) {
            if (disabled) {
                menuToggle.disabled(true);
            }
            setVisible(menu, false);
            document.body.appendChild(menu.element()); // always append to the body to prevent display/width/z-index issues!
            popper = new PopperBuilder(componentType().componentName, menuToggle.element(), menu.element())
                    .addModifier(Modifiers.eventListeners(false),
                            Modifiers.flip(placement == auto || flip),
                            Modifiers.hide(),
                            Modifiers.noOverflow(),
                            Modifiers.placement(),
                            Modifiers.widths())
                    .placement(placement)
                    .registerHandler(menuToggle.toggleElement, triggerActions,
                            event -> expand(), event -> collapse())
                    .stayOpen(stayOpen)
                    .zIndex(zIndex)
                    .build();
            keyHandler = EventType.bind(window, keydown, this::keyHandler);
        } else {
            logger.error("No toggle and/or menu defined for %s %o", componentType().name(), element());
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (keyHandler != null) {
            keyHandler.removeHandler();
        }
        failSafeRemoveFromParent(menu);
        popper.cleanup();
    }

    // ------------------------------------------------------ add

    public B addMenu(Menu menu) {
        return add(menu);
    }

    // override to ensure internal wiring
    public B add(Menu menu) {
        this.menu = menu;
        // Do *not* add the menu now, delay it to attach()
        return that();
    }

    // ------------------------------------------------------ builder

    /** Provides access to the underlying menu toggle using a fluent API style */
    public B applyTo(Consumer<MenuToggle> consumer) {
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

    public B flip(boolean flip) {
        this.flip = flip;
        return that();
    }

    public B placement(Placement placement) {
        if (placement == auto) {
            flip = true;
        }
        this.placement = placement;
        return that();
    }

    public B stayOpen() {
        this.triggerActions.clear();
        this.triggerActions.add(TriggerAction.stayOpen);
        return that();
    }

    /**
     * Specifies a condition that determines whether the menu should remain open when an event occurs.
     *
     * @param stayOpen a {@link Predicate} that evaluates an {@link Event} to determine if the menu remains open.
     * @return the current instance with the condition applied, enabling method chaining.
     */
    public B stayOpen(Predicate<Event> stayOpen) {
        this.stayOpen = stayOpen;
        return that();
    }

    public B zIndex(int zIndex) {
        this.zIndex = zIndex;
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
        popper.hide(() -> {
            Expandable.collapse(element(), element(), null);
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), that(), false));
            }
            menuToggle.element().focus();
        });
    }

    @Override
    public void expand(boolean fireEvent) {
        popper.show(() -> {
            Expandable.expand(element(), element(), null);
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), that(), true));
            }
            if (menu.hasAsyncItems()) {
                menu.loadAll().then(__ -> {
                    loadedHandler.forEach(th -> th.handle(new Event(""), that()));
                    return null;
                });
            }
        });
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
        if (expanded() && (menuToggle.element().contains((Node) event.target) ||
                menu.element().contains((Node) event.target))) {
            if (Tab.match(event)) {
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
}
