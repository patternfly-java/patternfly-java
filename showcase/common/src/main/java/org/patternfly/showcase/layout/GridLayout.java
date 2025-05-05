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
package org.patternfly.showcase.layout;

import org.jboss.elemento.router.Route;
import org.patternfly.layout.grid.Grid;
import org.patternfly.layout.grid.GridItem;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.layout.grid.Grid.grid;
import static org.patternfly.layout.grid.GridItem.gridItem;
import static org.patternfly.showcase.ApiDoc.Type.layout;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.layouts;
import static org.patternfly.style.Breakpoint._2xl;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.lg;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoint.sm;
import static org.patternfly.style.Breakpoints.breakpoints;

@Route(value = "/layouts/grid", title = "Grid")
public class GridLayout extends SnippetPage {

    public GridLayout() {
        super(layouts.get("grid"));

        startExamples();
        addSnippet(new Snippet("grid-basic", "Basic",
                code("grid-basic"), () ->
                // @code-start:grid-basic
                div().css("ws-core-l-grid")
                        .add(grid()
                                .addItem(gridItem().span(8)
                                        .text("span = 8"))
                                .addItem(gridItem().span(4).rowSpan(2)
                                        .text("span = 4, rowSpan = 2"))
                                .addItem(gridItem().span(2).rowSpan(3)
                                        .text("span = 2, rowSpan = 3"))
                                .addItem(gridItem().span(2)
                                        .text("span = 2"))
                                .addItem(gridItem().span(4)
                                        .text("span = 4"))
                                .addItem(gridItem().span(2)
                                        .text("span = 2"))
                                .addItem(gridItem().span(2)
                                        .text("span = 2"))
                                .addItem(gridItem().span(2)
                                        .text("span = 2"))
                                .addItem(gridItem().span(4)
                                        .text("span = 4"))
                                .addItem(gridItem().span(2)
                                        .text("span = 2"))
                                .addItem(gridItem().span(4)
                                        .text("span = 4"))
                                .addItem(gridItem().span(4)
                                        .text("span = 4")))
                        .element()
                // @code-end:grid-basic
        ));

        addSnippet(new Snippet("grid-gutter", "With gutters",
                code("grid-gutter"), () ->
                // @code-start:grid-gutter
                div().css("ws-core-l-grid")
                        .add(grid().gutter()
                                .addItem(gridItem().span(8)
                                        .text("span = 8"))
                                .addItem(gridItem().span(4).rowSpan(2)
                                        .text("span = 4, rowSpan = 2"))
                                .addItem(gridItem().span(2).rowSpan(3)
                                        .text("span = 2, rowSpan = 3"))
                                .addItem(gridItem().span(2)
                                        .text("span = 2"))
                                .addItem(gridItem().span(4)
                                        .text("span = 4"))
                                .addItem(gridItem().span(2)
                                        .text("span = 2"))
                                .addItem(gridItem().span(2)
                                        .text("span = 2"))
                                .addItem(gridItem().span(2)
                                        .text("span = 2"))
                                .addItem(gridItem().span(4)
                                        .text("span = 4"))
                                .addItem(gridItem().span(2)
                                        .text("span = 2"))
                                .addItem(gridItem().span(4)
                                        .text("span = 4"))
                                .addItem(gridItem().span(4)
                                        .text("span = 4")))
                        .element()
                // @code-end:grid-gutter
        ));

        addSnippet(new Snippet("grid-overrides", "With overrides",
                code("grid-overrides"), () ->
                // @code-start:grid-overrides
                div().css("ws-core-l-grid")
                        .add(grid().columns(breakpoints(sm, 6, md, 4, lg, 3, _2xl, 1))
                                .addItem(gridItem().span(3).rowSpan(2)
                                        .text("span = 3, rowSpan = 2"))
                                .addItem(gridItem().text("Grid item"))
                                .addItem(gridItem().text("Grid item"))
                                .addItem(gridItem().text("Grid item"))
                                .addItem(gridItem().text("Grid item"))
                                .addItem(gridItem().text("Grid item"))
                                .addItem(gridItem().text("Grid item"))
                                .addItem(gridItem().text("Grid item"))
                                .addItem(gridItem().text("Grid item"))
                                .addItem(gridItem().text("Grid item"))
                                .addItem(gridItem().text("Grid item"))
                                .addItem(gridItem().text("Grid item")))
                        .element()
                // @code-end:grid-overrides
        ));

        addSnippet(new Snippet("grid-order-standard", "Standard ordering",
                code("grid-order-standard"), () ->
                // @code-start:grid-order-standard
                div().css("ws-core-l-grid")
                        .add(grid().gutter().span(3)
                                .addItem(gridItem().order(breakpoints(default_, "2")).text("Item A"))
                                .addItem(gridItem().text("Item B"))
                                .addItem(gridItem().order(breakpoints(default_, "-1")).text("Item C")))
                        .element()
                // @code-end:grid-order-standard
        ));

        addSnippet(new Snippet("grid-order-responsive", "Responsive ordering",
                code("grid-order-responsive"), () ->
                // @code-start:grid-order-responsive
                div().css("ws-core-l-grid")
                        .add(grid().gutter().span(3)
                                .addItem(gridItem().order(breakpoints(lg, "2")).text("Item A"))
                                .addItem(gridItem().text("Item B"))
                                .addItem(gridItem().order(breakpoints(default_, "-1", md, "1"))
                                        .text("Item C")))
                        .element()
                // @code-end:grid-order-responsive
        ));

        addSnippet(new Snippet("grid-order-grouped", "Grouped ordering",
                code("grid-order-grouped"), () ->
                // @code-start:grid-order-grouped
                div().css("ws-core-l-grid")
                        .add(grid().gutter().span(12)
                                .add(grid().gutter().span(6).order(breakpoints(default_, "2"))
                                        .addItem(gridItem().order(breakpoints(default_, "3")).text("Set 1, Item A"))
                                        .addItem(gridItem().order(breakpoints(default_, "1")).text("Set 1, Item B"))
                                        .addItem(gridItem().text("Set 1, Item C"))
                                        .addItem(gridItem().order(breakpoints(default_, "2")).text("Set 1, Item D")))
                                .add(grid().gutter().span(6)
                                        .addItem(gridItem().order(breakpoints(default_, "2")).text("Set 2, Item A"))
                                        .addItem(gridItem().order(breakpoints(default_, "1")).text("Set 2, Item B"))
                                        .addItem(gridItem().text("Set 2, Item C"))
                                        .addItem(gridItem().order(breakpoints(default_, "2")).text("Set 2, Item D"))))
                        .element()
                // @code-end:grid-order-grouped
        ));

        addSnippet(new Snippet("grid-alternative-components", "Alternative components",
                code("grid-alternative-components"), () ->
                // @code-start:grid-alternative-components
                div().css("ws-core-l-grid")
                        .add(grid(ul())
                                .addItem(gridItem(li()).text("Grid item"))
                                .addItem(gridItem(li()).text("Grid item"))
                                .addItem(gridItem(li()).text("Grid item"))
                                .addItem(gridItem(li()).text("Grid item"))
                                .addItem(gridItem(li()).text("Grid item")))
                        .element()
                // @code-end:grid-alternative-components
        ));

        startApiDocs(Grid.class);
        addApiDoc(Grid.class, layout);
        addApiDoc(GridItem.class, layout);
    }
}
