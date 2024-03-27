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
package org.patternfly.component.list;

import org.patternfly.component.WithIcon;
import org.patternfly.component.WithText;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.list;

public class ListItem extends ListSubComponent<HTMLLIElement, ListItem> implements
        WithText<HTMLLIElement, ListItem>,
        WithIcon<HTMLLIElement, ListItem> {

    // ------------------------------------------------------ factory

    public static ListItem listItem() {
        return new ListItem();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "li";
    private HTMLElement iconContainer;

    ListItem() {
        super(SUB_COMPONENT_NAME, li().element());
    }

    // ------------------------------------------------------ builder

    @Override
    public ListItem icon(Element icon) {
        classList().add(component(list, item));
        failSafeIconContainer().appendChild(icon);
        return this;
    }

    @Override
    public ListItem removeIcon() {
        classList().remove(component(list, item));
        failSafeRemoveFromParent(failSafeIconContainer());
        iconContainer = null;
        return this;
    }

    @Override
    public ListItem text(String text) {
        return textNode(text);
    }

    @Override
    public ListItem that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null) {
            insertFirst(element(), iconContainer = span().css(component(list, item, icon)).element());
        }
        return iconContainer;
    }
}
