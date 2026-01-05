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
package org.patternfly.component.wizard;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.HasItems;
import org.patternfly.core.Aria;
import org.patternfly.core.Roles;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLOListElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.ol;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.core.Aria.label;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.nav;
import static org.patternfly.style.Classes.wizard;

public class WizardNav extends WizardSubComponent<HTMLElement, WizardNav> implements
        HasItems<HTMLElement, WizardNav, WizardNavItem> {

    // ------------------------------------------------------ factory
    // No factory methods here! The navigation is created implicitly in Wizard

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "wzn";
    private final Map<String, WizardNavItem> items;
    private final List<BiConsumer<WizardNav, WizardNavItem>> onAdd;
    private final List<BiConsumer<WizardNav, WizardNavItem>> onRemove;
    private final HTMLContainerBuilder<HTMLOListElement> ol;

    WizardNav() {
        super(SUB_COMPONENT_NAME, nav().css(component(wizard, nav))
                .aria(label, "Wizard steps")
                .element());
        this.items = new LinkedHashMap<>();
        this.onAdd = new ArrayList<>();
        this.onRemove = new ArrayList<>();

        add(ol = ol().css(component(wizard, nav, Classes.list)).role(Roles.list));
    }

    // ------------------------------------------------------ add

    /**
     * This method is exposed because the class implements {@link HasItems}. However, it should <strong>not</strong> be called
     * directly! It is called by the wizard as steps are added. It is important that the identifiers of the steps and the nav
     * items match.
     */
    @Override
    public WizardNav add(WizardNavItem item) {
        items.put(item.identifier(), item);
        ol.add(item);
        onAdd.forEach(bc -> bc.accept(this, item));
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public WizardNav that() {
        return this;
    }

    // ------------------------------------------------------ events

    @Override
    public WizardNav onAdd(BiConsumer<WizardNav, WizardNavItem> onAdd) {
        this.onAdd.add(onAdd);
        return this;
    }

    @Override
    public WizardNav onRemove(BiConsumer<WizardNav, WizardNavItem> onRemove) {
        this.onRemove.add(onRemove);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public Iterator<WizardNavItem> iterator() {
        return items.values().iterator();
    }

    @Override
    public int size() {
        return items.size();
    }

    @Override
    public boolean isEmpty() {
        return items.isEmpty();
    }

    @Override
    public boolean contains(String identifier) {
        return items.containsKey(identifier);
    }

    @Override
    public WizardNavItem item(String identifier) {
        return items.get(identifier);
    }

    @Override
    public void removeItem(String identifier) {
        WizardNavItem item = items.remove(identifier);
        failSafeRemoveFromParent(item);
        if (item != null) {
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    @Override
    public void clear() {
        removeChildrenFrom(element());
        Iterator<WizardNavItem> iterator = items.values().iterator();
        while (iterator.hasNext()) {
            WizardNavItem item = iterator.next();
            iterator.remove();
            onRemove.forEach(bc -> bc.accept(this, item));
        }
    }

    // ------------------------------------------------------ internal

    void select(String identifier) {
        for (WizardNavItem item : this) {
            if (identifier.equals(item.identifier())) {
                item.disabled(false); // in case Wizard.visitRequired was set
                item.button.aria(Aria.current, "step");
                item.button.classList().add(modifier(Classes.current));
            } else {
                item.button.aria(Aria.current, "false");
                item.button.classList().remove(modifier(Classes.current));
            }
        }
    }
}
