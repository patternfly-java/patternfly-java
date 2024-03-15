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
import org.patternfly.component.navigation.ExpandableNavigationGroup;
import org.patternfly.component.navigation.Navigation;
import org.patternfly.component.navigation.NavigationGroup;
import org.patternfly.component.navigation.NavigationItem;
import org.patternfly.component.navigation.NavigationLinkText;
import org.patternfly.component.navigation.NavigationType;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static elemental2.dom.DomGlobal.console;
import static java.util.stream.Collectors.toList;
import static java.util.stream.IntStream.range;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.small;
import static org.jboss.elemento.Elements.strong;
import static org.patternfly.component.navigation.ExpandableNavigationGroup.expandableNavigationGroup;
import static org.patternfly.component.navigation.Navigation.navigation;
import static org.patternfly.component.navigation.NavigationGroup.navigationGroup;
import static org.patternfly.component.navigation.NavigationItem.navigationItem;
import static org.patternfly.component.navigation.NavigationLinkText.navigationLinkText;
import static org.patternfly.component.navigation.NavigationType.Horizontal.secondary;
import static org.patternfly.component.navigation.NavigationType.Vertical.expandable;
import static org.patternfly.component.navigation.NavigationType.Vertical.flat;
import static org.patternfly.component.navigation.NavigationType.Vertical.grouped;
import static org.patternfly.icon.IconSets.fas.arrowRight;
import static org.patternfly.icon.IconSets.fas.user;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.showcase.component.NotYetImplemented.nyi;

@Route(value = "/components/navigation", title = "Navigation")
public class NavigationComponent extends SnippetPage {

