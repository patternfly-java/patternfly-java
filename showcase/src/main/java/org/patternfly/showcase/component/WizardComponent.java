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

import java.util.function.BiConsumer;

import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.intl.DateTimeFormat;
import org.jboss.elemento.intl.DateTimeFormatOptions;
import org.jboss.elemento.router.Route;
import org.patternfly.component.Severity;
import org.patternfly.component.emptystate.EmptyState;
import org.patternfly.component.emptystate.EmptyStateBody;
import org.patternfly.component.form.Form;
import org.patternfly.component.form.FormAlert;
import org.patternfly.component.form.TextInput;
import org.patternfly.component.help.HelperText;
import org.patternfly.component.help.HelperTextItem;
import org.patternfly.component.progress.Progress;
import org.patternfly.component.slider.Slider;
import org.patternfly.component.switch_.Switch;
import org.patternfly.component.wizard.Wizard;
import org.patternfly.component.wizard.WizardContext;
import org.patternfly.component.wizard.WizardFooter;
import org.patternfly.component.wizard.WizardHeader;
import org.patternfly.component.wizard.WizardHeaderDescription;
import org.patternfly.component.wizard.WizardHeaderTitle;
import org.patternfly.component.wizard.WizardNav;
import org.patternfly.component.wizard.WizardNavItem;
import org.patternfly.component.wizard.WizardStep;
import org.patternfly.component.wizard.WizardStepChangeHandler;
import org.patternfly.component.wizard.WizardStepEnterHandler;
import org.patternfly.component.wizard.WizardStepLeaveHandler;
import org.patternfly.component.wizard.WizardStepNextHandler;
import org.patternfly.component.wizard.WizardStepNextPromise;
import org.patternfly.component.wizard.WizardStepPreviousHandler;
import org.patternfly.component.wizard.WizardStepPreviousPromise;
import org.patternfly.component.wizard.WizardStepType;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.style.Size;

import elemental2.core.JsDate;
import elemental2.core.JsRegExp;
import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.clearInterval;
import static elemental2.dom.DomGlobal.console;
import static elemental2.dom.DomGlobal.navigator;
import static elemental2.dom.DomGlobal.setInterval;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.isAttached;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.strong;
import static org.jboss.elemento.intl.Format.medium;
import static org.patternfly.component.Severity.danger;
import static org.patternfly.component.ValidationStatus.default_;
import static org.patternfly.component.ValidationStatus.error;
import static org.patternfly.component.ValidationStatus.success;
import static org.patternfly.component.alert.Alert.alert;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.content.Content.content;
import static org.patternfly.component.content.ContentType.p;
import static org.patternfly.component.emptystate.EmptyState.emptyState;
import static org.patternfly.component.emptystate.EmptyStateActions.emptyStateActions;
import static org.patternfly.component.emptystate.EmptyStateBody.emptyStateBody;
import static org.patternfly.component.emptystate.EmptyStateFooter.emptyStateFooter;
import static org.patternfly.component.form.Form.form;
import static org.patternfly.component.form.FormAlert.formAlert;
import static org.patternfly.component.form.FormGroup.formGroup;
import static org.patternfly.component.form.FormGroupControl.formGroupControl;
import static org.patternfly.component.form.FormGroupLabel.formGroupLabel;
import static org.patternfly.component.form.Radio.radio;
import static org.patternfly.component.form.TextInput.textInput;
import static org.patternfly.component.form.TextInputType.number;
import static org.patternfly.component.help.HelperText.helperText;
import static org.patternfly.component.help.HelperTextItem.helperTextItem;
import static org.patternfly.component.modal.Modal.modal;
import static org.patternfly.component.progress.MeasureLocation.outside;
import static org.patternfly.component.progress.Progress.progress;
import static org.patternfly.component.slider.Slider.slider;
import static org.patternfly.component.switch_.Switch.switch_;
import static org.patternfly.component.wizard.Wizard.wizard;
import static org.patternfly.component.wizard.WizardHeader.wizardHeader;
import static org.patternfly.component.wizard.WizardHeaderDescription.wizardHeaderDescription;
import static org.patternfly.component.wizard.WizardHeaderTitle.wizardHeaderTitle;
import static org.patternfly.component.wizard.WizardStep.wizardStep;
import static org.patternfly.component.wizard.WizardStepType.review;
import static org.patternfly.component.wizard.WizardStepType.summary;
import static org.patternfly.icon.IconSets.fas.birthdayCake;
import static org.patternfly.icon.IconSets.fas.cogs;
import static org.patternfly.icon.IconSets.fas.utensils;
import static org.patternfly.layout.bullseye.Bullseye.bullseye;
import static org.patternfly.layout.bullseye.BullseyeItem.bullseyeItem;
import static org.patternfly.layout.flex.AlignItems.center;
import static org.patternfly.layout.flex.Direction.column;
import static org.patternfly.layout.flex.Direction.row;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.flex.FlexItem.flexItem;
import static org.patternfly.layout.flex.FlexShorthand._1;
import static org.patternfly.layout.flex.Gap.md;
import static org.patternfly.layout.flex.Gap.sm;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Size.xs;

