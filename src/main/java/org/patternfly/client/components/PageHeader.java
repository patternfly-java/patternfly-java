package org.patternfly.client.components;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.builder.ElementBuilder;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.patternfly.client.resources.Constants;

import static org.jboss.gwt.elemento.core.Elements.header;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.patternfly.client.components.Components.icon;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.fas;
import static org.patternfly.client.resources.Constants.header;
import static org.patternfly.client.resources.Constants.nav;
import static org.patternfly.client.resources.Constants.toggle;
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

    private final HTMLDivElement toggleContainer;
    private final Button toggleButton;
    private PageSidebar sidebar;

    // ------------------------------------------------------ page instance

    @SuppressWarnings("WeakerAccess")
    PageHeader(HTMLElement brand, String homeLink) {
        super(header().css(component(page, header)).attr(role, banner).element(), "PageHeader");
        add(div().css(component(page, header, Constants.brand))
                .add(toggleContainer = div().css(component(page, header, Constants.brand, toggle))
                        .add(toggleButton = Button.icon(icon(fas("bars")), "Global Navigation")
                                .aria(expanded, false_)
                                .onClick(() -> {
                                    if (sidebar != null) {
                                        sidebar.toggle();
                                    }
                                }))
                        .element())
                .add(a(homeLink).css(component(page, header, Constants.brand, link))
                        .add(brand)));
        hideSidebarToggle();
    }

    @Override
    public PageHeader that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public PageHeader add(Navigation navigation) {
        return add(div().css(component(page, header, nav)).add(navigation));
    }

    public PageHeader add(Tools tools) {
        return add(tools);
    }

    // ------------------------------------------------------ internals

    void setSidebar(PageSidebar sidebar) {
        this.sidebar = sidebar;
        if (this.sidebar == null) {
            toggleButton.aria(expanded, false_);
            toggleButton.element().removeAttribute("aria-controls");
        } else {
            String sidebarId = sidebar.element().id;
            if (sidebarId == null || sidebarId.length() == 0) {
                sidebarId = uniqueId(Constants.sidebar);
                sidebar.id(sidebarId);
            }
            toggleButton.aria(expanded, false_);
            toggleButton.aria(controls, sidebarId);
        }
    }

    void showSidebarToggle() {
        setVisible(toggleContainer, true);
    }

    void hideSidebarToggle() {
        setVisible(toggleContainer, false);
    }

    // ------------------------------------------------------ inner classes

    public static Tools tools() {
        return new Tools();
    }

    public static class Tools extends ElementBuilder<HTMLDivElement, Tools>
            implements HtmlContent<HTMLDivElement, Tools> {

        private Tools() {
            super(div().css(component(page, header, Constants.tools)).element());
        }

        @Override
        public Tools that() {
            return this;
        }
    }
}
