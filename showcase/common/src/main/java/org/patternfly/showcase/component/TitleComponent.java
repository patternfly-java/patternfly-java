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
                        .add(title(1, "H1-styled title"))
                        .add(title(2, "H2-styled title"))
                        .add(title(3, "H3-styled title"))
                        .add(title(4, "H4-styled title"))
                        .add(title(5, "H5-styled title"))
                        .add(title(6, "H6-styled title"))
                        .element()
                // @code-end:title-default-sizes
        ));

        addSnippet(new Snippet("title-custom-sizes", "Custom sizes",
                code("title-custom-sizes"), () ->
                // @code-start:title-custom-sizes
                div()
                        .add(title(1, _4xl, "4xl title"))
                        .add(title(2, _3xl, "3xl title"))
                        .add(title(3, _2xl, "2xl title"))
                        .add(title(4, xl, "xl title"))
                        .add(title(5, lg, "lg title"))
                        .add(title(6, md, "md title"))
                        .element()
                // @code-end:title-custom-sizes
        ));

        startApiDocs(Title.class);
        addApiDoc(Title.class, component);
    }
}
