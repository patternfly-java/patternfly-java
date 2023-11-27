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
package org.patternfly.component.form;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.click;

/**
 * A form is a group of elements used to collect information from a user in a variety of contexts including in a modal, in a
 * wizard, or on a page. Use cases for forms include tasks reliant on user-inputted information for completion like logging in,
 * registering, configuring settings, or completing surveys.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/forms/form/html">https://www.patternfly.org/components/forms/form/html</a>
 */
public class Form extends BaseComponent<HTMLElement, Form> {

    // ------------------------------------------------------ factory

    public static Form form() {
        return new Form();
    }

    // ------------------------------------------------------ instance

    Form() {
        super(div().element(), (ComponentType) null);
    }

    // ------------------------------------------------------ add

    public Form addFoo(/* Foo foo */) {
        return this;
    }

    // override to assure internal wiring
    public Form add(/* Foo foo */) {
        return this;
    }

    // ------------------------------------------------------ builder

    public Form methodsReturningAReferenceToItself() {
        return this;
    }

    @Override
    public Form that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Form ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public Form onFoo(ComponentHandler<Form> handler) {
        return on(click, e -> handler.handle(e, this));
    }

    // ------------------------------------------------------ api

    public void doSomething() {

    }

    public String getter() {
        return "some piece of information";
    }

    // ------------------------------------------------------ internal

    private void foo() {
        // internal stuff happens here
    }
}
