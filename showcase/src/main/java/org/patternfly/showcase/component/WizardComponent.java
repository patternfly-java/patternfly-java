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

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.router.Route;
import org.patternfly.component.Severity;
import org.patternfly.component.form.TextInput;
import org.patternfly.component.help.HelperTextItem;
import org.patternfly.component.progress.Progress;
import org.patternfly.component.wizard.Wizard;
import org.patternfly.component.wizard.WizardContext;
import org.patternfly.component.wizard.WizardFooter;
import org.patternfly.component.wizard.WizardHeader;
import org.patternfly.component.wizard.WizardHeaderDescription;
import org.patternfly.component.wizard.WizardHeaderTitle;
import org.patternfly.component.wizard.WizardNav;
import org.patternfly.component.wizard.WizardNavItem;
import org.patternfly.component.wizard.WizardStepNextHandler;
import org.patternfly.component.wizard.WizardStepPreviousHandler;
import org.patternfly.component.wizard.WizardStep;
import org.patternfly.component.wizard.WizardStepType;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import elemental2.core.JsRegExp;
import elemental2.dom.HTMLElement;

import static elemental2.dom.DomGlobal.clearInterval;
import static elemental2.dom.DomGlobal.setInterval;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.ValidationStatus.default_;
import static org.patternfly.component.ValidationStatus.error;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.emptystate.EmptyState.emptyState;
import static org.patternfly.component.emptystate.EmptyStateActions.emptyStateActions;
import static org.patternfly.component.emptystate.EmptyStateBody.emptyStateBody;
import static org.patternfly.component.emptystate.EmptyStateFooter.emptyStateFooter;
import static org.patternfly.component.form.Form.form;
import static org.patternfly.component.form.FormGroup.formGroup;
import static org.patternfly.component.form.FormGroupControl.formGroupControl;
import static org.patternfly.component.form.FormGroupLabel.formGroupLabel;
import static org.patternfly.component.form.TextInput.textInput;
import static org.patternfly.component.help.HelperText.helperText;
import static org.patternfly.component.help.HelperTextItem.helperTextItem;
import static org.patternfly.component.progress.MeasureLocation.outside;
import static org.patternfly.component.progress.Progress.progress;
import static org.patternfly.component.wizard.Wizard.wizard;
import static org.patternfly.component.wizard.WizardStep.wizardStep;
import static org.patternfly.component.wizard.WizardStepType.review;
import static org.patternfly.component.wizard.WizardStepType.summary;
import static org.patternfly.icon.IconSets.fas.cogs;
import static org.patternfly.layout.bullseye.Bullseye.bullseye;
import static org.patternfly.layout.bullseye.BullseyeItem.bullseyeItem;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.showcase.component.NotYetImplemented.nyi;
import static org.patternfly.style.Size.lg;

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

        addSnippet(new Snippet("wizard-focus", "Focus content on next/back",
                code("wizard-focus"), () ->
                // @code-start:wizard-focus
                div().add(nyi()).element()
                // @code-end:wizard-focus
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

        addSnippet(new Snippet("wizard-anchors", "Anchors for nav items",
                code("wizard-anchors"), () ->
                // @code-start:wizard-anchors
                div().add(nyi()).element()
                // @code-end:wizard-anchors
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

        addSnippet(new Snippet("wizard-expandable", "Expandable steps",
                code("wizard-expandable"), () ->
                // @code-start:wizard-expandable
                div().add(nyi()).element()
                // @code-end:wizard-expandable
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

        startApiDocs(Wizard.class);
        addApiDoc(Wizard.class, component);
        addApiDoc(WizardContext.class, other);
        addApiDoc(WizardFooter.class, subcomponent);
        addApiDoc(WizardHeader.class, subcomponent);
        addApiDoc(WizardHeaderDescription.class, subcomponent);
        addApiDoc(WizardHeaderTitle.class, subcomponent);
        addApiDoc(WizardNav.class, subcomponent);
        addApiDoc(WizardNavItem.class, subcomponent);
        addApiDoc(WizardStepNextHandler.class, other);
        addApiDoc(WizardStepPreviousHandler.class, other);
        addApiDoc(WizardStep.class, subcomponent);
        addApiDoc(WizardStepType.class, other);
    }
}
