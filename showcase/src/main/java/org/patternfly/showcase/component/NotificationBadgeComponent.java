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
import org.patternfly.component.notification.NotificationBadge;
import org.patternfly.core.ObservableValue;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.notification.NotificationBadge.notificationBadge;
import static org.patternfly.core.ObservableValue.ov;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.flex.Gap.sm;
import static org.patternfly.layout.stack.Stack.stack;
import static org.patternfly.layout.stack.StackItem.stackItem;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/notification-badge", title = "Notification badge")
public class NotificationBadgeComponent extends SnippetPage {

    public NotificationBadgeComponent() {
        super(components.get("notification-badge"));

        startExamples(
                "Basic notification badges showing read, unread, and attention variants, plus expanded state. The count example shows how to supply a numeric indicator.");

        addSnippet(new Snippet("notification-badge-basic", "Basic", code("notification-badge-basic"), () ->
                // @code-start:notification-badge-basic
                flex().columnGap(sm)
                        .add(notificationBadge().ariaLabel("Notifications"))
                        .add(notificationBadge().ariaLabel("Unread notifications")
                                .unread())
                        .add(notificationBadge().ariaLabel("Attention notifications")
                                .attention())
                        .element()
                // @code-end:notification-badge-basic
        ));

        addSnippet(new Snippet("notification-badge-with-count", "With count",
                code("notification-badge-with-count"), () ->
                // @code-start:notification-badge-with-count
                flex().columnGap(sm)
                        .add(notificationBadge().ariaLabel("10 read notifications").count(10))
                        .add(notificationBadge().ariaLabel("10 unread notifications").unread().count(10))
                        .add(notificationBadge().ariaLabel("10 attention notifications").attention().count(10))
                        .element()
                // @code-end:notification-badge-with-count
        ));

        addSnippet(new Snippet("notification-badge-with-animation", "With animation",
                code("notification-badge-with-count"), () -> {
            // @code-start:notification-badge-with-count
            ObservableValue<Integer> readValue = ov(10);
            NotificationBadge readBadge = notificationBadge().ariaLabel("10 read notifications").bind(readValue);
            readValue.subscribe((current, __) -> readBadge.ariaLabel(current + " read notifications"));

            ObservableValue<Integer> unreadValue = ov(10);
            NotificationBadge unreadBadge = notificationBadge().ariaLabel("10 unread notifications")
                    .bind(unreadValue)
                    .unread();
            unreadValue.subscribe((current, __) -> unreadBadge.ariaLabel(current + " unread notifications"));

            ObservableValue<Integer> attentionValue = ov(10);
            NotificationBadge attentionBadge = notificationBadge().ariaLabel("10 attention notifications")
                    .bind(attentionValue)
                    .attention();
            attentionValue.subscribe((current, __) -> attentionBadge.ariaLabel(current + " attention notifications"));

            return stack().gutter()
                    .addItem(stackItem()
                            .add(flex().columnGap(sm)
                                    .add(readBadge)
                                    .add(unreadBadge)
                                    .add(attentionBadge)))
                    .addItem(stackItem()
                            .add(button("Add notification").primary()
                                    .onClick((event, button) -> {
                                        readValue.set(readValue.get() + 1);
                                        readBadge.triggerNotification();
                                        unreadValue.set(unreadValue.get() + 1);
                                        unreadBadge.triggerNotification();
                                        attentionValue.set(attentionValue.get() + 1);
                                        attentionBadge.triggerNotification();
                                    })))
                    .element();
            // @code-end:notification-badge-with-count
        }));

        startApiDocs(NotificationBadge.class);
        addApiDoc(NotificationBadge.class, component);
    }
}
