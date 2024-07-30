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
import org.patternfly.component.alert.Alert;
import org.patternfly.component.alert.AlertActionGroup;
import org.patternfly.component.alert.AlertDescription;
import org.patternfly.component.alert.AlertGroup;
import org.patternfly.component.alert.AlertGroupType;
import org.patternfly.core.Aria;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;

import static elemental2.dom.DomGlobal.clearInterval;
import static elemental2.dom.DomGlobal.setInterval;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.Severity.custom;
import static org.patternfly.component.Severity.danger;
import static org.patternfly.component.Severity.info;
import static org.patternfly.component.Severity.success;
import static org.patternfly.component.Severity.warning;
import static org.patternfly.component.alert.Alert.alert;
import static org.patternfly.component.alert.AlertActionGroup.alertActionGroup;
import static org.patternfly.component.alert.AlertDescription.alertDescription;
import static org.patternfly.component.alert.AlertGroup.alertGroup;
import static org.patternfly.component.alert.AlertGroupType.staticInline;
import static org.patternfly.component.alert.AlertGroupType.toast;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.list.ActionList.actionList;
import static org.patternfly.component.list.ActionListItem.actionListItem;
import static org.patternfly.core.Aria.atomic;
import static org.patternfly.core.Aria.live;
import static org.patternfly.core.Aria.relevant;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.list;
import static org.patternfly.icon.IconSets.fas.box;
import static org.patternfly.icon.IconSets.fas.database;
import static org.patternfly.icon.IconSets.fas.laptop;
import static org.patternfly.icon.IconSets.fas.server;
import static org.patternfly.icon.IconSets.fas.users;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Classes.alertGroup;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.util;

@Route(value = "/components/alert", title = "Alert")
public class AlertComponent extends SnippetPage {

