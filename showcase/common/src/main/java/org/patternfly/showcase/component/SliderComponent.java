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

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.jboss.elemento.router.Route;
import org.patternfly.component.slider.Slider;
import org.patternfly.component.slider.SliderActions;
import org.patternfly.component.slider.SliderInputPosition;
import org.patternfly.component.slider.SliderStep;
import org.patternfly.component.slider.SliderSteps;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import elemental2.dom.HTMLElement;

import static elemental2.dom.DomGlobal.setTimeout;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.small;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.form.TextInput.textInput;
import static org.patternfly.component.form.TextInputType.number;
import static org.patternfly.component.inputgroup.InputGroup.inputGroup;
import static org.patternfly.component.inputgroup.InputGroupItem.inputGroupItem;
import static org.patternfly.component.inputgroup.InputGroupText.inputGroupText;
import static org.patternfly.component.slider.Slider.slider;
import static org.patternfly.component.slider.SliderActions.sliderActions;
import static org.patternfly.component.slider.SliderInputPosition.aboveThumb;
import static org.patternfly.component.slider.SliderStep.sliderStep;
import static org.patternfly.component.slider.SliderSteps.sliderSteps;
import static org.patternfly.icon.IconSets.fas.lock;
import static org.patternfly.icon.IconSets.fas.lockOpen;
import static org.patternfly.icon.IconSets.fas.minus;
import static org.patternfly.icon.IconSets.fas.plus;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@SuppressWarnings("unchecked")
@Route(value = "/components/slider", title = "Slider")
public class SliderComponent extends SnippetPage {

