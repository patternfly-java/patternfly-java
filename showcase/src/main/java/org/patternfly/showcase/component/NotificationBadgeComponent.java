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
import org.patternfly.component.notification.badge.NotificationBadge;
import org.patternfly.component.notification.badge.NotificationBadgeVariant;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.notification.badge.NotificationBadge.notificationBadge;
import static org.patternfly.icon.IconSets.fas.exclamationCircle;
import static org.patternfly.icon.IconSets.fas.star;
import static org.patternfly.icon.IconSets.fas.sun;
import static org.patternfly.icon.IconSets.patternfly.warningTriangle;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/notification-badge", title = "Notification badge")
public class NotificationBadgeComponent extends SnippetPage {

    public NotificationBadgeComponent() {
        super(components.get("notification-badge"));

        startExamples("Basic notification badges showing read, unread, and attention variants, plus expanded state. The count example shows how to supply a numeric indicator.");

        addSnippet(new Snippet("notification-badge-basic", "Basic", code("notification-badge-basic"), () ->
                // @code-start:notification-badge-basic
                div()
                        .add(notificationBadge().ariaLabel("Notifications")
                                .onClick((e, nb) -> {
                                    console.log("Read notification badge clicked");
                                    nb.expand(!nb.expanded());
                                }))
                        .add(notificationBadge().ariaLabel("Unread notifications")
                                .unread()
                                .onClick((e, nb) -> {
                                    console.log("Unread notification badge clicked");
                                    nb.expand(!nb.expanded());
                                }))
                        .add(notificationBadge().ariaLabel("Attention notifications")
                                .attention()
                                .onClick((e, nb) -> {
                                    console.log("Attention notification badge clicked");
                                    nb.expand(!nb.expanded());
                                }))
                        .element()
                // @code-end:notification-badge-basic
                ));

                addSnippet(new Snippet("notification-badge-with-count", "With count",
                        code("notification-badge-with-count"), () ->
                        // @code-start:notification-badge-with-count
                        div()
                                .add(notificationBadge().ariaLabel("10 read notifications").count(10)
                                        .onClick((e, nb) -> {
                                            console.log("Read notification badge clicked");
                                            nb.expand(!nb.expanded());
                                        }))
                                .add(notificationBadge().ariaLabel("10 unread notifications").unread().count(10)
                                        .onClick((e, nb) -> {
                                            console.log("Unread notification badge clicked");
                                            nb.expand(!nb.expanded());
                                        }))
                                .add(notificationBadge().ariaLabel("10 attention notifications").attention().count(10)
                                        .onClick((e, nb) -> {
                                            console.log("Attention notification badge clicked");
                                            nb.expand(!nb.expanded());
                                        }))
                        .element()
                // @code-end:notification-badge-with-count
        ));

        addSnippet(new Snippet("notification-badge-custom-icons", "Custom icons",
                code("notification-badge-custom-icons"), () ->
                // @code-start:notification-badge-custom-icons
                div()
                        .add(notificationBadge().ariaLabel("Custom read notifications")
                                .icon(star())
                                .onClick((e, nb) -> nb.expand(!nb.expanded())))
                        .add(notificationBadge().ariaLabel("Custom unread notifications")
                                .unread()
                                .icon(sun())
                                .onClick((e, nb) -> {
                                    console.log("Custom read notification badge clicked");
                                    nb.expand(!nb.expanded());
                                }))
                        .add(notificationBadge().ariaLabel("Custom attention notifications")
                                .attention()
                                .attentionIcon(warningTriangle())
                                .onClick((e, nb) -> {
                                    console.log("Custom attention notification badge clicked");
                                    nb.expand(!nb.expanded());
                                }))
                        .add(notificationBadge().ariaLabel("Toggle variants with retained icons")
                                .unread()
                                .icon(star())
                                .attentionIcon(exclamationCircle())
                                .onClick((e, nb) -> {
                                    console.log("Toggle variants with retained icons clicked");
                                    if (nb.expand(!nb.expanded()).expanded()) {
                                        nb.attention();
                                    } else {
                                        nb.unread();
                                    }
                                }))
                        .element()
        // @code-end:notification-badge-custom-icons
        ));

        startApiDocs(NotificationBadge.class);
        addApiDoc(NotificationBadge.class, component);
        addApiDoc(NotificationBadgeVariant.class, other);
    }
}
