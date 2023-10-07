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
package org.patternfly.component;

import org.jboss.elemento.Elements;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLFormElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.form;

/**
 * PatternFly form component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/form">https://www.patternfly.org/v4/documentation/core/components/form</a>
 */
@Deprecated
public class Form extends BaseComponent<HTMLFormElement, Form> {

    // ------------------------------------------------------ factory methods

    public static Form form() {
        return new Form();
    }

    public static Group group() {
        return new Group();
    }

    // ------------------------------------------------------ instance

    protected Form() {
        super(Elements.form().css(component(form)).element(), "Form");
    }

    @Override
    public Form that() {
        return this;
    }

    // ------------------------------------------------------ inner classes

    public static class Group extends BaseComponent<HTMLDivElement, Group> {

        protected Group() {
            super(div().css(component(form, "group")).element(), "FormGroup");
        }

        @Override
        public Group that() {
            return this;
        }
    }
}
