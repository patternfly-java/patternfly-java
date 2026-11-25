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
package org.patternfly.component.upload;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;

import org.jboss.elemento.ElementContainerDelegate;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.HTMLInputElementBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Validatable;
import org.patternfly.component.ValidationStatus;
import org.patternfly.component.button.Button;
import org.patternfly.component.form.TextArea;
import org.patternfly.component.form.TextInput;
import org.patternfly.component.help.HelperText;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers.Disabled;
import org.patternfly.style.Modifiers.Required;
import elemental2.dom.DragEvent;
import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.File;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.Node;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.dragenter;
import static org.jboss.elemento.EventType.dragleave;
import static org.jboss.elemento.EventType.dragover;
import static org.jboss.elemento.EventType.drop;
import static org.jboss.elemento.InputType.file;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.form.TextArea.textArea;
import static org.patternfly.component.form.TextInput.textInput;
import static org.patternfly.component.form.TextInputType.text;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.core.Aria.describedBy;
import static org.patternfly.core.Aria.label;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.fileDetails;
import static org.patternfly.style.Classes.fileDetailsSpinner;
import static org.patternfly.style.Classes.fileSelect;
import static org.patternfly.style.Classes.fileUpload;
import static org.patternfly.style.Classes.fill;
import static org.patternfly.style.Classes.inputGroup;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Modifiers.toggleModifier;
import static org.patternfly.style.Size.lg;

/**
 * A file upload component allows users to select and upload files by browsing or dragging and dropping.
 *
 * @see <a href=
 * "https://www.patternfly.org/components/file-upload/simple-file-upload">https://www.patternfly.org/components/file-upload/simple-file-upload</a>
 */
