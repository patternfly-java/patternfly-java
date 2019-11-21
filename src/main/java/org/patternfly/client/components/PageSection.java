package org.patternfly.client.components;

import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.builder.HtmlContent;

import static org.jboss.gwt.elemento.core.Elements.section;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.Constants.mainSection;
import static org.patternfly.client.resources.Constants.page;

/**
 * PatternFly page section component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/page">https://www.patternfly.org/v4/documentation/core/components/page</a>
 */
public class PageSection extends BaseComponent<HTMLElement, PageSection>
        implements HtmlContent<HTMLElement, PageSection> {

    PageSection() {
        super(section().css(component(page, mainSection)).element(), "PageSection");
    }

    @Override
    public PageSection that() {
        return this;
    }
}
