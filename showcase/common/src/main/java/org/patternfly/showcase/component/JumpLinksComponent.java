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
import org.patternfly.component.jumplinks.JumpLinks;
import org.patternfly.component.jumplinks.JumpLinksItem;
import org.patternfly.component.jumplinks.JumpLinksList;
import org.patternfly.showcase.ApiDoc;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.jumplinks.JumpLinks.jumpLinks;
import static org.patternfly.component.jumplinks.JumpLinksItem.jumpLinksItem;
import static org.patternfly.component.jumplinks.JumpLinksList.jumpLinksList;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.ExpandableModifier.expandable;

@Route(value = "/components/jump-links", title = "Jump links")
public class JumpLinksComponent extends SnippetPage {

    public JumpLinksComponent() {
        super(components.get("jump-links"));

        startExamples(p()
                .add("These examples are static because they have no element to scroll spy on that makes sense. Check out the code of the ")
                .add(a("https://github.com/patternfly-java/showcase/blob/main/src/main/java/org/patternfly/showcase/SnippetPage.java",
                        ApiDoc.API_DOC_TARGET).text("showcase"))
                .add(" to see how tu use scroll spying."));
        addSnippet(new Snippet("jump-links-basic", "Basic",
                code("jump-links-basic"), () ->
                // @code-start:jump-links-basic
                div()
                        .add(jumpLinks()
                                .addItem(jumpLinksItem("jump-links-basic-0", "Inactive section"))
                                .addItem(jumpLinksItem("jump-links-basic-1", "Active section", "#item-1")
                                        .active())
                                .addItem(jumpLinksItem("jump-links-basic-2", "Inactive section")))
                        .element()
                // @code-end:jump-links-basic
        ));

        addSnippet(new Snippet("jump-links-center", "With centered list",
                code("jump-links-center"), () ->
                // @code-start:jump-links-center
                div()
                        .add(jumpLinks().center()
                                .addItem(jumpLinksItem("jump-links-center-0", "Inactive section"))
                                .addItem(jumpLinksItem("jump-links-center-1", "Active section", "#item-1")
                                        .active())
                                .addItem(jumpLinksItem("jump-links-center-2", "Inactive section")))
                        .element()
                // @code-end:jump-links-center
        ));

        addSnippet(new Snippet("jump-links-label", "With label",
                code("jump-links-label"), () ->
                // @code-start:jump-links-label
                div()
                        .add(jumpLinks("Jump to section")
                                .addItem(jumpLinksItem("jump-links-label-0", "Inactive section"))
                                .addItem(jumpLinksItem("jump-links-label-1", "Active section", "#item-1")
                                        .active())
                                .addItem(jumpLinksItem("jump-links-label-2", "Inactive section")))
                        .add(br())
                        .add(jumpLinks("Jump to section").center()
                                .addItem(jumpLinksItem("jump-links-label-3", "Inactive section"))
                                .addItem(jumpLinksItem("jump-links-label-4", "Active section", "#item-4")
                                        .active())
                                .addItem(jumpLinksItem("jump-links-label-5", "Inactive section")))
                        .element()
                // @code-end:jump-links-label
        ));

        addSnippet(new Snippet("jump-links-vertical", "Vertical",
                code("jump-links-vertical"), () ->
                // @code-start:jump-links-vertical
                div()
                        .add(jumpLinks().vertical()
                                .addItem(jumpLinksItem("jump-links-vertical-0", "Inactive section"))
                                .addItem(jumpLinksItem("jump-links-vertical-1", "Active section", "#item-1")
                                        .active())
                                .addItem(jumpLinksItem("jump-links-vertical-2", "Inactive section")))
                        .element()
                // @code-end:jump-links-vertical
        ));

        addSnippet(new Snippet("jump-links-vertical-label", "Vertical with label",
                code("jump-links-vertical-label"), () ->
                // @code-start:jump-links-vertical-label
                div()
                        .add(jumpLinks("Jump to section").vertical()
                                .addItem(jumpLinksItem("jump-links-vertical-label-0", "Inactive section"))
                                .addItem(jumpLinksItem("jump-links-vertical-label-1", "Active section", "#item-1")
                                        .active())
                                .addItem(jumpLinksItem("jump-links-vertical-label-2", "Inactive section")))
                        .element()
                // @code-end:jump-links-vertical-label
        ));

        addSnippet(new Snippet("jump-links-expandable", "Expandable vertical with subsection",
                code("jump-links-expandable"), () ->
                // @code-start:jump-links-expandable
                div()
                        .add(jumpLinks("Jump to section").vertical().expandable(breakpoints(default_, expandable))
                                .addItem(jumpLinksItem("jump-links-expandable-0", "Inactive section"))
                                .addItem(jumpLinksItem("jump-links-expandable-1", "Section with active subsection")
                                        .addList(jumpLinksList()
                                                .addItem(jumpLinksItem("jump-links-expandable-10", "Active subsection")
                                                        .active())
                                                .addItem(jumpLinksItem("jump-links-expandable-11", "Inactive subsection"))
                                                .addItem(jumpLinksItem("jump-links-expandable-12", "Inactive subsection"))))
                                .addItem(jumpLinksItem("jump-links-expandable-1", "Active section", "#item-1"))
                                .addItem(jumpLinksItem("jump-links-expandable-2", "Inactive section")))
                        .element()
                // @code-end:jump-links-expandable
        ));

        startApiDocs(JumpLinks.class);
        addApiDoc(JumpLinks.class, component);
        addApiDoc(JumpLinksItem.class, subcomponent);
        addApiDoc(JumpLinksList.class, subcomponent);
    }
}
