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
package org.patternfly.component.expandable;

import java.util.ArrayList;
import java.util.List;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.jboss.elemento.logger.Level;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Classes;
import elemental2.dom.DomGlobal.SetIntervalCallbackFn;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;
import elemental2.dom.Node;

import static elemental2.dom.DomGlobal.clearInterval;
import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.setInterval;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.core.Aria.controls;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.expandTop;
import static org.patternfly.style.Classes.expandableSection;
import static org.patternfly.style.Classes.expanded;
import static org.patternfly.style.Classes.limitWidth;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.LineClamp;

/**
 * An expandable section component is used to support progressive disclosure in a form or page by hiding additional content when
 * you don't want it to be shown by default. An expandable section can contain any type of content such as plain text, form
 * inputs, and charts.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/expandable-section">https://www.patternfly.org/components/expandable-section</a>
 */
public class ExpandableSection extends BaseComponent<HTMLDivElement, ExpandableSection>
        implements Attachable, Expandable<HTMLDivElement, ExpandableSection> {

    // ------------------------------------------------------ factory

    public static ExpandableSection expandableSection() {
        return new ExpandableSection(Id.unique(ComponentType.ExpandableSection.id));
    }

    /**
     * Creates and returns a new instance of {@link ExpandableSection} with the specified ID.
     * <p>
     * If you want to create a detached expandable section, you must use the same ID for the two expandable sections, one
     * containing the {@link ExpandableSectionToggle} and one containing the {@link ExpandableSectionContent}.
     * <p>
     * {@snippet class = ExpandableSectionDemo region = detached}
     *
     * @param id the unique identifier for the expandable section
     * @return a new instance of {@link ExpandableSection} initialized with the provided ID
     */
    public static ExpandableSection expandableSection(String id) {
        return new ExpandableSection(id);
    }

    // ------------------------------------------------------ instance

    private static final int WIRE_ATTEMPTS = 10;
    private static final int WIRE_INTERVAL = 100;
    public static final int DEFAULT_TRUNCATE = 3;
    private static final Logger logger = Logger.getLogger(ExpandableSection.class.getName());

    private final String contentId;
    private final String toggleId;
    private final List<ToggleHandler<ExpandableSection>> toggleHandler;

    private int truncate;
    private boolean wired;
    private boolean detached;
    private boolean directionUp;
    private ExpandableSectionToggle toggle;
    private ExpandableSectionContent content;
    private HTMLElement contentEsElement; // parent of contentElement
    private HTMLElement contentElement;
    private HTMLElement toggleButton;

    ExpandableSection(String id) {
        super(ComponentType.ExpandableSection, div().css(component(expandableSection)).element());
        this.truncate = 0;
        this.wired = false;
        this.directionUp = false;
        this.toggleId = Id.build(id, "toggle");
        this.contentId = Id.build(id, "content");
        this.toggleHandler = new ArrayList<>();
        storeComponent();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        startWire();
    }

    // ------------------------------------------------------ add

    public ExpandableSection addToggle(ExpandableSectionToggle toggle) {
        return add(toggle);
    }

    // override to ensure internal wiring
    public ExpandableSection add(ExpandableSectionToggle toggle) {
        this.toggle = toggle;
        add(toggle.element());
        return this;
    }

    public ExpandableSection addContent(ExpandableSectionContent content) {
        return add(content);
    }

    // override to ensure internal wiring
    public ExpandableSection add(ExpandableSectionContent content) {
        this.content = content;
        add(content.element());
        return this;
    }

    // ------------------------------------------------------ builder

    /**
     * Make this expandable section detached from another one. Must be called on both the expandable section containing the
     * {@link ExpandableSectionToggle} and the expandable section containing the {@link ExpandableSectionContent}.
     * <p>
     * {@snippet class = ExpandableSectionDemo region = detached}
     */
    public ExpandableSection detached() {
        this.detached = true;
        return this;
    }

    /** Same as {@linkplain #indented(boolean) indented(true)} */
    public ExpandableSection indented() {
        return indented(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(indented)} */
    public ExpandableSection indented(boolean indented) {
        if (indented) {
            element().classList.add(modifier(Classes.indented));
        } else {
            element().classList.remove(modifier(Classes.indented));
        }
        return this;
    }

    /** Same as {@linkplain #disclosure(boolean) disclosure(true)} */
    public ExpandableSection disclosure() {
        return disclosure(true);
    }

    /** Adds/removes the disclosure modifiers */
    public ExpandableSection disclosure(boolean disclosure) {
        if (disclosure) {
            element().classList.add(modifier(Classes.display, lg), modifier(limitWidth));
        } else {
            element().classList.remove(modifier(Classes.display, lg), modifier(limitWidth));
        }
        return this;
    }

    /** Same as {@linkplain #truncate(int) truncate(3)} */
    public ExpandableSection truncate() {
        return truncate(DEFAULT_TRUNCATE);
    }

    /** Adds {@linkplain Classes#modifier(String) modifier(truncate)} */
    public ExpandableSection truncate(int truncate) {
        if (truncate > 0) {
            this.truncate = truncate;
            element().classList.add(modifier(Classes.truncate));
        }
        return this;
    }

    @Override
    public ExpandableSection that() {
        return this;
    }

    // ------------------------------------------------------ events

    public ExpandableSection onToggle(ToggleHandler<ExpandableSection> toggleHandler) {
        this.toggleHandler.add(toggleHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void collapse(boolean fireEvent) {
        element().classList.remove(modifier(expanded));
        if (toggle != null) {
            toggle.collapse(directionUp);
        }
        if (content != null) {
            content.element().hidden = true;
        } else if (detached) {
            contentEsElement.classList.remove(modifier(expanded));
        }
        if (fireEvent) {
            toggleHandler.forEach(th -> th.onToggle(new Event(""), this, false));
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        element().classList.add(modifier(expanded));
        if (toggle != null) {
            toggle.expand(directionUp);
        }
        if (content != null) {
            content.element().hidden = false;
        } else if (detached) {
            contentEsElement.classList.add(modifier(expanded));
        }
        if (fireEvent) {
            toggleHandler.forEach(th -> th.onToggle(new Event(""), this, true));
        }
    }

    public ExpandableSectionContent content() {
        return content;
    }

    // ------------------------------------------------------ internal

    private void startWire() {
        // Detached expandable sections might live in completely different areas of the DOM tree.
        // Wiring in the attach() method is not enough to make sure the toggle and content elements are available.
        // Instead, we use an approach that checks for the availability of the toggle and content elements periodically
        // and gives up after a certain number of attempts.
        final int[] count = {0};
        final double[] handle = {0};
        SetIntervalCallbackFn code = __ -> {
            if (!wired && count[0] < WIRE_ATTEMPTS) {
                wire();
                count[0]++;
            } else {
                clearInterval(handle[0]);
                if (wired) {
                    afterWire();
                    if (logger.isEnabled(Level.DEBUG)) {
                        logger.debug("Expandable section finished wiring: %o", element());
                        logger.debug("Toggle: %o", toggleButton);
                        logger.debug("Content: %o", contentElement);
                        logger.debug("Content: %o", contentElement);
                    }
                } else {
                    logger.error("Expandable section %o failed to wire toggle and content!", element());
                }
            }
        };
        beforeWire();
        handle[0] = setInterval(code, WIRE_INTERVAL);
    }

    private void beforeWire() {
        if (detached) {
            if (toggle != null) {
                // I'm a detached expandable section containing the toggle
                toggle.button.id(toggleId);
                toggle.button.aria(controls, contentId);
                toggleButton = toggle.button.element();
            } else if (content != null) {
                // I'm a detached expandable section containing the content
                css(modifier(Classes.detached));
                content.id(contentId);
                content.aria(labelledBy, toggleId);
                contentEsElement = element();
                contentElement = content.element();
            }
        } else {
            // I'm a normal expandable section containing both the toggle and content
            if (toggle != null && content != null) {
                toggle.button.id(toggleId);
                toggle.button.aria(controls, contentId);
                toggleButton = toggle.button.element();
                content.id(contentId);
                content.aria(labelledBy, toggleId);
                contentEsElement = element();
                contentElement = content.element();
            } else {
                logger.error("The expandable section %o must have a toggle and a content element", element());
            }
        }
    }

    private void wire() {
        if (detached) {
            if (toggle != null) {
                // I'm a detached expandable section containing the toggle
                contentElement = Elements.querySelector(document, By.id(contentId));
                contentEsElement = (HTMLElement) contentElement.closest("." + component(expandableSection));
            } else if (content != null) {
                // I'm a detached expandable section containing the content
                toggleButton = Elements.querySelector(document, By.id(toggleId));
            }
        }
        wired = toggleButton != null && contentEsElement != null && contentElement != null;
    }

    private void afterWire() {
        int order = toggleButton.compareDocumentPosition(contentElement);
        if (order == Node.DOCUMENT_POSITION_PRECEDING) {
            // content before toggle => direction = up
            directionUp = true;
            css(modifier(expanded));
        } else if (order == Node.DOCUMENT_POSITION_FOLLOWING) {
            // content after toggle => direction = down
            directionUp = false;
        }

        if (content != null && directionUp) {
            content.css(modifier(expandTop));
        }
        if (truncate > 0) {
            if (toggle != null) {
                toggle.truncate();
            }
            if (truncate != DEFAULT_TRUNCATE && content != null) {
                componentVar(component(expandableSection), "m-truncate__content", LineClamp).applyTo(content).set(truncate);
            }
        }
        collapse(false);
    }
}
