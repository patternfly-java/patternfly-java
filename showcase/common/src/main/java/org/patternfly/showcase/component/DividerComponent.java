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
import org.patternfly.component.divider.Divider;
import org.patternfly.component.divider.DividerType;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.style.Inset;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.divider.Divider.divider;
import static org.patternfly.component.divider.DividerType.div;
import static org.patternfly.component.divider.DividerType.hr;
import static org.patternfly.component.divider.DividerType.li;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.list;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.flex.FlexItem.flexItem;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Breakpoint._2xl;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.lg;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoint.sm;
import static org.patternfly.style.Breakpoint.xl;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Orientation.horizontal;
import static org.patternfly.style.Orientation.vertical;

@Route(value = "/components/divider", title = "Divider")
public class DividerComponent extends SnippetPage {

    public DividerComponent() {
        super(components.get("divider"));

        startExamples();
        addSnippet(new Snippet("divider-hr", "Using hr",
                code("divider-hr"), () ->
                // @code-start:divider-hr
                div()
                        .add(divider(hr))
                        .element()
                // @code-end:divider-hr
        ));

        addSnippet(new Snippet("divider-li", "Using li",
                code("divider-li"), () ->
                // @code-start:divider-li
                div()
                        .add(ul().attr(role, list)
                                .add(li().text("List item one"))
                                .add(divider(li))
                                .add(li().text("List item two")))
                        .element()
                // @code-end:divider-li
        ));

        addSnippet(new Snippet("divider-div", "Using div",
                code("divider-div"), () ->
                // @code-start:divider-div
                div()
                        .add(divider(div))
                        .element()
                // @code-end:divider-div
        ));

        addSnippet(new Snippet("divider-inset-md", "Inset medium",
                code("divider-inset-md"), () ->
                // @code-start:divider-inset-md
                div()
                        .add(divider(hr).inset(breakpoints(default_, Inset.md)))
                        .element()
                // @code-end:divider-inset-md
        ));

        addSnippet(new Snippet("divider-inset-breakpoints", "Inset at various breakpoints",
                code("divider-inset-breakpoints"), () ->
                // @code-start:divider-inset-breakpoints
                div()
                        .add(divider(hr).inset(breakpoints(
                                default_, Inset.md,
                                md, Inset.none,
                                lg, Inset._3xl,
                                xl, Inset.lg)))
                        .element()
                // @code-end:divider-inset-breakpoints
        ));

        addSnippet(new Snippet("divider-orientation-vertical", "Vertical in flex layout",
                code("divider-orientation-vertical"), () ->
                // @code-start:divider-orientation-vertical
                div()
                        .add(flex()
                                .addItem(flexItem().text("First item"))
                                .add(divider(hr).orientation(breakpoints(default_, vertical)))
                                .addItem(flexItem().text("Second item")))
                        .element()
                // @code-end:divider-orientation-vertical
        ));

        addSnippet(new Snippet("divider-orientation-vertical-inset-md", "Vertical in flex layout, inset medium",
                code("divider-orientation-vertical-inset-md"), () ->
                // @code-start:divider-orientation-vertical-inset-md
                div()
                        .add(flex()
                                .addItem(flexItem().text("First item"))
                                .add(divider(hr)
                                        .orientation(breakpoints(default_, vertical))
                                        .inset(breakpoints(default_, Inset.md)))
                                .addItem(flexItem().text("Second item")))
                        .element()
                // @code-end:divider-orientation-vertical-inset-md
        ));

        addSnippet(new Snippet("divider-orientation-vertical-inset-breakpoints",
                "Vertical in flex layout, inset at various breakpoints",
                code("divider-orientation-vertical-inset-breakpoints"), () ->
                // @code-start:divider-orientation-vertical-inset-breakpoints
                div()
                        .add(flex()
                                .addItem(flexItem().text("First item"))
                                .add(divider(hr)
                                        .orientation(breakpoints(default_, vertical))
                                        .inset(breakpoints(
                                                default_, Inset.md,
                                                md, Inset.none,
                                                lg, Inset.sm,
                                                xl, Inset.xs)))
                                .addItem(flexItem().text("Second item")))
                        .element()
                // @code-end:divider-orientation-vertical-inset-breakpoints
        ));

        addSnippet(new Snippet("divider-orientation-switch", "Switch orientation at various breakpoints",
                code("divider-orientation-switch"), () ->
                // @code-start:divider-orientation-switch
                div()
                        .add(flex()
                                .addItem(flexItem().text("First item"))
                                .add(divider(hr).orientation(breakpoints(
                                        default_, vertical,
                                        sm, horizontal,
                                        md, vertical,
                                        lg, horizontal,
                                        xl, vertical,
                                        _2xl, horizontal)))
                                .addItem(flexItem().text("Second item")))
                        .element()
                // @code-end:divider-orientation-switch
        ));

        startApiDocs(Divider.class);
        addApiDoc(Divider.class, component);
        addApiDoc(DividerType.class, other);
    }
}
