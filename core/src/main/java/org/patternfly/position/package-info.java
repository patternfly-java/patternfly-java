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
 * Shared infrastructure for components based on the native popover API and CSS anchor positioning.
 *
 * <p>This package provides helpers that remove duplication between native popover-based components such as
 * {@code NativePopover} and {@code NativeTooltip}. It handles trigger resolution, CSS anchor positioning setup/teardown,
 * and placement CSS class toggling.
 *
 * @see org.patternfly.position.AnchorPositioning
 */
package org.patternfly.position;