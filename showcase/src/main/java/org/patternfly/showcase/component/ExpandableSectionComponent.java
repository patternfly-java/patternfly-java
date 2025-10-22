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
import org.patternfly.component.badge.Badge;
import org.patternfly.component.expandable.ExpandableSection;
import org.patternfly.component.expandable.ExpandableSectionContent;
import org.patternfly.component.expandable.ExpandableSectionToggle;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.badge.Badge.badge;
import static org.patternfly.component.expandable.ExpandableSection.expandableSection;
import static org.patternfly.component.expandable.ExpandableSectionContent.expandableSectionContent;
import static org.patternfly.component.expandable.ExpandableSectionToggle.expandableSectionToggle;
import static org.patternfly.icon.IconSets.fas.checkCircle;
import static org.patternfly.layout.stack.Stack.stack;
import static org.patternfly.layout.stack.StackItem.stackItem;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/expandable-section", title = "Expandable section")
public class ExpandableSectionComponent extends SnippetPage {

    public ExpandableSectionComponent() {
        super(components.get("expandable-section"));

        startExamples();
        addSnippet(new Snippet("expandable-section-basic", "Basic",
                code("expandable-section-basic"), () ->
                // @code-start:expandable-section-basic
                div()
                        .add(expandableSection()
                                .addToggle(expandableSectionToggle("Show more"))
                                .addContent(expandableSectionContent()
                                        .text("This content is visible only when the component is expanded.")))
                        .element()
                // @code-end:expandable-section-basic
        ));

        addSnippet(new Snippet("expandable-section-dynamic-text", "Basic with dynamic toggle text",
                code("expandable-section-dynamic-text"), () ->
                // @code-start:expandable-section-dynamic-text
                div()
                        .add(expandableSection()
                                .addToggle(expandableSectionToggle("Show more", "Show less"))
                                .addContent(expandableSectionContent()
                                        .text("This content is visible only when the component is expanded.")))
                        .element()
                // @code-end:expandable-section-dynamic-text
        ));

        addSnippet(new Snippet("expandable-section-detached", "Detached",
                code("expandable-section-detached"), () ->
                // @code-start:expandable-section-detached
                div()
                        .add(stack().gutter()
                                .addItem(stackItem()
                                        .add(expandableSection("detached-content")
                                                .detachedFrom("detached-toggle")
                                                .addContent(expandableSectionContent()
                                                        .text("This content is visible only when the component is expanded."))))
                                .addItem(stackItem()
                                        .add(expandableSection("detached-toggle")
                                                .detachedFrom("detached-content")
                                                .addToggle(expandableSectionToggle("Show more", "Show less")
                                                        .up()))))
                        .element()
                // @code-end:expandable-section-detached
        ));

        addSnippet(new Snippet("expandable-section-disclosure", "Disclosure variation",
                code("expandable-section-disclosure"), () ->
                // @code-start:expandable-section-disclosure
                div()
                        .add(expandableSection()
                                .disclosure()
                                .addToggle(expandableSectionToggle("Show more", "Show less"))
                                .addContent(expandableSectionContent()
                                        .text("This content is visible only when the component is expanded.")))
                        .element()
                // @code-end:expandable-section-disclosure
        ));

        addSnippet(new Snippet("expandable-section-indented", "Indented",
                code("expandable-section-indented"), () ->
                // @code-start:expandable-section-indented
                div()
                        .add(expandableSection()
                                .indented()
                                .addToggle(expandableSectionToggle("Show more", "Show less"))
                                .addContent(expandableSectionContent()
                                        .text("This content is visible only when the component is expanded.")))
                        .element()
                // @code-end:expandable-section-indented
        ));

        addSnippet(new Snippet("expandable-section-custom-toggle", "With custom toggle content",
                code("expandable-section-custom-toggle"), () -> {
            // @code-start:expandable-section-custom-toggle
            Badge badge = badge(4).read();
            return div()
                    .add(expandableSection()
                            .onToggle((e, c, expanded) -> badge.count(badge.count() + 1))
                            .addToggle(expandableSectionToggle()
                                    .add(div()
                                            .add(span().text("You can also use icons "))
                                            .add(checkCircle())
                                            .add(span().text(" or badges "))
                                            .add(badge)
                                            .add(span().text(" !"))))
                            .addContent(expandableSectionContent()
                                    .text("This content is visible only when the component is expanded.")))
                    .element();
            // @code-end:expandable-section-custom-toggle
        }));

        addSnippet(new Snippet("expandable-section-truncate", "Truncate",
                code("expandable-section-truncate"), () ->
                // @code-start:expandable-section-truncate
                div()
                        .add(expandableSection()
                                .truncate(2) // lines
                                .addContent(expandableSectionContent()
                                        .text(LoremIpsum.paragraphs(20)))
                                .addToggle(expandableSectionToggle("Show more", "Show less")))
                        .element()
                // @code-end:expandable-section-truncate
        ));

        startApiDocs(ExpandableSection.class);
        addApiDoc(ExpandableSection.class, component);
        addApiDoc(ExpandableSectionContent.class, subcomponent);
        addApiDoc(ExpandableSectionToggle.class, subcomponent);
    }
}
