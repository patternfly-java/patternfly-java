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
import org.patternfly.component.skeleton.Shape;
import org.patternfly.component.skeleton.Skeleton;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.skeleton.Shape.circle;
import static org.patternfly.component.skeleton.Shape.square;
import static org.patternfly.component.skeleton.Skeleton.skeleton;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.modifier;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Size._2xl;
import static org.patternfly.style.Size._3xl;
import static org.patternfly.style.Size._4xl;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Size.md;
import static org.patternfly.style.Size.sm;
import static org.patternfly.style.Size.xl;

@Route(value = "/components/skeleton", title = "Skeleton")
public class SkeletonComponent extends SnippetPage {

    public SkeletonComponent() {
        super(components.get("skeleton"));

        startExamples();
        addSnippet(new Snippet("skeleton-default", "Default",
                code("skeleton-default"), () ->
                // @code-start:skeleton-default
                div()
                        .add(skeleton().screenReaderText("Loading contents"))
                        .element()
                // @code-end:skeleton-default
        ));

        addSnippet(new Snippet("skeleton-widths", "Percentage widths",
                code("skeleton-widths"), () ->
                // @code-start:skeleton-widths
                div()
                        .add(skeleton().width("25%").screenReaderText("Loading 25% of content"))
                        .add(br())
                        .add(skeleton().width("33%").screenReaderText("Loading 33% of content"))
                        .add(br())
                        .add(skeleton().width("50%").screenReaderText("Loading 50% of content"))
                        .add(br())
                        .add(skeleton().width("66%").screenReaderText("Loading 66% of content"))
                        .add(br())
                        .add(skeleton().width("75%").screenReaderText("Loading 75% of content"))
                        .add(br())
                        .add(skeleton().screenReaderText("Loading 100% of content"))
                        .element()
                // @code-end:skeleton-widths
        ));

        addSnippet(new Snippet("skeleton-heights", "Percentage heights",
                code("skeleton-heights"), () ->
                // @code-start:skeleton-heights
                div().style("height: 400px; display: flex; align-items: flex-end; justify-content: space-between")
                        .add(skeleton().width("15%").height("25%").screenReaderText("Loading 25% of content"))
                        .add(skeleton().width("15%").height("33%").screenReaderText("Loading 33% of content"))
                        .add(skeleton().width("15%").height("50%").screenReaderText("Loading 50% of content"))
                        .add(skeleton().width("15%").height("66%").screenReaderText("Loading 66% of content"))
                        .add(skeleton().width("15%").height("75%").screenReaderText("Loading 75% of content"))
                        .add(skeleton().width("15%").height("100%").screenReaderText("Loading 100% of content"))
                        .element()
                // @code-end:skeleton-heights
        ));

        addSnippet(new Snippet("skeleton-text", "Text modifiers",
                code("skeleton-text"), () ->
                // @code-start:skeleton-text
                div()
                        .add(modifier("text", _4xl))
                        .add(skeleton().fontSize(_4xl).screenReaderText("Loading font size 4xl"))
                        .add(br())
                        .add(modifier("text", _3xl))
                        .add(skeleton().fontSize(_3xl).screenReaderText("Loading font size 3xl"))
                        .add(br())
                        .add(modifier("text", _2xl))
                        .add(skeleton().fontSize(_2xl).screenReaderText("Loading font size 2xl"))
                        .add(br())
                        .add(modifier("text", xl))
                        .add(skeleton().fontSize(xl).screenReaderText("Loading font size xl"))
                        .add(br())
                        .add(modifier("text", lg))
                        .add(skeleton().fontSize(lg).screenReaderText("Loading font size lg"))
                        .add(br())
                        .add(modifier("text", md))
                        .add(skeleton().fontSize(md).screenReaderText("Loading font size md"))
                        .add(br())
                        .add(modifier("text", sm))
                        .add(skeleton().fontSize(sm).screenReaderText("Loading font size sm"))
                        .element()
                // @code-end:skeleton-text
        ));

        addSnippet(new Snippet("skeleton-shapes", "Shapes",
                code("skeleton-shapes"), () ->
                // @code-start:skeleton-shapes
                div()
                        .add("Small circle")
                        .add(skeleton().shape(circle).width("15%").screenReaderText("Loading small circle contents"))
                        .add(br())
                        .add("Medium circle")
                        .add(skeleton().shape(circle).width("30%").screenReaderText("Loading medium circle contents"))
                        .add(br())
                        .add("Large circle")
                        .add(skeleton().shape(circle).width("50%").screenReaderText("Loading large circle contents"))
                        .add(br())
                        .add("Small square")
                        .add(skeleton().shape(square).width("15%").screenReaderText("Loading small square contents"))
                        .add(br())
                        .add("Medium square")
                        .add(skeleton().shape(square).width("30%").screenReaderText("Loading medium square contents"))
                        .add(br())
                        .add("Large square")
                        .add(skeleton().shape(square).width("50%").screenReaderText("Loading large square contents"))
                        .add(br())
                        .add("Small rectangle")
                        .add(div().style("height", "200px")
                                .add(skeleton().shape(square)
                                        .width("50%")
                                        .height("50%")
                                        .screenReaderText("Loading small rectangle contents")))
                        .add(br())
                        .add("Medium rectangle")
                        .add(div().style("height", "200px")
                                .add(skeleton().shape(square)
                                        .width("75%")
                                        .height("75%")
                                        .screenReaderText("Loading medium rectangle contents")))
                        .add(br())
                        .add("Large rectangle")
                        .add(div().style("height", "200px")
                                .add(skeleton().shape(square)
                                        .height("100%")
                                        .screenReaderText("Loading large rectangle contents")))
                        .element()
                // @code-end:skeleton-shapes
        ));

        startApiDocs(Skeleton.class);
        addApiDoc(Shape.class, modifier);
        addApiDoc(Skeleton.class, component);
    }
}
