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

import java.util.function.Function;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.Callback;
import org.jboss.elemento.ResizeObserverCleanup;
import org.jboss.elemento.Scheduler;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.skiptocontent.SkipToContent;
import org.patternfly.core.ObservableValue;
import org.patternfly.handler.ResizeHandler;
import org.patternfly.style.Breakpoint;
import org.patternfly.style.Classes;
import org.patternfly.style.Rect;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.resizeObserver;
import static org.patternfly.core.ObservableValue.ov;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.page;

/**
 * The page component is used to define the basic layout of a page with either vertical or horizontal navigation.
 * <p>
 * {@snippet class = PageDemo region = page}
 *
 * @see <a href="https://www.patternfly.org/components/page/html">https://www.patternfly.org/components/page/html</a>
 */
public class Page extends BaseComponent<HTMLDivElement, Page> implements Attachable {

    // ------------------------------------------------------ factory

    private static Page instance;

    /** Create or returns the page singleton. */
    public static Page page() {
        if (instance == null) {
            instance = new Page();
        }
        return instance;
    }

    // ------------------------------------------------------ instance

    private final ObservableValue<Rect> rect;
    private SkipToContent skipToContent;
    private Masthead masthead;
    private PageSidebar sidebar;
    private PageMain main;
    private ResizeObserverCleanup cleanup;
    private Function<Integer, Breakpoint> breakpointFn;
    private Function<Integer, Breakpoint> verticalBreakpointFn;
    private ResizeHandler<Page> resizeHandler;

    protected Page() {
        super(ComponentType.Page, div().css(component(page)).element());
        this.rect = ov(new Rect()).subscribe(this::onChangedRect);
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        Callback resizeCallback = Scheduler.debounce(250, this::onResize);
        cleanup = resizeObserver(element(), () -> {
            if (resizeHandler != null) {
                resizeHandler.onResize(this);
            }
            resizeCallback.call();
        });
        onResize();
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (cleanup != null) {
            cleanup.cleanup();
        }
    }

    // ------------------------------------------------------ add

    /** Adds the {@link SkipToContent} component as first element and removes the previous one (if any). */
    public Page addSkipToContent(SkipToContent skipToContent) {
        return add(skipToContent);
    }

    /** Adds the {@link SkipToContent} component as first element and removes the previous one (if any). */
    public Page add(SkipToContent skipToContent) {
        failSafeRemoveFromParent(this.skipToContent);
        this.skipToContent = skipToContent;
        insertFirst(element(), this.skipToContent);
        return this;
    }

    /** Adds the {@link Masthead} component and removes the previous one (if any). */
    public Page addMasthead(Masthead masthead) {
        return add(masthead);
    }

    /** Adds the {@link Masthead} component and removes the previous one (if any). */
    public Page add(Masthead masthead) {
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
        return add(sidebar);
    }

    /** Adds the {@link PageSidebar} component and removes the previous one (if any). */
    public Page add(PageSidebar sidebar) {
        failSafeRemoveFromParent(this.sidebar);
        this.sidebar = sidebar;
        if (main != null) {
            insertBefore(this.sidebar, main.element());
        } else {
            add(sidebar.element());
        }
        return this;
    }

    /** Adds the {@link PageMain} component and removes the previous one (if any). */
    public Page addMain(PageMain main) {
        return add(main);
    }

    /** Adds the {@link PageMain} component and removes the previous one (if any). */
    public Page add(PageMain main) {
        failSafeRemoveFromParent(this.main);
        this.main = main;
        return add(main.element());
    }

    // ------------------------------------------------------ builder

    /**
     * The page resize observer uses the breakpoints returned from this function when adding the
     * {@code pf-m-breakpoint-[default|sm|md|lg|xl|2xl]} class. You can override the default function
     * {@link Breakpoint#breakpoint(int)} to return breakpoints at different sizes than the default.
     */
    public Page breakpoint(Function<Integer, Breakpoint> breakpointFn) {
        this.breakpointFn = breakpointFn;
        return this;
    }

    /**
     * The page resize observer uses the breakpoints returned from this function when adding the
     * {@code pf-m-height-breakpoint-[default|sm|md|lg|xl|2xl]} class. You can override the default function
     * {@link Breakpoint#verticalBreakpoint(int)} to return breakpoints at different sizes than the default.
     */
    public Page verticalBreakpoint(Function<Integer, Breakpoint> verticalBreakpointFn) {
        this.verticalBreakpointFn = verticalBreakpointFn;
        return this;
    }

    @Override
    public Page that() {
        return this;
    }

    // ------------------------------------------------------ events

    public Page onResize(ResizeHandler<Page> resizeHandler) {
        this.resizeHandler = resizeHandler;
        return this;
    }

    // ------------------------------------------------------ api

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

    // ------------------------------------------------------ internal

    boolean underXl() {
        return element().clientWidth < Breakpoint.xl.widthValue;
    }

    private void onResize() {
        int width = element().clientWidth;
        int height = element().clientHeight;
        rect.set(new Rect(width, height));
    }

    private void onChangedRect(Rect current, Rect previous) {
        // if it's already present, it won't be added again
        css(modifier(Classes.resizeObserver));

        Breakpoint previousBreakpoint = breakpointFn != null ? breakpointFn.apply(previous.width)
                : Breakpoint.breakpoint(previous.width);
        Breakpoint currentBreakpoint = breakpointFn != null ? breakpointFn.apply(current.width)
                : Breakpoint.breakpoint(current.width);
        if (previousBreakpoint != currentBreakpoint) {
            classList().remove(modifier("breakpoint-" + previousBreakpoint.value));
            classList().add(modifier("breakpoint-" + currentBreakpoint.value));
        }

        Breakpoint previousVerticalBreakpoint = breakpointFn != null ? verticalBreakpointFn.apply(previous.height)
                : Breakpoint.verticalBreakpoint(previous.height);
        Breakpoint currentVerticalBreakpoint = breakpointFn != null ? verticalBreakpointFn.apply(current.height)
                : Breakpoint.verticalBreakpoint(current.height);
        if (previousVerticalBreakpoint != currentVerticalBreakpoint) {
            classList().remove(modifier("height-breakpoint-" + previousVerticalBreakpoint.value));
            classList().add(modifier("height-breakpoint-" + currentVerticalBreakpoint.value));
        }

        // resize (sub) components
        if (masthead != null) {
            masthead.onPageResize(current, previous);
        }
        if (sidebar != null) {
            sidebar.onPageResize(current, previous);
        }
    }
}
