package org.patternfly.components;

import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.patternfly.resources.CSS.Size;

import static org.jboss.gwt.elemento.core.Elements.span;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.Constants.*;

public class Spinner extends BaseComponent<HTMLElement, Spinner>
        implements HtmlContent<HTMLElement, Spinner> {

    // ------------------------------------------------------ factory methods

    public static Spinner spinner() {
        return new Spinner(null);
    }

    public static Spinner spinner(Size size) {
        return new Spinner(size);
    }

    // ------------------------------------------------------ instance

    Spinner(Size size) {
        super(span().css(component(spinner)).element(), "Spinner");
        if (size != null) {
            css().add(size.modifier());
        }
        aria(valueText, "Loading...");
        attr(role, progressbar);
        add(span().css(component(spinner, clipper)));
        add(span().css(component(spinner, leadBall)));
        add(span().css(component(spinner, tailBall)));
    }

    @Override
    public Spinner that() {
        return this;
    }
}
