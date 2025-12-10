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

import org.jboss.elemento.By;
import org.jboss.elemento.logger.Logger;
import org.jboss.elemento.router.AnnotatedPlaces;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.PlaceManager;
import org.kie.j2cl.tools.processors.annotations.GWT3EntryPoint;
import org.patternfly.component.navigation.Navigation;
import org.patternfly.component.navigation.NavigationItem;
import org.patternfly.core.Version;
import org.patternfly.style.Classes;

import static elemental2.dom.DomGlobal.location;
import static org.gwtproject.safehtml.shared.SafeHtmlUtils.fromSafeConstant;
import static org.jboss.elemento.Elements.body;
import static org.patternfly.component.backtotop.BackToTop.backToTop;
import static org.patternfly.component.navigation.ExpandableNavigationGroup.expandableNavigationGroup;
import static org.patternfly.component.navigation.Navigation.navigation;
import static org.patternfly.component.navigation.NavigationItem.navigationItem;
import static org.patternfly.component.navigation.NavigationType.Vertical.expandable;
import static org.patternfly.component.page.Masthead.masthead;
import static org.patternfly.component.page.MastheadBrand.mastheadBrand;
import static org.patternfly.component.page.MastheadContent.mastheadContent;
import static org.patternfly.component.page.MastheadLogo.mastheadLogo;
import static org.patternfly.component.page.MastheadMain.mastheadMain;
import static org.patternfly.component.page.MastheadToggle.mastheadToggle;
import static org.patternfly.component.page.Page.page;
import static org.patternfly.component.page.PageMain.pageMain;
import static org.patternfly.component.page.PageSidebar.pageSidebar;
import static org.patternfly.component.page.PageSidebarBody.pageSidebarBody;
import static org.patternfly.component.skiptocontent.SkipToContent.skipToContent;
import static org.patternfly.component.toolbar.Toolbar.toolbar;
import static org.patternfly.component.toolbar.ToolbarContent.toolbarContent;
import static org.patternfly.component.toolbar.ToolbarGroup.toolbarGroup;
import static org.patternfly.component.toolbar.ToolbarItem.toolbarItem;
import static org.patternfly.componentgroup.theme.ThemeSelector.themeSelector;
import static org.patternfly.showcase.Data.charts;
import static org.patternfly.showcase.Data.groupComponents;
import static org.patternfly.showcase.Data.layouts;
import static org.patternfly.showcase.Data.topLevelComponents;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.fullHeight;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.static_;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.Height;

public final class Showcase {

    private static final String MAIN_ID = "pfj-main-id";
    private static final Logger logger = Logger.getLogger(Showcase.class.getName());
    private static PlaceManager placeManager;

    public static PlaceManager placeManager() {
        return placeManager;
    }

    @GWT3EntryPoint
    public void onModuleLoad() {
        Logger.initFrom(location);

        Navigation navigation = navigation(expandable);
        placeManager = new PlaceManager()
                .root(By.id(MAIN_ID))
                .linkSelector(By.attribute("target", ApiDoc.API_DOC_TARGET), true)
                .title(title -> "PatternFly Java • " + title)
                .notFound(NotFound::new)
                .register(new AnnotatedPlaces())
                .afterPlace((pm, place) -> navigation.select(place.route));

        navigation
                .addItem(ni(placeManager.place("/get-started")))
                .addGroup(expandableNavigationGroup("components", "Components")
                        .addItem(ni(placeManager.place("/components/all-components")))
                        .addItems(topLevelComponents(), component ->
                                navigationItem(component.route, component.title, component.route))
                        .insertGroupAfter(expandableNavigationGroup("forms", "Forms")
                                        .addItems(groupComponents("forms"), sc ->
                                                navigationItem(sc.route, sc.title, sc.route)),
                                "/components/expandable-section")
                        .insertGroupAfter(expandableNavigationGroup("menus", "Menus")
                                        .addItems(groupComponents("menus"), sc ->
                                                navigationItem(sc.route, sc.title, sc.route)),
                                "/components/masthead"))
                .addGroup(expandableNavigationGroup("charts", "Charts")
                        .addItem(ni(placeManager.place("/charts/about-charts"), "About charts"))
                        .addItems(charts(), chart ->
                                navigationItem(chart.route, chart.title, chart.route)))
                .addGroup(expandableNavigationGroup("layouts", "Layouts")
                        .addItem(ni(placeManager.place("/layouts/about-layouts"), "About layouts"))
                        .addItems(layouts(), layout ->
                                navigationItem(layout.route, layout.title, layout.route)))
                .addItem(ni(placeManager.place("/api-design")))
                .addItem(ni(placeManager.place("/icons")))
                .addItem(ni(placeManager.place("/tokens")))
                .addItem(ni(placeManager.place("/get-involved")));

        body().add(page()
                .addSkipToContent(skipToContent(MAIN_ID))
                .addMasthead(masthead()
                        .addMain(mastheadMain()
                                .addToggle(mastheadToggle()
                                        .toggleSidebar())
                                .addBrand(mastheadBrand()
                                        .addLogo(mastheadLogo("/")
                                                .html(fromSafeConstant(ResourcesImpl.INSTANCE.pfLogo().getText()))
                                                .style(componentVar(component(Classes.brand), Height).name, "36px"))))
                        .addContent(mastheadContent()
                                .addToolbar(toolbar().css(modifier(fullHeight), modifier(static_))
                                        .addContent(toolbarContent()
                                                .addGroup(toolbarGroup().css(modifier("align-end"))
                                                        .addItem(toolbarItem().add(themeSelector("pfj")
                                                                .withContrast())))))))
                .addSidebar(pageSidebar()
                        .addBody(pageSidebarBody()
                                .addNavigation(navigation)))
                .addMain(pageMain(MAIN_ID))
                .add(backToTop().css("ws-back-to-top")
                        .scrollableSelector(By.id(MAIN_ID))));

        placeManager.start();
        logger.info("PatternFly version:      %s", Version.PATTERN_FLY_VERSION);
        logger.info("PatternFly Java version: %s", Version.PATTERN_FLY_JAVA_VERSION);
    }

    // ------------------------------------------------------ internal

    private static NavigationItem ni(Place place) {
        return ni(place, place.title);
    }

    private static NavigationItem ni(Place place, String text) {
        return navigationItem(place.route, text, place.route);
    }
}
