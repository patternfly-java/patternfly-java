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

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.ElementContainerDelegate;
import org.patternfly.component.button.Button;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.IconPosition.start;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.expandableSection;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.inline;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.toggle;

public class ExpandableSectionToggle extends ExpandableSectionSubComponent<HTMLElement, ExpandableSectionToggle> implements
        ElementContainerDelegate<HTMLElement, ExpandableSectionToggle> {

    // ------------------------------------------------------ factory

    public static ExpandableSectionToggle expandableSectionToggle() {
        return new ExpandableSectionToggle(null, null);
    }

    public static ExpandableSectionToggle expandableSectionToggle(String moreText) {
        return new ExpandableSectionToggle(moreText, null);
    }

    public static ExpandableSectionToggle expandableSectionToggle(String moreText, String lessText) {
        return new ExpandableSectionToggle(moreText, lessText);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "est";

    final String id;
    private final Button button;
    private final String moreText;
    private final String lessText;
    private final HTMLElement iconContainer;

    ExpandableSectionToggle(String moreText, String lessText) {
        super(SUB_COMPONENT_NAME, div().css(component(expandableSection, toggle)).element());
        this.id = Id.unique(ComponentType.ExpandableSection.id, "tgl");
        this.moreText = moreText;
        this.lessText = lessText;
        this.iconContainer = span().css(component(expandableSection, toggle, icon))
                .add(angleRight())
                .element();
        this.button = button().css(component(expandableSection, toggle))
                .id(id)
                .link()
                .aria(expanded, false)
                .iconAndText(iconContainer, moreText, start)
                .on(click, e -> {
                    ExpandableSection expandableSection = lookupComponent();
                    expandableSection.toggle();
                });

        element().appendChild(button.element());
    }

    @Override
    public Element containerDelegate() {
        return button.containerDelegate();
    }

    // ------------------------------------------------------ builder

    /** Changes the toggle icon to point upwards. */
    public ExpandableSectionToggle up() {
        iconContainer.classList.add(modifier(expanded));
        return this;
    }

    @Override
    public ExpandableSectionToggle that() {
        return this;
    }

    // ------------------------------------------------------ internal

    void collapse() {
        button.aria(expanded, false);
        if (moreText != null) {
            button.text(moreText);
        }
    }

    void expand() {
        button.aria(expanded, true);
        if (lessText != null) {
            button.text(lessText);
        }
    }

    void truncate() {
        button.css(modifier(inline));
        button.removeIcon();
    }
}
