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
package org.patternfly.component.menu;

import org.patternfly.component.WithText;
import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.HTMLButtonElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.style.Classes.button;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.menuToggle;

public class MenuToggleAction extends MenuToggleSubComponent<HTMLButtonElement, MenuToggleAction>
        implements Disabled<HTMLButtonElement, MenuToggleAction>, WithText<HTMLButtonElement, MenuToggleAction> {

    // ------------------------------------------------------ factory

    public static MenuToggleAction menuToggleAction(String text) {
        return new MenuToggleAction(text);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "mta";

    MenuToggleAction(String text) {
        super(SUB_COMPONENT_NAME, button().css(component(menuToggle, button))
                .textContent(text)
                .element());
    }

    // ------------------------------------------------------ builder

    @Override
    public MenuToggleAction disabled(boolean disabled) {
        element().disabled = disabled;
        return this;
    }

    public MenuToggleAction text(String text) {
        return textContent(text);
    }

    @Override
    public MenuToggleAction that() {
        return null;
    }

    // ------------------------------------------------------ aria

    public MenuToggleAction ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public MenuToggleAction onChange(ComponentHandler<MenuToggleAction> handler) {
        return on(click, e -> handler.handle(e, this));
    }
}
