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

import org.jboss.elemento.Elements;
import org.jboss.elemento.router.Route;
import org.patternfly.component.page.Page;
import org.patternfly.component.page.PageMain;
import org.patternfly.component.page.PageMainBody;
import org.patternfly.component.page.PageMainBreadcrumb;
import org.patternfly.component.page.PageMainGroup;
import org.patternfly.component.page.PageMainNavigation;
import org.patternfly.component.page.PageMainSection;
import org.patternfly.component.page.PageMainTabs;
import org.patternfly.component.page.PageMainWizard;
import org.patternfly.component.page.PageSection;
import org.patternfly.component.page.PageSectionBuilder;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.breadcrumb.Breadcrumb.breadcrumb;
import static org.patternfly.component.breadcrumb.BreadcrumbItem.breadcrumbItem;
import static org.patternfly.component.card.Card.card;
import static org.patternfly.component.card.CardBody.cardBody;
import static org.patternfly.component.navigation.Navigation.navigation;
import static org.patternfly.component.navigation.NavigationItem.navigationItem;
import static org.patternfly.component.navigation.NavigationType.Horizontal.tertiary;
import static org.patternfly.component.page.Masthead.masthead;
import static org.patternfly.component.page.MastheadBrand.mastheadBrand;
import static org.patternfly.component.page.MastheadContent.mastheadContent;
import static org.patternfly.component.page.MastheadMain.mastheadMain;
import static org.patternfly.component.page.MastheadToggle.mastheadToggle;
import static org.patternfly.component.page.Page.page;
import static org.patternfly.component.page.PageMain.pageMain;
import static org.patternfly.component.page.PageMainBody.pageMainBody;
import static org.patternfly.component.page.PageMainBreadcrumb.pageMainBreadcrumb;
import static org.patternfly.component.page.PageMainGroup.pageMainGroup;
import static org.patternfly.component.page.PageMainNavigation.pageMainNavigation;
import static org.patternfly.component.page.PageMainSection.pageMainSection;
import static org.patternfly.component.page.PageSidebar.pageSidebar;
import static org.patternfly.component.page.PageSidebarBody.pageSidebarBody;
import static org.patternfly.component.toolbar.Toolbar.toolbar;
import static org.patternfly.component.toolbar.ToolbarContent.toolbarContent;
import static org.patternfly.component.toolbar.ToolbarItem.toolbarItem;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Brightness.dark100;
import static org.patternfly.style.Brightness.dark200;
import static org.patternfly.style.Brightness.light;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.page;
import static org.patternfly.style.Classes.section;
import static org.patternfly.style.Padding.noPadding;
import static org.patternfly.style.Padding.padding;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.MaxWidth;

@Route(value = "/components/page", title = "Page")
public class PageComponent extends SnippetPage {

