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
import org.patternfly.component.tooltip.NativeTooltip;
import org.patternfly.component.tooltip.TriggerAria;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import elemental2.dom.ScrollIntoViewOptions;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.onAttach;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.popper.Placement.auto;
import static org.patternfly.popper.Placement.bottom;
import static org.patternfly.popper.Placement.left;
import static org.patternfly.popper.Placement.right;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/native-tooltip", title = "Native Tooltip")
public class NativeTooltipComponent extends SnippetPage {

    public NativeTooltipComponent() {
        super(components.get("native-tooltip"));

        startExamples();
        addSnippet(new Snippet("nt-basic", "Basic",
                code("nt-basic"), () ->
                // @code-start:nt-basic
                div().style("margin", "100px")
                        .add(button("I have a tooltip").primary()
                                .id("nt-basic-button"))
                        .add(NativeTooltip.nativeTooltip(By.id("nt-basic-button"), LoremIpsum.words()))
                        .element()
                // @code-end:nt-basic
        ));

        addSnippet(new Snippet("nt-dynamic", "Dynamic content",
                code("nt-dynamic"),
                () -> {
                    // @code-start:nt-dynamic
                    NativeTooltip tooltip = NativeTooltip.nativeTooltip(By.id("nt-dynamic-button"), "Copy to clipboard")
                            .onClose((e, t) -> t.text("Copy to clipboard"));
                    return div().style("margin", "100px")
                            .add(button("Copy to clipboard").primary()
                                    .id("nt-dynamic-button")
                                    .onClick((e, b) -> tooltip.text("Successfully copied to clipboard!")))
                            .add(tooltip)
                            .element();
                    // @code-end:nt-dynamic
                }));

        addSnippet(new Snippet("nt-placements", "Placements",
                code("nt-placements"),
                () ->
                        // @code-start:nt-placements
                        div().style("display: flex; gap: 16px")
                                .add(button("Bottom").secondary()
                                        .id("nt-placements-bottom-button"))
                                .add(NativeTooltip.nativeTooltip(By.id("nt-placements-bottom-button"), "Bottom tooltip")
                                        .placement(bottom))
                                .add(button("Left").secondary()
                                        .id("nt-placements-left-button"))
                                .add(NativeTooltip.nativeTooltip(By.id("nt-placements-left-button"), "Left tooltip")
                                        .placement(left))
                                .add(button("Right").secondary()
                                        .id("nt-placements-right-button"))
                                .add(NativeTooltip.nativeTooltip(By.id("nt-placements-right-button"), "Right tooltip")
                                        .placement(right))
                                .element()
                // @code-end:nt-placements
        ));

        addSnippet(new Snippet("nt-auto", "Auto placement",
                "You might need to resize the browser window to a minimum to see the auto placement in action.",
                code("nt-auto"),
                () -> {
                    // @code-start:nt-auto
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
                                            .id("nt-auto-button"))
                                    .add(NativeTooltip.nativeTooltip(By.id("nt-auto-button"), LoremIpsum.words())
                                            .placement(auto)))
                            .element();
                    // @code-end:nt-auto
                }));

        startApiDocs(NativeTooltip.class);
        addApiDoc(NativeTooltip.class, component);
        addApiDoc(TriggerAria.class, other);
    }
}
