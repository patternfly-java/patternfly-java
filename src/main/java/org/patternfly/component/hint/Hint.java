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
package org.patternfly.component.hint;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertFirst;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.hint;

/**
 * A hint is in-app messaging that provides a one-step reminder, explanation, or call to action for a page or modal.
 *
 * @see <a href= "https://www.patternfly.org/components/hint">https://www.patternfly.org/components/hint</a>
 */
public class Hint extends BaseComponent<HTMLElement, Hint> {

    // ------------------------------------------------------ factory

    public static Hint hint() {
        return new Hint();
    }

    // ------------------------------------------------------ instance

    Hint() {
        super(ComponentType.Hint, div().css(component(hint)).element());
    }

    // ------------------------------------------------------ add

    public Hint addActions(HintActions actions) {
        return add(actions);
    }

    public Hint add(HintActions actions) {
        insertFirst(element(), actions.element());
        return this;
    }

    public Hint addTitle(HintTitle title) {
        return add(title);
    }

    public Hint addBody(HintBody body) {
        return add(body);
    }

    public Hint addFooter(HintFooter footer) {
        return add(footer);
    }

    // ------------------------------------------------------ builder

    @Override
    public Hint that() {
        return this;
    }
}
