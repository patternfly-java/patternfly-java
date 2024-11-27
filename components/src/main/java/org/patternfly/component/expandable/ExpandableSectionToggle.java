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

import org.jboss.elemento.ButtonType;
import org.jboss.elemento.By;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.expandable.ExpandableSectionToggleText.expandableSectionToggleText;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.expandTop;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.toggle;

public class ExpandableSectionToggle extends ExpandableSectionSubComponent<HTMLButtonElement, ExpandableSectionToggle> {

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
    private final HTMLElement toggleIconElement;
    private boolean up;
    private ExpandableSectionToggleText text;

    ExpandableSectionToggle(String moreText, String lessText) {
        super(SUB_COMPONENT_NAME, button(ButtonType.button).css(component(Classes.expandableSection, toggle))
                .aria(expanded, false)
                .element());
        on(click, e -> {
            ExpandableSection expandableSection = lookupComponent();
            expandableSection.toggle();
        });

        id(id = Id.unique(ComponentType.ExpandableSection.id, "tgl"));
        add(toggleIconElement = span().css(component(Classes.expandableSection, toggle, icon))
                .add(angleRight().element())
                .element());
        if (moreText != null || lessText != null) {
            add(expandableSectionToggleText(moreText, lessText));
        }
    }

    // ------------------------------------------------------ add

    public ExpandableSectionToggle addText(ExpandableSectionToggleText text) {
        return add(text);
    }

    // override to ensure internal wiring
    public ExpandableSectionToggle add(ExpandableSectionToggleText text) {
        this.text = text;
        add(text.element());
        return this;
    }

    // ------------------------------------------------------ builder

    /** Changes the toggle icon to point upwards. */
    public ExpandableSectionToggle up() {
        this.up = true;
        return this;
    }

    @Override
    public ExpandableSectionToggle that() {
        return this;
    }

    // ------------------------------------------------------ internal

    void collapse() {
        aria(expanded, false);
        if (up) {
            toggleIconElement.classList.remove(modifier(expandTop));
        }
        if (text != null) {
            text.collapse();
        }
    }

    void expand() {
        aria(expanded, true);
        if (up) {
            toggleIconElement.classList.add(modifier(expandTop));
        }
        if (text != null) {
            text.expand();
        }
    }

    void removeIcon() {
        HTMLElement icon = querySelector(By.classname(component(Classes.expandableSection, toggle, Classes.icon)));
        failSafeRemoveFromParent(icon);
    }
}
