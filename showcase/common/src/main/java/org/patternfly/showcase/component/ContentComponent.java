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
import org.patternfly.component.content.Content;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.blockquote;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.dd;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.dl;
import static org.jboss.elemento.Elements.dt;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.ol;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.small;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.content.Content.content;
import static org.patternfly.component.content.ContentType.h1;
import static org.patternfly.component.content.ContentType.h2;
import static org.patternfly.component.content.ContentType.h3;
import static org.patternfly.component.content.ContentType.h4;
import static org.patternfly.component.content.ContentType.h5;
import static org.patternfly.component.content.ContentType.h6;
import static org.patternfly.component.content.ContentType.p;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.plain;

@Route(value = "/components/content", title = "Content")
public class ContentComponent extends SnippetPage {

    public ContentComponent() {
        super(components.get("content"));

        startExamples();
        addSnippet(new Snippet("content-wrapper", "Content as wrapper",
                code("content-wrapper"), () ->
                // @code-start:content-wrapper
                div()
                        .add(content()
                                .add(content(p).text(
                                        "Content with a component of type \"p\" still renders the same when wrapped with a Content."))
                                .add(p().text("If located within a wrapping Content, html elements are styled as well!")))
                        .element()
                // @code-end:content-wrapper
        ));

        addSnippet(new Snippet("content-headings", "Headings",
                code("content-headings"), () ->
                // @code-start:content-headings
                div()
                        .add(content()
                                .add(content(h1).text("Hello World"))
                                .add(content(h2).text("Second Level"))
                                .add(content(h3).text("Third Level"))
                                .add(content(h4).text("Forth Level"))
                                .add(content(h5).text("Fifth Level"))
                                .add(content(h6).text("Sixth Level")))
                        .element()
                // @code-end:content-headings
        ));

        addSnippet(new Snippet("content-body", "Body",
                code("content-body"), () ->
                // @code-start:content-body
                div()
                        .add(content()
                                .add(p().text(LoremIpsum.paragraphs(5)))
                                .add(p()
                                        .add(LoremIpsum.paragraphs(3) + " ")
                                        .add(a("#").text(LoremIpsum.paragraph()))
                                        .add(" " + LoremIpsum.paragraphs(2)))
                                .add(blockquote().text(LoremIpsum.paragraphs(2)))
                                .add(small().text(LoremIpsum.paragraphs(3))))
                        .element()
                // @code-end:content-body
        ));

        addSnippet(new Snippet("content-ul", "Unordered list",
                code("content-ul"), () ->
                // @code-start:content-ul
                div()
                        .add(content()
                                .add(ul()
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().add(LoremIpsum.words())
                                                .add(ul()
                                                        .add(li().text(LoremIpsum.words()))
                                                        .add(li().text(LoremIpsum.words()))))
                                        .add(li().add(LoremIpsum.words()))))
                        .element()
                // @code-end:content-ul
        ));

        addSnippet(new Snippet("content-ol", "Ordered list",
                code("content-ol"), () ->
                // @code-start:content-ol
                div()
                        .add(content()
                                .add(ol()
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().text(LoremIpsum.words()))))
                        .element()
                // @code-end:content-ol
        ));

        addSnippet(new Snippet("content-plain-list", "Plain list",
                code("content-plain-list"), () ->
                // @code-start:content-plain-list
                div()
                        .add(content()
                                .add(h(3, "Plain unordered list"))
                                .add(ul().css(modifier(plain))
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().add(LoremIpsum.words()))
                                        .add(li().add(LoremIpsum.words())))
                                .add(h(3, "Plain ordered list"))
                                .add(ol().css(modifier(plain))
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().text(LoremIpsum.words()))
                                        .add(li().text(LoremIpsum.words()))))
                        .element()
                // @code-end:content-plain-list
        ));

        addSnippet(new Snippet("content-dl", "Description list",
                code("content-dl"), () ->
                // @code-start:content-dl
                div()
                        .add(content()
                                .add(dl()
                                        .add(dt().text("Web"))
                                        .add(dd().text(
                                                "The part of the Internet that contains " + "websites and web pages"))
                                        .add(dt().text("HTML"))
                                        .add(dd().text("A markup language for creating web pages"))
                                        .add(dt().text("CSS"))
                                        .add(dd().text("A technology to make HTML look better"))))
                        .element()
                // @code-end:content-dl
        ));

        addSnippet(new Snippet("content-editorial", "Editorial content",
                code("content-editorial"), () ->
                // @code-start:content-editorial
                div()
                        .add(content().editorial()
                                .add(content(h1).text("Example of editorial content via components"))
                                .add(content(p).text(LoremIpsum.paragraphs(4))))
                        .add(br())
                        .add(content().editorial()
                                .add(h(1, "Example of editorial content via wrapper"))
                                .add(p().text(LoremIpsum.paragraphs(4))))
                        .element()
                // @code-end:content-editorial
        ));

        startApiDocs(Content.class);
        addApiDoc(Content.class, component);
    }
}
