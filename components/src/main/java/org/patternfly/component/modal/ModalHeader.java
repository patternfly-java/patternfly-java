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

import org.jboss.elemento.Attachable;
import org.jboss.elemento.Elements;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.popover.Popover;
import org.patternfly.icon.IconSets;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.header;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.modal.ModalHeaderDescription.modalHeaderDescription;
import static org.patternfly.component.modal.ModalHeaderTitle.modalHeaderTitle;
import static org.patternfly.core.Aria.label;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.header;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.modalBox;
import static org.patternfly.style.Classes.modifier;

public class ModalHeader extends ModalSubComponent<HTMLElement, ModalHeader> implements Attachable {

    // ------------------------------------------------------ factory

    public static ModalHeader modalHeader() {
        return new ModalHeader();
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(ModalHeader.class.getName());
    static final String SUB_COMPONENT_NAME = "mh";
    ModalHeaderTitle title;
    private Popover popover;
    private HTMLElement help;
    private HTMLElement mainContainer;

    ModalHeader() {
        super(SUB_COMPONENT_NAME, header().css(component(modalBox, header)).element());
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (popover != null && help != null) {
            popover.trigger(help).appendToBody();
        }
    }

    // ------------------------------------------------------ add

    public ModalHeader addTitle(String title) {
        return addTitle(modalHeaderTitle().text(title));
    }

    public ModalHeader addTitle(ModalHeaderTitle title) {
        return add(title);
    }

    public ModalHeader add(ModalHeaderTitle title) {
        this.title = title;
        if (mainContainer != null) {
            mainContainer.appendChild(title.element());
        } else {
            add(title.element());
        }
        return this;
    }

    public ModalHeader addDescription(String description) {
        return add(modalHeaderDescription().text(description));
    }

    public ModalHeader addDescription(ModalHeaderDescription description) {
        return add(description);
    }

    public ModalHeader add(ModalHeaderDescription description) {
        if (mainContainer != null) {
            mainContainer.appendChild(description.element());
        } else {
            add(description.element());
        }
        return this;
    }

    // ------------------------------------------------------ builder

    public ModalHeader help(Popover popover) {
        return help(popover, button()
                .plain()
                .icon(IconSets.patternfly.help())
                .aria(label, "Help")
                .element());
    }

    public ModalHeader help(Popover popover, HTMLElement help) {
        if (mainContainer == null) {
            this.popover = popover;
            this.help = help;
            element().classList.add(modifier(Classes.help));

            // move elements
            mainContainer = div().css(component(modalBox, header, main)).element();
            for (HTMLElement child : Elements.children(element())) {
                mainContainer.appendChild(child);
            }
            add(mainContainer);
            add(div().css(component(modalBox, header, Classes.help))
                    .add(help)
                    .element());
        } else {
            logger.warn("Help popover already defined for modal header %o", element());
        }
        return this;
    }

    @Override
    public ModalHeader that() {
        return this;
    }
}
