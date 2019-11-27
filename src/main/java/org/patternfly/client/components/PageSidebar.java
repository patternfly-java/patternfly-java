package org.patternfly.client.components;

import elemental2.dom.HTMLDivElement;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.patternfly.client.resources.Theme;

import static org.jboss.gwt.elemento.core.Elements.div;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.*;
import static org.patternfly.client.resources.Theme.DARK;

/**
 * PatternFly page sidebar component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/page">https://www.patternfly.org/v4/documentation/core/components/page</a>
 */
public class PageSidebar extends BaseComponent<HTMLDivElement, PageSidebar>
        implements HtmlContent<HTMLDivElement, PageSidebar> {

    // ------------------------------------------------------ factory methods

    public static PageSidebar pageSidebar(Navigation navigation) {
        return new PageSidebar(navigation, DARK);
    }

    public static PageSidebar pageSidebar(Navigation navigation, Theme theme) {
        return new PageSidebar(navigation, theme);
    }

    // ------------------------------------------------------ instance

    PageSidebar(Navigation navigation, Theme theme) {
        super(div().css(component(page, sidebar)).element(), "PageSidebar");
        add(div().css(component(page, sidebar, body))
                .add(navigation)).element();
        if (theme == DARK) {
            css(modifier(dark));
            navigation.css(modifier(dark));
        }
    }

    @Override
    public PageSidebar that() {
        return this;
    }

    // ------------------------------------------------------ internals

    void toggle() {
        if (element.classList.contains(modifier(collapsed))) {
            expand();
        } else if (element.classList.contains(modifier(expanded))) {
            collapse();
        }
    }

    void expand() {
        element.classList.remove(modifier(collapsed));
        element.classList.add(modifier(expanded));
    }

    void collapse() {
        element.classList.remove(modifier(expanded));
        element.classList.add(modifier(collapsed));
    }
}