    public AlertComponent() {
        super(components.get("alert"));

        addHeader("alert-examples", "Alert examples",
                "PatternFly supports several alert variants for different scenarios. Each variant has an associated status icon, background, and alert title coded to communicate the severity of an alert.");
        addSnippet("alert-examples", new Snippet("alert-variants", "Alert variants",
                code("alert-variants"), () ->
                // @code-start:alert-variants
                div()
                        .add(alert(custom, "Custom alert title"))
                        .add(br())
                        .add(alert(info, "Info alert title"))
                        .add(br())
                        .add(alert(success, "Success alert title"))
                        .add(br())
                        .add(alert(warning, "Warning alert title"))
                        .add(br())
                        .add(alert(danger, "Danger alert title"))
                        .element()
                // @code-end:alert-variants
        ));

        addSnippet("alert-examples", new Snippet("alert-variations", "Alert variations",
                code("alert-variations"), () ->
                // @code-start:alert-variations
                div()
                        .add(alert(success, "Success alert title")
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addDescription(
                                        "Success alert description. This should tell the user more information about the alert.")
                                .addActionGroup(alertActionGroup()
                                        .addAction("View details", (e, a) -> DomGlobal.alert("Clicked on View details"))
                                        .addAction("Ignore", (e, a) -> DomGlobal.alert("Clicked on Ignore"))))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addDescription(alertDescription()
                                        .add(p()
                                                .add("Success alert description. This should tell the user more information about the alert. ")
                                                .add(a("#").textContent("This is a link"))
                                                .add("."))))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addActionGroup(alertActionGroup()
                                        .addAction(button("View details").inline().link(),
                                                (e, a) -> DomGlobal.alert("Clicked on View details"))
                                        .addAction(button("Ignore").inline().link(),
                                                (e, a) -> DomGlobal.alert("Clicked on Ignore"))))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button")))
                        .add(br())
                        .add(alert(success, "Success alert title"))
                        .element()
                // @code-end:alert-variations
        ));

        addSnippet("alert-examples", new Snippet("alert-timeout", "Alert timeout",
                code("alert-timeout"),
                () -> {
                    // @code-start:alert-timeout
                    HTMLElement alerts = ul().css(component(alertGroup), util("mt-sm"))
                            .aria(live, "polite")
                            .aria(Aria.atomic, false)
                            .attr(role, list)
                            .element();
                    return div()
                            .add(actionList()
                                    .addItem(actionListItem("alert-timeout-0")
                                            .add(button("Add alert").secondary()
                                                    .onClick((event, button) -> alerts.appendChild(li()
                                                            .add(alert(custom, "Default timeout Alert")
                                                                    .timeout()
                                                                    .addDescription("This alert will dismiss after 8 seconds")
                                                                    .addActionGroup(alertActionGroup()
                                                                            .addAction("View details")
                                                                            .addAction("Ignore")))
                                                            .element()))))
                                    .addItem(actionListItem("alert-timeout-1")
                                            .add(button("Remove all alerts").secondary()
                                                    .onClick((event, button) -> removeChildrenFrom(alerts)))))
                            .add(alerts)
                            .element();
                    // @code-end:alert-timeout
                }));

        addSnippet("alert-examples", new Snippet("alert-expandable", "Expandable alerts",
                code("alert-expandable"), () ->
                // @code-start:alert-expandable
                div()
                        .add(alert(success, "Success alert title")
                                .expandable()
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addDescription(
                                        "Success alert description. This should tell the user more information about the alert.")
                                .addActionGroup(alertActionGroup()
                                        .addAction("View details", (e, a) -> DomGlobal.alert("Clicked on View details"))
                                        .addAction("Ignore", (e, a) -> DomGlobal.alert("Clicked on Ignore"))))
                        .add(br())
                        .add(alert(success, "Success alert title").inline()
                                .expandable()
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addDescription(
                                        "Success alert description. This should tell the user more information about the alert.")
                                .addActionGroup(alertActionGroup()
                                        .addAction("View details", (e, a) -> DomGlobal.alert("Clicked on View details"))
                                        .addAction("Ignore", (e, a) -> DomGlobal.alert("Clicked on Ignore"))))
                        .element()
                // @code-end:alert-expandable
        ));

        addSnippet("alert-examples", new Snippet("alert-truncate", "Truncated alerts",
                code("alert-truncate"), () ->
                // @code-start:alert-truncate
                div()
                        .add(alert(info, LoremIpsum.paragraphs(10)).truncate(1))
                        .add(br())
                        .add(alert(warning, LoremIpsum.paragraphs(10)).truncate(2))
                        .add(br())
                        .add(alert(danger, LoremIpsum.paragraphs(10)).truncate(3))
                        .element()
                // @code-end:alert-truncate
        ));

        addSnippet("alert-examples", new Snippet("alert-custom-icons", "Custom icons",
                code("alert-custom-icons"), () ->
                // @code-start:alert-custom-icons
                div()
                        .add(alert(custom, "Default alert title").icon(users()))
                        .add(br())
                        .add(alert(info, "Info alert title").icon(box()))
                        .add(br())
                        .add(alert(success, "Success alert title").icon(database()))
                        .add(br())
                        .add(alert(warning, "Warning alert title").icon(server()))
                        .add(br())
                        .add(alert(danger, "Danger alert title").icon(laptop()))
                        .element()
                // @code-end:alert-custom-icons
        ));

        addSnippet("alert-examples", new Snippet("alert-inline-variants", "Inline alert variants",
                code("alert-inline-types"), () ->
                // @code-start:alert-inline-variants
                div()
                        .add(alert(custom, "Custom inline alert title").inline())
                        .add(br())
                        .add(alert(info, "Info inline alert title").inline())
                        .add(br())
                        .add(alert(success, "Success inline alert title").inline())
                        .add(br())
                        .add(alert(warning, "Warning inline alert title").inline())
                        .add(br())
                        .add(alert(danger, "Danger inline alert title").inline())
                        .element()
                // @code-end:alert-inline-variants
        ));

        addSnippet("alert-examples", new Snippet("alert-inline-variations", "Inline alert variations",
                code("alert-inline-variations"), () ->
                // @code-start:alert-inline-variations
                div()
                        .add(alert(success, "Success alert title")
                                .inline()
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addDescription(
                                        "Success alert description. This should tell the user more information about the alert.")
                                .addActionGroup(alertActionGroup()
                                        .addAction("View details", (e, a) -> DomGlobal.alert("Clicked on View details"))
                                        .addAction("Ignore", (e, a) -> DomGlobal.alert("Clicked on Ignore"))))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .inline()
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addDescription(alertDescription()
                                        .add(p()
                                                .add("Success alert description. This should tell the user more information about the alert. ")
                                                .add(a("#").textContent("This is a link"))
                                                .add("."))))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .inline()
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
                                .addActionGroup(alertActionGroup()
                                        .addAction(button("View details").inline().link(),
                                                (e, a) -> DomGlobal.alert("Clicked on View details"))
                                        .addAction(button("Ignore").inline().link(),
                                                (e, a) -> DomGlobal.alert("Clicked on Ignore"))))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .inline()
                                .closable((e, a) -> DomGlobal.alert("Clicked the close button")))
                        .add(br())
                        .add(alert(success, "Success alert title")
                                .inline())
                        .element()
                // @code-end:alert-inline-variations
        ));

        addSnippet("alert-examples", new Snippet("alert-plain-inline-variants", "Plain inline alert variants",
                code("alert-plain-inline-variants"), () ->
                // @code-start:alert-plain-inline-variants
                div()
                        .add(alert(custom, "Custom inline alert title").inline().plain())
                        .add(br())
                        .add(alert(info, "Info inline alert title").inline().plain())
                        .add(br())
                        .add(alert(success, "Success inline alert title").inline().plain())
                        .add(br())
                        .add(alert(warning, "Warning inline alert title").inline().plain())
                        .add(br())
                        .add(alert(danger, "Danger inline alert title").inline().plain())
                        .element()
                // @code-end:alert-plain-inline-variants
        ));

        addSnippet("alert-examples", new Snippet("alert-plain-inline-variations", "Plain inline alert variations",
                code("alert-plain-inline-variations"), () ->
                // @code-start:alert-plain-inline-variations
                div()
                        .add(alert(success, "Success alert title")
                                .inline().plain()
                                .addDescription(
                                        "Success alert description. This should tell the user more information about the alert."))
                        .element()
                // @code-end:alert-plain-inline-variations
        ));

        addSnippet("alert-examples", new Snippet("alert-static-live-region", "Static live region alerts",
                code("alert-static-live-region"), () ->
                // @code-start:alert-static-live-region
                div()
                        .add(alert(info, "Default live region configuration")
                                .closable()
                                .liveRegion()
                                .addDescription(alertDescription()
                                        .add(p()
                                                .add("This alert uses the recommended ")
                                                .add(Elements.code("liveRegion()"))
                                                .add(" modifier to automatically set ARIA attributes and CSS classes."))))
                        .add(br())
                        .add(alert(info, "Customized live region")
                                .closable()
                                .aria(live, "assertive")
                                .aria(atomic, true)
                                .aria(relevant, "additions text")
                                .addDescription(alertDescription()
                                        .add(p()
                                                .add("You can alternatively omit the ")
                                                .add(Elements.code("liveRegion()"))
                                                .add(" to specify ARIA attributes and CSS manually on the containing element."))))
                        .element()
                // @code-end:alert-static-live-region
        ));

        addHeader("alert-groups", "Alert group examples",
                "An alert group stacks and positions 2 or more alerts in a live region, either in a layer over the main content of a page or inline with the page content. Alert groups should always rank alerts by age, stacking new alerts on top of old ones as they surface.");
        addSnippet(new Snippet("alert-group-static-inline", "Static inline alert group",
                code("alert-group-static-inline"), () ->
                // @code-start:alert-group-static-inline
                div()
                        .add(alertGroup(staticInline)
                                .addItem(alert(success, "Success alert").inline())
                                .addItem(alert(info, "Info alert"))) // inline is added automatically!
                        .element()
                // @code-end:alert-group-static-inline
        ));

        addSnippet("alert-groups", new Snippet("alert-group-toast", "Toast alert group",
                code("alert-group-toast"), () ->
                // @code-start:alert-group-toast
                div()
                        .add(actionList()
                                .addItem(actionListItem("alert-group-toast-0")
                                        .add(button("Add toast success alert").secondary()
                                                .onClick((e, b) -> alertGroup(toast)
                                                        .addItem(alert(success, "Toast success alert")))))
                                .addItem(actionListItem("alert-group-toast-1")
                                        .add(button("Add toast danger alert").secondary()
                                                .onClick((e, b) -> alertGroup(toast)
                                                        .addItem(alert(danger, "Toast danger alert")))))
                                .addItem(actionListItem("alert-group-toast-2")
                                        .add(button("Add toast info alert").secondary()
                                                .onClick((e, b) -> alertGroup(toast)
                                                        .addItem(alert(info, "Toast info alert"))))))
                        .element()
                // @code-end:alert-group-toast
        ));

        addSnippet("alert-groups", new Snippet("alert-group-asynchronous", "Asynchronous alert groups",
                code("alert-group-asynchronous"),
                () -> {
                    // @code-start:alert-group-asynchronous
                    final int[] counter = {0};
                    final double[] intervalHandle = {0};
                    return div()
                            .add(actionList()
                                    .addItem(actionListItem("alert-group-asynchronous-0")
                                            .add(button("Start async alerts").secondary()
                                                    .onClick((e, b) -> intervalHandle[0] = setInterval(__ -> {
                                                        counter[0] = counter[0] + 1;
                                                        alertGroup(toast)
                                                                .addItem(alert(danger, "Async notification " + counter[0]
                                                                        + " was added to the queue."));
                                                    }, 1_000))))
                                    .addItem(actionListItem("alert-group-asynchronous-1")
                                            .add(button("Stop async alerts").secondary()
                                                    .onClick((e, b) -> {
                                                        counter[0] = 0;
                                                        clearInterval(intervalHandle[0]);
                                                    }))))
                            .element();
                    // @code-end:alert-group-asynchronous
                }));

        startApiDocs(Alert.class);
        addApiDoc(Alert.class, component);
        addApiDoc(AlertGroup.class, component);
        addApiDoc(AlertGroupType.class, other);
        addApiDoc(AlertActionGroup.class, subcomponent);
        addApiDoc(AlertDescription.class, subcomponent);
    }
}
