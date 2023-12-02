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

import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.click;

/**
 * The template component is a template for creating new components.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/template/template/html">https://www.patternfly.org/components/template/template/html</a>
 */
public class TemplateComponent extends BaseComponent<HTMLElement, TemplateComponent> {

    // ------------------------------------------------------ factory

    public static TemplateComponent template() {
        return new TemplateComponent();
    }

    // ------------------------------------------------------ instance

    TemplateComponent() {
        super((ComponentType) null, div().element());
    }

    // ------------------------------------------------------ add

    public TemplateComponent addFoo(/* Foo foo */) {
        return this;
    }

    // override to assure internal wiring
    public TemplateComponent add(/* Foo foo */) {
        return this;
    }

    // ------------------------------------------------------ builder

    public TemplateComponent methodsReturningAReferenceToItself() {
        return this;
    }

    @Override
    public TemplateComponent that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public TemplateComponent ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public TemplateComponent onFoo(ComponentHandler<TemplateComponent> handler) {
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
