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
package org.patternfly.component.page;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.page;

/**
 * The page component is used to define the basic layout of a page with either vertical or horizontal navigation.
 * <p>
 * {@snippet class = PageDemo region = page}
 *
 * @see <a href="https://www.patternfly.org/components/page/html">https://www.patternfly.org/components/page/html</a>
 */
public class Page extends BaseComponent<HTMLDivElement, Page> {

    // ------------------------------------------------------ factory methods

    private static Page instance;

    /** Create or returns the page singleton. */
    public static Page page() {
        if (instance == null) {
            instance = new Page();
        }
        return instance;
    }

    // ------------------------------------------------------ instance

    private SkipToContent skipToContent;
    private Masthead masthead;
    private PageSidebar sidebar;
    private PageMain main;

    protected Page() {
        super(div().css(component(page)).element(), ComponentType.Page);
    }

    @Override
    public Page that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    /** Adds the {@link SkipToContent} component as first element and removes the previous one (if any). */
    public Page addSkipToContent(SkipToContent skipToContent) {
        failSafeRemoveFromParent(this.skipToContent);
        this.skipToContent = skipToContent;
        insertFirst(element(), this.skipToContent);
        return this;
    }

    /** Adds the {@link Masthead} component and removes the previous one (if any). */
    public Page addMasthead(Masthead masthead) {
        failSafeRemoveFromParent(this.masthead);
        this.masthead = masthead;
        if (skipToContent != null) {
            insertAfter(this.masthead, skipToContent.element());
        } else {
            insertFirst(element(), this.masthead);
        }
        return this;
    }

    /** Adds the {@link PageSidebar} component and removes the previous one (if any). */
    public Page addSidebar(PageSidebar sidebar) {
        failSafeRemoveFromParent(this.sidebar);
        this.sidebar = sidebar;
        if (main != null) {
            insertBefore(this.sidebar, main.element());
        } else {
            add(this.sidebar.element());
        }
        return this;
    }

    /** Adds the {@link PageMain} component and removes the previous one (if any). */
    public Page addMain(PageMain main) {
        failSafeRemoveFromParent(this.main);
        this.main = main;
        return add(main.element());
    }

    // ------------------------------------------------------ getters

    /**
     * Returns the current {@link Masthead} or {@code null} if no masthead has been defined yet.
     */
    public Masthead masthead() {
        return masthead;
    }

    /**
     * Returns the current {@link PageSidebar} or {@code null} if no sidebar has been defined yet.
     */
    public PageSidebar sidebar() {
        return sidebar;
    }

    /**
     * Returns the current {@link PageMain} or {@code null} if no main has been defined yet.
     */
    @SuppressWarnings("ConfusingMainMethod")
    public PageMain main() {
        return main;
    }
}
