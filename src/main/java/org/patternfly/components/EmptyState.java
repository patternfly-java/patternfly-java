package org.patternfly.components;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.jboss.elemento.ElementBuilder;
import org.jboss.elemento.HtmlContent;
import org.patternfly.core.Callback;
import org.patternfly.resources.Constants;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertFirst;
import static org.patternfly.components.Button.button;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.Size.lg;
import static org.patternfly.resources.CSS.Size.sm;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.Constants.emptyState;
import static org.patternfly.resources.Constants.hidden;
import static org.patternfly.resources.Constants.icon;
import static org.patternfly.resources.Constants.primary;
import static org.patternfly.resources.Constants.true_;

/**
 * PatternFly empty state component.
 *
 * @see <a href=https://www.patternfly.org/v4/documentation/core/components/emptystate">https://www.patternfly.org/v4/documentation/core/components/emptystate</a>
 */
public class EmptyState extends BaseComponent<HTMLDivElement, EmptyState>
        implements HtmlContent<HTMLDivElement, EmptyState> {

    // ------------------------------------------------------ factory methods

    public static EmptyState emptyState(Icon icon, String title) {
        return new EmptyState(icon, title);
    }

    public static EmptyState spinner() {
        return spinner("Loading");
    }

    public static EmptyState spinner(String title) {
        EmptyState loading = new EmptyState(null, title).large();
        insertFirst(loading.element(),
                div().css(component(emptyState, icon))
                        .add(Spinner.spinner()).element());
        return loading;
    }

    public static EmptyState noResults(Callback callback) {
        return noResults("No results found", callback);
    }

    public static EmptyState noResults(String title, Callback callback) {
        return new EmptyState(icon(fas("search")), title)
                .body("No results match the filter criteria. Remove all filters or clear all filters to show results.")
                .primary(Button.link("Clear all filters").onClick(callback));
    }

    public static Body body() {
        return new Body();
    }

    // ------------------------------------------------------ instance

    private HTMLElement body;
    private HTMLElement primaryContainer;
    private HTMLElement secondaryContainer;

    protected EmptyState(Icon icon, String title) {
        super(div().css(component(emptyState)).element(), "EmptyState");
        if (icon != null) {
            add(icon.css(component(emptyState, Constants.icon)).aria(hidden, true_));
        }
        add(Title.title(1, title, lg));
    }

    @Override
    public EmptyState that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public EmptyState body(String body) {
        return body(body().textContent(body));
    }

    public EmptyState body(Body body) {
        return add(this.body = body.element());
    }

    public EmptyState primary(String text, Callback callback) {
        return primary(button(text).primary().onClick(callback).element());
    }

    public EmptyState primary(Button button) {
        return primary(button.element());
    }

    public EmptyState primary(HTMLElement element) {
        if (primaryContainer == null) {
            primaryContainer = div().css(component(emptyState, primary)).element();
            if (body == null) {
                add(primaryContainer);
            } else {
                insertAfter(primaryContainer, body);
            }
        }
        primaryContainer.appendChild(element);
        return this;
    }

    public EmptyState secondary(String text, Callback callback) {
        return secondary(Button.link(text).onClick(callback).element());
    }

    public EmptyState secondary(Button button) {
        return secondary(button.element());
    }

    public EmptyState secondary(HTMLElement element) {
        if (secondaryContainer == null) {
            add(secondaryContainer = div().css(component(emptyState, Constants.secondary)).element());
        }
        secondaryContainer.appendChild(element);
        return this;
    }

    public EmptyState small() {
        return css(sm.modifier());
    }

    public EmptyState large() {
        return css(lg.modifier());
    }

    // ------------------------------------------------------ inner classes

    public static class Body extends ElementBuilder<HTMLElement, Body>
            implements HtmlContent<HTMLElement, Body> {

        protected Body() {
            super(div().css(component(emptyState, Constants.body)).element());
        }

        @Override
        public Body that() {
            return this;
        }
    }
}
