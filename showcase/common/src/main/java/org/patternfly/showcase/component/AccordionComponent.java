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
import org.patternfly.component.accordion.Accordion;
import org.patternfly.component.accordion.AccordionItem;
import org.patternfly.component.accordion.AccordionItemBody;
import org.patternfly.showcase.ApiDoc;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.IconPosition.end;
import static org.patternfly.component.accordion.Accordion.accordion;
import static org.patternfly.component.accordion.AccordionItem.accordionItem;
import static org.patternfly.component.accordion.AccordionItemBody.accordionItemBody;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.icon.IconSets.fas.arrowRight;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/accordion", title = "Accordion")
public class AccordionComponent extends SnippetPage {

    public AccordionComponent() {
        super(components.get("accordion"));

        startExamples();
        addSnippet(new Snippet("accordion-dl", "Definition list",
                code("accordion-dl"), () ->
                // @code-start:accordion-dl
                div()
                        .add(accordion().singleExpand()
                                .addItem(accordionItem("accordion-dl-0", "Item one").expanded()
                                        .add(p().text(LoremIpsum.paragraphs(5))))
                                .addItem(accordionItem("accordion-dl-1", "Item two")
                                        .add(p().text(LoremIpsum.paragraphs(7))))
                                .addItem(accordionItem("accordion-dl-2", "Item three")
                                        .add(p().text(LoremIpsum.paragraphs(6))))
                                .addItem(accordionItem("accordion-dl-3", "Item four")
                                        .add(p().text(LoremIpsum.paragraphs(30))))
                                .addItem(accordionItem("accordion-dl-4", "Item five")
                                        .add(p().text(LoremIpsum.paragraphs(3)))))
                        .element()
                // @code-end:accordion-dl
        ));

        addSnippet(new Snippet("accordion-single", "Single expand behavior",
                code("accordion-single"), () ->
                // @code-start:accordion-single
                div()
                        .add(accordion().singleExpand()
                                .addItem(accordionItem("accordion-single-0", "Item one").expanded()
                                        .add(p().text(LoremIpsum.paragraphs(5))))
                                .addItem(accordionItem("accordion-single-1", "Item two")
                                        .add(p().text(LoremIpsum.paragraphs(7))))
                                .addItem(accordionItem("accordion-single-2", "Item three")
                                        .add(p().text(LoremIpsum.paragraphs(6))))
                                .addItem(accordionItem("accordion-single-3", "Item four")
                                        .add(p().text(LoremIpsum.paragraphs(30))))
                                .addItem(accordionItem("accordion-single-4", "Item five")
                                        .add(p().text(LoremIpsum.paragraphs(3)))))
                        .element()
                // @code-end:accordion-single
        ));

        addSnippet(new Snippet("accordion-fixed", "Fixed with multiple expand behavior",
                code("accordion-fixed"), () ->
                // @code-start:accordion-fixed
                div()
                        .add(accordion().fixed()
                                .addItem(accordionItem("accordion-fixed-0", "Item one").expanded()
                                        .add(p().text(LoremIpsum.paragraphs(20))))
                                .addItem(accordionItem("accordion-fixed-1", "Item two")
                                        .add(p().text(LoremIpsum.paragraphs(15))))
                                .addItem(accordionItem("accordion-fixed-2", "Item three")
                                        .add(p().text(LoremIpsum.paragraphs(10))))
                                .addItem(accordionItem("accordion-fixed-3", "Item four")
                                        .add(p().text(LoremIpsum.paragraphs(50))))
                                .addItem(accordionItem("accordion-fixed-4", "Item five")
                                        .add(p().text(LoremIpsum.paragraphs(5)))))
                        .element()
                // @code-end:accordion-fixed
        ));

        addSnippet(new Snippet("accordion-bordered", "Bordered",
                code("accordion-bordered"), () ->
                // @code-start:accordion-bordered
                div()
                        .add(accordion().singleExpand().bordered()
                                .addItem(accordionItem("accordion-bordered-0", "Item one").expanded()
                                        .add(p().text(LoremIpsum.paragraphs(5))))
                                .addItem(accordionItem("accordion-bordered-1", "Item two")
                                        .add(p().text(LoremIpsum.paragraphs(7))))
                                .addItem(accordionItem("accordion-bordered-2", "Item three")
                                        .add(p().text(LoremIpsum.paragraphs(6))))
                                .addItem(accordionItem("accordion-bordered-3", "Item four")
                                        .addBody(accordionItemBody()
                                                .add(p().text(LoremIpsum.paragraphs(30))))
                                        .addBody(accordionItemBody()
                                                .add(button()
                                                        .text("Call to action")
                                                        .link()
                                                        .inline())))
                                .addItem(accordionItem("accordion-bordered-4", "Item five")
                                        .add(p().text(LoremIpsum.paragraphs(3)))))
                        .element()
                // @code-end:accordion-bordered
        ));

        addSnippet(new Snippet("accordion-large", "Large",
                code("accordion-large"), () ->
                // @code-start:accordion-large
                div()
                        .add(accordion().singleExpand().large()
                                .addItem(accordionItem("accordion-large-0", "Item one").expanded()
                                        .add(p().text(LoremIpsum.paragraphs(5))))
                                .addItem(accordionItem("accordion-large-1", "Item two")
                                        .add(p().text(LoremIpsum.paragraphs(7))))
                                .addItem(accordionItem("accordion-large-2", "Item three")
                                        .add(p().text(LoremIpsum.paragraphs(6))))
                                .addItem(accordionItem("accordion-large-3", "Item four")
                                        .addBody(accordionItemBody()
                                                .add(p().text(LoremIpsum.paragraphs(30))))
                                        .addBody(accordionItemBody()
                                                .add(button()
                                                        .iconAndText(arrowRight(), "Call to action", end)
                                                        .link()
                                                        .inline()
                                                        .callToAction())))
                                .addItem(accordionItem("accordion-large-4", "Item five")
                                        .add(p().text(LoremIpsum.paragraphs(3)))))
                        .element()
                // @code-end:accordion-large
        ));

        startApiDocs(Accordion.class);
        addApiDoc(Accordion.class, ApiDoc.Type.component);
        addApiDoc(AccordionItem.class, ApiDoc.Type.subcomponent);
        addApiDoc(AccordionItemBody.class, ApiDoc.Type.subcomponent);
    }
}
