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
package org.patternfly.showcase.component;

import java.util.function.Supplier;

import org.jboss.elemento.router.Route;
import org.patternfly.component.form.Form;
import org.patternfly.component.menu.Dropdown;
import org.patternfly.component.modal.Modal;
import org.patternfly.component.modal.ModalBody;
import org.patternfly.component.modal.ModalFooter;
import org.patternfly.component.modal.ModalHeader;
import org.patternfly.component.modal.ModalHeaderDescription;
import org.patternfly.component.modal.ModalHeaderTitle;
import org.patternfly.component.popover.Popover;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.Severity.warning;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.form.Form.form;
import static org.patternfly.component.form.FormGroup.formGroup;
import static org.patternfly.component.form.FormGroupControl.formGroupControl;
import static org.patternfly.component.form.FormGroupLabel.formGroupLabel;
import static org.patternfly.component.form.TextInput.textInput;
import static org.patternfly.component.form.TextInputType.email;
import static org.patternfly.component.menu.Dropdown.dropdown;
import static org.patternfly.component.menu.DropdownMenu.dropdownMenu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.modal.Modal.modal;
import static org.patternfly.component.modal.ModalBody.modalBody;
import static org.patternfly.component.modal.ModalFooter.modalFooter;
import static org.patternfly.component.modal.ModalHeader.modalHeader;
import static org.patternfly.component.modal.ModalHeaderTitle.modalHeaderTitle;
import static org.patternfly.component.popover.Popover.popover;
import static org.patternfly.component.popover.PopoverBody.popoverBody;
import static org.patternfly.component.popover.PopoverHeader.popoverHeader;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.core.Aria.describedBy;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.icon.IconSets.fas.bullhorn;
import static org.patternfly.icon.IconSets.patternfly.warningTriangle;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.showcase.component.NotYetImplemented.nyi;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.Size._2xl;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Size.md;
import static org.patternfly.style.Size.sm;

@Route(value = "/components/modal", title = "Modal")
public class ModalComponent extends SnippetPage {

