/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.components;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.ElementBuilder;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HtmlContent;
import org.jboss.elemento.HtmlContentBuilder;
import org.jboss.elemento.Id;
import org.jboss.elemento.IsElement;
import org.patternfly.resources.CSS;
import org.patternfly.resources.Constants;
import org.patternfly.resources.Theme;

import elemental2.dom.Element;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MediaQueryList;
import elemental2.dom.MutationRecord;
import elemental2.dom.Node;

import static elemental2.dom.DomGlobal.window;
import static org.jboss.elemento.Elements.*;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.*;
import static org.patternfly.resources.Constants.nav;
import static org.patternfly.resources.Constants.toggle;
import static org.patternfly.resources.Theme.DARK;

/**
 * PatternFly page component
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/page">https://www.patternfly.org/v4/documentation/core/components/page</a>
 */
public class Page extends BaseComponent<HTMLDivElement, Page> implements HtmlContent<HTMLDivElement, Page>, Attachable {

    // ------------------------------------------------------ factory methods

    private static Page instance;

    /** Create or returns the page singleton. */
    public static Page page() {
        if (instance == null) {
            instance = new Page();
        }
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

    public static PageSidebar sidebarDark() {
        return new PageSidebar(Theme.DARK);
    }

    public static PageSidebar sidebar(Theme theme) {
        return new PageSidebar(theme);
    }

    public static Main main(String id) {
        return new Main(id);
    }

    public static Section section() {
        return new Section();
    }

    // ------------------------------------------------------ page instance

    private final MediaQueryList mediaQueryList;
    private Header header;
    private PageSidebar sidebar;
    private Navigation navigation;
    private Main main;

    protected Page() {
        super(div().css(component(page)).element(), "Page");
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

    /** Adds the given header and removes the previous one (if any). */
    public Page add(Header header) {
        failSafeRemoveFromParent(this.header);
        this.header = header;
        insertFirst(element, this.header);
        return this;
    }

    /** Adds the given sidebar and removes the previous one (if any). */
    public Page add(PageSidebar sidebar) {
        failSafeRemoveFromParent(this.sidebar);
        this.sidebar = sidebar;
        if (main != null) {
            insertBefore(this.sidebar, main.element());
        } else {
            add(this.sidebar.element());
        }
        if (header != null) {
            header.registerSidebar(this.sidebar);
        }
        onResize(mediaQueryList);
        return this;
    }

    /** Adds the main container. */
    public Page add(Main main) {
        failSafeRemoveFromParent(this.main);
        this.main = main;
        return add(main.element());
    }

    public void removeSidebar() {
        failSafeRemoveFromParent(sidebar);
        sidebar = null;
        if (header != null) {
            header.unregisterSidebar();
        }
    }

    public Header header() {
        return header;
    }

    public PageSidebar sidebar() {
        return sidebar;
    }

    public Navigation navigation() {
        return navigation;
    }

    public Main main() {
        return main;
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

    public static class Header extends BaseComponent<HTMLElement, Header> implements HtmlContent<HTMLElement, Header> {

        private final HTMLDivElement toggleContainer;
        private final Button toggleButton;
        private Navigation navigation;
        private Tools tools;
        private PageSidebar sidebar;

        protected Header(HTMLElement brand, String homeLink) {
            super(Elements.header().css(CSS.component(page, Constants.header)).attr(role, banner).element(), "PageHeader");
            add(div().css(component(page, Constants.header, Constants.brand))
                    .add(toggleContainer = div().css(component(page, Constants.header, Constants.brand, toggle))
                            .add(toggleButton = Button.icon(icon(fas("bars")), "Global Navigation").aria(expanded, false_)
                                    .onClick(() -> {
                                        if (sidebar != null) {
                                            sidebar.toggle();
                                        }
                                    }))
                            .element())
                    .add(a(homeLink).css(component(page, Constants.header, Constants.brand, link)).add(brand)));
            hideSidebarToggle();
        }

        @Override
        public Header that() {
            return this;
        }

        // ------------------------------------------------------ public API

        /** Adds the given navigation and removes the previous one (if any). */
        public Header add(Navigation navigation) {
            failSafeRemoveFromParent(this.navigation);
            this.navigation = navigation;
            return add(div().css(component(page, Constants.header, nav)).add(navigation));
        }

        /** Adds the given tools and removes the previous one (if any). */
        public Header add(Tools tools) {
            failSafeRemoveFromParent(this.tools);
            this.tools = tools;
            return add(tools.element());
        }

        public Navigation getNavigation() {
            return navigation;
        }

        public Tools getTools() {
            return tools;
        }

        // ------------------------------------------------------ internals

        void registerSidebar(PageSidebar sidebar) {
            if (sidebar != null) {
                this.sidebar = sidebar;
                String sidebarId = sidebar.element().id;
                if (sidebarId == null || sidebarId.length() == 0) {
                    sidebarId = Id.unique(Constants.sidebar);
                    sidebar.id(sidebarId);
                }
                toggleButton.aria(expanded, false_);
                toggleButton.aria(controls, sidebarId);
            }
        }

        void unregisterSidebar() {
            this.sidebar = null;
            toggleButton.aria(expanded, false_);
            toggleButton.element().removeAttribute("aria-controls");
            hideSidebarToggle();
        }

        void showSidebarToggle() {
            setVisible(toggleContainer, true);
        }

        void hideSidebarToggle() {
            setVisible(toggleContainer, false);
        }
    }

    public static class Tools extends ElementBuilder<HTMLDivElement, Tools> implements HtmlContent<HTMLDivElement, Tools> {

        protected Tools() {
            super(div().css(component(page, Constants.header, tools)).element());
        }

        @Override
        public Tools that() {
            return this;
        }
    }

    public static class PageSidebar extends BaseComponent<HTMLElement, PageSidebar>
            implements HtmlContent<HTMLElement, PageSidebar> {

        private final Theme theme;
        private final HtmlContentBuilder<HTMLDivElement> body;
        private Navigation navigation;

        protected PageSidebar(Theme theme) {
            super(aside().css(CSS.component(page, Constants.sidebar)).element(), "PageSidebar");
            this.theme = theme;
            if (theme == DARK) {
                css(modifier(dark));
            }
            add(body = div().css(component(page, Constants.sidebar, Constants.body)));
        }

        @Override
        public PageSidebar that() {
            return this;
        }

        // ------------------------------------------------------ public API

        /**
         * Adds the navigation to the sidebar's body and removes the previous one (if any). Shortcut for {@code
         * getBody().add(navigation)}.
         */
        public PageSidebar add(Navigation navigation) {
            failSafeRemoveFromParent(this.navigation);
            this.navigation = navigation;
            if (theme == DARK) {
                navigation.css(modifier(dark));
            }
            body.add(navigation);
            return that();
        }

        public HtmlContentBuilder<HTMLDivElement> getBody() {
            return body;
        }

        public Navigation getNavigation() {
            return navigation;
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

    public static class Main extends BaseComponent<HTMLElement, Main> implements HtmlContent<HTMLElement, Main> {

        protected Main(String id) {
            super(Elements.main().id(id).css(component(page, Constants.main)).attr(role, Constants.main).attr(tabindex, "-1")
                    .element(), "PageMain");
        }

        @Override
        public Main that() {
            return this;
        }

        // ------------------------------------------------------ public API

        public Main replace(Node element) {
            removeChildrenFrom(element());
            return add(element);
        }

        public Main replace(IsElement<?> element) {
            removeChildrenFrom(element());
            return add(element);
        }

        public Main replaceAll(Node... nodes) {
            removeChildrenFrom(element());
            return addAll(nodes);
        }

        public Main replaceAll(Element... elements) {
            removeChildrenFrom(element());
            return addAll(elements);
        }

        public Main replaceAll(HTMLElement... elements) {
            removeChildrenFrom(element());
            return addAll(elements);
        }

        public Main replaceAll(IsElement<?>... elements) {
            removeChildrenFrom(element());
            return addAll(elements);
        }

        public Main replaceAll(Iterable<?> elements) {
            removeChildrenFrom(element());
            return addAll(elements);
        }
    }

    public static class Section extends BaseComponent<HTMLElement, Section> implements HtmlContent<HTMLElement, Section> {

        protected Section() {
            super(Elements.section().css(component(page, mainSection)).element(), "PageSection");
        }

        @Override
        public Section that() {
            return this;
        }
    }
}
