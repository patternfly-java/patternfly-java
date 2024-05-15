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
import org.patternfly.component.breadcrumb.Breadcrumb;
import org.patternfly.component.breadcrumb.BreadcrumbItem;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.breadcrumb.Breadcrumb.breadcrumb;
import static org.patternfly.component.breadcrumb.BreadcrumbItem.breadcrumbItem;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.showcase.component.NotYetImplemented.nyi;

@Route(value = "/components/breadcrumb", title = "Breadcrumb")
public class BreadcrumbComponent extends SnippetPage {

    public BreadcrumbComponent() {
        super(components.get("breadcrumb"));

        startExamples();
        addSnippet(new Snippet("breadcrumb-basic", "Basic",
                code("breadcrumb-basic"), () ->
                // @code-start:breadcrumb-basic
                div()
                        .add(breadcrumb()
                                .addItem(breadcrumbItem("Section home", "#item-0"))
                                .addItem(breadcrumbItem("Section title", "#item-1"))
                                .addItem(breadcrumbItem("Section title", "#item-2"))
                                .addItem(breadcrumbItem("Section landing", "#item-3").active()))
                        .element()
                // @code-end:breadcrumb-basic
        ));

        addSnippet(new Snippet("breadcrumb-no-home-link", "Without home link",
                code("breadcrumb-no-home-link"), () ->
                // @code-start:breadcrumb-no-home-link
                div()
                        .add(breadcrumb()
                                .addItem(breadcrumbItem("Section home"))
                                .addItem(breadcrumbItem("Section title", "#item-0"))
                                .addItem(breadcrumbItem("Section title", "#item-1"))
                                .addItem(breadcrumbItem("Section title", "#item-2"))
                                .addItem(breadcrumbItem("Section title", "#item-3"))
                                .addItem(breadcrumbItem("Section landing", "#item-4").active()))
                        .element()
                // @code-end:breadcrumb-no-home-link
        ));

        addSnippet(new Snippet("breadcrumb-heading", "With heading",
                code("breadcrumb-heading"), () ->
                // @code-start:breadcrumb-heading
                nyi().element()
                // @code-end:breadcrumb-heading
        ));

        addSnippet(new Snippet("breadcrumb-dropdown", "With dropdown",
                code("breadcrumb-dropdown"), () ->
                // @code-start:breadcrumb-dropdown
                nyi().element()
                // @code-end:breadcrumb-dropdown
        ));

        startApiDocs(Breadcrumb.class);
        addApiDoc(Breadcrumb.class, component);
        addApiDoc(BreadcrumbItem.class, subcomponent);
    }
}
