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

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.function.Function;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.core.LanguageDirection;
import org.patternfly.core.ObservableValue;
import org.patternfly.handler.CloseHandler;
import org.patternfly.handler.SelectHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Breakpoints;
import org.patternfly.style.Classes;
import org.patternfly.style.ExpandableModifier;
import org.patternfly.style.Inset;
import org.patternfly.style.Modifiers.Box;
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
import static java.util.Collections.reverse;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.isElementInView;
import static org.jboss.elemento.Elements.isVisible;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.resize;
import static org.jboss.elemento.EventType.scroll;
import static org.patternfly.component.tabs.OverflowTab.overflowTab;
import static org.patternfly.component.tabs.TabsToggle.tabsToggle;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.LanguageDirection.languageDirection;
import static org.patternfly.core.ObservableValue.ov;
import static org.patternfly.core.Roles.region;
import static org.patternfly.core.Roles.tablist;
import static org.patternfly.icon.IconSets.fas.angleLeft;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.icon.IconSets.fas.plus;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.scrollButton;
import static org.patternfly.style.Classes.scrollable;
import static org.patternfly.style.Modifiers.toggleModifier;

/**
 * Tabs allow users to navigate between views within the same page or context.
 *
 * @see <a href= "https://www.patternfly.org/components/tabs">https://www.patternfly.org/components/tabs</a>
 */
