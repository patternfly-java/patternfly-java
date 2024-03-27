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
import org.patternfly.component.list.DescriptionList;
import org.patternfly.component.list.DescriptionListDescription;
import org.patternfly.component.list.DescriptionListGroup;
import org.patternfly.component.list.DescriptionListTerm;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.style.Size;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.IconPosition.start;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.card.Card.card;
import static org.patternfly.component.list.DescriptionList.descriptionList;
import static org.patternfly.component.list.DescriptionListDescription.descriptionListDescription;
import static org.patternfly.component.list.DescriptionListGroup.descriptionListGroup;
import static org.patternfly.component.list.DescriptionListTerm.descriptionListTerm;
import static org.patternfly.component.popover.Popover.popover;
import static org.patternfly.icon.IconSets.fas.book;
import static org.patternfly.icon.IconSets.fas.cube;
import static org.patternfly.icon.IconSets.fas.flag;
import static org.patternfly.icon.IconSets.fas.globe;
import static org.patternfly.icon.IconSets.fas.plusCircle;
import static org.patternfly.icon.IconSets.patternfly.key;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
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

@Route(value = "/components/description-list", title = "Description list")
public class DescriptionListComponent extends SnippetPage {

    public DescriptionListComponent() {
        super(components.get("description-list"));

        startExamples();
        addSnippet(new Snippet("dl-basic", "Basic",
                code("dl-basic"), () ->
                // @code-start:dl-basic
                div()
                        .add(descriptionList()
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-basic
        ));

        addSnippet(new Snippet("dl-help", "Term help text",
                code("dl-help"), () ->
                // @code-start:dl-help
                div()
                        .add(descriptionList()
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name")
                                                .help(popover().autoWidth()
                                                        .addHeader("Namespace")
                                                        .addBody("Additional namespace info")))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace")
                                                .help(popover().autoWidth()
                                                        .addHeader("Namespace")
                                                        .addBody("Additional namespace info")))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels")
                                                .help(popover().autoWidth()
                                                        .addHeader("Labels")
                                                        .addBody("Additional labels info")))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector")
                                                .help(popover().autoWidth()
                                                        .addHeader("Pod selector")
                                                        .addBody("Additional pod selector info")))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation")
                                                .help(popover().autoWidth()
                                                        .addHeader("Annotation")
                                                        .addBody("Additional annotation info")))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-help
        ));

        addSnippet(new Snippet("dl-default-2-col", "Default 2 col",
                code("dl-default-2-col"), () ->
                // @code-start:dl-default-2-col
                div()
                        .add(descriptionList().columns(breakpoints(default_, 2))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-default-2-col
        ));

        addSnippet(new Snippet("dl-default-3-col-on-lg", "Default 3 col on lg",
                code("dl-default-3-col-on-lg"), () ->
                // @code-start:dl-default-3-col-on-lg
                div()
                        .add(descriptionList().columns(breakpoints(lg, 3))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-default-3-col-on-lg
        ));

        addSnippet(new Snippet("dl-horizontal", "Horizontal",
                code("dl-horizontal"), () ->
                // @code-start:dl-horizontal
                div()
                        .add(descriptionList().horizontal()
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-horizontal
        ));

        addSnippet(new Snippet("dl-horizontal-term-width", "Horizontal using custom term width modifier",
                code("dl-horizontal-term-width"), () ->
                // @code-start:dl-horizontal-term-width
                div()
                        .add(descriptionList().horizontal()
                                .horizontalTermWidth(breakpoints(
                                        default_, "12ch",
                                        sm, "15ch",
                                        md, "20ch",
                                        lg, "28ch",
                                        xl, "30ch",
                                        _2xl, "35ch"))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name longer than the default term width"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-horizontal-term-width
        ));

        addSnippet(new Snippet("dl-horizontal-2-col", "Horizontal 2 col",
                code("dl-horizontal-2-col"), () ->
                // @code-start:dl-horizontal-2-col
                div()
                        .add(descriptionList().horizontal().columns(breakpoints(default_, 2))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-horizontal-2-col
        ));

        addSnippet(new Snippet("dl-horizontal-3-col-on-lg", "Horizontal 3 col on lg",
                code("dl-horizontal-3-col-on-lg"), () ->
                // @code-start:dl-horizontal-3-col-on-lg
                div()
                        .add(descriptionList().horizontal().columns(breakpoints(lg, 3))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-horizontal-3-col-on-lg
        ));

        addSnippet(new Snippet("dl-compact", "Compact",
                code("dl-compact"), () ->
                // @code-start:dl-compact
                div()
                        .add(descriptionList().compact()
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-compact
        ));

        addSnippet(new Snippet("dl-compact-horizontal", "Compact horizontal",
                code("dl-compact-horizontal"), () ->
                // @code-start:dl-compact-horizontal
                div()
                        .add(descriptionList().compact().horizontal()
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-compact-horizontal
        ));

        addSnippet(new Snippet("dl-fluid-horizontal", "Fluid horizontal",
                code("dl-fluid-horizontal"), () ->
                // @code-start:dl-fluid-horizontal
                div()
                        .add(descriptionList().fluid().horizontal()
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-fluid-horizontal
        ));

        addSnippet(new Snippet("dl-column-fill", "Column fill",
                code("dl-column-fill"), () ->
                // @code-start:dl-column-fill
                div()
                        .add(descriptionList().fillColumns().columns(breakpoints(default_, 2, lg, 3))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription(
                                                "This is a long description that should wrap to multiple lines in a multi-column layout.")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-column-fill
        ));

        addSnippet(new Snippet("dl-large", "Large display size",
                code("dl-large"), () ->
                // @code-start:dl-large
                div()
                        .add(descriptionList().displaySize(Size.lg).columns(breakpoints(lg, 2))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-large
        ));

        addHeader("responsive", "Responsive column definitions");
        addSnippet("responsive", new Snippet("dl-default-responsive-columns", "Default responsive columns",
                code("dl-default-responsive-columns"), () ->
                // @code-start:dl-default-responsive-columns
                div()
                        .add(descriptionList().columns(breakpoints(lg, 2, xl, 3))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-default-responsive-columns
        ));

        addSnippet("responsive", new Snippet("dl-horizontal-responsive-columns", "Horizontal responsive columns",
                code("dl-horizontal-responsive-columns"), () ->
                // @code-start:dl-horizontal-responsive-columns
                div()
                        .add(descriptionList().horizontal().columns(breakpoints(lg, 2, xl, 3))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-horizontal-responsive-columns
        ));

        addSnippet("responsive", new Snippet("dl-responsive-columns-vgl", "Responsive horizontal, vertical group layout",
                code("dl-responsive-columns-vgl"), () ->
                // @code-start:dl-responsive-columns-vgl
                div()
                        .add(descriptionList().horizontal()
                                .orientation(breakpoints(
                                        md, vertical,
                                        lg, horizontal,
                                        xl, vertical,
                                        _2xl, horizontal))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-responsive-columns-vgl
        ));

        addHeader("auto-column-width", "Auto column width");
        addSnippet("auto-column-width", new Snippet("dl-default-auto-column-width", "Default auto column width",
                code("dl-default-auto-column-width"), () ->
                // @code-start:dl-default-auto-column-width
                div()
                        .add(descriptionList().autoColumnWidths().columns(breakpoints(default_, 3))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-default-auto-column-width
        ));

        addSnippet("auto-column-width", new Snippet("dl-horizontal-auto-column-width", "Horizontal auto column width",
                code("dl-horizontal-auto-column-width"), () ->
                // @code-start:dl-horizontal-auto-column-width
                div()
                        .add(descriptionList().autoColumnWidths().horizontal().columns(breakpoints(default_, 2))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-horizontal-auto-column-width
        ));

        addHeader("inline-grid", "Inline grid");
        addSnippet("inline-grid", new Snippet("dl-default-inline-grid", "Default inline grid",
                code("dl-default-inline-grid"), () ->
                // @code-start:dl-default-inline-grid
                div()
                        .add(descriptionList().inlineGrid().columns(breakpoints(default_, 3))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-default-inline-grid
        ));

        addHeader("card-variants", "Card variants");
        addSnippet("card-variants", new Snippet("dl-with-card", "Description list with card",
                code("dl-with-card"), () ->
                // @code-start:dl-with-card
                div()
                        .add(descriptionList().columns(breakpoints(lg, 2))
                                .add(card()
                                        .add(descriptionListTerm("Name"))
                                        .add(descriptionListDescription("Example")))
                                .add(card()
                                        .add(descriptionListTerm("Namespace"))
                                        .add(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .add(card()
                                        .add(descriptionListTerm("Labels"))
                                        .add(descriptionListDescription("example")))
                                .add(card()
                                        .add(descriptionListTerm("Pod selector"))
                                        .add(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .add(card()
                                        .add(descriptionListTerm("Annotation"))
                                        .add(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-with-card
        ));

        addSnippet("card-variants", new Snippet("dl-card-large", "Description list with large display size and card",
                code("dl-card-large"), () ->
                // @code-start:dl-card-large
                div()
                        .add(descriptionList().displaySize(Size.lg).columns(breakpoints(lg, 2))
                                .add(card()
                                        .add(descriptionListTerm("Name"))
                                        .add(descriptionListDescription("Example")))
                                .add(card()
                                        .add(descriptionListTerm("Namespace"))
                                        .add(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .add(card()
                                        .add(descriptionListTerm("Labels"))
                                        .add(descriptionListDescription("example")))
                                .add(card()
                                        .add(descriptionListTerm("Pod selector"))
                                        .add(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .add(card()
                                        .add(descriptionListTerm("Annotation"))
                                        .add(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-card-large
        ));

        addSnippet("card-variants",
                new Snippet("dl-card-large-breakpoint", "Display size with card, three column on large breakpoint",
                        code("dl-card-large-breakpoint"), () ->
                        // @code-start:dl-card-large-breakpoint
                        div()
                                .add(descriptionList().displaySize(Size.lg).columns(breakpoints(lg, 3))
                                        .add(card()
                                                .add(descriptionListTerm("Name"))
                                                .add(descriptionListDescription("Example")))
                                        .add(card()
                                                .add(descriptionListTerm("Namespace"))
                                                .add(descriptionListDescription()
                                                        .add(a("#").textContent("mary-test"))))
                                        .add(card()
                                                .add(descriptionListTerm("Labels"))
                                                .add(descriptionListDescription("example")))
                                        .add(card()
                                                .add(descriptionListTerm("Pod selector"))
                                                .add(descriptionListDescription()
                                                        .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                                .inline().link())))
                                        .add(card()
                                                .add(descriptionListTerm("Annotation"))
                                                .add(descriptionListDescription("2 annotations"))))
                                .element()
                        // @code-end:dl-card-large-breakpoint
                ));

        addSnippet("card-variants", new Snippet("dl-card-horizontal", "Display size with card, horizontal, modified term width",
                code("dl-card-horizontal"), () ->
                // @code-start:dl-card-horizontal
                div()
                        .add(descriptionList().displaySize(Size.lg).horizontal().columns(breakpoints(lg, 2)).termWidth("10ch")
                                .add(card()
                                        .add(descriptionListTerm("Name"))
                                        .add(descriptionListDescription("Example")))
                                .add(card()
                                        .add(descriptionListTerm("Namespace"))
                                        .add(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .add(card()
                                        .add(descriptionListTerm("Labels"))
                                        .add(descriptionListDescription("example")))
                                .add(card()
                                        .add(descriptionListTerm("Pod selector"))
                                        .add(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .add(card()
                                        .add(descriptionListTerm("Annotation"))
                                        .add(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-card-horizontal
        ));

        addHeader("auto-fit", "Auto fit");
        addSnippet("auto-fit", new Snippet("dl-auto-fit-basic", "Auto fit basic",
                code("dl-auto-fit-basic"), () ->
                // @code-start:dl-auto-fit-basic
                div()
                        .add(descriptionList().autoFit()
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-auto-fit-basic
        ));

        addSnippet("auto-fit", new Snippet("dl-auto-fit-gtc", "Auto-fit, min width modified grid template columns",
                code("dl-auto-fit-gtc"), () ->
                // @code-start:dl-auto-fit-gtc
                div()
                        .add(descriptionList().autoFit().autoFitMin(breakpoints(default_, "200px"))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-auto-fit-gtc
        ));

        addSnippet("auto-fit", new Snippet("dl-auto-fit-rgtc", "Auto-fit, min width modified, responsive grid template columns",
                code("dl-auto-fit-rgtc"), () ->
                // @code-start:dl-auto-fit-rgtc
                div()
                        .add(descriptionList().autoFit()
                                .autoFitMin(breakpoints(
                                        md, "100px",
                                        lg, "150px",
                                        xl, "200px",
                                        _2xl, "300px"))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name"))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace"))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels"))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector"))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation"))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-auto-fit-rgtc
        ));

        addHeader("with-icons", "With icons");
        addSnippet("with-icons", new Snippet("dl-icons", "Icons on terms",
                code("dl-icons"), () ->
                // @code-start:dl-icons
                div()
                        .add(descriptionList()
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Name").icon(cube()))
                                        .addDescription(descriptionListDescription("Example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Namespace").icon(book()))
                                        .addDescription(descriptionListDescription()
                                                .add(a("#").textContent("mary-test"))))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Labels").icon(key()))
                                        .addDescription(descriptionListDescription("example")))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Pod selector").icon(globe()))
                                        .addDescription(descriptionListDescription()
                                                .add(button().iconAndText(plusCircle(), "app=MyApp", start)
                                                        .inline().link())))
                                .addGroup(descriptionListGroup()
                                        .addTerm(descriptionListTerm("Annotation").icon(flag()))
                                        .addDescription(descriptionListDescription("2 annotations"))))
                        .element()
                // @code-end:dl-icons
        ));

        startApiDocs(DescriptionList.class);
        addApiDoc(DescriptionList.class, component);
        addApiDoc(DescriptionListDescription.class, subcomponent);
        addApiDoc(DescriptionListGroup.class, subcomponent);
        addApiDoc(DescriptionListTerm.class, subcomponent);
    }
}
