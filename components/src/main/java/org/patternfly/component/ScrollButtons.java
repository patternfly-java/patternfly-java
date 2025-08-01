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
package org.patternfly.component;

import org.gwtproject.event.shared.HandlerRegistration;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.core.LanguageDirection;
import org.patternfly.core.ObservableValue;

import elemental2.dom.HTMLElement;
import elemental2.dom.Node;
import elemental2.dom.NodeList;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static elemental2.dom.DomGlobal.window;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.isElementInView;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.resize;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.LanguageDirection.languageDirection;
import static org.patternfly.core.ObservableValue.ov;
import static org.patternfly.icon.IconSets.fas.angleLeft;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.scrollable;

/**
 * Internal class used by components like {@link org.patternfly.component.navigation.Navigation} or
 * {@link org.patternfly.component.tabs.Tab} that provide buttons to scroll their items horizontally.
 */
// TODO Use in Tabs.java
public class ScrollButtons {

    public final HTMLElement scrollBackContainer;
    public final HTMLElement scrollForwardContainer;
    public final Button scrollBack;
    public final Button scrollForward;

    private final HTMLElement component;
    private final HTMLElement itemsContainer;
    private final ObservableValue<Boolean> enableScrollButtons;
    private final ObservableValue<Boolean> showScrollButtons;
    private final ObservableValue<Boolean> renderScrollButtons;
    private final ObservableValue<Boolean> disableBackScrollButton;
    private final ObservableValue<Boolean> disableForwardScrollButton;

    private double scrollTimeout;
    private HandlerRegistration resizeHandler;
    private HandlerRegistration transitionEndHandler;

    public ScrollButtons(HTMLElement component, HTMLElement itemsContainer, String css) {
        this.component = component;
        this.itemsContainer = itemsContainer;
        this.enableScrollButtons = ov(false);
        this.showScrollButtons = ov(false);
        this.renderScrollButtons = ov(false);
        this.disableBackScrollButton = ov(false);
        this.disableForwardScrollButton = ov(false);

        scrollBackContainer = div().css(css)
                .add(scrollBack = button().icon(angleLeft())
                        .plain()
                        .disabled()
                        .aria(hidden, true)
                        .aria(label, "Scroll back"))
                .element();
        scrollForwardContainer = div().css(css)
                .add(scrollForward = button().icon(angleRight())
                        .plain()
                        .disabled()
                        .aria(hidden, true)
                        .aria(label, "Scroll forward"))
                .element();
    }

    public void attach() {
        scrollBack.onClick((e, b) -> scrollBack());
        scrollForward.onClick((e, b) -> scrollForward());
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
        showScrollButtons.subscribe((current, __) -> component.classList.toggle(modifier(scrollable), current));
        renderScrollButtons.subscribe((current, __) -> {
            setVisible(scrollBackContainer, current);
            setVisible(scrollForwardContainer, current);
        });
        disableBackScrollButton.subscribe((current, __) -> {
            scrollBack.disabled(current);
            scrollBack.aria(Aria.disabled, current);
        });
        disableForwardScrollButton.subscribe((current, __) -> {
            scrollForward.disabled(current);
            scrollForward.aria(Aria.disabled, current);
        });
        resizeHandler = bind(window, resize.name, e -> updateScrollState());
        updateScrollState();
    }

    public void detach() {
        clearTimeout(scrollTimeout);
        if (resizeHandler != null) {
            resizeHandler.removeHandler();
        }
        if (transitionEndHandler != null) {
            transitionEndHandler.removeHandler();
        }
    }

    public void updateScrollState() {
        // debounce scroll event!
        scrollTimeout = setTimeout((__) -> {
            boolean overflowOnLeft = !isElementInView(itemsContainer,
                    ((HTMLElement) itemsContainer.firstElementChild), false);
            boolean overflowOnRight = !isElementInView(itemsContainer,
                    ((HTMLElement) itemsContainer.lastElementChild), false);
            enableScrollButtons.change(overflowOnLeft || overflowOnRight);
            disableBackScrollButton.change(!overflowOnLeft);
            disableForwardScrollButton.change(!overflowOnRight);
        }, 100);
    }

    private void scrollBack() {
        HTMLElement firstElementInView = null;
        HTMLElement lastElementOutOfView = null;
        NodeList<Node> children = itemsContainer.childNodes;
        for (int i = 0; i < children.length && firstElementInView == null; i++) {
            HTMLElement child = (HTMLElement) children.item(i);
            if (isElementInView(itemsContainer, child, false)) {
                firstElementInView = child;
                lastElementOutOfView = (HTMLElement) children.item(i - 1);
            }
        }
        if (lastElementOutOfView != null) {
            if (languageDirection(component) == LanguageDirection.ltr) {
                itemsContainer.scrollLeft -= lastElementOutOfView.scrollWidth;
            } else {
                itemsContainer.scrollLeft += lastElementOutOfView.scrollWidth;
            }
        }
    }

    private void scrollForward() {
        HTMLElement lastElementInView = null;
        HTMLElement firstElementOutOfView = null;
        NodeList<Node> children = itemsContainer.childNodes;
        for (int i = children.length - 1; i >= 0 && lastElementInView == null; i--) {
            HTMLElement child = (HTMLElement) children.item(i);
            if (isElementInView(itemsContainer, child, false)) {
                lastElementInView = child;
                firstElementOutOfView = (HTMLElement) children.item(i + 1);
            }
        }
        if (firstElementOutOfView != null) {
            if (languageDirection(component) == LanguageDirection.ltr) {
                itemsContainer.scrollLeft += firstElementOutOfView.scrollWidth;
            } else {
                itemsContainer.scrollLeft -= firstElementOutOfView.scrollWidth;
            }
        }
    }

    private void hideScrollButtons() {
        if (!enableScrollButtons.get() && !showScrollButtons.get() && renderScrollButtons.get()) {
            renderScrollButtons.change(false);
        }
    }
}