public class FileUpload extends BaseComponent<HTMLElement, FileUpload> implements
        Disabled<HTMLElement, FileUpload>,
        ElementContainerDelegate<HTMLElement, FileUpload>,
        Required<HTMLElement, FileUpload>,
        Validatable<HTMLElement, FileUpload> {

    // ------------------------------------------------------ factory

    public static FileUpload fileUpload(String id) {
        return new FileUpload(id);
    }

    // ------------------------------------------------------ instance

    private static final String FILE_INPUT_STYLE = "border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: 0px -1px -1px 0px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap;";
    private static final String DEFAULT_PLACEHOLDER = "Drag a file here or browse to upload";
    private static final String DEFAULT_BROWSE_TEXT = "Upload";
    private static final String DEFAULT_CLEAR_TEXT = "Clear";

    // private final filenameInput;
    private final HTMLInputElementBuilder<HTMLInputElement> fileInput;
    private final TextInput filenameInput;
    private final Button uploadButton;
    private final Button clearButton;
    private final TextArea detailsTextArea;
    private final HTMLContainerBuilder<HTMLDivElement> detailsContainer;
    private final HTMLContainerBuilder<HTMLDivElement> customPreview;
    private final List<ChangeHandler<FileUpload, File>> fileChangeHandlers;
    private final List<ComponentHandler<FileUpload>> clearHandlers;
    private HTMLElement loadingIndicator;
    private HTMLElement helperTextContainer;
    private ValidationStatus status;
    private int dragCounter;

    FileUpload(String id) {
        super(ComponentType.FileUpload, div().css(component(fileUpload)).element());
        this.status = ValidationStatus.default_;
        this.dragCounter = 0;
        this.fileChangeHandlers = new ArrayList<>();
        this.clearHandlers = new ArrayList<>();

        String filenameId = Id.build(id, "filename");
        String uploadId = Id.build(id, "upload");
        String clearId = Id.build(id, "clear");
        String detailsId = Id.build(id, "details");

        fileInput = input(file)
                .id(id)
                .hidden(true)
                .tabIndex(-1)
                .style(FILE_INPUT_STYLE)
                .on(change, this::onFileInputChanged);
        filenameInput = textInput(text, filenameId)
                .readonly()
                .placeholder(DEFAULT_PLACEHOLDER)
                .aria(label, DEFAULT_PLACEHOLDER)
                .aria(describedBy, uploadId);
        uploadButton = button(DEFAULT_BROWSE_TEXT).control().id(uploadId)
                .on(click, e -> fileInput.element().click());
        clearButton = button(DEFAULT_CLEAR_TEXT).control().id(clearId)
                .on(click, e -> clear());
        detailsContainer = div().css(component(fileUpload, fileDetails));
        detailsTextArea = textArea(detailsId);
        customPreview = div();
        setVisible(customPreview, false);

        // Don't use add() - this implements ElementContainerDelegate!
        element().appendChild(fileInput.element());
        element().appendChild(div().css(component(fileUpload, fileSelect))
                .add(div().css(component(inputGroup))
                        .add(div().css(component(inputGroup, item), modifier(fill))
                                .add(filenameInput))
                        .add(div().css(component(inputGroup, item))
                                .add(uploadButton))
                        .add(div().css(component(inputGroup, item))
                                .add(clearButton)))
                .element());
        element().appendChild(detailsContainer.add(detailsTextArea).element());
        element().appendChild(customPreview.element());

        // drag & drop
        on(dragenter, this::onDragEnter);
        on(dragover, this::onDragOver);
        on(dragleave, this::onDragLeave);
        on(drop, this::onDrop);
    }

    @Override
    public Element containerDelegate() {
        return customPreview.element();
    }

    // ------------------------------------------------------ add

    @Override
    public FileUpload add(String text) {
        setVisible(customPreview, true);
        return ElementContainerDelegate.super.add(text);
    }

    @Override
    public FileUpload add(Node node) {
        setVisible(customPreview, true);
        return ElementContainerDelegate.super.add(node);
    }

    @Override
    public FileUpload add(Supplier<Node> supplier) {
        setVisible(customPreview, true);
        return ElementContainerDelegate.super.add(supplier);
    }

    /** Adds helper text below the component. */
    public FileUpload addHelperText(HelperText helperText) {
        return add(helperText);
    }

    /** Adds helper text below the component. */
    public FileUpload add(HelperText helperText) {
        failSafeHelperTextContainer().appendChild(helperText.element());
        return this;
    }

    // ------------------------------------------------------ builder

    /** Shows the file details textarea below the file select area. */
    public FileUpload hideDetails() {
        return hideDetails(true);
    }

    /** Shows or hides the file details textarea below the file select area. */
    public FileUpload hideDetails(boolean hideDetails) {
        setVisible(detailsContainer, !hideDetails);
        return this;
    }

    /** Sets the placeholder text for the filename input. */
    public FileUpload placeholder(String placeholder) {
        filenameInput.placeholder(placeholder);
        return this;
    }

    /** Sets the text for the upload button. */
    public FileUpload uploadButtonText(String text) {
        uploadButton.text(text);
        return this;
    }

    /** Sets the text for the clear button. */
    public FileUpload clearButtonText(String text) {
        clearButton.text(text);
        return this;
    }

    /** Sets the accepted file types (e.g. ".csv", "image/*"). */
    public FileUpload accept(String accept) {
        fileInput.accept(accept);
        return this;
    }

    /** Same as {@linkplain #loading(boolean) loading(true)} */
    public FileUpload loading() {
        return loading(true);
    }

    /** Shows or hides the loading spinner. */
    public FileUpload loading(boolean loading) {
        toggleModifier(that(), element(), Classes.loading, loading);
        uploadButton.disabled(loading);
        if (loading && loadingIndicator == null) {
            insertAfter(failSafeLoadingIndicator(), detailsTextArea.element());
        } else {
            failSafeRemoveFromParent(loadingIndicator);
            loadingIndicator = null;
        }
        return this;
    }

    /** Makes the file details textarea read-only. */
    public FileUpload readonly() {
        return readonly(true);
    }

    /** Makes or unmakes the file details textarea read-only. */
    public FileUpload readonly(boolean readonly) {
        detailsTextArea.readonly(readonly);
        return this;
    }

    @Override
    public FileUpload disabled(boolean disabled) {
        uploadButton.disabled(disabled);
        clearButton.disabled(disabled);
        detailsTextArea.disabled(disabled);
        return this;
    }

    @Override
    public FileUpload validated(ValidationStatus status) {
        this.status = status;
        this.detailsTextArea.validated(status);
        return this;
    }

    @Override
    public void resetValidation() {
        validated(ValidationStatus.default_);
    }

    @Override
    public FileUpload that() {
        return this;
    }

    // ------------------------------------------------------ events

    /** Registers a handler that is called when a file is selected or dropped. */
    public FileUpload onFileChange(ChangeHandler<FileUpload, File> handler) {
        fileChangeHandlers.add(handler);
        return this;
    }

    /** Registers a handler that is called when the clear button is clicked. */
    public FileUpload onClear(ComponentHandler<FileUpload> handler) {
        clearHandlers.add(handler);
        return this;
    }

    // ------------------------------------------------------ api

    public HTMLInputElementBuilder<HTMLInputElement> fileInput() {
        return fileInput;
    }

    /** Returns the file details text content. */
    public String details() {
        return detailsTextArea.value();
    }

    public void details(String details) {
        detailsTextArea.value(details);
    }

    /** Returns the current validation status. */
    public ValidationStatus validationStatus() {
        return status;
    }

    /** Clears the filename, file content, and resets the file input. */
    public void clear() {
        fileInput.value("");
        filenameInput.value("");
        detailsTextArea.value("");
        clearHandlers.forEach(h -> h.handle(new Event(""), this));
    }

    // ------------------------------------------------------ internal

    private HTMLElement failSafeLoadingIndicator() {
        if (loadingIndicator == null) {
            loadingIndicator = div().css(component(fileUpload, fileDetailsSpinner))
                    .add(spinner(lg))
                    .element();
        }
        return loadingIndicator;
    }

    private HTMLElement failSafeHelperTextContainer() {
        if (helperTextContainer == null) {
            element().appendChild(helperTextContainer = div().css(component(fileUpload, Classes.helperText)).element());
        }
        return helperTextContainer;
    }

    private void onFileInputChanged(Event event) {
        if (fileInput.element().files != null && fileInput.element().files.length > 0) {
            File file = fileInput.element().files.getAt(0);
            filenameInput.value(file.name);
            fireFileChange(event, file);
        }
    }

    private void onDragEnter(Event event) {
        event.preventDefault();
        event.stopPropagation();
        dragCounter++;
        element().classList.add(modifier(Classes.dragHover));
    }

    private void onDragOver(Event event) {
        event.preventDefault();
        event.stopPropagation();
    }

    private void onDragLeave(Event event) {
        event.preventDefault();
        event.stopPropagation();
        dragCounter--;
        if (dragCounter == 0) {
            element().classList.remove(modifier(Classes.dragHover));
        }
    }

    private void onDrop(Event event) {
        event.preventDefault();
        event.stopPropagation();
        dragCounter = 0;
        element().classList.remove(modifier(Classes.dragHover));
        DragEvent dragEvent = (DragEvent) event;
        if (dragEvent.dataTransfer != null && dragEvent.dataTransfer.files != null
                && dragEvent.dataTransfer.files.length > 0) {
            File file = dragEvent.dataTransfer.files.getAt(0);
            fileInput.element().files = dragEvent.dataTransfer.files;
            filenameInput.value(file.name);
            fireFileChange(event, file);
        }
    }

    private void fireFileChange(Event event, File file) {
        fileChangeHandlers.forEach(h -> h.onChange(event, this, file));
    }
}
