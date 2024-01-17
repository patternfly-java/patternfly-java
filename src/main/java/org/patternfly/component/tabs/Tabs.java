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
package org.patternfly.component.tabs;

import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.ListIterator;
import java.util.Map;
import java.util.function.Function;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.core.Expandable;
import org.patternfly.core.LanguageDirection;
import org.patternfly.core.Logger;
import org.patternfly.core.ObservableValue;
import org.patternfly.handler.CloseHandler;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.handler.SelectHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Breakpoints;
import org.patternfly.style.Classes;
import org.patternfly.style.Inset;
import org.patternfly.style.Modifiers.Fill;
import org.patternfly.style.Modifiers.PageInsets;
import org.patternfly.style.Modifiers.Secondary;
import org.patternfly.style.Modifiers.Vertical;

import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;
import elemental2.dom.MutationRecord;
import elemental2.dom.Node;
import elemental2.dom.NodeList;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static elemental2.dom.DomGlobal.window;
import static org.jboss.elemento.Elements.asHtmlElement;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.htmlElements;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.isElementInView;
import static org.jboss.elemento.Elements.isVisible;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.stream;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.resize;
import static org.jboss.elemento.EventType.scroll;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.component.tabs.OverflowTab.overflowTab;
import static org.patternfly.component.tabs.TabsToggle.tabsToggle;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.LanguageDirection.languageDirection;
import static org.patternfly.core.ObservableValue.ov;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.scrollButton;
import static org.patternfly.style.Classes.scrollable;
import static org.patternfly.style.Modifiers.toggleModifier;
import static org.patternfly.style.PredefinedIcon.angleLeft;
import static org.patternfly.style.PredefinedIcon.angleRight;

/**
 * Tabs allow users to navigate between views within the same page or context.
 *
 * @see <a href= "https://www.patternfly.org/components/tabs">https://www.patternfly.org/components/tabs</a>
 */
