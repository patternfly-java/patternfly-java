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
 * Provides the PatternFly popover component and its subcomponents.
 * <p>
 * A popover is a floating content container that is triggered by a click (or hover) on a trigger element. It can display a
 * header, body, and footer, and supports configurable placement relative to the trigger element. Popovers are typically
 * used to provide more information or contextual actions.
 *
 * <h2>Usage</h2>
 *
 * {@snippet :
 * import org.jboss.elemento.By;
 * import static org.patternfly.component.button.Button.button;
 * import static org.patternfly.component.popover.Popover.popover;
 *
 * button("Toggle popover").primary()
 *         .id("popover-trigger");
 * Popover popover = popover(By.id("popover-trigger"))
 *         .ariaLabel("Basic popover")
 *         .addHeader("Popover header")
 *         .addBody("Popovers are triggered by click rather than hover.")
 *         .addFooter("Popover footer");
 * }
 *
 * A hoverable popover:
 *
 * {@snippet :
 * import org.jboss.elemento.By;
 * import static org.patternfly.component.popover.Popover.popover;
 *
 * Popover popover = popover(By.id("trigger-element"))
 *         .hoverable()
 *         .ariaLabel("Hoverable popover")
 *         .addHeader("Popover header")
 *         .addBody("This popover opens on hover.")
 *         .addFooter("Popover footer");
 * }
 *
 * @see <a href="https://www.patternfly.org/components/popover">https://www.patternfly.org/components/popover</a>
 */
package org.patternfly.component.popover;