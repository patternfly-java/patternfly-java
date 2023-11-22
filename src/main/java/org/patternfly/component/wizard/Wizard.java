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
package org.patternfly.component.wizard;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.click;

/**
 * A wizard provides a guided workflow that offers a path to complete a task, create an object or objects, or finish a series of steps for some other outcome. Wizards should incite trust in the user and guide them through an otherwise overwhelming experience.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/wizard/html">https://www.patternfly.org/components/wizard/html</a>
 */
public class Wizard extends BaseComponent<HTMLElement, Wizard> {

    // ------------------------------------------------------ factory

    public static Wizard wizard() {
        return new Wizard();
    }

    // ------------------------------------------------------ instance

    Wizard() {
        super(div().element(), (ComponentType) null);
    }

    // ------------------------------------------------------ add

    public Wizard addFoo(/* Foo foo */) {
        return this;
    }

    // override to assure internal wiring
    public Wizard add(/* Foo foo */) {
        return this;
    }

    // ------------------------------------------------------ builder

    public Wizard methodsReturningAReferenceToItself() {
        return this;
    }

    @Override
    public Wizard that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Wizard ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public Wizard onFoo(ComponentHandler<Wizard> handler) {
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
