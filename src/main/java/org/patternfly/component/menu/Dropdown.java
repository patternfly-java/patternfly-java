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

import java.util.EnumSet;
import java.util.Set;

import org.jboss.elemento.Attachable;
import org.patternfly.component.ComponentDelegate;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.core.Closeable;
import org.patternfly.core.Expandable;
import org.patternfly.core.Logger;
import org.patternfly.handler.CloseHandler;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.thirdparty.popper.Modifiers;
import org.patternfly.thirdparty.popper.Placement;
import org.patternfly.thirdparty.popper.Popper;
import org.patternfly.thirdparty.popper.PopperBuilder;
import org.patternfly.thirdparty.popper.TriggerAction;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.setVisible;
import static org.patternfly.handler.CloseHandler.fireEvent;
import static org.patternfly.handler.CloseHandler.shouldClose;
import static org.patternfly.thirdparty.popper.Placement.auto;
import static org.patternfly.thirdparty.popper.Placement.bottomStart;

/**
 * A dropdown presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new
 * location. See select component guidelines for more information about making one or more selections from a list of items in a
 * value list.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/menus/dropdown/">https://www.patternfly.org/components/menus/dropdown/</a>
 */
public class Dropdown extends ComponentDelegate<HTMLElement, Dropdown> implements Closeable<HTMLElement, Dropdown>,
        Disabled<HTMLElement, Dropdown>, Attachable {

    // ------------------------------------------------------ factory

    public static Dropdown dropdown() {
        return new Dropdown();
    }

    // ------------------------------------------------------ instance

    public static final int Z_INDEX = 9999;

    private final Set<TriggerAction> triggerActions;
    private MenuToggle toggle;
    private Menu menu;
    private int zIndex;
    private boolean flip;
    private boolean disabled;
    private Placement placement;
    private Popper popper;
    private CloseHandler<Dropdown> closeHandler;

    Dropdown() {
        super(ComponentType.Dropdown);
        this.triggerActions = EnumSet.of(TriggerAction.click);
        this.flip = true;
        this.placement = bottomStart;
        this.zIndex = Z_INDEX;
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (toggle != null && menu != null) {
            if (disabled) {
                toggle.disabled(true);
            }
            setVisible(menu, false);
            insertAfter(menu.element(), toggle.element());
            popper = new PopperBuilder(componentType(), toggle.element(), menu.element())
                    .zIndex(zIndex)
                    .placement(placement)
                    .addModifier(Modifiers.noOverflow(),
                            Modifiers.hide(),
                            Modifiers.flip(placement == auto || flip),
                            Modifiers.widths(),
                            Modifiers.placement(),
                            Modifiers.eventListeners(false))
                    .registerHandler(toggle.toggleElement, triggerActions, this::show, this::close)
                    .build();
        } else {
            Logger.undefined(componentType(), element(), "No toggle and/or menu defined for dropdown");
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        failSafeRemoveFromParent(menu);
        popper.cleanup();
    }

    // ------------------------------------------------------ add

    public Dropdown addToggle(MenuToggle toggle) {
        return add(toggle);
    }

    // override to assure internal wiring
    public Dropdown add(MenuToggle toggle) {
        this.toggle = toggle;
        // Do *not* add the toggle - the dropdown *is* the toggle!
        delegateTo(toggle.element());
        Attachable.register(toggle.element(), this);
        return this;
    }

    public Dropdown addMenu(Menu menu) {
        return add(menu);
    }

    // override to assure internal wiring
    public Dropdown add(Menu menu) {
        this.menu = menu;
        // Do *not* add the menu now, delay it to attach()
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public Dropdown disabled(boolean disabled) {
        if (toggle != null) {
            toggle.disabled(disabled);
        } else {
            // defer to attach()
            this.disabled = disabled;
        }
        return this;
    }

    @Override
    public boolean isDisabled() {
        return toggle == null ? disabled : toggle.isDisabled();
    }

    public Dropdown flip(boolean flip) {
        this.flip = flip;
        return this;
    }

    public Dropdown placement(Placement placement) {
        if (placement == auto) {
            flip = true;
        }
        this.placement = placement;
        return this;
    }

    public Dropdown zIndex(int zIndex) {
        this.zIndex = zIndex;
        return this;
    }

    @Override
    public Dropdown that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Dropdown ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    @Override
    public Dropdown onClose(CloseHandler<Dropdown> closeHandler) {
        this.closeHandler = closeHandler;
        return this;
    }

    // ------------------------------------------------------ api

    public void show() {
        show(new Event(""));
    }

    public void show(Event event) {
        popper.show(() -> Expandable.expand(element(), element(), null));
    }

    @Override
    public void close(Event event, boolean fireEvent) {
        if (shouldClose(this, closeHandler, event, fireEvent)) {
            popper.hide(() -> {
                Expandable.collapse(element(), element(), null);
                fireEvent(this, closeHandler, event, fireEvent);
            });
        }
    }

    public MenuToggle toggle() {
        return toggle;
    }

    public Menu menu() {
        return menu;
    }

    // ------------------------------------------------------ internal

    private void foo() {
        // internal stuff happens here
    }
}
