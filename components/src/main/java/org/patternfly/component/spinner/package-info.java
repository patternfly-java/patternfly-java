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
 * Provides a spinner component to indicate that an action is in progress.
 *
 * <p>The spinner is an SVG-based loading indicator that can be used standalone or inline within text content.
 * It supports predefined sizes ({@code sm}, {@code md}, {@code lg}, {@code xl}), custom diameters, and an inline
 * variant that adjusts to the surrounding text size.
 *
 * <h2>Usage</h2>
 *
 * <p>Create a basic spinner or configure it with a specific size:
 *
 * {@snippet :
 * import static org.patternfly.component.spinner.Spinner.spinner;
 * import static org.patternfly.style.Size.lg;
 * import static org.patternfly.style.Size.sm;
 *
 * // Basic spinner
 * Spinner basic = spinner();
 *
 * // Spinner with predefined size
 * Spinner small = spinner(sm);
 * Spinner large = spinner(lg);
 *
 * // Spinner with custom diameter
 * Spinner custom = spinner().diameter("80px");
 * }
 *
 * <p>Use an inline spinner within text content:
 *
 * {@snippet :
 * import static org.jboss.elemento.Elements.h;
 * import static org.jboss.elemento.Elements.p;
 * import static org.patternfly.component.spinner.Spinner.spinner;
 *
 * h(1).add("Loading ")
 *         .add(spinner("Loading data").inline());
 *
 * p().add("Please wait ")
 *         .add(spinner("Processing").inline())
 *         .add(" while we process your request.");
 * }
 *
 * @see org.patternfly.component.spinner.Spinner
 * @see <a href="https://www.patternfly.org/components/spinner">PatternFly Spinner</a>
 */
package org.patternfly.component.spinner;