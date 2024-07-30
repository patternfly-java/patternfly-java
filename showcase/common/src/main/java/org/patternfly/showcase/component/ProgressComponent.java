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

import org.jboss.elemento.Id;
import org.jboss.elemento.router.Route;
import org.patternfly.component.help.HelperText;
import org.patternfly.component.progress.MeasureLocation;
import org.patternfly.component.progress.Progress;
import org.patternfly.component.progress.ProgressLabel;
import org.patternfly.core.Tuple;
import org.patternfly.core.Tuples;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.style.Status;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.form.Radio.radio;
import static org.patternfly.component.help.HelperText.helperText;
import static org.patternfly.component.list.DescriptionList.descriptionList;
import static org.patternfly.component.list.DescriptionListDescription.descriptionListDescription;
import static org.patternfly.component.list.DescriptionListGroup.descriptionListGroup;
import static org.patternfly.component.list.DescriptionListTerm.descriptionListTerm;
import static org.patternfly.component.progress.MeasureLocation.inside;
import static org.patternfly.component.progress.MeasureLocation.none;
import static org.patternfly.component.progress.MeasureLocation.outside;
import static org.patternfly.component.progress.Progress.progress;
import static org.patternfly.core.Tuples.tuples;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.modifier;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Size.sm;
import static org.patternfly.style.Status.danger;
import static org.patternfly.style.Status.info;
import static org.patternfly.style.Status.success;
import static org.patternfly.style.Status.warning;

@Route(value = "/components/progress", title = "Progress")
public class ProgressComponent extends SnippetPage {

