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
 * Provides a switch (toggle) component for binary on/off selections.
 *
 * <p>A switch is used to toggle the state of a setting between two options (on and off). It supports labels,
 * reversed layout, check icons, and a disabled state. The package name uses a trailing underscore because
 * {@code switch} is a reserved Java keyword.
 *
 * <h2>Usage</h2>
 *
 * <p>Create a switch with an ID, name, and initial checked state:
 *
 * {@snippet :
 * import static org.patternfly.component.switch_.Switch.switch_;
 *
 * // Basic switch with a label
 * Switch toggle = switch_("my-switch", "my-switch", true)
 *         .label("Enable notifications");
 *
 * // Reversed layout (label before switch)
 * Switch reversed = switch_("reversed", "reversed", true)
 *         .reversed()
 *         .label("Reversed layout");
 *
 * // Without a label, using a check icon and ARIA label
 * Switch noLabel = switch_("no-label", "no-label", true)
 *         .checkIcon()
 *         .ariaLabel("Toggle feature");
 *
 * // Disabled switch
 * Switch disabled = switch_("disabled", "disabled", true)
 *         .disabled()
 *         .label("Disabled option");
 * }
 *
 * @see org.patternfly.component.switch_.Switch
 * @see <a href="https://www.patternfly.org/components/switch">PatternFly Switch</a>
 */
package org.patternfly.component.switch_;