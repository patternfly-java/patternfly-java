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
package org.patternfly.component.help;

import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.core.HasValue;
import org.patternfly.core.WithText;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.helperText;
import static org.patternfly.layout.Classes.item;

/**
 * Helper text is an on-screen field guideline that helps provide context regarding field inputs.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/helper-text/html">https://www.patternfly.org/components/helper-text/html</a>
 */
public class HelperText extends BaseComponentFlat<HTMLDivElement, HelperText> implements
        WithText<HTMLDivElement, HelperText>,
        HasValue<String> {

    // ------------------------------------------------------ factory

    public static HelperText helperText(String text) {
        return new HelperText(text);
    }

    // ------------------------------------------------------ instance

    private final HTMLElement textElement;

    HelperText(String text) {
        super(div().css(component(helperText)).element(), ComponentType.HelperText);
        element().appendChild(div().css(component(helperText, item))
                .add(textElement = span().css(component(helperText, item, Classes.text))
                        .textContent(text)
                        .element())
                .element());
    }

    // ------------------------------------------------------ add

    public HelperText addFoo(/* Foo foo */) {
        return this;
    }

    // override to assure internal wiring
    public HelperText add(/* Foo foo */) {
        return this;
    }

    // ------------------------------------------------------ builder

    public HelperText methodsReturningAReferenceToItself() {
        return this;
    }

    @Override
    public HelperText text(String text) {
        return this;
    }

    @Override
    public HelperText that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public HelperText ariaLabel(String label) {
        return aria(Aria.label, label);
    }

    // ------------------------------------------------------ events

    public HelperText onFoo(ComponentHandler<HelperText> handler) {
        return on(click, e -> handler.handle(e, this));
    }

    // ------------------------------------------------------ api

    @Override
    public String value() {
        return textElement.textContent;
    }

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
