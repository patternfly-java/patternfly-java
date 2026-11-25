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
import elemental2.dom.FileReader;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.Node;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
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
import static org.patternfly.component.ValidationStatus.error;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.form.TextArea.textArea;
import static org.patternfly.component.form.TextInput.textInput;
import static org.patternfly.component.form.TextInputType.text;
import static org.patternfly.component.spinner.Spinner.spinner;
import static org.patternfly.core.Aria.describedBy;
import static org.patternfly.core.Aria.label;
import static org.patternfly.core.Timeouts.LOADING_TIMEOUT;
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

    private final HTMLInputElementBuilder<HTMLInputElement> fileInput;
    private final TextInput filenameInput;
    private final Button uploadButton;
    private final Button clearButton;
    private final TextArea detailsTextArea;
    private final HTMLContainerBuilder<HTMLDivElement> detailsContainer;
    private final HTMLContainerBuilder<HTMLDivElement> customPreview;
    private final List<FileReadHandler> readStartHandler;
    private final List<FileReadHandler> readFinishedHandler;
    private final List<FileErrorHandler> readFailedHandler;
    private final List<FileRejectedHandler> rejectedHandler;
    private final List<ComponentHandler<FileUpload>> clearHandler;
    private final List<ChangeHandler<FileUpload, File>> fileChangeHandler;
    private final List<ChangeHandler<FileUpload, String>> dataChangeHandler;

    private long maxSize;
    private int dragCounter;
    private boolean disabled;
    private boolean allowEditingUploadedText;
    private AcceptedFileTypes acceptedFileTypes;
    private FileReaderType type;
    private ValidationStatus status;
    private HTMLElement loadingIndicator;
    private HTMLElement helperTextContainer;

    FileUpload(String id) {
        super(ComponentType.FileUpload, div().css(component(fileUpload)).element());
        this.maxSize = 0;
        this.dragCounter = 0;
        this.disabled = false;
        this.allowEditingUploadedText = false;
        this.acceptedFileTypes = AcceptedFileTypes.parse(null);
        this.type = null;
        this.status = ValidationStatus.default_;
        this.readStartHandler = new ArrayList<>();
        this.readFinishedHandler = new ArrayList<>();
        this.readFailedHandler = new ArrayList<>();
        this.rejectedHandler = new ArrayList<>();
        this.clearHandler = new ArrayList<>();
        this.fileChangeHandler = new ArrayList<>();
        this.dataChangeHandler = new ArrayList<>();

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
        clearButton = button(DEFAULT_CLEAR_TEXT).control().id(clearId).disabled()
                .on(click, e -> clear());
        detailsContainer = div().css(component(fileUpload, fileDetails));
        detailsTextArea = textArea(detailsId).onKeyup((e, c, value) -> {
            if (!disabled) {
                clearButton.disabled(value.isEmpty());
            }
        });
        customPreview = div();

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

        setVisible(detailsContainer, false);
        setVisible(customPreview, false);
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

    public FileUpload allowEditingUploadedText() {
        return allowEditingUploadedText(true);
    }

    public FileUpload allowEditingUploadedText(boolean allowEdit) {
        this.allowEditingUploadedText = allowEdit;
        return this;
    }

    /** Hides the file details textarea below the file select area. */
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

    /** Sets the text for the clear button. */
    public FileUpload clearButtonText(String text) {
        clearButton.text(text);
        return this;
    }

    /** Sets the text for the upload button. */
    public FileUpload uploadButtonText(String text) {
        uploadButton.text(text);
        return this;
    }

    /**
     * Restricts the accepted file types. The value is a comma-separated list of file extensions (e.g. {@code .csv}), MIME types
     * (e.g. {@code text/csv}), or wildcard MIME types (e.g. {@code image/*}). The value is used as {@code accept} attribute of
     * the file input and to validate files that are selected or dropped. Files that don't match are rejected and reported to
     * the handlers registered with {@link #onFileRejected(FileRejectedHandler)}.
     */
    public FileUpload accept(String accept) {
        fileInput.accept(accept);
        acceptedFileTypes = AcceptedFileTypes.parse(accept);
        return this;
    }

    /**
     * Restricts the maximum file size in bytes. Files that are larger are rejected and reported to the handlers registered with
     * {@link #onFileRejected(FileRejectedHandler)}. A value {@code <= 0} means no restriction.
     */
    public FileUpload maxSize(long maxSize) {
        this.maxSize = maxSize;
        return this;
    }

    public FileUpload type(FileReaderType type) {
        this.type = type;
        setVisible(detailsContainer, true);
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

    @Override
    public FileUpload disabled(boolean disabled) {
        this.disabled = disabled;
        uploadButton.disabled(disabled);
        clearButton.disabled(disabled);
        detailsTextArea.disabled(disabled);
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
    public FileUpload validated(ValidationStatus status) {
        this.status = status;
        this.detailsTextArea.validated(status);
        return this;
    }

    @Override
    public FileUpload that() {
        return this;
    }

    // ------------------------------------------------------ events

    public FileUpload onFileReadStart(FileReadHandler handler) {
        readStartHandler.add(handler);
        return this;
    }

    public FileUpload onFileReadFinished(FileReadHandler handler) {
        readFinishedHandler.add(handler);
        return this;
    }

    public FileUpload onFileReadFailed(FileErrorHandler handler) {
        readFailedHandler.add(handler);
        return this;
    }

    /**
     * Adds a handler that is called when a file was rejected because of its {@linkplain #accept(String) type} or
     * {@linkplain #maxSize(long) size}.
     */
    public FileUpload onFileRejected(FileRejectedHandler handler) {
        rejectedHandler.add(handler);
        return this;
    }

    public FileUpload onClear(ComponentHandler<FileUpload> handler) {
        clearHandler.add(handler);
        return this;
    }

    public FileUpload onFileChange(ChangeHandler<FileUpload, File> handler) {
        fileChangeHandler.add(handler);
        return this;
    }

    public FileUpload onDataChange(ChangeHandler<FileUpload, String> handler) {
        dataChangeHandler.add(handler);
        return this;
    }

    // ------------------------------------------------------ api

    /** Clears the filename, file content, and resets the file input. */
    public void clear() {
        loading(false);
        fileInput.value("");
        filenameInput.value("");
        detailsTextArea.value("");
        detailsTextArea.textArea().element().readOnly = false;
        clearButton.disabled();
        clearHandler.forEach(h -> h.handle(new Event(""), this));
    }

    @Override
    public void resetValidation() {
        validated(ValidationStatus.default_);
    }

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
            checkAndRead(event, fileInput.element().files.getAt(0), null);
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
            checkAndRead(event, dragEvent.dataTransfer.files.getAt(0),
                    () -> fileInput.element().files = dragEvent.dataTransfer.files);
        }
    }

    // ------------------------------------------------------ read file

    private void checkAndRead(Event event, File file, Runnable onSuccess) {
        resetValidation();
        if (rejected(event, file)) {
            fileInput.value("");
            validated(error);
        } else {
            filenameInput.value(file.name);
            readFile(event, file, onSuccess);
        }
    }

    private boolean rejected(Event event, File file) {
        FileRejectionReason reason = rejectionReason(file);
        if (reason != null) {
            rejectedHandler.forEach(h -> h.onRejected(event, this, file, reason));
            return true;
        }
        return false;
    }

    private FileRejectionReason rejectionReason(File file) {
        if (!acceptedFileTypes.matches(file.name, file.type)) {
            return FileRejectionReason.fileType;
        } else if (maxSize > 0 && file.size > maxSize) {
            return FileRejectionReason.fileSize;
        }
        return null;
    }

    private void readFile(Event event, File file, Runnable onSuccess) {
        if (!disabled) {
            clearButton.disabled(false);
        }
        if (!allowEditingUploadedText) {
            detailsTextArea.textArea().element().readOnly = true;
        }
        fileChangeHandler.forEach(h -> h.onChange(event, this, file));
        if (type == FileReaderType.text || type == FileReaderType.dataURL) {
            double handle = setTimeout(__ -> loading(true), LOADING_TIMEOUT);
            readStartHandler.forEach(h -> h.onRead(event, this, file));

            FileReader reader = new FileReader();
            reader.onerror = e -> {
                clearTimeout(handle);
                loading(false);
                readFailedHandler.forEach(h -> h.onRead(event, this, file, reader.error));
                return null;
            };
            reader.onload = e -> {
                clearTimeout(handle);
                loading(false);
                details(reader.result.asString());
                if (onSuccess != null) {
                    onSuccess.run();
                }
                readFinishedHandler.forEach(h -> h.onRead(event, this, file));
                dataChangeHandler.forEach(h -> h.onChange(event, this, reader.result.asString()));
                return null;
            };

            if (type == FileReaderType.text) {
                reader.readAsText(file);
            } else {
                reader.readAsDataURL(file);
            }
        }
    }
}
