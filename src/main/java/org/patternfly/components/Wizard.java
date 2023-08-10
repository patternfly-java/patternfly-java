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

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.jboss.elemento.HtmlContent;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.nav;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.Constants.breadcrumb;
import static org.patternfly.resources.Constants.wizard;

/**
 * A wizard provides a guided workflow that offers a path to complete a task, create an object or objects, or finish a series of steps for some other outcome. Wizards should incite trust in the user and guide them through an otherwise overwhelming experience.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/wizard/html">https://www.patternfly.org/components/wizard/html</a>
 */
public class Wizard extends BaseComponent<HTMLDivElement, Wizard>
        implements HtmlContent<HTMLDivElement, Wizard> {

    // ------------------------------------------------------ factory methods

    /**
     * Factory method to create a new instance of this component.
     */
    public static Wizard wizard() {
        return new Wizard();
    }

    // ------------------------------------------------------ instance

    Wizard() {
        super(div().css(component(wizard)).element(), ComponentType.Wizard);
    }

    @Override
    public Wizard that() {
        return this;
    }
}
