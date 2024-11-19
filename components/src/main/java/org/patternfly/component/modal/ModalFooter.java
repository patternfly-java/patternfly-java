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

import java.util.ArrayList;
import java.util.List;

import org.jboss.elemento.Attachable;
import org.patternfly.component.button.Button;
import org.patternfly.handler.ComponentHandler;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.footer;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.footer;
import static org.patternfly.style.Classes.modalBox;

public class ModalFooter extends ModalSubComponent<HTMLElement, ModalFooter> implements Attachable {

    // ------------------------------------------------------ factory

    public static ModalFooter modalFooter() {
        return new ModalFooter();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "mf";
    private final List<ButtonHandler> buttons;

    ModalFooter() {
        super(SUB_COMPONENT_NAME, footer().css(component(modalBox, footer)).element());
        this.buttons = new ArrayList<>();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        Modal modal = lookupComponentDelegate();
        for (ButtonHandler bh : buttons) {
            if (bh.handler != null) {
                bh.button.onClick((event, component) -> bh.handler.handle(event, modal));
            }
            if (modal.autoClose) {
                bh.button.onClick((event, component) -> modal.close());
            }
        }
    }

    // ------------------------------------------------------ add

    public ModalFooter addButton(Button button) {
        return add(button, null);
    }

    public ModalFooter addButton(Button button, ComponentHandler<Modal> handler) {
        return add(button, handler);
    }

    public ModalFooter add(Button button) {
        return add(button, null);
    }

    public ModalFooter add(Button button, ComponentHandler<Modal> handler) {
        buttons.add(new ButtonHandler(button, handler));
        return add(button.element());
    }

    // ------------------------------------------------------ builder

    @Override
    public ModalFooter that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private static class ButtonHandler {

        private final Button button;
        private final ComponentHandler<Modal> handler;

        public ButtonHandler(Button button, ComponentHandler<Modal> handler) {
            this.button = button;
            this.handler = handler;
        }
    }
}
