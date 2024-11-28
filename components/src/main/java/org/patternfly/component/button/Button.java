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
package org.patternfly.component.button;

import java.util.function.Consumer;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.IconPosition;
import org.patternfly.component.WithIcon;
import org.patternfly.component.WithIconAndText;
import org.patternfly.component.WithProgress;
import org.patternfly.component.WithText;
import org.patternfly.component.badge.Badge;
import org.patternfly.component.spinner.Spinner;
import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Modifiers.Inline;
import org.patternfly.style.Modifiers.NoPadding;
import org.patternfly.style.Modifiers.Plain;
import org.patternfly.style.Modifiers.Secondary;

import elemental2.dom.Element;
import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.style.Classes.block;
import static org.patternfly.style.Classes.button;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.control;
import static org.patternfly.style.Classes.count;
import static org.patternfly.style.Classes.danger;
import static org.patternfly.style.Classes.display;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.plain;
import static org.patternfly.style.Classes.primary;
import static org.patternfly.style.Classes.progress;
import static org.patternfly.style.Classes.small;
import static org.patternfly.style.Classes.tertiary;
import static org.patternfly.style.Classes.warning;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Size.md;

/**
 * A button is a box area or text that communicates and triggers user actions when clicked or selected. Buttons can be used to
 * communicate and immediately trigger actions a user can take in an application, like submitting a form, canceling a process,
 * or creating a new object. Buttons can also be used to take a user to a new location, like another page inside a web
 * application, or an external site such as help or documentation.
 *
 * @see <a href= "https://www.patternfly.org/components/button">https://www.patternfly.org/components/button</a>
 */
public class Button extends BaseComponent<HTMLElement, Button> implements
        Disabled<HTMLElement, Button>,
        Inline<HTMLElement, Button>,
        Plain<HTMLElement, Button>,
        NoPadding<HTMLElement, Button>,
        Secondary<HTMLElement, Button>,
        WithIcon<HTMLElement, Button>,
        WithText<HTMLElement, Button>,
        WithIconAndText<HTMLElement, Button>,
        WithProgress<HTMLElement, Button> {

    // ------------------------------------------------------ factory

    public static Button button() {
        return button(Elements.button());
    }

    public static Button button(String text) {
        return button(Elements.button()).text(text);
    }

    /**
     * Creates a button with an {@code <a/>} tag.
     */
    public static Button button(String text, String href) {
        return button(Elements.a()).text(text).href(href);
    }

    /**
     * Creates a button with an {@code <a/>} tag.
     */
    public static Button button(String text, String href, String target) {
        return button(Elements.a()).text(text).href(href).target(target);
    }

    public static <E extends HTMLElement> Button button(HTMLContainerBuilder<E> builder) {
        return new Button(builder);
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(Button.class.getName());
    private final HTMLButtonElement buttonElement;
    private final HTMLAnchorElement anchorElement;
    private Element icon;
    private HTMLElement textContainer;
    private HTMLElement iconContainer;
    private Spinner spinner;

    <E extends HTMLElement> Button(HTMLContainerBuilder<E> builder) {
        super(ComponentType.Button, builder.css(component(button)).element());

        if (element().tagName.equalsIgnoreCase("button")) {
            anchorElement = null;
            buttonElement = (HTMLButtonElement) element();
            buttonElement.type = "button";
        } else {
            anchorElement = (HTMLAnchorElement) element();
            buttonElement = null;
        }
    }

    // ------------------------------------------------------ add

    public Button addBadge(Badge badge) {
        return add(badge);
    }

    public Button add(Badge badge) {
        return add(span().css(component(button, count))
                .add(badge));
    }

    // ------------------------------------------------------ builder

    @Override
    public Button icon(Element icon) {
        removeIcon();
        this.icon = icon;
        failSafeIconContainer().appendChild(icon);
        return this;
    }

    @Override
    public Button removeIcon() {
        failSafeRemoveFromParent(icon);
        this.icon = null;
        return this;
    }

    @Override
    public Button iconAndText(Element icon, String text, IconPosition position) {
        removeIcon();
        this.icon = icon;
        switch (position) {
            case start:
                add(iconContainer = span().css(component(button, Classes.icon), modifier(Classes.start))
                        .add(icon)
                        .element());
                add(textContainer = span().css(component(button, Classes.text))
                        .textContent(text)
                        .element());
                break;
            case end:
                add(textContainer = span().css(component(button, Classes.text))
                        .textContent(text)
                        .element());
                add(iconContainer = span().css(component(button, Classes.icon), modifier(Classes.end))
                        .add(icon)
                        .element());
                break;
        }
        return this;
    }

    /**
     * Changes the text of this button.
     */
    @Override
    public Button text(String text) {
        if (text != null) {
            failSafeTextContainer().textContent = text;
        }
        return this;
    }

    public Button href(String href) {
        if (anchorElement != null) {
            anchorElement.href = href;
        } else {
            logger.error("Unable to set an href for button %o. The button is not an <a/> button.", element());
        }
        return this;
    }

    public Button target(String target) {
        if (anchorElement != null) {
            anchorElement.target = target;
        } else {
            logger.error("Unable to set a target for button %o. The button is not an <a/> button.", element());
        }
        return this;
    }

    public Button primary() {
        return css(modifier(primary));
    }

    public Button danger() {
        return css(modifier(danger));
    }

    public Button tertiary() {
        return css(modifier(tertiary));
    }

    public Button warning() {
        return css(modifier(warning));
    }

    public Button small() {
        return css(modifier(small));
    }

    public Button link() {
        return css(modifier(link));
    }

    public Button control() {
        return css(modifier(control));
    }

    public Button block() {
        return css(modifier(block));
    }

    public Button callToAction() {
        return css(modifier(display, lg));
    }

    @Override
    public Button disabled(boolean disabled) {
        Disabled.super.disabled(disabled);
        aria(Aria.disabled, disabled);
        if (buttonElement != null) {
            buttonElement.disabled = disabled;
        }
        return this;
    }

    public Button progress(boolean inProgress, String label, Consumer<Spinner> spinnerConsumer) {
        if (!element().classList.contains(modifier(plain)) && !element().classList.contains(modifier(progress))) {
            // add this once and keep it!
            element().classList.add(modifier(progress));
        }

        HTMLElement element = querySelector(By.classname(component(button, progress)));
        failSafeRemoveFromParent(element);
        if (inProgress) {
            element().classList.add(modifier(Classes.inProgress));
            if (spinner == null) {
                spinner = spinner(label).size(md);
            }
            if (spinnerConsumer != null) {
                spinnerConsumer.accept(spinner);
            }
            insertFirst(element(), span().css(component(button, progress))
                    .add(spinner)
                    .element());
        } else {
            element().classList.remove(modifier(Classes.inProgress));
        }
        return this;
    }

    @Override
    public Button that() {
        return this;
    }

    // ------------------------------------------------------ events

    public Button onClick(ComponentHandler<Button> actionHandler) {
        on(click, e -> actionHandler.handle(e, this));
        return this;
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null) {
            add(iconContainer = span().css(component(button, Classes.icon)).element());
        }
        return iconContainer;
    }

    private HTMLElement failSafeTextContainer() {
        if (textContainer == null) {
            add(textContainer = span().css(component(button, Classes.text)).element());
        }
        return textContainer;
    }
}
