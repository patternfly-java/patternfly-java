package org.patternfly.client.components;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.By;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.core.builder.ElementBuilder;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.patternfly.client.core.Aria;
import org.patternfly.client.core.Callback;
import org.patternfly.client.resources.Constants;

import static org.jboss.gwt.elemento.core.Elements.*;
import static org.jboss.gwt.elemento.core.EventType.bind;
import static org.jboss.gwt.elemento.core.EventType.click;
import static org.patternfly.client.components.Icon.icon;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.fas;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.*;

/**
 * PatternFly alert component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/alert">https://www.patternfly.org/v4/documentation/core/components/alert</a>
 */
public class Alert extends BaseComponent<HTMLDivElement, Alert>
        implements HtmlContent<HTMLDivElement, Alert>, Aria<Alert> {

    // ------------------------------------------------------ factory methods

    public static Alert default_(String title) {
        return new Alert(Type.DEFAULT, title);
    }

    public static Alert info(String title) {
        return new Alert(Type.INFO, title);
    }

    public static Alert success(String title) {
        return new Alert(Type.SUCCESS, title);
    }

    public static Alert warning(String title) {
        return new Alert(Type.WARNING, title);
    }

    public static Alert danger(String title) {
        return new Alert(Type.DANGER, title);
    }

    public static Description description() {
        return new Description();
    }

    // ------------------------------------------------------ instance

    public static final String CLOSE_BUTTON = "CLOSE_BUTTON";

    private final Type type;
    private final String title;
    private Callback callback;
    private Button closeButton;

    Alert(Type type, String title) {
        super(div().css(component(alert)).aria(label, type.aria).element(), "Alert");
        this.type = type;
        this.title = title;

        if (type.modifier != null) {
            element.classList.add(type.modifier);
        }
        add(div().css(component(alert, icon))
                .add(icon(type.icon).aria(hidden, true_)));
        add(h(4).css(component(alert, Constants.title))
                .add(span().css("pf-screen-reader").textContent(type.aria))
                .add(title));
    }

    @Override
    public Alert that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public Alert inline() {
        return css(modifier(inline));
    }

    public Alert description(String description) {
        return add(description().textContent(description));
    }

    public Alert closable() {
        String label = "close " + type.aria + ": " + title;
        closeButton = Button.icon(icon(fas("times")), label);
        return action(closeButton.element(), this::close);
    }

    public void close() {
        failSafeRemoveFromParent(element);
        if (callback != null) {
            callback.call();
        }
    }

    public Alert action(String action, Callback callback) {
        return action(Button.link(action), callback);
    }

    public <E extends HTMLElement> Alert action(IsElement<E> action, Callback callback) {
        return action(action.element(), callback);
    }

    public Alert action(HTMLElement action, Callback callback) {
        bind(action, click, e -> callback.call());
        return add(div().css(component(alert, Constants.action))
                .add(action));
    }

    // ------------------------------------------------------ events

    public Alert onClose(Callback callback) {
        this.callback = callback;
        return this;
    }

    // ------------------------------------------------------ aria

    @Override
    public Alert label(String label) {
        return aria(Constants.label, label);
    }

    @Override
    public Alert label(String target, String label) {
        if (CLOSE_BUTTON.equals(target)) {
            closeButton.label(label);
        }
        return this;
    }

    // ------------------------------------------------------ internals

    boolean hasClose() {
        By selector = By.classname(component(alert, action)).desc(By.classname(fas("times")));
        return find(element, selector) != null;
    }

    // ------------------------------------------------------ inner classes

    public enum Type {
        DEFAULT(fas("bell"), null, "default alert"),
        INFO(fas("info-circle"), modifier(info), "info alert"),
        SUCCESS(fas("check-circle"), modifier(success), "success alert"),
        WARNING(fas("exclamation-triangle"), modifier(warning), "warning alert"),
        DANGER(fas("exclamation-circle"), modifier(danger), "danger alert");

        private final String icon;
        private final String modifier;
        private final String aria;

        Type(String icon, String modifier, String aria) {
            this.icon = icon;
            this.modifier = modifier;
            this.aria = aria;
        }
    }

    public static class Description extends ElementBuilder<HTMLDivElement, Description>
            implements HtmlContent<HTMLDivElement, Description> {

        Description() {
            super(div().css(component(alert, description)).element());
        }

        @Override
        public Description that() {
            return this;
        }
    }
}
