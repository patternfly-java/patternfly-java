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
package org.patternfly.component.breadcrumb;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.click;

/**
 * A breadcrumb provides page context to help users navigate more efficiently and understand where they are in the application
 * hierarchy.
 *
 * @see <a href= "https://www.patternfly.org/components/breadcrumb">https://www.patternfly.org/components/breadcrumb</a>
 */
public class Breadcrumb extends BaseComponent<HTMLElement, Breadcrumb> {

    // ------------------------------------------------------ factory

    public static Breadcrumb breadcrumb() {
        return new Breadcrumb();
    }

    // ------------------------------------------------------ instance

    Breadcrumb() {
        super((ComponentType) null, div().element());
    }

    // ------------------------------------------------------ add

    public Breadcrumb addFoo(/* Foo foo */) {
        return this;
    }

    // override to assure internal wiring
    public Breadcrumb add(/* Foo foo */) {
        return this;
    }

    // ------------------------------------------------------ builder

    public Breadcrumb methodsReturningAReferenceToItself() {
        return this;
    }

    @Override
    public Breadcrumb that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Breadcrumb ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public Breadcrumb onFoo(ComponentHandler<Breadcrumb> handler) {
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
