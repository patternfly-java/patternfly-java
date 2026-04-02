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
 * Provides the PatternFly number input component.
 * <p>
 * A number input provides a numeric input field with increment and decrement buttons. It supports minimum and maximum values,
 * custom step sizes, unit labels, validation status, and configurable input widths.
 *
 * <h2>Usage</h2>
 *
 * {@snippet :
 * import static org.patternfly.component.numberinput.NumberInput.numberInput;
 *
 * NumberInput input = numberInput(90)
 *         .unit("%");
 * }
 *
 * A number input with minimum and maximum thresholds:
 *
 * {@snippet :
 * import static org.patternfly.component.numberinput.NumberInput.numberInput;
 *
 * NumberInput input = numberInput(0)
 *         .min(0)
 *         .max(10)
 *         .unit("%");
 * }
 *
 * @see <a href="https://www.patternfly.org/components/number-input">https://www.patternfly.org/components/number-input</a>
 */
package org.patternfly.component.numberinput;