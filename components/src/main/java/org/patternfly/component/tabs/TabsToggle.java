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

import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.tabs;
import static org.patternfly.style.Classes.text;
import static org.patternfly.style.Classes.toggle;

// internal subcomponent!
class TabsToggle extends TabSubComponent<HTMLElement, TabsToggle> implements Modifiers.Disabled<HTMLElement, TabsToggle> {

    // ------------------------------------------------------ factory

    static TabsToggle tabsToggle() {
        return new TabsToggle();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "tt";
    private final Button button;
    private final HTMLElement textElement;

    TabsToggle() {
        super(SUB_COMPONENT_NAME, div().css(component(tabs, toggle)).element());
        String toggleButtonId = Id.unique(ComponentType.Tabs.id, "toggle", "button");
        String toggleTextId = Id.unique(ComponentType.Tabs.id, "toggle", "text");
        add(div().css(component(tabs, toggle, Classes.button))
                .add(button = button().plain()
                        .id(toggleButtonId)
                        .aria(expanded, false)
                        .aria(labelledBy, toggleButtonId + " " + toggleTextId)
                        .on(click, e -> toggle())
                        .add(span().css(component(tabs, toggle, icon))
                                .add(angleRight()))
                        .add(textElement = span().css(component(tabs, toggle, text))
                                .id(toggleTextId)
                                .element())));
    }

    // ------------------------------------------------------ builder

    @Override
    public TabsToggle that() {
        return this;
    }

    // ------------------------------------------------------ internal

    boolean noText() {
        return textElement.textContent == null || textElement.textContent.isEmpty();
    }

    void text(String text) {
        textElement.textContent = text;
    }

    void ariaLabel(String label) {
        button.aria(Aria.label, label);
    }

    private void toggle() {
        Tabs tabs = lookupComponent();
        tabs.toggle();
    }
}
