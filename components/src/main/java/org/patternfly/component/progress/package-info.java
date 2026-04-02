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
 * Provides the PatternFly progress component.
 * <p>
 * A progress component displays the completion status of an activity or task. It supports different sizes, measure locations
 * (inside, outside, or none), and status variants for success, warning, danger, and info states.
 *
 * <h2>Usage</h2>
 *
 * {@snippet :
 * import static org.patternfly.component.progress.Progress.progress;
 *
 * Progress progress = progress()
 *         .title("Title")
 *         .value(33);
 * }
 *
 * A progress bar with status and measure location:
 *
 * {@snippet :
 * import static org.patternfly.component.progress.MeasureLocation.inside;
 * import static org.patternfly.component.progress.Progress.progress;
 * import static org.patternfly.style.Status.success;
 *
 * Progress progress = progress()
 *         .measureLocation(inside)
 *         .status(success)
 *         .title("Completed")
 *         .value(100);
 * }
 *
 * @see <a href="https://www.patternfly.org/components/progress">https://www.patternfly.org/components/progress</a>
 */
package org.patternfly.component.progress;