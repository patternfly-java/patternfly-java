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
import org.patternfly.component.Severity;
import org.patternfly.component.button.Button;
import org.patternfly.component.popover.Popover;
import org.patternfly.component.popover.PopoverBody;
import org.patternfly.component.popover.PopoverFooter;
import org.patternfly.component.popover.PopoverHeader;
import org.patternfly.component.togglegroup.ToggleGroup;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import elemental2.dom.ScrollIntoViewOptions;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.onAttach;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.list.ActionList.actionList;
import static org.patternfly.component.list.ActionListGroup.actionListGroup;
import static org.patternfly.component.list.ActionListItem.actionListItem;
import static org.patternfly.component.popover.Popover.popover;
import static org.patternfly.component.popover.PopoverBody.popoverBody;
import static org.patternfly.component.togglegroup.ToggleGroup.toggleGroup;
import static org.patternfly.component.togglegroup.ToggleGroupItem.toggleGroupItem;
import static org.patternfly.icon.IconSets.fas.bullhorn;
import static org.patternfly.layout.stack.Stack.stack;
import static org.patternfly.layout.stack.StackItem.stackItem;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Placement.bottom;
import static org.patternfly.style.Placement.left;
import static org.patternfly.style.Placement.right;
import static org.patternfly.style.Placement.top;

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
                code("popover-hoverable"), () ->
                // @code-start:popover-hoverable
                div().style("margin", "50px")
                        .add(button("Hover to trigger popover").primary()
                                .id("popover-hoverable-button"))
                        .add(popover(By.id("popover-hoverable-button"))
                                .hoverable()
                                .ariaLabel("Hoverable popover")
                                .addHeader("Popover header")
                                .addBody("This popover opens on hover.")
                                .addFooter("Popover footer"))
                        .element()
                // @code-end:popover-hoverable
        ));

        addSnippet(new Snippet("popover-placements", "Placements",
                code("popover-placements"), () ->
                // @code-start:popover-placements
                div().style("display: flex; gap: 16px")
                        .add(button("Bottom").secondary()
                                .id("popover-placements-bottom-button"))
                        .add(popover(By.id("popover-placements-bottom-button"))
                                .placement(bottom)
                                .ariaLabel("Bottom popover")
                                .addHeader("Bottom popover")
                                .addBody("This popover is placed at the bottom.")
                                .addFooter("Popover footer"))
                        .add(button("Left").secondary()
                                .id("popover-placements-left-button"))
                        .add(popover(By.id("popover-placements-left-button"))
                                .placement(left)
                                .ariaLabel("Left popover")
                                .addHeader("Left popover")
                                .addBody("This popover is placed on the left.")
                                .addFooter("Popover footer"))
                        .add(button("Right").secondary()
                                .id("popover-placements-right-button"))
                        .add(popover(By.id("popover-placements-right-button"))
                                .placement(right)
                                .ariaLabel("Right popover")
                                .addHeader("Right popover")
                                .addBody("This popover is placed on the right.")
                                .addFooter("Popover footer"))
                        .element()
                // @code-end:popover-placements
        ));

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
                    .addFooter("Popover footer");

            return div().style("margin", "50px")
                    .add(button("Toggle popover").primary()
                            .id("popover-close-button"))
                    .add(popover)
                    .element();
            // @code-end:popover-close
        }));

        addSnippet(new Snippet("popover-no-padding", "Without header/footer/close and no padding",
                code("popover-no-padding"), () ->
                // @code-start:popover-no-padding
                div().style("margin", "50px")
                        .add(button("Toggle popover").primary()
                                .id("popover-no-padding-button"))
                        .add(popover(By.id("popover-no-padding-button"))
                                .noClose()
                                .noPadding()
                                .ariaLabel("Popover with no header, footer, close button, and padding")
                                .addBody(
                                        "This popover has no padding and is intended for use with content that has its own spacing and should touch the edges of the popover container."))
                        .element()
                // @code-end:popover-no-padding
        ));

        addSnippet(new Snippet("popover-auto-width", "Width auto",
                code("popover-auto-width"), () ->
                // @code-start:popover-auto-width
                div().style("margin", "50px")
                        .add(button("Toggle popover").primary()
                                .id("popover-auto-width-button"))
                        .add(popover(By.id("popover-auto-width-button"))
                                .autoWidth()
                                .ariaLabel("Popover with auto-width.")
                                .addBody("Removes fixed-width and allows width to be defined by contents."))
                        .element()
                // @code-end:popover-auto-width
        ));

        addSnippet(new Snippet("popover-auto-placement", "Auto placement",
                "You might need to resize the browser window to a minimum to see the auto placement in action.",
                code("popover-auto-placement"), () -> {
            // @code-start:popover-auto-placement
            Button button = button("Toggle popover");
            onAttach(button, mr -> {
                ScrollIntoViewOptions options = ScrollIntoViewOptions.create();
                options.setBlock("center");
                options.setInline("center");
                button.element().scrollIntoView(options);
            });

            Popover popover = popover(By.id("popover-auto-placement-button"));
            ToggleGroup toggleGroup = toggleGroup(single)
                    .addItem(toggleGroupItem("left", "left").onClick((e, t) -> popover.placement(left)))
                    .addItem(toggleGroupItem("top", "top").onClick((e, t) -> popover.placement(top)))
                    .addItem(toggleGroupItem("right", "right").onClick((e, t) -> popover.placement(right)))
                    .addItem(toggleGroupItem("bottom", "bottom").onClick((e, t) -> popover.placement(bottom)));
            toggleGroup.select("top", true, false);
            return stack().gutter()
                    .addItem(stackItem()
                            .add("Placement: ")
                            .add(toggleGroup))
                    .addItem(stackItem()
                            .add(div().style("width", "720px")
                                    .add(div().css("pfj-popover-box")
                                            .add(button.css("pfj-popover-button").primary()
                                                    .id("popover-auto-placement-button"))
                                            .add(popover
                                                    .placement(top)
                                                    .ariaLabel("Advanced popover")
                                                    .addHeader("Popover header")
                                                    .addBody(LoremIpsum.words(20))
                                                    .addFooter("Popover footer")))))
                    .element();
            // @code-end:popover-auto-placement
        }));

        addSnippet(new Snippet("popover-icon", "Popover with icon in the title",
                code("popover-icon"), () ->
                // @code-start:popover-icon
                div().style("margin", "50px")
                        .add(button("Toggle popover").primary()
                                .id("popover-icon-button"))
                        .add(popover(By.id("popover-icon-button"))
                                .icon(bullhorn())
                                .ariaLabel("Popover with icon in the title example.")
                                .addHeader("Popover with icon")
                                .addBody(LoremIpsum.words(20))
                                .addFooter("Popover footer"))
                        .element()
                // @code-end:popover-icon
        ));

        addSnippet(new Snippet("popover-alert", "Alert popover",
                code("popover-alert"), () -> {
            // @code-start:popover-alert
            return div().style("margin", "50px")
                    .add(actionList()
                            .addItem(actionListGroup()
                                    .addItem(actionListItem()
                                            .add(button("Custom").secondary().id("popover-alert-custom")))
                                    .addItem(actionListItem()
                                            .add(button("Info").secondary().id("popover-alert-info")))
                                    .addItem(actionListItem()
                                            .add(button("Success").secondary().id("popover-alert-success")))
                                    .addItem(actionListItem()
                                            .add(button("Warning").warning().id("popover-alert-warning")))
                                    .addItem(actionListItem()
                                            .add(button("Danger").danger().id("popover-alert-danger")))))
                    .add(popover(By.id("popover-alert-custom"))
                            .status(Severity.custom)
                            .addHeader("Popover custom header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .add(popover(By.id("popover-alert-info"))
                            .status(Severity.info)
                            .addHeader("Popover info header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .add(popover(By.id("popover-alert-success"))
                            .status(Severity.success)
                            .addHeader("Popover success header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .add(popover(By.id("popover-alert-warning"))
                            .status(Severity.warning)
                            .addHeader("Popover warning header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .add(popover(By.id("popover-alert-danger"))
                            .status(Severity.danger)
                            .addHeader("Popover danger header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .element();
            // @code-end:popover-alert
        }));

        startApiDocs(Popover.class);
        addApiDoc(Popover.class, component);
        addApiDoc(PopoverBody.class, subcomponent);
        addApiDoc(PopoverFooter.class, subcomponent);
        addApiDoc(PopoverHeader.class, subcomponent);
    }
}
