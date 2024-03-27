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

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import static java.util.Collections.addAll;

public class SliderSteps implements Iterable<SliderStep> {

    // ------------------------------------------------------ factory

    public static SliderSteps sliderSteps(SliderStep first, SliderStep... remaining) {
        List<SliderStep> steps = new ArrayList<>();
        steps.add(first);
        if (remaining != null) {
            addAll(steps, remaining);
        }
        return new SliderSteps(steps);
    }

    // ------------------------------------------------------ instance

    private final List<SliderStep> steps;

    private SliderSteps(List<SliderStep> steps) {
        this.steps = steps;
        for (SliderStep step : this.steps) {
            step.assignSteps(this);
        }
    }

    // ------------------------------------------------------ api

    @Override
    @SuppressWarnings("NullableProblems")
    public Iterator<SliderStep> iterator() {
        return steps.iterator();
    }

    double previousValue(double value) {
        if (value < firstValue()) {
            return firstValue();
        } else if (value > lastValue()) {
            return lastValue();
        } else {
            for (int i = 0; i < steps.size(); i++) {
                if (steps.get(i).value >= value) {
                    if (i - 1 >= 0) {
                        return steps.get(i - 1).value;
                    } else {
                        return firstValue();
                    }
                }
            }
            return -1; // must never happen!
        }
    }

    double nextValue(double value) {
        if (value < firstValue()) {
            return firstValue();
        } else if (value > lastValue()) {
            return lastValue();
        } else {
            for (int index = 0; index < steps.size(); index++) {
                if (steps.get(index).value >= value) {
                    if (steps.get(index).value > value) {
                        return steps.get(index).value;
                    } else {
                        if (index + 1 < steps.size()) {
                            return steps.get(index + 1).value;
                        } else {
                            return lastValue();
                        }
                    }
                }
            }
            return -1; // must never happen!
        }
    }

    double closestValue(double value) {
        return closestStep(value).value;
    }

    SliderStep closestStep(double value) {
        if (value <= firstValue()) {
            return steps.get(0);
        } else if (value >= lastValue()) {
            return steps.get(steps.size() - 1);
        } else {
            int index = 0;
            while (index < steps.size()) {
                SliderStep step = steps.get(index);
                if (step.value >= value) {
                    break;
                }
                index++;
            }
            double midPoint = (steps.get(index).value + steps.get(index - 1).value) / 2;
            if (midPoint >= value) {
                return steps.get(index - 1);
            } else {
                return steps.get(index);
            }
        }
    }

    double firstValue() {
        return steps.get(0).value;
    }

    double lastValue() {
        return steps.get(steps.size() - 1).value;
    }
}
