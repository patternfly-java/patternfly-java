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
package org.patternfly.component.tooltip;

import java.util.function.Consumer;

import elemental2.dom.HTMLElement;

import static elemental2.dom.DomGlobal.setTimeout;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.patternfly.component.tooltip.Tooltip.tooltip;

public class TooltipToggle {

    private static final double CALCULATE_WIDTH_TIMEOUT = 333;

    public final HTMLElement textElement;
    public Tooltip tooltip;

    public TooltipToggle(HTMLElement textElement) {
        this.textElement = textElement;
    }

    public void eval() {
        eval(null, null);
    }

    public void eval(Consumer<Tooltip> afterEnable, Consumer<Tooltip> beforeDisable) {
        // use a little timeout to get the correct widths
        setTimeout(__ -> {
            boolean enableTooltip = textElement.offsetWidth < textElement.scrollWidth;
            if (enableTooltip) {
                if (tooltip == null) {
                    // no tooltip -> create
                    tooltip = tooltip(textElement, textElement.textContent).appendToBody();
                } else {
                    // just update text
                    tooltip.text(textElement.textContent);
                }
                if (afterEnable != null) {
                    afterEnable.accept(tooltip);
                }
            } else {
                if (tooltip != null) {
                    if (beforeDisable != null) {
                        beforeDisable.accept(tooltip);
                    }
                    stop();
                }
            }
        }, CALCULATE_WIDTH_TIMEOUT);
    }

    public void stop() {
        failSafeRemoveFromParent(tooltip);
        tooltip = null;
    }
}
