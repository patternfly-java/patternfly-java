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
package org.patternfly.component.descriptionlist;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.descriptionList;
import static org.patternfly.style.Classes.group;

public class DescriptionListGroup extends DescriptionListSubComponent<HTMLDivElement, DescriptionListGroup> {

    // ------------------------------------------------------ factory

    public static DescriptionListGroup descriptionListGroup() {
        return new DescriptionListGroup();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "dlg";

    DescriptionListGroup() {
        super(SUB_COMPONENT_NAME, div().css(component(descriptionList, group)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public DescriptionListGroup that() {
        return this;
    }

    // ------------------------------------------------------ add

    public DescriptionListGroup addTerm(DescriptionListTerm term) {
        return add(term);
    }

    public DescriptionListGroup addDescription(DescriptionListDescription description) {
        return add(description);
    }
}
