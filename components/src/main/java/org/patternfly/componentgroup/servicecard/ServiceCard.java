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
package org.patternfly.componentgroup.servicecard;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentType;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;

public class ServiceCard extends BaseComponent<HTMLElement, ServiceCard> implements
        ComponentIcon<HTMLElement, ServiceCard> {

    // ------------------------------------------------------ factory

    public ServiceCard serviceCard() {
        return new ServiceCard();
    }

    // ------------------------------------------------------ instance

    public ServiceCard() {
        super(ComponentType.ServiceCard, div().element());
    }

    // ------------------------------------------------------ builder

    @Override
    public ServiceCard icon(Element icon) {
        return this;
    }

    @Override
    public ServiceCard removeIcon() {
        return this;
    }

    public ServiceCard title(String title) {
        return this;
    }

    public ServiceCard subTitle(String subTitle) {
        return this;
    }

    public ServiceCard description(String description) {
        return this;
    }

    @Override
    public ServiceCard that() {
        return this;
    }
}
