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
    void previous() {
        SliderSteps steps = sliderSteps(
                sliderStep(2),
                sliderStep(23),
                sliderStep(42));

        assertEquals(2, steps.previous(1));
        assertEquals(2, steps.previous(2));
        assertEquals(2, steps.previous(3));

        assertEquals(2, steps.previous(22));
        assertEquals(2, steps.previous(23));
        assertEquals(23, steps.previous(24));

        assertEquals(23, steps.previous(41));
        assertEquals(23, steps.previous(42));
        assertEquals(42, steps.previous(43));
    }

    @Test
    void next() {
        SliderSteps steps = sliderSteps(
                sliderStep(2),
                sliderStep(23),
                sliderStep(42));

        assertEquals(2, steps.next(1));
        assertEquals(23, steps.next(2));
        assertEquals(23, steps.next(3));

        assertEquals(23, steps.next(22));
        assertEquals(42, steps.next(23));
        assertEquals(42, steps.next(24));

        assertEquals(42, steps.next(41));
        assertEquals(42, steps.next(42));
        assertEquals(42, steps.next(43));
    }

    @Test
    void closest() {
        SliderSteps steps = sliderSteps(
                sliderStep(2),
                sliderStep(23),
                sliderStep(42));

        assertEquals(2, steps.closest(-100));
        assertEquals(2, steps.closest(1));
        assertEquals(2, steps.closest(2));
        assertEquals(2, steps.closest(3));
        assertEquals(2, steps.closest(12));

        assertEquals(23, steps.closest(13));
        assertEquals(23, steps.closest(22));
        assertEquals(23, steps.closest(23));
        assertEquals(23, steps.closest(24));
        assertEquals(23, steps.closest(32));

        assertEquals(42, steps.closest(33));
        assertEquals(42, steps.closest(41));
        assertEquals(42, steps.closest(42));
        assertEquals(42, steps.closest(43));
        assertEquals(42, steps.closest(100));
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