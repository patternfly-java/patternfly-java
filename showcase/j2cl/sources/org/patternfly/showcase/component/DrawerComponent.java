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
import org.patternfly.component.drawer.Drawer;
import org.patternfly.component.drawer.DrawerCloseButton;
import org.patternfly.component.drawer.DrawerColor;
import org.patternfly.component.drawer.DrawerContent;
import org.patternfly.component.drawer.DrawerContentBody;
import org.patternfly.component.drawer.DrawerPanel;
import org.patternfly.component.drawer.DrawerPanelBody;
import org.patternfly.component.drawer.DrawerPanelHead;
import org.patternfly.component.drawer.DrawerPanelWidth;
import org.patternfly.component.drawer.DrawerSection;
import org.patternfly.component.drawer.Position;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.drawer.Drawer.drawer;
import static org.patternfly.component.drawer.DrawerCloseButton.drawerCloseButton;
import static org.patternfly.component.drawer.DrawerContent.drawerContent;
import static org.patternfly.component.drawer.DrawerContentBody.drawerContentBody;
import static org.patternfly.component.drawer.DrawerPanel.drawerPanel;
import static org.patternfly.component.drawer.DrawerPanelBody.drawerPanelBody;
import static org.patternfly.component.drawer.DrawerPanelHead.drawerPanelHead;
import static org.patternfly.component.drawer.DrawerPanelWidth.width33;
import static org.patternfly.component.drawer.DrawerSection.drawerSection;
import static org.patternfly.component.drawer.Position.bottom;
import static org.patternfly.component.drawer.Position.end;
import static org.patternfly.component.drawer.Position.start;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.modifier;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.Size._2xl;

@Route(value = "/components/drawer", title = "Drawer")
public class DrawerComponent extends SnippetPage {

    public DrawerComponent() {
        super(components.get("drawer"));

        startExamples();
        addSnippet(new Snippet("drawer-basic", "Basic",
                code("drawer-basic"), () -> {
            // @code-start:drawer-basic
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-basic
        }));

        addSnippet(new Snippet("drawer-end", "Panel at end",
                code("drawer-end"), () -> {
            // @code-start:drawer-end
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer.position(end)
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-end
        }));

        addSnippet(new Snippet("drawer-start", "Panel at start",
                code("drawer-start"), () -> {
            // @code-start:drawer-start
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer.position(start)
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-start
        }));

        addSnippet(new Snippet("drawer-bottom", "Panel on bottom",
                code("drawer-bottom"), () -> {
            // @code-start:drawer-bottom
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(div().style("height", "400px")
                            .add(drawer.position(bottom)
                                    .addContent(drawerContent()
                                            .addBody(drawerContentBody()
                                                    .textContent(LoremIpsum.paragraphs(20))))
                                    .addPanel(drawerPanel()
                                            .addHead(drawerPanelHead()
                                                    .add(span().textContent("drawer-panel"))
                                                    .addCloseButton(drawerCloseButton())))))
                    .element();
            // @code-end:drawer-bottom
        }));

        addSnippet(new Snippet("drawer-inline", "Basic inline",
                code("drawer-inline"), () -> {
            // @code-start:drawer-inline
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer.inline()
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-inline
        }));

        addSnippet(new Snippet("drawer-inline-end", "Inline panel at end",
                code("drawer-inline-end"), () -> {
            // @code-start:drawer-inline-end
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer.inline().position(end)
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-inline-end
        }));

        addSnippet(new Snippet("drawer-inline-start", "Inline panel at start",
                code("drawer-inline-start"), () -> {
            // @code-start:drawer-inline-start
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer.inline().position(start)
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-inline-start
        }));

        addSnippet(new Snippet("drawer-stacked", "Stacked content body elements",
                code("drawer-stacked"), () -> {
            // @code-start:drawer-stacked
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent("content-body"))
                                    .addBody(drawerContentBody().padding()
                                            .textContent("content-body with padding"))
                                    .addBody(drawerContentBody()
                                            .textContent("content-body")))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(title(3, _2xl, "drawer title"))
                                            .addCloseButton(drawerCloseButton())
                                            .add("drawer-panel"))
                                    .addBody(drawerPanelBody().noPadding()
                                            .textContent("drawer-panel with no padding"))
                                    .addBody(drawerPanelBody()
                                            .textContent("drawer-panel"))))
                    .element();
            // @code-end:drawer-stacked
        }));

        addSnippet(new Snippet("drawer-content-padding", "Modified content padding",
                code("drawer-content-padding"), () -> {
            // @code-start:drawer-content-padding
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody().padding()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-content-padding
        }));

        addSnippet(new Snippet("drawer-panel-padding", "Modified panel padding",
                code("drawer-panel-padding"), () -> {
            // @code-start:drawer-panel-padding
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead().noPadding()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-panel-padding
        }));

        addSnippet(new Snippet("drawer-section", "Additional section above drawer content",
                code("drawer-section"), () -> {
            // @code-start:drawer-section
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer
                            .addSection(drawerSection().textContent("drawer-section above"))
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton())))
                            .addSection(drawerSection().textContent("drawer-section below")))
                    .element();
            // @code-end:drawer-section
        }));

        addSnippet(new Snippet("drawer-static", "Static drawer",
                code("drawer-static"), () -> {
            // @code-start:drawer-static
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer.static_()
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-static
        }));

        addSnippet(new Snippet("drawer-breakpoint", "Breakpoint",
                code("drawer-breakpoint"), () -> {
            // @code-start:drawer-breakpoint
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .widths(breakpoints(default_, width33))
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-breakpoint
        }));

        addSnippet(new Snippet("drawer-resizable", "Resizable at end",
                code("drawer-resizable"), () -> {
            // @code-start:drawer-resizable
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .resizable()
                                    .minSize("150px").defaultSize("500px")
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-resizable
        }));

        addSnippet(new Snippet("drawer-resizable-start", "Resizable at start",
                code("drawer-resizable-start"), () -> {
            // @code-start:drawer-resizable-start
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer.position(start)
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .resizable().increment(50)
                                    .minSize("200px").defaultSize("500px")
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-resizable-start
        }));

        addSnippet(new Snippet("drawer-resizable-bottom", "Resizable on bottom",
                code("drawer-resizable-bottom"), () -> {
            // @code-start:drawer-resizable-bottom
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(div().style("height", "400px")
                            .add(drawer.position(bottom)
                                    .addContent(drawerContent()
                                            .addBody(drawerContentBody()
                                                    .textContent(LoremIpsum.paragraphs(20))))
                                    .addPanel(drawerPanel()
                                            .resizable()
                                            .minSize("100px").defaultSize("200px")
                                            .addHead(drawerPanelHead()
                                                    .add(span().textContent("drawer-panel"))
                                                    .addCloseButton(drawerCloseButton())))))
                    .element();
            // @code-end:drawer-resizable-bottom
        }));

        startApiDocs(Drawer.class);
        addApiDoc(Drawer.class, component);
        addApiDoc(DrawerCloseButton.class, subcomponent);
        addApiDoc(DrawerColor.class, modifier);
        addApiDoc(DrawerContent.class, subcomponent);
        addApiDoc(DrawerContentBody.class, subcomponent);
        addApiDoc(DrawerPanel.class, subcomponent);
        addApiDoc(DrawerPanelBody.class, subcomponent);
        addApiDoc(DrawerPanelHead.class, subcomponent);
        addApiDoc(DrawerPanelWidth.class, modifier);
        addApiDoc(DrawerSection.class, subcomponent);
        addApiDoc(Position.class, modifier);
    }
}
