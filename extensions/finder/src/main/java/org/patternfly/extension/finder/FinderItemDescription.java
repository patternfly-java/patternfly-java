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
package org.patternfly.extension.finder;

import org.jboss.elemento.ElementTextMethods;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.description;
import static org.patternfly.style.Classes.item;

public class FinderItemDescription extends FinderSubComponent<HTMLElement, FinderItemDescription> implements
        ElementTextMethods<HTMLElement, FinderItemDescription> {

    // ------------------------------------------------------ factory

    public static FinderItemDescription finderItemDescription() {
        return new FinderItemDescription();
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fid";

    FinderItemDescription() {
        super(SUB_COMPONENT_NAME, span().css(component(finder, item, description)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public FinderItemDescription that() {
        return this;
    }
}
