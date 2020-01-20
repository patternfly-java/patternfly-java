package org.patternfly.components;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.jboss.elemento.HtmlContent;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.Constants.tooltip;

/**
 * PatternFly popover component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/popover">https://www.patternfly.org/v4/documentation/core/components/popover</a>
 */
public class Popover extends BaseComponent<HTMLDivElement, Popover>
        implements HtmlContent<HTMLDivElement, Popover> {

    // ------------------------------------------------------ factory methods

    public static Popover top(HTMLElement target) {
        return new Popover(Position.TOP, target);
    }

    public static Popover right(HTMLElement target) {
        return new Popover(Position.RIGHT, target);
    }

    public static Popover bottom(HTMLElement target) {
        return new Popover(Position.BOTTOM, target);
    }

    public static Popover left(HTMLElement target) {
        return new Popover(Position.LEFT, target);
    }

    public static Popover auto(HTMLElement target) {
        return new Popover(Position.AUTO, target);
    }

    // ------------------------------------------------------ instance

    Popover(Position position, HTMLElement target) {
        super(div().css(component(tooltip), position.modifier).element(), "Tooltip");
    }

    @Override
    public Popover that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public void show() {

    }

    public void hide() {

    }
}
