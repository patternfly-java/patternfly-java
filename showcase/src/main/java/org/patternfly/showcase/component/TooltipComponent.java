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
import org.patternfly.component.tooltip.Tooltip;
import org.patternfly.component.tooltip.TooltipToggle;
import org.patternfly.component.tooltip.TriggerAria;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import elemental2.dom.ScrollIntoViewOptions;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.onAttach;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.tooltip.Tooltip.tooltip;
import static org.patternfly.core.Aria.label;
import static org.patternfly.icon.IconSets.fas.copy;
import static org.patternfly.popper.Placement.auto;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/tooltip", title = "Tooltip")
public class TooltipComponent extends SnippetPage {

    public TooltipComponent() {
        super(components.get("tooltip"));

        startExamples();
        addSnippet(new Snippet("tooltip-basic", "Basic",
                code("tooltip-basic"), () ->
                // @code-start:tooltip-basic
                div().style("margin", "100px")
                        .add(button("I have a tooltip").primary()
                                .id("tooltip-basic-button"))
                        .add(tooltip(By.id("tooltip-basic-button"), LoremIpsum.words()))
                        .element()
                // @code-end:tooltip-basic
        ));

        addSnippet(new Snippet("tooltip-dynamic", "Dynamic content",
                code("tooltip-dynamic"),
                () -> {
                    // @code-start:tooltip-dynamic
                    Tooltip tooltip = tooltip(By.id("tooltip-dynamic-button"), "Copy to clipboard")
                            .onClose((e, t) -> t.text("Copy to clipboard"))
                            .appendToBody();
                    return div().style("margin", "100px")
                            .add(button().icon(copy()).plain()
                                    .aria(label, "Copy")
                                    .id("tooltip-dynamic-button")
                                    .onClick((e, b) -> tooltip.text("Successfully copied to clipboard!")))
                            .element();
                    // @code-end:tooltip-dynamic
                }));

        addSnippet(new Snippet("tooltip-auto", "Placement auto",
                code("tooltip-auto"),
                () -> {
                    // @code-start:tooltip-auto
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
                                            .id("tooltip-options-button"))
                                    .add(tooltip(By.id("tooltip-options-button"), LoremIpsum.words())
                                            .placement(auto)))
                            .element();
                    // @code-end:tooltip-auto
                }));

        startApiDocs(Tooltip.class);
        addApiDoc(Tooltip.class, component);
        addApiDoc(TooltipToggle.class, other);
        addApiDoc(TriggerAria.class, other);
    }
}
