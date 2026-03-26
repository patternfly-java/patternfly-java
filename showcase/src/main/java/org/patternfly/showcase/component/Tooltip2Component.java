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

import org.jboss.elemento.By;
import org.jboss.elemento.router.Route;
import org.patternfly.component.button.Button;
import org.patternfly.component.tooltip.Tooltip2;
import org.patternfly.component.tooltip.TriggerAria;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import elemental2.dom.ScrollIntoViewOptions;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.onAttach;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.tooltip.Tooltip2.tooltip2;
import static org.patternfly.popper.Placement.auto;
import static org.patternfly.popper.Placement.bottom;
import static org.patternfly.popper.Placement.left;
import static org.patternfly.popper.Placement.right;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/tooltip2", title = "Tooltip2")
public class Tooltip2Component extends SnippetPage {

    public Tooltip2Component() {
        super(components.get("tooltip2"));

        startExamples();
        addSnippet(new Snippet("tooltip2-basic", "Basic",
                code("tooltip2-basic"), () ->
                // @code-start:tooltip2-basic
                div().style("margin", "100px")
                        .add(button("I have a tooltip").primary()
                                .id("tooltip2-basic-button"))
                        .add(tooltip2(By.id("tooltip2-basic-button"), LoremIpsum.words()))
                        .element()
                // @code-end:tooltip2-basic
        ));

        addSnippet(new Snippet("tooltip2-dynamic", "Dynamic content",
                code("tooltip2-dynamic"),
                () -> {
                    // @code-start:tooltip2-dynamic
                    Tooltip2 tooltip = tooltip2(By.id("tooltip2-dynamic-button"), "Copy to clipboard")
                            .onClose((e, t) -> t.text("Copy to clipboard"));
                    return div().style("margin", "100px")
                            .add(button("Copy to clipboard").primary()
                                    .id("tooltip2-dynamic-button")
                                    .onClick((e, b) -> tooltip.text("Successfully copied to clipboard!")))
                            .add(tooltip)
                            .element();
                    // @code-end:tooltip2-dynamic
                }));

        addSnippet(new Snippet("tooltip2-placements", "Placements",
                code("tooltip2-placements"),
                () ->
                        // @code-start:tooltip2-placements
                        div().style("display: flex; gap: 16px")
                                .add(button("Bottom").secondary()
                                        .id("tooltip2-bottom-button"))
                                .add(tooltip2(By.id("tooltip2-bottom-button"), "Bottom tooltip")
                                        .placement(bottom))
                                .add(button("Left").secondary()
                                        .id("tooltip2-left-button"))
                                .add(tooltip2(By.id("tooltip2-left-button"), "Left tooltip")
                                        .placement(left))
                                .add(button("Right").secondary()
                                        .id("tooltip2-right-button"))
                                .add(tooltip2(By.id("tooltip2-right-button"), "Right tooltip")
                                        .placement(right))
                                .element()
                // @code-end:tooltip2-placements
        ));

        addSnippet(new Snippet("tooltip2-auto", "Placement auto",
                "Resize the browser window to a minimum to see the auto placement in action.",
                code("tooltip2-auto"),
                () -> {
                    // @code-start:tooltip2-auto
                    Button button = button("Tooltip");
                    onAttach(button, mr -> {
                        ScrollIntoViewOptions options = ScrollIntoViewOptions.create();
                        options.setBlock("center");
                        options.setInline("center");
                        button.element().scrollIntoView(options);
                    });
                    return div().style("width", "720px")
                            .add(div().css("pfj-tooltip-box")
                                    .add(button.css("pfj-tooltip-button").primary()
                                            .id("tooltip2-auto-button"))
                                    .add(tooltip2(By.id("tooltip2-auto-button"), LoremIpsum.words())
                                            .placement(auto)))
                            .element();
                    // @code-end:tooltip2-auto
                }));

        startApiDocs(Tooltip2.class);
        addApiDoc(Tooltip2.class, component);
        addApiDoc(TriggerAria.class, other);
    }
}
