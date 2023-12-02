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

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.core.Expandable;
import org.patternfly.core.Logger;
import org.patternfly.core.Modifiers.Compact;
import org.patternfly.core.Modifiers.Disabled;
import org.patternfly.core.Modifiers.Plain;
import org.patternfly.core.SelectionMode;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.handler.SelectHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;

import static elemental2.dom.DomGlobal.window;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.core.Modifiers.toggleModifier;
import static org.patternfly.core.SelectionMode.click;
import static org.patternfly.core.SelectionMode.multi;
import static org.patternfly.layout.Classes.card;
import static org.patternfly.layout.Classes.clickable;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.current;
import static org.patternfly.layout.Classes.display;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.selectable;
import static org.patternfly.layout.Size.lg;

/**
 * A card is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and
 * each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards
 * function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content
 * on a page.
 *
 * @see <a href= "https://www.patternfly.org/components/card/html">https://www.patternfly.org/components/card/html</a>
 */
public class Card extends BaseComponent<HTMLDivElement, Card> implements
        Compact<HTMLDivElement, Card>,
        Disabled<HTMLDivElement, Card>,
        Plain<HTMLDivElement, Card>,
        Expandable<HTMLDivElement, Card> {

    // ------------------------------------------------------ factory

    public static Card card() {
        return new Card();
    }

    // ------------------------------------------------------ instance

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

    // override to assure internal wiring
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

    // override to assure internal wiring
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

    /** Same as {@linkplain #fullHeight(boolean) fullHeight(true)} */
    public Card fullHeight() {
        return fullHeight(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(fullHeight)} */
    public Card fullHeight(boolean fullHeight) {
        return toggleModifier(this, element(), Classes.fullHeight, fullHeight);
    }

    /** Same as {@linkplain #selectable(SelectionMode, SelectHandler) selectable(multi, null)} */
    public Card selectable() {
        return selectable(multi, null);
    }

    /** Same as {@linkplain #selectable(SelectionMode, SelectHandler) selectable(multi, onSelect)} */
    public Card selectable(SelectHandler<Card> onSelect) {
        return selectable(multi, onSelect);
    }

    /** Same as {@linkplain #selectable(SelectionMode, SelectHandler) selectable(selectionMode, null)} */
    public Card selectable(SelectionMode selectionMode) {
        return selectable(selectionMode, null);
    }

    public Card selectable(SelectionMode selectionMode, SelectHandler<Card> onSelect) {
        if (selectionMode == click) {
            Logger.unsupported(componentType(), element(), "Selection mode '" + click.name() + "' is not supported");
            return this;
        }
        this.selectionMode = selectionMode;
        this.selectHandler = onSelect;
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
            Logger.unsupported(componentType(), element(),
                    "Card '" + element().id + "' is not selectable.\n" +
                            "Please add a call to 'Card.selectable(SelectionMode)', before calling 'Card.select()'.");
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
                return header.actions.selectableActions.checkbox.inputElement().checked;
            } else if (header.actions.selectableActions.radio != null) {
                return header.actions.selectableActions.radio.inputElement().checked;
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
            Logger.unsupported(componentType(), element(),
                    "Card '" + element().id + "' is not expandable.\n" +
                            "Please add a call to 'Card.expandable()', before calling 'Card.collapse()'.");
            return;
        }
        Expandable.collapse(element(), header.toggleButton.element(), expandableContent.element());
        if (toggleHandler != null) {
            toggleHandler.onToggle(this, false);
        }

    }

    @Override
    public void expand(boolean fireEvent) {
        if (!expandable || expandableContent == null || header.toggleButton == null) {
            Logger.unsupported(componentType(), element(),
                    "Card '" + element().id + "' is not expandable.\n" +
                            "Please add a call to 'Card.expandable()', before calling 'Card.expand()'.");
            return;
        }
        Expandable.expand(element(), header.toggleButton.element(), expandableContent.element());
        if (toggleHandler != null) {
            toggleHandler.onToggle(this, true);
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
            selectHandler.onSelect(this, selected);
        }
    }
}
