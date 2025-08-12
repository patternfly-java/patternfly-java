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
package org.patternfly.showcase.component;

import org.jboss.elemento.router.Route;
import org.patternfly.component.button.Button;
import org.patternfly.component.progressstepper.ProgressStep;
import org.patternfly.component.progressstepper.ProgressStepper;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import java.util.function.Consumer;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.popover.Popover.popover;
import static org.patternfly.component.progressstepper.ProgressStep.progressStep;
import static org.patternfly.component.progressstepper.ProgressStepper.progressStepper;
import static org.patternfly.component.progressstepper.ProgressStepVariant.danger;
import static org.patternfly.component.progressstepper.ProgressStepVariant.info;
import static org.patternfly.component.progressstepper.ProgressStepVariant.pending;
import static org.patternfly.component.progressstepper.ProgressStepVariant.success;
import static org.patternfly.component.progressstepper.ProgressStepVariant.warning;
import static org.patternfly.icon.IconSets.fas.checkDouble;
import static org.patternfly.icon.IconSets.fas.clock;
import static org.patternfly.icon.IconSets.patternfly.pending;
import static org.patternfly.popper.Placement.right;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Classes.label;

@Route(value = "/components/progress-stepper", title = "Progress stepper")
public class ProgressStepperComponent extends SnippetPage {

