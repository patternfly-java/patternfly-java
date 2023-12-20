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
package org.patternfly.component.tabs;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.click;

/**
 * Tabs allow users to navigate between views within the same page or context.
 *
 * @see <a href= "https://www.patternfly.org/components/tabs">https://www.patternfly.org/components/tabs</a>
 */
public class Tabs extends BaseComponent<HTMLElement, Tabs> {

    // ------------------------------------------------------ factory

    public static Tabs tabs() {
        return new Tabs();
    }

    // ------------------------------------------------------ instance

    Tabs() {
        super((ComponentType) null, div().element());
    }

    // ------------------------------------------------------ add

    public Tabs addFoo(/* Foo foo */) {
        return this;
    }

    // override to assure internal wiring
    public Tabs add(/* Foo foo */) {
        return this;
    }

    // ------------------------------------------------------ builder

    public Tabs methodsReturningAReferenceToItself() {
        return this;
    }

    @Override
    public Tabs that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Tabs ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public Tabs onFoo(ComponentHandler<Tabs> handler) {
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
