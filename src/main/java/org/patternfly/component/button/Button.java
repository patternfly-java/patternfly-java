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
import org.patternfly.core.Modifiers.Disabled;
import org.patternfly.core.Modifiers.Inline;
import org.patternfly.core.Modifiers.Plain;
import org.patternfly.core.WithProgress;
import org.patternfly.handler.ActionHandler;
import org.patternfly.layout.Classes;
import org.patternfly.layout.PredefinedIcon;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.IconPosition.start;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.layout.Classes.block;
import static org.patternfly.layout.Classes.button;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.control;
import static org.patternfly.layout.Classes.count;
import static org.patternfly.layout.Classes.danger;
import static org.patternfly.layout.Classes.display;
import static org.patternfly.layout.Classes.link;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.noPadding;
import static org.patternfly.layout.Classes.plain;
import static org.patternfly.layout.Classes.primary;
import static org.patternfly.layout.Classes.progress;
import static org.patternfly.layout.Classes.secondary;
import static org.patternfly.layout.Classes.small;
import static org.patternfly.layout.Classes.tertiary;
import static org.patternfly.layout.Classes.warning;
import static org.patternfly.layout.Size.lg;
import static org.patternfly.layout.Size.md;

/**
 * A button is a box area or text that communicates and triggers user actions when clicked or selected. Buttons can be used to
 * communicate and immediately trigger actions a user can take in an application, like submitting a form, canceling a process,
 * or creating a new object. Buttons can also be used to take a user to a new location, like another page inside a web
 * application, or an external site such as help or documentation.
 *
 * @see <a href= "https://www.patternfly.org/components/button/html">https://www.patternfly.org/components/button/html</a>
 */
public class Button extends BaseComponent<HTMLElement, Button>
        implements Disabled<HTMLElement, Button>, Inline<HTMLElement, Button>, Plain<HTMLElement, Button>,
        WithProgress<HTMLElement, Button> {

    // ------------------------------------------------------ factory

    public static Button button() {
        return button(ButtonElement.button);
    }

    public static Button button(String text) {
        return button(ButtonElement.button).text(text);
    }

    public static Button button(PredefinedIcon icon) {
        return button(ButtonElement.button).addIcon(icon);
    }

    public static Button button(PredefinedIcon icon, String label) {
        return button(ButtonElement.button).addIcon(icon).aria(Aria.label, label);
    }

    public static Button button(InlineIcon icon) {
        return button(ButtonElement.button).addIcon(icon);
    }

    public static Button button(InlineIcon icon, String label) {
        return button(ButtonElement.button).addIcon(icon).aria(Aria.label, label);
    }

    /**
     * Creates a button with an {@code <a/>} tag.
     */
    public static Button button(String text, String href) {
        return button(ButtonElement.link).text(text).href(href);
    }

    /**
     * Creates a button with an {@code <a/>} tag.
     */
    public static Button button(String text, String href, String target) {
        return button(ButtonElement.link).text(text).href(href).target(target);
    }

    public static Button button(ButtonElement element) {
        switch (element) {
            case button:
                return new Button(Elements.button());
            case link:
                return new Button(Elements.a());
            default:
                console.error(
                        "Unknown button element '" + element.name() + "'. Use '" + ButtonElement.button.name()
                                + "' as fallback");
                return new Button(Elements.button());
        }
    }

    // ------------------------------------------------------ instance

    private final HTMLButtonElement buttonElement;
    private final HTMLAnchorElement anchorElement;
    private Spinner spinner;

    <E extends HTMLElement> Button(HTMLContainerBuilder<E> builder) {
        super(builder.css(component(button)).element(), ComponentType.Button);

        if (element().tagName.equalsIgnoreCase("button")) {
            anchorElement = null;
            buttonElement = (HTMLButtonElement) element();
        } else {
            anchorElement = (HTMLAnchorElement) element();
            buttonElement = null;
        }
    }

    // ------------------------------------------------------ add

    public Button addIcon(String iconClass) {
        return add(inlineIcon(iconClass));
    }

    public Button addIcon(PredefinedIcon icon) {
        return add(inlineIcon(icon));
    }

    public Button addIcon(InlineIcon icon) {
        return add(icon);
    }

    public Button addIconAndText(String iconClass, String text) {
        return addIconAndText(inlineIcon(iconClass), text, start);
    }

    public Button addIconAndText(PredefinedIcon icon, String text) {
        return addIconAndText(inlineIcon(icon), text, start);
    }

    public Button addIconAndText(InlineIcon icon, String text) {
        return addIconAndText(icon, text, start);
    }

    public Button addIconAndText(String iconClass, String text, IconPosition position) {
        return addIconAndText(inlineIcon(iconClass), text, position);
    }

    public Button addIconAndText(PredefinedIcon icon, String text, IconPosition position) {
        return addIconAndText(inlineIcon(icon), text, position);
    }

    public Button addIconAndText(InlineIcon icon, String text, IconPosition position) {
        switch (position) {
            case start:
                add(span().css(component(button, Classes.icon), modifier(Classes.start))
                        .add(icon));
                add(text);
                break;
            case end:
                add(text);
                add(span().css(component(button, Classes.icon), modifier(Classes.end))
                        .add(icon));
                break;
        }
        return this;
    }

    public Button addBadge(Badge badge) {
        return add(span().css(component(button, count))
                .add(badge));
    }

    // ------------------------------------------------------ builder

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

    public Button noPadding() {
        return css(modifier(noPadding));
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

    /**
     * Changes the text of this button. Prefer this method over {@link org.jboss.elemento.HasElement#textContent(String)}, since
     * this method doesn't remove a possible progress spinner.
     */
    public Button text(String text) {
        // using textContent(text) would remove a possible progress spinner
        return textNode(text);
    }

    public Button href(String href) {
        if (anchorElement != null) {
            anchorElement.href = href;
        }
        return this;
    }

    public Button target(String target) {
        if (anchorElement != null) {
            anchorElement.target = target;
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

    public Button onAction(ActionHandler<Button> actionHandler) {
        on(click, e -> actionHandler.onAction(e, this));
        return this;
    }
}
