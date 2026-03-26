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
import org.patternfly.component.popover.Popover2;
import org.patternfly.component.popover.Popover2Body;
import org.patternfly.component.popover.Popover2Footer;
import org.patternfly.component.popover.Popover2Header;
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
import static org.patternfly.component.popover.Popover2.popover2;
import static org.patternfly.component.popover.Popover2Body.popover2Body;
import static org.patternfly.component.togglegroup.ToggleGroup.toggleGroup;
import static org.patternfly.component.togglegroup.ToggleGroupItem.toggleGroupItem;
import static org.patternfly.icon.IconSets.fas.bullhorn;
import static org.patternfly.layout.stack.Stack.stack;
import static org.patternfly.layout.stack.StackItem.stackItem;
import static org.patternfly.popper.Placement.auto;
import static org.patternfly.popper.Placement.bottom;
import static org.patternfly.popper.Placement.left;
import static org.patternfly.popper.Placement.right;
import static org.patternfly.popper.Placement.top;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/popover2", title = "Popover2")
public class Popover2Component extends SnippetPage {

    public Popover2Component() {
        super(components.get("popover2"));

        startExamples();
        addSnippet(new Snippet("popover2-basic", "Basic",
                code("popover2-basic"), () ->
                // @code-start:popover2-basic
                div().style("margin", "50px")
                        .add(button("Toggle popover").primary()
                                .id("popover2-basic-button"))
                        .add(popover2(By.id("popover2-basic-button"))
                                .ariaLabel("Basic popover")
                                .addHeader("Popover header")
                                .addBody("Popovers are triggered by click rather than hover.")
                                .addFooter("Popover footer"))
                        .element()
                // @code-end:popover2-basic
        ));

        addSnippet(new Snippet("popover2-placements", "Placements",
                code("popover2-placements"), () ->
                // @code-start:popover2-placements
                div().style("display: flex; gap: 16px")
                        .add(button("Bottom").secondary()
                                .id("popover2-bottom-button"))
                        .add(popover2(By.id("popover2-bottom-button"))
                                .placement(bottom)
                                .ariaLabel("Bottom popover")
                                .addHeader("Bottom popover")
                                .addBody("This popover is placed at the bottom.")
                                .addFooter("Popover footer"))
                        .add(button("Left").secondary()
                                .id("popover2-left-button"))
                        .add(popover2(By.id("popover2-left-button"))
                                .placement(left)
                                .ariaLabel("Left popover")
                                .addHeader("Left popover")
                                .addBody("This popover is placed on the left.")
                                .addFooter("Popover footer"))
                        .add(button("Right").secondary()
                                .id("popover2-right-button"))
                        .add(popover2(By.id("popover2-right-button"))
                                .placement(right)
                                .ariaLabel("Right popover")
                                .addHeader("Right popover")
                                .addBody("This popover is placed on the right.")
                                .addFooter("Popover footer"))
                        .element()
                // @code-end:popover2-placements
        ));

        addSnippet(new Snippet("popover2-close", "Close popover",
                code("popover2-close"), () -> {
            // @code-start:popover2-close
            Popover2 popover = popover2(By.id("popover2-close-button"));
            popover.ariaLabel("Popover with button in the body that can close it")
                    .addHeader("Popover header")
                    .addBody(popover2Body()
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
                            .id("popover2-close-button"))
                    .add(popover)
                    .element();
            // @code-end:popover2-close
        }));

        addSnippet(new Snippet("popover2-no-padding", "Without header/footer/close and no padding",
                code("popover2-no-padding"), () ->
                // @code-start:popover2-no-padding
                div().style("margin", "50px")
                        .add(button("Toggle popover").primary()
                                .id("popover2-no-padding-button"))
                        .add(popover2(By.id("popover2-no-padding-button"))
                                .noClose()
                                .noPadding()
                                .ariaLabel("Popover with no header, footer, close button, and padding")
                                .addBody(
                                        "This popover has no padding and is intended for use with content that has its own spacing and should touch the edges of the popover container."))
                        .element()
                // @code-end:popover2-no-padding
        ));

        addSnippet(new Snippet("popover2-auto-width", "Width auto",
                code("popover2-auto-width"), () ->
                // @code-start:popover2-auto-width
                div().style("margin", "50px")
                        .add(button("Toggle popover").primary()
                                .id("popover2-auto-width-button"))
                        .add(popover2(By.id("popover2-auto-width-button"))
                                .autoWidth()
                                .ariaLabel("Popover with auto-width.")
                                .addBody("Removes fixed-width and allows width to be defined by contents."))
                        .element()
                // @code-end:popover2-auto-width
        ));

        addSnippet(new Snippet("popover2-auto-placement", "Auto placement",
                "You might need to resize the browser window to a minimum to see the auto placement in action.",
                code("popover2-auto-placement"), () -> {
            // @code-start:popover2-auto-placement
            Button button = button("Toggle popover");
            onAttach(button, mr -> {
                ScrollIntoViewOptions options = ScrollIntoViewOptions.create();
                options.setBlock("center");
                options.setInline("center");
                button.element().scrollIntoView(options);
            });

            Popover2 popover = popover2(By.id("popover2-auto-placement-button"));
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
                                                    .id("popover2-auto-placement-button"))
                                            .add(popover
                                                    .placement(auto)
                                                    .ariaLabel("Advanced popover")
                                                    .addHeader("Popover header")
                                                    .addBody(LoremIpsum.words(20))
                                                    .addFooter("Popover footer")))))
                    .element();
            // @code-end:popover2-auto-placement
        }));

        addSnippet(new Snippet("popover2-icon", "Popover with icon in the title",
                code("popover2-icon"), () ->
                // @code-start:popover2-icon
                div().style("margin", "50px")
                        .add(button("Toggle popover").primary()
                                .id("popover2-icon-button"))
                        .add(popover2(By.id("popover2-icon-button"))
                                .icon(bullhorn())
                                .ariaLabel("Popover with icon in the title example.")
                                .addHeader("Popover with icon")
                                .addBody(LoremIpsum.words(20))
                                .addFooter("Popover footer"))
                        .element()
                // @code-end:popover2-icon
        ));

        addSnippet(new Snippet("popover2-alert", "Alert popover",
                code("popover2-alert"), () -> {
            // @code-start:popover2-alert
            return div().style("margin", "50px")
                    .add(actionList()
                            .addItem(actionListGroup()
                                    .addItem(actionListItem()
                                            .add(button("Custom").secondary().id("popover2-alert-custom")))
                                    .addItem(actionListItem()
                                            .add(button("Info").secondary().id("popover2-alert-info")))
                                    .addItem(actionListItem()
                                            .add(button("Success").secondary().id("popover2-alert-success")))
                                    .addItem(actionListItem()
                                            .add(button("Warning").warning().id("popover2-alert-warning")))
                                    .addItem(actionListItem()
                                            .add(button("Danger").danger().id("popover2-alert-danger")))))
                    .add(popover2(By.id("popover2-alert-custom"))
                            .status(Severity.custom)
                            .addHeader("Popover custom header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .add(popover2(By.id("popover2-alert-info"))
                            .status(Severity.info)
                            .addHeader("Popover info header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .add(popover2(By.id("popover2-alert-success"))
                            .status(Severity.success)
                            .addHeader("Popover success header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .add(popover2(By.id("popover2-alert-warning"))
                            .status(Severity.warning)
                            .addHeader("Popover warning header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .add(popover2(By.id("popover2-alert-danger"))
                            .status(Severity.danger)
                            .addHeader("Popover danger header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .element();
            // @code-end:popover2-alert
        }));

        startApiDocs(Popover2.class);
        addApiDoc(Popover2.class, component);
        addApiDoc(Popover2Body.class, subcomponent);
        addApiDoc(Popover2Footer.class, subcomponent);
        addApiDoc(Popover2Header.class, subcomponent);
    }
}
