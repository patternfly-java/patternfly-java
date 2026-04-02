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
 * Provides a tooltip component for displaying contextual information on hover or focus.
 *
 * <p>A tooltip is a small overlay that appears near a trigger element to provide additional information.
 * Tooltips are referenced by a CSS selector pointing to the trigger element, support configurable placements
 * (top, bottom, left, right), dynamic content updates, and close event handlers.
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.tooltip.Tooltip} - Main tooltip component</li>
 *     <li>{@link org.patternfly.component.tooltip.TriggerAria} - ARIA configuration for trigger elements</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Create a tooltip attached to a trigger element:
 *
 * {@snippet :
 * import static org.jboss.elemento.By;
 * import static org.patternfly.component.button.Button.button;
 * import static org.patternfly.component.tooltip.Tooltip.tooltip;
 *
 * button("Hover me").primary().id("my-button");
 * tooltip(By.id("my-button"), "This is a tooltip");
 * }
 *
 * <p>Create a tooltip with placement and dynamic content:
 *
 * {@snippet :
 * import static org.jboss.elemento.By;
 * import static org.patternfly.component.tooltip.Tooltip.tooltip;
 * import static org.patternfly.style.Placement.bottom;
 *
 * Tooltip tooltip = tooltip(By.id("copy-button"), "Copy to clipboard")
 *         .placement(bottom)
 *         .onClose((e, t) -> t.text("Copy to clipboard"));
 *
 * // Update content dynamically
 * tooltip.text("Successfully copied!");
 * }
 *
 * @see org.patternfly.component.tooltip.Tooltip
 * @see <a href="https://www.patternfly.org/components/tooltip">PatternFly Tooltip</a>
 */
package org.patternfly.component.tooltip;