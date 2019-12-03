package org.patternfly.client.components;

import java.util.function.Consumer;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;
import org.gwtproject.safehtml.shared.SafeHtml;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;
import org.patternfly.client.resources.Constants;

import static org.jboss.gwt.elemento.core.Elements.button;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.i;
import static org.jboss.gwt.elemento.core.Elements.span;
import static org.jboss.gwt.elemento.core.EventType.click;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.fas;
import static org.patternfly.client.resources.Constants.*;

/**
 * PatternFly expandable component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/xpandable">https://www.patternfly.org/v4/documentation/core/components/expandable</a>
 */
public class Expandable extends BaseComponent<HTMLDivElement, Expandable>
        implements HtmlContent<HTMLDivElement, Expandable> {

    // ------------------------------------------------------ factory methods

    public static Expandable expandable() {
        return new Expandable("Show more", "Show less");
    }

    // ------------------------------------------------------ instance

    private final CollapseExpandHandler ceh;
    private final Consumer<Boolean> toggleText;

    private final HTMLElement button;
    private final HTMLElement text;
    private final HtmlContentBuilder<HTMLDivElement> content;

    Expandable(String expandText, String collapseText) {
        super(div().css(component(expandable)).element(), "Expandable");
        this.ceh = new CollapseExpandHandler();
        this.toggleText = expanded -> textElement().textContent = expanded ? collapseText : expandText;
        this.ceh.onToggle = this.toggleText;

        button = button().css(component(expandable, toggle))
                .aria(expanded, false_)
                .on(click, e -> ceh.expand(element(), buttonElement(), contentElement()))
                .add(i().css(component(expandable, toggle, icon), fas(angleRight)))
                .add(text = span().textContent(expandText).element())
                .element();
        content = div().css(component(expandable, Constants.content)).hidden(true);

        // Don't use add() it's overridden!
        element.appendChild(button);
        element.appendChild(content.element());
    }

    private HTMLElement textElement() {
        return text;
    }

    private HTMLElement buttonElement() {
        return button;
    }

    private HTMLElement contentElement() {
        return content.element();
    }

    @Override
    public Expandable that() {
        return this;
    }

    // ------------------------------------------------------ content delegates

    @Override
    public Expandable add(IsElement element) {
        content.add(element);
        return this;
    }

    @Override
    public Expandable add(String text) {
        content.add(text);
        return this;
    }

    @Override
    public Expandable add(Node element) {
        content.add(element);
        return this;
    }

    @Override
    public Expandable addAll(HTMLElement... elements) {
        content.addAll(elements);
        return this;
    }

    @Override
    public Expandable addAll(IsElement... elements) {
        content.addAll(elements);
        return this;
    }

    @Override
    public Expandable textContent(String text) {
        content.textContent(text);
        return this;
    }

    @Override
    public Expandable innerHtml(SafeHtml html) {
        content.innerHtml(html);
        return this;
    }

    // ------------------------------------------------------ events

    public Expandable onToggle(Consumer<Boolean> onToggle) {
        ceh.onToggle = toggleText.andThen(onToggle);
        return this;
    }
}
