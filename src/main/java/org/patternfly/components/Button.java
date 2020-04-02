package org.patternfly.components;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HtmlContent;
import org.jboss.elemento.HtmlContentBuilder;
import org.patternfly.core.Aria;
import org.patternfly.core.Callback;
import org.patternfly.core.Disable;
import org.patternfly.resources.Constants;

import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.*;

/**
 * PatternFly button component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/button">https://www.patternfly.org/v4/documentation/core/components/button</a>
 */
public class Button extends BaseComponent<HTMLElement, Button>
        implements HtmlContent<HTMLElement, Button>, Aria<Button>, Disable<Button> {

    // ------------------------------------------------------ factory methods

    public static Button button(String text) {
        return new Button(Elements.button().textContent(text));
    }

    public static Button button(Icon icon, String text) {
        return new Button(Elements.button()
                .add(span().css(component(Constants.button, Constants.icon)).add(icon))
                .add(text));
    }

    public static Button button(HTMLElement element) {
        return new Button(Elements.button().add(element));
    }

    public static Button link(String text) {
        return new Button(Elements.button().css(modifier(link)).textContent(text));
    }

    public static Button link(Icon icon, String text) {
        return new Button(Elements.button().css(modifier(link))
                .add(span().css(component(Constants.button, Constants.icon)).add(icon))
                .add(text));
    }

    public static Button link(HTMLElement element) {
        return new Button(Elements.button().css(modifier(link)).add(element));
    }

    public static Button link(String text, String href) {
        return new Button(Elements.a(href).textContent(text));
    }

    public static Button link(String text, String href, String target) {
        return new Button(Elements.a(href).attr("target", target).textContent(text));
    }

    public static Button link(Icon icon, String text, String href, String target) {
        return new Button(Elements.a(href)
                .attr("target", target)
                .add(span().css(component(Constants.button, Constants.icon)).add(icon))
                .add(text));
    }

    public static Button link(HTMLElement element, String href) {
        return new Button(Elements.a(href).add(element));
    }

    public static Button link(HTMLElement element, String href, String target) {
        return new Button(Elements.a(href).attr("target", target).add(element));
    }

    public static Button icon(Icon icon) {
        return new Button(Elements.button().css(modifier(plain)).add(icon));
    }

    public static Button icon(Icon icon, String label) {
        return new Button(Elements.button().css(modifier(plain)).aria(Constants.label, label).add(icon));
    }

    public static Button inline(String text) {
        return new Button(Elements.button().css(modifier(inline), modifier(link)).textContent(text));
    }

    public static Button control(String text) {
        return new Button(Elements.button().css(modifier(control)).textContent(text));
    }

    public static Button control(Icon icon) {
        return new Button(Elements.button().css(modifier(control)).add(icon.aria(hidden, true_)));
    }

    public static Button control(Icon icon, String text) {
        return new Button(Elements.button().css(modifier(control))
                .add(span().css(component(Constants.button, Constants.icon)).add(icon))
                .add(text));
    }

    public static Button control(HTMLElement element) {
        return new Button(Elements.button().css(modifier(control)).add(element));
    }

    // ------------------------------------------------------ instance

    private final HTMLButtonElement button;
    private final HTMLAnchorElement a;
    private Callback callback;

    <E extends HTMLElement> Button(HtmlContentBuilder<E> builder) {
        super(builder.css(component(Constants.button)).element(), "Button");
        on(click, e -> {
            if (callback != null) {
                callback.call();
            }
        });

        if (element.tagName.equalsIgnoreCase("button")) {
            a = null;
            button = (HTMLButtonElement) element;
        } else {
            a = (HTMLAnchorElement) element;
            button = null;
        }
    }

    @Override
    public Button that() {
        return this;
    }

    // ------------------------------------------------------ public API

    /** Removes modifiers added by @{@link #active()}, @{@link #expanded()} or @{@link #focus()}. */
    public Button clear() {
        element.classList.remove(modifier(active));
        element.classList.remove(modifier(focus));
        element.classList.remove(modifier(expanded));
        return this;
    }

    @Override
    public Button disable() {
        if (button != null) {
            button.disabled = true;
        } else if (a != null) {
            a.classList.add(disabled);
            a.setAttribute(tabindex, _1);
        }
        return this;
    }

    @Override
    public Button enable() {
        if (button != null) {
            button.disabled = false;
        } else if (a != null) {
            a.classList.remove(disabled);
            a.removeAttribute(tabindex);
        }
        return this;
    }

    // ------------------------------------------------------ modifiers

    public Button active() {
        element.classList.add(modifier(active));
        return this;
    }

    public Button block() {
        element.classList.add(modifier(block));
        return this;
    }

    public Button danger() {
        element.classList.add(modifier(danger));
        return this;
    }

    public Button expanded() {
        element.classList.add(modifier(expanded));
        return this;
    }

    public Button focus() {
        element.classList.add(modifier(focus));
        return this;
    }

    public Button primary() {
        element.classList.add(modifier(primary));
        return this;
    }

    public Button secondary() {
        element.classList.add(modifier(secondary));
        return this;
    }

    public Button tertiary() {
        element.classList.add(modifier(tertiary));
        return this;
    }

    public Button type(Type type) {
        if (button != null) {
            button.type = type.attributeValue;
        }
        return this;
    }

    // ------------------------------------------------------ event handler

    public Button onClick(Callback callback) {
        this.callback = callback;
        return this;
    }

    // ------------------------------------------------------ aria

    @Override
    public Button label(String label) {
        return aria(Constants.label, label);
    }

    // ------------------------------------------------------ inner classes

    public enum Type {
        SUBMIT("submit"),
        RESET("reset"),
        DEFAULT("default");

        private final String attributeValue;

        Type(String attributeValue) {
            this.attributeValue = attributeValue;
        }
    }
}
