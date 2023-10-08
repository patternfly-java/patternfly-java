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

import org.jboss.elemento.By;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentReference;
import org.patternfly.component.ComponentType;
import org.patternfly.component.SubComponent;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.expandable.ExpandableSectionToggleText.expandableSectionToggleText;
import static org.patternfly.component.icon.InlineIcon.inlineIcon;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.expandableSection;
import static org.patternfly.layout.Classes.expandedUp;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.PredefinedIcon.angleRight;

public class ExpandableSectionToggle extends SubComponent<HTMLButtonElement, ExpandableSectionToggle> implements
        ComponentReference<ExpandableSection> {

    // ------------------------------------------------------ factory methods

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

    final String id;
    private boolean up;
    private ExpandableSectionToggleText text;

    ExpandableSectionToggle(String moreText, String lessText) {
        super(button().css(component(expandableSection, toggle))
                .aria(expanded, false)
                .add(span().css(component(expandableSection, toggle, icon))
                        .add(inlineIcon(angleRight)))
                .element());

        id(this.id = Id.unique(ComponentType.ExpandableSection.id, "tgl"));
        if (moreText != null || lessText != null) {
            add(expandableSectionToggleText(moreText, lessText));
        }
    }

    @Override
    public void passComponent(ExpandableSection expandableSection) {
        on(click, e -> expandableSection.toggle());
    }

    @Override
    public ExpandableSectionToggle that() {
        return this;
    }

    // ------------------------------------------------------ add methods

    public ExpandableSectionToggle addText(ExpandableSectionToggleText text) {
        return add(text);
    }

    // override to assure internal wiring
    public ExpandableSectionToggle add(ExpandableSectionToggleText text) {
        this.text = text;
        add(text.element());
        return this;
    }

    // ------------------------------------------------------ modifiers

    /** Changes the toggle icon to point upwards. */
    public ExpandableSectionToggle up() {
        this.up = true;
        return this;
    }

    // ------------------------------------------------------ internals

    void collapse() {
        aria(expanded, false);
        if (up) {
            element().classList.remove(modifier(expandedUp));
        }
        if (text != null) {
            text.collapse();
        }
    }

    void expand() {
        aria(expanded, true);
        if (up) {
            element().classList.add(modifier(expandedUp));
        }
        if (text != null) {
            text.expand();
        }
    }

    void removeIcon() {
        HTMLElement icon = find(By.classname(component(expandableSection, toggle, Classes.icon)));
        failSafeRemoveFromParent(icon);
    }
}
