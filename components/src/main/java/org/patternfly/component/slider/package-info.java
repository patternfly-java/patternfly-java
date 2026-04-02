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
 * Provides the PatternFly slider component and its subcomponents.
 * <p>
 * A slider allows users to set a value within a numeric range by dragging a thumb along a track. Sliders support continuous
 * and discrete modes with configurable ranges, custom step values, tick marks, boundary labels, input fields, and action
 * buttons.
 *
 * <h2>Usage</h2>
 *
 * A discrete slider with custom steps:
 *
 * {@snippet :
 * import static org.patternfly.component.slider.Slider.slider;
 * import static org.patternfly.component.slider.SliderStep.sliderStep;
 * import static org.patternfly.component.slider.SliderSteps.sliderSteps;
 *
 * Slider slider = slider()
 *         .value(3)
 *         .showTicks()
 *         .customSteps(sliderSteps(
 *                 sliderStep(0, "A"),
 *                 sliderStep(1, "B"),
 *                 sliderStep(2, "C"),
 *                 sliderStep(3, "D"),
 *                 sliderStep(4, "E"),
 *                 sliderStep(5, "F")))
 *         .onChange((e, s, v) -> {});
 * }
 *
 * A slider with a numeric range and step size:
 *
 * {@snippet :
 * import static org.patternfly.component.slider.Slider.slider;
 *
 * Slider slider = slider()
 *         .value(50)
 *         .range(0, 200, 50)
 *         .showTicks()
 *         .onChange((e, s, v) -> {});
 * }
 *
 * @see <a href="https://www.patternfly.org/components/slider">https://www.patternfly.org/components/slider</a>
 */
package org.patternfly.component.slider;