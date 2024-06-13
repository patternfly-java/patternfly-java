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
package org.patternfly.showcase;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.gwtproject.safehtml.shared.SafeHtml;
import org.jboss.elemento.By;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.jboss.elemento.router.LoadedData;
import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Parameter;
import org.jboss.elemento.router.Place;
import org.patternfly.component.jumplinks.JumpLinks;
import org.patternfly.component.table.Tbody;
import org.patternfly.showcase.component.Component;
import org.patternfly.showcase.layout.Layout;
import org.patternfly.style.Size;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLParagraphElement;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.jumplinks.JumpLinks.jumpLinks;
import static org.patternfly.component.jumplinks.JumpLinksItem.jumpLinksItem;
import static org.patternfly.component.jumplinks.JumpLinksList.jumpLinksList;
import static org.patternfly.component.label.Label.label;
import static org.patternfly.component.page.PageMainBody.pageMainBody;
import static org.patternfly.component.page.PageMainGroup.pageMainGroup;
import static org.patternfly.component.page.PageMainSection.pageMainSection;
import static org.patternfly.component.table.Table.table;
import static org.patternfly.component.table.Tbody.tbody;
import static org.patternfly.component.table.Td.td;
import static org.patternfly.component.table.Th.th;
import static org.patternfly.component.table.Thead.thead;
import static org.patternfly.component.table.Tr.tr;
import static org.patternfly.component.table.Wrap.breakWord;
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.component.tooltip.Tooltip.tooltip;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.icon.IconSets.fas.swatchbook;
import static org.patternfly.icon.IconSets.patternfly.catalog;
import static org.patternfly.layout.flex.AlignItems.center;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.flex.SpaceItems.none;
import static org.patternfly.popper.Placement.auto;
import static org.patternfly.showcase.Ids.MAIN_ID;
import static org.patternfly.showcase.LinkIcon.linkIcon;
import static org.patternfly.style.Breakpoint._2xl;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Brightness.light;
import static org.patternfly.style.Classes.floatRight;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.ExpandableModifier.expandable;
import static org.patternfly.style.ExpandableModifier.nonExpandable;
import static org.patternfly.style.GridBreakpoint.gridMd;
import static org.patternfly.style.Size._4xl;
import static org.patternfly.style.Width.width20;
import static org.patternfly.style.Width.width30;

public class SnippetPage implements Page {

    // ------------------------------------------------------ instance

    private final JumpLinks jumpLinks;
    private final HTMLElement contentContainer;
    private final Map<String, Toc> tocs;
    private final List<HTMLElement> elements;
    private boolean tocReady;
    private Tbody tbody;

    public SnippetPage(Component component) {
        this(component.title, component.summary(), component.apiDoc(), component.designGuidelines());
    }

    public SnippetPage(Layout layout) {
        this(layout.title, layout.summary(), layout.apiDoc(), layout.designGuidelines());
    }

    SnippetPage(String title, SafeHtml summary, String apiDoc, String designGuidelines) {
        tocReady = false;
        tocs = new LinkedHashMap<>();
        elements = singletonList(
                pageMainGroup()
                        .addSection(pageMainSection()
                                .background(light)
                                .limitWidth()
                                .addBody(pageMainBody()
                                        .add(div().css(util(floatRight))
                                                .add(button(a())
                                                        .id("design-guidelines")
                                                        .plain()
                                                        .href(designGuidelines)
                                                        .target("patternfly")
                                                        .icon(swatchbook()))
                                                .add(tooltip(By.id("design-guidelines"), "Design guidelines")
                                                        .placement(auto)))
                                        .add(div().css(util(floatRight))
                                                .add(button(a())
                                                        .id("api-doc")
                                                        .plain()
                                                        .href(apiDoc)
                                                        .target(ApiDoc.API_DOC_TARGET)
                                                        .icon(catalog()))
                                                .add(tooltip(By.id("api-doc"), "API documentation")
                                                        .placement(auto)))
                                        .add(textContent()
                                                .add(flex().alignItems(breakpoints(default_, center))
                                                        .add(title(1, _4xl, title)))
                                                .add(p().innerHtml(summary)))))
                        .addSection(pageMainSection().css(modifier("light-100"))
                                .fill()
                                .add(div().css(util("h-100"))
                                        .add(div().css(util("display-flex"), "ws-mdx-child-template")
                                                .add(jumpLinks = jumpLinks("Table of contents").css("ws-toc")
                                                        .style("top", "0")
                                                        .vertical()
                                                        .scrollableSelector(By.id(MAIN_ID))
                                                        .expandable(breakpoints(
                                                                default_, expandable,
                                                                _2xl, nonExpandable))
                                                        .ariaLabel("Table of contents"))
                                                .add(div().css("ws-mdx-content")
                                                        .add(contentContainer = div().css("ws-mdx-content-content")
                                                                .element())))))
                        .element());
    }

