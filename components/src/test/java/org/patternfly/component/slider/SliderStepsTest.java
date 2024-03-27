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
package org.patternfly.component.slider;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.patternfly.component.slider.SliderStep.sliderStep;
import static org.patternfly.component.slider.SliderSteps.sliderSteps;

class SliderStepsTest {

    @Test
    void previousValue() {
        SliderSteps steps = sliderSteps(
                sliderStep(2),
                sliderStep(23),
                sliderStep(42));

        assertEquals(2, steps.previousValue(1));
        assertEquals(2, steps.previousValue(2));
        assertEquals(2, steps.previousValue(3));

        assertEquals(2, steps.previousValue(22));
        assertEquals(2, steps.previousValue(23));
        assertEquals(23, steps.previousValue(24));

        assertEquals(23, steps.previousValue(41));
        assertEquals(23, steps.previousValue(42));
        assertEquals(42, steps.previousValue(43));
    }

    @Test
    void nextValue() {
        SliderSteps steps = sliderSteps(
                sliderStep(2),
                sliderStep(23),
                sliderStep(42));

        assertEquals(2, steps.nextValue(1));
        assertEquals(23, steps.nextValue(2));
        assertEquals(23, steps.nextValue(3));

        assertEquals(23, steps.nextValue(22));
        assertEquals(42, steps.nextValue(23));
        assertEquals(42, steps.nextValue(24));

        assertEquals(42, steps.nextValue(41));
        assertEquals(42, steps.nextValue(42));
        assertEquals(42, steps.nextValue(43));
    }

    @Test
    void closestValue() {
        SliderSteps steps = sliderSteps(
                sliderStep(2),
                sliderStep(23),
                sliderStep(42));

        assertEquals(2, steps.closestValue(-100));
        assertEquals(2, steps.closestValue(1));
        assertEquals(2, steps.closestValue(2));
        assertEquals(2, steps.closestValue(3));
        assertEquals(2, steps.closestValue(12));

        assertEquals(23, steps.closestValue(13));
        assertEquals(23, steps.closestValue(22));
        assertEquals(23, steps.closestValue(23));
        assertEquals(23, steps.closestValue(24));
        assertEquals(23, steps.closestValue(32));

        assertEquals(42, steps.closestValue(33));
        assertEquals(42, steps.closestValue(41));
        assertEquals(42, steps.closestValue(42));
        assertEquals(42, steps.closestValue(43));
        assertEquals(42, steps.closestValue(100));
    }

    @Test
    void percentage() {
        SliderStep step_0 = sliderStep(0);
        SliderStep step_1 = sliderStep(25);
        SliderStep step_2 = sliderStep(50);
        SliderStep step_3 = sliderStep(75);
        SliderStep step_4 = sliderStep(100);

        assertEquals(0.0, step_0.percentage());
        assertEquals(25.0, step_1.percentage());
        assertEquals(50.0, step_2.percentage());
        assertEquals(75.0, step_3.percentage());
        assertEquals(100.0, step_4.percentage());
    }

    @Test
    void percentageFirstLast() {
        SliderStep step_0 = sliderStep(20);
        SliderStep step_1 = sliderStep(45);
        SliderStep step_2 = sliderStep(70);
        SliderStep step_3 = sliderStep(95);
        SliderStep step_4 = sliderStep(120);
        SliderSteps steps = sliderSteps(step_0, step_1, step_2, step_3, step_4);

        assertEquals(0.0, step_0.percentage());
        assertEquals(25.0, step_1.percentage());
        assertEquals(50.0, step_2.percentage());
        assertEquals(75.0, step_3.percentage());
        assertEquals(100.0, step_4.percentage());
    }
}