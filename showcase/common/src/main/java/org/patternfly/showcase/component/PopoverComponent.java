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
import org.jboss.elemento.Elements;
import org.jboss.elemento.router.Route;
import org.patternfly.component.button.Button;
import org.patternfly.component.popover.Popover;
import org.patternfly.component.popover.PopoverBody;
import org.patternfly.component.popover.PopoverFooter;
import org.patternfly.component.popover.PopoverHeader;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import elemental2.dom.ScrollIntoViewOptions;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.onAttach;
import static org.patternfly.component.Severity.custom;
import static org.patternfly.component.Severity.danger;
import static org.patternfly.component.Severity.info;
import static org.patternfly.component.Severity.success;
import static org.patternfly.component.Severity.warning;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.list.ActionList.actionList;
import static org.patternfly.component.list.ActionListItem.actionListItem;
import static org.patternfly.component.popover.Popover.popover;
import static org.patternfly.component.popover.PopoverBody.popoverBody;
import static org.patternfly.icon.IconSets.fas.bullhorn;
import static org.patternfly.popper.Placement.auto;
import static org.patternfly.popper.TriggerAction.mouseenter;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/popover", title = "Popover")
public class PopoverComponent extends SnippetPage {

    public PopoverComponent() {
        super(components.get("popover"));

        startExamples();
        addSnippet(new Snippet("popover-basic", "Basic",
                code("popover-basic"), () ->
                // @code-start:popover-basic
                div().style("margin", "50px")
                        .add(button("Toggle popover").primary()
                                .id("popover-basic-button"))
                        .add(popover(By.id("popover-basic-button"))
                                .ariaLabel("Basic popover")
                                .addHeader("Popover header")
                                .addBody("Popovers are triggered by click rather than hover.")
                                .addFooter("Popover footer"))
                        .element()
                // @code-end:popover-basic
        ));

        addSnippet(new Snippet("popover-hoverable", "Hoverable",
                code("popover-hoverable"), () -> {
            // @code-start:popover-hoverable
            popover(By.id("popover-hoverable-button"))
                    .ariaLabel("Hoverable popover")
                    .triggerActions(mouseenter)
                    .addHeader("Popover header")
                    .addBody("This popover opens on hover.")
                    .addFooter("Popover footer")
                    .appendToBody();

            return div().style("margin", "50px")
                    .add(button("Hover to trigger popover").primary()
                            .id("popover-hoverable-button"))
                    .element();
            // @code-end:popover-hoverable
        }));

        addSnippet(new Snippet("popover-close", "Close popover",
                code("popover-close"), () -> {
            // @code-start:popover-close
            Popover popover = popover(By.id("popover-close-button"));
            popover.ariaLabel("Popover with button in the body that can close it")
                    .addHeader("Popover header")
                    .addBody(popoverBody()
                            .add(div()
                                    .add(div()
                                            .add("A controlled popover can be closed by calling its ")
                                            .add(Elements.code("close()"))
                                            .add(" method after some user interaction."))
                                    .add(div()
                                            .add(button("Close popover").inline().link()
                                                    .onClick((e, b) -> popover.close())))))
                    .addFooter("Popover footer")
                    .appendToBody();

            return div().style("margin", "50px")
                    .add(button("Toggle popover").primary()
                            .id("popover-close-button"))
                    .element();
            // @code-end:popover-close
        }));

        addSnippet(new Snippet("popover-no-padding", "Without header/footer/close and no padding",
                code("popover-no-padding"), () -> {
            // @code-start:popover-no-padding
            popover(By.id("popover-no-padding-button"))
                    .noClose()
                    .noPadding()
                    .ariaLabel("Popover with no header, footer, close button, and padding")
                    .addBody(
                            "This popover has no padding and is intended for use with content that has its own spacing and should touch the edges of the popover container.")
                    .appendToBody();

            return div().style("margin", "50px")
                    .add(button("Toggle popover").primary()
                            .id("popover-no-padding-button"))
                    .element();
            // @code-end:popover-no-padding
        }));

        addSnippet(new Snippet("popover-auto-width", "Width auto",
                code("popover-auto-width"), () -> {
            // @code-start:popover-auto-width
            popover(By.id("popover-auto-width-button"))
                    .autoWidth()
                    .ariaLabel("Popover with auto-width.")
                    .addBody("Removes fixed-width and allows width to be defined by contents.")
                    .appendToBody();

            return div().style("margin", "50px")
                    .add(button("Toggle popover").primary()
                            .id("popover-auto-width-button"))
                    .element();
            // @code-end:popover-auto-width
        }));

        addSnippet(new Snippet("popover-advanced", "Advanced",
                code("popover-advanced"), () -> {
            // @code-start:popover-advanced
            Button button = button("Toggle popover");
            onAttach(button, mr -> {
                ScrollIntoViewOptions options = ScrollIntoViewOptions.create();
                options.setBlock("center");
                options.setInline("center");
                button.element().scrollIntoView(options);
            });

            return div().style("width", "720px")
                    .add(div().css("pfj-popover-box")
                            .add(button.css("pfj-popover-button").primary()
                                    .id("popover-advanced-button"))
                            .add(popover(By.id("popover-advanced-button"))
                                    .placement(auto)
                                    .ariaLabel("Advanced popover")
                                    .addHeader("Popover header")
                                    .addBody(LoremIpsum.words(20))
                                    .addFooter("Popover footer")))
                    .element();
            // @code-end:popover-advanced
        }));

        addSnippet(new Snippet("popover-icon", "Popover with icon in the title",
                code("popover-icon"), () -> {
            // @code-start:popover-icon
            popover(By.id("popover-icon-button"))
                    .icon(bullhorn())
                    .ariaLabel("Popover with icon in the title example.")
                    .addHeader("Popover with icon")
                    .addBody(LoremIpsum.words(20))
                    .addFooter("Popover footer")
                    .appendToBody();

            return div().style("margin", "50px")
                    .add(button("Toggle popover").primary()
                            .id("popover-icon-button"))
                    .element();
            // @code-end:popover-icon
        }));

        addSnippet(new Snippet("popover-alert", "Alert popover",
                code("popover-alert"), () ->
                // @code-start:popover-alert
                div().style("margin", "50px")
                        .add(actionList()
                                .addItem(actionListItem()
                                        .add(button("Custom").primary()
                                                .id("popover-alert-custom"))
                                        .add(popover(By.id("popover-alert-custom"))
                                                .severity(custom)
                                                .addHeader("Custom popover title")
                                                .addBody(LoremIpsum.words(20))
                                                .addFooter("Popover footer")))
                                .addItem(actionListItem()
                                        .add(button("Info").secondary()
                                                .id("popover-alert-info"))
                                        .add(popover(By.id("popover-alert-info"))
                                                .severity(info)
                                                .addHeader("Info popover title")
                                                .addBody(LoremIpsum.words(20))
                                                .addFooter("Popover footer")))
                                .addItem(actionListItem()
                                        .add(button("Success").tertiary()
                                                .id("popover-alert-success"))
                                        .add(popover(By.id("popover-alert-success"))
                                                .severity(success)
                                                .addHeader("Success popover title")
                                                .addBody(LoremIpsum.words(20))
                                                .addFooter("Popover footer")))
                                .addItem(actionListItem()
                                        .add(button("Warning").warning()
                                                .id("popover-alert-warning"))
                                        .add(popover(By.id("popover-alert-warning"))
                                                .severity(warning)
                                                .addHeader("Warning popover title")
                                                .addBody(LoremIpsum.words(20))
                                                .addFooter("Popover footer")))
                                .addItem(actionListItem()
                                        .add(button("Danger").danger()
                                                .id("popover-alert-danger"))
                                        .add(popover(By.id("popover-alert-danger"))
                                                .severity(danger)
                                                .addHeader("Danger popover title")
                                                .addBody(LoremIpsum.words(20))
                                                .addFooter("Popover footer"))))
                        .element()
                // @code-end:popover-alert
        ));

        startApiDocs(Popover.class);
        addApiDoc(Popover.class, component);
        addApiDoc(PopoverBody.class, subcomponent);
        addApiDoc(PopoverFooter.class, subcomponent);
        addApiDoc(PopoverHeader.class, subcomponent);
    }
}
