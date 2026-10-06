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

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.Expandable;
import org.patternfly.component.StayOpenPredicate;
import org.patternfly.component.menu.Menu;
import org.patternfly.component.menu.MenuItem;
import org.patternfly.component.menu.NoResults;
import org.patternfly.component.menu.SearchFilter;
import org.patternfly.component.typeahead.Decision;
import org.patternfly.component.typeahead.RefreshStrategy;
import org.patternfly.component.typeahead.TypeaheadController;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.overlay.Overlay;
import org.patternfly.style.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.KeyboardEvent;
import elemental2.dom.Node;

import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.window;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.InputType.text;
import static org.jboss.elemento.Key.ArrowRight;
import static org.jboss.elemento.Key.Escape;
import static org.jboss.elemento.Key.Tab;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.overlay.CssPositioning.anchorNameSupported;
import static org.patternfly.overlay.Overlay.overlay;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.textInput;
import static org.patternfly.style.Classes.textInputGroup;
import static org.patternfly.style.Placement.bottomStart;

/**
 * Package-private delegate that manages typeahead DOM wiring for {@link SearchInputGroupTypeahead} and
 * {@link FilterInputGroupTypeahead}. Holds all typeahead states (menu, overlay, hint input, event handlers) and delegates
 * strategy evaluation to a {@link TypeaheadController}.
 */
class TypeaheadInputDelegate<T extends BaseSearchInputGroup<T>> {

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(TypeaheadInputDelegate.class.getName());

    private final T input;
    private final TypeaheadController tc;
    private final List<ToggleHandler<T>> toggleHandler;
    private final List<ComponentHandler<T>> loadedHandler;

    private String hint;
    private Menu menu;
    private Overlay overlay;
    @SuppressWarnings("rawtypes")
    private StayOpenPredicate stayOpen;
    private HTMLInputElement hintInput;
    private HandlerRegistration menuClickHandler;
    private HandlerRegistration keyHandler;
    private HandlerRegistration outsideClickHandler;

    // ------------------------------------------------------ constructor

    TypeaheadInputDelegate(T input) {
        this.input = input;
        this.tc = new TypeaheadController();
        this.toggleHandler = new ArrayList<>();
        this.loadedHandler = new ArrayList<>();
    }

    // ------------------------------------------------------ add

    HTMLElement addMenu(Menu menu) {
        if (isAttached(input)) {
            logger.error("Menu cannot be added to an already attached typeahead input: %o", input.element());
            return null;
        }
        if (this.menu != null) {
            logger.error("Menu cannot be added to a typeahead input that already has a menu: %o", input.element());
            return null;
        }

        this.menu = menu;
        menu.noItems(null);
        HTMLElement menuPopover = div().css(component(Classes.overlay))
                .add(menu)
                .element();
        this.overlay = overlay(menuPopover, bottomStart)
                .trigger(input.inputElement)
                .cssPositioning(anchorNameSupported())
                .minTriggerWidth(true)
                .maxTriggerWidth(true);
        return menuPopover;
    }

    // ------------------------------------------------------ lifecycle

    void attach() {
        if (menu == null) {
            return;
        }
        overlay.attach();
        menuClickHandler = bind(menu, click, this::onMenuClick);
        keyHandler = bind(window, keydown, this::keyHandler);
        tc.afterRefresh(() -> {
            List<MenuItem> items = menu.items();
            if (items.isEmpty()) {
                collapse(false);
                clearHint();
            } else {
                menu.allowTabFirstItem();
                if (items.size() == 1) {
                    updateHint(input.value(), items.get(0).text());
                } else {
                    clearHint();
                }
            }
            fireLoaded();
        });
        tc.onSearch(this::search);
        menu.onSingleSelect((e, item, selected) -> {
            clearHint();
            RefreshStrategy strategy = tc.refreshStrategy();
            if (strategy != null) {
                input.value(strategy.composeSelection(input.value(), item.text()));
            } else {
                input.value(item.text());
            }
            input.inputElement.focus();
        });
        input.onInput((e, c, value) -> tc.handleInput(value, input::value, menu,
                () -> expand(false),
                () -> collapse(false)));
        input.onClear((e, si) -> {
            if (tc.lastAction() == Decision.Action.DEBOUNCE) {
                menu.reset();
            } else {
                menu.clearSearch();
            }
            input.inputElement.focus();
        });
    }

