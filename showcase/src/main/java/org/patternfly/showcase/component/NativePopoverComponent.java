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
import org.patternfly.component.popover.NativePopover;
import org.patternfly.component.popover.NativePopoverBody;
import org.patternfly.component.popover.NativePopoverFooter;
import org.patternfly.component.popover.NativePopoverHeader;
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
import static org.patternfly.component.popover.NativePopover.nativePopover;
import static org.patternfly.component.popover.NativePopoverBody.popoverBody;
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

@Route(value = "/components/native-popover", title = "Native Popover")
public class NativePopoverComponent extends SnippetPage {

    public NativePopoverComponent() {
        super(components.get("native-popover"));

        startExamples();
        addSnippet(new Snippet("np-basic", "Basic",
                code("np-basic"), () ->
                // @code-start:np-basic
                div().style("margin", "50px")
                        .add(button("Toggle popover").primary()
                                .id("np-basic-button"))
                        .add(nativePopover(By.id("np-basic-button"))
                                .ariaLabel("Basic popover")
                                .addHeader("Popover header")
                                .addBody("Popovers are triggered by click rather than hover.")
                                .addFooter("Popover footer"))
                        .element()
                // @code-end:np-basic
        ));

        addSnippet(new Snippet("np-placements", "Placements",
                code("np-placements"), () ->
                // @code-start:np-placements
                div().style("display: flex; gap: 16px")
                        .add(button("Bottom").secondary()
                                .id("nt-placements-bottom-button"))
                        .add(nativePopover(By.id("nt-placements-bottom-button"))
                                .placement(bottom)
                                .ariaLabel("Bottom popover")
                                .addHeader("Bottom popover")
                                .addBody("This popover is placed at the bottom.")
                                .addFooter("Popover footer"))
                        .add(button("Left").secondary()
                                .id("nt-placements-left-button"))
                        .add(nativePopover(By.id("nt-placements-left-button"))
                                .placement(left)
                                .ariaLabel("Left popover")
                                .addHeader("Left popover")
                                .addBody("This popover is placed on the left.")
                                .addFooter("Popover footer"))
                        .add(button("Right").secondary()
                                .id("nt-placements-right-button"))
                        .add(nativePopover(By.id("nt-placements-right-button"))
                                .placement(right)
                                .ariaLabel("Right popover")
                                .addHeader("Right popover")
                                .addBody("This popover is placed on the right.")
                                .addFooter("Popover footer"))
                        .element()
                // @code-end:np-placements
        ));

        addSnippet(new Snippet("np-close", "Close popover",
                code("np-close"), () -> {
            // @code-start:np-close
            NativePopover popover = nativePopover(By.id("np-close-button"));
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
                            .id("np-close-button"))
                    .add(popover)
                    .element();
            // @code-end:np-close
        }));

        addSnippet(new Snippet("np-no-padding", "Without header/footer/close and no padding",
                code("np-no-padding"), () ->
                // @code-start:np-no-padding
                div().style("margin", "50px")
                        .add(button("Toggle popover").primary()
                                .id("np-no-padding-button"))
                        .add(nativePopover(By.id("np-no-padding-button"))
                                .noClose()
                                .noPadding()
                                .ariaLabel("Popover with no header, footer, close button, and padding")
                                .addBody(
                                        "This popover has no padding and is intended for use with content that has its own spacing and should touch the edges of the popover container."))
                        .element()
                // @code-end:np-no-padding
        ));

        addSnippet(new Snippet("np-auto-width", "Width auto",
                code("np-auto-width"), () ->
                // @code-start:np-auto-width
                div().style("margin", "50px")
                        .add(button("Toggle popover").primary()
                                .id("np-auto-width-button"))
                        .add(nativePopover(By.id("np-auto-width-button"))
                                .autoWidth()
                                .ariaLabel("Popover with auto-width.")
                                .addBody("Removes fixed-width and allows width to be defined by contents."))
                        .element()
                // @code-end:np-auto-width
        ));

        addSnippet(new Snippet("np-auto-placement", "Auto placement",
                "You might need to resize the browser window to a minimum to see the auto placement in action.",
                code("np-auto-placement"), () -> {
            // @code-start:np-auto-placement
            Button button = button("Toggle popover");
            onAttach(button, mr -> {
                ScrollIntoViewOptions options = ScrollIntoViewOptions.create();
                options.setBlock("center");
                options.setInline("center");
                button.element().scrollIntoView(options);
            });

            NativePopover popover = nativePopover(By.id("np-auto-placement-button"));
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
                                                    .id("np-auto-placement-button"))
                                            .add(popover
                                                    .placement(auto)
                                                    .ariaLabel("Advanced popover")
                                                    .addHeader("Popover header")
                                                    .addBody(LoremIpsum.words(20))
                                                    .addFooter("Popover footer")))))
                    .element();
            // @code-end:np-auto-placement
        }));

        addSnippet(new Snippet("np-icon", "Popover with icon in the title",
                code("np-icon"), () ->
                // @code-start:np-icon
                div().style("margin", "50px")
                        .add(button("Toggle popover").primary()
                                .id("np-icon-button"))
                        .add(nativePopover(By.id("np-icon-button"))
                                .icon(bullhorn())
                                .ariaLabel("Popover with icon in the title example.")
                                .addHeader("Popover with icon")
                                .addBody(LoremIpsum.words(20))
                                .addFooter("Popover footer"))
                        .element()
                // @code-end:np-icon
        ));

        addSnippet(new Snippet("np-alert", "Alert popover",
                code("np-alert"), () -> {
            // @code-start:np-alert
            return div().style("margin", "50px")
                    .add(actionList()
                            .addItem(actionListGroup()
                                    .addItem(actionListItem()
                                            .add(button("Custom").secondary().id("np-alert-custom")))
                                    .addItem(actionListItem()
                                            .add(button("Info").secondary().id("np-alert-info")))
                                    .addItem(actionListItem()
                                            .add(button("Success").secondary().id("np-alert-success")))
                                    .addItem(actionListItem()
                                            .add(button("Warning").warning().id("np-alert-warning")))
                                    .addItem(actionListItem()
                                            .add(button("Danger").danger().id("np-alert-danger")))))
                    .add(nativePopover(By.id("np-alert-custom"))
                            .status(Severity.custom)
                            .addHeader("Popover custom header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .add(nativePopover(By.id("np-alert-info"))
                            .status(Severity.info)
                            .addHeader("Popover info header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .add(nativePopover(By.id("np-alert-success"))
                            .status(Severity.success)
                            .addHeader("Popover success header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .add(nativePopover(By.id("np-alert-warning"))
                            .status(Severity.warning)
                            .addHeader("Popover warning header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .add(nativePopover(By.id("np-alert-danger"))
                            .status(Severity.danger)
                            .addHeader("Popover danger header")
                            .addBody(LoremIpsum.words(20))
                            .addFooter("Popover footer"))
                    .element();
            // @code-end:np-alert
        }));

        startApiDocs(NativePopover.class);
        addApiDoc(NativePopover.class, component);
        addApiDoc(NativePopoverBody.class, subcomponent);
        addApiDoc(NativePopoverFooter.class, subcomponent);
        addApiDoc(NativePopoverHeader.class, subcomponent);
    }
}