    @Override
    public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
        if (!tocReady) {
            for (Toc toc : tocs.values()) {
                jumpLinks.addItem(jumpLinksItem(toc.id, toc.text, "#" + toc.id).css("ws-toc-item")
                        .run(jli -> {
                            if (!toc.children.isEmpty()) {
                                jli.addList(jumpLinksList().run(jll -> {
                                    for (Toc child : toc.children) {
                                        jll.addItem(jumpLinksItem(child.id, child.text, "#" + child.id).css("ws-toc-item"));
                                    }
                                }));
                            }
                        }));
            }
            tocReady = true;
        }
        return elements;
    }

    // ------------------------------------------------------ examples

    public void startExamples() {
        addHeader(Toc.EXAMPLES, "Examples");
    }

    public void startExamples(String description) {
        addHeader(Toc.EXAMPLES, "Examples", description);
    }

    public void startExamples(HTMLContainerBuilder<HTMLParagraphElement> description) {
        addHeader(Toc.EXAMPLES, "Examples", description);
    }

    // ------------------------------------------------------ snippet

    public void addSnippet(Snippet snippet) {
        addSnippet(Toc.EXAMPLES, snippet);
    }

    public void addSnippet(String headerId, Snippet snippet) {
        failSafeToc(headerId).add(snippet.id, snippet.title);
        contentContainer.appendChild(snippet.element());
    }

    // ------------------------------------------------------ api doc

    public void startApiDocs(Class<?> component) {
        addHeader(Toc.API_DOCS, "API documentation", p()
                .add("All classes for this component are in the package ")
                .add(a(packageDocLink(component), ApiDoc.API_DOC_TARGET).textContent(package_(component)))
                .add("."));
    }

    public void addApiDoc(Class<?> clazz, ApiDoc.Type type) {
        String fullName = clazz.getName();
        String simpleName = clazz.getSimpleName();
        String id = Id.build(simpleName);

        failSafeToc(Toc.API_DOCS).add(id, simpleName);
        failSafeTbody().addRow(tr()
                .addData(td("Name").wrap(breakWord)
                        .add(span().css("ws-heading")
                                .id(id)
                                .add(a("#" + id).css("ws-heading-anchor")
                                        .aria(hidden, true)
                                        .attr(tabindex, -1)
                                        .add(linkIcon()))
                                .add(simpleName)))
                .addData(td("Type").wrap(breakWord)
                        .add(label(type.name, type.color)))
                .addData(td("API Documentation").wrap(breakWord)
                        .add(a(apiDocLink(clazz), ApiDoc.API_DOC_TARGET).textContent(fullName))));
    }

    // ------------------------------------------------------ header

    public void addHeader(String id, String title) {
        addHeader(id, title, (HTMLContainerBuilder<HTMLParagraphElement>) null);
    }

    public void addHeader(String id, String title, String description) {
        if (description == null) {
            addHeader(id, title, (HTMLContainerBuilder<HTMLParagraphElement>) null);
        } else {
            addHeader(id, title, p().textContent(description));
        }
    }

    public void addHeader(String id, String title, HTMLContainerBuilder<HTMLParagraphElement> description) {
        storeToc(id, title);
        contentContainer.appendChild(flex()
                .spaceItems(breakpoints(default_, none))
                .alignItems(breakpoints(default_, center))
                .add(title(2, Size._2xl, title).css("ws-heading", "ws-title", "ws-h2")
                        .id(id)
                        .attr(tabindex, -1)
                        .add(a("#" + id).css("ws-heading-anchor")
                                .aria(hidden, true)
                                .attr(tabindex, -1)
                                .add(linkIcon())))
                .element());
        if (description != null) {
            contentContainer.appendChild(description.css("ws-p").element());
        }
    }

    // ------------------------------------------------------ toc

    private Toc failSafeToc(String id) {
        return tocs.getOrDefault(id, new Toc(id, "Unknown"));
    }

    private void storeToc(String id, String text) {
        tocs.putIfAbsent(id, new Toc(id, text));
    }

    private static final class Toc {

        static final String EXAMPLES = "examples";
        static final String API_DOCS = "api-docs";

        String id;
        String text;
        List<Toc> children;

        Toc(String id, String text) {
            this.id = id;
            this.text = text;
            this.children = new ArrayList<>();
        }

        void add(String id, String text) {
            children.add(new Toc(id, text));
        }
    }

    // ------------------------------------------------------ internal

    private String apiDocLink(Class<?> clazz) {
        return ApiDoc.API_DOC_BASE + clazz.getName().replace('.', '/') + ".html";
    }

    private String packageDocLink(Class<?> clazz) {
        return ApiDoc.API_DOC_BASE + package_(clazz).replace('.', '/') + "/package-summary.html";
    }

    private String package_(Class<?> clazz) {
        String name = clazz.getName();
        return name.substring(0, name.lastIndexOf('.'));
    }

    private Tbody failSafeTbody() {
        if (tbody == null) {
            contentContainer.appendChild(
                    table().css(util("mt-md"), util("mb-lg"))
                            .compact()
                            .gridBreakpoint(gridMd)
                            .addHead(thead()
                                    .addRow(tr()
                                            .addHeader(th().width(width30).textContent("Name"))
                                            .addHeader(th().width(width20).textContent("Type"))
                                            .addHeader(th().textContent("API Documentation"))))
                            .addBody(tbody = tbody())
                            .element());
        }
        return tbody;
    }
}