    public PageComponent() {
        super(components.get("page"));

        startExamples();
        addSnippet(new Snippet("page-vertical-nav", "Vertical navigation",
                code("page-vertical-nav"), () ->
                // @code-start:page-vertical-nav
                div()
                        .add(page(true)
                                .addMasthead(masthead()
                                        .addMain(mastheadMain()
                                                .addToggle(mastheadToggle())
                                                .addBrand(mastheadBrand()
                                                        .add("Logo")))
                                        .addContent(mastheadContent()
                                                .add("Header tools")))
                                .addSidebar(pageSidebar().keepExpanded()
                                        .addBody(pageSidebarBody()
                                                .add("Navigation")))
                                .addMain(pageMain("page-vertical-nav-main")
                                        .addSection(pageMainSection().background(dark100)
                                                .text("Section with darker background"))
                                        .addSection(pageMainSection().background(dark200)
                                                .text("Section with dark background"))
                                        .addSection(pageMainSection().background(light)
                                                .text("Section with light background"))))
                        .element()
                // @code-end:page-vertical-nav
        ));

        addSnippet(new Snippet("page-sidebar-body", "Multiple sidebar body",
                code("page-sidebar-body"), () ->
                // @code-start:page-sidebar-body
                div()
                        .add(page(true)
                                .addMasthead(masthead()
                                        .addMain(mastheadMain()
                                                .addToggle(mastheadToggle())
                                                .addBrand(mastheadBrand()
                                                        .add("Logo")))
                                        .addContent(mastheadContent()
                                                .add("Header tools")))
                                .addSidebar(pageSidebar().keepExpanded()
                                        .addBody(pageSidebarBody().pageInsets()
                                                .add("First sidebar body (with insets)"))
                                        .addBody(pageSidebarBody().fill()
                                                .add("Second sidebar body (with fill)"))
                                        .addBody(pageSidebarBody().pageInsets().noFill()
                                                .add("Third sidebar body (with insets and no fill)")))
                                .addMain(pageMain("page-sidebar-body-main")
                                        .addSection(pageMainSection().background(dark100)
                                                .text("Section with darker background"))
                                        .addSection(pageMainSection().background(dark200)
                                                .text("Section with dark background"))
                                        .addSection(pageMainSection().background(light)
                                                .text("Section with light background"))))
                        .element()
                // @code-end:page-sidebar-body
        ));

        addSnippet(new Snippet("page-horizontal-nav", "Horizontal navigation",
                code("page-horizontal-nav"), () ->
                // @code-start:page-horizontal-nav
                div()
                        .add(page(true)
                                .addMasthead(masthead()
                                        .addMain(mastheadMain()
                                                .addToggle(mastheadToggle())
                                                .addBrand(mastheadBrand()
                                                        .add("Logo")))
                                        .addContent(mastheadContent()
                                                .addToolbar(toolbar()
                                                        .addContent(toolbarContent()
                                                                .addItem(toolbarItem("page-horizontal-nav-0")
                                                                        .add("Navigation"))
                                                                .addItem(toolbarItem("page-horizontal-nav-1")
                                                                        .add("Header tools"))))))
                                .addMain(pageMain("page-horizontal-nav-main")
                                        .addSection(pageMainSection().background(dark100)
                                                .text("Section with darker background"))
                                        .addSection(pageMainSection().background(dark200)
                                                .text("Section with dark background"))
                                        .addSection(pageMainSection().background(light)
                                                .text("Section with light background"))))
                        .element()
                // @code-end:page-horizontal-nav
        ));

        addSnippet(new Snippet("page-filled-sections", "Filled page sections",
                code("page-filled-sections"), () ->
                // @code-start:page-filled-sections
                div()
                        .add(page(true)
                                .addMasthead(masthead()
                                        .addMain(mastheadMain()
                                                .addToggle(mastheadToggle())
                                                .addBrand(mastheadBrand()
                                                        .add("Logo")))
                                        .addContent(mastheadContent()
                                                .add("Header tools")))
                                .addSidebar(pageSidebar().keepExpanded()
                                        .addBody(pageSidebarBody()
                                                .add("Navigation")))
                                .addMain(pageMain("page-filled-sections-main")
                                        .addSection(pageMainSection()
                                                .text("A default page section"))
                                        .addSection(pageMainSection().fill()
                                                .text("This section fills the available space."))
                                        .addSection(pageMainSection().noFill()
                                                .text(
                                                        "This section is set to not fill the available space, since the last page section is set to fill the available space by default."))))
                        .element()
                // @code-end:page-filled-sections
        ));

        addSnippet(new Snippet("page-section-padding", "Main section padding",
                code("page-section-padding"), () ->
                // @code-start:page-section-padding
                div()
                        .add(page(true)
                                .addMasthead(masthead()
                                        .addMain(mastheadMain()
                                                .addToggle(mastheadToggle())
                                                .addBrand(mastheadBrand()
                                                        .add("Logo")))
                                        .addContent(mastheadContent()
                                                .add("Header tools")))
                                .addSidebar(pageSidebar().keepExpanded()
                                        .addBody(pageSidebarBody()
                                                .add("Navigation")))
                                .addMain(pageMain("page-section-padding-main")
                                        .addSection(pageMainSection()
                                                .text("Section with default padding"))
                                        .addSection(pageMainSection().background(light)
                                                .padding(breakpoints(default_, noPadding))
                                                .text("Section with no padding"))
                                        .addSection(pageMainSection()
                                                .padding(breakpoints(
                                                        default_, noPadding,
                                                        md, padding))
                                                .text("Section with padding on medium"))
                                        .addSection(pageMainSection().background(light)
                                                .padding(breakpoints(md, noPadding))
                                                .text("Section with no padding on medium"))))
                        .element()
                // @code-end:page-section-padding
        ));

        addSnippet(new Snippet("page-group", "Group section",
                code("page-group"), () ->
                // @code-start:page-group
                div()
                        .add(page(true)
                                .addMasthead(masthead()
                                        .addMain(mastheadMain()
                                                .addToggle(mastheadToggle())
                                                .addBrand(mastheadBrand()
                                                        .add("Logo")))
                                        .addContent(mastheadContent()
                                                .add("Header tools")))
                                .addSidebar(pageSidebar().keepExpanded()
                                        .addBody(pageSidebarBody()
                                                .add("Navigation")))
                                .addMain(pageMain("page-group-main")
                                        .addGroup(pageMainGroup()
                                                .addSection(pageMainNavigation()
                                                        .addNavigation(navigation(tertiary)
                                                                .addItem(navigationItem("page-group-ni-0", "System panel", "#"))
                                                                .addItem(navigationItem("page-group-ni-1", "Policy", "#"))
                                                                .addItem(navigationItem("page-group-ni-2", "Authentication",
                                                                        "#"))
                                                                .addItem(navigationItem("page-group-ni-3", "Network services",
                                                                        "#"))
                                                                .addItem(navigationItem("page-group-ni-4", "Server", "#"))))
                                                .addSection(pageMainBreadcrumb()
                                                        .addBreadcrumb(breadcrumb()
                                                                .addItem(breadcrumbItem("page-group-0", "Section home"))
                                                                .addItem(breadcrumbItem("page-group-1", "Section title", "#"))
                                                                .addItem(breadcrumbItem("page-group-2", "Section title", "#"))
                                                                .addItem(breadcrumbItem("page-group-3", "Section landing",
                                                                        "#").active())))
                                                .addSection(pageMainSection().background(light)
                                                        .text("Grouped section")))
                                        .addSection(pageMainSection().background(dark200)
                                                .text("Section 1"))
                                        .addSection(pageMainSection().background(dark200)
                                                .text("Section 2"))))
                        .element()
                // @code-end:page-group
        ));

        addSnippet(new Snippet("page-centered", "Centered section",
                code("page-centered"), () ->
                // @code-start:page-centered
                div()
                        .add(page(true)
                                .addMasthead(masthead()
                                        .addMain(mastheadMain()
                                                .addToggle(mastheadToggle())
                                                .addBrand(mastheadBrand()
                                                        .add("Logo")))
                                        .addContent(mastheadContent()
                                                .add("Header tools")))
                                .addSidebar(pageSidebar().keepExpanded()
                                        .addBody(pageSidebarBody()
                                                .add("Navigation")))
                                .addMain(pageMain("page-centered-main")
                                        .addSection(pageMainSection().limitWidth().centerAligned()
                                                .addBody(pageMainBody()
                                                        .add(card()
                                                                .addBody(cardBody()
                                                                        .add("When a width limited page section is wider than the value of ")
                                                                        .add(Elements.code(componentVar(component(page),
                                                                                section,
                                                                                "m-limit-width",
                                                                                MaxWidth).name))
                                                                        .add(" the section will be centered in the main section.")
                                                                        .add(br())
                                                                        .add(br())
                                                                        .add("The content in this example is placed in a card to better illustrate how the section behaves when it is centered. A card is not required to center a page section.")))))))
                        .element()
                // @code-end:page-centered
        ));

        startApiDocs(Page.class);
        addApiDoc(Page.class, component);
        addApiDoc(PageMain.class, subcomponent);
        addApiDoc(PageMainBody.class, subcomponent);
        addApiDoc(PageMainBreadcrumb.class, subcomponent);
        addApiDoc(PageMainGroup.class, subcomponent);
        addApiDoc(PageMainNavigation.class, subcomponent);
        addApiDoc(PageMainSection.class, subcomponent);
        addApiDoc(PageMainTabs.class, subcomponent);
        addApiDoc(PageMainWizard.class, subcomponent);
        addApiDoc(PageSection.class, subcomponent);
        addApiDoc(PageSectionBuilder.class, other);
    }
}