    public ModalComponent() {
        super(components.get("modal"));

        startExamples();
        addSnippet(new Snippet("modal-basic", "Basic modals",
                code("modal-basic"), () -> {
            // @code-start:modal-basic
            Modal modal = modal()
                    .addHeader("Basic modal")
                    .addBody(modalBody()
                            .text(LoremIpsum.paragraphs(10)))
                    .addFooter(modalFooter()
                            .addButton(button("Confirm").primary())
                            .addButton(button("Cancel").link()))
                    .appendToBody();
            return div()
                    .add(button("Show basic modal").primary().onClick((event, component1) -> modal.open()))
                    .element();
            // @code-end:modal-basic
        }));

        addSnippet(new Snippet("modal-scrollable", "Scrollable modals",
                code("modal-basic"), () -> {
            // @code-start:modal-basic
            Modal modal = modal()
                    .size(sm)
                    .attr(tabindex, 0)
                    .addHeader("Modal with overflowing content")
                    .addBody(modalBody()
                            .run(body -> {
                                for (int i = 0; i < 6; i++) {
                                    body.add(LoremIpsum.paragraphs(10))
                                            .add(br())
                                            .add(br());
                                }
                                body.add(LoremIpsum.paragraphs(10));
                            }))
                    .addFooter(modalFooter()
                            .addButton(button("Confirm").primary())
                            .addButton(button("Cancel").link()))
                    .appendToBody();
            return div()
                    .add(button("Show modal").primary().onClick((event, component1) -> modal.open()))
                    .element();
            // @code-end:modal-basic
        }));

        addSnippet(new Snippet("modal-static-description", "With a static description",
                code("modal-static-description"), () -> {
            // @code-start:modal-static-description
            Modal modal = modal()
                    .addHeader(modalHeader()
                            .addTitle("Modal with description")
                            .addDescription(
                                    "A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body."))
                    .addBody(modalBody()
                            .text(LoremIpsum.paragraphs(10)))
                    .addFooter(modalFooter()
                            .addButton(button("Confirm").primary())
                            .addButton(button("Cancel").link()))
                    .appendToBody();
            return div()
                    .add(button("Show modal with description").primary().onClick((event, component1) -> modal.open()))
                    .element();
            // @code-end:modal-static-description
        }));

        addSnippet(new Snippet("modal-top", "Top aligned",
                code("modal-top"), () -> {
            // @code-start:modal-top
            Modal modal = modal()
                    .top()
                    .addHeader("Top aligned modal")
                    .addBody(modalBody()
                            .text(LoremIpsum.paragraphs(10)))
                    .addFooter(modalFooter()
                            .addButton(button("Confirm").primary())
                            .addButton(button("Cancel").link()))
                    .appendToBody();
            return div()
                    .add(button("Show top aligned modal").primary().onClick((event, component1) -> modal.open()))
                    .element();
            // @code-end:modal-top
        }));

        addSnippet(new Snippet("modal-small", "Small modal",
                code("modal-small"), () -> {
            // @code-start:modal-small
            Modal modal = modal()
                    .size(sm)
                    .addHeader("Small modal")
                    .addBody(modalBody()
                            .text(LoremIpsum.paragraphs(10)))
                    .addFooter(modalFooter()
                            .addButton(button("Confirm").primary())
                            .addButton(button("Cancel").link()))
                    .appendToBody();
            return div()
                    .add(button("Show small modal").primary().onClick((event, component1) -> modal.open()))
                    .element();
            // @code-end:modal-small
        }));

        addSnippet(new Snippet("modal-medium", "Medium modal",
                code("modal-medium"), () -> {
            // @code-start:modal-medium
            Modal modal = modal()
                    .size(md)
                    .addHeader("Medium modal")
                    .addBody(modalBody()
                            .text(LoremIpsum.paragraphs(10)))
                    .addFooter(modalFooter()
                            .addButton(button("Confirm").primary())
                            .addButton(button("Cancel").link()))
                    .appendToBody();
            return div()
                    .add(button("Show medium modal").primary().onClick((event, component1) -> modal.open()))
                    .element();
            // @code-end:modal-medium
        }));

        addSnippet(new Snippet("modal-large", "Large modal",
                code("modal-large"), () -> {
            // @code-start:modal-large
            Modal modal = modal()
                    .size(lg)
                    .addHeader("Large modal")
                    .addBody(modalBody()
                            .text(LoremIpsum.paragraphs(10)))
                    .addFooter(modalFooter()
                            .addButton(button("Confirm").primary())
                            .addButton(button("Cancel").link()))
                    .appendToBody();
            return div()
                    .add(button("Show large modal").primary().onClick((event, component1) -> modal.open()))
                    .element();
            // @code-end:modal-large
        }));

        addSnippet(new Snippet("modal-custom-width", "Custom width modal",
                code("modal-custom-width"), () -> {
            // @code-start:modal-custom-width
            Modal modal = modal()
                    .width("50%")
                    .addHeader("Custom width modal")
                    .addBody(modalBody()
                            .text(LoremIpsum.paragraphs(10)))
                    .addFooter(modalFooter()
                            .addButton(button("Confirm").primary())
                            .addButton(button("Cancel").link()))
                    .appendToBody();
            return div()
                    .add(button("Show custom width modal").primary().onClick((event, component1) -> modal.open()))
                    .element();
            // @code-end:modal-custom-width
        }));

        addSnippet(new Snippet("modal-custom-hf", "Custom header and footer",
                code("modal-custom-hf"), () -> {
            // @code-start:modal-custom-hf
            Modal modal = modal()
                    .size(lg)
                    .aria(labelledBy, "modal-custom-header-label")
                    .aria(describedBy, "modal-custom-header-description")
                    .addHeader(modalHeader()
                            .add(title(1, _2xl)
                                    .id("modal-custom-header-label")
                                    .text("Custom header/footer modal"))
                            .add(p().css(util("pt-sm"))
                                    .text(
                                            "Allows for custom content in the header and/or footer by passing components.")))
                    .addBody(modalBody()
                            .add(span()
                                    .id("modal-custom-header-description")
                                    .text(
                                            "When static text describing the modal is available outside of the modal header, it can be given an ID that is then passed in as the modal's aria-describedby value."))
                            .add(br())
                            .add(br())
                            .add(LoremIpsum.paragraphs(10)))
                    .addFooter(modalFooter()
                            .add(title(4, md)
                                    .add(warningTriangle())
                                    .add(span().css(util("pl-sm"))
                                            .text("Custom modal footer."))))
                    .appendToBody();
            return div()
                    .add(button("Show custom header/footer modal").primary().onClick((event, component1) -> modal.open()))
                    .element();
            // @code-end:modal-custom-hf
        }));

        addSnippet(new Snippet("modal-no-hf", "No header or footer",
                code("modal-no-hf"), () -> {
            // @code-start:modal-no-hf
            Modal modal = modal()
                    .size(lg)
                    .aria(label, "No header/footer modal")
                    .aria(describedBy, "modal-no-header-description")
                    .addBody(modalBody()
                            .add(span()
                                    .id("modal-no-header-description")
                                    .text(
                                            "When static text describing the modal is available outside of the modal header, it can be given an ID that is then passed in as the modal's aria-describedby value."))
                            .add(br())
                            .add(br())
                            .add(LoremIpsum.paragraphs(10)))
                    .appendToBody();
            return div()
                    .add(button("Show no header/footer modal").primary().onClick((event, component1) -> modal.open()))
                    .element();
            // @code-end:modal-no-hf
        }));

        addSnippet(new Snippet("modal-title-icon", "Title icon",
                code("modal-title-icon"), () -> {
            // @code-start:modal-title-icon
            Modal modal = modal()
                    .addHeader(modalHeader()
                            .addTitle(modalHeaderTitle()
                                    .severity(warning)
                                    .text("Title icon modal")))
                    .addBody(modalBody()
                            .text(LoremIpsum.paragraphs(10)))
                    .addFooter(modalFooter()
                            .addButton(button("Confirm").primary())
                            .addButton(button("Cancel").link()))
                    .appendToBody();
            return div()
                    .add(button("Show title icon modal").primary().onClick((event, component1) -> modal.open()))
                    .element();
            // @code-end:modal-title-icon
        }));

        addSnippet(new Snippet("modal-custom-icon", "Custom title icon",
                code("modal-custom-icon"), () -> {
            // @code-start:modal-custom-icon
            Modal modal = modal()
                    .addHeader(modalHeader()
                            .addTitle(modalHeaderTitle()
                                    .icon(bullhorn())
                                    .text("Custom title icon modal")))
                    .addBody(modalBody()
                            .text(LoremIpsum.paragraphs(10)))
                    .addFooter(modalFooter()
                            .addButton(button("Confirm").primary())
                            .addButton(button("Cancel").link()))
                    .appendToBody();
            return div()
                    .add(button("Show custom title icon modal").primary().onClick((event, component1) -> modal.open()))
                    .element();
            // @code-end:modal-custom-icon
        }));

        addSnippet(new Snippet("modal-wizard", "With wizard",
                code("modal-wizard"), () -> {
            // @code-start:modal-wizard
            return nyi().element();
            // @code-end:modal-wizard
        }));

        addSnippet(new Snippet("modal-dropdown", "With dropdown",
                code("modal-dropdown"), () -> {
            // @code-start:modal-dropdown
            Supplier<Dropdown> dropdown = () -> dropdown("Dropdown")
                    .addMenu(dropdownMenu()
                            .addContent(menuContent()
                                    .addList(menuList()
                                            .addItem(menuItem("item-0", "Action"))
                                            .addItem(linkMenuItem("item-1", "Link", "#item-1"))
                                            .addItem(menuItem("item-2", "Disabled action")
                                                    .disabled())
                                            .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                    .disabled()))));

            Supplier<Modal> modal = () -> modal()
                    .size(sm)
                    .addHeader("Dropdown modal")
                    .addBody(modalBody()
                            .add(div().text(LoremIpsum.paragraphs(10)))
                            .add(br())
                            .add(div()
                                    .add(dropdown.get())))
                    .addFooter(modalFooter()
                            .addButton(button("Confirm").primary())
                            .addButton(button("Cancel").link()))
                    .appendToBody();
            return div()
                    .add(button("Show dropdown modal").primary().onClick((event, component1) -> modal.get().open()))
                    .element();
            // @code-end:modal-dropdown
        }));

