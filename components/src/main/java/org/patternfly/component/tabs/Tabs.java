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
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.function.Function;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.component.HasItems;
import org.patternfly.component.ScrollButtons;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.core.Dataset;
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
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.window;
import static java.util.Collections.reverse;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.isElementInView;
import static org.jboss.elemento.Elements.isVisible;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.resize;
import static org.patternfly.component.tabs.OverflowTab.overflowTab;
import static org.patternfly.component.tabs.TabsToggle.tabsToggle;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.region;
import static org.patternfly.core.Roles.tablist;
import static org.patternfly.icon.IconSets.fas.plus;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.list;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.tabs;
import static org.patternfly.style.Modifiers.toggleModifier;

/**
 * Tabs allow users to navigate between views within the same page or context.
 *
 * @see <a href= "https://www.patternfly.org/components/tabs">https://www.patternfly.org/components/tabs</a>
 */
public class Tabs extends BaseComponent<HTMLElement, Tabs> implements
        Attachable,
        Box<HTMLElement, Tabs>,
        Expandable<HTMLElement, Tabs>,
        Fill<HTMLElement, Tabs>,
        HasItems<HTMLElement, Tabs, Tab>,
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

    private final Map<String, Tab> items;
    private final HTMLContainerBuilder<? extends HTMLElement> mainContainer;
    private final HTMLContainerBuilder<HTMLUListElement> tabsContainer;
    private final ScrollButtons scrollButtons;

    private boolean closeable;
    private boolean expandable;
    private boolean secondary;
    private boolean noInitialSelection;
    private boolean overflowHorizontal;
    private boolean vertical;

    private String initialSelection;
    private Tab currentTab;
    private OverflowTab overflowTab;
    private TabsToggle tabsToggle;
    private Button addButton;

    private Function<Tabs, Tab> addHandler;
    private final List<ToggleHandler<Tabs>> toggleHandler;
    private final List<CloseHandler<Tab>> closeHandler;
    private final List<SelectHandler<Tab>> selectHandler;
    private HandlerRegistration resizeHandler;
    private HandlerRegistration transitionEndHandler;

    <E extends HTMLElement> Tabs(HTMLContainerBuilder<E> builder) {
        super(ComponentType.Tabs, div().element());
        this.items = new LinkedHashMap<>();
        this.toggleHandler = new ArrayList<>();
        this.closeHandler = new ArrayList<>();
        this.selectHandler = new ArrayList<>();
        // TODO Support modifier(animateCurrent) and
        //   --pf-v6-c-tabs--link-accent--length: ??px;
        //   --pf-v6-c-tabs--link-accent--start: ??px;
        this.mainContainer = builder.css(component(Classes.tabs))
                .attr(role, region)
                .add(tabsContainer = ul().css(component(Classes.tabs, list))
                        .attr(role, tablist));
        this.scrollButtons = new ScrollButtons(mainContainer.element(), tabsContainer.element(),
                component(tabs, Classes.scroll, Classes.button));

        insertFirst(mainContainer.element(), scrollButtons.scrollBackContainer);
        mainContainer.element().appendChild(scrollButtons.scrollForwardContainer);
        element().appendChild(mainContainer.element());
        storeComponent();
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

        if (items.isEmpty()) {
            logger.error("No tabs given for %o", element());
        } else {
            attachTabs();
            updateState();
        }
    }

    private void attachVertical() {
        failSafeRemoveFromParent(scrollButtons.scrollBackContainer);
        failSafeRemoveFromParent(scrollButtons.scrollForwardContainer);
        if (expandable) {
            TabsToggle tt = failSafeTabsToggle();
            if (tt.noText()) {
                if (!items.isEmpty()) {
                    tt.text(items.values().iterator().next().text());
                }
                onSelect((e, tab, selected) -> tt.text(tab.text()));
            }
            insertBefore(tt.element(), tabsContainer.element());
        }
    }

    private void attachHorizontal() {
        scrollButtons.attach();
    }

    private void attachOverflow() {
        failSafeRemoveFromParent(scrollButtons.scrollBackContainer);
        failSafeRemoveFromParent(scrollButtons.scrollForwardContainer);
    }

    private void attachTabs() {
        for (Tab tab : items.values()) {
            addTabToDOM(tab);
        }
        if (overflowHorizontal) {
            tabsContainer.add(overflowTab);
        }
        if (initialSelection != null) {
            Tab tab = items.get(initialSelection);
            if (tab != null) {
                select(tab, false);
            } else if (!noInitialSelection) {
                items.values().iterator().next().select(true);
            }
        } else if (!noInitialSelection) {
            items.values().iterator().next().select(true);
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (scrollButtons != null) {
            scrollButtons.detach();
        }
        if (resizeHandler != null) {
            resizeHandler.removeHandler();
        }
        if (transitionEndHandler != null) {
            transitionEndHandler.removeHandler();
        }
        if (overflowTab != null) {
            overflowTab.detach();
        }
        for (Tab tab : items.values()) {
            // help and tooltip are appended to the body!
            failSafeRemoveFromParent(tab.help);
            failSafeRemoveFromParent(tab.tooltip);
        }
    }

    // ------------------------------------------------------ add

    @Override
    public <T> Tabs addItems(Iterable<T> items, Function<T, Tab> display) {
        boolean attached = isAttached(element());
        for (T item : items) {
            Tab tab = display.apply(item);
            this.items.put(tab.identifier(), tab);
            if (attached) {
                addTabToDOM(tab);
            }
        }
        if (attached) {
            updateState();
        }
        return this;
    }

    @Override
    public Tabs add(Tab tab) {
        items.put(tab.identifier(), tab);
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
        if (closeHandler != null) {
            this.closeHandler.add(closeHandler);
        }
        return this;
    }

    /**
     * Same as {@code expandable(breakpoints(default_, expandable))}
     */
    public Tabs expandable(ExpandableModifier expandable) {
        return expandable(breakpoints(default_, expandable));
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

    /**
     * Same as {@code inset(breakpoints(default_, inset))}
     */
    public Tabs inset(Inset inset) {
        return inset(breakpoints(default_, inset));
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

    public Tabs initialSelection(String identifier) {
        this.initialSelection = identifier;
        return this;
    }

    /** Enables secondary styling to the tab component */
    @Override
    public Tabs secondary(boolean secondary) {
        this.secondary = secondary;
        for (Tab tab : items()) {
            if (tab.content != null) {
                tab.content.classList().toggle(modifier(Classes.secondary), secondary);
            }
        }
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

    /** Same as {@linkplain #subtab(boolean) subtab(true)} */
    public Tabs subtab() {
        return subtab(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(subtab)} */
    public Tabs subtab(boolean subtab) {
        return toggleModifier(this, mainContainer.element(), Classes.subtab, subtab);
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
        if (scrollButtons != null) {
            scrollButtons.scrollBack.aria(Aria.label, label);
        }
        return this;
    }

    /**
     * Aria-label for the forward scroll button
     */
    public Tabs ariaScrollForwardLabel(String label) {
        if (scrollButtons != null) {
            scrollButtons.scrollForward.aria(Aria.label, label);
        }
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
                            .on(click, e -> addItem(addHandler.apply(this))))
                    .element(), tabsContainer.element());
        }
        this.addHandler = addHandler;
        return this;
    }

    public Tabs onClose(CloseHandler<Tab> closeHandler) {
        this.closeHandler.add(closeHandler);
        return null;
    }

    public Tabs onSelect(SelectHandler<Tab> selectHandler) {
        this.selectHandler.add(selectHandler);
        return this;
    }

    public Tabs onToggle(ToggleHandler<Tabs> toggleHandler) {
        this.toggleHandler.add(toggleHandler);
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
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), this, false));
            }
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        if (tabsToggle != null) {
            Expandable.expand(mainContainer.element(), tabsToggle.element(), null);
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), this, true));
            }
        }
    }

    public void close(String identifier) {
        if (identifier != null) {
            close(items.get(identifier));
        } else {
            logger.error("Cannot close tab in tabs %o: No tab identifier given.", element());
        }
    }

    public void close(Tab tab) {
        if (tab != null) {
            internalClose(tab);
            updateState();
        } else {
            logger.error("Cannot close tab in tabs %o: No tab given.", element());
        }
    }

    public void select(String identifier) {
        select(identifier, true);
    }

    public void select(String identifier, boolean fireEvent) {
        if (identifier != null) {
            select(items.get(identifier), fireEvent);
        } else {
            logger.error("Cannot select tab in tabs %o: No tab identifier given.", element());
        }
    }

    public void select(Tab tab) {
        select(tab, true);
    }

    public void select(Tab tab, boolean fireEvent) {
        if (tab != null) {
            for (Tab t : items.values()) {
                if (tab.identifier().equals(t.identifier())) {
                    currentTab = t;
                    t.select(true);
                } else {
                    t.select(false);
                }
            }
            if (overflowHorizontal && isVisible(tab)) {
                overflowTab.unselect();
            }
            if (fireEvent) {
                selectHandler.forEach(sh -> sh.onSelect(new Event(""), tab, true));
            }
        } else {
            logger.error("Cannot select tab in tabs %o: No tab given.", element());
        }
    }

    public Tab currentTab() {
        return currentTab;
    }

    public Tab tab(String id) {
        return items.get(id);
    }

    @Override
    public Iterator<Tab> iterator() {
        return items.values().iterator();
    }

    @Override
    public int size() {
        return items.size();
    }

    @Override
    public boolean isEmpty() {
        return items.isEmpty();
    }

    @Override
    public boolean contains(String identifier) {
        return items.containsKey(identifier);
    }

    @Override
    public Tab item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void clear() {
        for (Tab tab : items.values()) {
            internalClose(tab);
        }
        updateState();
    }

    @Override
    public void removeItem(String identifier) {
        Tab item = items.remove(identifier);
        internalClose(item);
        updateState();

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
        if (this.closeable) {
            tab.closeable();
            tab.closeHandler.addAll(this.closeHandler);
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
        if (secondary) {
            tab.content.classList().add(modifier(Classes.secondary));
        }
        element().appendChild(tab.content.element());
        tab.content.element().hidden = true;
    }

    private void internalClose(Tab tab) {
        items.remove(tab.identifier());
        failSafeRemoveFromParent(tab.help);
        failSafeRemoveFromParent(tab.tooltip);
        failSafeRemoveFromParent(tab.content);
        failSafeRemoveFromParent(tab);
    }

    private void updateState() {
        if (!vertical && !overflowHorizontal) {
            scrollButtons.updateScrollState();
        } else if (overflowHorizontal) {
            updateOverflow();
        }
        int size = items.size();
        for (Tab tab : items.values()) {
            tab.disableCloseButton(size == 1);
        }
    }

    private void updateOverflow() {
        int count = 0;
        List<Tab> overflowingTabs = new ArrayList<>();
        for (Tab tab : items.values()) {
            // to calculate the visibility, temporarily make all, but the overflow tab visible
            setVisible(tab, true);
            if (!isElementInView(tabsContainer, tab, false)) {
                count++;
            }
        }
        if (count > 0) {
            setVisible(overflowTab, true);
            LinkedList<Tab> tabValues = new LinkedList<>(items.values());
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
