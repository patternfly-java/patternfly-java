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
 * Provides a truncate component for shortening long text with an ellipsis.
 *
 * <p>The truncate component shortens text that overflows its container, showing an ellipsis at the end,
 * middle, or start of the text. A tooltip with the full text is shown on hover.
 *
 * <h2>Key Classes</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.truncate.Truncate} - Main truncate component</li>
 *     <li>{@link org.patternfly.component.truncate.TruncatePosition} - Position of the ellipsis (end, middle, start)</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Truncate text at different positions:
 *
 * {@snippet :
 * import static org.patternfly.component.truncate.Truncate.truncate;
 * import static org.patternfly.component.truncate.TruncatePosition.middle;
 * import static org.patternfly.component.truncate.TruncatePosition.start;
 *
 * // Default truncation (at the end)
 * Truncate endTruncate = truncate("This is a very long text that will be truncated at the end");
 *
 * // Truncation in the middle (useful for file names)
 * Truncate middleTruncate = truncate("redhat_logo_black_and_white_reversed_simple.zip", middle);
 *
 * // Truncation at the start
 * Truncate startTruncate = truncate("This is a very long text that will be truncated at the start", start);
 * }
 *
 * @see org.patternfly.component.truncate.Truncate
 * @see org.patternfly.component.truncate.TruncatePosition
 * @see <a href="https://www.patternfly.org/components/truncate">PatternFly Truncate</a>
 */
package org.patternfly.component.truncate;