        addSnippet(new Snippet("modal-help", "With help",
                code("modal-help"), () -> {
            // @code-start:modal-help
            Supplier<Modal> modal = () -> modal()
                    .size(sm)
                    .addHeader(modalHeader()
                            .addTitle("With help modal")
                            .help(popover()
                                    .addHeader("Help popover")
                                    .addBody(LoremIpsum.paragraphs(3))
                                    .addFooter("Popover footer")))
                    .addBody(modalBody()
                            .text(LoremIpsum.paragraphs(10)))
                    .addFooter(modalFooter()
                            .addButton(button("Confirm").primary())
                            .addButton(button("Cancel").link()))
                    .appendToBody();
            return div()
                    .add(button("Show with help modal").primary().onClick((event, component1) -> modal.get().open()))
                    .element();
            // @code-end:modal-help
        }));

        addSnippet(new Snippet("modal-form", "With form",
                code("modal-form"), () -> {
            // @code-start:modal-form
            Popover nameInfo = popover()
                    .addHeader(popoverHeader()
                            .add(div()
                                    .add("The ")
                                    .add(a("https://schema.org/name", "_blank").text("name"))
                                    .add(" of a ")
                                    .add(a("https://schema.org/Person", "_blank").text("person"))))
                    .addBody(popoverBody()
                            .add(div()
                                    .add("Often composed of ")
                                    .add(a("https://schema.org/givenName", "_blank").text("givenName"))
                                    .add(" and ")
                                    .add(a("https://schema.org/familyName", "_blank").text("familyName"))
                                    .add(".")));
            Popover emailInfo = popover()
                    .addHeader(popoverHeader()
                            .add(div()
                                    .add("The ")
                                    .add(a("https://schema.org/email", "_blank").text("e-mail"))
                                    .add(" of a ")
                                    .add(a("https://schema.org/Person", "_blank").text("person"))))
                    .addBody(popoverBody()
                            .add(div()
                                    .add("Valid ")
                                    .add(a("https://schema.org/email", "_blank").text("e-mail"))
                                    .add(" address.")));
            Popover addressInfo = popover()
                    .addHeader(popoverHeader()
                            .add(div()
                                    .add("The ")
                                    .add(a("https://schema.org/address", "_blank").text("address"))
                                    .add(" of a ")
                                    .add(a("https://schema.org/Person", "_blank").text("person"))))
                    .addBody(popoverBody()
                            .add(div()
                                    .add("Valid ")
                                    .add(a("https://schema.org/address", "_blank").text("postal address"))
                                    .add(".")));

            Form form = form()
                    .addGroup(formGroup("modal-form-name").required()
                            .addLabel(formGroupLabel("Name")
                                    .help("More info for name field", nameInfo))
                            .addControl(formGroupControl()
                                    .addControl(textInput("modal-form-name"))))
                    .addGroup(formGroup("modal-form-email").required()
                            .addLabel(formGroupLabel("E-mail")
                                    .help("More info for e-mail name", emailInfo))
                            .addControl(formGroupControl()
                                    .addControl(textInput(email, "modal-form-email"))))
                    .addGroup(formGroup("modal-form-address").required()
                            .addLabel(formGroupLabel("Address")
                                    .help("More info for address field", addressInfo))
                            .addControl(formGroupControl()
                                    .addControl(textInput("modal-form-address"))));

            Supplier<Modal> modal = () -> modal()
                    .size(sm)
                    .addHeader(modalHeader()
                            .addTitle("Create account")
                            .addDescription("Enter your personal information below to create an account."))
                    .addBody(modalBody()
                            .add(form))
                    .addFooter(modalFooter()
                            .addButton(button("Confirm").primary())
                            .addButton(button("Cancel").link()))
                    .appendToBody();
            return div()
                    .add(button("Show with form").primary().onClick((event, component1) -> modal.get().open()))
                    .element();
            // @code-end:modal-form
        }));

        startApiDocs(Modal.class);
        addApiDoc(Modal.class, component);
        addApiDoc(ModalBody.class, subcomponent);
        addApiDoc(ModalHeader.class, subcomponent);
        addApiDoc(ModalHeaderDescription.class, subcomponent);
        addApiDoc(ModalHeaderTitle.class, subcomponent);
        addApiDoc(ModalFooter.class, subcomponent);
    }
}
