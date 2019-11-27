package org.patternfly.client.components;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MediaQueryList;
import elemental2.dom.MutationRecord;
import org.jboss.gwt.elemento.core.Attachable;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.patternfly.client.resources.Constants;
import org.patternfly.client.resources.Theme;

import static elemental2.dom.DomGlobal.window;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.Constants.page;
import static org.patternfly.client.resources.Constants.role;
import static org.patternfly.client.resources.Constants.tabindex;

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

    // ------------------------------------------------------ page instance

    private final HTMLElement main;
    private final MediaQueryList mediaQueryList;
    private PageHeader header;
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

    public Page header(PageHeader header) {
        failSafeRemoveFromParent(this.header);
        this.header = header;
        insertFirst(element, this.header);
        return this;
    }

    /** Shortcut for {@code add(new PageSidebar(navigation))} */
    public Page sidebar(Navigation navigation) {
        return sidebar(PageSidebar.pageSidebar(navigation));
    }

    /** Shortcut for {@code add(new PageSidebar(navigation, theme))} */
    public Page sidebar(Navigation navigation, Theme theme) {
        return sidebar(PageSidebar.pageSidebar(navigation, theme));
    }

    public Page sidebar(PageSidebar sidebar) {
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

    public Page section(PageSection firstSection, PageSection... moreSections) {
        removeChildrenFrom(main);
        main.appendChild(firstSection.element());
        if (moreSections != null) {
            for (PageSection section : moreSections) {
                main.appendChild(section.element());
            }
        }
        return this;
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
}
