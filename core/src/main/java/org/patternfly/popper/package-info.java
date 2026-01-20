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
 * Java wrapper for Popper.js positioning engine used by overlay components.
 *
 * <p>This package provides a type-safe Java API for <a href="https://popper.js.org/">Popper.js</a>, the positioning
 * library used by PatternFly components with popups, tooltips, dropdowns, and other floating elements. It handles
 * automatic positioning, collision detection, and dynamic updates.
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.popper.Popper} - Main interface for controlling popper instances</li>
 *     <li>{@link org.patternfly.popper.PopperBuilder} - Builder for configuring and creating popper instances</li>
 *     <li>{@link org.patternfly.popper.Placement} - Enum of placement options (top, bottom, left, right, etc.)</li>
 *     <li>{@link org.patternfly.popper.Modifier} - Configuration for Popper.js modifiers</li>
 *     <li>{@link org.patternfly.popper.TriggerAction} - Enum of trigger events (click, hover, focus, etc.)</li>
 *     <li>{@link org.patternfly.popper.Options} - Configuration options for popper behavior</li>
 *     <li>{@link org.patternfly.popper.State} - Current state of the popper including position and styles</li>
 * </ul>
 *
 * <h2>Basic Usage</h2>
 *
 * <p>Create a popper to position a floating element relative to a trigger element:
 *
 * {@snippet :
 * HTMLElement trigger = button().element();
 * HTMLElement popup = div().element();
 *
 * Popper popper = new PopperBuilder("MyComponent", trigger, popup)
 *     .placement(Placement.bottom)
 *     .zIndex(1000)
 *     .registerHandler(Set.of(TriggerAction.click),
 *         e -> popper.show(() -> console.log("Visible")),
 *         e -> popper.hide(() -> console.log("Hidden")))
 *     .build();
 * }
 *
 * <h2>Placement Options</h2>
 *
 * <p>Control where the popper appears relative to the trigger element:
 *
 * {@snippet :
 * // Automatic placement (Popper chooses the best position)
 * popper = builder.placement(Placement.auto).build();
 *
 * // Fixed placement
 * popper = builder.placement(Placement.top).build();
 * popper = builder.placement(Placement.bottomStart).build();
 * popper = builder.placement(Placement.rightEnd).build();
 * }
 *
 * <h2>Trigger Actions</h2>
 *
 * <p>Configure how the popper responds to user interactions:
 *
 * {@snippet :
 * // Show on hover
 * builder.registerHandler(Set.of(TriggerAction.mouseenter), show, hide);
 *
 * // Show on click, hide when clicking outside
 * builder.registerHandler(Set.of(TriggerAction.click), show, hide);
 *
 * // Show on focus (for keyboard navigation)
 * builder.registerHandler(Set.of(TriggerAction.focus), show, hide);
 *
 * // Stay open even when clicking inside (e.g., for menus)
 * builder.registerHandler(Set.of(TriggerAction.stayOpen), show, hide);
 *
 * // Manual control only
 * builder.registerHandler(Set.of(TriggerAction.manual), show, hide);
 * }
 *
 * <h2>Animation and Timing</h2>
 *
 * <p>Configure entrance/exit animations and delays:
 *
 * {@snippet :
 * Popper popper = new PopperBuilder(componentName, trigger, popup)
 *     .animationDuration(300)  // Fade in/out over 300ms
 *     .entryDelay(500)         // Wait 500ms before showing
 *     .exitDelay(200)          // Wait 200ms before hiding
 *     .build();
 * }
 *
 * <h2>Modifiers</h2>
 *
 * <p>Customize Popper.js behavior with modifiers:
 *
 * {@snippet :
 * // Add offset from trigger element
 * Modifier offset = new Modifier();
 * offset.name = "offset";
 * offset.options = new ModifierOptions();
 * offset.options.offset = new int[]{0, 8}; // [skidding, distance]
 *
 * Popper popper = new PopperBuilder(componentName, trigger, popup)
 *     .addModifier(offset)
 *     .build();
 * }
 *
 * <h2>Controlling Visibility</h2>
 *
 * <p>Programmatically show and hide the popper:
 *
 * {@snippet :
 * // Show with callback
 * popper.show(() -> console.log("Popper is now visible"));
 *
 * // Hide with callback
 * popper.hide(() -> console.log("Popper is now hidden"));
 *
 * // Update position (e.g., after content changes)
 * popper.update().then(state -> console.log("Updated to: " + state.placement));
 *
 * // Clean up when done
 * popper.cleanup();
 * }
 *
 * <h2>Lifecycle Management</h2>
 *
 * <p>The {@link org.patternfly.popper.PopperBuilder} provides lifecycle management options:
 *
 * {@snippet :
 * builder
 *     .removePopperOnTriggerDetach()  // Auto-cleanup when trigger is removed from DOM
 *     .stayOpen(event -> {             // Custom logic for keeping popper open
 *         return popup.contains((Node) event.target);
 *     });
 * }
 *
 * @see <a href="https://popper.js.org/">Popper.js Documentation</a>
 * @see org.patternfly.popper.Popper
 * @see org.patternfly.popper.PopperBuilder
 */
package org.patternfly.popper;