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
 * Provides the PatternFly progress stepper component and its subcomponents.
 * <p>
 * A progress stepper displays progress through a sequence of discrete steps. Each step can have a variant indicating its
 * status (success, info, warning, danger, or pending), an optional description, and custom icons. The stepper supports
 * vertical, centered, and compact layout options.
 *
 * <h2>Usage</h2>
 *
 * {@snippet :
 * import static org.patternfly.component.progressstepper.ProgressStep.progressStep;
 * import static org.patternfly.component.progressstepper.ProgressStepVariant.info;
 * import static org.patternfly.component.progressstepper.ProgressStepVariant.pending;
 * import static org.patternfly.component.progressstepper.ProgressStepVariant.success;
 * import static org.patternfly.component.progressstepper.ProgressStepper.progressStepper;
 *
 * ProgressStepper stepper = progressStepper()
 *         .ariaLabel("Basic progress stepper")
 *         .add(progressStep("step-1", "First step")
 *                 .variant(success))
 *         .add(progressStep("step-2", "Second step")
 *                 .variant(info))
 *         .add(progressStep("step-3", "Third step")
 *                 .variant(pending))
 *         .first().next();
 * }
 *
 * A progress stepper with step descriptions:
 *
 * {@snippet :
 * import static org.patternfly.component.progressstepper.ProgressStep.progressStep;
 * import static org.patternfly.component.progressstepper.ProgressStepVariant.info;
 * import static org.patternfly.component.progressstepper.ProgressStepVariant.pending;
 * import static org.patternfly.component.progressstepper.ProgressStepVariant.success;
 * import static org.patternfly.component.progressstepper.ProgressStepper.progressStepper;
 *
 * ProgressStepper stepper = progressStepper()
 *         .ariaLabel("Progress stepper with descriptions")
 *         .add(progressStep("step-1", "First step")
 *                 .variant(success)
 *                 .description("This is the first thing to happen"))
 *         .add(progressStep("step-2", "Second step")
 *                 .variant(info)
 *                 .description("This is the second thing to happen"))
 *         .add(progressStep("step-3", "Third step")
 *                 .variant(pending)
 *                 .description("This is the last thing to happen"))
 *         .first().next();
 * }
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/progress-stepper">https://www.patternfly.org/components/progress-stepper</a>
 */
package org.patternfly.component.progressstepper;