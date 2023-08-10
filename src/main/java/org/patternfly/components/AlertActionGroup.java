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
package org.patternfly.components;

import org.jboss.elemento.ElementBuilder;
import org.jboss.elemento.HtmlContent;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.Constants.actionGroup;
import static org.patternfly.resources.Constants.alert;

public class AlertActionGroup extends ElementBuilder<HTMLDivElement, AlertActionGroup>
        implements HtmlContent<HTMLDivElement, AlertActionGroup> {

    public static AlertActionGroup alertActionGroup() {
        return new AlertActionGroup();
    }

    AlertActionGroup() {
        super(div().css(component(alert, actionGroup)).element());
    }

    @Override
    public AlertActionGroup that() {
        return this;
    }

}
