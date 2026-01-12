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

import org.patternfly.component.page.MastheadLogo;

import static org.patternfly.component.page.Masthead.masthead;
import static org.patternfly.component.page.MastheadBrand.mastheadBrand;
import static org.patternfly.component.page.MastheadContent.mastheadContent;
import static org.patternfly.component.page.MastheadMain.mastheadMain;
import static org.patternfly.component.page.MastheadToggle.mastheadToggle;
import static org.patternfly.component.page.Page.page;
import static org.patternfly.component.page.PageBreadcrumb.pageBreadcrumb;
import static org.patternfly.component.page.PageGroup.pageGroup;
import static org.patternfly.component.page.PageMain.pageMain;
import static org.patternfly.component.page.PageSection.pageSection;
import static org.patternfly.component.page.PageSidebar.pageSidebar;
import static org.patternfly.component.skiptocontent.SkipToContent.skipToContent;
import static org.patternfly.component.toolbar.Toolbar.toolbar;

public class PageDemo {

    public void pageDemo() {
        // @start region = page
        page()
                .addSkipToContent(skipToContent("main-id"))
                .addMasthead(masthead())
                .addSidebar(pageSidebar())
                .addMain(pageMain("main-id"));
        // @end region = page
    }

    public void pageMainDemo() {
        // @start region = pageMain
        pageMain("main-id")
                .addGroup(pageGroup()
                        .addSection(pageBreadcrumb())
                        .addSection(pageSection()))
                .addSection(pageSection())
                .addSection(pageSection());
        // @end region = pageMain
    }

    public void pageMainGroupDemo() {
        // @start region = pageMainGroup
        pageGroup()
                .addSection(pageBreadcrumb())
                .addSection(pageSection());
        // @end region = pageMainGroup
    }

    public void mastheadDemo() {
        // @start region = masthead
        masthead()
                .addMain(mastheadMain()
                        .addToggle(mastheadToggle())
                        .addBrand(mastheadBrand()
                                .addLogo(MastheadLogo.mastheadLogo("/"))))
                .addContent(mastheadContent()
                        .addToolbar(toolbar()));
        // @end region = masthead
    }
}