    public ProgressComponent() {
        super(components.get("progress"));

        startExamples();
        addSnippet(new Snippet("progress-basic", "Basic",
                code("progress-basic"), () ->
                // @code-start:progress-basic
                div()
                        .add(progress()
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-basic
        ));

        addSnippet(new Snippet("progress-small", "Small",
                code("progress-small"), () ->
                // @code-start:progress-small
                div()
                        .add(progress().size(sm)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-small
        ));

        addSnippet(new Snippet("progress-large", "Large",
                code("progress-large"), () ->
                // @code-start:progress-large
                div()
                        .add(progress().size(lg)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-large
        ));

        addSnippet(new Snippet("progress-outside", "Outside",
                code("progress-outside"), () ->
                // @code-start:progress-outside
                div()
                        .add(progress().measureLocation(outside)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-outside
        ));

        addSnippet(new Snippet("progress-inside", "Inside",
                code("progress-inside"), () ->
                // @code-start:progress-inside
                div()
                        .add(progress()
                                .measureLocation(inside)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-inside
        ));

        addSnippet(new Snippet("progress-success", "Success",
                code("progress-success"), () ->
                // @code-start:progress-success
                div()
                        .add(progress().status(success)
                                .title("Title")
                                .value(100))
                        .element()
                // @code-end:progress-success
        ));

        addSnippet(new Snippet("progress-failure", "Failure",
                code("progress-failure"), () ->
                // @code-start:progress-failure
                div()
                        .add(progress().status(danger)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-failure
        ));

        addSnippet(new Snippet("progress-warning", "Warning",
                code("progress-warning"), () ->
                // @code-start:progress-warning
                div()
                        .add(progress().status(warning)
                                .title("Title")
                                .value(90))
                        .element()
                // @code-end:progress-warning
        ));

        addSnippet(new Snippet("progress-inside-success", "Inside success",
                code("progress-inside-success"), () ->
                // @code-start:progress-inside-success
                div()
                        .add(progress()
                                .status(success)
                                .measureLocation(inside)
                                .title("Title")
                                .value(100))
                        .element()
                // @code-end:progress-inside-success
        ));

        addSnippet(new Snippet("progress-outside-failure", "Outside failure",
                code("progress-outside-failure"), () ->
                // @code-start:progress-outside-failure
                div()
                        .add(progress().status(danger)
                                .measureLocation(outside)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-outside-failure
        ));

        addSnippet(new Snippet("progress-single-line", "Single line",
                code("progress-single-line"), () ->
                // @code-start:progress-single-line
                div()
                        .add(progress().measureLocation(outside)
                                .value(33))
                        .element()
                // @code-end:progress-single-line
        ));

        addSnippet(new Snippet("progress-no-measure", "Without measure",
                code("progress-no-measure"), () ->
                // @code-start:progress-no-measure
                div()
                        .add(progress().measureLocation(none)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-no-measure
        ));

        addSnippet(new Snippet("progress-no-measure-failure", "Failure without measure",
                code("progress-no-measure-failure"), () ->
                // @code-start:progress-no-measure-failure
                div()
                        .add(progress().status(danger)
                                .measureLocation(none)
                                .title("Title")
                                .value(33))
                        .element()
                // @code-end:progress-no-measure-failure
        ));

        addSnippet(new Snippet("progress-finite-step", "Finite step",
                code("progress-finite-step"), () ->
                // @code-start:progress-finite-step
                div()
                        .add(progress()
                                .label((min, max, step, value) -> value + " of " + max)
                                .range(0, 5)
                                .title("Title")
                                .value(2))
                        .element()
                // @code-end:progress-finite-step
        ));

        addSnippet(new Snippet("progress-step-instruction", "Progress with step instructions",
                code("progress-step-instruction"), () -> {
            // @code-start:progress-step-instruction
            Tuples<Integer, String> instructions = tuples(
                    0, "Preparing",
                    1, "Collecting files",
                    2, "Copying files",
                    3, "Verifying files",
                    4, "Restarting server",
                    5, "Cleanup");
            return div()
                    .add(progress()
                            .label((min, max, step, value) -> "Step " + value + ": " + instructions.value(value))
                            .range(0, 5)
                            .title("Title")
                            .value(2))
                    .element();
            // @code-end:progress-step-instruction
        }));

        addSnippet(new Snippet("progress-truncate", "Truncate",
                code("progress-truncate"), () ->
                // @code-start:progress-truncate
                div()
                        .add(progress()
                                .title(LoremIpsum.words(42))
                                .truncate()
                                .value(33))
                        .element()
                // @code-end:progress-truncate
        ));

        addSnippet(new Snippet("progress-outer-title", "Title outside of progress bar",
                code("progress-outer-title"), () ->
                // @code-start:progress-outer-title
                div()
                        .add(descriptionList()
                                .addItem(descriptionListGroup("progress-outer-title-0")
                                        .addTerm(descriptionListTerm("Title outside of progress bar")
                                                .id("title-outside-progress-example-label"))
                                        .addDescription(descriptionListDescription()
                                                .add(progress()
                                                        .ariaLabeledBy("title-outside-progress-example-label")
                                                        .measureLocation(outside)
                                                        .value(33)))))
                        .element()
                // @code-end:progress-outer-title
        ));

        addSnippet(new Snippet("progress-helper-text", "Helper text",
                code("progress-helper-text"), () -> {
            // @code-start:progress-helper-text
            Tuples<Status, String> status = tuples(
                    info, "Default variant",
                    success, "Success variant",
                    warning, "Warning variant",
                    danger, "Danger variant"
            );
            Progress progress = progress();
            HelperText helperText = helperText("Default variant is being displayed");

            return div()
                    .run(div -> {
                        for (Tuple<Status, String> tuple : status) {
                            div.add(radio(Id.build("progress-helper-text", tuple.key.name()),
                                    "progress-helper-text-status",
                                    tuple.value)
                                    .value(tuple.key == info)
                                    .onChange((event, component, value) -> {
                                        progress.status(tuple.key);
                                        helperText.firstItem().text(tuple.value + " is being displayed");
                                    }));
                        }
                    })
                    .add(br())
                    .add(progress
                            .title("Title")
                            .value(33)
                            .addHelperText(helperText))
                    .element();
            // @code-end:progress-helper-text
        }));

        startApiDocs(Progress.class);
        addApiDoc(MeasureLocation.class, modifier);
        addApiDoc(Progress.class, component);
        addApiDoc(ProgressLabel.class, subcomponent);
    }
}
