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
package org.patternfly.component.page;

import org.jboss.elemento.ElementContainerDelegate;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.IsElement;
import org.patternfly.core.Roles;
import org.patternfly.style.Modifiers;

import elemental2.dom.AddEventListenerOptions;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.main;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.EventType.mousedown;
import static org.jboss.elemento.EventType.touchstart;
import static org.patternfly.component.page.Page.page;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.container;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.page;

/**
 * Container for the main page area. The page main container typically contains multiple {@link PageGroup}s and/or
 * {@link PageSection}s.
 * <p>
 * {@snippet class = PageDemo region = pageMain}
 */
public class PageMain extends PageSubComponent<HTMLElement, PageMain> implements
        ElementContainerDelegate<HTMLElement, PageMain>,
        Modifiers.Fill<HTMLElement, PageMain> {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static PageMain pageMain(String id) {
        return new PageMain(id);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "pm";
    private final HTMLContainerBuilder<HTMLElement> mc;

    PageMain(String id) {
        super(SUB_COMPONENT_NAME, div().css(component(page, main, container)).element());
        this.mc = main().css(component(page, main))
                .id(id)
                .attr(role, Roles.main)
                .attr(tabindex, -1);

        element().appendChild(mc.element());
        AddEventListenerOptions options = AddEventListenerOptions.create();
        options.setPassive(true);
        mc.on(mousedown, e -> onMainClick());
        mc.on(touchstart, options, e -> onMainClick());
    }

    @Override
    public Element containerDelegate() {
        return mc.element();
    }

    // ------------------------------------------------------ add

    /**
     * Adds a {@link PageGroup} to this component.
     */
    public PageMain addGroup(PageGroup group) {
        return add(group);
    }

    /**
     * Adds a {@link PageSectionLike} to this component.
     */
    public <E extends HTMLElement, P extends PageSectionLike<E, P>> PageMain addSection(PageSectionLike<E, P> pageSection) {
        return add(pageSection);
    }

    // ------------------------------------------------------ builder

    @Override
    public PageMain that() {
        return this;
    }

    // ------------------------------------------------------ api

    public void replace(IsElement<?> element) {
        removeChildrenFrom(element());
        add(element.element());
    }

    public void replace(Element element) {
        removeChildrenFrom(element());
        add(element);
    }

    public void replace(Element... elements) {
        removeChildrenFrom(element());
        for (Element element : elements) {
            add(element);
        }
    }

    public void replace(HTMLElement... elements) {
        removeChildrenFrom(element());
        for (HTMLElement element : elements) {
            add(element);
        }
    }

    public void replace(IsElement<?>... elements) {
        removeChildrenFrom(element());
        for (IsElement<?> element : elements) {
            add(element.element());
        }
    }

    public void replace(Iterable<?> elements) {
        removeChildrenFrom(element());
        for (Object element : elements) {
            if (element instanceof HTMLElement) {
                add(((HTMLElement) element));
            } else if (element instanceof IsElement) {
                // noinspection rawtypes
                add(((IsElement) element).element());
            }
        }
    }

    // ------------------------------------------------------ internal

    private void onMainClick() {
        if (page().belowXl() && page().sidebar() != null && page().sidebar().expanded()) {
            page().sidebar().collapse();
        }
    }
}
