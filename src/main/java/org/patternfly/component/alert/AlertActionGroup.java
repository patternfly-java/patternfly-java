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
package org.patternfly.component.alert;

import org.patternfly.component.ComponentType;
import org.patternfly.component.SubComponent;
import org.patternfly.component.button.Button;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.ComponentStore.lookupComponent;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.layout.Classes.actionGroup;
import static org.patternfly.layout.Classes.component;

public class AlertActionGroup extends SubComponent<HTMLDivElement, AlertActionGroup> {

    // ------------------------------------------------------ factory

    public static AlertActionGroup alertActionGroup() {
        return new AlertActionGroup();
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "aag";

    private Alert alert;

    AlertActionGroup() {
        super(div().css(component(Classes.alert, actionGroup)).element(), ComponentType.Alert, SUB_COMPONENT_NAME);
    }

    // ------------------------------------------------------ add

    public AlertActionGroup addAction(String action) {
        return addAction(button(action).inline().link(), null);
    }

    public AlertActionGroup addAction(String action, ComponentHandler<Alert> handler) {
        return addAction(button(action).inline().link(), handler);
    }

    public AlertActionGroup addAction(Button action) {
        return addAction(action, null);
    }

    public AlertActionGroup addAction(Button action, ComponentHandler<Alert> handler) {
        if (handler != null) {
            action.on(click, e -> handler.handle(e, lookupComponent(ComponentType.Alert, element())));
        }
        return add(action);
    }

    // ------------------------------------------------------ builder

    @Override
    public AlertActionGroup that() {
        return this;
    }
}
