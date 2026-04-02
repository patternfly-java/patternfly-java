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
 * Provides the PatternFly drawer component and its subcomponents for displaying a collapsible panel alongside content.
 * <p>
 * A drawer is a sliding panel that enters from the start, end, or bottom of the viewport. It can be used for task-based
 * information, such as detail panels, help panels, or notification centers. The drawer supports overlay and inline modes,
 * resizable panels, and configurable positions.
 *
 * <h2>Usage</h2>
 *
 * A basic drawer with a toggle button:
 *
 * {@snippet :
 * import static org.patternfly.component.button.Button.button;
 * import static org.patternfly.component.drawer.Drawer.drawer;
 * import static org.patternfly.component.drawer.DrawerBody.drawerBody;
 * import static org.patternfly.component.drawer.DrawerCloseButton.drawerCloseButton;
 * import static org.patternfly.component.drawer.DrawerContent.drawerContent;
 * import static org.patternfly.component.drawer.DrawerPanel.drawerPanel;
 * import static org.patternfly.component.drawer.DrawerPanelHead.drawerPanelHead;
 *
 * Drawer drawer = drawer();
 * button("Toggle drawer").primary()
 *         .onClick((event, btn) -> drawer.toggle());
 * drawer
 *         .addContent(drawerContent()
 *                 .addBody(drawerBody().text("Main content")))
 *         .addPanel(drawerPanel()
 *                 .addHead(drawerPanelHead()
 *                         .add(span().text("Panel content"))
 *                         .addCloseButton(drawerCloseButton())));
 * }
 *
 * A drawer with the panel positioned at the start:
 *
 * {@snippet :
 * import static org.patternfly.component.drawer.Drawer.drawer;
 * import static org.patternfly.component.drawer.DrawerBody.drawerBody;
 * import static org.patternfly.component.drawer.DrawerContent.drawerContent;
 * import static org.patternfly.component.drawer.DrawerPanel.drawerPanel;
 * import static org.patternfly.component.drawer.Position.start;
 *
 * drawer().position(start)
 *         .addContent(drawerContent()
 *                 .addBody(drawerBody().text("Main content")))
 *         .addPanel(drawerPanel());
 * }
 *
 * @see Drawer
 * @see DrawerBody
 * @see DrawerCloseButton
 * @see DrawerContent
 * @see DrawerPanel
 * @see DrawerPanelHead
 * @see DrawerSection
 * @see DrawerColor
 * @see Position
 * @see <a href="https://www.patternfly.org/components/drawer">PatternFly Drawer</a>
 */
package org.patternfly.component.drawer;