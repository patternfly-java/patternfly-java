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
 * Provides the PatternFly notification badge and notification drawer components.
 * <p>
 * This package contains components for displaying notification indicators and organizing notifications. The
 * {@link org.patternfly.component.notification.NotificationBadge} shows a count of notifications with read, unread, and
 * attention states. The {@link org.patternfly.component.notification.NotificationDrawer} provides a structured list of
 * notification items with severity, timestamps, and action support.
 *
 * <h2>Usage</h2>
 *
 * A notification badge with a count:
 *
 * {@snippet :
 * import static org.patternfly.component.notification.NotificationBadge.notificationBadge;
 *
 * NotificationBadge badge = notificationBadge()
 *         .ariaLabel("10 unread notifications")
 *         .unread()
 *         .count(10);
 * }
 *
 * A notification drawer with items of different severity:
 *
 * {@snippet :
 * import static org.patternfly.component.Severity.danger;
 * import static org.patternfly.component.Severity.info;
 * import static org.patternfly.component.Severity.warning;
 * import static org.patternfly.component.notification.NotificationDrawer.notificationDrawer;
 * import static org.patternfly.component.notification.NotificationDrawerBody.notificationDrawerBody;
 * import static org.patternfly.component.notification.NotificationDrawerHeader.notificationDrawerHeader;
 * import static org.patternfly.component.notification.NotificationDrawerItem.notificationDrawerItem;
 * import static org.patternfly.component.notification.NotificationDrawerItemBody.notificationDrawerItemBody;
 * import static org.patternfly.component.notification.NotificationDrawerList.notificationDrawerList;
 *
 * NotificationDrawer drawer = notificationDrawer()
 *         .addHeader(notificationDrawerHeader()
 *                 .status("2 unread"))
 *         .addBody(notificationDrawerBody()
 *                 .addList(notificationDrawerList()
 *                         .addItem(notificationDrawerItem(info, "Info notification title")
 *                                 .addBody(notificationDrawerItemBody("This is an info notification."))
 *                                 .timestamp("5 minutes ago"))
 *                         .addItem(notificationDrawerItem(danger, "Danger notification title")
 *                                 .addBody(notificationDrawerItemBody("This is a danger notification."))
 *                                 .timestamp("10 minutes ago"))
 *                         .addItem(notificationDrawerItem(warning, "Warning notification title")
 *                                 .addBody(notificationDrawerItemBody("This is a warning notification."))
 *                                 .read()
 *                                 .timestamp("20 minutes ago"))));
 * }
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/notification-badge">https://www.patternfly.org/components/notification-badge</a>
 * @see <a href=
 *      "https://www.patternfly.org/components/notification-drawer">https://www.patternfly.org/components/notification-drawer</a>
 */
package org.patternfly.component.notification;