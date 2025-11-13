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
import org.patternfly.component.notification.NotificationDrawerList;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.patternfly.component.menu.Dropdown.dropdown;
import static org.patternfly.component.menu.DropdownMenu.dropdownMenu;
import static org.patternfly.component.menu.MenuContent.menuContent;
import static org.patternfly.component.menu.MenuItem.linkMenuItem;
import static org.patternfly.component.menu.MenuItem.menuItem;
import static org.patternfly.component.menu.MenuList.menuList;
import static org.patternfly.component.notification.NotificationDrawer.notificationDrawer;
import static org.patternfly.component.notification.NotificationDrawerBody.notificationDrawerBody;
import static org.patternfly.component.notification.NotificationDrawerHeader.notificationDrawerHeader;
import static org.patternfly.component.notification.NotificationDrawerItem.notificationDrawerItem;
import static org.patternfly.component.notification.NotificationDrawerList.notificationDrawerList;
import static org.patternfly.icon.IconSets.fas.ellipsisV;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
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
                                .addAction(dropdown(ellipsisV(), "kebab dropdown toggle")
                                        .addMenu(dropdownMenu()
                                                .addContent(menuContent()
                                                        .addList(menuList()
                                                                .addItem(menuItem("item-0", "Action"))
                                                                .addItem(linkMenuItem("item-1", "Link", "#item-1"))
                                                                .addItem(menuItem("item-2", "Disabled action")
                                                                        .disabled())
                                                                .addItem(linkMenuItem("item-3", "Disabled link", "#item-3")
                                                                        .disabled())
                                                                .addDivider()
                                                                .addItem(menuItem("item-4", "Separated action"))
                                                                .addItem(linkMenuItem("item-5", "Separated link", "#item-5")))))))
                        .addBody(notificationDrawerBody()
                                .addList(notificationDrawerList()
                                        .addItem(notificationDrawerItem())
                                        .addItem(notificationDrawerItem())
                                        .addItem(notificationDrawerItem())
                                        .addItem(notificationDrawerItem())
                                        .addItem(notificationDrawerItem())))
                        .element()
                // @code-end:notification-drawer-basic
        ));

        startApiDocs(NotificationDrawer.class);
        addApiDoc(NotificationDrawer.class, component);
        addApiDoc(NotificationDrawerHeader.class, subcomponent);
        addApiDoc(NotificationDrawerBody.class, subcomponent);
        addApiDoc(NotificationDrawerList.class, subcomponent);
        addApiDoc(NotificationDrawerItem.class, subcomponent);
    }
}