public class Tabs extends BaseComponentFlat<HTMLElement, Tabs> implements
        Attachable,
        Expandable<HTMLElement, Tabs>,
        Fill<HTMLElement, Tabs>,
        PageInsets<HTMLElement, Tabs>,
        Secondary<HTMLElement, Tabs>,
        Vertical<HTMLElement, Tabs> {

    // ------------------------------------------------------ factory

    public static Tabs tabs() {
        return new Tabs(div());
    }

    public static <E extends HTMLElement> Tabs tabs(HTMLContainerBuilder<E> builder) {
        return new Tabs(builder);
    }

    // ------------------------------------------------------ instance

    private final Map<String, Tab> tabs;
    private final HTMLContainerBuilder<? extends HTMLElement> mainContainer;
    private final HTMLContainerBuilder<HTMLButtonElement> scrollBack;
    private final HTMLContainerBuilder<HTMLUListElement> tabsContainer;
    private final HTMLContainerBuilder<HTMLButtonElement> scrollForward;

    private final ObservableValue<Boolean> enableScrollButtons;
    private final ObservableValue<Boolean> showScrollButtons;
    private final ObservableValue<Boolean> renderScrollButtons;
    private final ObservableValue<Boolean> disableBackScrollButton;
    private final ObservableValue<Boolean> disableForwardScrollButton;
    private final ObservableValue<Integer> overflowingTabCount;

    private double scrollTimeout;
    private boolean expandable;
    private boolean lightTabs;
    private boolean overflowHorizontal;
    private boolean vertical;

    private Tab currentTab;
    private OverflowTab overflowTab;
    private TabsToggle tabsToggle;

    private ComponentHandler<Tabs> addHandler;
    private ToggleHandler<Tabs> toggleHandler;
    private CloseHandler<Tab> closeHandler;
    private SelectHandler<Tab> selectHandler;
    private HandlerRegistration resizeHandler;
    private HandlerRegistration transitionEndHandler;

    <E extends HTMLElement> Tabs(HTMLContainerBuilder<E> builder) {
        super(ComponentType.Tabs, div().element());
        this.tabs = new LinkedHashMap<>();
        this.enableScrollButtons = ov(false);
        this.showScrollButtons = ov(false);
        this.renderScrollButtons = ov(false);
        this.disableBackScrollButton = ov(false);
        this.disableForwardScrollButton = ov(false);
        this.overflowingTabCount = ov(0);

        this.mainContainer = builder.css(component(Classes.tabs))
                .attr(role, "region")
                .add(scrollBack = button().css(component(Classes.tabs, scrollButton))
                        .apply(b -> b.disabled = true)
                        .aria(hidden, true)
                        .aria(label, "Scroll back")
                        .on(click, e -> scrollBack())
                        .add(inlineIcon(angleLeft)))
                .add(tabsContainer = ul().css(component(Classes.tabs, list))
                        .attr(role, "tablist")
                        .on(scroll, e -> updateScrollAndOverflowState()))
                .add(scrollForward = button().css(component(Classes.tabs, scrollButton))
                        .apply(b -> b.disabled = true)
                        .aria(hidden, true)
                        .aria(label, "Scroll forward")
                        .on(click, e -> scrollForward())
                        .add(inlineIcon(angleRight)));

        element().appendChild(mainContainer.element());
        storeFlatComponent();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (vertical) {
            if (overflowHorizontal) {
                Logger.unsupported(componentType(), mainContainer.element(),
                        "Horizontal overflow is not supported for vertical tabs!");
            }
            attachVertical();
        } else {
            if (expandable) {
                Logger.unsupported(componentType(), mainContainer.element(),
                        "Expandable is not supported for horizontal tabs!");
            }
            if (overflowHorizontal) {
                attachOverflow();
            } else {
                attachHorizontal();
            }
        }

        if (tabs.isEmpty()) {
            Logger.missing(componentType(), mainContainer.element(), "No tabs given!");
        } else {
            attachTabs();
            updateScrollAndOverflowState();
        }
    }

    private void attachVertical() {
        failSafeRemoveFromParent(scrollBack);
        failSafeRemoveFromParent(scrollForward);
        if (expandable) {
            TabsToggle tt = failSafeTabsToggle();
            if (tt.noText()) {
                if (!tabs.isEmpty()) {
                    tt.text(tabs.values().iterator().next().text());
                }
                onSelect((e, tab, selected) -> tt.text(tab.textElement.textContent));
            }
            insertBefore(tt.element(), tabsContainer.element());
        }
    }

    private void attachHorizontal() {
        enableScrollButtons.subscribe((current, previous) -> {
            if (!previous && current) {
                renderScrollButtons.change(true);
                setTimeout(__ -> {
                    transitionEndHandler = bind(scrollBack, "transitionend", e -> hideScrollButtons());
                    showScrollButtons.set(true);
                }, 100);
            } else if (previous && !current) {
                showScrollButtons.change(false);
            }
        });
        showScrollButtons.subscribe((current, __) -> mainContainer.classList().toggle(modifier(scrollable), current));
        renderScrollButtons.subscribe((current, __) -> {
            setVisible(scrollBack, current);
            setVisible(scrollForward, current);
        });
        disableBackScrollButton.subscribe((current, __) -> {
            scrollBack.element().disabled = current;
            scrollBack.aria(Aria.disabled, current);
        });
        disableForwardScrollButton.subscribe((current, __) -> {
            scrollForward.element().disabled = current;
            scrollForward.aria(Aria.disabled, current);
        });
        resizeHandler = bind(window, resize.name, e -> updateScrollAndOverflowState());
    }

    private void attachOverflow() {
        failSafeRemoveFromParent(scrollBack);
        failSafeRemoveFromParent(scrollForward);
        if (overflowTab.showCount()) {
            overflowingTabCount.subscribe((current, previous) -> {
                overflowTab.count(current);
            });
        }
        resizeHandler = bind(window, resize.name, e -> updateScrollAndOverflowState());
    }

    private void attachTabs() {
        for (Tab tab : tabs.values()) {
            if (tab.tooltip != null) {
                tab.tooltip.trigger(tab.button.element());
                element().appendChild(tab.tooltip.element());
            }
            addTabToDOM(tab);
        }
        if (overflowHorizontal) {
            tabsContainer.add(overflowTab);
            LinkedList<Tab> ll = new LinkedList<>(tabs.values());
            for (ListIterator<Tab> iterator = ll.listIterator(ll.size());
                    iterator.hasPrevious() && !isElementInView(tabsContainer, overflowTab, false); ) {
                Tab tab = iterator.previous();
                setVisible(tab, false);
                overflowTab.push(tab);
            }
            overflowTab.buildMenu();
        }
        tabs.values().iterator().next().select(true);
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        clearTimeout(scrollTimeout);
        if (resizeHandler != null) {
            resizeHandler.removeHandler();
        }
        if (transitionEndHandler != null) {
            transitionEndHandler.removeHandler();
        }
        if (overflowTab != null) {
            overflowTab.detach();
        }
    }

    // ------------------------------------------------------ add

    public <T> Tabs addTabs(Iterable<T> items, Function<T, Tab> display) {
        boolean attached = isAttached(element());
        for (T item : items) {
            Tab tab = display.apply(item);
            tabs.put(tab.id, tab);
            if (attached) {
                addTabToDOM(tab);
            }
        }
        if (attached) {
            updateScrollAndOverflowState();
        }
        return this;
    }

    public Tabs addTab(Tab tab) {
        return add(tab);
    }

    // override to assure internal wiring
    public Tabs add(Tab tab) {
        tabs.put(tab.id, tab);
        if (isAttached(element())) {
            addTabToDOM(tab);
            updateScrollAndOverflowState();
        }
        return this;
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #box(boolean) box(true)} */
    public Tabs box() {
        return box(true);
    }

    /** Enables box styling to the tab component */
    public Tabs box(boolean box) {
        return toggleModifier(this, mainContainer.element(), Classes.box, box);
    }

    /**
     * Enable expandable vertical tabs at various breakpoints ({@link #vertical()} should be set to true for this to work).
     */
    public Tabs expandable(Breakpoints<ExpandableModifier> expandable) {
        this.expandable = expandable.hasValue(ExpandableModifier.expandable);
        mainContainer.classList().add(expandable.modifiers());
        return this;
    }

    @Override
    public Tabs fill(boolean fill) {
        return toggleModifier(this, mainContainer.element(), Classes.fill, fill);
    }

    /** Same as {@linkplain #lightTabs(boolean) lightTabs(true)} */
    public Tabs lightTabs() {
        return lightTabs(true);
    }

    /** Enables lightTabs styling to the tab component */
    public Tabs lightTabs(boolean lightTabs) {
        this.lightTabs = lightTabs;
        if (lightTabs) {
            mainContainer.classList().add(modifier("color-scheme--light-300"));
        } else {
            mainContainer.classList().remove(modifier("color-scheme--light-300"));
        }
        if (isAttached(this)) {
            for (Tab tab : tabs.values()) {
                if (tab.content != null) {
                    tab.content.classList().toggle(modifier("light-300"), lightTabs);
                }
            }
        }
        return this;
    }

    /**
     * Insets at various breakpoints.
     */
    public Tabs inset(Breakpoints<Inset> inset) {
        mainContainer.classList().add(inset.modifiers());
        return this;
    }

    /** Same as {@linkplain #noBorderBottom(boolean) noBorderBottom(true)} */
    public Tabs noBorderBottom() {
        return noBorderBottom(true);
    }

    /** Disables border bottom tab styling on tabs. Defaults to false. To remove the bottom border, set this prop to true. */
    public Tabs noBorderBottom(boolean noBorderBottom) {
        return toggleModifier(this, mainContainer.element(), Classes.noBorderBottom, noBorderBottom);
    }

    @Override
    public Tabs pageInsets(boolean pageInsets) {
        return toggleModifier(this, mainContainer.element(), Classes.pageInsets, pageInsets);
    }

    /**
     * Flag which places overflowing tabs into a menu triggered by the last tab. Unlike other flags, this can only be turned on,
     * but not off.
     */
    public Tabs overflowHorizontal() {
        return overflowHorizontal("More");
    }

    /**
     * Flag which places overflowing tabs into a menu triggered by the last tab. Unlike other flags, this can only be turned on,
     * but not off.
     */
    public Tabs overflowHorizontal(String overflowText) {
        overflowHorizontal = true;
        failSafeOverflowTab().text(overflowText);
        mainContainer.classList().add(modifier(Classes.overflow));
        return this;
    }

    /** Enables secondary styling to the tab component */
    @Override
    public Tabs secondary(boolean secondary) {
        return toggleModifier(this, mainContainer.element(), Classes.secondary, secondary);
    }

    /** Same as {@linkplain #showTabCount(boolean) showTabCount(true)} */
    public Tabs showTabCount() {
        return showTabCount(true);
    }

    /** Flag which shows the count of overflowing tabs when enabled */
    public Tabs showTabCount(boolean showTabCount) {
        failSafeOverflowTab().showCount(showTabCount);
        return this;
    }

    /**
     * Text that appears in the expandable toggle. If not set, the text of the selected tab is used.
     */
    public Tabs toggleText(String text) {
        failSafeTabsToggle().text(text);
        return this;
    }

    @Override
    public Tabs vertical(boolean vertical) {
        this.vertical = vertical;
        return toggleModifier(this, mainContainer.element(), Classes.vertical, vertical);
    }

    @Override
    public Tabs that() {
        return this;
    }

    // ------------------------------------------------------ aria

    /**
     * Provides an accessible label for the tabs. Labels should be unique for each set of tabs that are present on a page. When
     * component is set to nav, this prop should be defined to differentiate the tabs from other navigation regions on the
     * page.
     */
    public Tabs ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    /**
     * Aria-label for the add button.
     */
    public Tabs ariaAddLabel(String label) {
        // TODO
        return this;
    }

    /**
     * Aria-label for the back scroll button
     */
    public Tabs ariaScrollBackLabel(String label) {
        scrollBack.aria(Aria.label, label);
        return this;
    }

    /**
     * Aria-label for the forward scroll button
     */
    public Tabs ariaScrollForwardLabel(String label) {
        scrollForward.aria(Aria.label, label);
        return this;
    }

    /**
     * The aria label applied to the button which toggles the tab overflow menu
     */
    public Tabs ariaOverflowLabel(String label) {
        failSafeOverflowTab().ariaLabel(label);
        return this;
    }

    /**
     * Aria-label for the expandable toggle
     */
    public Tabs ariaToggleLabel(String label) {
        failSafeTabsToggle().ariaLabel(label);
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Callback for the add button. Passing this property inserts the add button.
     */
    public Tabs onAdd(ComponentHandler<Tabs> addHandler) {
        this.addHandler = addHandler;
        return this;
    }

    public Tabs onClose(CloseHandler<Tab> closeHandler) {
        this.closeHandler = closeHandler;
        return null;
    }

    public Tabs onSelect(SelectHandler<Tab> selectHandler) {
        this.selectHandler = selectHandler;
        return this;
    }

    public Tabs onToggle(ToggleHandler<Tabs> toggleHandler) {
        this.toggleHandler = toggleHandler;
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public boolean expanded() {
        return Expandable.expanded(mainContainer.element());
    }

    @Override
    public void collapse(boolean fireEvent) {
        if (tabsToggle != null) {
            Expandable.collapse(mainContainer.element(), tabsToggle.element(), null);
            if (fireEvent && toggleHandler != null) {
                toggleHandler.onToggle(new Event(""), this, false);
            }
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        if (tabsToggle != null) {
            Expandable.expand(mainContainer.element(), tabsToggle.element(), null);
            if (fireEvent && toggleHandler != null) {
                toggleHandler.onToggle(new Event(""), this, true);
            }
        }
    }

    public void select(String id) {
        if (id != null) {
            select(tabs.get(id));
        } else {
            Logger.undefined(componentType(), mainContainer.element(), "Cannot select tab: No tab id given.");
        }
    }

    public void select(Tab tab) {
        if (tab != null) {
            for (Tab t : tabs.values()) {
                if (tab.id.equals(t.id)) {
                    currentTab = t;
                    t.select(true);
                } else {
                    t.select(false);
                }
            }
            if (overflowHorizontal && isVisible(tab)) {
                overflowTab.unselect();
            }
            if (selectHandler != null) {
                selectHandler.onSelect(new Event(""), tab, true);
            }
        } else {
            Logger.undefined(componentType(), mainContainer.element(), "Cannot select tab: No tab given.");
        }
    }

    public Tab currentTab() {
        return currentTab;
    }

    public Tab tab(String id) {
        return tabs.get(id);
    }

    // ------------------------------------------------------ internal

    private void addTabToDOM(Tab tab) {
        addTabHandle(tab);
        if (tab.content != null) {
            addTabContent(tab);
        }
    }

    private void addTabHandle(Tab tab) {
        tabsContainer.add(tab);
    }

    void addTabContent(Tab tab) {
        tab.button.aria(Aria.controls, tab.contentId);
        tab.content.aria(labelledBy, tab.buttonId);
        if (lightTabs) {
            tab.content.classList().add(modifier("light-300"));
        }
        element().appendChild(tab.content.element());
        tab.content.element().hidden = true;
    }

    private void updateScrollAndOverflowState() {
        // debounce scroll event!
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout((__) -> {
            if (!vertical && !overflowHorizontal) {
                boolean overflowOnLeft = !isElementInView(tabsContainer,
                        ((HTMLElement) tabsContainer.element().firstElementChild), false);
                boolean overflowOnRight = !isElementInView(tabsContainer,
                        ((HTMLElement) tabsContainer.element().lastElementChild), false);
                enableScrollButtons.change(overflowOnLeft || overflowOnRight);
                disableBackScrollButton.change(!overflowOnLeft);
                disableForwardScrollButton.change(!overflowOnRight);
            }
            if (overflowHorizontal) {
                overflowingTabCount.change(countOverflowingTabs());
            }
        }, 100);
    }

    private void hideScrollButtons() {
        if (!enableScrollButtons.get() && !showScrollButtons.get() && renderScrollButtons.get()) {
            renderScrollButtons.change(false);
        }
    }

    private void scrollBack() {
        HTMLElement firstElementInView = null;
        HTMLElement lastElementOutOfView = null;
        NodeList<Node> children = tabsContainer.element().childNodes;
        for (int i = 0; i < children.length && firstElementInView == null; i++) {
            HTMLElement child = (HTMLElement) children.item(i);
            if (isElementInView(tabsContainer, child, false)) {
                firstElementInView = child;
                lastElementOutOfView = (HTMLElement) children.item(i - 1);
            }
        }
        if (lastElementOutOfView != null) {
            if (languageDirection(element()) == LanguageDirection.ltr) {
                tabsContainer.element().scrollLeft -= lastElementOutOfView.scrollWidth;
            } else {
                tabsContainer.element().scrollLeft += lastElementOutOfView.scrollWidth;
            }
        }
    }

    private void scrollForward() {
        HTMLElement lastElementInView = null;
        HTMLElement firstElementOutOfView = null;
        NodeList<Node> children = tabsContainer.element().childNodes;
        for (int i = children.length - 1; i >= 0 && lastElementInView == null; i--) {
            HTMLElement child = (HTMLElement) children.item(i);
            if (isElementInView(tabsContainer, child, false)) {
                lastElementInView = child;
                firstElementOutOfView = (HTMLElement) children.item(i + 1);
            }
        }
        if (firstElementOutOfView != null) {
            if (languageDirection(element()) == LanguageDirection.ltr) {
                tabsContainer.element().scrollLeft += firstElementOutOfView.scrollWidth;
            } else {
                tabsContainer.element().scrollLeft -= firstElementOutOfView.scrollWidth;
            }
        }
    }

    private int countOverflowingTabs() {
        return (int) stream(tabsContainer)
                .filter(htmlElements())
                .map(asHtmlElement())
                .filter(e -> !isElementInView(tabsContainer, e, false))
                .count();
    }

    private OverflowTab failSafeOverflowTab() {
        if (overflowTab == null) {
            overflowTab = overflowTab();
        }
        return overflowTab;
    }

    private TabsToggle failSafeTabsToggle() {
        if (tabsToggle == null) {
            tabsToggle = tabsToggle();
        }
        return tabsToggle;
    }
}
