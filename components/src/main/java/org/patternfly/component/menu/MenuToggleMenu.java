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

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;
import java.util.Set;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.TypedBuilder;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.ComponentDelegate;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.core.Aria;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.popper.Placement;
import org.patternfly.popper.Popper;
import org.patternfly.popper.PopperBuilder;
import org.patternfly.popper.TriggerAction;
import org.patternfly.style.Modifiers.Disabled;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.setVisible;
import static org.patternfly.popper.Placement.auto;
import static org.patternfly.popper.Placement.bottomStart;

abstract class MenuToggleMenu<B extends TypedBuilder<HTMLElement, B>> extends ComponentDelegate<HTMLElement, B> implements
        Disabled<HTMLElement, B>,
        Expandable<HTMLElement, B>,
        Attachable {

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(MenuToggleMenu.class.getName());
    private static final int Z_INDEX = 9999;

    private final Set<TriggerAction> triggerActions;
    private final List<ToggleHandler<B>> toggleHandler;
    private int zIndex;
    private boolean flip;
    private boolean disabled;
    private Placement placement;
    private Popper popper;
    final MenuToggle menuToggle;
    Menu menu;

    MenuToggleMenu(ComponentType componentType, MenuToggle menuToggle) {
        super(componentType);
        this.menuToggle = menuToggle;
        this.triggerActions = EnumSet.of(TriggerAction.click);
        this.toggleHandler = new ArrayList<>();
        this.flip = true;
        this.placement = bottomStart;
        this.zIndex = Z_INDEX;

        delegateTo(menuToggle.element());
        Attachable.register(menuToggle.element(), this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (menuToggle != null && menu != null) {
            if (disabled) {
                menuToggle.disabled(true);
            }
            setVisible(menu, false);
            insertAfter(menu.element(), menuToggle.element());
            popper = new PopperBuilder(componentType().componentName, menuToggle.element(), menu.element())
                    .zIndex(zIndex)
                    .placement(placement)
                    .addModifier(org.patternfly.popper.Modifiers.noOverflow(),
                            org.patternfly.popper.Modifiers.hide(),
                            org.patternfly.popper.Modifiers.flip(placement == auto || flip),
                            org.patternfly.popper.Modifiers.widths(),
                            org.patternfly.popper.Modifiers.placement(),
                            org.patternfly.popper.Modifiers.eventListeners(false))
                    .registerHandler(menuToggle.toggleElement, triggerActions,
                            event -> expand(), event -> collapse())
                    .build();
        } else {
            logger.error("No toggle and/or menu defined for dropdown %o", element());
        }
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        failSafeRemoveFromParent(menu);
        popper.cleanup();
    }

    // ------------------------------------------------------ add

    public B addMenu(Menu menu) {
        return add(menu);
    }

    // override to ensure internal wiring
    public B add(Menu menu) {
        this.menu = menu;
        // Do *not* add the menu now, delay it to attach()
        return that();
    }

    // ------------------------------------------------------ builder

    @Override
    public B disabled(boolean disabled) {
        if (menuToggle != null) {
            menuToggle.disabled(disabled);
        } else {
            // defer to attach()
            this.disabled = disabled;
        }
        return that();
    }

    @Override
    public boolean isDisabled() {
        return menuToggle == null ? disabled : menuToggle.isDisabled();
    }

    public B flip(boolean flip) {
        this.flip = flip;
        return that();
    }

    public B placement(Placement placement) {
        if (placement == auto) {
            flip = true;
        }
        this.placement = placement;
        return that();
    }

    public B zIndex(int zIndex) {
        this.zIndex = zIndex;
        return that();
    }

    // ------------------------------------------------------ aria

    public B ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public B onToggle(ToggleHandler<B> toggleHandler) {
        this.toggleHandler.add(toggleHandler);
        return that();
    }

    // ------------------------------------------------------ api

    public void select(String itemId) {
        select(menu.findItem(itemId), true, true);
    }

    public void select(String itemId, boolean selected) {
        select(menu.findItem(itemId), selected, true);
    }

    public void select(String itemId, boolean selected, boolean fireEvent) {
        select(menu.findItem(itemId), selected, fireEvent);
    }

    public void select(MenuItem item) {
        select(item, true, true);
    }

    public void select(MenuItem item, boolean selected) {
        select(item, selected, true);
    }

    public void select(MenuItem item, boolean selected, boolean fireEvent) {
        menu.select(item, selected, fireEvent);
        if (item != null && menuToggle != null) {
            menuToggle.text(item.text());
        }
    }

    @Override
    public void collapse(boolean fireEvent) {
        popper.hide(() -> {
            Expandable.collapse(element(), element(), null);
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), that(), false));
            }
        });
    }

    @Override
    public void expand(boolean fireEvent) {
        popper.show(() -> {
            Expandable.expand(element(), element(), null);
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), that(), true));
            }
        });
    }

    public MenuToggle menuToggle() {
        return menuToggle;
    }

    public Menu menu() {
        return menu;
    }
}
