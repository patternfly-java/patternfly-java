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

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.function.Supplier;

import org.jboss.elemento.router.Route;
import org.patternfly.component.Severity;
import org.patternfly.component.emptystate.EmptyState;
import org.patternfly.component.emptystate.EmptyStateActions;
import org.patternfly.component.emptystate.EmptyStateBody;
import org.patternfly.component.emptystate.EmptyStateFooter;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.emptystate.EmptyState.emptyState;
import static org.patternfly.component.emptystate.EmptyStateActions.emptyStateActions;
import static org.patternfly.component.emptystate.EmptyStateBody.emptyStateBody;
import static org.patternfly.component.emptystate.EmptyStateFooter.emptyStateFooter;
import static org.patternfly.icon.IconSets.fas.cubes;
import static org.patternfly.icon.IconSets.fas.search;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Size.sm;
import static org.patternfly.style.Size.xl;
import static org.patternfly.style.Size.xs;

@Route(value = "/components/empty-state", title = "Empty state")
public class EmptyStateComponent extends SnippetPage {

    @SuppressWarnings("unchecked")
    public EmptyStateComponent() {
        super(components.get("empty-state"));

        startExamples();
        addSnippet(new Snippet("empty-state-basic", "Basic",
                code("empty-state-basic"), () ->
                // @code-start:empty-state-basic
                div()
                        .add(emptyState()
                                .text("Empty State")
                                .icon(cubes())
                                .addBody(emptyStateBody().text(
                                        "This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs."))
                                .addFooter(emptyStateFooter()
                                        .addActions(emptyStateActions()
                                                .add(button("Primary action").primary()))
                                        .addActions(emptyStateActions()
                                                .add(button("Multiple").link())
                                                .add(button("Action Buttons").link())
                                                .add(button("Can").link())
                                                .add(button("Go here").link())
                                                .add(button("In the secondary").link())
                                                .add(button("Action area").link()))))
                        .element()
                // @code-end:empty-state-basic
        ));

        addSnippet(new Snippet("empty-state-xs", "Extra small",
                code("empty-state-xs"), () ->
                // @code-start:empty-state-xs
                div()
                        .add(emptyState()
                                .size(xs)
                                .text("Empty State")
                                .icon(cubes())
                                .addBody(emptyStateBody().text(
                                        "This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs."))
                                .addFooter(emptyStateFooter()
                                        .addActions(emptyStateActions()
                                                .add(button("Multiple").link())
                                                .add(button("Action Buttons").link())
                                                .add(button("Can").link())
                                                .add(button("Go here").link())
                                                .add(button("In the secondary").link())
                                                .add(button("Action area").link()))))
                        .element()
                // @code-end:empty-state-xs
        ));

        addSnippet(new Snippet("empty-state-small", "Small",
                code("empty-state-small"), () ->
                // @code-start:empty-state-small
                div()
                        .add(emptyState()
                                .size(sm)
                                .text("Empty State")
                                .icon(cubes())
                                .addBody(emptyStateBody().text(
                                        "This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs."))
                                .addFooter(emptyStateFooter()
                                        .addActions(emptyStateActions()
                                                .add(button("Primary action").primary()))
                                        .addActions(emptyStateActions()
                                                .add(button("Multiple").link())
                                                .add(button("Action Buttons").link())
                                                .add(button("Can").link())
                                                .add(button("Go here").link())
                                                .add(button("In the secondary").link())
                                                .add(button("Action area").link()))))
                        .element()
                // @code-end:empty-state-small
        ));

        addSnippet(new Snippet("empty-state-large", "Large",
                code("empty-state-large"), () ->
                // @code-start:empty-state-large
                div()
                        .add(emptyState()
                                .size(lg)
                                .text("Empty State")
                                .icon(cubes())
                                .addBody(emptyStateBody().text(
                                        "This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs."))
                                .addFooter(emptyStateFooter()
                                        .addActions(emptyStateActions()
                                                .add(button("Primary action").primary()))
                                        .addActions(emptyStateActions()
                                                .add(button("Multiple").link())
                                                .add(button("Action Buttons").link())
                                                .add(button("Can").link())
                                                .add(button("Go here").link())
                                                .add(button("In the secondary").link())
                                                .add(button("Action area").link()))))
                        .element()
                // @code-end:empty-state-large
        ));

        addSnippet(new Snippet("empty-state-xl", "Extra large",
                code("empty-state-xl"), () ->
                // @code-start:empty-state-xl
                div()
                        .add(emptyState()
                                .size(xl)
                                .text("Empty State")
                                .icon(cubes())
                                .addBody(emptyStateBody().text(
                                        "This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs."))
                                .addFooter(emptyStateFooter()
                                        .addActions(emptyStateActions()
                                                .add(button("Primary action").primary()))
                                        .addActions(emptyStateActions()
                                                .add(button("Multiple").link())
                                                .add(button("Action Buttons").link())
                                                .add(button("Can").link())
                                                .add(button("Go here").link())
                                                .add(button("In the secondary").link())
                                                .add(button("Action area").link()))))
                        .element()
                // @code-end:empty-state-xl
        ));

        addSnippet(new Snippet("empty-state-status", "With status",
                code("empty-state-status"), () -> {
            // @code-start:empty-state-status
            LinkedHashMap<Severity, String> status = new LinkedHashMap<>();
            status.put(Severity.success, "You're all set!");
            status.put(Severity.danger, "You're not set");
            status.put(Severity.warning, "You're probably not set");
            status.put(Severity.info, "You might be set");
            status.put(Severity.custom, "You're custom");
            Iterator<Map.Entry<Severity, String>>[] iterator = new Iterator[]{status.entrySet().iterator()};
            Supplier<Map.Entry<Severity, String>> nextStatus = () -> {
                if (!iterator[0].hasNext()) {
                    iterator[0] = status.entrySet().iterator();
                }
                return iterator[0].next();
            };

            EmptyState emptyState = emptyState();
            Map.Entry<Severity, String> first = nextStatus.get();
            return div()
                    .add(emptyState
                            .status(first.getKey())
                            .text(first.getValue())
                            .addBody(emptyStateBody().text(
                                    "This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs."))
                            .addFooter(emptyStateFooter()
                                    .addActions(emptyStateActions()
                                            .add(button("Toggle status")
                                                    .primary()
                                                    .onClick((e, b) -> {
                                                        Map.Entry<Severity, String> next = nextStatus.get();
                                                        emptyState.text(next.getValue());
                                                        emptyState.status(next.getKey());
                                                    })
                                            ))
                                    .addActions(emptyStateActions()
                                            .add(button("Multiple").link())
                                            .add(button("Action Buttons").link())
                                            .add(button("Can").link())
                                            .add(button("Go here").link())
                                            .add(button("In the secondary").link())
                                            .add(button("Action area").link()))))
                    .element();
            // @code-end:empty-state-status
        }));

        addSnippet(new Snippet("empty-state-spinner", "Spinner",
                code("empty-state-spinner"), () ->
                // @code-start:empty-state-spinner
                div()
                        .add(emptyState()
                                .text("Loading...")
                                .spinner("Loading..."))
                        .element()
                // @code-end:empty-state-spinner
        ));

        addSnippet(new Snippet("empty-state-no-match", "No match found",
                code("empty-state-no-match"), () ->
                // @code-start:empty-state-no-match
                div()
                        .add(emptyState()
                                .text("No results found")
                                .icon(search())
                                .addBody(emptyStateBody().text(
                                        "No results match the filter criteria. Clear all filters and try again."))
                                .addFooter(emptyStateFooter()
                                        .addActions(emptyStateActions()
                                                .add(button("Clear all filters").link()))))
                        .element()
                // @code-end:empty-state-no-match
        ));

        startApiDocs(EmptyState.class);
        addApiDoc(EmptyState.class, component);
        addApiDoc(EmptyStateActions.class, subcomponent);
        addApiDoc(EmptyStateBody.class, subcomponent);
        addApiDoc(EmptyStateFooter.class, subcomponent);
    }
}
