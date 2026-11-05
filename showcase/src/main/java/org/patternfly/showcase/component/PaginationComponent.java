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
import org.patternfly.component.pagination.Display;
import org.patternfly.component.pagination.PageInfo;
import org.patternfly.component.pagination.PageSize;
import org.patternfly.component.pagination.Pagination;
import org.patternfly.component.pagination.PaginationHandler;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.pagination.Pagination.pagination;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.handler;
import static org.patternfly.showcase.ApiDoc.Type.modifier;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/pagination", title = "Pagination")
public class PaginationComponent extends SnippetPage {

    public PaginationComponent() {
        super(components.get("pagination"));

        startExamples();
        addSnippet(new Snippet("pagination-top", "Top",
                code("pagination-top"), () ->
                // @code-start:pagination-top
                div()
                        .add(pagination(PageInfo.of(536)))
                        .element()
                // @code-end:pagination-top
        ));

        addSnippet(new Snippet("pagination-bottom", "Bottom",
                code("pagination-bottom"), () ->
                // @code-start:pagination-bottom
                div()
                        .add(pagination(PageInfo.of(379))
                                .bottom())
                        .element()
                // @code-end:pagination-bottom
        ));

        addSnippet(new Snippet("pagination-indeterminate", "Indeterminate",
                code("pagination-indeterminate"), () ->
                // @code-start:pagination-indeterminate
                div()
                        .add(pagination(PageInfo.indeterminate()))
                        .element()
                // @code-end:pagination-indeterminate
        ));

        addSnippet(new Snippet("pagination-disabled", "Disabled",
                code("pagination-disabled"), () ->
                // @code-start:pagination-disabled
                div()
                        .add(pagination(PageInfo.of(437))
                                .disabled())
                        .element()
                // @code-end:pagination-disabled
        ));

        addSnippet(new Snippet("pagination-no-items", "No items",
                code("pagination-no-items"), () ->
                // @code-start:pagination-no-items
                div()
                        .add(pagination(PageInfo.noItems()))
                        .element()
                // @code-end:pagination-no-items
        ));

        addSnippet(new Snippet("pagination-one-page", "One page",
                code("pagination-one-page"), () ->
                // @code-start:pagination-one-page
                div()
                        .add(pagination(PageInfo.of(15)))
                        .element()
                // @code-end:pagination-one-page
        ));

        addSnippet(new Snippet("pagination-compact", "Compact",
                code("pagination-compact"), () ->
                // @code-start:pagination-compact
                div()
                        .add(pagination(PageInfo.of(312))
                                .compact())
                        .element()
                // @code-end:pagination-compact
        ));

        startApiDocs(Pagination.class);
        addApiDoc(Display.class, modifier);
        addApiDoc(PageInfo.class, other);
        addApiDoc(PageSize.class, other);
        addApiDoc(Pagination.class, component);
        addApiDoc(PaginationHandler.class, handler);
    }
}