@Route(value = "/components/wizard", title = "Wizard")
public class WizardComponent extends SnippetPage {

    public WizardComponent() {
        super(components.get("wizard"));

        startExamples();
        addSnippet(new Snippet("wizard-basic", "Basic",
                code("wizard-basic"), () ->
                // @code-start:wizard-basic
                div()
                        .add(wizard().height(400)
                                .addItem(wizardStep("wizard-basic-step-0", "Step 1")
                                        .add(p().text(LoremIpsum.words(60)))
                                        .add(p().text(LoremIpsum.words(40)))
                                        .add(p().text(LoremIpsum.words(30)))
                                        .add(p().text(LoremIpsum.words(50))))
                                .addItem(wizardStep("wizard-basic-step-1", "Step 2")
                                        .add(p().text("Step 2 content")))
                                .addItem(wizardStep("wizard-basic-step-2", "Review", review)
                                        .add(p().text("Review content"))))
                        .element()
                // @code-end:wizard-basic
        ));

        addSnippet(new Snippet("wizard-basic-disabled", "Basic with disabled steps",
                code("wizard-basic-disabled"), () ->
                // @code-start:wizard-basic-disabled
                div()
                        .add(wizard().height(400)
                                .addItem(wizardStep("wizard-basic-disabled-step-0", "Step 1")
                                        .add(p().text("Step 1 content")))
                                .addItem(wizardStep("wizard-basic-disabled-step-1", "Step 2").disabled()
                                        .add(p().text("Step 2 content")))
                                .addItem(wizardStep("wizard-basic-disabled-step-2", "Step 3")
                                        .add(p().text("Step 3 content")))
                                .addItem(wizardStep("wizard-basic-disabled-step-3", "Step 4").disabled()
                                        .add(p().text("Step 4 content")))
                                .addItem(wizardStep("wizard-basic-disabled-step-4", "Review", review)
                                        .add(p().text("Review content"))))
                        .element()
                // @code-end:wizard-basic-disabled
        ));

        addSnippet(new Snippet("wizard-visit-required", "Incrementally enabled steps",
                code("wizard-visit-required"), () ->
                // @code-start:wizard-visit-required
                div()
                        .add(wizard().visitRequired().height(400)
                                .addItem(wizardStep("wizard-visit-required-step-0", "Step 1")
                                        .add(p().text("Step 1 content")))
                                .addItem(wizardStep("wizard-visit-required-step-1", "Step 2")
                                        .add(p().text("Step 2 content")))
                                .addItem(wizardStep("wizard-visit-required-step-2", "Step 3")
                                        .add(p().text("Step 3 content")))
                                .addItem(wizardStep("wizard-visit-required-step-3", "Step 4")
                                        .add(p().text("Step 4 content")))
                                .addItem(wizardStep("wizard-visit-required-step-4", "Review", review)
                                        .add(p().text("Review content"))))
                        .element()
                // @code-end:wizard-visit-required
        ));

        addSnippet(new Snippet("wizard-progress", "Progress after submission",
                code("wizard-progress"), () -> {
            // @code-start:wizard-progress
            int[] counter = new int[1];
            double[] intervalHandle = new double[1];
            Wizard wizard = wizard().height(400);
            Progress progress = progress().measureLocation(outside);

            return div()
                    .add(wizard
                            .addItem(wizardStep("wizard-progress-step-0", "Step 1")
                                    .add(p().text("Step 1 content")))
                            .addItem(wizardStep("wizard-progress-step-1", "Step 2")
                                    .add(p().text("Step 2 content")))
                            .addItem(wizardStep("wizard-progress-step-2", "Review", review)
                                    .add(p().text("Review content")))
                            .addItem(wizardStep("wizard-progress-step-3", "Progress", WizardStepType.progress)
                                    .add(bullseye().addItem(bullseyeItem()
                                            .add(emptyState().size(lg)
                                                    .text("Validating credentials")
                                                    .icon(cogs())
                                                    .addBody(emptyStateBody().add(progress))
                                                    .addBody(emptyStateBody().text(LoremIpsum.words(20))))))
                                    .onEnter((wzd, step) -> {
                                        counter[0] = 0;
                                        progress.value(0);
                                        intervalHandle[0] = setInterval((__) -> {
                                            counter[0] = counter[0] + 1;
                                            if (counter[0] > 5) {
                                                wzd.next();
                                            }
                                            progress.value(counter[0] * 20);
                                        }, 1000);
                                    })
                                    .onLeave((wzd, step) -> clearInterval(intervalHandle[0])))
                            .addItem(wizardStep("wizard-progress-step-4", "Summary", summary)
                                    .add(bullseye().addItem(bullseyeItem()
                                            .add(emptyState().size(lg)
                                                    .text("You're all set!")
                                                    .status(Severity.success)
                                                    .addBody(emptyStateBody()
                                                            .text("Congratulations. You have successfully completed all steps."))
                                                    .addFooter(emptyStateFooter()
                                                            .addActions(emptyStateActions()
                                                                    .add(button("Start over").primary()
                                                                            .onClick((e, c) -> wizard.select(
                                                                                    "wizard-progress-step-0"))))))))))
                    .element();
            // @code-end:wizard-progress
        }));

        addSnippet(new Snippet("wizard-form-validation", "Form validation",
                code("wizard-form-validation"), () -> {
            // @code-start:wizard-form-validation
            JsRegExp numeric = new JsRegExp("^\\d+$");
            HelperTextItem hti = helperTextItem();
            Wizard wizard = wizard().visitRequired().height(400);
            TextInput ageIn = textInput("wizard-form-validation-age", "Thirty");
            HTMLContainerBuilder<HTMLElement> ageOut = span();
            BiConsumer<TextInput, String> ageHandler = (textInput, value) -> {
                if (numeric.test(value)) {
                    textInput.validated(default_);
                    hti.status(default_).text("Write your age in numbers");
                    wizard.footer().nextButton().disabled(false);
                } else {
                    textInput.validated(error);
                    hti.status(error).text("Age has to be a number");
                    wizard.footer().nextButton().disabled(true);
                }
            };

            return div()
                    .add(wizard
                            .addItem(wizardStep("wizard-form-validation-step-0", "Information")
                                    .add(p().text("Information content")))
                            .addItem(wizardStep("wizard-form-validation-step-1", "Configuration")
                                    .add(form().addGroup(formGroup("wizard-form-validation-age")
                                            .addLabel(formGroupLabel("Age"))
                                            .addControl(formGroupControl()
                                                    .addControl(ageIn.onKeyup((e, ti, value) ->
                                                            ageHandler.accept(ti, value)))
                                                    .addHelperText(helperText().addItem(hti)))))
                                    .onEnter((wzd, step) -> ageHandler.accept(ageIn, ageIn.value()))
                                    .onLeave((wzd, step) -> wzd.context().store("age", ageIn.value())))
                            .addItem(wizardStep("wizard-form-validation-step-2", "Additional")
                                    .add(p().text("Additional content")))
                            .addItem(wizardStep("wizard-form-validation-step-3", "Review", review)
                                    .add(p().text("Review content"))
                                    .add(p().add("Age: ").add(ageOut))
                                    .onEnter((wzd, step) -> ageOut.text(wzd.context().get("age", "n/a")))))
                    .element();
            // @code-end:wizard-form-validation
        }));

        addSnippet(new Snippet("wizard-progressive", "Progressive steps",
                code("wizard-progressive"), () ->
                // @code-start:wizard-progressive
                div()
                        .add(wizard().progressive().height(400)
                                .addItem(wizardStep("wizard-progressive-step-0", "Step 1")
                                        .add(p().text("Step 1 content")))
                                .addItem(wizardStep("wizard-progressive-step-1", "Step 2")
                                        .add(p().text("Step 2 content")))
                                .addItem(wizardStep("wizard-progressive-step-2", "Step 3")
                                        .add(p().text("Step 3 content")))
                                .addItem(wizardStep("wizard-progressive-step-3", "Step 4")
                                        .add(p().text("Step 4 content")))
                                .addItem(wizardStep("wizard-progressive-step-4", "Review", review)
                                        .add(p().text("Review content"))))
                        .element()
                // @code-end:wizard-progressive
        ));

        addSnippet(new Snippet("wizard-modal", "Within modal",
                code("wizard-modal"), () ->
                // @code-start:wizard-modal
                div().add(button("Show modal").primary().onClick((e, c) -> modal().size(Size.md)
                                .add(wizard().height(400)
                                        .addHeader(wizardHeader()
                                                .addTitle(wizardHeaderTitle("Wizard in modal"))
                                                .addDescription(wizardHeaderDescription("Simple wizard description")))
                                        .addItem(wizardStep("wizard-modal-step-0", "Step 1")
                                                .add(p().text("Step 1 content")))
                                        .addItem(wizardStep("wizard-modal-step-1", "Step 2")
                                                .add(p().text("Step 2 content")))
                                        .addItem(wizardStep("wizard-modal-step-4", "Review", review)
                                                .add(p().text("Review content"))))
                                .appendToBody()
                                .open()))
                        .element()
                // @code-end:wizard-modal
        ));

        addSnippet(new Snippet("wizard-step-status", "Step status",
                code("wizard-step-status"), () -> {
            // @code-start:wizard-step-status
            Wizard wizard = wizard();
            return div()
                    .add(wizard.height(400)
                            .addItem(wizardStep("wizard-step-status-step-0", "Step 1")
                                    .add(p().text("Step 1 content")))
                            .addItem(wizardStep("wizard-step-status-step-1", "Status step")
                                    .add(radio("wizard-step-status-radio-error", "wizard-step-status-radio",
                                            "Give step 1 an error status")
                                            .onChange((e, c, value) -> {
                                                if (value) {
                                                    wizard.item("wizard-step-status-step-0").status(error);
                                                }
                                            }))
                                    .add(radio("wizard-step-status-radio-success", "wizard-step-status-radio",
                                            "Give step 1 a success status")
                                            .onChange((e, c, value) -> {
                                                if (value) {
                                                    wizard.item("wizard-step-status-step-0").status(success);
                                                }
                                            }))
                            )
                            .addItem(wizardStep("wizard-step-status-step-4", "Review", review)
                                    .add(p().text("Review content"))))
                    .element();
            // @code-end:wizard-step-status
        }));

        addSnippet(new Snippet("wizard-hap", "Handlers and promises",
                "This wizard demonstrates how to use various handlers and promises to control the wizard flow.",
                code("wizard-hap"), () -> {
            // @code-start:wizard-hap
            // ------------------------------------------------------ (n)ext (h)andler

            String nhId = "wizard-hap-nh";
            TextInput nhInput = textInput(number, nhId).value("2");
            HelperText nhHelper = helperText("Enter an even number");
            FormAlert nhAlert = formAlert().addAlert(alert(danger, "Invalid number")
                    .addDescription("Please enter an even number"));
            Form nhForm = form()
                    .addGroup(formGroup(nhId)
                            .addLabel(formGroupLabel("Number"))
                            .addControl(formGroupControl()
                                    .add(nhInput)
                                    .add(nhHelper)));
            WizardStepNextHandler nh = (wzd, current, next) -> {
                boolean even = !nhInput.value().isEmpty() && Integer.parseInt(nhInput.value()) % 2 == 0;
                if (even) {
                    nhForm.clearAlerts();
                    nhInput.resetValidation();
                    nhHelper.firstItem().status(default_);
                } else {
                    if (!isAttached(nhAlert)) {
                        nhForm.addAlert(nhAlert);
                    }
                    nhInput.validated(error);
                    nhHelper.firstItem().status(error);
                }
                return even;
            };

            // ------------------------------------------------------ (p)revious (h)andler

            String phId = "wizard-hap-ph";
            TextInput phInput = textInput(number, phId).value("3");
            HelperText phHelper = helperText("Enter an odd number");
            FormAlert phAlert = formAlert().addAlert(alert(danger, "Invalid number")
                    .addDescription("Please enter an odd number"));
            Form phForm = form()
                    .addGroup(formGroup(phId)
                            .addLabel(formGroupLabel("Number"))
                            .addControl(formGroupControl()
                                    .add(phInput)
                                    .add(phHelper)));
            WizardStepPreviousHandler ph = (wzd, current, next) -> {
                boolean odd = !phInput.value().isEmpty() && Integer.parseInt(phInput.value()) % 2 != 0;
                if (odd) {
                    phForm.clearAlerts();
                    phInput.resetValidation();
                    phHelper.firstItem().status(default_);
                } else {
                    if (!isAttached(phAlert)) {
                        phForm.addAlert(phAlert);
                    }
                    phInput.validated(error);
                    phHelper.firstItem().status(error);
                }
                return odd;
            };

            // ------------------------------------------------------ cooking steps

            String[] steps = new String[]{
                    "Chopping the ingredients 🔪",
                    "Heating up the pan 🔥",
                    "Throwing everything together 🍳",
                    "Letting it simmer for a bit ⏳",
                    "Tasting and adjusting the seasoning 😋",
                    "Plating it nicely 🍽",
                    "Dinner is served ✅"
            };

            // ------------------------------------------------------ (n)ext (p)romise

            int[] npIndex = new int[1];
            double[] npHandle = new double[1];
            double[] npInterval = new double[]{1200};
            Switch npSwitch = switch_("wizard-hap-np", "wizard-hap-np", true)
                    .label("Be a good chef.");
            HTMLContainerBuilder<HTMLElement> npMs = span();
            Slider npSpeed = slider()
                    .value(npInterval[0])
                    .range(200, 2000, 200)
                    .showTicks(false)
                    .showBoundaries(false)
                    .onChange((e, c, value) -> {
                        npInterval[0] = value;
                        npMs.text(value + " ms");
                    });
            EmptyStateBody npBody = emptyStateBody();
            EmptyState npEmptyState = emptyState().size(xs).addBody(npBody);
            WizardStepEnterHandler npEnter = (wzd, step) -> {
                npEmptyState.clearStatus().icon(utensils()).text("I'm hungry");
                npBody.text("Think of your favorite meal and press 'Next'.");
            };
            WizardStepNextPromise np = (wzd, current, next) -> {
                npIndex[0] = 0;
                boolean success = npSwitch.value();
                int end = success ? steps.length : 3 + (int) (Math.random() * (steps.length - 3));
                npEmptyState.clearStatus().spinner().text("I'm hungry.");
                return new Promise<>((resolve, reject) -> {
                    npHandle[0] = setInterval((__) -> {
                        npBody.text(steps[npIndex[0]++]);
                        if (npIndex[0] > end) {
                            clearInterval(npHandle[0]);
                            if (!success) {
                                npEmptyState.status(danger).text("The chef failed");
                                npBody.text("Try again later.");
                            }
                            resolve.onInvoke(success);
                        }
                    }, npInterval[0]);
                });
            };

            // ------------------------------------------------------ (p)revious (p)romise

            int[] ppIndex = new int[1];
            double[] ppHandle = new double[1];
            double[] ppInterval = new double[]{1200};
            Switch ppSwitch = switch_("wizard-hap-pp", "wizard-hap-pp", true)
                    .label("Be a good chef.");
            HTMLContainerBuilder<HTMLElement> ppMs = span();
            Slider ppSpeed = slider()
                    .value(npInterval[0])
                    .range(200, 2000, 200)
                    .showTicks(false)
                    .showBoundaries(false)
                    .onChange((e, c, value) -> {
                        ppInterval[0] = value;
                        ppMs.text(value + " ms");
                    });
            EmptyStateBody ppBody = emptyStateBody();
            EmptyState ppEmptyState = emptyState().size(xs).addBody(ppBody);
            WizardStepEnterHandler ppEnter = (wzd, step) -> {
                ppEmptyState.clearStatus().icon(utensils()).text("I'm hungry");
                ppBody.text("Think of your favorite meal and press 'Back'.");
            };
            WizardStepPreviousPromise pp = (wzd, current, next) -> {
                ppIndex[0] = 0;
                boolean success = ppSwitch.value();
                int end = success ? steps.length : 3 + (int) (Math.random() * (steps.length - 3));
                ppEmptyState.clearStatus().spinner().text("I'm hungry.");
                return new Promise<>((resolve, reject) -> {
                    ppHandle[0] = setInterval((__) -> {
                        ppBody.text(steps[ppIndex[0]++]);
                        if (ppIndex[0] > end) {
                            clearInterval(ppHandle[0]);
                            if (!success) {
                                ppEmptyState.status(danger).text("The chef failed");
                                ppBody.text("Try again later.");
                            }
                            resolve.onInvoke(success);
                        }
                    }, ppInterval[0]);
                });
            };

            // ------------------------------------------------------ enter and leave handlers

            DateTimeFormat dtf = new DateTimeFormat(navigator.language, DateTimeFormatOptions.create().timeStyle(medium));
            HTMLContainerBuilder<HTMLElement> ehTime = strong("n/a");
            WizardStepEnterHandler eh = (wzd, step) -> ehTime.text(dtf.format(new JsDate()));
            HTMLContainerBuilder<HTMLElement> lhTime = strong("n/a");
            WizardStepLeaveHandler lh = (wzd, step) -> lhTime.text(dtf.format(new JsDate()));

            // ------------------------------------------------------ wizard and step components

            return div()
                    .add(wizard().height(450)
                            .onStepChange((wzd, previous, current) -> {
                                if (previous == null) {
                                    console.log("Step changed to '%s'", current.identifier());
                                } else {
                                    console.log("Step changed from '%s' to '%s'",
                                            previous.identifier(), current.identifier());
                                }
                            })
                            .addItem(wizardStep("wizard-hap-step-nh", "Next handler")
                                    .add(content(p).editorial()
                                            .add("This step has a ")
                                            .add(Elements.code("WizardStepNextHandler"))
                                            .add(" that returns ")
                                            .add(Elements.code("true"))
                                            .add(" if the number is even."))
                                    .add(content(p).editorial()
                                            .add("This prevents a next step from being executed as long as the number is not even."))
                                    .add(nhForm)
                                    .nextIf(nh))
                            .addItem(wizardStep("wizard-hap-step-np", "Next promise")
                                    .add(flex().direction(column).gap(md)
                                            .addItem(flexItem()
                                                    .add(content(p).editorial()
                                                            .add("This step has a ")
                                                            .add(Elements.code("WizardStepNextPromise"))
                                                            .add(" that simulates cooking a meal and you can decide whether you get something to eat or not."))
                                                    .add(flex().direction(row).gap(md).alignItems(center)
                                                            .addItem(flexItem().add(npSwitch))
                                                            .addItem(flexItem().flex(_1)
                                                                    .add(flex().direction(row).gap(sm).alignItems(center)
                                                                            .addItem(flexItem().add("Cooking speed: "))
                                                                            .addItem(flexItem().flex(_1).add(npSpeed))
                                                                            .addItem(flexItem().add(npMs))))))
                                            .addItem(flexItem().add(npEmptyState)))
                                    .onEnter(npEnter)
                                    .nextIfPromised(np))
                            .addItem(wizardStep("wizard-hap-step-ph", "Previous handler")
                                    .add(content(p).editorial()
                                            .add("This step has a ")
                                            .add(Elements.code("WizardStepPreviousHandler"))
                                            .add(" that returns ")
                                            .add(Elements.code("true"))
                                            .add(" if the number is odd."))
                                    .add(content(p).editorial()
                                            .add("This prevents a previous step from being executed as long as the number is not odd."))
                                    .add(phForm)
                                    .previousIf(ph))
                            .addItem(wizardStep("wizard-hap-step-pp", "Previous promise")
                                    .add(flex().direction(column).gap(md)
                                            .addItem(flexItem()
                                                    .add(content(p).editorial()
                                                            .add("This step has a ")
                                                            .add(Elements.code("WizardStepPreviousPromise"))
                                                            .add(" that simulates cooking a meal and you can decide whether you get something to eat or not."))
                                                    .add(flex().direction(row).gap(md).alignItems(center)
                                                            .addItem(flexItem().add(ppSwitch))
                                                            .addItem(flexItem().flex(_1)
                                                                    .add(flex().direction(row).gap(sm).alignItems(center)
                                                                            .addItem(flexItem().add("Cooking speed: "))
                                                                            .addItem(flexItem().flex(_1).add(ppSpeed))
                                                                            .addItem(flexItem().add(ppMs))))))
                                            .addItem(flexItem().add(ppEmptyState)))
                                    .onEnter(ppEnter)
                                    .previousIfPromised(pp))
                            .addItem(wizardStep("wizard-hap-step-eh", "Enter handler")
                                    .add(content(p).editorial()
                                            .add("This step has a ")
                                            .add(Elements.code("WizardStepEnterHandler"))
                                            .add(" that logs the time when you've entered this step."))
                                    .add(content(p).editorial()
                                            .add("Step entered at ")
                                            .add(ehTime))
                                    .onEnter(eh))
                            .addItem(wizardStep("wizard-hap-step-lh", "Leave handler")
                                    .add(content(p).editorial()
                                            .add("This step has a ")
                                            .add(Elements.code("WizardStepLeaveHandler"))
                                            .add(" that logs the time when you've left this step."))
                                    .add(content(p).editorial()
                                            .add("Step left at ")
                                            .add(lhTime))
                                    .onLeave(lh))
                            .addItem(wizardStep("wizard-hap-step-rvw", "Review", review)
                                    .add(bullseye().addItem(bullseyeItem().add(emptyState().size(xs)
                                            .icon(birthdayCake())
                                            .text("Congratulations!")
                                            .addBody(emptyStateBody().add(content(p).editorial()
                                                    .text("You have successfully completed all steps."))))))))
                    .element();
            // @code-end:wizard-hap
        }));

        startApiDocs(Wizard.class);
        addApiDoc(Wizard.class, component);
        addApiDoc(WizardContext.class, other);
        addApiDoc(WizardFooter.class, subcomponent);
        addApiDoc(WizardHeader.class, subcomponent);
        addApiDoc(WizardHeaderDescription.class, subcomponent);
        addApiDoc(WizardHeaderTitle.class, subcomponent);
        addApiDoc(WizardNav.class, subcomponent);
        addApiDoc(WizardNavItem.class, subcomponent);
        addApiDoc(WizardStep.class, subcomponent);
        addApiDoc(WizardStepChangeHandler.class, other);
        addApiDoc(WizardStepEnterHandler.class, other);
        addApiDoc(WizardStepLeaveHandler.class, other);
        addApiDoc(WizardStepNextHandler.class, other);
        addApiDoc(WizardStepNextPromise.class, other);
        addApiDoc(WizardStepPreviousHandler.class, other);
        addApiDoc(WizardStepPreviousPromise.class, other);
        addApiDoc(WizardStepType.class, other);
    }
}
