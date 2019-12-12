package org.patternfly.client.components;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MediaQueryList;
import elemental2.dom.MutationRecord;
import org.jboss.gwt.elemento.core.Attachable;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.builder.ElementBuilder;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.patternfly.client.resources.CSS;
import org.patternfly.client.resources.Constants;
import org.patternfly.client.resources.Theme;

import static elemental2.dom.DomGlobal.window;
import static org.jboss.gwt.elemento.core.Elements.main;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.jboss.gwt.elemento.core.Elements.section;
import static org.patternfly.client.components.Icon.icon;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.fas;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.nav;
import static org.patternfly.client.resources.Constants.toggle;
import static org.patternfly.client.resources.Constants.*;
import static org.patternfly.client.resources.Theme.DARK;

/**
 * PatternFly page component
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/page">https://www.patternfly.org/v4/documentation/core/components/page</a>
 */
public class Page extends BaseComponent<HTMLDivElement, Page>
        implements HtmlContent<HTMLDivElement, Page>, Attachable {

    // ------------------------------------------------------ factory methods

    private static Page instance;

    public static Page instance() {
        return instance;
    }

    public static Page page(String mainContainerId) {
        instance = new Page(mainContainerId);
        return instance;
    }

    public static Header header(String brand, String homeLink) {
        return new Header(span().textContent(brand).element(), homeLink);
    }

    public static Header header(Brand brand, String homeLink) {
        return new Header(brand.element(), homeLink);
    }

    public static Header header(HTMLElement brand, String homeLink) {
        return new Header(brand, homeLink);
    }

    public static Tools tools() {
        return new Tools();
    }

    public static PageSidebar sidebar(Navigation navigation) {
        return new PageSidebar(navigation, Theme.DARK);
    }

    public static PageSidebar sidebar(Navigation navigation, Theme theme) {
        return new PageSidebar(navigation, theme);
    }

    public static Section section() {
        return new Section();
    }

    // ------------------------------------------------------ page instance

    private final HTMLElement main;
    private final MediaQueryList mediaQueryList;
    private Header header;
    private PageSidebar sidebar;

    Page(String mainContainerId) {
        super(div().css(component(page)).element(), "Page");
        add(main = main().id(mainContainerId).css(component(page, Constants.main))
                .attr(role, Constants.main)
                .attr(tabindex, "-1")
                .element());

        mediaQueryList = window.matchMedia("(max-width: 768px)");
        mediaQueryList.addListener(this::onResize);
        Attachable.register(element(), this);
    }

    @Override
    public Page that() {
        return this;
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        onResize(mediaQueryList);
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        mediaQueryList.removeListener(this::onResize);
    }

    // ------------------------------------------------------ public API

    public Page add(Header header) {
        failSafeRemoveFromParent(this.header);
        this.header = header;
        insertFirst(element, this.header);
        return this;
    }

    /** Shortcut for {@code add(new PageSidebar(navigation))} */
    public Page add(Navigation navigation) {
        return add(sidebar(navigation));
    }

    /** Shortcut for {@code add(new PageSidebar(navigation, theme))} */
    public Page add(Navigation navigation, Theme theme) {
        return add(sidebar(navigation, theme));
    }

    public Page add(PageSidebar sidebar) {
        // TODO only insert if this.sidebar != sidebar?
        failSafeRemoveFromParent(this.sidebar);
        this.sidebar = sidebar;
        insertBefore(this.sidebar, main);
        if (header != null) {
            header.setSidebar(this.sidebar);
        }
        onResize(mediaQueryList);
        return this;
    }

    public void removeSidebar() {
        failSafeRemoveFromParent(sidebar);
        sidebar = null;
        if (header != null) {
            header.setSidebar(null);
            header.hideSidebarToggle();
        }
    }

    public Page add(Section firstSection, Section... moreSections) {
        removeChildrenFrom(main);
        main.appendChild(firstSection.element());
        if (moreSections != null) {
            for (Section section : moreSections) {
                main.appendChild(section.element());
            }
        }
        return this;
    }

    public Header getHeader() {
        return header;
    }

    public PageSidebar getSidebar() {
        return sidebar;
    }

    // ------------------------------------------------------ internals

    private void onResize(MediaQueryList mql) {
        if (mql.matches) {
            // < 768px
            if (header != null && sidebar != null) {
                header.showSidebarToggle();
            }
            if (sidebar != null) {
                sidebar.collapse();
            }
        } else {
            // > 768px
            if (header != null) {
                header.hideSidebarToggle();
            }
            if (sidebar != null) {
                sidebar.expand();
            }
        }
    }

    // ------------------------------------------------------ inner classes

    public static class Header extends BaseComponent<HTMLElement, Header>
            implements HtmlContent<HTMLElement, Header> {

        private final HTMLDivElement toggleContainer;
        private final Button toggleButton;
        private PageSidebar sidebar;

        Header(HTMLElement brand, String homeLink) {
            super(Elements.header().css(CSS.component(page, Constants.header)).attr(role, banner).element(),
                    "PageHeader");
            add(div().css(component(page, Constants.header, Constants.brand))
                    .add(toggleContainer = div().css(component(page, Constants.header, Constants.brand, toggle))
                            .add(toggleButton = Button.icon(icon(fas("bars")), "Global Navigation")
                                    .aria(expanded, false_)
                                    .onClick(() -> {
                                        if (sidebar != null) {
                                            sidebar.toggle();
                                        }
                                    }))
                            .element())
                    .add(a(homeLink).css(component(page, Constants.header, Constants.brand, link))
                            .add(brand)));
            hideSidebarToggle();
        }

        @Override
        public Header that() {
            return this;
        }

        public Header add(Navigation navigation) {
            return add(div().css(component(page, Constants.header, nav)).add(navigation));
        }

        public Header add(Tools tools) {
            return add(tools);
        }

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
    }

    public static class Tools extends ElementBuilder<HTMLDivElement, Tools>
            implements HtmlContent<HTMLDivElement, Tools> {

        private Tools() {
            super(div().css(component(page, Constants.header, tools)).element());
        }

        @Override
        public Tools that() {
            return this;
        }
    }

    public static class PageSidebar extends BaseComponent<HTMLDivElement, PageSidebar>
            implements HtmlContent<HTMLDivElement, PageSidebar> {

        PageSidebar(Navigation navigation, Theme theme) {
            super(div().css(CSS.component(page, Constants.sidebar)).element(), "PageSidebar");
            add(div().css(component(page, Constants.sidebar, body))
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

    public static class Section extends BaseComponent<HTMLElement, Section>
            implements HtmlContent<HTMLElement, Section> {

        Section() {
            super(Elements.section().css(component(page, mainSection)).element(), "PageSection");
        }

        @Override
        public Section that() {
            return this;
        }
    }
}