    public ProgressStepperComponent() {
        super(components.get("progress-stepper"));

        startExamples();
        addSnippet(new Snippet("progress-stepper-basic", "Basic",
                code("progress-stepper-basic"), () ->
                // @code-start:progress-stepper-basic
                div()
                        .add(progressStepper()
                                .ariaLabel("Basic progress stepper")
                                .add(progressStep("step-1", "First step")
                                        .ariaLabel("completed step, step with success")
                                        .variant(success))
                                .add(progressStep("step-2", "Second step")
                                        .ariaLabel("step with info")
                                        .variant(info))
                                .add(progressStep("step-3", "Third step")
                                        .ariaLabel("pending step")
                                        .variant(pending))
                                .first().next())
                        .element()
                // @code-end:progress-stepper-basic
        ));

        addSnippet(new Snippet("progress-stepper-descriptions", "With step descriptions",
                code("progress-stepper-descriptions"), () ->
                // @code-start:progress-stepper-descriptions
                div()
                        .add(progressStepper()
                                .ariaLabel("Basic progress stepper with description")
                                .add(progressStep("desc-step-1", "First step")
                                        .ariaLabel("completed step, step with success")
                                        .variant(success)
                                        .description("This is the first thing to happen"))
                                .add(progressStep("desc-step-2", "Second step")
                                        .ariaLabel("step with info")
                                        .variant(info)
                                        .description("This is the second thing to happen"))
                                .add(progressStep("desc-step-3", "Third step")
                                        .ariaLabel("pending step")
                                        .variant(pending)
                                        .description("This is the last thing to happen"))
                                .first().next())
                        .element()
        // @code-end:progress-stepper-descriptions
        ));

        addSnippet(new Snippet("progress-stepper-alignment", "With alignment",
                code("progress-stepper-alignment"), () -> {
                    // @code-start:progress-stepper-alignment
                    ProgressStepper stepper = progressStepper()
                            .ariaLabel("Progress stepper with alignment")
                            .add(progressStep("align-step-1", "First step")
                                    .variant(success)
                                    .ariaLabel("completed step, step with success")
                                    .description("This is the first thing to happen"))
                            .add(progressStep("align-step-2", "Second step")
                                    .variant(info)
                                    .ariaLabel("step with info")
                                    .description("This is the second thing to happen"))
                            .add(progressStep("align-step-3", "Third step")
                                    .variant(pending)
                                    .ariaLabel("pending step")
                                    .description("This is the last thing to happen"))
                            .first().next();

                    return div()
                            .add(div().css("pf-u-mb-md")
                                    .add(checkbox("vertical-checkbox", "vertical",
                                            "Vertical alignment")
                                            .aria(label, "Toggle vertical alignment")
                                            .onChange((e, c, value) -> stepper
                                                    .vertical(value)))
                                    .add(checkbox("center-checkbox", "center",
                                            "Center alignment").css("pf-u-ml-md")
                                            .aria(label, "Toggle center alignment")
                                            .onChange((e, c, value) -> stepper
                                                    .center(value))))
                            .add(br())
                            .add(stepper)
                            .element();
                    // @code-end:progress-stepper-alignment
                }));

        addSnippet(new Snippet("progress-stepper-compact", "Compact",
                code("progress-stepper-compact"), () -> {
                    // @code-start:progress-stepper-compact
                    ProgressStepper stepper = progressStepper()
                            .ariaLabel("Compact progress stepper")
                            .compact(true)
                            .add(progressStep("compact-step-1", "First step")
                                    .ariaLabel("completed step, step with success")
                                    .variant(success))
                            .add(progressStep("compact-step-2", "Second step")
                                    .ariaLabel("step with info")
                                    .variant(info))
                            .add(progressStep("compact-step-3", "Third step")
                                    .ariaLabel("pending step")
                                    .variant(pending))
                            .first().next();
                    return div()
                            .add(div().css("pf-u-mb-md")
                                    .add(checkbox("vertical-compact-checkbox", "vertical",
                                            "Vertical alignment")
                                            .aria(label, "Toggle vertical alignment")
                                            .onChange((e, c, value) -> stepper
                                                    .vertical(value)))
                                    .add(checkbox("center-compact-checkbox", "center",
                                            "Center alignment").css("pf-u-ml-md")
                                            .aria(label, "Toggle center alignment")
                                            .onChange((e, c, value) -> stepper
                                                    .center(value))))
                            .add(br())
                            .add(stepper)
                            .element();
                    // @code-end:progress-stepper-compact
                }));

        addSnippet(new Snippet("progress-stepper-custom-icons", "With custom icons",
                code("progress-stepper-custom-icons"), () ->
                // @code-start:progress-stepper-custom-icons
                div()
                        .add(progressStepper()
                                .ariaLabel("Progress stepper with custom icons")
                                .add(progressStep("custom-step-1", "Successful completion")
                                        .ariaLabel("completed step, step with success")
                                        .variant(success)
                                        .icon(checkDouble()))
                                .add(progressStep("custom-step-2", "In process")
                                        .ariaLabel("in progress")
                                        .variant(info)
                                        .icon(clock()))
                                .add(progressStep("custom-step-3", "Pending")
                                        .ariaLabel("pending step")
                                        .variant(pending)
                                        .icon(pending()))
                                .first().next())
                        .element()
        // @code-end:progress-stepper-custom-icons
        ));

        addSnippet(new Snippet("progress-stepper-issue", "With an issue",
                code("progress-stepper-issue"), () ->
                // @code-start:progress-stepper-issue
                div()
                        .add(progressStepper()
                                .ariaLabel("Progress stepper with an issue")
                                .add(progressStep("issue-step-1", "First step")
                                        .ariaLabel("completed step, step with success")
                                        .variant(success))
                                .add(progressStep("issue-step-2", "Second step")
                                        .ariaLabel("completed step, step with success")
                                        .variant(success))
                                .add(progressStep("issue-step-3", "Third step")
                                        .ariaLabel("completed step, step with warning")
                                        .variant(warning))
                                .add(progressStep("issue-step-4", "Fourth step")
                                        .ariaLabel("step with info")
                                        .variant(info))
                                .add(progressStep("issue-step-5", "Fifth step")
                                        .ariaLabel("pending step")
                                        .variant(pending))
                                .last().previous())
                        .element()
        // @code-end:progress-stepper-issue
        ));

        addSnippet(new Snippet("progress-stepper-failure", "With a failure",
                code("progress-stepper-failure"), () ->
                // @code-start:progress-stepper-failure
                div()
                        .add(progressStepper()
                                .ariaLabel("Progress stepper with a failure")
                                .add(progressStep("failure-step-1", "First step")
                                        .ariaLabel("completed step, step with success")
                                        .variant(success))
                                .add(progressStep("failure-step-2", "Second step")
                                        .ariaLabel("completed step, step with success")
                                        .variant(success))
                                .add(progressStep("failure-step-3", "Third step")
                                        .ariaLabel("completed step, step with success")
                                        .variant(success))
                                .add(progressStep("failure-step-4", "Fourth step")
                                        .ariaLabel("step with danger")
                                        .variant(danger))
                                .add(progressStep("failure-step-5", "Fifth step")
                                        .ariaLabel("step with pending")
                                        .variant(pending))
                                .last().previous())
                        .element()
        // @code-end:progress-stepper-failure
        ));

        addSnippet(new Snippet("progress-stepper-navigation", "With navigation",
                code("progress-stepper-navigation"), () -> {
                    // @code-start:progress-stepper-navigation
                    ProgressStepper stepper = progressStepper()
                            .ariaLabel("Progress stepper with navigation")
                            .add(progressStep("nav-step-1", "First step")
                                    .ariaLabel("pending step")
                                    .variant(pending)
                                    .description("Description for the first step"))
                            .add(progressStep("nav-step-2", "Second step")
                                    .ariaLabel("pending step")
                                    .variant(pending)
                                    .description("Description for the second step"))
                            .add(progressStep("nav-step-3", "Third step")
                                    .ariaLabel("pending step")
                                    .variant(pending)
                                    .description("Description for the third step"))
                            .add(progressStep("nav-step-4", "Fourth step")
                                    .ariaLabel("pending step")
                                    .variant(pending)
                                    .description("Description for the fourth step"));

                    // Navigation buttons
                    Button prevButton = button("Previous").primary().disabled(true);
                    Button nextButton = button("Next").primary();

                    Consumer<ProgressStep> currentStepActionCommon = currentStep -> {
                        currentStep.variant(info);
                        currentStep.ariaLabel("current step");
                    };

                    prevButton.onClick((e, c) -> stepper.previous((maybeNewCurrentStep, index) -> {
                        if (index == -1) {
                            prevButton.disabled(true);
                        } else if (index == stepper.size() - 1) {
                            nextButton.disabled(false);
                        }
                        maybeNewCurrentStep.ifPresent(currentStepActionCommon);
                    }, prevCurrentStep -> {
                        prevCurrentStep.ariaLabel("pending step");
                        prevCurrentStep.variant(pending);
                    }));

                    nextButton.onClick((e, c) -> stepper.next((maybeNewCurrentStep, index) -> {
                        if (index == stepper.size()) {
                            nextButton.disabled(true);
                        } else if (index == 0) {
                            prevButton.disabled(false);
                        }
                        maybeNewCurrentStep.ifPresent(currentStepActionCommon);
                    }, prevCurrentStep -> {
                        prevCurrentStep.ariaLabel("completed step, step with success");
                        prevCurrentStep.variant(success);
                    }));

                    return div()
                            .add(stepper)
                            .add(br())
                            .add(div().css("pf-u-mt-md")
                                    .add(prevButton)
                                    .add(" ")
                                    .add(nextButton))
                            .element();
                    // @code-end:progress-stepper-navigation
                }));

        addSnippet(new Snippet("progress-stepper-with-popover", "With popover",
                code("progress-stepper-with-popover"), () -> {
                    // @code-start:progress-stepper-with-popover
                    String popoverBodyContent = "Additional info or help text content.";

                    return div()
                            .add(progressStepper()
                                    .add(progressStep("popover-step-1", "First step")
                                            .ariaLabel("completed step, step with success")
                                            .variant(success)
                                            .description("This is the first step")
                                            .popover(
                                                    popover().placement(
                                                            right)
                                                            .addHeader("First step popover")
                                                            .addBody(popoverBodyContent)
                                                            .ariaLabel("First step help")))
                                    .add(progressStep("popover-step-2", "Second step")
                                            .ariaLabel("completed step, step with danger")
                                            .variant(danger)
                                            .description("This is the second step")
                                            .popover(popover().placement(right)
                                                    .addHeader("Second step popover")
                                                    .addBody(popoverBodyContent)
                                                    .ariaLabel("Second step help")))
                                    .add(progressStep("popover-step-3", "Third step")
                                            .ariaLabel("step with info")
                                            .variant(info)
                                            .description("This is the third step")
                                            .popover(
                                                    popover().placement(
                                                            right)
                                                            .addHeader("Third step popover")
                                                            .addBody(popoverBodyContent)
                                                            .ariaLabel("Third step help")))
                                    .add(progressStep("popover-step-4", "Fourth step")
                                            .ariaLabel("step with pending")
                                            .variant(pending)
                                            .description("This is the fourth step"))
                                    .first().next().next())
                            .element();
                    // @code-end:progress-stepper-with-popover
                }));
        startApiDocs(ProgressStepper.class);
        addApiDoc(ProgressStepper.class, component);
        addApiDoc(ProgressStep.class, subcomponent);
    }
}
