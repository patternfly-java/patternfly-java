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

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.intl.NumberFormat;
import org.jboss.elemento.router.Route;
import org.patternfly.component.help.HelperTextItem;
import org.patternfly.component.upload.FileErrorHandler;
import org.patternfly.component.upload.FileReadHandler;
import org.patternfly.component.upload.FileReaderType;
import org.patternfly.component.upload.FileRejectedHandler;
import org.patternfly.component.upload.FileRejectionReason;
import org.patternfly.component.upload.FileUpload;
import org.patternfly.showcase.Code;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.intl.Format.narrow;
import static org.jboss.elemento.intl.Format.unit;
import static org.jboss.elemento.intl.Notation.compact;
import static org.jboss.elemento.intl.NumberFormat.numberFormat;
import static org.jboss.elemento.intl.NumberFormatOptions.numberFormatOptions;
import static org.jboss.elemento.intl.Unit.byte_;
import static org.patternfly.component.ValidationStatus.default_;
import static org.patternfly.component.ValidationStatus.error;
import static org.patternfly.component.help.HelperText.helperText;
import static org.patternfly.component.help.HelperTextItem.helperTextItem;
import static org.patternfly.component.icon.Icon.icon;
import static org.patternfly.component.upload.FileReaderType.text;
import static org.patternfly.component.upload.FileUpload.fileUpload;
import static org.patternfly.icon.IconSets.rhUi.documentFill;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.handler;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/file-upload/simple-file-upload", title = "Simple file upload")
public class FileUploadComponent extends SnippetPage {

    public FileUploadComponent() {
        super(components.get("simple-file-upload"));

        startExamples();
        addSnippet(new Snippet("sfu-simple-text-file", "Simple text file",
                Code.code("sfu-simple-text-file"), () ->
                // @code-start:sfu-simple-text-file
                div()
                        .add(fileUpload("sfu-simple-text-file").type(text))
                        .element()
                // @code-end:sfu-simple-text-file
        ));

        addSnippet(new Snippet("sfu-with-helper-text", "With helper text",
                Code.code("sfu-with-helper-text"), () ->
                // @code-start:sfu-with-helper-text
                div()
                        .add(fileUpload("sfu-with-helper-text")
                                .type(text)
                                .addHelperText(helperText()
                                        .addItem(helperTextItem("Upload a CSV or TXT file"))))
                        .element()
                // @code-end:sfu-with-helper-text
        ));

        addSnippet(new Snippet("sfu-allow-edit", "Text file with edits allowed",
                Code.code("sfu-allow-edit"), () ->
                // @code-start:sfu-allow-edit
                div()
                        .add(fileUpload("sfu-allow-edit")
                                .type(text)
                                .allowEditingUploadedText())
                        .element()
                // @code-end:sfu-allow-edit
        ));

        addSnippet(new Snippet("sfu-restrictions", "Text file with restrictions",
                Code.code("sfu-restrictions"), () -> {
            // @code-start:sfu-restrictions
            HelperTextItem helperTextItem = helperTextItem("Upload a CSV file");
            return div()
                    .add(fileUpload("sfu-restrictions")
                            .type(text)
                            .accept(".csv,text/csv")
                            .maxSize(1024)
                            .onFileRejected((e, fu, file, reason) -> {
                                fu.validated(error);
                                helperTextItem.text("Must be a CSV file no larger than 1 KB").status(error);
                            })
                            .onFileChange((e, fu, file) -> {
                                fu.resetValidation();
                                helperTextItem.text("Upload a CSV file").status(default_);
                            })
                            .onClear((e, fu) -> {
                                fu.resetValidation();
                                helperTextItem.text("Upload a CSV file").status(default_);
                            })
                            .addHelperText(helperText().addItem(helperTextItem)))
                    .element();
            // @code-end:sfu-restrictions
        }));

        addSnippet(new Snippet("sfu-any-format", "Simple file of any format",
                Code.code("sfu-any-format"), () ->
                // @code-start:sfu-any-format
                div()
                        .add(fileUpload("sfu-any-format"))
                        .element()
                // @code-end:sfu-any-format
        ));

        addSnippet(new Snippet("sfu-custom-preview", "Customizing the file preview",
                Code.code("sfu-custom-preview"), () -> {
            // @code-start:sfu-custom-preview
            HTMLContainerBuilder<HTMLDivElement> preview = div();
            return div()
                    .add(fileUpload("sfu-custom-preview")
                            .add(preview)
                            .onFileChange((event, fu, file) -> {
                                NumberFormat nf = numberFormat(numberFormatOptions()
                                        .notation(compact)
                                        .style(unit)
                                        .unit(byte_)
                                        .unitDisplay(narrow));
                                removeChildrenFrom(preview);
                                preview.add(icon(documentFill()).inline())
                                        .add(" Custom preview for " + file.name + ", size " + nf.format(file.size));
                            }))
                    .element();
            // @code-end:sfu-custom-preview
        }));

        startApiDocs(FileUpload.class);
        addApiDoc(FileErrorHandler.class, handler);
        addApiDoc(FileReaderType.class, other);
        addApiDoc(FileReadHandler.class, handler);
        addApiDoc(FileRejectedHandler.class, handler);
        addApiDoc(FileRejectionReason.class, other);
        addApiDoc(FileUpload.class, component);
    }
}