    void detach() {
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

    // ------------------------------------------------------ builder

    void refreshOn(RefreshStrategy strategy) {
        tc.refreshOn(strategy);
    }

    void filter(SearchFilter searchFilter) {
        tc.searchFilter(searchFilter);
    }

    void noResults(NoResults noResults) {
        tc.noResults(noResults);
    }

    void onLoaded(ComponentHandler<T> handler) {
        loadedHandler.add(handler);
    }

    void onToggle(ToggleHandler<T> handler) {
        toggleHandler.add(handler);
    }

    @SuppressWarnings("rawtypes")
    void stayOpen(StayOpenPredicate stayOpen) {
        this.stayOpen = stayOpen;
    }

    // ------------------------------------------------------ api

    void expand(boolean fireEvent) {
        if (!Expandable.expanded(input.element()) && !input.isDisabled()) {
            overlay.show();
            Expandable.expand(input.element(), input.element(), null);
            outsideClickHandler = bind(document, click, this::onOutsideClick);
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), input, true));
            }
            if (menu.hasAsyncItems() && tc.lastAction() != Decision.Action.DEBOUNCE) {
                menu.load().then(__ -> {
                    search(input.value());
                    fireLoaded();
                    return null;
                });
            }
        }
    }

    void collapse(boolean fireEvent) {
        if (Expandable.expanded(input.element())) {
            overlay.hide();
            Expandable.collapse(input.element(), input.element(), null);
            if (outsideClickHandler != null) {
                outsideClickHandler.removeHandler();
                outsideClickHandler = null;
            }
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), input, false));
            }
            input.inputElement.focus();
        }
    }

    Menu menu() {
        return menu;
    }

    void updatePreviousValue(String value) {
        tc.previousValue(value);
    }

    // ------------------------------------------------------ internal

    private void search(String value) {
        if (menu.hasAsyncItems()) {
            return;
        }
        List<MenuItem> matching = menu.search(tc.searchFilter(), tc.noResults(), value);
        if (matching.isEmpty()) {
            collapse(false);
            clearHint();
        } else {
            expand(false);
            if (matching.size() == 1) {
                updateHint(value, matching.get(0).text());
            } else {
                clearHint();
            }
        }
    }

    private void updateHint(String value, String itemText) {
        if (itemText.toLowerCase().startsWith(value.toLowerCase())) {
            hint = itemText;
            failSafeHintInput().value = value + itemText.substring(value.length());
        } else {
            RefreshStrategy strategy = tc.refreshStrategy();
            if (strategy != null) {
                String prefix = strategy.composeSelection(value, "");
                if (!prefix.isEmpty() && value.length() > prefix.length()) {
                    String segment = value.substring(prefix.length());
                    if (itemText.toLowerCase().startsWith(segment.toLowerCase())) {
                        hint = prefix + itemText;
                        failSafeHintInput().value = value + itemText.substring(segment.length());
                    } else {
                        clearHint();
                    }
                } else {
                    clearHint();
                }
            } else {
                clearHint();
            }
        }
    }

    private HTMLInputElement failSafeHintInput() {
        if (hintInput == null) {
            String id = Id.build(input.inputElement.id, "hint");
            hintInput = Elements.input(text).css(component(textInputGroup, textInput), modifier(Classes.hint))
                    .id(id)
                    .name(id)
                    .disabled(true)
                    .aria(hidden, true)
                    .element();
            insertFirst(input.textContainer, hintInput);
        }
        return hintInput;
    }

    private void clearHint() {
        failSafeRemoveFromParent(hintInput);
        hint = null;
        hintInput = null;
    }

    private void fireLoaded() {
        loadedHandler.forEach(lh -> lh.handle(new Event(""), input));
    }

    private void keyHandler(KeyboardEvent event) {
        if (Expandable.expanded(input.element())) {
            if (Escape.match(event)) {
                collapse(true);
                return;
            }
            if (hint != null && ArrowRight.match(event)) {
                event.preventDefault();
                collapse(true);
                input.value(hint);
                clearHint();
            }
            if ((input.textContainer.contains((Node) event.target) || menu.element().contains((Node) event.target)) &&
                    Tab.match(event)) {
                collapse(true);
            }
        }
        if (Expandable.expanded(input.element()) && input.textContainer.contains((Node) event.target)) {
            menu.cursorNavigation(event);
        }
    }

    @SuppressWarnings("unchecked")
    private void onMenuClick(Event event) {
        if (Expandable.expanded(input.element())) {
            if (stayOpen != null && stayOpen.test(event, input, menu)) {
                return;
            }
            collapse(true);
        }
    }

    @SuppressWarnings("unchecked")
    private void onOutsideClick(Event event) {
        if (Expandable.expanded(input.element())) {
            Node target = (Node) event.target;
            boolean insideMenu = menu.element().contains(target);
            boolean insideSearchInput = input.textContainer.contains(target);
            if (!insideMenu && !insideSearchInput) {
                if (stayOpen != null && stayOpen.test(event, input, menu)) {
                    return;
                }
                collapse(true);
            }
        }
    }
}
