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
import org.patternfly.component.notification.NotificationDrawer;
import org.patternfly.component.notification.NotificationDrawerBody;
import org.patternfly.component.notification.NotificationDrawerHeader;
import org.patternfly.component.notification.NotificationDrawerItem;
import org.patternfly.component.notification.NotificationDrawerItemBody;
import org.patternfly.component.notification.NotificationDrawerList;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.patternfly.component.Severity.custom;
import static org.patternfly.component.Severity.danger;
import static org.patternfly.component.Severity.info;
import static org.patternfly.component.Severity.success;
import static org.patternfly.component.Severity.warning;
import static org.patternfly.component.notification.NotificationDrawer.notificationDrawer;
import static org.patternfly.component.notification.NotificationDrawerBody.notificationDrawerBody;
import static org.patternfly.component.notification.NotificationDrawerHeader.notificationDrawerHeader;
import static org.patternfly.component.notification.NotificationDrawerItem.notificationDrawerItem;
import static org.patternfly.component.notification.NotificationDrawerItemBody.notificationDrawerItemBody;
import static org.patternfly.component.notification.NotificationDrawerList.notificationDrawerList;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.BuildingBlocks.mixedKebab;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/notification-drawer", title = "Notification drawer")
public class NotificationDrawerComponent extends SnippetPage {

    public NotificationDrawerComponent() {
        super(components.get("notification-drawer"));

        startExamples();
        addSnippet(new Snippet("notification-drawer-basic", "Basic", code("notification-drawer-basic"), () ->
                // @code-start:notification-drawer-basic
                notificationDrawer()
                        .addHeader(notificationDrawerHeader()
                                .status("2 unread")
                                .addAction(mixedKebab("notification-drawer-basic")))
                        .addBody(notificationDrawerBody()
                                .addList(notificationDrawerList()
                                        .addItem(notificationDrawerItem(info, "Unread info notification title")
                                                .addBody(notificationDrawerItemBody(
                                                        "This is an info notification description."))
                                                .hoverable()
                                                .timestamp("5 minutes ago"))
                                        .addItem(notificationDrawerItem(danger,
                                                "Unread danger notification title " + LoremIpsum.words(20))
                                                .addBody(notificationDrawerItemBody(LoremIpsum.paragraphs(5)))
                                                .hoverable()
                                                .timestamp("10 minutes ago"))
                                        .addItem(notificationDrawerItem(warning, "Read warning notification title")
                                                .addBody(notificationDrawerItemBody(
                                                        "This is a warning notification description."))
                                                .read()
                                                .hoverable()
                                                .timestamp("20 minutes ago"))
                                        .addItem(notificationDrawerItem(success,
                                                "Success notification:Read success notification title")
                                                .addBody(notificationDrawerItemBody(
                                                        "This is a success notification description."))
                                                .read()
                                                .hoverable()
                                                .timestamp("30 minutes ago"))
                                        .addItem(notificationDrawerItem(custom, "Read (default) notification title")
                                                .addBody(notificationDrawerItemBody(
                                                        "This is a default notification description."))
                                                .read()
                                                .hoverable()
                                                .timestamp("35 minutes ago"))))
                        .element()
                // @code-end:notification-drawer-basic
        ));

        startApiDocs(NotificationDrawer.class);
        addApiDoc(NotificationDrawer.class, component);
        addApiDoc(NotificationDrawerHeader.class, subcomponent);
        addApiDoc(NotificationDrawerBody.class, subcomponent);
        addApiDoc(NotificationDrawerList.class, subcomponent);
        addApiDoc(NotificationDrawerItem.class, subcomponent);
        addApiDoc(NotificationDrawerItemBody.class, subcomponent);
    }
}
