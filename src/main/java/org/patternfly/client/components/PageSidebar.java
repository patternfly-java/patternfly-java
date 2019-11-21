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
 * = PatternFly Sidebar Component
 * <p>
 * The sidebar component holds the vertical navigation. By default the sidebar uses the dark theme and is expanded. The
 * collapsed / expanded state is controlled by the {@link PageHeader}.
 * <p>
 * == Usage
 * <p>
 * [source,java] -- Page page = new Page() .header(new PageHeader()) .sidebar(new PageSidebar(new Navigation()))
 * .section(new PageSection()); --
 *
 * @see https://www.patternfly.org/v4/documentation/core/components/page
 */
public class PageSidebar extends BaseComponent<HTMLDivElement, PageSidebar>
        implements HtmlContent<HTMLDivElement, PageSidebar> {

    PageSidebar(Navigation navigation) {
        this(navigation, DARK);
    }

    PageSidebar(Navigation navigation, Theme theme) {
        super(div().css(component(page, sidebar), modifier(expanded)).element(), "PageSidebar");
        add(div().css(component(page, sidebar, body))
                .add(navigation)).element();
        if (theme == DARK) {
            element.classList.add(modifier(dark));
            navigation.css(modifier(dark));
        }
    }

    @Override
    public PageSidebar that() {
        return this;
    }
}
