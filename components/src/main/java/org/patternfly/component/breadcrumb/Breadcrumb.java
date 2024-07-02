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
package org.patternfly.component.breadcrumb;

import java.util.function.Function;

import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.handler.SelectHandler;
import org.patternfly.style.Classes;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLOListElement;

import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.ol;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.list;
import static org.patternfly.style.Classes.breadcrumb;
import static org.patternfly.style.Classes.component;

/**
 * A breadcrumb provides page context to help users navigate more efficiently and understand where they are in the application
 * hierarchy.
 *
 * @see <a href= "https://www.patternfly.org/components/breadcrumb">https://www.patternfly.org/components/breadcrumb</a>
 */
public class Breadcrumb extends BaseComponentFlat<HTMLElement, Breadcrumb> {

    // ------------------------------------------------------ factory

    public static Breadcrumb breadcrumb() {
        return new Breadcrumb();
    }

    // ------------------------------------------------------ instance

    private final HTMLContainerBuilder<HTMLOListElement> ol;
    private SelectHandler<BreadcrumbItem> selectHandler;

    Breadcrumb() {
        super(ComponentType.Breadcrumb, nav().css(component(breadcrumb)).element());
        this.ol = ol().css(component(breadcrumb, Classes.list)).attr(role, list);
        storeFlatComponent();
        element().appendChild(ol.element());
    }

    // ------------------------------------------------------ add

    public <T> Breadcrumb addItems(Iterable<T> items, Function<T, BreadcrumbItem> display) {
        for (T item : items) {
            BreadcrumbItem bi = display.apply(item);
            addItem(bi);
        }
        return this;
    }

    public Breadcrumb addItem(BreadcrumbItem item) {
        return add(item);
    }

    // override to ensure internal wiring
    public Breadcrumb add(BreadcrumbItem item) {
        ol.add(item);
        return this;
    }

    // ------------------------------------------------------ builder

    @Override
    public Breadcrumb that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Breadcrumb ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public Breadcrumb onSelect(SelectHandler<BreadcrumbItem> selectHandler) {
        this.selectHandler = selectHandler;
        return this;
    }

    // ------------------------------------------------------ api

    public <T> void updateItems(Iterable<T> items, Function<T, BreadcrumbItem> display) {
        removeChildrenFrom(ol);
        addItems(items, display);
    }

    // ------------------------------------------------------ internal

    void select(Event event, BreadcrumbItem item) {
        if (selectHandler != null) {
            selectHandler.onSelect(event, item, true);
        }
    }
}
