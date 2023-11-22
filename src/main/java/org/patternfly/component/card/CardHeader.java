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

import org.jboss.elemento.Id;
import org.jboss.elemento.IsElement;
import org.patternfly.component.ComponentReference;
import org.patternfly.component.ComponentType;
import org.patternfly.component.SubComponent;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.layout.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.header;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.main;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.Classes.toggleRight;
import static org.patternfly.layout.PredefinedIcon.angleRight;

public class CardHeader extends SubComponent<HTMLDivElement, CardHeader> implements ComponentReference<Card> {

    // ------------------------------------------------------ factory

    public static CardHeader cardHeader() {
        return new CardHeader();
    }

    // ------------------------------------------------------ instance

    Button toggleButton;
    CardActions actions;
    private final HTMLElement mainElement;
    private Card card;
    private CardTitle title;

    CardHeader() {
        super(div().css(component(Classes.card, header)).element());
        super.add(mainElement = div().css(component(Classes.card, header, main)).element());
    }

    @Override
    public void passComponent(Card card) {
        this.card = card;
        if (card.expandable) {
            final String labelledBy;
            if (title != null) {
                String toggleId = Id.unique(ComponentType.Card.id, "toggle");
                if (title.element().id == null || card.element().id.isEmpty()) {
                    title.id(Id.unique(ComponentType.Card.id, "title"));
                }
                labelledBy = toggleId + " " + title.element().id;
            } else {
                labelledBy = null;
            }
            HTMLDivElement toggleElement = div().css(component(Classes.card, header, toggle))
                    .add(toggleButton = button()
                            .plain()
                            .aria(expanded, false)
                            .apply(b -> {
                                if (labelledBy != null) {
                                    b.setAttribute(Aria.labelledBy, labelledBy);
                                }
                            })
                            .on(click, e -> card.toggle())
                            .add(span().css(component(Classes.card, header, toggle, icon))
                                    .add(inlineIcon(angleRight))))
                    .element();
            if (card.toggleRightAligned) {
                css(modifier(toggleRight));
                element().appendChild(toggleElement); // don't use add(toggleElement), this would add the toggle to main!
            } else {
                insertFirst(element(), toggleElement);
            }
        }
        if (actions != null) {
            actions.passComponent(card);
        }
    }

    @Override
    public Card mainComponent() {
        return card;
    }

    // ------------------------------------------------------ add

    public CardHeader addActions(CardActions actions) {
        return add(actions);
    }

    // override to assure internal wiring
    public CardHeader add(CardActions actions) {
        this.actions = actions;
        insertFirst(element(), actions.element());
        return this;
    }

    public CardHeader addTitle(CardTitle title) {
        return add(title);
    }

    // override to assure internal wiring
    public CardHeader add(CardTitle title) {
        this.title = title;
        addToMain(title.element());
        return this;
    }

    @Override
    public CardHeader add(Node node) {
        addToMain(node);
        return this;
    }

    @Override
    public CardHeader add(IsElement<?> element) {
        addToMain(element.element());
        return this;
    }

    @Override
    public CardHeader addAll(Node... nodes) {
        for (Node node : nodes) {
            addToMain(node);
        }
        return this;
    }

    @Override
    public CardHeader addAll(Element... elements) {
        for (Element element : elements) {
            addToMain(element);
        }
        return this;
    }

    @Override
    public CardHeader addAll(HTMLElement... elements) {
        for (HTMLElement element : elements) {
            addToMain(element);
        }
        return this;
    }

    @Override
    public CardHeader addAll(IsElement<?>... elements) {
        for (IsElement<?> element : elements) {
            if (element != null) {
                addToMain(element.element());
            }
        }
        return this;
    }

    @Override
    public CardHeader addAll(Iterable<?> elements) {
        for (Object element : elements) {
            if (element instanceof Node) {
                addToMain(((Node) element));
            } else if (element instanceof IsElement) {
                // noinspection rawtypes
                addToMain(((IsElement) element).element());
            }
        }
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public CardHeader that() {
        return this;
    }

    // ------------------------------------------------------ internal

    void disabled(boolean disabled) {
        if (actions != null) {
            actions.disabled(disabled);
        }
    }

    private void addToMain(Node node) {
        mainElement.appendChild(node);
    }
}
