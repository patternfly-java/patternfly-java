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
/**
 * Provides the PatternFly page layout component and its subcomponents.
 * <p>
 * The page component provides the overall structure for an application, including a masthead with branding and tools, a
 * sidebar for navigation, and a main content area with sections. It includes support for the masthead, sidebar, page sections,
 * breadcrumbs, navigation, tabs, and groups.
 *
 * <h2>Usage</h2>
 *
 * {@snippet :
 * import static org.patternfly.component.page.Masthead.masthead;
 * import static org.patternfly.component.page.MastheadBrand.mastheadBrand;
 * import static org.patternfly.component.page.MastheadContent.mastheadContent;
 * import static org.patternfly.component.page.MastheadLogo.mastheadLogo;
 * import static org.patternfly.component.page.MastheadMain.mastheadMain;
 * import static org.patternfly.component.page.MastheadToggle.mastheadToggle;
 * import static org.patternfly.component.page.Page.page;
 * import static org.patternfly.component.page.PageMain.pageMain;
 * import static org.patternfly.component.page.PageSection.pageSection;
 * import static org.patternfly.component.page.PageSidebar.pageSidebar;
 * import static org.patternfly.component.page.PageSidebarBody.pageSidebarBody;
 *
 * Page page = page()
 *         .addMasthead(masthead()
 *                 .addMain(mastheadMain()
 *                         .addToggle(mastheadToggle())
 *                         .addBrand(mastheadBrand()
 *                                 .addLogo(mastheadLogo("#")
 *                                         .add("Logo"))))
 *                 .addContent(mastheadContent().text("Header tools")))
 *         .addSidebar(pageSidebar()
 *                 .addBody(pageSidebarBody()
 *                         .add("Navigation")))
 *         .addMain(pageMain("main-id")
 *                 .addSection(pageSection()
 *                         .text("Section 1"))
 *                 .addSection(pageSection().secondary()
 *                         .text("Section 2")));
 * }
 *
 * @see <a href="https://www.patternfly.org/components/page">https://www.patternfly.org/components/page</a>
 */
package org.patternfly.component.page;