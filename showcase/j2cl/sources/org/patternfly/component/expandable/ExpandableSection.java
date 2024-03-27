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

import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLElementBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.wrapHtmlElement;
import static org.patternfly.core.Aria.controls;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Dataset.expandableSectionId;
import static org.patternfly.core.Dataset.expandableSectionTarget;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.detached;
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
 *      "https://www.patternfly.org/components/expandable-section">https://www.patternfly.org/components/expandable-section</a>
 */
public class ExpandableSection extends BaseComponent<HTMLDivElement, ExpandableSection> implements Attachable,
        Expandable<HTMLDivElement, ExpandableSection> {

    // ------------------------------------------------------ factory

    public static ExpandableSection expandableSection() {
        return new ExpandableSection(null);
    }

    public static ExpandableSection expandableSection(String id) {
        return new ExpandableSection(id);
    }

    // ------------------------------------------------------ instance

    public static final int DEFAULT_TRUNCATE = 3;

    private final String id;
    private int truncate = 0;
    private String detachedFromId;
    private ExpandableSectionToggle toggle;
    private ExpandableSectionContent content;
    private ToggleHandler<ExpandableSection> toggleHandler;
    private HTMLElement detachedContentElement;

    ExpandableSection(String id) {
        super(ComponentType.ExpandableSection, div().css(component(expandableSection)).element());
        this.id = id == null ? Id.unique(componentType().id) : id;
        storeComponent();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (toggle != null && content != null) {
            toggle.aria(controls, content.id);
            content.aria(labelledBy, toggle.id);
        }
        if (truncate > 0) {
            if (toggle != null) {
                toggle.removeIcon();
            }
            if (truncate != DEFAULT_TRUNCATE && content != null) {
                componentVar(component(expandableSection), "m-truncate__content", LineClamp).applyTo(content, truncate);
            }
        }
        if (detachedFromId != null) {
            HTMLElement detachedElement = Elements.find(document.body, By.data(expandableSectionId, detachedFromId));

            if (detachedElement != null) {
                HTMLElementBuilder<HTMLElement> detached = wrapHtmlElement(detachedElement);
                HTMLElement detachedToggleElement = detached.find(
                        By.classname(component(expandableSection, Classes.toggle)));
                detachedContentElement = detached.find(By.classname(component(expandableSection, Classes.content)));

                if (toggle != null && detachedContentElement != null && detachedContentElement.id != null) {
                    toggle.aria(controls, detachedContentElement.id);
                    wrapHtmlElement(detachedContentElement).aria(labelledBy, toggle.id);
                } else if (content != null && detachedToggleElement != null && detachedToggleElement.id != null) {
                    wrapHtmlElement(detachedToggleElement).aria(controls, content.id);
                    content.aria(labelledBy, detachedToggleElement.id);
                }
            }
        }
    }

    // ------------------------------------------------------ add

    public ExpandableSection addToggle(ExpandableSectionToggle toggle) {
        return add(toggle);
    }

    // override to assure internal wiring
    public ExpandableSection add(ExpandableSectionToggle toggle) {
        this.toggle = toggle;
        add(toggle.element());
        return this;
    }

    public ExpandableSection addContent(ExpandableSectionContent content) {
        return add(content);
    }

    // override to assure internal wiring
    public ExpandableSection add(ExpandableSectionContent content) {
        this.content = content;
        add(content.element());
        return this;
    }

    // ------------------------------------------------------ builder

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

    public ExpandableSection detachedFrom(String detachedFromId) {
        this.detachedFromId = detachedFromId;
        css(modifier(detached));
        data(expandableSectionId, id);
        data(expandableSectionTarget, detachedFromId);
        return this;
    }

    @Override
    public ExpandableSection that() {
        return this;
    }

    // ------------------------------------------------------ events

    public ExpandableSection onToggle(ToggleHandler<ExpandableSection> toggleHandler) {
        this.toggleHandler = toggleHandler;
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void collapse(boolean fireEvent) {
        element().classList.remove(modifier(expanded));
        if (toggle != null) {
            toggle.collapse();
        }
        if (content != null) {
            content.element().hidden = true;
        } else if (detachedContentElement != null) {
            detachedContentElement.hidden = true;
        }
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, false);
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        element().classList.add(modifier(expanded));
        if (toggle != null) {
            toggle.expand();
        }
        if (content != null) {
            content.element().hidden = false;
        } else if (detachedContentElement != null) {
            detachedContentElement.hidden = false;
        }
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, true);
        }
    }

    public ExpandableSectionContent content() {
        return content;
    }
}
