package org.patternfly.client.components;

import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.patternfly.client.resources.CSS;
import org.patternfly.client.resources.Constants;

import static org.jboss.gwt.elemento.core.Elements.button;
import static org.jboss.gwt.elemento.core.Elements.header;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.fas;
import static org.patternfly.client.resources.Constants.button;
import static org.patternfly.client.resources.Constants.header;
import static org.patternfly.client.resources.Constants.label;
import static org.patternfly.client.resources.Constants.nav;
import static org.patternfly.client.resources.Constants.*;

/**
 * PatternFly page header component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/page">https://www.patternfly.org/v4/documentation/core/components/page</a>
 */
public class PageHeader extends BaseComponent<HTMLElement, PageHeader>
        implements HtmlContent<HTMLElement, PageHeader> {

    // ------------------------------------------------------ factory methods

    private static PageHeader instance;

    public static PageHeader instance() {
        return instance;
    }

    public static PageHeader pageHeader(String brand, String homeLink) {
        instance = new PageHeader(span().textContent(brand).element(), homeLink);
        return instance;
    }

    public static PageHeader pageHeader(Brand brand, String homeLink) {
        instance = new PageHeader(brand.element(), homeLink);
        return instance;
    }

    public static PageHeader pageHeader(HTMLElement brand, String homeLink) {
        instance = new PageHeader(brand, homeLink);
        return instance;
    }

    // ------------------------------------------------------ page instance

    private final HTMLElement toggle;
    private final HTMLElement brandLink;
    private final HTMLElement csContainer;
    private final HTMLElement navContainer;

    PageHeader(HTMLElement brand, String homeLink) {
        super(header().css(component(page, header)).attr(role, banner).element(), "PageHeader");

        toggle = div().css(component(page, header, Constants.brand, Constants.toggle))
                .add(button().css(component(button), CSS.modifier(plain))
                        .aria(expanded, true_).aria(label, "Global Navigation")
                        .add(i().css(fas("bars")).aria(hidden, true_))).element();

        add(div().css(component(page, header, Constants.brand))
                .add(brandLink = a(homeLink).css(
                        component(page, header, Constants.brand, link))
                        .add(brand).element()));
        add(navContainer = div().css(component(page, header, nav))
                .add(csContainer = div().css(component(page, header, selector))
                        // TODO remove styles once https://github.com/patternfly/patternfly-next/issues/1900 is fixed
                        .style("margin-right: var(--pf-c-page__header-nav--lg--MarginRight); " +
                                "margin-top: -10px").element()).element());
        add(div().css(component(page, header, Constants.tools)));
    }

    @Override
    public PageHeader that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public PageHeader contextSelector(ContextSelector contextSelector) {
        csContainer.appendChild(contextSelector.element());
        return this;
    }

    public PageHeader navigation(Navigation navigation) {
        navContainer.appendChild(navigation.element());
        return this;
    }
}
