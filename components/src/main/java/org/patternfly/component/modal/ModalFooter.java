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
package org.patternfly.component.modal;

import org.patternfly.component.button.Button;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.footer;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.footer;
import static org.patternfly.style.Classes.modalBox;

public class ModalFooter extends ModalSubComponent<HTMLElement, ModalFooter> {

    // ------------------------------------------------------ factory

    public static ModalFooter modalFooter() {
        return new ModalFooter();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "mf";

    ModalFooter() {
        super(SUB_COMPONENT_NAME, footer().css(component(modalBox, footer)).element());
    }

    // ------------------------------------------------------ add

    public ModalFooter addButton(Button button) {
        return add(button);
    }

    public ModalFooter add(Button button) {
        button.onClick((event, component) -> {
            Modal modal = lookupComponentDelegate();
            modal.close();
        });
        return add(button.element());
    }

    // ------------------------------------------------------ builder

    @Override
    public ModalFooter that() {
        return this;
    }
}