    public SliderComponent() {
        super(components.get("slider"));

        startExamples();
        addSnippet(new Snippet("slider-discrete", "Discrete",
                code("slider-discrete"), () -> {
            // @code-start:slider-discrete
            HTMLContainerBuilder<HTMLElement>[] values = new HTMLContainerBuilder[]{span(), span(), span(), span(), span(),
                    span(), span()};
            return div()
                    .add(p().add("Slider value is ").add(values[0]))
                    .add(slider()
                            .value(50)
                            .customSteps(sliderSteps(
                                    sliderStep(0d),
                                    sliderStep(12.5, "1", true),
                                    sliderStep(25d, "2"),
                                    sliderStep(37.5, "3", true),
                                    sliderStep(50d, "4"),
                                    sliderStep(62.5, "5", true),
                                    sliderStep(75d, "6"),
                                    sliderStep(87.5, "7", true),
                                    sliderStep(100d, "8")))
                            .onChange((e, s, v) -> values[0].textContent(String.valueOf(v))))
                    .add(br())
                    .add(p().add("Slider value is ").add(values[1]))
                    .add(small().add("(min = 0, max = 200, step = 50)"))
                    .add(slider()
                            .value(50)
                            .range(0, 200, 50)
                            .showTicks()
                            .onChange((e, s, v) -> values[1].textContent(String.valueOf(v))))
                    .add(br())
                    .add(p().add("Slider value is ").add(values[2]))
                    .add(small().add("(min = -25, max = 75, step = 10, boundaries not shown)"))
                    .add(slider()
                            .value(25)
                            .range(-25, 75, 10)
                            .showTicks()
                            .showBoundaries(false)
                            .onChange((e, s, v) -> values[2].textContent(String.valueOf(v))))
                    .add(br())
                    .add(p().add("Slider value is ").add(values[3]))
                    .add(small().add("(min = -25, max = 75, step = 10, boundaries shown)"))
                    .add(slider()
                            .value(50)
                            .range(-25, 75, 10)
                            .showTicks()
                            .onChange((e, s, v) -> values[3].textContent(String.valueOf(v))))
                    .add(br())
                    .add(p().add("Slider value is ").add(values[4]))
                    .add(small().add("(min = -25, max = 75, step = 10, boundaries shown, ticks not shown)"))
                    .add(slider()
                            .value(50)
                            .range(-25, 75, 10)
                            .onChange((e, s, v) -> values[4].textContent(String.valueOf(v))))
                    .add(br())
                    .add(p().add("Slider value is ").add(values[5]))
                    .add(small().add("(max = 5, custom steps)"))
                    .add(slider()
                            .value(3)
                            .showTicks()
                            .customSteps(sliderSteps(
                                    sliderStep(0, "A"),
                                    sliderStep(1, "B"),
                                    sliderStep(2, "C"),
                                    sliderStep(3, "D"),
                                    sliderStep(4, "E"),
                                    sliderStep(5, "F")))
                            .onChange((e, s, v) -> values[5].textContent(String.valueOf(v))))
                    .add(br())
                    .add(p().add("Slider value is ").add(values[6]))
                    .add(small().add("(min = 12, max = 86, custom steps with non linear data)"))
                    .add(slider()
                            .value(25)
                            .showTicks()
                            .customSteps(sliderSteps(
                                    sliderStep(12),
                                    sliderStep(15),
                                    sliderStep(25),
                                    sliderStep(54),
                                    sliderStep(67),
                                    sliderStep(86)))
                            .onChange((e, s, v) -> values[6].textContent(String.valueOf(v))))
                    .add(br())
                    .element();
            // @code-end:slider-discrete
        }));

        addSnippet(new Snippet("slider-continuous", "Continuous",
                code("slider-continuous"), () -> {
            // @code-start:slider-continuous
            HTMLContainerBuilder<HTMLElement>[] values = new HTMLContainerBuilder[]{span(), span()};
            return div()
                    .add(p().add("Slider value is ").add(values[0]))
                    .add(slider()
                            .value(50)
                            .onChange((e, s, v) -> values[0].textContent(String.valueOf(v))))
                    .add(br())
                    .add(p().add("Slider value is ").add(values[1]))
                    .add(small().add("(with tooltip over thumb)"))
                    .add(slider()
                            .value(50)
                            .toolTipOnThumb()
                            .customSteps(true, sliderSteps(
                                    sliderStep(0, "0%"),
                                    sliderStep(100, "100%")))
                            .onChange((e, s, v) -> values[1].textContent(String.valueOf(v))))
                    .element();
            // @code-end:slider-continuous
        }));

        addSnippet(new Snippet("slider-value-input", "Value input",
                code("slider-value-input"), () ->
                // @code-start:slider-value-input
                div()
                        .add(slider()
                                .value(62.5)
                                .customSteps(sliderSteps(
                                        sliderStep(0d),
                                        sliderStep(12.5, "1", true),
                                        sliderStep(25d, "2"),
                                        sliderStep(37.5, "3", true),
                                        sliderStep(50d, "4"),
                                        sliderStep(62.5, "5", true),
                                        sliderStep(75d, "6"),
                                        sliderStep(87.5, "7", true),
                                        sliderStep(100d, "8")))
                                .addValueInput(textInput(number, Id.unique())))
                        .add(br())
                        .add(slider()
                                .value(50)
                                .customSteps(sliderSteps(
                                        sliderStep(0, "0%"),
                                        sliderStep(25, "25%", true),
                                        sliderStep(50, "50%"),
                                        sliderStep(75, "75%", true),
                                        sliderStep(100, "100%")))
                                .addValueInput(inputGroup()
                                        .addItem(inputGroupItem().fill()
                                                .addFormControl(textInput(number, Id.unique())))
                                        .addText(inputGroupText("%"))))
                        .add(br())
                        .add(slider()
                                .value(50)
                                .addValueInput(inputGroup()
                                        .addItem(inputGroupItem().fill()
                                                .addFormControl(textInput(number, Id.unique())))
                                        .addText(inputGroupText("%"))))
                        .element()
                // @code-end:slider-value-input
        ));

        addSnippet(new Snippet("slider-thumb-value-input", "Thumb value input",
                code("slider-thumb-value-input"), () ->
                // @code-start:slider-thumb-value-input
                div()
                        .add(slider()
                                .value(50)
                                .addValueInput(inputGroup()
                                        .addItem(inputGroupItem().fill()
                                                .addFormControl(textInput(number, Id.unique())))
                                        .addText(inputGroupText("%")), aboveThumb))
                        .element()
                // @code-end:slider-thumb-value-input
        ));

        addSnippet(new Snippet("slider-actions", "Actions",
                code("slider-actions"), () -> {
            // @code-start:slider-actions
            Slider slider0 = slider();
            Slider slider1 = slider();
            HTMLContainerBuilder<HTMLElement> value = span();

            return div()
                    .add(p().add("Slider value is ").add(value))
                    .add(slider0
                            .value(50)
                            .addStartActions(sliderActions()
                                    .addAction(button().plain().icon(minus)
                                            .on(click, e -> slider0.decrease())))
                            .addEndActions(sliderActions()
                                    .addAction(button().plain().icon(plus)
                                            .on(click, e -> slider0.increase())))
                            .onChange((e, s, v) -> value.textContent(String.valueOf(v))))
                    .add(br())
                    .add(slider1
                            .value(50)
                            .addValueInput(inputGroup()
                                    .addItem(inputGroupItem().fill()
                                            .addFormControl(textInput(number, Id.unique())))
                                    .addText(inputGroupText("%")))
                            .addEndActions(sliderActions()
                                    .addAction(button().plain().icon(lockOpen).style("width", "16px")
                                            .onClick((event, button) -> {
                                                slider1.disabled(!slider1.isDisabled());
                                                if (slider1.isDisabled()) {
                                                    button.icon(lock);
                                                } else {
                                                    button.icon(lockOpen);
                                                }
                                            }), false)))
                    .element();
            // @code-end:slider-actions
        }));

        addSnippet(new Snippet("slider-disabled", "Discrete",
                code("slider-disabled"), () -> {
            // @code-start:slider-disabled
            Slider slider = slider();
            HTMLContainerBuilder<HTMLElement> value = span();
            setTimeout(__ -> slider.value(50), 333);
            return div()
                    .add(p().add("Slider value is ").add(value))
                    .add(slider
                            .disabled()
                            .customSteps(sliderSteps(
                                    sliderStep(0d),
                                    sliderStep(12.5, "1", true),
                                    sliderStep(25d, "2"),
                                    sliderStep(37.5, "3", true),
                                    sliderStep(50d, "4"),
                                    sliderStep(62.5, "5", true),
                                    sliderStep(75d, "6"),
                                    sliderStep(87.5, "7", true),
                                    sliderStep(100d, "8")))
                            .onChange((e, s, v) -> value.textContent(s.currentStep().label)))
                    .element();
            // @code-end:slider-disabled
        }));

        startApiDocs(Slider.class);
        addApiDoc(Slider.class, component);
        addApiDoc(SliderActions.class, subcomponent);
        addApiDoc(SliderInputPosition.class, other);
        addApiDoc(SliderStep.class, other);
        addApiDoc(SliderSteps.class, other);
    }
}
