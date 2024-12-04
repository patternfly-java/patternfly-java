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
package org.patternfly.component.card;

import java.util.EnumSet;
import java.util.Set;

import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.component.SelectionMode;
import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.handler.SelectHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Compact;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Modifiers.FullHeight;
import org.patternfly.style.Modifiers.Plain;

import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;

import static elemental2.dom.DomGlobal.window;
import static java.util.stream.Collectors.joining;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.SelectionMode.multi;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.style.Classes.card;
import static org.patternfly.style.Classes.clickable;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.current;
import static org.patternfly.style.Classes.display;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.selectable;
import static org.patternfly.style.Modifiers.toggleModifier;
import static org.patternfly.style.Size.lg;

/**
 * A card is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and
 * each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards
 * function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content
 * on a page.
 *
 * @see <a href= "https://www.patternfly.org/components/card">https://www.patternfly.org/components/card</a>
 */
public class Card extends BaseComponent<HTMLDivElement, Card> implements
        Compact<HTMLDivElement, Card>,
        Disabled<HTMLDivElement, Card>,
        Expandable<HTMLDivElement, Card>,
        FullHeight<HTMLDivElement, Card>,
        Plain<HTMLDivElement, Card> {

    // ------------------------------------------------------ factory

    public static Card card() {
        return new Card();
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Card.class.getName());
    private static final Set<SelectionMode> SUPPORTED_SELECTION_MODES = EnumSet.of(single, multi);
    String name;
    SelectionMode selectionMode;
    boolean expandable;
    boolean toggleRightAligned;

    private String to;
    private boolean external;
    private CardHeader header;
    private CardExpandableContent expandableContent;
    private SelectHandler<Card> selectHandler;
    private ComponentHandler<Card> clickHandler;
    private ToggleHandler<Card> toggleHandler;

    Card() {
        super(ComponentType.Card, div().css(component(card)).element());
        storeComponent();
    }

    // ------------------------------------------------------ add

    public Card addHeader(CardHeader header) {
        return add(header);
    }

    // override to ensure internal wiring
    public Card add(CardHeader header) {
        this.header = header;
        return add(header.element());
    }

    public Card addTitle(CardTitle title) {
        return add(title);
    }

    public Card addBody(CardBody body) {
        return add(body);
    }

    public Card addFooter(CardFooter footer) {
        return add(footer);
    }

    public Card addExpandableContent(CardExpandableContent expandableContent) {
        return add(expandableContent);
    }

    // override to ensure internal wiring
    public Card add(CardExpandableContent expandableContent) {
        this.expandableContent = expandableContent;
        return add(expandableContent.element());
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #flat(boolean) flat(true)} */
    public Card flat() {
        return flat(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(flat)} */
    public Card flat(boolean flat) {
        return toggleModifier(this, element(), Classes.flat, flat);
    }

    /** Same as {@linkplain #rounded(boolean) rounded(true)} */
    public Card rounded() {
        return rounded(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(rounded)} */
    public Card rounded(boolean rounded) {
        return toggleModifier(this, element(), Classes.rounded, rounded);
    }

    /** Same as {@linkplain #large(boolean) large(true)} */
    public Card large() {
        return large(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(large)} */
    public Card large(boolean large) {
        if (large) {
            element().classList.add(modifier(display, lg));
        } else {
            element().classList.remove(modifier(display, lg));
        }
        return this;
    }

    /** Same as {@linkplain #selectable(SelectionMode, SelectHandler) selectable(multi, null)} */
    public Card selectable() {
        return selectable(multi, null);
    }

    /** Same as {@linkplain #selectable(SelectionMode, SelectHandler) selectable(multi, onSelect)} */
    public Card selectable(SelectHandler<Card> selectHandler) {
        return selectable(multi, selectHandler);
    }

    /** Same as {@linkplain #selectable(SelectionMode, SelectHandler) selectable(selectionMode, null)} */
    public Card selectable(SelectionMode selectionMode) {
        return selectable(selectionMode, null);
    }

    public Card selectable(SelectionMode selectionMode, SelectHandler<Card> selectHandler) {
        if (!SUPPORTED_SELECTION_MODES.contains(selectionMode)) {
            logger.warn("Selection mode '%s' is not supported for card %o. Supported modes are %s", selectionMode.name(),
                    element(), SUPPORTED_SELECTION_MODES.stream().map(Enum::name).collect(joining(", ")));
            return this;
        }
        this.selectionMode = selectionMode;
        this.selectHandler = selectHandler;
        return css(modifier(selectable));
    }

    /** Same as {@linkplain #clickable(ComponentHandler) clickable(null)} */
    public Card clickable() {
        return clickable((ComponentHandler<Card>) null);
    }

    public Card clickable(ComponentHandler<Card> onClick) {
        this.clickHandler = onClick;
        return css(modifier(clickable));
    }

    /** Same as {@linkplain #clickable(String, boolean) clickable(String, false)} */
    public Card clickable(String to) {
        return clickable(to, false);
    }

    public Card clickable(String to, boolean external) {
        this.to = to;
        this.external = external;
        return css(modifier(clickable));
    }

    @Override
    public Card disabled(boolean disabled) {
        if (header != null) {
            header.disabled(disabled);
        }
        return Disabled.super.disabled(disabled);
    }

    /** Same as {@linkplain #expandable(ToggleHandler, boolean) expandable(null, false)} */
    public Card expandable() {
        return expandable(null, false);
    }

    /** Same as {@linkplain #expandable(ToggleHandler, boolean) expandable(null, toggleRightAligned)} */
    public Card expandable(boolean toggleRightAligned) {
        return expandable(null, toggleRightAligned);
    }

    /** Same as {@linkplain #expandable(ToggleHandler, boolean) expandable(toggleHandler, false)} */
    public Card expandable(ToggleHandler<Card> toggleHandler) {
        return expandable(toggleHandler, false);
    }

    public Card expandable(ToggleHandler<Card> toggleHandler, boolean toggleRightAligned) {
        this.expandable = true;
        this.toggleHandler = toggleHandler;
        this.toggleRightAligned = toggleRightAligned;
        return this;
    }

    public Card name(String name) {
        this.name = name;
        return this;
    }

    @Override
    public Card that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Card ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ api

    /** Same as {@linkplain #select(boolean, boolean) select(true, true)} */
    public void select() {
        select(true, true);
    }

    /** Same as {@linkplain #select(boolean, boolean) select(selected, true)} */
    public void select(boolean selected) {
        select(selected, true);
    }

    public void select(boolean selected, boolean fireEvent) {
        if (selectionMode == null) {
            logger.warn(
                    "Card %o is not selectable. Please add a call to Card.selectable(SelectionMode), before calling Card.select().",
                    element());
            return;
        }
        if (header != null && header.actions != null && header.actions.selectableActions != null) {
            header.actions.selectableActions.markSelected(selected);
        }
        internalSelect(selected, fireEvent);
    }

    public boolean selected() {
        if (isClickable() && isSelectable()) {
            return element().classList.contains(modifier(current));
        } else if (header != null && header.actions != null && header.actions.selectableActions != null) {
            if (header.actions.selectableActions.checkbox != null) {
                return header.actions.selectableActions.checkbox.inputElement().element().checked;
            } else if (header.actions.selectableActions.radio != null) {
                return header.actions.selectableActions.radio.inputElement().element().checked;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    @Override
    public void collapse(boolean fireEvent) {
        if (!expandable || expandableContent == null || header.toggleButton == null) {
            logger.warn("Card %o is is not expandable. Please use Card.expandable() to make this an expandable card.",
                    element());
            return;
        }
        Expandable.collapse(element(), header.toggleButton.element(), expandableContent.element());
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, false);
        }

    }

    @Override
    public void expand(boolean fireEvent) {
        if (!expandable || expandableContent == null || header.toggleButton == null) {
            logger.warn("Card %o is is not expandable. Please use Card.expandable() to make this an expandable card.",
                    element());
            return;
        }
        Expandable.expand(element(), header.toggleButton.element(), expandableContent.element());
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, true);
        }
    }

    // ------------------------------------------------------ internal

    boolean isSelectable() {
        return element().classList.contains(modifier(selectable));
    }

    boolean isClickable() {
        return element().classList.contains(modifier(clickable));
    }

    void click(Event event) {
        if (clickHandler != null) {
            clickHandler.handle(event, this);
        } else if (to != null) {
            window.open(to, external ? "_blank" : "_self");
        }
    }

    void internalSelect(boolean selected, boolean fireEvent) {
        if (isClickable() && isSelectable()) {
            if (selected) {
                element().classList.add(modifier(current));
            } else {
                element().classList.remove(modifier(current));
            }
        }
        if (fireEvent && selectHandler != null) {
            selectHandler.onSelect(new Event(""), this, selected);
        }
    }
}
