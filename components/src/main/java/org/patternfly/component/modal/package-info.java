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
/**
 * Provides the PatternFly modal dialog component and its subcomponents.
 * <p>
 * A modal is a dialog box that overlays the main content of the page, requiring the user to interact with it before returning
 * to the parent application. Modals can contain headers with titles and descriptions, a scrollable body, and a footer with
 * action buttons.
 *
 * <h2>Usage</h2>
 *
 * {@snippet :
 * import static org.patternfly.component.button.Button.button;
 * import static org.patternfly.component.modal.Modal.modal;
 * import static org.patternfly.component.modal.ModalBody.modalBody;
 * import static org.patternfly.component.modal.ModalFooter.modalFooter;
 *
 * Modal modal = modal()
 *         .addHeader("Basic modal")
 *         .addBody(modalBody()
 *                 .text("Modal body content"))
 *         .addFooter(modalFooter()
 *                 .addButton(button("Confirm").primary())
 *                 .addButton(button("Cancel").link()))
 *         .appendToBody();
 * modal.open();
 * }
 *
 * Modals can include a header with title and description:
 *
 * {@snippet :
 * import static org.patternfly.component.button.Button.button;
 * import static org.patternfly.component.modal.Modal.modal;
 * import static org.patternfly.component.modal.ModalBody.modalBody;
 * import static org.patternfly.component.modal.ModalFooter.modalFooter;
 * import static org.patternfly.component.modal.ModalHeader.modalHeader;
 *
 * Modal modal = modal()
 *         .addHeader(modalHeader()
 *                 .addTitle("Modal with description")
 *                 .addDescription("A description provides more context about the modal."))
 *         .addBody(modalBody()
 *                 .text("Modal body content"))
 *         .addFooter(modalFooter()
 *                 .addButton(button("Confirm").primary())
 *                 .addButton(button("Cancel").link()))
 *         .appendToBody();
 * }
 *
 * @see <a href="https://www.patternfly.org/components/modal">https://www.patternfly.org/components/modal</a>
 */
package org.patternfly.component.modal;