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
 * Provides label and label group components for displaying compact, categorized metadata.
 *
 * <p>This package contains the {@link org.patternfly.component.label.Label} and
 * {@link org.patternfly.component.label.LabelGroup} components for displaying tags, categories, or status
 * indicators. Labels support multiple colors, filled and outline variants, icons, close buttons, clickable
 * behavior, editable text, and overflow truncation. Label groups organize multiple labels together with
 * optional overflow handling.
 *
 * <h2>Components</h2>
 *
 * <ul>
 *     <li>{@link org.patternfly.component.label.Label} - Individual label with color, variant, icon, and close support</li>
 *     <li>{@link org.patternfly.component.label.LabelGroup} - Groups multiple labels with optional overflow</li>
 *     <li>{@link org.patternfly.component.label.LabelEditCompleteHandler} - Handler for label edit completion</li>
 *     <li>{@link org.patternfly.component.label.LabelEditCancelHandler} - Handler for label edit cancellation</li>
 * </ul>
 *
 * <h2>Usage</h2>
 *
 * <p>Labels with different colors and variants:
 *
 * {@snippet :
 * import static org.patternfly.component.label.Label.label;
 * import static org.patternfly.component.label.LabelGroup.labelGroup;
 * import static org.patternfly.icon.IconSets.fas.infoCircle;
 * import static org.patternfly.style.Color.blue;
 * import static org.patternfly.style.Color.green;
 * import static org.patternfly.style.Color.red;
 *
 * // Filled labels with different colors
 * Label blueLabel = label("Blue", blue).filled();
 * Label greenLabel = label("Green", green).filled().icon(infoCircle());
 * Label removable = label("Removable", red).filled().closable();
 *
 * // Outline labels
 * Label outlineLabel = label("Outline", blue).outline();
 *
 * // Compact and clickable labels
 * Label compact = label("Compact").compact().filled();
 * Label clickable = label("Clickable", blue).filled()
 *         .clickable((e, l) -> console.log("Label clicked"));
 *
 * // Label group
 * LabelGroup group = labelGroup()
 *         .addItem(label("Label 1", blue).filled())
 *         .addItem(label("Label 2", green).filled())
 *         .addItem(label("Label 3", red).filled().closable());
 * }
 *
 * @see <a href="https://www.patternfly.org/components/label">PatternFly Label</a>
 * @see <a href="https://www.patternfly.org/components/label-group">PatternFly Label Group</a>
 */
package org.patternfly.component.label;