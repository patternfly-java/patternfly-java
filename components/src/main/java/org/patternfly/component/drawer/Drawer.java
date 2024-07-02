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
package org.patternfly.component.drawer;

import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Inline;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.drawer;
import static org.patternfly.style.Classes.expanded;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Modifiers.toggleModifier;
import static org.patternfly.style.TypedModifier.swap;

/**
 * A drawer is a sliding panel that enters from the right edge of the viewport. It can be configured to either overlay content
 * on a page or create a sidebar by pushing that content to the left.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/drawer#with-focus-trap">https://www.patternfly.org/components/drawer#with-focus-trap</a>
 */
public class Drawer extends BaseComponentFlat<HTMLElement, Drawer>
        implements Inline<HTMLElement, Drawer>, Expandable<HTMLElement, Drawer> {

    // ------------------------------------------------------ factory

    public static Drawer drawer() {
        return new Drawer();
    }

    // ------------------------------------------------------ instance

    private HTMLElement mainContainer;
    private DrawerPanel panel;
    private ToggleHandler<Drawer> toggleHandler;
    boolean inline;
    Position position;
    DrawerContent content;

    Drawer() {
        super(ComponentType.Drawer, div().css(component(drawer)).element());
        this.position = Position.end;
        storeFlatComponent();
    }

    // ------------------------------------------------------ add

    public Drawer addSection(DrawerSection section) {
        return add(section);
    }

    // override to ensure internal wiring
    public Drawer add(DrawerSection section) {
        element().appendChild(section.element());
        return this;
    }

    public Drawer addContent(DrawerContent content) {
        return add(content);
    }

    // override to ensure internal wiring
    public Drawer add(DrawerContent content) {
        this.content = content;
        failSafeMainContainer().appendChild(content.element());
        return this;
    }

    public Drawer addPanel(DrawerPanel panel) {
        return add(panel);
    }

    // override to ensure internal wiring
    public Drawer add(DrawerPanel panel) {
        this.panel = panel;
        failSafeMainContainer().appendChild(panel.element());
        return this;
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #static_(boolean) static_(true)} */
    public Drawer static_() {
        return static_(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(static_)} */
    public Drawer static_(boolean static_) {
        return toggleModifier(that(), element(), Classes.static_, static_);
    }

    public Drawer position(Position position) {
        return swap(this, element(), position, this.position, () -> this.position = position);
    }

    @Override
    public Drawer inline(boolean inline) {
        this.inline = inline;
        return Inline.super.inline(inline);
    }

    @Override
    public Drawer that() {
        return this;
    }

    // ------------------------------------------------------ events

    public Drawer onToggle(ToggleHandler<Drawer> toggleHandler) {
        this.toggleHandler = toggleHandler;
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void collapse(boolean fireEvent) {
        element().classList.remove(modifier(expanded));
        if (panel != null) {
            panel.element().hidden = true;
        }
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, false);
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        element().classList.add(modifier(expanded));
        if (panel != null) {
            panel.element().hidden = false;
        }
        if (fireEvent && toggleHandler != null) {
            toggleHandler.onToggle(new Event(""), this, true);
        }
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeMainContainer() {
        if (mainContainer == null) {
            element().appendChild(mainContainer = div().css(component(drawer, main)).element());
        }
        return mainContainer;
    }
}
