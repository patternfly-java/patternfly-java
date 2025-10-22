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
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.badge.Badge.badge;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/badge", title = "Badge")
public class BadgeComponent extends SnippetPage {

    public BadgeComponent() {
        super(components.get("badge"));

        startExamples();
        addSnippet(new Snippet("badge-read", "Badge (read)",
                code("badge-read"), () ->
                // @code-start:badge-read
                div()
                        .add(badge(7).read()).add(" ")
                        .add(badge(24).read()).add(" ")
                        .add(badge(423).read()).add(" ")
                        .add(badge(1000).limit(999).read())
                        .add(br())
                        .add(badge(7).read().display(v -> v + " apples")).add(" ")
                        .add(badge(24).read().display(v -> v + " apples")).add(" ")
                        .add(badge(423).read().display(v -> v + " apples")).add(" ")
                        .add(badge(1000).limit(999).read()
                                .display(v -> v + " apples")
                                .maxDisplay(v -> "More apples than you can ever eat"))
                        .element()
                // @code-end:badge-read
        ));

        addSnippet(new Snippet("badge-unread", "Badge (unread)",
                code("badge-unread"), () ->
                // @code-start:badge-unread
                div()
                        .add(badge(7).unread()).add(" ")
                        .add(badge(24).unread()).add(" ")
                        .add(badge(423).unread()).add(" ")
                        .add(badge(1000).limit(999).unread())
                        .add(br())
                        .add(badge(7).unread().display(v -> v + " apples")).add(" ")
                        .add(badge(24).unread().display(v -> v + " apples")).add(" ")
                        .add(badge(423).unread().display(v -> v + " apples")).add(" ")
                        .add(badge(1000).limit(999).unread()
                                .display(v -> v + " apples")
                                .maxDisplay(v -> "More apples than you can ever eat"))
                        .element()
                // @code-end:badge-unread
        ));

        startApiDocs(Badge.class);
        addApiDoc(Badge.class, component);
    }
}
