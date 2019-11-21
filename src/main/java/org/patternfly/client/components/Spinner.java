package org.patternfly.client.components;

import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.patternfly.client.resources.CSS.Size;

import static org.jboss.gwt.elemento.core.Elements.span;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.Constants.*;

public class Spinner extends BaseComponent<HTMLElement, Spinner>
        implements HtmlContent<HTMLElement, Spinner> {

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
