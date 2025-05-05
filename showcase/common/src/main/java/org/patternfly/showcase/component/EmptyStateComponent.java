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
import org.patternfly.component.emptystate.EmptyState;
import org.patternfly.component.emptystate.EmptyStateActions;
import org.patternfly.component.emptystate.EmptyStateBody;
import org.patternfly.component.emptystate.EmptyStateFooter;
import org.patternfly.component.emptystate.EmptyStateHeader;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.emptystate.EmptyState.emptyState;
import static org.patternfly.component.emptystate.EmptyStateActions.emptyStateActions;
import static org.patternfly.component.emptystate.EmptyStateBody.emptyStateBody;
import static org.patternfly.component.emptystate.EmptyStateFooter.emptyStateFooter;
import static org.patternfly.component.emptystate.EmptyStateHeader.emptyStateHeader;
import static org.patternfly.icon.IconSets.fas.check;
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
import static org.patternfly.style.Status.success;

@Route(value = "/components/empty-state", title = "Empty state")
public class EmptyStateComponent extends SnippetPage {

    public EmptyStateComponent() {
        super(components.get("empty-state"));

        startExamples();
        addSnippet(new Snippet("empty-state-basic", "Basic",
                code("empty-state-basic"), () ->
                // @code-start:empty-state-basic
                div()
                        .add(emptyState()
                                .addHeader(emptyStateHeader(4)
                                        .icon(cubes())
                                        .text("Empty state"))
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
                                .addHeader(emptyStateHeader(4)
                                        .text("Empty state"))
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
                                .addHeader(emptyStateHeader(4)
                                        .icon(cubes())
                                        .text("Empty state"))
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
                                .addHeader(emptyStateHeader(4)
                                        .icon(cubes())
                                        .text("Empty state"))
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
                                .addHeader(emptyStateHeader(4)
                                        .icon(cubes())
                                        .text("Empty state"))
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

        addSnippet(new Snippet("empty-state-spinner", "Spinner",
                code("empty-state-spinner"), () ->
                // @code-start:empty-state-spinner
                div()
                        .add(emptyState()
                                .addHeader(emptyStateHeader(4)
                                        .spinner("Loading...")
                                        .text("Loading")))
                        .element()
                // @code-end:empty-state-spinner
        ));

        addSnippet(new Snippet("empty-state-no-match", "No match found",
                code("empty-state-no-match"), () ->
                // @code-start:empty-state-no-match
                div()
                        .add(emptyState()
                                .addHeader(emptyStateHeader(4)
                                        .icon(search())
                                        .text("No results found"))
                                .addBody(emptyStateBody().text(
                                        "No results match the filter criteria. Clear all filters and try again."))
                                .addFooter(emptyStateFooter()
                                        .addActions(emptyStateActions()
                                                .add(button("Clear all filters").link()))))
                        .element()
                // @code-end:empty-state-no-match
        ));

        addSnippet(new Snippet("empty-state-color", "Custom icon color",
                code("empty-state-color"), () ->
                // @code-start:empty-state-color
                div()
                        .add(emptyState()
                                .addHeader(emptyStateHeader(4)
                                        .icon(check(), success)
                                        .text("Custom icon color"))
                                .addBody(emptyStateBody().text(
                                        "This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.")))
                        .element()
                // @code-end:empty-state-color
        ));

        startApiDocs(EmptyState.class);
        addApiDoc(EmptyState.class, component);
        addApiDoc(EmptyStateActions.class, subcomponent);
        addApiDoc(EmptyStateBody.class, subcomponent);
        addApiDoc(EmptyStateFooter.class, subcomponent);
        addApiDoc(EmptyStateHeader.class, subcomponent);
    }
}
