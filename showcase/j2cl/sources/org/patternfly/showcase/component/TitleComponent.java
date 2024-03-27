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
import org.patternfly.component.title.Title;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Size._2xl;
import static org.patternfly.style.Size._3xl;
import static org.patternfly.style.Size._4xl;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Size.md;
import static org.patternfly.style.Size.xl;

@Route(value = "/components/title", title = "Title")
public class TitleComponent extends SnippetPage {

    public TitleComponent() {
        super(components.get("title"));

        startExamples();
        addSnippet(new Snippet("title-default-sizes", "Default sizes",
                code("title-default-sizes"), () ->
                // @code-start:title-default-sizes
                div()
                        .add(textContent()
                                .add(title(1, "h1 defaults to 2xl"))
                                .add(title(2, "h2 defaults to xl"))
                                .add(title(3, "h3 defaults to lg"))
                                .add(title(4, "h4 defaults to md"))
                                .add(title(5, "h5 defaults to md"))
                                .add(title(6, "h6 defaults to md")))
                        .element()
                // @code-end:title-default-sizes
        ));

        addSnippet(new Snippet("title-custom-sizes", "Custom sizes",
                code("title-custom-sizes"), () ->
                // @code-start:title-custom-sizes
                div()
                        .add(textContent()
                                .add(title(1, _4xl, "h1 as 4xl"))
                                .add(title(2, _3xl, "h2 as 3xl"))
                                .add(title(3, _2xl, "h3 as 2xl"))
                                .add(title(4, xl, "h4 as xl"))
                                .add(title(5, lg, "h5 has lg"))
                                .add(title(6, md, "h6 as md")))
                        .element()
                // @code-end:title-custom-sizes
        ));

        startApiDocs(Title.class);
        addApiDoc(Title.class, component);
    }
}
