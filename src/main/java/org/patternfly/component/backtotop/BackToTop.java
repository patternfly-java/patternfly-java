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
package org.patternfly.component.backtotop;

import java.util.function.Supplier;

import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;
import org.patternfly.component.button.Button;
import org.patternfly.core.WithText;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;
import elemental2.dom.ScrollToOptions;

import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.window;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.scroll;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.IconPosition.end;
import static org.patternfly.style.Classes.backToTop;
import static org.patternfly.style.Classes.hidden;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.PredefinedIcon.angleUp;

/**
 * The back to top component is a shortcut that allows users to quickly navigate to the top of a lengthy content page.
 *
 * @see <a href= "https://www.patternfly.org/components/back-to-top">https://www.patternfly.org/components/back-to-top</a>
 */
public class BackToTop extends BaseComponentFlat<HTMLElement, BackToTop>
        implements WithText<HTMLElement, BackToTop>, Attachable {

    // ------------------------------------------------------ factory

    public static BackToTop backToTop() {
        return backToTop("Back to top");
    }

    public static BackToTop backToTop(String text) {
        return new BackToTop(text);
    }

    // ------------------------------------------------------ instance

    private static final int VISIBILITY_THRESHOLD = 400;

    private final Button button;
    private final ScrollToOptions scrollToOptions;
    private boolean alwaysVisible;
    private HTMLElement element;
    private Supplier<HTMLElement> elementSupplier;
    private HandlerRegistration hr;

    BackToTop(String text) {
        super(ComponentType.BackToTop, div().css(Classes.component(backToTop)).element());
        alwaysVisible = false;
        scrollToOptions = ScrollToOptions.create();
        scrollToOptions.setTop(0);
        scrollToOptions.setBehavior("smooth");
        button = button(a())
                .primary()
                .iconAndText(angleUp, text, end)
                .href("#")
                .on(click, e -> {
                    e.preventDefault();
                    scrollUp();
                });
        element().appendChild(button.element());
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (!alwaysVisible) {
            css(modifier(hidden));
            element = elementSupplier.get();
            if (element == null) {
                hr = bind(window, scroll.name, __ -> toggleVisible((int) window.scrollY));
            } else {
                hr = bind(element, scroll.name, __ -> toggleVisible((int) element.scrollTop));
            }
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (hr != null) {
            hr.removeHandler();
        }
    }

    // ------------------------------------------------------ builder

    @Override
    public BackToTop text(String text) {
        button.text(text);
        return this;
    }

    /** Same as {@linkplain #alwaysVisible(boolean) alwaysVisible(true)} */
    public BackToTop alwaysVisible() {
        return alwaysVisible(true);
    }

    /** Flag to indicate Accordion content is alwaysVisible */
    public BackToTop alwaysVisible(boolean alwaysVisible) {
        this.alwaysVisible = alwaysVisible;
        return this;
    }

    public BackToTop scrollableSelector(By selector) {
        return scrollableSelector(() -> Elements.find(document, selector));
    }

    public BackToTop scrollableSelector(HTMLElement element) {
        return scrollableSelector(() -> element);
    }

    public BackToTop scrollableSelector(Supplier<HTMLElement> element) {
        this.elementSupplier = element;
        return this;
    }

    @Override
    public BackToTop that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private void toggleVisible(int y) {
        Elements.toggle(element(), modifier(hidden), y < VISIBILITY_THRESHOLD);
    }

    private void scrollUp() {
        if (element != null) {
            element.scrollTo(scrollToOptions);
        } else {
            window.scrollTo(scrollToOptions);
        }
    }
}
