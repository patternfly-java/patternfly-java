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
package org.patternfly.components;

import org.jboss.elemento.Elements;
import org.jboss.elemento.IsElement;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;

import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.layout.Classes.component;

public class OldPageMain extends BaseComponent<HTMLElement, OldPageMain> {

    protected OldPageMain(String id) {
        super(Elements.main()
                .id(id)
                .css(component("page", "main"))
                .attr("role", "main")
                .attr("tabindex", "-1")
                .element(), "PageMain");
    }

    @Override
    public OldPageMain that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public OldPageMain replace(Node element) {
        removeChildrenFrom(element());
        return add(element);
    }

    public OldPageMain replace(IsElement<?> element) {
        removeChildrenFrom(element());
        return add(element);
    }

    public OldPageMain replaceAll(Node... nodes) {
        removeChildrenFrom(element());
        return addAll(nodes);
    }

    public OldPageMain replaceAll(Element... elements) {
        removeChildrenFrom(element());
        return addAll(elements);
    }

    public OldPageMain replaceAll(HTMLElement... elements) {
        removeChildrenFrom(element());
        return addAll(elements);
    }

    public OldPageMain replaceAll(IsElement<?>... elements) {
        removeChildrenFrom(element());
        return addAll(elements);
    }

    public OldPageMain replaceAll(Iterable<?> elements) {
        removeChildrenFrom(element());
        return addAll(elements);
    }
}
