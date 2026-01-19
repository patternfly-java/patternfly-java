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
import org.patternfly.component.numberinput.NumberInput;
import org.patternfly.component.numberinput.UnitPosition;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.ValidationStatus.error;
import static org.patternfly.component.ValidationStatus.success;
import static org.patternfly.component.ValidationStatus.warning;
import static org.patternfly.component.numberinput.NumberInput.numberInput;
import static org.patternfly.component.numberinput.UnitPosition.before;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.other;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/number-input", title = "Number input")
public class NumberInputComponent extends SnippetPage {

    public NumberInputComponent() {
        super(components.get("number-input"));

        startExamples();

        // Default
        addSnippet(new Snippet("number-input-default", "Default",
                code("number-input-default"), () ->
                // @code-start:number-input-default
                div()
                        .add(numberInput(90).onBlur((e, c, v) -> {
                            console.log("blur");
                        }).onChange((e, c, v) -> {
                            console.log("change");
                        }))
                        .element()
        // @code-end:number-input-default
        ));

        // With unit
        addSnippet(new Snippet("number-input-with-unit", "With unit",
                code("number-input-with-unit"), () ->
                // @code-start:number-input-with-unit
                div()
                        .add(numberInput(90)
                                .unit("%"))
                        .add(br())
                        .add(br())
                        .add(numberInput(90)
                                .unit("$", before))
                        .element()
        // @code-end:number-input-with-unit
        ));

        // With unit and thresholds
        addSnippet(new Snippet("number-input-with-unit-and-thresholds", "With unit and thresholds",
                "To enable a user entered value to snap to the nearest threshold if the entered input is out of bounds, define the blur event handler",
                code("number-input-with-unit-and-thresholds"), () -> {
                    // @code-start:number-input-with-unit-and-thresholds

                    NumberInput numberInput = numberInput(0)
                            .min(0)
                            .max(10)
                            .unit("%");

                    return div()
                            .add(" With a minimum value of 0 and maximum value of 10")
                            .add(br())
                            .add(numberInput)
                            .element();
                    // @code-end:number-input-with-unit-and-thresholds
                }));

        // Disabled
        addSnippet(new Snippet("number-input-disabled", "Disabled",
                code("number-input-disabled"), () ->
                // @code-start:number-input-disabled
                div()
                        .add(numberInput(100)
                                .disabled(true))
                        .element()
        // @code-end:number-input-disabled
        ));

        // With status
        addSnippet(new Snippet("number-input-with-status", "With status",
                code("number-input-with-status"), () -> {
                    // @code-start:number-input-with-status
                    NumberInput statusInput = numberInput(5)
                            .validated(success)
                            .onChange((e, component, value) -> {
                                double distance = Math.abs(value - 5);
                                if (distance == 0) {
                                    component.validated(success);
                                } else if (distance <= 2) {
                                    component.validated(warning);
                                } else {
                                    component.validated(error);
                                }
                            });
                    return div()
                            .add(statusInput)
                            .element();
                    // @code-end:number-input-with-status
                }));

        // Varying sizes
        addSnippet(new Snippet("number-input-varying-sizes", "Varying sizes",
                code("number-input-varying-sizes"), () ->
                // @code-start:number-input-varying-sizes
                div()
                        .add(numberInput(1).widthChars(1))
                        .add(br())
                        .add(br())
                        .add(numberInput(1234567890).widthChars(10))
                        .add(br())
                        .add(br())
                        .add(numberInput(5).widthChars(5))
                        .add(br())
                        .add(br())
                        .add(numberInput(12345).widthChars(5))
                        .element()
        // @code-end:number-input-varying-sizes
        ));

        // Custom increment/decrement
        addSnippet(new Snippet("number-input-custom-increment-decrement", "Custom increment/decrement",
                code("number-input-custom-increment-decrement"), () ->
                // @code-start:number-input-custom-increment-decrement
                div()
                        .add(numberInput(90).step(3))
                        .element()
        // @code-end:number-input-custom-increment-decrement
        ));

        // Custom increment/decrement and thresholds
        addSnippet(new Snippet("number-input-custom-increment-decrement-thresholds",
                "Custom increment/decrement and thresholds",
                code("number-input-custom-increment-decrement-thresholds"), () ->
                // @code-start:number-input-custom-increment-decrement-thresholds
                div()
                        .add(numberInput(90)
                                .min(90)
                                .max(100)
                                .step(3))
                        .element()
        // @code-end:number-input-custom-increment-decrement-thresholds
        ));

        startApiDocs(NumberInput.class);
        addApiDoc(NumberInput.class, component);
        addApiDoc(UnitPosition.class, other);
    }
}
