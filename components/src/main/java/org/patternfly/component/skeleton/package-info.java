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
 * Provides the PatternFly skeleton component.
 * <p>
 * A skeleton is a placeholder for content that has not yet loaded. It provides a visual indication of where content will
 * appear, improving perceived performance. Skeletons support configurable widths, heights, font sizes, and shapes (circle,
 * square, or default rectangle).
 *
 * <h2>Usage</h2>
 *
 * {@snippet :
 * import static org.patternfly.component.skeleton.Skeleton.skeleton;
 *
 * Skeleton skeleton = skeleton()
 *         .screenReaderText("Loading contents");
 * }
 *
 * Skeletons with custom widths and shapes:
 *
 * {@snippet :
 * import static org.patternfly.component.skeleton.Shape.circle;
 * import static org.patternfly.component.skeleton.Shape.square;
 * import static org.patternfly.component.skeleton.Skeleton.skeleton;
 *
 * Skeleton circleSkeleton = skeleton()
 *         .shape(circle)
 *         .width("30%")
 *         .screenReaderText("Loading circle contents");
 * Skeleton squareSkeleton = skeleton()
 *         .shape(square)
 *         .width("30%")
 *         .screenReaderText("Loading square contents");
 * }
 *
 * @see <a href="https://www.patternfly.org/components/skeleton">https://www.patternfly.org/components/skeleton</a>
 */
package org.patternfly.component.skeleton;