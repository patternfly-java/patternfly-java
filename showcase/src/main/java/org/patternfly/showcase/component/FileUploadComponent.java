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

import org.jboss.elemento.router.Route;
import org.patternfly.component.upload.FileUpload;
import org.patternfly.showcase.Code;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import elemental2.dom.FileReader;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.help.HelperText.helperText;
import static org.patternfly.component.help.HelperTextItem.helperTextItem;
import static org.patternfly.component.upload.FileUpload.fileUpload;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/file-upload/simple-file-upload", title = "Simple file upload")
public class FileUploadComponent extends SnippetPage {

    public FileUploadComponent() {
        super(components.get("simple-file-upload"));

        startExamples();
        addSnippet(new Snippet("sfu-text", "Text file upload",
                Code.code("sfu-text"), () ->
                // @code-start:sfu-text
                div()
                        .add(fileUpload("sfu-text")
                                .onFileChange((event, fu, file) -> {
                                    FileReader reader = new FileReader();
                                    reader.onload = e -> {
                                        fu.details(reader.result.asString());
                                        return null;
                                    };
                                    reader.readAsText(file);
                                })
                                .onClear((event, fu) -> console.log("File cleared")))
                        .element()
                // @code-end:sfu-text
        ));

        addSnippet(new Snippet("sfu-simple", "Simple file upload (no preview)",
                Code.code("sfu-simple"), () ->
                // @code-start:sfu-simple
                div()
                        .add(fileUpload("sfu-simple")
                                .hideDetails()
                                .onFileChange((event, fu, file) ->
                                        console.log("Selected file: " + file.name +
                                                " (" + file.size + " bytes)")))
                        .element()
                // @code-end:sfu-simple
        ));

        addSnippet(new Snippet("sfu-with-restrictions", "With restrictions",
                Code.code("sfu-with-restrictions"), () ->
                // @code-start:sfu-with-restrictions
                div()
                        .add(fileUpload("sfu-with-restrictions")
                                .accept(".csv,.txt")
                                .addHelperText(helperText()
                                        .addItem(helperTextItem("Upload a CSV or TXT file")))
                                .onFileChange((event, fu, file) -> {
                                    FileReader reader = new FileReader();
                                    reader.onload = e -> {
                                        fu.details(reader.result.asString());
                                        return null;
                                    };
                                    reader.readAsText(file);
                                }))
                        .element()
                // @code-end:sfu-with-restrictions
        ));

        addSnippet(new Snippet("sfu-disabled", "Disabled",
                Code.code("sfu-disabled"), () ->
                // @code-start:sfu-disabled
                div()
                        .add(fileUpload("sfu-disabled")
                                .disabled())
                        .element()
                // @code-end:sfu-disabled
        ));

        startApiDocs(FileUpload.class);
        addApiDoc(FileUpload.class, component);
    }
}
