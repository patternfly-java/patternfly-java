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
 * Overlay management for floating UI elements such as tooltips and popovers.
 *
 * <p>This package provides a centralized controller for positioning, showing, and hiding overlay elements using the
 * native <a href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API">Popover API</a> and
 * <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning">CSS Anchor Positioning</a>.
 * Components delegate all overlay behavior to this package, keeping their own code focused on component-specific
 * concerns like DOM structure, ARIA attributes, and content.
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.overlay.Overlay} - Centralized controller that combines anchor positioning, event
 *         listener registration, entry/exit delay timers, and show/hide lifecycle management</li>
 *     <li>{@link org.patternfly.overlay.TriggerMode} - Defines how an overlay responds to user interaction: hover,
 *         click, or manual control</li>
 *     <li>{@link org.patternfly.overlay.CssPositioning} - Reads CSS custom properties to determine whether to use
 *         native CSS positioning or JavaScript-based positioning</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Create an overlay, configure its trigger, placement, and interaction mode, then bind it to a trigger element:
 *
 * {@snippet :
 * import static org.patternfly.overlay.Overlay.overlay;
 *
 * Overlay overlay = overlay(overlayElement, Placement.top)
 *     .trigger(() -> triggerElement)
 *     .triggerMode(TriggerMode.hover)
 *     .entryDelay(300)
 *     .exitDelay(300);
 * }
 *
 * <h2>Positioning</h2>
 *
 * <p>The overlay supports two positioning strategies. When CSS anchor positioning is enabled via custom properties,
 * the browser handles positioning natively using {@code position-try-fallbacks}. Otherwise, the overlay falls back to
 * JavaScript-based positioning that calculates the best placement relative to the trigger element.
 *
 * <p>To enable CSS positioning, set the corresponding custom property on {@code :root}:
 *
 * <pre>
 * :root {
 *     --pf-v6-c-tooltip--css-positioning: 1;
 *     --pf-v6-c-popover--css-positioning: 1;
 * }
 * </pre>
 *
 * @see org.patternfly.overlay.Overlay
 * @see org.patternfly.overlay.TriggerMode
 * @see org.patternfly.overlay.CssPositioning
 * @see org.patternfly.style.Placement
 */
package org.patternfly.overlay;