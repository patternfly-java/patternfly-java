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
package org.patternfly.component.textinputgroup;

import java.util.ArrayList;
import java.util.List;
import java.util.function.BiFunction;
import java.util.function.Predicate;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.component.menu.Menu;
import org.patternfly.component.menu.SearchFilter;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.icon.IconSets;
import org.patternfly.overlay.Overlay;
import org.patternfly.style.Classes;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.KeyboardEvent;
import elemental2.dom.MutationRecord;
import elemental2.dom.Node;

import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.window;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.Key.Escape;
import static org.jboss.elemento.Key.Tab;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.textinputgroup.TextInputGroupUtilities.textInputGroupUtilities;
import static org.patternfly.overlay.CssPositioning.anchorNameSupported;
import static org.patternfly.overlay.Overlay.overlay;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Placement.bottomStart;

/** Base class for search input components within a {@link TextInputGroup}. */
public abstract class BaseSearchInput<T extends BaseSearchInput<T>> extends BaseTextInputGroup<T> implements
        Attachable,
        Expandable<HTMLElement, T> {

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(BaseSearchInput.class.getName());

    protected final List<ComponentHandler<T>> onClear;
    protected ComponentHandler<T> defaultOnClear;
    protected BiFunction<T, String, Boolean> utilitiesVisibility;
    private final List<ToggleHandler<T>> toggleHandler;
    private final List<ComponentHandler<T>> loadedHandler;
    private boolean typeahead;
    private Menu menu;
    private Overlay overlay;
    private SearchFilter searchFilter;
    private StayOpenPredicate stayOpen;
    private HandlerRegistration menuClickHandler;
    private HandlerRegistration keyHandler;
    private HandlerRegistration outsideClickHandler;

    protected BaseSearchInput(ComponentType componentType, String id) {
        super(componentType, id);
        this.onClear = new ArrayList<>();
        this.defaultOnClear = (e, si) -> si.value("");
        this.utilitiesVisibility = (si, value) -> !value.isEmpty();
        this.typeahead = false;
        this.searchFilter = SearchFilter.contains();
        this.toggleHandler = new ArrayList<>();
        this.loadedHandler = new ArrayList<>();
        this.loadedHandler.add((e, c) -> search(value()));

        toggleUtilities(value());
        onKeyup((e, si, value) -> toggleUtilities(value));
        onInput((e, si, value) -> toggleUtilities(value));
        onChange((e, si, value) -> toggleUtilities(value));
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (typeahead) {
            overlay.attach();
            menuClickHandler = bind(menu, click, this::onMenuClick);
            keyHandler = bind(window, keydown, this::keyHandler);
            menu.onSingleSelect((e, item, selected) -> {
                value(item.text());
                inputElement.focus();
            });
            onInput((e, c, value) -> {
                if (value != null && !value.isEmpty()) {
                    if (menu.hasAsyncItems()) {
                        expand(false);
                    } else {
                        search(value);
                    }
                } else {
                    collapse(false);
                }
            });
            onClear((e, si) -> {
                menu.clearSearch();
                inputElement.focus();
            });
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (outsideClickHandler != null) {
            outsideClickHandler.removeHandler();
        }
        if (keyHandler != null) {
            keyHandler.removeHandler();
        }
        if (menuClickHandler != null) {
            menuClickHandler.removeHandler();
        }
        if (overlay != null) {
            overlay.detach();
        }
    }

    // ------------------------------------------------------ add

    /**
     * Adds a menu to the search input, enabling typeahead functionality. A menu can only be added once and cannot be added to
     * an already attached search input. Additionally, this ensures the proper setup for handling input and clear actions.
     *
     * @param menu the {@code Menu} instance to be added to the search input
     * @return the instance of the current class for method chaining
     */
    public T addMenu(Menu menu) {
        return add(menu);
    }

    /**
     * Adds a menu to the search input, enabling typeahead functionality. A menu can only be added once and cannot be added to
     * an already attached search input. Additionally, this ensures the proper setup for handling input and clear actions.
     *
     * @param menu the {@code Menu} instance to be added to the search input
     * @return the instance of the current class for method chaining
     */
    public T add(Menu menu) {
        if (isAttached(this)) {
            logger.error("Menu cannot be added to a already attached search input: %o", element());
            return that();
        }
        // To keep things simple, a menu can only be added once
        if (this.typeahead) {
            logger.error("Menu cannot be added to a search input that already has a menu: %o", element());
            return that();
        }

        this.typeahead = true;
        this.menu = menu;
        HTMLElement menuPopover = div().css(component(Classes.overlay))
                .add(menu)
                .element();
        this.overlay = overlay(menuPopover, bottomStart)
                .trigger(inputElement)
                .cssPositioning(anchorNameSupported())
                .matchTriggerWidth(true);

        return add(menuPopover);
    }

    // ------------------------------------------------------ builder

    /**
     * Removes the default behavior when the component is cleared. By default, the clear button clears the input field (w/o
     * firing a change event).
     */
    public T noDefaultOnClear() {
        this.defaultOnClear = null;
        return that();
    }

    /**
     * Sets the visibility condition for the utility button. By default, the button is visible when the input field is not
     * empty. The provided {@link BiFunction} determines whether the utility should be visible based on the current
     * {@code SearchInput} instance and a {@link String} value.
     *
     * @param visibility a {@link BiFunction} that takes the {@code SearchInput} instance and a {@link String} value as
     *                   arguments and returns a {@link Boolean} indicating whether the utility should be visible.
     */
    public T showUtilitiesIf(BiFunction<T, String, Boolean> visibility) {
        this.utilitiesVisibility = visibility;
        toggleUtilities(value());
        return that();
    }

    /**
     * Specifies a condition that determines whether the menu should remain open when the menu is clicked.
     *
     * @param stayOpen a {@link Predicate} that evaluates an {@link Event} to determine if the menu remains open.
     * @return the current instance with the condition applied, enabling method chaining.
     */
    public T stayOpen(StayOpenPredicate stayOpen) {
        this.stayOpen = stayOpen;
        return that();
    }

    // ------------------------------------------------------ events

    /**
     * Adds a handler to be executed when the clear action is pressed.
     *
     * @param onClear a {@link ComponentHandler} that defines the behavior to execute on a clear action.
     */
    public T onClear(ComponentHandler<T> onClear) {
        this.onClear.add(onClear);
        return that();
    }

    public T onLoaded(ComponentHandler<T> loadedHandler) {
        this.loadedHandler.add(loadedHandler);
        return that();
    }

    public T onSearch(SearchFilter searchFilter) {
        this.searchFilter = searchFilter;
        return that();
    }

    public T onToggle(ToggleHandler<T> toggleHandler) {
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
            inputElement.focus();
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
                menu.load().then(__ -> {
                    loadedHandler.forEach(lh -> lh.handle(new Event(""), that()));
                    return null;
                });
            }
        }
    }

    /**
     * Retrieves the menu associated with this input.
     *
     * @return the {@code Menu} instance linked to this input or {@code null} if no menu has been added.
     */
    public Menu menu() {
        return menu;
    }

    /**
     * Checks whether typeahead functionality is active for this input. Typeahead is enabled when a menu has been added to the
     * input.
     *
     * @return {@code true} if typeahead is enabled; {@code false} otherwise.
     */
    public boolean typeahead() {
        return typeahead;
    }

    @Override
    public T value(String value) {
        return value(value, false);
    }

    @Override
    public T value(String value, boolean fireEvent) {
        super.value(value, fireEvent);
        toggleUtilities(value);
        return that();
    }

    // ------------------------------------------------------ internal

    /**
     * Toggles the utilities for the current input field based on the provided value. If the condition defined by
     * {@link #showUtilitiesIf(BiFunction)} evaluates to {@code true}, a clear button utility is added. If the condition
     * evaluates to {@code false}, the utility is removed from the DOM.
     * <p>
     * This method can be overridden by subclasses to customize the behavior of utility toggling.
     *
     * @param value the input value used to evaluate the visibility condition for the utility button
     */
    protected void toggleUtilities(String value) {
        if (utilitiesVisibility.apply(that(), value)) {
            if (utilities == null) {
                addUtilities(textInputGroupUtilities()
                        .add(button().icon(IconSets.rhMicrons.close()).plain().onClick((e, b) -> {
                            if (defaultOnClear != null) {
                                defaultOnClear.handle(e, that());
                            }
                            onClear.forEach(handler ->
                                    handler.handle(e, that()));
                        })));
            }
        } else {
            failSafeRemoveFromParent(utilities);
            utilities = null;
        }
    }

    private void search(String value) {
        int matching = menu.search(searchFilter, null, value);
        if (matching > 0) {
            expand(false);
            if (matching == 1) {

            } else {

            }
        } else {
            collapse(false);
        }
    }

    // ------------------------------------------------------ internal event handlers

    private void keyHandler(KeyboardEvent event) {
        if (expanded()) {
            if (Escape.match(event)) {
                collapse();
                return;
            }
            if ((textContainer.contains((Node) event.target) || menu.element().contains((Node) event.target)) &&
                    Tab.match(event)) {
                collapse();
            }
        }

        // When the focus is on the text input, delegate arrow keys to Menu.cursorNavigation()
        // to jump into the menu. Once focus is inside the menu, Menu.keyHandler() takes over
        // and cycles through items via handleArrows().
        if (expanded() && textContainer.contains((Node) event.target)) {
            menu.cursorNavigation(event);
        }
    }

    private void onMenuClick(Event event) {
        if (expanded()) {
            if (stayOpen != null && stayOpen.test(event, this, menu)) {
                return;
            }
            collapse();
        }
    }

    private void onOutsideClick(Event event) {
        if (expanded()) {
            Node target = (Node) event.target;
            boolean insideMenu = menu.element().contains(target);
            boolean insideSearchInput = textContainer.contains(target);
            if (!insideMenu && !insideSearchInput) {
                if (stayOpen != null && stayOpen.test(event, this, menu)) {
                    return;
                }
                collapse();
            }
        }
    }
}