public class Tabs extends BaseComponentFlat<HTMLElement, Tabs> implements
        Attachable,
        Box<HTMLElement, Tabs>,
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

    private static final Logger logger = Logger.getLogger(Tabs.class.getName());

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

    private double scrollTimeout;
    private boolean closeable;
    private boolean expandable;
    private boolean lightTabs;
    private boolean noInitialSelection;
    private boolean overflowHorizontal;
    private boolean vertical;

    private Tab currentTab;
    private OverflowTab overflowTab;
    private TabsToggle tabsToggle;
    private Button addButton;

    private Function<Tabs, Tab> addHandler;
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

        this.mainContainer = builder.css(component(Classes.tabs))
                .attr(role, region)
                .add(scrollBack = button().css(component(Classes.tabs, scrollButton))
                        .apply(b -> b.disabled = true)
                        .aria(hidden, true)
                        .aria(label, "Scroll back")
                        .on(click, e -> scrollBack())
                        .add(angleLeft()))
                .add(tabsContainer = ul().css(component(Classes.tabs, list))
                        .attr(role, tablist)
                        .on(scroll, e -> updateState()))
                .add(scrollForward = button().css(component(Classes.tabs, scrollButton))
                        .apply(b -> b.disabled = true)
                        .aria(hidden, true)
                        .aria(label, "Scroll forward")
                        .on(click, e -> scrollForward())
                        .add(angleRight()));

        element().appendChild(mainContainer.element());
        storeFlatComponent();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (vertical) {
            if (overflowHorizontal) {
                logger.warn("Horizontal overflow is not supported for vertical tabs %o", element());
            }
            attachVertical();
        } else {
            if (expandable) {
                logger.warn("Expandable is not supported for horizontal tabs %o", element());
            }
            if (overflowHorizontal) {
                if (addHandler != null) {
                    logger.warn("Overflow tabs %o should not have an onAdd() handler.", element());
                }
                attachOverflow();
            } else {
                attachHorizontal();
            }
            resizeHandler = bind(window, resize.name, e -> updateState());
        }

        if (tabs.isEmpty()) {
            logger.error("No tabs given for %o", element());
        } else {
            attachTabs();
            updateState();
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
                onSelect((e, tab, selected) -> tt.text(tab.text()));
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
    }

    private void attachOverflow() {
        failSafeRemoveFromParent(scrollBack);
        failSafeRemoveFromParent(scrollForward);
    }

    private void attachTabs() {
        for (Tab tab : tabs.values()) {
            addTabToDOM(tab);
        }
        if (overflowHorizontal) {
            tabsContainer.add(overflowTab);
        }
        if (!noInitialSelection) {
            tabs.values().iterator().next().select(true);
        }
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
        for (Tab tab : tabs.values()) {
            // help and tooltip are appended to the body!
            failSafeRemoveFromParent(tab.help);
            failSafeRemoveFromParent(tab.tooltip);
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
            updateState();
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
            updateState();
        }
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public Tabs box(boolean box) {
        return toggleModifier(this, mainContainer.element(), Classes.box, box);
    }

    public Tabs closeable() {
        this.closeable = true;
        return closeable(null);
    }

    public Tabs closeable(CloseHandler<Tab> closeHandler) {
        this.closeable = true;
        this.closeHandler = closeHandler;
        return this;
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

    /** By default, the first tab is selected initially. Call this method to disable thi default behaviour. */
    public Tabs noInitialSelection() {
        this.noInitialSelection = true;
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
        if (addButton != null) {
            addButton.aria(Aria.label, label);
        } else {
            logger.error("Unable to set aria add label for tabs %o. Please make call onAdd() first.", element());
        }
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
    public Tabs onAdd(Function<Tabs, Tab> addHandler) {
        if (addButton == null) {
            insertAfter(span().css(component(Classes.tabs, Classes.add))
                    .add(addButton = Button.button().plain().icon(plus())
                            .aria(label, "Add new tab")
                            .on(click, e -> addTab(addHandler.apply(this))))
                    .element(), tabsContainer.element());
        }
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

    public void close(String id) {
        if (id != null) {
            close(tabs.get(id));
        } else {
            logger.error("Cannot close tab in tabs %o: No tab id given.", element());
        }
    }

    public void close(Tab tab) {
        if (tab != null) {
            tabs.remove(tab.id);
            failSafeRemoveFromParent(tab.help);
            failSafeRemoveFromParent(tab.tooltip);
            failSafeRemoveFromParent(tab.content);
            failSafeRemoveFromParent(tab);
            updateState();
        } else {
            logger.error("Cannot close tab in tabs %o: No tab given.", element());
        }
    }

    public void select(String id) {
        if (id != null) {
            select(tabs.get(id));
        } else {
            logger.error("Cannot select tab in tabs %o: No tab id given.", element());
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
            logger.error("Cannot select tab in tabs %o: No tab given.", element());
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
        if (tab.tooltip != null) {
            tab.tooltip.trigger(tab.button.element());
            tab.tooltip.appendToBody();
        }
        if (tab.help != null) {
            tab.help.trigger(tab.helpButton.element());
            tab.help.appendToBody();
        }
        if (this.closeable && tab.closeHandler == null) {
            tab.closeable(this.closeHandler);
        }
        if (isAttached(overflowTab)) {
            insertBefore(tab.element(), overflowTab.element());
        } else {
            tabsContainer.add(tab);
        }
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

    private void updateState() {
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
                updateOverflow();
            }
            int size = tabs.size();
            for (Tab tab : tabs.values()) {
                tab.disableCloseButton(size == 1);
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

    private void updateOverflow() {
        int count = 0;
        List<Tab> overflowingTabs = new ArrayList<>();
        for (Tab tab : tabs.values()) {
            // to calculate the visibility, temporarily make all, but the overflow tab visible
            setVisible(tab, true);
            if (!isElementInView(tabsContainer, tab, false)) {
                count++;
            }
        }
        if (count > 0) {
            setVisible(overflowTab, true);
            LinkedList<Tab> tabValues = new LinkedList<>(tabs.values());
            // iterate from last tab, until overflow tab becomes fully visible
            for (ListIterator<Tab> iterator = tabValues.listIterator(tabValues.size());
                    iterator.hasPrevious() && !isElementInView(tabsContainer, overflowTab, false); ) {
                Tab tab = iterator.previous();
                setVisible(tab, false);
                overflowingTabs.add(tab);
            }
            reverse(overflowingTabs);
        }
        overflowTab.update(overflowingTabs);
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