    public NavigationComponent() {
        super(components.get("navigation"));

        startExamples();
        addSnippet(new Snippet("nav-default", "Default",
                code("nav-default"), () ->
                // @code-start:nav-default
                div().css("ws-react-c-navigation")
                        .add(navigation(flat)
                                .addItem(navigationItem("nav-default-0", "Default link 1", "#item-0"))
                                .addItem(navigationItem("nav-default-1", "Default link 2", "#item-1"))
                                .addItem(navigationItem("nav-default-2", "Default link 3", "#item-2"))
                                .addItem(navigationItem("nav-default-3", "Default link 4", "#item-3")))
                        .element()
                // @code-end:nav-default
        ));

        addSnippet(new Snippet("nav-grouped", "Grouped",
                code("nav-grouped"), () ->
                // @code-start:nav-grouped
                div().css("ws-react-c-navigation")
                        .add(navigation(grouped)
                                .addGroup(navigationGroup("nav-grouped-0", "Section title 1")
                                        .addItem(navigationItem("nav-grouped-00", "Group 1 link 1", "#item-00"))
                                        .addItem(navigationItem("nav-grouped-01", "Group 1 link 2", "#item-01"))
                                        .addItem(navigationItem("nav-grouped-02", "Group 1 link 3", "#item-02")))
                                .addGroup(navigationGroup("nav-grouped-1", "Section title 2")
                                        .addItem(navigationItem("nav-grouped-10", "Group 2 link 1", "#item-10"))
                                        .addItem(navigationItem("nav-grouped-11", "Group 2 link 2", "#item-11"))
                                        .addItem(navigationItem("nav-grouped-12", "Group 2 link 3", "#item-12"))))
                        .element()
                // @code-end:nav-grouped
        ));

        addSnippet(new Snippet("nav-exp", "Expandable",
                code("nav-exp"), () ->
                // @code-start:nav-exp
                div().css("ws-react-c-navigation")
                        .add(navigation(expandable)
                                .addGroup(expandableNavigationGroup("nav-exp-0", "Expandable group 1")
                                        .addItem(navigationItem("nav-exp-00", "Subnav 1 link 1", "#item-00"))
                                        .addDivider()
                                        .addItem(navigationItem("nav-exp-01", "Subnav 1 link 2", "#item-01"))
                                        .addItem(navigationItem("nav-exp-02", "Subnav 1 link 3", "#item-02")))
                                .addGroup(expandableNavigationGroup("nav-exp-1", "Expandable group 2")
                                        .addItem(navigationItem("nav-exp-10", "Custom onClick link", "#item-10")
                                                .onClick((event, ni) -> console.log("Clicked on item " + ni.id)))
                                        .addItem(navigationItem("nav-exp-11", "Subnav 2 link 1", "#item-11"))
                                        .addItem(navigationItem("nav-exp-12", "Subnav 2 link 2", "#item-12"))
                                        .addItem(navigationItem("nav-exp-13", "Subnav 2 link 3", "#item-13"))))
                        .element()
                // @code-end:nav-exp
        ));

        addSnippet(new Snippet("nav-exp3", "Expandable third level",
                code("nav-exp3"), () ->
                // @code-start:nav-exp3
                div().css("ws-react-c-navigation")
                        .add(navigation(expandable)
                                .addGroup(expandableNavigationGroup("nav-exp3-0", "Expandable section title 1")
                                        .addItem(navigationItem("nav-exp3-00", "With 3rd 1 link 1", "#item-00"))
                                        .addItem(navigationItem("nav-exp3-01", "With 3rd 1 link 2", "#item-01"))
                                        .addItem(navigationItem("nav-exp3-02", "With 3rd 1 link 3", "#item-02")))
                                .addGroup(expandableNavigationGroup("nav-exp3-1", "Expandable section title 2")
                                        .addItem(navigationItem("nav-exp3-10", "With 3rd 2 link 1", "#item-10"))
                                        .addGroup(expandableNavigationGroup("nav-exp3-2", "Expandable third level")
                                                .addItem(navigationItem("nav-exp3-20", "Third level link 1", "#item-20"))
                                                .addItem(navigationItem("nav-exp3-21", "Third level link 2", "#item-21")))
                                        .addItem(navigationItem("nav-exp3-11", "With 3rd 2 link 2", "#item-11"))))
                        .element()
                // @code-end:nav-exp3
        ));

        addSnippet(new Snippet("nav-mixed", "Mixed",
                code("nav-mixed"), () ->
                // @code-start:nav-mixed
                div().css("ws-react-c-navigation")
                        .add(navigation(expandable)
                                .addItem(navigationItem("nav-mixed-0", "Link 1 (not expandable)", "#item-0"))
                                .addGroup(expandableNavigationGroup("nav-mixed-0", "Expandable section title 1")
                                        .addItem(navigationItem("nav-mixed-00", "Mixed link 1", "#item-00"))
                                        .addDivider()
                                        .addItem(navigationItem("nav-mixed-01", "Mixed link 2", "#item-01"))
                                        .addItem(navigationItem("nav-mixed-02", "Mixed link 3", "#item-02")))
                                .addGroup(expandableNavigationGroup("nav-mixed-1", "Expandable section title 2")
                                        .addItem(navigationItem("nav-mixed-10", "Mixed 2 link 1", "#item-10"))
                                        .addItem(navigationItem("nav-mixed-11", "Mixed 2 link 2", "#item-11"))
                                        .addItem(navigationItem("nav-mixed-12", "Mixed 2 link 3", "#item-12"))))
                        .element()
                // @code-end:nav-mixed
        ));

        addSnippet(new Snippet("nav-horizontal", "Horizontal",
                code("nav-horizontal"), () ->
                // @code-start:nav-horizontal
                div().css("ws-react-c-navigation")
                        .add(navigation(secondary)
                                .addItems(range(1, 11).boxed().collect(toList()), index ->
                                        navigationItem("nav-horizontal-" + index, "Horizontal subnav item " + index)))
                        .element()
                // @code-end:nav-horizontal
        ));

        addSnippet(new Snippet("nav-flyout", "Flyout",
                code("nav-flyout"), () ->
                // @code-start:nav-flyout
                div()
                        .add(nyi())
                        .element()
                // @code-end:nav-flyout
        ));

        addSnippet(new Snippet("nav-drilldown", "Drilldown",
                code("nav-drilldown"), () ->
                // @code-start:nav-drilldown
                div()
                        .add(nyi())
                        .element()
                // @code-end:nav-drilldown
        ));

        addSnippet(new Snippet("nav-link-text", "Link text",
                code("nav-link-text"), () ->
                // @code-start:nav-link-text
                div().css("ws-react-c-navigation")
                        .add(navigation(expandable)
                                .addItem(navigationItem("nav-link-text-0").href("#item-0")
                                        .addLinkText(navigationLinkText()
                                                .add("Link 1 ")
                                                .add(arrowRight)))
                                .addGroup(expandableNavigationGroup("nav-link-text-0")
                                        .addLinkText(navigationLinkText()
                                                .add("Link 2 ")
                                                .add(small("(small text)")))
                                        .addItem(navigationItem("nav-link-text-00").href("#item-00")
                                                .addLinkText(navigationLinkText()
                                                        .add(user)
                                                        .add(" Subnav link 1")))
                                        .addItem(navigationItem("nav-link-text-01").href("#item-01")
                                                .addLinkText(navigationLinkText()
                                                        .add(user)
                                                        .add(" Subnav link 2"))))
                                .addGroup(expandableNavigationGroup("nav-link-text-1")
                                        .addLinkText(navigationLinkText()
                                                .add("Link 3 ")
                                                .add(strong("(strong text)")))
                                        .addItem(navigationItem("nav-link-text-10", "Subnav link 1", "#item-10"))
                                        .addItem(navigationItem("nav-link-text-11", "Subnav link 2", "#item-11"))))
                        .element()
                // @code-end:nav-mixed
        ));

        startApiDocs(Navigation.class);
        addApiDoc(ExpandableNavigationGroup.class, subcomponent);
        addApiDoc(Navigation.class, component);
        addApiDoc(NavigationGroup.class, subcomponent);
        addApiDoc(NavigationItem.class, subcomponent);
        addApiDoc(NavigationLinkText.class, subcomponent);
        addApiDoc(NavigationType.class, other);
    }
}
