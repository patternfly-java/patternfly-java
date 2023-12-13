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
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.badge.Badge;
import org.patternfly.component.icon.InlineIcon;
import org.patternfly.component.spinner.Spinner;
import org.patternfly.core.Aria;
import org.patternfly.core.IconPosition;
import org.patternfly.core.Logger;
import org.patternfly.core.WithIcon;
import org.patternfly.core.WithIconAndText;
import org.patternfly.core.WithProgress;
import org.patternfly.core.WithText;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Modifiers.Inline;
import org.patternfly.style.Modifiers.NoPadding;
import org.patternfly.style.Modifiers.Plain;

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
import static org.patternfly.style.Classes.secondary;
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
 * @see <a href= "https://www.patternfly.org/components/button/html">https://www.patternfly.org/components/button/html</a>
 */
public class Button extends BaseComponent<HTMLElement, Button> implements
        Disabled<HTMLElement, Button>,
        Inline<HTMLElement, Button>,
        Plain<HTMLElement, Button>,
        NoPadding<HTMLElement, Button>,
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

    private final HTMLButtonElement buttonElement;
    private final HTMLAnchorElement anchorElement;
    private InlineIcon icon;
    private HTMLElement iconContainer;
    private Spinner spinner;

    <E extends HTMLElement> Button(HTMLContainerBuilder<E> builder) {
        super(ComponentType.Button, builder.css(component(button)).element());

        if (element().tagName.equalsIgnoreCase("button")) {
            anchorElement = null;
            buttonElement = (HTMLButtonElement) element();
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
    public Button icon(InlineIcon icon) {
        removeIcon();
        this.icon = icon;
        return add(icon);
    }

    @Override
    public Button removeIcon() {
        failSafeRemoveFromParent(icon);
        failSafeRemoveFromParent(iconContainer);
        this.icon = null;
        this.iconContainer = null;
        return this;
    }

    @Override
    public Button iconAndText(InlineIcon icon, String text, IconPosition position) {
        removeIcon();
        this.icon = icon;
        switch (position) {
            case start:
                insertFirst(element(), iconContainer = span().css(component(button, Classes.icon), modifier(Classes.start))
                        .add(icon)
                        .element());
                text(text);
                break;
            case end:
                text(text);
                add(iconContainer = span().css(component(button, Classes.icon), modifier(Classes.end))
                        .add(icon)
                        .element());
                break;
        }
        return this;
    }

    /**
     * Changes the text of this button. Prefer this method over {@link org.jboss.elemento.HasElement#textContent(String)}, since
     * this method doesn't remove a possible progress spinner.
     */
    @Override
    public Button text(String text) {
        // using textContent(text) would remove a possible progress spinner
        return textNode(text);
    }

    public Button href(String href) {
        if (anchorElement != null) {
            anchorElement.href = href;
        } else {
            Logger.undefined(componentType(), element(), "Unable to set href: This button is no <a/> button. ");
        }
        return this;
    }

    public Button target(String target) {
        if (anchorElement != null) {
            anchorElement.target = target;
        } else {
            Logger.undefined(componentType(), element(), "Unable to set target: This button is no <a/> button. ");
        }
        return this;
    }

    public Button primary() {
        return css(modifier(primary));
    }

    public Button secondary() {
        return css(modifier(secondary));
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

        HTMLElement element = find(By.classname(component(button, progress)));
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
}
