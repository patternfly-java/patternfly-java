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

import java.util.Objects;

public class SliderStep {

    // ------------------------------------------------------ factory

    public static SliderStep sliderStep(int value) {
        return new SliderStep(value, String.valueOf(value), false);
    }

    public static SliderStep sliderStep(int value, String label) {
        return new SliderStep(value, label, false);
    }

    public static SliderStep sliderStep(int value, String label, boolean labelHidden) {
        return new SliderStep(value, label, labelHidden);
    }

    // ------------------------------------------------------ instance

    public final int value;
    public final String label;
    public final boolean labelHidden;
    private SliderSteps steps;

    private SliderStep(int value, String label, boolean labelHidden) {
        this.value = value;
        this.label = label;
        this.labelHidden = labelHidden;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {return true;}
        if (o == null || getClass() != o.getClass()) {return false;}
        SliderStep step = (SliderStep) o;
        return value == step.value;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(value);
    }

    // ------------------------------------------------------ api

    double percentage() {
        int firstValue = steps == null ? 0 : steps.firstValue();
        int lastValue = steps == null ? 100 : steps.lastValue();
        return Percentage.percentage(value, firstValue, lastValue);
    }

    // ------------------------------------------------------ internal

    void assignSteps(SliderSteps steps) {
        this.steps = steps;
    }
}
