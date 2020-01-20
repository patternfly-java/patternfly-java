package org.patternfly.components;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.jboss.elemento.HtmlContent;
import org.jboss.elemento.HtmlContentBuilder;
import org.patternfly.resources.Constants;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.blur;
import static org.jboss.elemento.EventType.mouseenter;
import static org.jboss.elemento.EventType.mouseleave;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.*;

/**
 * PatternFly tooltip component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/tooltip">https://www.patternfly.org/v4/documentation/core/components/tooltip</a>
 */
public class Tooltip extends BaseComponent<HTMLDivElement, Tooltip>
        implements HtmlContent<HTMLDivElement, Tooltip> {

    // ------------------------------------------------------ factory methods

    public static Tooltip top(String text, HTMLElement target) {
        return new Tooltip(Position.TOP, target, text);
    }

    public static Tooltip right(String text, HTMLElement target) {
        return new Tooltip(Position.RIGHT, target, text);
    }

    public static Tooltip bottom(String text, HTMLElement target) {
        return new Tooltip(Position.BOTTOM, target, text);
    }

    public static Tooltip left(String text, HTMLElement target) {
        return new Tooltip(Position.LEFT, target, text);
    }

    public static Tooltip auto(String text, HTMLElement target) {
        return new Tooltip(Position.AUTO, target, text);
    }

    // ------------------------------------------------------ instance

    private final HtmlContentBuilder<HTMLDivElement> content;

    Tooltip(Position position, HTMLElement target, String text) {
        super(div().css(component(tooltip), position.modifier)
                        .attr(role, "tooltip")
                        .element(),
                "Tooltip");

        add(div().css(component(tooltip, arrow)));
        add(content = div().css(tooltip, Constants.content).textContent(text));

        if (target != null) {
            bind(target, mouseenter, e -> show());
            bind(target, mouseleave, e -> hide());
            bind(target, focus, e -> show());
            bind(target, blur, e -> hide());
        }
    }

    @Override
    public Tooltip that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public void show() {

    }

    public void hide() {

    }

    // ------------------------------------------------------ modifiers

    public Tooltip leftAligned() {
        content.css(modifier(textLeftAligned));
        return this;
    }
}
